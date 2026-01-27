import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, FileText, Target, Users, XCircle, CheckCircle, Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function GovernmentContractorsPage() {
  const processSteps = [
    {
      number: "01",
      title: "Scope and objectives defined upfront",
      description: "We align on requirements, systems in scope, and timeline."
    },
    {
      number: "02",
      title: "Controls evaluated against real behavior",
      description: "We assess how controls actually operate, not just documentation."
    },
    {
      number: "03",
      title: "Gaps documented with rationale",
      description: "Each finding includes context, risk exposure, and reasoning."
    },
    {
      number: "04",
      title: "Findings prioritized by audit impact",
      description: "Issues ranked by what auditors will focus on."
    },
    {
      number: "05",
      title: "Clear readiness results delivered",
      description: "Structured assessment with actionable next steps."
    }
  ];

  const whatWeDoItems = [
    {
      icon: Search,
      title: "Readiness assessment",
      description: "Evaluation of your posture against applicable requirements, as an auditor would approach it."
    },
    {
      icon: Target,
      title: "Gap identification",
      description: "Precise identification of control gaps, documentation deficiencies, and risk exposure."
    },
    {
      icon: FileText,
      title: "Evidence review",
      description: "Assessment of documentation quality to ensure it satisfies auditor expectations."
    },
    {
      icon: CheckCircle,
      title: "Practical recommendations",
      description: "Specific, prioritized actions to address gaps before formal audit."
    }
  ];

  const remediationItems = [
    "Closing control and documentation gaps",
    "Aligning systems and workflows to requirements",
    "Improving evidence quality and traceability",
    "Preparing teams for auditor questions"
  ];

  const forItems = [
    "Government contractors preparing for upcoming audits",
    "Organizations seeking an honest readiness assessment",
    "Teams that want clarity before formal review"
  ];

  const notForItems = [
    "Checkbox compliance",
    "Template documentation",
    "Audit theater"
  ];

  const leadershipSignals = [
    "Senior cybersecurity leadership with direct oversight",
    "Master's-level cybersecurity education",
    "CISSP certification",
    "Experience supporting U.S. Air Force and government environments"
  ];

  const keyStandards = ["CMMC", "NIST 800-171", "ISO 27001", "HIPAA", "SOC 2"];

  const supportedStandards = [
    "CMMC (Levels 1-3 readiness)",
    "NIST SP 800-171",
    "NIST SP 800-53 (select controls)",
    "DFARS 252.204-7012",
    "ISO/IEC 27001",
    "ISO/IEC 27701",
    "ISO 9001",
    "AS9100, AS9110, AS9120",
    "SOC 1 and SOC 2",
    "HIPAA",
    "HITRUST (readiness support)",
    "NIST CSF and RMF"
  ];

  return (
    <>
      <SEO 
        title="Government Contractors | Veteran Strategic" 
        description="Pre-audit readiness and remediation for government contractors. We help you assess gaps, prepare documentation, and build security programs that withstand auditor scrutiny."
      />
      
      {/* Hero */}
      <section className="animated-gradient py-20 md:py-28 relative overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-teal/5 blur-3xl"
          animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl text-white leading-tight">
              Pre-audit readiness that{" "}
              <span className="text-teal">holds up under scrutiny.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Assess audit readiness, identify gaps, and prepare security programs that withstand review before an auditor is involved.
            </p>
            
            {/* Key standards badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {keyStandards.map((standard) => (
                <span 
                  key={standard}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-xs font-medium text-slate-300"
                >
                  <Shield className="w-3 h-3 text-teal" />
                  {standard}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-teal hover:bg-teal-dark text-white hover-glow"
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Request a readiness review
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link to="#process">See our process</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Reality of Government Audits */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-foreground">
                The reality of government audits
              </h2>
              <div className="mt-6 space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Audit failures are rarely surprises. They result from gaps that existed long before the auditor arrived.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Delayed contract awards, formal findings, and ongoing compliance risk compound over time. Pre-audit readiness is about building a security posture that reflects how your organization actually operates.
                </p>
                <p className="text-muted-foreground leading-relaxed font-medium text-foreground">
                  When you understand where you stand before an audit begins, you control the outcome.
                </p>
              </div>
            </motion.div>
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
              What we do
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real audit conditions, not checklists. Assessments that reflect how auditors actually evaluate security programs.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {whatWeDoItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border card-interactive"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100">
                    <Icon className="w-6 h-6 text-slate-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Remediation Support */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-foreground">
                Remediation support
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                When gaps are identified, remediation is offered as a scoped follow-on engagement tied directly to findings.
              </p>
              <ul className="mt-6 space-y-3">
                {remediationItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex gap-3 text-muted-foreground"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-teal mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                Remediation is defined, scheduled, and executed against specific objectives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-xl bg-slate-900 border border-slate-800"
            >
              <h3 className="text-xl font-semibold text-white">
                Security leadership and oversight
              </h3>
              <p className="mt-3 text-slate-300 leading-relaxed">
                Engagements led by cybersecurity professionals who understand how government requirements translate into implementation.
              </p>
              <ul className="mt-6 space-y-3">
                {leadershipSignals.map((signal, index) => (
                  <li key={index} className="flex gap-3 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 text-teal mt-0.5" />
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Our Engagements Work */}
      <section id="process" className="section-padding bg-slate-900">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-white">
              How our engagements work
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              A structured, repeatable process designed for clarity and defensibility.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-6 py-6 border-b border-slate-700 last:border-b-0"
              >
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-teal font-semibold text-sm">{step.number}</span>
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For / Not For */}
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
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-teal/20">
                <Users className="w-5 h-5 text-teal-dark" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                Who this is for
              </h3>
              <ul className="mt-4 space-y-3">
                {forItems.map((item, index) => (
                  <li key={index} className="flex gap-3 text-foreground/80">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-teal mt-0.5" />
                    <span>{item}</span>
                  </li>
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
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-200">
                <XCircle className="w-5 h-5 text-slate-500" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                Who this is not for
              </h3>
              <ul className="mt-4 space-y-3">
                {notForItems.map((item, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <XCircle className="w-5 h-5 flex-shrink-0 text-slate-400 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-foreground text-center mb-10">
              Frequently asked questions
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="standards" className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  Which standards and certifications do you support?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  <p className="mb-4">We provide readiness assessments, gap analysis, and remediation support for:</p>
                  <ul className="grid gap-2 sm:grid-cols-2 mb-4">
                    {supportedStandards.map((standard, index) => (
                      <li key={index} className="flex gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 text-teal mt-0.5" />
                        <span>{standard}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm border-t border-border pt-4">
                    Certification and formal audits are performed by accredited third-party auditors.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="timeline" className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  How long does a typical readiness assessment take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  Most readiness assessments take 2-4 weeks depending on scope and complexity. We define timeline expectations upfront during scoping.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="certification" className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  Do you perform certification audits?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  No. We prepare you for success with third-party auditors. Formal certification is performed by accredited assessors.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="remediation" className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  What happens after the readiness assessment?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  You receive a structured report with prioritized findings and actionable recommendations. If remediation support is needed, we scope it as a separate engagement tied directly to the findings.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
              Know where you stand before the auditor arrives.
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Request an honest assessment of your current readiness.
            </p>
            <div className="mt-8">
              <Button 
                asChild
                size="lg"
                className="bg-teal hover:bg-teal-dark text-white font-medium hover-glow"
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Request a pre-audit readiness review
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-muted/30 border-t border-border">
        <div className="container-wide">
          <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto">
            Veteran Strategic provides readiness assessments, gap analysis, and remediation support. Formal certification, attestation, and official audits are performed by accredited third-party auditors and certification bodies.
          </p>
        </div>
      </section>
    </>
  );
}
