import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function InsightsPage() {
  // Placeholder for future insights/articles
  const insights = [
    {
      title: "Coming soon",
      description: "We're preparing practical guidance on compliance, security, and software development for regulated businesses.",
      date: null
    }
  ];

  return (
    <>
      <SEO 
        title="Insights | Veteran Strategic" 
        description="Practical guidance on compliance, security, and software development for regulated businesses."
      />
      
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl text-white">
              Insights
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Practical guidance on compliance, security, and software development for regulated businesses. No fluff, no thought-leadership posturing. Just useful information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-lg bg-muted/50 border border-border text-center"
              >
                <h2 className="text-xl font-medium text-foreground">
                  {insight.title}
                </h2>
                <p className="mt-3 text-muted-foreground">
                  {insight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
