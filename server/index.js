const express = require('express')
const cors = require('cors')
const { Resend } = require('resend')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json({ limit: '50kb' }))

app.get('/api/health', (req, res) => {
  res.status(200).json({ ok: true })
})

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body || {}

    if (typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({ ok: false, error: 'Invalid name' })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (typeof email !== 'string' || !emailRegex.test(email)) {
      return res.status(400).json({ ok: false, error: 'Invalid email' })
    }

    if (typeof message !== 'string' || message.trim().length < 10 || message.length > 5000) {
      return res.status(400).json({ ok: false, error: 'Invalid message' })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL

    if (!resendApiKey || !toEmail || !fromEmail) {
      return res.status(500).json({ ok: false, error: 'Server email is not configured' })
    }

    const resend = new Resend(resendApiKey)

    const subject = `New message from ${name}`
    const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject,
      text
    })

    if (error) {
      return res.status(500).json({ ok: false, error: 'Failed to send email' })
    }

    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ ok: false, error: 'Unexpected server error' })
  }
})

const port = process.env.PORT || 5000
const startServer = (p, attemptsLeft = 10) => {
  const server = app.listen(p, () => {
    console.log(`Server listening on ${p}`)
  })

  server.on('error', (err) => {
    if (err && err.code === 'EADDRINUSE' && attemptsLeft > 0) {
      const nextPort = Number(p) + 1
      console.warn(`Port ${p} is in use, retrying on ${nextPort}...`)
      startServer(nextPort, attemptsLeft - 1)
      return
    }
    console.error('Failed to start server:', err)
    process.exit(1)
  })
}

startServer(port)
