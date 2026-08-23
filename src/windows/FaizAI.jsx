import { useEffect, useRef, useState } from "react";
import { Bot, Send, Sparkles, User } from "lucide-react";
import { RESUME_DATA } from "#constants";

const INITIAL_MESSAGE = "Hello! I'm Mohammad's AI twin. Ask me about his Spring Boot expertise, PropertyHub, or API performance work.";

const FaizAI = () => {
  const [messages, setMessages] = useState([{ role: "assistant", content: INITIAL_MESSAGE }]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const chatEndRef = useRef(null);

  const askFaiz = () => {
    const question = input.trim();
    if (!question || isThinking) return;

    setMessages((current) => [...current, { role: "user", content: question }]);
    setInput("");
    setIsThinking(true);

    window.setTimeout(() => {
      const lowerQuestion = question.toLowerCase();
      let response = "Mohammad has extensive full-stack experience. Open Finder to explore his work and career history.";

      if (lowerQuestion.includes("spring") || lowerQuestion.includes("java")) {
        response = `${RESUME_DATA.profile.name} used Spring WebFlux at RateGain to handle 30M+ daily requests and builds services with Java and Spring Boot.`;
      } else if (lowerQuestion.includes("contact") || lowerQuestion.includes("hire")) {
        response = "You can reach Mohammad at faizrabbani08@gmail.com. Open the Contact app to connect with him.";
      } else if (lowerQuestion.includes("latency") || lowerQuestion.includes("performance")) {
        response = "He reduced query response times by 40% with Elasticsearch and Redis caching, and improved API response time by about 30%.";
      } else if (lowerQuestion.includes("propertyhub")) {
        response = "At PropertyHub, Mohammad helped maintain 99.9% uptime for a real estate platform supporting 10k+ concurrent users.";
      }

      setMessages((current) => [...current, { role: "assistant", content: response }]);
      setIsThinking(false);
    }, 650);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isThinking]);

  return (
    <div className="faiz-ai-app">
      <div className="faiz-ai-header"><Sparkles size={16} /><span>FaizAI / Personal Engineering Assistant</span></div>
      <div className="faiz-ai-messages">
        {messages.map((message, index) => (
          <div className={`faiz-ai-message ${message.role}`} key={`${message.role}-${index}`}>
            {message.role === "assistant" ? <Bot size={18} /> : <User size={18} />}
            <p>{message.content}</p>
          </div>
        ))}
        {isThinking && <div className="faiz-ai-thinking"><Bot size={18} /> Thinking...</div>}
        <div ref={chatEndRef} />
      </div>
      <div className="faiz-ai-input-row">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && askFaiz()}
          placeholder="Ask FaizAI anything..."
          aria-label="Ask FaizAI"
        />
        <button type="button" onClick={askFaiz} aria-label="Send question"><Send size={18} /></button>
      </div>
    </div>
  );
};

export default FaizAI;