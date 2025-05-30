import { useEffect } from 'react';
import { useChatStore } from '../store/useChatStore'
import ChatHeader from './ChatHeader';

const ChatContainer = () => {

  const { messages, selectedUser, getMessages, setSelectedUser, isMessagesLoading } = useChatStore();


  useEffect(()=>{
    getMessages(selectedUser._id)
  },[selectedUser._id,getMessages])


  if( isMessagesLoading) return <div>Loading...</div>

  return (
    <div className='flex flex-1 flex-col overflow-auto'>
      <ChatHeader/>
    </div>
  )
}

export default ChatContainer
