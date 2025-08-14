import { useState, useRef, useEffect, useCallback } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface Message {
  type: 'user' | 'system';
  content: string;
  timestamp: Date;
}

export const Terminal = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'system',
      content: 'Welcome to Afaq Ahmad\'s terminal! Type "help" for available commands.',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  const getResponse = (command: string): string => {
    const cmd = command.toLowerCase().trim();
    
    const responses: { [key: string]: string } = {
      'help': 'Available commands: about, skills, experience, education, projects, contact, funn, date, ls,  clear',
      'about': 'I\'m Afaq Ahmad, a passionate full-stack developer with 3+ years of experience building modern web applications.',
      'skills': 'Technologies: React, Node.js, Python, PostgreSQL, MongoDB, RAGS, nlp, cv, neural networks ...',
      'experience': 'Built projects including e-commerce platforms, SaaS applications, mobile apps and AI-Models ',
      'education': 'Computer Science background with focus on Artificial Intelligence from GIKI',
      'projects': 'Recent projects: E-commerce platform with React/Node.js, Stocks Forcasting with AI, video classification with cnn-rnn model ...',
      'contact': 'Email: malakafaqahmad@gmail.com',
      'clear': 'CLEAR_TERMINAL',
      'whoami': 'afaq@dev:~$ You are chatting with 0x61666171',
      'pwd': '/home/afaq/portfolio',
      'ls': 'about.txt  skills.txt  projects/  contact.txt',
      'date': new Date().toLocaleString(),
      'funn': 'There are only 10 kinds of people in this world: those who know binary and those who don’t.',
      'iloveu': 'I love you too, but as a friend.',
    };

    return responses[cmd] || `Command not found: ${command}. Type "help" for available commands.`;
  };

  const simulateTyping = (response: string) => {
    setIsTyping(true);
    setTimeout(() => {
      if (response === 'CLEAR_TERMINAL') {
        setMessages([{
          type: 'system',
          content: 'Terminal cleared. Welcome back!',
          timestamp: new Date()
        }]);
      } else {
        setMessages(prev => [...prev, {
          type: 'system',
          content: response,
          timestamp: new Date()
        }]);
      }
      setIsTyping(false);
    }, Math.random() * 1000 + 500);
  };

  const handleCommand = useCallback(() => {
    if (!input.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    const response = getResponse(input);
    simulateTyping(response);
    
    setInput('');
  }, [input]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand();
    } else if (e.key === 'Backspace') {
      e.preventDefault();
      setInput(prev => prev.slice(0, -1));
    } else if (e.key.length === 1) {
      e.preventDefault();
      setInput(prev => prev + e.key);
    }
  }, [handleCommand]);

  const handleTerminalClick = () => {
    setIsInputFocused(true);
    hiddenInputRef.current?.focus();
  };

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      if (!terminalRef.current?.contains(e.target as Node)) {
        setIsInputFocused(false);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  useEffect(() => {
    if (isInputFocused) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isInputFocused, handleKeyDown]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div 
        ref={terminalRef}
        className="bg-card border border-border rounded-lg overflow-hidden shadow-card cursor-text"
        onClick={handleTerminalClick}
      >
        {/* Hidden input for keyboard capture */}
        <input
          ref={hiddenInputRef}
          className="absolute -left-[9999px] opacity-0"
          onBlur={() => setIsInputFocused(false)}
          onFocus={() => setIsInputFocused(true)}
        />

        {/* Terminal Header */}
        <div className="bg-muted border-b border-border px-4 py-2 flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
          </div>
          <span className="font-hacker text-sm text-muted-foreground ml-4">
            afaq@dev:~$
          </span>
        </div>

        {/* Terminal Body */}
        <ScrollArea className="bg-background h-80">
          <div className="bg-background p-4 font-hacker text-sm">
            {messages.map((message, index) => (
              <div key={index} className="mb-2">
                <div className="flex items-start space-x-2">
                  <span className="text-primary text-xs">
                    [{formatTime(message.timestamp)}]
                  </span>
                  <span className={`text-xs ${
                    message.type === 'user' ? 'text-blue-400' : 'text-primary'
                  }`}>
                    {message.type === 'user' ? 'user' : 'system'}:
                  </span>
                </div>
                <div className={`pl-4 ${
                  message.type === 'user' 
                    ? 'text-blue-400' 
                    : 'text-foreground'
                }`}>
                  <span className="text-primary">$</span> {message.content}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="bg-background flex items-center space-x-2 text-primary mb-2">
                <span className="text-xs">[{formatTime(new Date())}] system:</span>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            )}

            {/* Current input line */}
            <div className="bg-background flex items-center space-x-2">
              <span className="text-primary text-xs">
                [{formatTime(new Date())}]
              </span>
              <span className="text-blue-400 text-xs">user:</span>
            </div>
            <div className="pl-4 text-blue-400 flex items-center">
              <span className="text-primary">$</span>
              <span className="ml-1">{input}</span>
              {isInputFocused && (
                <span className="ml-0.5 w-2 h-4 bg-primary animate-pulse"></span>
              )}
            </div>


            <div className="fixed bottom-2 left-0 w-full text-center text-xs text-muted-foreground font-hacker">
              All programmers are playwrights, and all computers are lousy actors.
            </div>

          </div>
        </ScrollArea>
        
      </div>
      <div className="flex justify-center py-8">
        <Badge
          variant="secondary"
          className="bg-primary/10 text-primary border-primary/20 animate-glow"
        >
          I whisper to the bugs, and they whisper back to me.
        </Badge>
      </div>
    </div>
  );
};