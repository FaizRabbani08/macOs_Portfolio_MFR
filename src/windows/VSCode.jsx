import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FileCode, Folder, GitBranch, Search, Settings as SettingsIcon } from "lucide-react";

const FILES = {
  "ExperienceService.java": `package com.faiz.portfolio.service;

@Service
public class ExperienceService {
    @Autowired
    private ProjectRepository repository;

    // Optimized API response time by 30%
    public List<Experience> getProfessionalHistory() {
        return repository.findAllByOrderByStartDateDesc();
    }
}`,
  "App.jsx": `import React from 'react';
import Desktop from './components/Desktop';

const App = () => {
  return <Desktop theme="macOS-Ventura" />;
};`,
};

const VSCode = () => {
  const [activeFile, setActiveFile] = useState("ExperienceService.java");

  return (
    <div className="vscode-app">
      <aside className="vscode-activity-bar">
        <FileCode className="is-active" size={22} aria-hidden="true" />
        <Search size={22} aria-hidden="true" />
        <GitBranch size={22} aria-hidden="true" />
        <SettingsIcon className="vscode-activity-bottom" size={22} aria-hidden="true" />
      </aside>

      <aside className="vscode-sidebar">
        <p>Explorer</p>
        <div className="vscode-folder"><Folder size={14} /> src</div>
        {Object.keys(FILES).map((file) => (
          <button
            type="button"
            key={file}
            className={`vscode-file ${activeFile === file ? "is-active" : ""}`}
            onClick={() => setActiveFile(file)}
          >
            <FileCode size={14} /> {file}
          </button>
        ))}
      </aside>

      <section className="vscode-editor">
        <div className="vscode-tab">{activeFile}</div>
        <div className="vscode-code">
          <SyntaxHighlighter
            language={activeFile.endsWith(".java") ? "java" : "jsx"}
            style={atomDark}
            customStyle={{ background: "transparent", padding: "20px", margin: 0 }}
          >
            {FILES[activeFile]}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
};

export default VSCode;