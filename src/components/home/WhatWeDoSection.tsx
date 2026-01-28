import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Zap, ShieldCheck } from "lucide-react";

export function WhatWeDoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const points = [
    {
      icon: AlertTriangle,
      title: "The problem",
      description: "Corporate clients audit law firms before engagement. Insurers reject applications when firms can't prove controls."
    },
    {
      icon: Zap,
      title: "What's at stake",
      description: "29% of law firms experienced a breach last year. Average cost: $5 million. Lost clients. Higher premiums."
    },
    {
      icon: ShieldCheck,
      title: "The solution",
      description: "Prove your security posture with documentation and evidence that satisfies ACC controls and insurance requirements."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-foreground">
            The Problem
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Law firms are losing clients and paying higher premiums because they can't prove their security posture.
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-6 md:gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                variants={itemVariants}
                className="relative p-8 rounded-xl bg-card border border-border card-interactive group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-light group-hover:bg-teal/20 transition-colors">
                  <Icon className="w-6 h-6 text-teal-dark" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
