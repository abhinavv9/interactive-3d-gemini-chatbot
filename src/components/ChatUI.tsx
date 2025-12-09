import React, { useState, useEffect, useRef } from 'react';
import './ChatUI.css';

interface Message {
  text: string;
  sender: 'user' | 'gemini';
}

interface ChatUIProps {
  messages: Message[];
  input: string;
  setInput: (input: string) => void;
  onSendMessage: () => void;
  isLoading: boolean;
}

const ChatUI: React.FC<ChatUIProps> = ({ messages, input, setInput, onSendMessage, isLoading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => { 
    scrollToBottom();
  }, [messages]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent default Enter behavior (like new line)
      onSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <div className="message-bubble">
              {msg.text.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input-area">
        <textarea
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask Gemini..."
          rows={3}
          disabled={isLoading}
        />
        <button
          className="send-button"
          onClick={onSendMessage}
          disabled={isLoading || input.trim() === ''}
        >
          {isLoading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default ChatUI;
