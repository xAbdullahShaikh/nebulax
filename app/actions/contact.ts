import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, productInterest, orderDetails } = body

    if (!name || !email || !orderDetails) {
      return NextResponse.json(
        { error: 'Name, email and order details are required.' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'NebulaX Solutions <noreply@nebulaxsolutions.com.au>',
      to: ['sarmadalishaikh@gmail.com', 'abdullahshaikh085@gmail.com'],
      replyTo: email,
      subject: `New Inquiry from ${name} — NebulaX Solutions`,
      html: `
                <h2>New Inquiry — NebulaX Solutions</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Product Interest:</strong> ${productInterest || 'Not specified'}</p>
                <p><strong>Order Details:</strong><br/>${orderDetails}</p>
            `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}