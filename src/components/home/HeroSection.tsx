import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SystemVisual } from "./SystemVisual";

export function HeroSection() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth"
    });
  };

  return (
    <section className="relative overflow-hidden animated-gradient py-20 md:py-28 lg:py-32">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: `linear-gradient(hsl(var(--slate-400)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--slate-400)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Floating accent orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-teal/5 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-teal/3 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container-wide relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-xl"
          >
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-tight">
              Law firm security.{" "}
              <span className="text-teal">Client audit readiness. Cyber insurance reviews.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-lg text-slate-300 leading-relaxed"
            >
              We help law firms pass client security audits and cyber insurance reviews. When corporate clients ask about your security controls, you'll have the answers.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button 
                asChild
                size="lg"
                className="bg-teal hover:bg-teal-dark text-white font-medium px-6 py-3 h-auto hover-glow"
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Schedule a readiness assessment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white font-medium px-6 py-3 h-auto"
                onClick={scrollToNextSection}
              >
                See how we work
              </Button>
            </motion.div>
          </motion.div>
          
          {/* System visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <SystemVisual />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="hidden lg:flex justify-center mt-16"
        >
          <motion.button
            onClick={scrollToNextSection}
            className="text-slate-500 hover:text-teal transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
