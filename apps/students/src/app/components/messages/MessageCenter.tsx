import { FC, useState } from 'react'
import { Message } from '../../types/message'

interface Props {
  userId: string
  messages: Message[]
  onSendMessage: (message: Partial<Message>) => void
}

export const MessageCenter: FC<Props> = ({ userId, messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('')

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-2 m-2 rounded ${message.senderId === userId ? 'bg-blue-100 ml-auto' : 'bg-gray-100'}`}
          >
            {message.content}
          </div>
        ))}
      </div>
      <div className="border-t p-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Type a message..."
        />
      </div>
    </div>
  )
}
