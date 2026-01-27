import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Layers, Shield, FileText, Users } from "lucide-react";

export function HowWeWorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Target,
      title: "Scope defined upfront",
      description: "Clear boundaries. Measurable outcomes."
    },
    {
      icon: Layers,
      title: "Built around real workflows",
      description: "Solutions that fit how work actually gets done."
    },
    {
      icon: Shield,
      title: "Security reviewed first",
      description: "Issues caught before deployment, not after."
    },
    {
      icon: FileText,
      title: "Documentation included",
      description: "Every system ships audit-ready."
    },
    {
      icon: Users,
      title: "Clear ownership",
      description: "You know who owns what and how to maintain it."
    }
  ];

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
            How We Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A structured process that delivers predictable outcomes.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.12,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="relative flex gap-5 pb-10 last:pb-0 group"
              >
                {/* Animated vertical line */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="absolute left-5 top-14 bottom-0 w-px bg-gradient-to-b from-teal/40 to-transparent"
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.12 + 0.3 }}
                    style={{ originY: 0 }}
                  />
                )}
                
                {/* Step number indicator */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div 
                    className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center group-hover:bg-teal/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className="w-5 h-5 text-teal-dark" />
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="pt-1.5">
                  <h3 className="text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
