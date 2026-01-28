import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent" />
      <div className="container-wide relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-white">
              Veteran-owned. Law firm focused.
            </h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                Veteran Strategic was founded by an Army veteran and an Air Force Reserve cybersecurity officer
                with over a decade of experience in cybersecurity, intelligence, and information warfare. We help
                law firms prove their security posture to corporate clients and insurers.
              </p>
              <p className="text-slate-400">
                We're not auditors trying to certify you or software vendors trying to sell you a platform.
                We sit on your side of the table and help you get ready for scrutiny.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <Button
                asChild
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                <Link to="/about" className="inline-flex items-center gap-2">
                  Learn more about us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
