export class EmailService {
  private baseUrl = process.env.NEXT_PUBLIC_API_URL || ''

  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    await fetch(`${this.baseUrl}/email/send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to, subject, body }),
    })
  }
}

export const emailService = new EmailService()
