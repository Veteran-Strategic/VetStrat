import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

export function WhoThisIsForSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const idealClients = [
    "Finance, healthcare, or legal teams with compliance requirements",
    "SMBs needing custom tools but lacking development capacity",
    "Organizations that have outgrown spreadsheets and manual processes",
    "Teams preparing for audits or responding to findings",
    "Businesses where security incidents would cause real harm"
  ];

  const notAFit = [
    "Startups building consumer products with no regulatory needs",
    "Organizations prioritizing cost over quality",
    "Teams wanting to skip documentation and testing"
  ];

  return (
    <section ref={ref} className="section-padding bg-slate-50">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-foreground">
            Who This Is For
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We work best with organizations that value quality and accountability.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Ideal clients */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-xl bg-teal-light/60 border-2 border-teal/20 hover:border-teal/40 transition-colors"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal" />
              Ideal clients
            </h3>
            <ul className="space-y-4">
              {idealClients.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex gap-3 text-sm text-foreground/80"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <Check className="w-5 h-5 flex-shrink-0 text-teal" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not a fit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-xl bg-slate-100 border-2 border-slate-200/80"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-slate-400" />
              Not a fit
            </h3>
            <ul className="space-y-4">
              {notAFit.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex gap-3 text-sm text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <X className="w-5 h-5 flex-shrink-0 text-slate-400" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
