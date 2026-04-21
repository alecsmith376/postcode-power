import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface WaitlistFormProps {
  tier?: "free" | "investor" | "pro";
  ctaLabel?: string;
  size?: "default" | "lg";
  className?: string;
}

function getUtm() {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get("utm_source"),
    utm_medium: p.get("utm_medium"),
    utm_campaign: p.get("utm_campaign"),
    utm_content: p.get("utm_content"),
    utm_term: p.get("utm_term"),
    referrer: document.referrer || null,
  };
}

export function WaitlistForm({ tier = "investor", ctaLabel = "Get early access", size = "default", className = "" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("waitlist").insert({ email: email.trim().toLowerCase(), tier, ...getUtm() });
    setLoading(false);
    if (error && !error.message.includes("duplicate")) {
      toast.error("Something went wrong. Try again?");
      return;
    }
    setDone(true);
    toast.success("You're on the list. We'll be in touch.");
    setEmail("");
  };

  if (done) {
    return (
      <div className={`rounded-lg bg-emerald-soft px-4 py-3 text-sm font-medium text-navy-deep ${className}`}>
        ✓ You're on the waitlist. Check your inbox shortly.
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`flex flex-col sm:flex-row gap-2 ${className}`}>
      <Input
        type="email"
        required
        placeholder="you@example.co.uk"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={size === "lg" ? "h-12 text-base flex-1" : "flex-1"}
        aria-label="Email address"
      />
      <Button
        type="submit"
        disabled={loading}
        size={size}
        className="bg-emerald hover:bg-emerald/90 text-accent-foreground font-semibold whitespace-nowrap"
      >
        {loading ? "Joining…" : ctaLabel}
      </Button>
    </form>
  );
}