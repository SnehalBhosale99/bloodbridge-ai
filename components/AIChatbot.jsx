import { useState } from "react";

function AIChatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I am BloodBridge AI. How can I help you with blood donation information?",
    },
  ]);

  const [input, setInput] = useState("");
  const [showQuestions, setShowQuestions] = useState(true);

  const quickQuestions = [
    "What is blood donation?",
    "Who can donate?",
    "Before donation",
    "After donation",
  ];

  function getAIResponse(question) {
    const message = question.toLowerCase();

    if (message.includes("what is blood donation")) {
      return "Blood donation is the process of voluntarily giving blood so it can help patients who need blood during medical treatment, surgery, or emergencies.";
    }

    if (message.includes("who can donate") || message.includes("eligibility")) {
      return "Generally, a healthy adult who meets the required age, weight, health, and screening requirements may be eligible to donate blood. Eligibility rules can vary by location and donation center.";
    }

    if (message.includes("before donation") || message.includes("preparation")) {
      return "Before donating, eat a healthy meal, drink enough water, get proper sleep, and carry valid identification if required. Follow the instructions given by the donation center.";
    }

    if (message.includes("after donation") || message.includes("recovery")) {
      return "After donation, rest for a few minutes, drink fluids, eat a snack, and avoid heavy exercise for the period recommended by the donation center. Contact a healthcare professional if you feel unwell.";
    }

    if (message.includes("blood group") || message.includes("a+")) {
      return "A+ is a common blood group. A positive red blood cells can generally be donated to A+ and AB+ recipients. Blood compatibility should always be confirmed by medical professionals.";
    }

    if (message.includes("how often") || message.includes("frequency")) {
      return "Donation frequency depends on the type of donation, your health, and local guidelines. Always follow the schedule recommended by an authorized blood donation center.";
    }

    return "I can help with general blood donation information. You can ask about donor eligibility, preparation, recovery, blood groups, or donation frequency.";
  }

  function sendMessage(question = input) {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      return;
    }

    const userMessage = {
      sender: "user",
      text: trimmedQuestion,
    };

    const aiMessage = {
      sender: "ai",
      text: getAIResponse(trimmedQuestion),
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
      aiMessage,
    ]);

    setInput("");
    setShowQuestions(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage();
  }

  return (
    <section className="chatbot-container">
      <div className="chatbot-header">
        <div className="chatbot-icon">✦</div>

        <div>
          <h2>BloodBridge AI</h2>
          <p>Blood donation information assistant</p>
        </div>
      </div>

      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${
              message.sender === "user" ? "user-message" : "ai-message"
            }`}
          >
            <div className="message-name">
              {message.sender === "user" ? "You" : "BloodBridge AI"}
            </div>

            <div className="message-text">{message.text}</div>
          </div>
        ))}

        {showQuestions && (
          <div className="quick-questions">
            <p>Quick questions:</p>

            <div className="question-buttons">
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendMessage(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <form className="chatbot-input-area" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask a blood donation question..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <button type="submit">Ask Question</button>
      </form>
    </section>
  );
}

export default AIChatbot;