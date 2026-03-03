import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, service, message } = body

    // Validate required fields
    if (!name || (!phone && !email)) {
      return NextResponse.json(
        { error: 'Name and either phone or email are required' },
        { status: 400 }
      )
    }

    const timestamp = new Date().toISOString()
    const cstTime = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })

    // Send email via AgentMail API
    const apiKey = process.env.AGENTMAIL_API_KEY
    const fromInbox = process.env.AGENTMAIL_FROM_INBOX || 'digitalmindpulse@agentmail.to'
    const toInbox = process.env.AGENTMAIL_TO_INBOX || 'lightrate394@agentmail.to'

    if (!apiKey) {
      console.error('AGENTMAIL_API_KEY not configured')
      return NextResponse.json({ 
        success: true, 
        message: 'Thanks! Mike will be in touch soon.' 
      })
    }

    // Build contact info
    const contactInfo = phone 
      ? `Phone: ${phone}${email ? `\nEmail: ${email}` : ''}`
      : `Email: ${email}`

    // URL encode the inbox ID (email address)
    const encodedInboxId = encodeURIComponent(fromInbox)
    const response = await fetch(`https://api.agentmail.to/v0/inboxes/${encodedInboxId}/messages/send`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: [toInbox],
        subject: `🔧 Mighty Mike's Lead: ${name}`,
        text: `
NEW LEAD FROM MIGHTY MIKE'S ODD JOBS
=====================================

Name: ${name}
${contactInfo}
Service: ${service || 'Not specified'}

MESSAGE:
${message || 'No message provided'}

---
Submitted: ${cstTime}
        `.trim(),
        html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #4a7c3a; border-bottom: 2px solid #4a7c3a; padding-bottom: 10px;">
    🔧 New Lead from Mighty Mike's Odd Jobs
  </h2>
  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
      <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
    </tr>
    ${phone ? `
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
      <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${phone}" style="color: #4a7c3a;">${phone}</a></td>
    </tr>
    ` : ''}
    ${email ? `
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
      <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #4a7c3a;">${email}</a></td>
    </tr>
    ` : ''}
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Service:</td>
      <td style="padding: 8px; border-bottom: 1px solid #eee;">${service || 'Not specified'}</td>
    </tr>
  </table>
  <h3 style="color: #333; margin-top: 20px;">Message:</h3>
  <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
    ${message || 'No message provided'}
  </p>
  <hr style="margin-top: 20px; border: none; border-top: 1px solid #eee;">
  <p style="color: #666; font-size: 12px;">
    Submitted: ${cstTime}
  </p>
</div>
        `.trim(),
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('AgentMail error:', errorText)
      // Still return success to user, but log the error
    } else {
      console.log('MIGHTY MIKE LEAD SENT:', { name, phone, email, timestamp })
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Thanks! Mike will be in touch soon.' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please call Mike directly at 608-403-2930.' },
      { status: 500 }
    )
  }
}
