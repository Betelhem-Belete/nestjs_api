import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import '../App.css';

const SERVER_URL = 'http://localhost:3000'; // Replace with your server URL

function Socket() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(SERVER_URL);
    setSocket(newSocket);

    newSocket.on('message', (message) => {

      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    
    if (socket && inputMessage.trim() !== '') {
      socket.emit('message', inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div className="container">
      <h1>let's Chat</h1>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="input">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Socket;
