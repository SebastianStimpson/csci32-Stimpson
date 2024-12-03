import { useState, useEffect } from 'react'
import { notificationService } from '../services/NotificationService'

export function useNotifications(userId: string) {
  const [notifications, setNotifications] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const fetchedNotifications = await notificationService.getNotifications(userId)
        setNotifications(fetchedNotifications)
      } catch (error) {
        console.error('Error fetching notifications:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchNotifications()
  }, [userId])

  return { notifications, loading }
}
