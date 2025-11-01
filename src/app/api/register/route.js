import { NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(request) {
  try {
    const data = await request.json()
    
    // Configuration Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    // Préparer les données
    const row = [
      new Date().toISOString(),
      data.firstName,
      data.lastName,
      data.email,
      data.phone || '',
      data.university,
      data.field,
      data.department,
      data.studyLevel || '',
      data.motivation,
      data.newsletter ? 'Yes' : 'No',
      'Pending'
    ]

    // Ajouter à Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Registrations!A:L',
      valueInputOption: 'RAW',
      requestBody: {
        values: [row],
      },
    })

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error('Google Sheets Error:', error)
    return NextResponse.json(
      { error: 'Failed to save to Google Sheets' },
      { status: 500 }
    )
  }
}
