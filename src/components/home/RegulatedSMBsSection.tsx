import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileCode, Cog, FileText, Search } from "lucide-react";

export function RegulatedSMBsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const outcomes = [
    {
      icon: FileCode,
      title: "Secure internal tools",
      description: "Custom applications built with security controls from day one."
    },
    {
      icon: Cog,
      title: "Process automation",
      description: "Automated workflows that reduce manual error and create audit trails."
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "System documentation that satisfies regulators and supports your team."
    },
    {
      icon: Search,
      title: "Security review",
      description: "Independent review of your systems before they go live."
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-slate-900">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold sm:text-3xl text-white">
              Regulated SMBs
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Custom software and automation for high-risk environments. We work with finance, healthcare, and legal teams that need to move fast without creating compliance exposure.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Speed and safety coexist when systems are designed correctly from the start.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <Button 
                asChild
                className="bg-teal hover:bg-teal-dark text-white font-medium"
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Book a systems consult
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Outcomes grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {outcomes.map((outcome, index) => {
              const Icon = outcome.icon;
              return (
                <motion.div
                  key={outcome.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="p-5 rounded-lg bg-slate-800 border border-slate-700"
                >
                  <Icon className="w-5 h-5 text-teal" />
                  <h3 className="mt-3 text-base font-medium text-white">
                    {outcome.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                    {outcome.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
