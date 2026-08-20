import { useEffect, useRef, useState } from "react";
import { TERMINAL_DATA } from "#constants";

const Terminal = () => {
  const [history, setHistory] = useState(
    TERMINAL_DATA.welcome.map((content) => ({ type: "output", content }))
  );
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const handleCommand = (event) => {
    if (event.key !== "Enter") return;

    const command = input.toLowerCase().trim();
    const nextHistory = [...history, { type: "input", content: `${TERMINAL_DATA.prompt} ${input}` }];

    if (command === "clear") {
      setHistory([]);
    } else if (TERMINAL_DATA.commands[command]) {
      setHistory([...nextHistory, { type: "output", content: TERMINAL_DATA.commands[command] }]);
    } else if (command) {
      setHistory([...nextHistory, { type: "output", content: `command not found: ${command}` }]);
    } else {
      setHistory(nextHistory);
    }

    setInput("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="terminal-app" onClick={() => inputRef.current?.focus()}>
      {history.map((line, index) => (
        <div className={`terminal-line ${line.type}`} key={`${line.type}-${index}`}>
          {line.content}
        </div>
      ))}
      <div className="terminal-input-row">
        <span>{TERMINAL_DATA.prompt}</span>
        <input
          ref={inputRef}
          autoFocus
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleCommand}
          aria-label="Terminal command"
        />
      </div>
      <div ref={bottomRef} />
    </div>
  );
};

export default Terminal;