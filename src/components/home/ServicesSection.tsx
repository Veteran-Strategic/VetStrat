import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FileCheck, Shield, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: FileCheck,
      title: "Readiness Assessment",
      price: "$3.5K - $8K",
      description: "A focused 2-week assessment against ACC Model Controls and cyber insurance requirements. Know exactly where you stand."
    },
    {
      icon: Shield,
      title: "Audit Response Package",
      price: "$12K - $20K",
      description: "Complete policy documentation, evidence packages, and on-call support during client audit periods. Everything you need to pass."
    },
    {
      icon: Users,
      title: "Fractional CISO",
      price: "$10K/month",
      description: "A named security leader for your firm. When clients ask who handles your security—the answer is a CISSP with enterprise experience."
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
            How We Help
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From initial assessment to ongoing security leadership.
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 rounded-xl bg-card border border-border card-interactive group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-light group-hover:bg-teal/20 transition-colors">
                  <Icon className="w-6 h-6 text-teal-dark" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-teal font-medium">
                  {service.price}
                </p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            variant="outline"
            className="border-border text-foreground hover:bg-muted"
          >
            <Link to="/services" className="inline-flex items-center gap-2">
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
