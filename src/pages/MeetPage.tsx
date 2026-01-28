import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import jeremyDavis from "@/assets/jeremy-davis.jpg";
import richardCatlin from "@/assets/richard-catlin.jpg";

export default function MeetPage() {
  const ctaUrl = "https://ro.am/veteranstrategic";

  const founders = [
    {
      name: "Jeremy Davis",
      title: "Co-Founder & Operations Lead",
      image: jeremyDavis,
      brief: "Operations and process expert specializing in workflow design for high-compliance industries. U.S. Army Veteran. Handles client relationships, assessments, and day-to-day coordination."
    },
    {
      name: "Dr. Richard Catlin III",
      title: "Co-Founder & Cybersecurity Lead",
      image: richardCatlin,
      brief: "Major in the U.S. Air Force Reserves with over a decade of cybersecurity, intelligence, and information warfare experience across military and enterprise environments. CISSP certified with master's degrees in Cybersecurity Technology and IT Auditing. Has held senior roles at Microsoft, General Dynamics, Leidos, and other Fortune 500 organizations."
    }
  ];

  const capabilities = [
    "Gap analysis against ACC Model Controls and cyber insurance requirements",
    "Policy documentation and evidence packages for client audits",
    "On-call support during audit periods and insurance questionnaires",
    "Fractional CISO services with a named security leader for your firm"
  ];

  return (
    <>
      <SEO
        title="Schedule a Readiness Assessment | Veteran Strategic"
        description="We help law firms pass client security audits and cyber insurance reviews. Schedule a consultation with Veteran Strategic."
      />

      {/* Hero Section */}
      <section className="animated-gradient py-20 md:py-28 relative overflow-hidden min-h-[50vh] flex items-center">
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-teal/5 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-teal/3 blur-3xl"
          animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Law Firm Security and Audit Readiness
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We help law firms pass client security audits and cyber insurance reviews. When corporate clients ask about your security controls, you will have the answers.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10"
            >
              <Button
                asChild
                size="lg"
                className="bg-teal hover:bg-teal-dark text-white hover-glow text-base px-8 py-6"
              >
                <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                  Schedule a Readiness Assessment
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid gap-10 md:grid-cols-2 lg:gap-16 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-border mb-6">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {founder.name}
                </h3>
                <p className="text-teal font-medium mt-1">
                  {founder.title}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                  {founder.brief}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
              What We Deliver
            </h2>
            <ul className="space-y-5">
              {capabilities.map((capability, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <CheckCircle className="w-6 h-6 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-lg leading-relaxed">
                    {capability}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto text-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-teal hover:bg-teal-dark text-white hover-glow text-base px-8 py-6"
            >
              <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                Schedule a Readiness Assessment
              </a>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              30-minute consultation. No obligation.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
