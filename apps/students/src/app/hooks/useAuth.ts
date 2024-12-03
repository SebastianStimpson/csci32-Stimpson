import { useState, useEffect } from 'react'
import { authService } from '../services/authService'

export function useAuth() {
  const [user, setUser] = useState<{ name: string; email: string; role: 'student' | 'teacher' } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProfile() {
      try {
        const profile = await authService.getProfile()
        setUser(profile)
      } catch (error) {
        console.error('Error fetching profile:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  return { user, loading }
}
