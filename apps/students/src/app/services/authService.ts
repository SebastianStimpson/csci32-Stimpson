export class AuthService {
  private baseUrl = process.env.NEXT_PUBLIC_API_URL || ''

  async login(email: string, password: string): Promise<{ token: string }> {
    const response = await fetch(`${this.baseUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    return response.json()
  }

  async register(user: { name: string; email: string; password: string; role: 'student' | 'teacher' }): Promise<void> {
    await fetch(`${this.baseUrl}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
  }

  async getProfile(): Promise<{ name: string; email: string; role: 'student' | 'teacher' }> {
    const response = await fetch(`${this.baseUrl}/auth/profile`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    return response.json()
  }
}

export const authService = new AuthService()
