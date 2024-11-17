
import React from 'react'
import './ChatBotStart.css'
function ChatBotStart({onStartChat}){
    return (
        <div className='Start-Page'>
            <button className='Start-Page-btn' title='Start' onClick={onStartChat}>CHAT AI</button>
        </div>
    );
}
export default ChatBotStart;
