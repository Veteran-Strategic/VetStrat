import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import jeremyDavis from "@/assets/jeremy-davis.jpg";
import richardCatlin from "@/assets/richard-catlin.jpg";
import { Shield, FileText, CheckCircle, Target } from "lucide-react";

export default function AboutPage() {
  const leaders = [
    {
      name: "Jeremy Davis",
      role: "Founder and Operations Lead",
      image: jeremyDavis,
      bio: "Jeremy leads operational execution and systems design at Veteran Strategic. His background spans business operations, automation, and technical strategy within regulated environments. His work focuses on identifying risk early, designing practical solutions, and ensuring execution aligns with how organizations are actually evaluated under scrutiny."
    },
    {
      name: "Dr. Richard Catlin",
      role: "Founder and Cybersecurity Lead",
      image: richardCatlin,
      bio: "Dr. Richard Catlin provides cybersecurity leadership and oversight for Veteran Strategic. He has experience supporting cybersecurity efforts within programs associated with the United States Air Force and across regulated enterprise environments. He holds a master's degree in cybersecurity and maintains CISSP certification."
    }
  ];

  const operatingPrinciples = [
    {
      icon: Target,
      title: "Scoped clearly",
      description: "Work is defined before it begins"
    },
    {
      icon: Shield,
      title: "Evaluated honestly",
      description: "Systems assessed as they actually operate"
    },
    {
      icon: FileText,
      title: "Documented properly",
      description: "Documentation as a first-class deliverable"
    },
    {
      icon: CheckCircle,
      title: "Prioritized by impact",
      description: "Findings ranked by real consequence"
    }
  ];

  return (
    <>
      <SEO 
        title="About | Veteran Strategic" 
        description="Veteran Strategic is a veteran-owned cybersecurity and systems firm built to support organizations operating under real scrutiny."
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
              About Veteran Strategic
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              A cybersecurity and systems firm built for organizations operating under real scrutiny.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Firm Overview */}
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
                Firm overview
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Veteran Strategic helps regulated businesses and government contractors prepare for audits, reduce operational risk, and implement secure systems that hold up under review.
                </p>
                <p>
                  Our work is designed for environments where mistakes are costly, shortcuts fail, and documentation matters.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {operatingPrinciples.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.08 }}
                    className="p-4 rounded-xl bg-muted/30 border border-border"
                  >
                    <Icon className="w-5 h-5 text-teal" />
                    <h3 className="mt-2 font-semibold text-foreground text-sm">{principle.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{principle.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-foreground">
                How we operate
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg text-foreground font-medium">
                  We approach every engagement as an execution problem.
                </p>
                <p>
                  Work is scoped clearly before it begins. Systems are evaluated against how they actually operate, not how they are described. Documentation is treated as a first-class deliverable. Findings are prioritized by real impact, not convenience.
                </p>
                <p>
                  This structure allows us to move quickly without creating unnecessary risk. It also ensures our work withstands audit, oversight, and follow-on review.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-foreground">
              Leadership
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border card-interactive"
              >
                <div className="flex items-start gap-5">
                  <motion.img
                    src={leader.image}
                    alt={leader.name}
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {leader.name}
                    </h3>
                    <p className="text-sm text-teal font-medium">
                      {leader.role}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  {leader.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Veteran-Owned */}
      <section className="section-padding bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-white">
                Veteran-owned
              </h2>
              <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Veteran Strategic is veteran-owned and operated. Veteran ownership influences how we execute our work through accountability, documentation, and follow-through.
                </p>
                <p className="text-slate-400">
                  It does not influence our branding, tone, or marketing approach. Our focus remains on doing the work correctly, preparing clients honestly, and delivering outcomes that hold up when reviewed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xl text-foreground font-medium leading-relaxed">
              We work with organizations that operate in environments where preparation matters and scrutiny is real.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our role is to help those organizations understand their risk, prepare responsibly, and execute with confidence.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
