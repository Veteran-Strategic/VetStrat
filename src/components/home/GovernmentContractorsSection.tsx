import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardCheck, FileSearch, Shield, CheckCircle } from "lucide-react";

export function GovernmentContractorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: ClipboardCheck,
      title: "Audit readiness",
      description: "Prepare systems and documentation before the auditor arrives."
    },
    {
      icon: FileSearch,
      title: "Remediation support",
      description: "Address gaps with structured, prioritized action plans."
    },
    {
      icon: Shield,
      title: "Defensible documentation",
      description: "Evidence that demonstrates due diligence to assessors."
    }
  ];

  const standards = ["CMMC", "NIST 800-171", "ISO 27001", "HIPAA", "SOC 2"];

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal text-sm font-medium tracking-wide uppercase">
              For Government Contractors
            </span>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl md:text-4xl text-foreground">
              Pre-Audit Readiness and Remediation
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Audit failures are rarely surprises. They are the result of gaps that existed long before the auditor arrived. We help you identify and close those gaps before formal review.
            </p>

            {/* Supported standards */}
            <div className="mt-6 flex flex-wrap gap-2">
              {standards.map((standard) => (
                <span 
                  key={standard}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-xs font-medium text-slate-600"
                >
                  <CheckCircle className="w-3 h-3 text-teal" />
                  {standard}
                </span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-slate-300 text-foreground hover:bg-slate-100 font-medium"
              >
                <Link to="/sectors/government-contractors" className="inline-flex items-center gap-2">
                  Request a readiness review
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Services */}
          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                  className="flex gap-5 p-6 rounded-xl bg-card border border-border card-interactive"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
