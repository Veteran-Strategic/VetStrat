import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Shield, Clock, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    role: "",
    email: "",
    industry: "",
    subject: "",
    description: "",
    timeline: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subjectLine = `Inquiry: ${formData.subject} - ${formData.organization}`;
    const body = `Name: ${formData.fullName}
Organization: ${formData.organization}
Role: ${formData.role}
Email: ${formData.email}
Industry: ${formData.industry}
Subject: ${formData.subject}
Timeline: ${formData.timeline}

Description:
${formData.description}`;

    const mailtoLink = `mailto:info@veteranstrategic.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setIsSubmitted(true);
  };

  const industries = [
    { value: "government-contractor", label: "Government contractor" },
    { value: "finance", label: "Finance" },
    { value: "healthcare", label: "Healthcare" },
    { value: "legal", label: "Legal" },
    { value: "other", label: "Other" }
  ];

  const subjects = [
    { value: "pre-audit-readiness", label: "Pre-audit readiness" },
    { value: "audit-remediation", label: "Audit remediation" },
    { value: "secure-systems", label: "Secure systems or automation" },
    { value: "general-inquiry", label: "General inquiry" }
  ];

  const timelines = [
    { value: "immediate", label: "Immediate" },
    { value: "near-term", label: "Near-term" },
    { value: "exploratory", label: "Exploratory" }
  ];

  const expectations = [
    { icon: MessageSquare, text: "Your inquiry is reviewed by our team" },
    { icon: Clock, text: "We may follow up by email for clarification" },
    { icon: CheckCircle, text: "If appropriate, we will propose next steps" }
  ];

  if (isSubmitted) {
    return (
      <>
        <SEO 
          title="Contact | Veteran Strategic" 
          description="Contact Veteran Strategic for pre-audit readiness, audit remediation, or secure systems work."
        />
        
        <section className="animated-gradient py-20 md:py-28 min-h-[60vh] flex items-center">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mx-auto text-center"
            >
              <motion.div 
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-teal/20 mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="w-10 h-10 text-teal" />
              </motion.div>
              <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-white">
                Thank you for reaching out.
              </h1>
              <p className="mt-5 text-lg text-slate-300 leading-relaxed">
                If there is a fit, we will follow up by email to discuss next steps.
              </p>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Contact | Veteran Strategic" 
        description="Contact Veteran Strategic for pre-audit readiness, audit remediation, or secure systems work. We work with organizations under regulatory and operational scrutiny."
      />
      
      {/* Hero */}
      <section className="animated-gradient py-16 md:py-20 relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-teal/5 blur-3xl"
          animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl text-white">
              Contact Veteran Strategic
            </h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              Share a brief overview of your situation. We review all inquiries and respond when there is a clear fit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-foreground font-medium">
                      Full name
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      maxLength={100}
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="bg-background border-border h-11"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-foreground font-medium">
                      Organization
                    </Label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      required
                      maxLength={200}
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="bg-background border-border h-11"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-foreground font-medium">
                      Role or title
                    </Label>
                    <Input
                      id="role"
                      name="role"
                      type="text"
                      required
                      maxLength={100}
                      value={formData.role}
                      onChange={handleInputChange}
                      className="bg-background border-border h-11"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background border-border h-11"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-foreground font-medium">
                      Industry
                    </Label>
                    <Select 
                      value={formData.industry} 
                      onValueChange={(value) => handleSelectChange("industry", value)}
                      required
                    >
                      <SelectTrigger className="bg-background border-border h-11">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-border z-50">
                        {industries.map((industry) => (
                          <SelectItem key={industry.value} value={industry.value}>
                            {industry.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground font-medium">
                      What are you reaching out about?
                    </Label>
                    <Select 
                      value={formData.subject} 
                      onValueChange={(value) => handleSelectChange("subject", value)}
                      required
                    >
                      <SelectTrigger className="bg-background border-border h-11">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-border z-50">
                        {subjects.map((subject) => (
                          <SelectItem key={subject.value} value={subject.value}>
                            {subject.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-foreground font-medium">
                    Brief description of your situation
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    maxLength={2000}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="bg-background border-border resize-none"
                    placeholder="Tell us about your current challenges and what you're looking to accomplish..."
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {formData.description.length}/2000 characters
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-foreground font-medium">
                    Timeline
                  </Label>
                  <Select 
                    value={formData.timeline} 
                    onValueChange={(value) => handleSelectChange("timeline", value)}
                    required
                  >
                    <SelectTrigger className="bg-background border-border h-11 w-full sm:w-1/2">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border z-50">
                      {timelines.map((timeline) => (
                        <SelectItem key={timeline.value} value={timeline.value}>
                          {timeline.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-teal hover:bg-teal-dark text-white hover-glow"
                  >
                    Submit inquiry
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              {/* What to Expect */}
              <div className="p-6 rounded-xl bg-muted/30 border border-border">
                <h3 className="text-lg font-semibold text-foreground">
                  What to expect
                </h3>
                <ul className="mt-5 space-y-4">
                  {expectations.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                        <Icon className="w-5 h-5 flex-shrink-0 text-teal" />
                        <span>{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Reassurance */}
              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-teal" />
                  <span className="font-medium text-white text-sm">We respond personally</span>
                </div>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  No sales scripts. Not every inquiry results in an engagement. We prioritize work where preparation and accountability matter.
                </p>
              </div>

              {/* Alternative Contact */}
              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  For general inquiries:{" "}
                  <a 
                    href="mailto:info@veteranstrategic.com"
                    className="text-foreground hover:text-teal transition-colors font-medium"
                  >
                    info@veteranstrategic.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
