import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow, Shield, FileText, Gauge, CheckCircle, X, AlertTriangle, Cog, Database } from "lucide-react";

export default function RegulatedSMBsPage() {
  const painPoints = [
    {
      icon: AlertTriangle,
      text: "Critical workflows held together by workarounds"
    },
    {
      icon: Database,
      text: "Sensitive data moving through uncontrolled paths"
    },
    {
      icon: Cog,
      text: "Operational risk increasing quietly over time"
    }
  ];

  const services = [
    {
      title: "Workflow optimization",
      description: "Automate manual processes that consume time and create errors"
    },
    {
      title: "Custom internal tools",
      description: "Purpose-built dashboards and applications for your team"
    },
    {
      title: "Secure data handling",
      description: "Proper controls for sensitive and regulated information"
    },
    {
      title: "Error reduction",
      description: "Replace fragile manual steps with reliable automation"
    },
    {
      title: "Documentation included",
      description: "Every system ships with audit-ready documentation"
    }
  ];

  const sectors = [
    { name: "Finance", description: "Investment firms, accounting, lending" },
    { name: "Healthcare", description: "Clinics, practices, health tech" },
    { name: "Legal", description: "Law firms, compliance teams" },
    { name: "Manufacturing", description: "Regulated production and supply chain" }
  ];

  const processSteps = [
    { number: "01", title: "Scope defined", description: "Clear boundaries and measurable outcomes before work begins" },
    { number: "02", title: "Workflow-first design", description: "Systems built around how your team actually operates" },
    { number: "03", title: "Security reviewed", description: "Issues caught before deployment, not after" },
    { number: "04", title: "Documentation delivered", description: "Audit-ready materials included by default" },
    { number: "05", title: "Clean handoff", description: "You know exactly who owns what and how to maintain it" }
  ];

  const fitItems = [
    "Manual workflows are slowing your team down",
    "Off-the-shelf tools no longer fit how you operate",
    "Sensitive data must be handled responsibly",
    "You need a solution quickly, but correctly"
  ];

  const notFitItems = [
    "Experimental products or MVPs",
    "Customer-facing applications",
    "Teams avoiding security review"
  ];

  return (
    <>
      <SEO 
        title="Regulated SMBs | Veteran Strategic" 
        description="Custom systems for regulated teams. Built fast. Secured properly. Workflow automation and internal tools for finance, healthcare, legal, and other high-risk industries."
      />
      
      {/* Hero */}
      <section className="animated-gradient py-20 md:py-28 relative overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-teal/5 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl text-white leading-tight">
              Custom systems for regulated teams.
              <br />
              <span className="text-teal">Built fast. Secured properly.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Internal software and workflow automation for regulated SMBs that need solutions quickly without exposing sensitive data or creating compliance risk.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-teal hover:bg-teal-dark text-white font-medium hover-glow"
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Request a workflow review
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link to="#how-we-work">See how we work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-foreground">
                The Problem We Solve
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Regulated teams outgrow spreadsheets and off-the-shelf tools long before they are ready for enterprise platforms.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We help organizations replace fragile processes with purpose-built systems that actually reflect how work gets done.
              </p>
            </motion.div>

            <div className="space-y-4">
              {painPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4 p-5 rounded-xl bg-destructive/5 border border-destructive/10"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-destructive" />
                    </div>
                    <p className="text-foreground pt-2">{point.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-foreground">
              What We Do
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Lightweight internal systems that improve efficiency while respecting security constraints.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-xl bg-card border border-border card-interactive"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-teal mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">{service.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-10 text-center text-muted-foreground italic"
          >
            Solutions designed around your workflows, not generic software assumptions.
          </motion.p>
        </div>
      </section>

      {/* Built for Regulated Environments */}
      <section className="section-padding bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent" />
        <div className="container-wide relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-white">
                Built for Regulated Environments
              </h2>
              <p className="mt-5 text-lg text-slate-300">
                Speed only matters if it does not create risk.
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Security review and accountability are built into how systems are designed, not added later. Our work is designed for organizations operating under regulatory, contractual, or professional oversight.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-teal/30 transition-colors"
                >
                  <h3 className="font-semibold text-white">{sector.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">{sector.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Engagements Work */}
      <section id="how-we-work" className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-foreground">
              How Engagements Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Structured, focused, and execution-driven.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 py-6 border-b border-border last:border-b-0"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                  <span className="text-teal font-semibold text-sm">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 text-center text-muted-foreground"
          >
            This approach allows teams to move quickly while remaining defensible.
          </motion.p>
        </div>
      </section>

      {/* When This Is a Fit */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-xl bg-teal-light/60 border-2 border-teal/20"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal" />
                When this is a fit
              </h3>
              <ul className="space-y-4">
                {fitItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    className="flex gap-3 text-sm text-foreground/80"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-teal" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-xl bg-slate-100 border-2 border-slate-200/80"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-400" />
                Not a fit for
              </h3>
              <ul className="space-y-4">
                {notFitItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                    className="flex gap-3 text-sm text-muted-foreground"
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

      {/* Why Veteran Strategic */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-foreground">
              Why Veteran Strategic
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We operate at the intersection of systems design, operational execution, and cybersecurity. Our work is guided by accountability, documentation, and follow-through.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We focus on building systems that hold up when reviewed, not just systems that work on day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-slate-900">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl font-semibold sm:text-3xl text-white">
              Ready to improve efficiency without increasing risk?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Let us review your current workflows and identify opportunities.
            </p>
            <div className="mt-8">
              <Button 
                asChild
                size="lg"
                className="bg-teal hover:bg-teal-dark text-white font-medium hover-glow"
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Request a workflow review
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
