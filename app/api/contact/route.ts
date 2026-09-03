import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const defaultRecipients = ['abdullahshaikh085@gmail.com', 'sarmadalishaikh@gmail.com']

function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }
  return new Resend(apiKey)
}

function getRecipients() {
  const configuredRecipients = process.env.CONTACT_TO_EMAIL
    ?.split(',')
    .map((address) => address.trim())
    .filter(Boolean)

  return configuredRecipients?.length ? configuredRecipients : defaultRecipients
}

function escapeHtml(value: string) {
  const entities: Record<string, string> = {
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }
  return value.replace(/[&<>'"]/g, (character) => entities[character])
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, productInterest, orderDetails, website } = body

    if (typeof website === 'string' && website.trim()) {
      return NextResponse.json({ success: true })
    }

    if (
      typeof name !== 'string' || typeof email !== 'string' || typeof orderDetails !== 'string' ||
      !name.trim() || !orderDetails.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      name.length > 100 || email.length > 254 || orderDetails.length > 5000
    ) {
      return NextResponse.json(
        { error: 'Name, email and order details are required.' },
        { status: 400 }
      )
    }

    const resend = getResend()
    const toEmails = getRecipients()
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'info@stackpointerlabs.com.au'

    const { error } = await resend.emails.send({
      from: `Stackpointer Labs <${fromEmail}>`,
      to: toEmails,
      replyTo: email,
      subject: `New Inquiry from ${name.trim()} — Stackpointer Labs`,
      html: `
                <h2>New Inquiry — Stackpointer Labs</h2>
                <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
                <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
                <p><strong>Phone:</strong> ${typeof phone === 'string' ? escapeHtml(phone) : 'Not provided'}</p>
                <p><strong>Product Interest:</strong> ${typeof productInterest === 'string' ? escapeHtml(productInterest) : 'Not specified'}</p>
                <p><strong>Order Details:</strong><br/>${escapeHtml(orderDetails.trim())}</p>
            `
    })

    if (error) {
      throw new Error(error.message)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
