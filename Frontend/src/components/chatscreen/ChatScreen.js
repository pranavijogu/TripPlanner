import React, { useState, useEffect, useRef } from 'react';
import './ChatScreen.css';

function ChatScreen() {
  const [inputText, setInputText] = useState('');
  const [conversation, setConversation] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [sessionId, setSessionId] = useState(null);
  const [location, setLocation] = useState('');
  const [numberOfDays, setNumberOfDays] = useState('');
  const [type, setType] = useState('');
  const [bestTimeToVisit, setBestTimeToVisit] = useState('');
  const [sampleQuestions, setSampleQuestions] = useState([]);

  const chatBottomRef = useRef(null);

  useEffect(() => {
    setSessionId(`session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);
    setSampleQuestions(generateRandomSampleQuestions());
  }, []);

  const generateRandomSampleQuestions = () => {
    const questions = [
      "What are the top 3 most popular attractions in Delhi?",
      "Which attractions are open on Mondays?",
      "Where is the best place to visit in summer?",
      "What are the must-visit places for food lovers?",
      "How can I plan a budget-friendly trip?",
      "What are the historical landmarks in India?",
      "What are the most beautiful beaches in India?",
      "Where can I experience wildlife safaris in India?"
    ];

    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, 3);
  };

  const handleSubmit = async () => {
    const messageText = inputText.trim();
    if (!messageText) return;

    const userMessage = { sender: 'user', text: messageText };
    setConversation([...conversation, userMessage]);
    setInputText('');

    // Check if it's a location, days, type, or best time question
    if (conversation.length === 1) {
      const botMessage = { sender: 'bot', text: 'Hello.Which place do you want to travel?' };
      setConversation(prev => [...prev, botMessage]);
      setLocation(messageText);
      return;
    }

    if (conversation.length === 3) {
      const botMessage = { sender: 'bot', text: 'How many days are you planning to stay?' };
      setConversation(prev => [...prev, botMessage]);
      setNumberOfDays(messageText);
      return;
    }

    if (conversation.length === 5) {
      const botMessage = { sender: 'bot', text: 'What type of attractions are you interested in?' };
      setConversation(prev => [...prev, botMessage]);
      setType(messageText);
      return;
    }

    if (conversation.length === 7) {
      const botMessage = { sender: 'bot', text: 'When is the best time for you to visit?' };
      setConversation(prev => [...prev, botMessage]);
      setBestTimeToVisit(messageText);
      return;
    }

    // When all details are collected, query the LLM
    if (location && numberOfDays && type && bestTimeToVisit) {
      try {
        const response = await fetch('https://b916-34-80-194-249.ngrok-free.app/api/model', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: `${location}, ${numberOfDays} days, ${type}, best time to visit ${bestTimeToVisit}`,
            sessionId: sessionId,
            conversation: conversation
          }),
        });

        const data = await response.json();
        const botResponse = data.response;

        const formattedResponse = formatResponse(botResponse);
        const botMessage = { sender: 'bot', text: formattedResponse };
        setConversation(prev => [...prev, botMessage]);
      } catch (error) {
        console.error('Error fetching data:', error);
        const errorMessage = { sender: 'bot', text: 'Error fetching data. Please try again later.' };
        setConversation(prev => [...prev, errorMessage]);
      }

      // Clear state after processing the query
      setLocation('');
      setNumberOfDays('');
      setType('');
      setBestTimeToVisit('');
    }

    chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSampleQuestionClick = (question) => {
    setInputText(question);
  };

  const formatResponse = response => {
    const formattedResponse = response
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove **text**
      .replace(/\*(.*?)\*/g, '$1')     // Remove *text*
      .replace(/\n/g, '<br>');         // Replace newline with <br>

    return <span dangerouslySetInnerHTML={{ __html: formattedResponse }} />;
  };

  return (
    <div className="chat-screen">
      <div className="input-section">
        <h2>Chat with AI</h2> {/* Added title */}
        <div className="input-container">
          <input
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                handleSubmit();
              }
            }}
            placeholder="Type your message here..."
          />
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
        <div className="sample-questions">
          <h3>Sample Questions:</h3>
          {sampleQuestions.map((question, index) => (
            <button key={index} onClick={() => handleSampleQuestionClick(question)}>{question}</button>
          ))}
        </div>
      </div>
      <div className="chat-container">
        <div className="chat-box">
          {conversation.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={chatBottomRef} />
        </div>
      </div>
    </div>
  );
}

export default ChatScreen;
