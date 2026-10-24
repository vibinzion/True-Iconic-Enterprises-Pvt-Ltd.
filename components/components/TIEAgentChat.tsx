import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  ChevronRight, 
  Phone, 
  ShieldCheck, 
  RefreshCw,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';

export const TIEAgentChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(true);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialWelcomeMessages = [
    {
      id: 'welcome-1',
      role: 'assistant' as const,
      parts: [
        {
          type: 'text' as const,
          text: 'Hello! I am **TIE Agent**, the official AI assistant for **True Iconic Enterprises (Pvt) Ltd.** (SECP No: 0359617).\n\nHow can I assist your business today? Select a topic below or ask any question directly:',
        },
      ],
    },
  ];

  const {
    messages,
    sendMessage,
    status,
    error,
    regenerate,
    setMessages,
  } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
    messages: initialWelcomeMessages,
  });

  const isLoading = status === 'submitted' || status === 'streaming';

  const quickTopics = [
    { label: '💼 Manpower & Staffing', query: 'Tell me about your manpower & staffing solutions.' },
    { label: '🧹 Janitorial & Facility Care', query: 'What facility management and deep cleaning services do you provide?' },
    { label: '📋 Contract Models (Annual/Daily)', query: 'Explain your annual corporate contracts and special duties (1 day to 1 month).' },
    { label: '📞 Contact / Get a Quote', query: 'How can I get an official quotation and contact your operations desk?' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  const handleQuickAction = (queryText: string) => {
    sendMessage({ text: queryText });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    sendMessage({ text: trimmed });
    setInput('');
  };

  const handleResetChat = () => {
    setMessages(initialWelcomeMessages);
  };

  const getMessageText = (m: any): string => {
    if (typeof m.content === 'string') return m.content;
    if (Array.isArray(m.parts)) {
      return m.parts
        .filter((p: any) => p.type === 'text')
        .map((p: any) => p.text)
        .join('');
    }
    return '';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Subtle Tooltip Pill (Before Opening) */}
      {!isOpen && tooltipVisible && (
        <div className="mb-3 relative hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-tie-navy-900/95 border border-[#38BDF8]/40 shadow-[0_10px_25px_rgba(0,82,212,0.35)] text-xs text-white backdrop-blur-md animate-bounce">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D2FF]"></span>
          </span>
          <span className="font-semibold text-slate-100">
            Ask <strong className="text-sky-300 font-bold">TIE Agent</strong> AI
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setTooltipVisible(false);
            }}
            className="text-slate-400 hover:text-white ml-1 cursor-pointer"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-tie-navy-900 border-r border-b border-[#38BDF8]/40 transform rotate-45" />
        </div>
      )}

      {/* Floating 3D Action Button (TIE Logo) */}
      <div className="relative">
        {/* Glowing Ping Glow Behind */}
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#0052D4] via-[#00A8E8] to-[#00D2FF] opacity-50 blur-md animate-pulse" />
        
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setTooltipVisible(false);
          }}
          aria-label={isOpen ? "Close TIE Agent Chat" : "Open TIE Agent AI Chatbot"}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#0041A8] via-[#0052D4] to-[#00D2FF] p-1 shadow-[0_12px_32px_rgba(0,82,212,0.45),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-3px_6px_rgba(0,0,0,0.35)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group"
        >
          {/* Pulsing Status Dot */}
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 z-10">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
          </span>

          {isOpen ? (
            <X className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2.5] transition-transform group-hover:rotate-90" />
          ) : (
            <div className="w-full h-full rounded-full bg-white p-1.5 sm:p-2 flex items-center justify-center overflow-hidden shadow-inner group-hover:scale-105 transition-transform">
              <img
                src="/tie-logo.png"
                alt="True Iconic Enterprises"
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </div>
          )}
        </button>
      </div>

      {/* Glassmorphic TIE Agent Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[360px] sm:w-[420px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-7.5rem)] bg-[#07172E]/95 backdrop-blur-2xl border-2 border-[#38BDF8]/35 rounded-3xl shadow-[0_25px_60px_-10px_rgba(0,35,80,0.7)] flex flex-col overflow-hidden text-slate-100"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-[#0A2246] via-[#0052D4] to-[#0088CC] border-b border-white/10 flex items-center justify-between flex-shrink-0 relative">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white p-1 border border-white/40 flex items-center justify-center shadow-inner overflow-hidden">
                    <img
                      src="/tie-logo.png"
                      alt="TIE Agent"
                      className="w-full h-full object-contain filter drop-shadow-sm"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-['Outfit'] font-black text-base text-white tracking-wide">
                      TIE Agent
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-sky-400/20 text-sky-200 border border-sky-300/30 text-[10px] font-extrabold uppercase">
                      Gemini AI
                    </span>
                  </div>
                  <div className="text-[11px] text-sky-100 flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-3 h-3 text-sky-300" />
                    <span>SECP No: 0359617</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Restart chat"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#07172E]/90 to-[#0A1F3D]/95">
              {messages.map((msg: any) => {
                const text = getMessageText(msg);
                const isAssistant = msg.role === 'assistant';
                const hasContactKeyword = isAssistant && (
                  text.includes('03212350012') || 
                  text.toLowerCase().includes('whatsapp') || 
                  text.toLowerCase().includes('quote') ||
                  text.toLowerCase().includes('contact')
                );

                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isAssistant ? 'items-start' : 'items-end'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                        !isAssistant
                          ? 'bg-gradient-to-r from-[#0052D4] to-[#00A8E8] text-white rounded-br-none shadow-[0_4px_12px_rgba(0,82,212,0.35)]'
                          : 'bg-white/10 border border-white/15 text-slate-100 rounded-bl-none shadow-[0_4px_15px_rgba(0,0,0,0.2)]'
                      }`}
                    >
                      <div className="whitespace-pre-line">
                        {text.split('\n\n').map((paragraph, idx) => (
                          <p key={idx} className={idx > 0 ? 'mt-2' : ''}>
                            {paragraph.split('**').map((part, pIdx) =>
                              pIdx % 2 === 1 ? (
                                <strong key={pIdx} className="text-sky-300 font-bold">
                                  {part}
                                </strong>
                              ) : (
                                part
                              )
                            )}
                          </p>
                        ))}
                      </div>

                      {/* WhatsApp Desk Quick CTA when applicable */}
                      {hasContactKeyword && (
                        <div className="mt-3 pt-2.5 border-t border-white/15">
                          <a
                            href="https://wa.me/923212350012"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition-colors"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>Direct WhatsApp Desk (03212350012)</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Quick Action Suggestion Buttons (Shown when 1 message) */}
              {messages.length <= 1 && (
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">
                    Suggested Topics:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {quickTopics.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickAction(item.query)}
                        className="text-[11px] font-semibold px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-[#0052D4]/50 border border-sky-400/30 text-sky-200 hover:text-white transition-all text-left flex items-center gap-1 shadow-sm cursor-pointer"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-3 h-3 text-sky-400" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Streaming / Typing Indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 p-3 max-w-[80px] rounded-2xl bg-white/10 border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              )}

              {/* Error indicator with retry */}
              {error && (
                <div className="p-3 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-200 text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Unable to stream response.</span>
                  </div>
                  <button
                    onClick={() => regenerate()}
                    className="underline font-bold hover:text-white ml-2 cursor-pointer"
                  >
                    Retry
                  </button>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={handleFormSubmit}
              className="p-3 bg-[#051329] border-t border-white/10 flex items-center gap-2 flex-shrink-0"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask TIE Agent anything..."
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 focus:border-sky-400 focus:ring-1 focus:ring-sky-400/40 text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 rounded-xl bg-gradient-to-r from-[#0052D4] to-[#00A8E8] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(0,168,232,0.5)] transition-all cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Footer Trust Bar */}
            <div className="px-4 py-1.5 bg-[#030B17] text-[10px] text-slate-400 flex items-center justify-between border-t border-white/5 font-medium">
              <span>Service with Excellence</span>
              <span className="text-sky-400 font-mono">SECP No: 0359617</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
