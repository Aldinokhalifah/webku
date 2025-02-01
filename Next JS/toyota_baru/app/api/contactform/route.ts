// app/api/contactform/route.ts
import { NextResponse } from 'next/server'
import sendgrid from '@sendgrid/mail'

// Validasi environment variables dengan pesan error yang jelas
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const RECEIVER_EMAIL = process.env.MY_APP_EMAIL_RECEIVER_ONE as string
const SENDER_EMAIL = process.env.MY_APP_EMAIL_SENDER as string

if (!SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY tidak ditemukan di environment variables')
}

if (!SENDER_EMAIL) {
    throw new Error('MY_APP_EMAIL_SENDER tidak ditemukan di environment variables')
}

if (!RECEIVER_EMAIL) {
    throw new Error('MY_APP_EMAIL_RECEIVER_ONE tidak ditemukan di environment variables')
}

// Set API key
sendgrid.setApiKey(SENDGRID_API_KEY)

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, phone, message } = body

        // Validasi input
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: 'Semua field harus diisi' },
                { status: 400 }
            )
        }

        const msg = {
            to: RECEIVER_EMAIL,
            from: {
                email: SENDER_EMAIL,
                name: 'Rangga Toyota' // Ganti dengan nama website/perusahaan Anda
            },
            subject: `Pesan Baru dari ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2>Pesan Baru dari Form Kontak</h2>
                    <p><strong>Nama:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Telepon:</strong> ${phone}</p>
                    <p><strong>Pesan:</strong></p>
                    <p>${message}</p>
                </div>
            `,
        } 

        try {
            const [response] = await sendgrid.send(msg)
            
            // Log response status untuk debugging
            console.log('SendGrid Response Status:', response.statusCode)
            
            if (response.statusCode >= 200 && response.statusCode < 300) {
                return NextResponse.json({ success: true })
            } else {
                throw new Error(`SendGrid returned status code: ${response.statusCode}`)
            }
        } catch (error) {
            // Log detailed error for debugging
            console.error('SendGrid Error Details:', {
                message: (error as Error).message,
                
            })

            // if (error.response?.body?.errors) {
            //     const errorMessage = error.response.body.errors.map((err: { message: string }) => err.message).join(', ')
            //     return NextResponse.json(
            //         { error: `SendGrid Error: ${errorMessage}` },
            //         { status: error.code || 500 }
            //     )
            // }

            return NextResponse.json(
                { error: 'Gagal mengirim email. Silakan coba lagi nanti.' },
                { status: 500 }
            )
        }
    } catch (error) {
        console.error('General Error:', error)
        return NextResponse.json(
            { error: 'Terjadi kesalahan server' },
            { status: 500 }
        )
    }
}