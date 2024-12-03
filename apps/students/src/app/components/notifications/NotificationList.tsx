import { FC } from 'react'
import { useNotifications } from '../../hooks/useNotifications'
import { notificationService } from '../../services/NotificationService'

interface Props {
  userId: string
}

export const NotificationList: FC<Props> = ({ userId }) => {
  const { notifications, loading } = useNotifications(userId)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {notifications.length === 0 ? (
        <div>No notifications</div>
      ) : (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>
              {notification.message}
              <button onClick={() => notificationService.markAsRead(notification.id)}>Mark as read</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
