'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utility function
function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Simple Icons
const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
)

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
)

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const Loader = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
  </svg>
)

// Main Register Component
export default function Register() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)

  const departments = [
    "IT & Development",
    "Graphic Design",
    "Marketing & Public Relations",
    "Content Creation & Events",
    "Organization & Logistics",
    "Photography & Video Editing"
  ]

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: '',
    field: '',
    department: '',
    studyLevel: '',
    motivation: '',
    newsletter: false
  })

  const steps = [
    { id: 'personal', title: 'Personal Info' },
    { id: 'academic', title: 'Academic Info' },
    { id: 'motivation', title: 'Motivation' }
  ]

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.firstName.trim() !== '' && formData.lastName.trim() !== '' && formData.email.trim() !== ''
      case 1:
        return formData.field.trim() !== '' && formData.department !== ''
      case 2:
        return formData.motivation.trim() !== ''
      default:
        return true
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setMessage('')

    const data = { ...formData }

    try {
      const netlifyResponse = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'techwaves-registration',
          ...Object.fromEntries(Object.entries(data).map(([key, value]) => [key, String(value)]))
        }).toString()
      })

      const sheetsResponse = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await sheetsResponse.json()

      if (netlifyResponse.ok && sheetsResponse.ok) {
        setMessage('✅ Application submitted successfully! We will contact you within 48 hours.')
        setIsError(false)
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', university: '',
          field: '', department: '', studyLevel: '', motivation: '', newsletter: false
        })
        setCurrentStep(0)
      } else {
        setMessage(`❌ ${result.error || 'Error while sending'}`)
        setIsError(true)
      }
    } catch (error) {
      setMessage('❌ Connection error. Please try again.')
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between mb-3">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div 
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer",
                      index < currentStep 
                        ? "bg-slate-700 text-white" 
                        : index === currentStep 
                        ? "bg-slate-700 text-white ring-4 ring-slate-700/30" 
                        : "bg-slate-800 text-slate-500"
                    )} 
                    onClick={() => { if (index <= currentStep) setCurrentStep(index) }}
                  >
                    {index < currentStep ? <Check /> : index + 1}
                  </div>
                  <span className={cn("text-xs mt-2 hidden sm:block transition-colors", index === currentStep ? "text-slate-300 font-medium" : "text-slate-500")}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-slate-600 transition-all duration-300" 
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }} 
              />
            </div>
          </div>

          {/* Form Card */}
          <div className="rounded-3xl p-8 bg-slate-900/60 backdrop-blur-sm shadow-xl border border-slate-700/50">
            <div className="text-center mb-8">
              <img src="/techwaveslogo.png" alt="Techwaves" className="h-20 w-auto mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-white mb-2">Join Techwaves</h1>
              <p className="text-slate-400">Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}</p>
            </div>

            {message && (
              <div className={cn("p-4 rounded-xl mb-6 border", isError ? 'bg-red-500/10 border-red-500/30 text-red-300' : 'bg-green-500/10 border-green-500/30 text-green-300')}>
                <p className="text-center font-medium">{message}</p>
              </div>
            )}

            <form 
              name="techwaves-registration" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field" 
              className="space-y-5" 
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="hidden" name="form-name" value="techwaves-registration" />
              <p className="hidden">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </p>

              {/* Step 1: Personal Info */}
              {currentStep === 0 && (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                        First Name *
                      </label>
                      <input 
                        id="firstName" 
                        name="firstName" 
                        type="text" 
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-slate-600 focus:border-transparent text-white placeholder-slate-500 transition-all duration-200" 
                        placeholder="John" 
                        value={formData.firstName} 
                        onChange={(e) => updateFormData('firstName', e.target.value)} 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                        Last Name *
                      </label>
                      <input 
                        id="lastName" 
                        name="lastName" 
                        type="text" 
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-slate-600 focus:border-transparent text-white placeholder-slate-500 transition-all duration-200" 
                        placeholder="Doe" 
                        value={formData.lastName} 
                        onChange={(e) => updateFormData('lastName', e.target.value)} 
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input 
                      id="email" 
                      name="email" 
                      type="email" 
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-slate-600 focus:border-transparent text-white placeholder-slate-500 transition-all duration-200" 
                      placeholder="john@example.com" 
                      value={formData.email} 
                      onChange={(e) => updateFormData('email', e.target.value)} 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-slate-600 focus:border-transparent text-white placeholder-slate-500 transition-all duration-200" 
                      placeholder="+213 XX XX XX XX" 
                      value={formData.phone} 
                      onChange={(e) => updateFormData('phone', e.target.value)} 
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Academic Info */}
              {currentStep === 1 && (
                <div className="space-y-5">
                  <div>
                    <label htmlFor="university" className="block text-sm font-medium text-slate-300 mb-2">
                      University
                    </label>
                    <input 
                      id="university" 
                      name="university" 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-slate-600 focus:border-transparent text-white placeholder-slate-500 transition-all duration-200" 
                      placeholder="Your university" 
                      value={formData.university} 
                      onChange={(e) => updateFormData('university', e.target.value)} 
                    />
                  </div>
                  <div>
                    <label htmlFor="field" className="block text-sm font-medium text-slate-300 mb-2">
                      Field of Study *
                    </label>
                    <input 
                      id="field" 
                      name="field" 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-slate-600 focus:border-transparent text-white placeholder-slate-500 transition-all duration-200" 
                      placeholder="e.g. Computer Science" 
                      value={formData.field} 
                      onChange={(e) => updateFormData('field', e.target.value)} 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-slate-300 mb-2">
                      Preferred Department *
                    </label>
                    <select 
                      id="department" 
                      name="department" 
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-slate-600 focus:border-transparent text-white transition-all duration-200 cursor-pointer" 
                      value={formData.department} 
                      onChange={(e) => updateFormData('department', e.target.value)} 
                      required
                    >
                      <option value="" className="bg-slate-800">Choose a department</option>
                      {departments.map((dept, index) => (
                        <option key={index} value={dept} className="bg-slate-800">{dept}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="studyLevel" className="block text-sm font-medium text-slate-300 mb-2">
                      Study Level
                    </label>
                    <select 
                      id="studyLevel" 
                      name="studyLevel" 
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-slate-600 focus:border-transparent text-white transition-all duration-200 cursor-pointer" 
                      value={formData.studyLevel} 
                      onChange={(e) => updateFormData('studyLevel', e.target.value)}
                    >
                      <option value="" className="bg-slate-800">Choose your level</option>
                      <option value="1st" className="bg-slate-800">1st Year</option>
                      <option value="2nd" className="bg-slate-800">2nd Year</option>
                      <option value="3rd" className="bg-slate-800">3rd Year</option>
                      <option value="4th" className="bg-slate-800">4th Year</option>
                      <option value="5th" className="bg-slate-800">5th Year</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Motivation */}
              {currentStep === 2 && (
                <div className="space-y-5">
                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium text-slate-300 mb-2">
                      Why do you want to join Techwaves? *
                    </label>
                    <textarea 
                      id="motivation" 
                      name="motivation" 
                      rows="6" 
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-slate-600 focus:border-transparent text-white placeholder-slate-500 transition-all duration-200 resize-none" 
                      placeholder="Tell us about your skills, passions, and what you hope to gain..." 
                      value={formData.motivation} 
                      onChange={(e) => updateFormData('motivation', e.target.value)} 
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                    <input 
                      id="newsletter" 
                      name="newsletter" 
                      type="checkbox" 
                      className="w-5 h-5 rounded border-slate-600 text-slate-600 focus:ring-slate-600 cursor-pointer mt-0.5 bg-slate-800" 
                      checked={formData.newsletter} 
                      onChange={(e) => updateFormData('newsletter', e.target.checked)} 
                    />
                    <label htmlFor="newsletter" className="text-sm text-slate-300 cursor-pointer">
                      I want to receive newsletters and club updates
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <button 
                  type="button" 
                  onClick={prevStep} 
                  disabled={currentStep === 0} 
                  className="px-6 py-3 rounded-xl font-medium bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <ChevronLeft /> Back
                </button>
                <button 
                  type="button" 
                  onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep} 
                  disabled={!isStepValid() || isSubmitting} 
                  className="px-6 py-3 rounded-xl font-medium bg-slate-700 text-white hover:bg-slate-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader /> Submitting...
                    </>
                  ) : currentStep === steps.length - 1 ? (
                    <>
                      Submit <Check />
                    </>
                  ) : (
                    <>
                      Next <ChevronRight />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Step indicator text */}
          <div className="mt-6 text-center text-sm text-slate-500">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
