import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus("success");
  };

  return (
    <div className="max-w-2xl">
      {status === "success" ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12 border border-border rounded-xl bg-sidebar"
        >
          <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Message Sent</h3>
          <p className="text-muted text-sm">I'll get back to you as soon as possible.</p>
          <Button 
            variant="outline" 
            className="mt-6 border-border hover:bg-white"
            onClick={() => setStatus("idle")}
          >
            Send another
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-wider font-bold text-muted">Name</label>
              <Input placeholder="John Doe" className="bg-sidebar border-border focus:border-accent h-11" required />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-wider font-bold text-muted">Email</label>
              <Input type="email" placeholder="john@example.com" className="bg-sidebar border-border focus:border-accent h-11" required />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[11px] uppercase tracking-wider font-bold text-muted">Message</label>
            <Textarea 
              placeholder="Tell me about your project..." 
              className="bg-sidebar border-border focus:border-accent min-h-[150px] resize-none" 
              required
            />
          </div>
          <Button type="submit" className="w-full h-12 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </div>
  );
}
