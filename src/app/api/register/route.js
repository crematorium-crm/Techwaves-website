import { NextResponse } from 'next/server'
import { writeFile, appendFile, mkdir } from 'fs/promises'
import path from 'path'
import fs from 'fs'

export async function POST(request) {
  console.log('🚀 API Route appelée!')
  
  try {
    const formData = await request.json()
    console.log('📨 Données reçues:', formData)
    
    // AJOUT: Inclure university et field dans les champs requis
    const requiredFields = ['firstName', 'lastName', 'email', 'department', 'motivation', 'university', 'field']
    const missingFields = requiredFields.filter(field => !formData[field])
    
    if (missingFields.length > 0) {
      console.log('❌ Champs manquants:', missingFields)
      return NextResponse.json(
        { error: `Missing fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    // Préparer les données avec les nouveaux champs
    const registrationData = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...formData,
      status: 'pending',
      interviewScheduled: false
    }

    console.log('💾 Données à sauvegarder:', registrationData)

    // Créer le dossier data
    const dataDir = path.join(process.cwd(), 'data_resgister')
    console.log('📁 Dossier data:', dataDir)
    
    try {
      await mkdir(dataDir, { recursive: true })
      console.log('✅ Dossier data créé/vérifié')
    } catch (dirError) {
      console.error('❌ Erreur dossier:', dirError)
    }

    // Chemin du fichier JSON
    const filePath = path.join(dataDir, 'registrations.json')
    console.log('📄 Fichier JSON:', filePath)

    // Lire ou créer le fichier
    let existingData = []
    try {
      if (fs.existsSync(filePath)) {
        console.log('📖 Fichier existe, lecture...')
        const fileContent = await fs.promises.readFile(filePath, 'utf8')
        existingData = JSON.parse(fileContent)
        console.log(`📊 ${existingData.length} inscriptions existantes`)
      } else {
        console.log('🆕 Fichier n existe pas, création...')
      }
    } catch (readError) {
      console.error('❌ Erreur lecture:', readError)
    }

    // Ajouter nouvelle inscription
    existingData.push(registrationData)
    console.log('➕ Nouvelle inscription ajoutée')

    // Sauvegarder
    try {
      await writeFile(filePath, JSON.stringify(existingData, null, 2))
      console.log('💾 Fichier JSON sauvegardé')
    } catch (writeError) {
      console.error('❌ Erreur sauvegarde JSON:', writeError)
    }

    // Sauvegarder en CSV
    try {
      await saveToCSV(registrationData)
      console.log('📊 Fichier CSV mis à jour')
    } catch (csvError) {
      console.error('❌ Erreur CSV:', csvError)
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Application submitted successfully!',
        id: registrationData.id
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('💥 Erreur générale:', error)
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    )
  }
}

// Mettre à jour la fonction saveToCSV avec les nouveaux champs
async function saveToCSV(data) {
  try {
    const csvDir = path.join(process.cwd(), 'data_resgister')
    const csvPath = path.join(csvDir, 'registrations.csv')
    
    const csvLine = [
      data.id,
      data.timestamp,
      `"${data.firstName}"`,
      `"${data.lastName}"`,
      `"${data.email}"`,
      data.phone || '',
      `"${data.university}"`,          // AJOUT: University
      `"${data.field}"`,               // AJOUT: Field of Study
      `"${data.department}"`,
      data.studyLevel || '',
      `"${data.motivation.replace(/"/g, '""')}"`,
      data.newsletter ? 'yes' : 'no',
      data.status
    ].join(',') + '\n'

    if (!fs.existsSync(csvPath)) {
      // AJOUT: University et Field dans l'en-tête
      const header = 'ID,Timestamp,First Name,Last Name,Email,Phone,University,Field of Study,Department,Study Level,Motivation,Newsletter,Status\n'
      await writeFile(csvPath, header)
    }

    await appendFile(csvPath, csvLine)
  } catch (error) {
    console.error('❌ Erreur sauvegarde CSV:', error)
    throw error
  }
}

export async function GET() {
  console.log('📭 GET request reçue')
  try {
    const filePath = path.join(process.cwd(), 'data', 'registrations.json')
    
    if (!fs.existsSync(filePath)) {
      console.log('📭 Aucun fichier trouvé, retourne tableau vide')
      return NextResponse.json([])
    }

    const fileContent = await fs.promises.readFile(filePath, 'utf8')
    const data = JSON.parse(fileContent)
    console.log(`📊 ${data.length} inscriptions retournées`)
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('❌ Erreur GET:', error)
    return NextResponse.json(
      { error: 'Read error' },
      { status: 500 }
    )
  }
}
