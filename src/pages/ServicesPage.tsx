import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileCheck, Shield, Users, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: FileCheck,
      title: "Client Audit & Insurance Readiness Assessment",
      price: "$3,500 - $8,000",
      timeline: "2-week delivery",
      description: "A focused 2-week assessment that evaluates your firm against the security requirements corporate clients and cyber insurers actually enforce. You'll know exactly where you stand and what needs to change.",
      features: [
        "Gap analysis against ACC's 13 control areas",
        "Cyber insurance requirements review",
        "Evidence readiness assessment",
        "30/60/90-day remediation roadmap"
      ]
    },
    {
      icon: Shield,
      title: "Client Audit Response Package",
      price: "$12,000 - $20,000",
      priceNote: "(assessment fee credited)",
      timeline: "4-week delivery",
      description: "When you have a client security audit coming or need to demonstrate compliance to retain a major relationship, this package delivers the documentation, evidence, and support you need to pass.",
      features: [
        "Complete policy documentation suite",
        "Evidence package mapped to ACC controls",
        "Mock audit preparation drill",
        "2 weeks on-call audit support"
      ]
    },
    {
      icon: FileCheck,
      title: "Cyber Insurance Readiness Package",
      price: "$5,000 - $12,000",
      timeline: "1-2 week delivery",
      description: "Prepare for cyber insurance application or renewal with documentation and evidence that demonstrates your security controls to underwriters. Stop paying higher premiums or risking denial.",
      features: [
        "Gap analysis against insurer requirements",
        "Questionnaire draft with evidence",
        "Technical claims verification",
        "Remediation guidance for gaps"
      ]
    },
    {
      icon: Users,
      title: "Fractional CISO",
      price: "$10,000/month",
      priceNote: "(requires Assessment + Audit Response first)",
      timeline: "6-month minimum commitment",
      badge: "Limited Availability",
      description: "Dr. Richard Catlin serves as your firm's named security leader and point of contact for corporate client audits. When clients ask who handles your security, the answer is a CISSP with over a decade of cybersecurity experience across military and enterprise environments.",
      features: [
        "Named security contact for clients",
        "Direct audit representation",
        "Quarterly security reviews",
        "Incident response leadership"
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Services | Veteran Strategic"
        description="Security services for law firms: readiness assessments, audit response packages, cyber insurance support, and fractional CISO services."
      />

      {/* Hero */}
      <section className="animated-gradient py-20 md:py-28 relative overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-teal/5 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl text-white">
              Services for Law Firms
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              From initial assessment to ongoing security leadership, we help law firms build and maintain the security posture that corporate clients and cyber insurers require.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 md:p-10 rounded-xl border border-border bg-card hover:border-teal/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-teal-light">
                        <Icon className="w-7 h-7 text-teal-dark" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                          {service.title}
                        </h2>
                        {service.badge && (
                          <span className="px-3 py-1 text-xs font-medium bg-teal/10 text-teal rounded-full">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-4">
                        <span className="text-teal font-semibold">{service.price}</span>
                        {service.priceNote && (
                          <span className="text-sm text-muted-foreground">{service.priceNote}</span>
                        )}
                      </div>
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {service.timeline}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl font-semibold sm:text-3xl text-white">
              Assessment fee credited toward Audit Response
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Start with an assessment to understand your gaps. If you proceed with the Audit Response Package, your full assessment fee is credited toward the engagement.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <Button
                asChild
                size="lg"
                className="bg-teal hover:bg-teal-dark text-white font-medium px-6 py-3 h-auto"
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Schedule a readiness assessment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
