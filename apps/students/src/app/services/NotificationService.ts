class NotificationService {
  async getNotifications(userId: string) {
    // Fetch notifications from the server
    const response = await fetch(`/api/notifications?userId=${userId}`)
    if (!response.ok) {
      throw new Error('Failed to fetch notifications')
    }
    return await response.json()
  }

  async markAsRead(notificationId: string) {
    // Mark notification as read on the server
    const response = await fetch(`/api/notifications/${notificationId}/read`, {
      method: 'POST',
    })
    if (!response.ok) {
      throw new Error('Failed to mark notification as read')
    }
    return await response.json()
  }
}

export const notificationService = new NotificationService()
