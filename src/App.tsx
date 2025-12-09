import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Cube from './components/Cube';
import ChatUI from './components/ChatUI';
import { getGeminiResponse } from './services/geminiService';
import './App.css';

function App() {
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'gemini' }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const stageRef = useRef<any>(null);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const newUserMessage = { text: input, sender: 'user' as const };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const geminiResponse = await getGeminiResponse(input);
      const newGeminiMessage = { text: geminiResponse, sender: 'gemini' as const };
      setMessages((prevMessages) => [...prevMessages, newGeminiMessage]);
    } catch (error) {
      console.error("Error fetching Gemini response:", error);
      const errorMessage = { text: 'Sorry, I encountered an error.', sender: 'gemini' as const };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Optional: Auto-focus input when component mounts or messages change
  useEffect(() => {
    // Add any effects if needed, e.g., focusing the input
  }, [messages]);

  return (
    <div className="app-container">
      <div className="canvas-container">
        <Canvas shadows camera={{ position: [0, 0, 15], fov: 50 }}>
          <Stage environment="city" intensity={0.6} ref={stageRef}>
            <Cube position={[0, 0, 0]} />
            {/* Add other 3D elements here */}
          </Stage>
          <OrbitControls enableZoom={true} enablePan={true} />
        </Canvas>
      </div>
      <ChatUI 
        messages={messages} 
        input={input} 
        setInput={setInput} 
        onSendMessage={handleSendMessage} 
        isLoading={isLoading} 
      />
    </div>
  );
}

export default App;
