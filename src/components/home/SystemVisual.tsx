import { motion } from "framer-motion";
import { Shield, Database, Lock, CheckCircle, Workflow, FileCheck } from "lucide-react";

export function SystemVisual() {
  const blocks = [
    { icon: Shield, label: "Security", delay: 0.3 },
    { icon: Database, label: "Data", delay: 0.4 },
    { icon: Lock, label: "Access", delay: 0.5 },
    { icon: CheckCircle, label: "Compliance", delay: 0.6 },
    { icon: Workflow, label: "Automation", delay: 0.7 },
    { icon: FileCheck, label: "Docs", delay: 0.8 },
  ];

  return (
    <div className="relative aspect-square max-w-lg mx-auto">
      {/* Outer ring glow */}
      <motion.div
        className="absolute inset-4 rounded-full border border-teal/10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      
      {/* Middle ring with pulse */}
      <motion.div
        className="absolute inset-12 rounded-full border border-teal/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Central hub */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-gradient-to-br from-teal/30 to-teal/10 border border-teal/40 flex items-center justify-center backdrop-blur-sm"
      >
        <motion.div 
          className="w-14 h-14 rounded-xl bg-teal flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Shield className="w-7 h-7 text-white" />
        </motion.div>
      </motion.div>

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        {blocks.map((_, index) => {
          const angle = (index * 60 - 90) * (Math.PI / 180);
          const x = 200 + Math.cos(angle) * 130;
          const y = 200 + Math.sin(angle) * 130;
          
          return (
            <motion.line
              key={index}
              x1="200"
              y1="200"
              x2={x}
              y2={y}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: blocks[index].delay - 0.1 }}
            />
          );
        })}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(187 45% 35% / 0.5)" />
            <stop offset="100%" stopColor="hsl(187 45% 35% / 0.2)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Orbiting blocks */}
      {blocks.map((block, index) => {
        const angle = (index * 60 - 90) * (Math.PI / 180);
        const x = 50 + Math.cos(angle) * 32.5;
        const y = 50 + Math.sin(angle) * 32.5;
        const Icon = block.icon;
        
        return (
          <motion.div
            key={block.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: block.delay,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="absolute w-16 h-16 -ml-8 -mt-8 flex flex-col items-center justify-center group"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <motion.div 
              className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg group-hover:border-teal/50 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Icon className="w-5 h-5 text-teal" />
            </motion.div>
            <span className="mt-2 text-xs text-slate-400 font-medium opacity-80 group-hover:opacity-100 transition-opacity">{block.label}</span>
          </motion.div>
        );
      })}

      {/* Subtle glow effect */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-teal/8 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
