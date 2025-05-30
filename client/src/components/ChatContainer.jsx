import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import ChatHeader from './ChatHeader'

export const ChatContainer = () => {
  const { messages, getMessages, isMessageLoading, selectedUser } =
    useChatStore()

  useEffect(() => {
    getMessages(selectedUser._id)
  }, [selectedUser._id, getMessages])

  if (isMessageLoading) return <div>loading</div>
  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      <p>messages ...</p>
    </div>
  )
}
