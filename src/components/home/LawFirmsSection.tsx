import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, Shield, FileText, Users } from "lucide-react";

export function LawFirmsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const outcomes = [
    {
      icon: FileCheck,
      title: "ACC controls gap analysis",
      description: "Assessment against the 13 control areas corporate clients require."
    },
    {
      icon: Shield,
      title: "Insurance questionnaire support",
      description: "Documentation for the 5 controls insurers won't budge on."
    },
    {
      icon: FileText,
      title: "Policy & evidence packages",
      description: "Complete documentation that proves your controls are in place."
    },
    {
      icon: Users,
      title: "Audit period support",
      description: "On-call assistance during client reviews and questionnaires."
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
              For Law Firms
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              We assess your firm against what corporate clients and cyber insurers actually require—ACC Model Controls, Outside Counsel Guidelines, and the five controls insurers won't budge on.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Then we help you build the documentation and evidence to prove you're ready.
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
                <Link to="/services" className="inline-flex items-center gap-2">
                  View our services
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
