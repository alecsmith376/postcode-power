import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { WaitlistForm } from "@/components/landing/WaitlistForm";
import { UKHeatmap } from "@/components/landing/UKHeatmap";
import { Sparkline } from "@/components/landing/Sparkline";
import { Toaster } from "@/components/ui/sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  TrendingUp,
  MapPin,
  Search,
  Bell,
  FileBarChart,
  ShieldCheck,
  Database,
  Cpu,
  FileText,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PostcodeIQ — Find UK postcodes worth investing in" },
      {
        name: "description",
        content:
          "AI-powered buy-to-let intelligence for UK property investors. Built on 5 million Land Registry transactions. Join the waitlist.",
      },
      { property: "og:title", content: "PostcodeIQ — UK buy-to-let postcode intelligence" },
      {
        property: "og:description",
        content: "Find the UK postcodes worth investing in — before everyone else does.",
      },
    ],
  }),
  component: Index,
});

const SAMPLE_POSTCODES = [
  { code: "M14", area: "Manchester", yield: "7.8%", growth: [42, 44, 47, 51, 55, 58, 62, 64, 68] },
  { code: "LS6", area: "Leeds", yield: "6.9%", growth: [38, 40, 42, 43, 47, 50, 53, 55, 59] },
  { code: "B16", area: "Birmingham", yield: "6.4%", growth: [50, 51, 53, 54, 56, 57, 58, 60, 62] },
  { code: "L8", area: "Liverpool", yield: "8.1%", growth: [30, 32, 35, 38, 41, 44, 48, 51, 55] },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster richColors position="top-center" />
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(oklch(0.24 0.06 260) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-soft text-navy-deep text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              Pre-launch · Q3 2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy leading-[1.05]">
              Find the UK postcodes worth investing in — <span className="text-emerald">before everyone else does</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              AI-powered buy-to-let intelligence. Built on 5 million Land Registry transactions. Zero tipster nonsense.
            </p>
            <div className="mt-8 max-w-md" id="waitlist-hero">
              <WaitlistForm size="lg" tier="investor" ctaLabel="Get early access" />
              <p className="mt-3 text-xs text-muted-foreground">
                Join 200+ investors on the waitlist. Launch price <strong className="text-navy">£29/month</strong> — first 50 lock in <strong className="text-emerald">£15/month for life</strong>.
              </p>
            </div>
          </div>

          {/* Dashboard mockup with map */}
          <div className="relative">
            <div className="rounded-2xl bg-white shadow-elegant border border-border overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-muted/40">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  <div className="ml-3 text-xs text-muted-foreground font-mono">postcodeiq.co.uk/hotspots</div>
              </div>
              <div className="grid grid-cols-5 gap-0">
                <div className="col-span-3 p-4 border-r border-border bg-gradient-to-br from-white to-muted/30">
                  <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                    Hotspots · Last 12 months
                  </div>
                  <UKHeatmap />
                </div>
                <div className="col-span-2 p-4 space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Top postcodes</div>
                  {SAMPLE_POSTCODES.map((p) => (
                    <div key={p.code} className="flex items-center justify-between gap-2 py-1.5 border-b border-border last:border-0">
                      <div>
                        <div className="font-bold text-navy text-sm">{p.code}</div>
                        <div className="text-[10px] text-muted-foreground">{p.area}</div>
                      </div>
                      <Sparkline data={p.growth} width={50} height={18} />
                      <div className="text-xs font-semibold text-emerald">{p.yield}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-2xl bg-emerald/10 blur-2xl" />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy max-w-3xl">
            Finding good BTL postcodes shouldn't require a spreadsheet habit
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "The 14-tab workflow",
                body: "You're using Rightmove, then Zoopla, then Google, then Excel — and still guessing.",
              },
              {
                title: "Enterprise pricing",
                body: "PropertyData is great but £100+/month is overkill for a few searches.",
              },
              {
                title: "Tipster theatre",
                body: "Tipster services want you to trust their gut, not the data.",
              },
            ].map((p) => (
              <div key={p.title} className="rounded-xl bg-white border border-border p-6 shadow-card">
                <div className="text-sm font-bold text-emerald mb-2">{p.title}</div>
                <p className="text-foreground/80 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-emerald uppercase tracking-wider">How it works</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-navy">
            Three data sources. One clear answer.
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Database,
              n: "01",
              title: "Ingest",
              body: "We pull Land Registry, EPC Register, and ONS data — every month, automatically.",
            },
            {
              icon: Cpu,
              n: "02",
              title: "Rank",
              body: "Our ML models rank 10,000+ UK postcodes by growth, yield, and undervaluation.",
            },
            {
              icon: FileText,
              n: "03",
              title: "Report",
              body: "Get a monthly report on the postcodes that match your strategy — family homes in growth areas, HMO-ready terraces, whatever you're buying.",
            },
          ].map((s) => (
            <div key={s.n} className="relative">
              <div className="text-6xl font-bold text-emerald-soft tabular-nums">{s.n}</div>
              <div className="mt-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-navy text-white">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-navy-deep text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-sm font-semibold text-emerald uppercase tracking-wider">Features</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Everything you need. Nothing you don't.
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Search, title: "Postcode Deep Dives", body: "Median price, 1yr and 3yr growth, transaction volume, estimated yields." },
              { icon: TrendingUp, title: "Hotspot Reports", body: "Top 100 postcodes ranked by your chosen metric." },
              { icon: MapPin, title: "Undervalued Area Finder", body: "ML model flags where prices lag fundamentals." },
              { icon: FileBarChart, title: "Monthly Trend Reports", body: "What's moving, what's cooling — every month." },
              { icon: Bell, title: "Custom Alerts", body: "Get notified when your target areas shift." },
              { icon: ShieldCheck, title: "No Scraping, No BS", body: "100% public data. No ToS violations. No block risk." },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-xl p-6 bg-white/[0.04] border border-white/10 hover:border-emerald/40 hover:bg-white/[0.06] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald/15 text-emerald flex items-center justify-center">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 font-bold text-lg">{f.title}</h3>
                <p className="mt-1.5 text-white/70 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE REPORT */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm font-semibold text-emerald uppercase tracking-wider">Sample report</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-navy">
              See what a PostcodeIQ report looks like
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "Full market context for every postcode sector",
                "Yield estimates with cost assumptions baked in (Stamp Duty, Section 24, voids)",
                "Export to PDF for lenders and partners",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald/15 text-emerald flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <span className="text-foreground/80">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white border border-border shadow-elegant overflow-hidden">
            <div className="p-5 border-b border-border bg-gradient-to-br from-navy to-navy-deep text-white">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-70">Monthly Report · April 2026</div>
                  <div className="mt-1 text-2xl font-bold">Manchester · M14</div>
                  <div className="text-sm opacity-80">Fallowfield, Rusholme</div>
                </div>
                <div className="text-right">
                  <div className="text-xs opacity-70">Yield est.</div>
                  <div className="text-2xl font-bold text-emerald">7.8%</div>
                </div>
              </div>
            </div>
            <div className="p-5 grid grid-cols-2 gap-4">
              {[
                { k: "Median price", v: "£238,400", trend: [40, 42, 45, 48, 51, 55, 58, 62] },
                { k: "1yr growth", v: "+8.2%", trend: [30, 35, 38, 42, 47, 53, 58, 62] },
                { k: "Transactions", v: "412 / yr", trend: [55, 50, 48, 52, 56, 58, 60, 64] },
                { k: "Undervalued score", v: "82 / 100", trend: [40, 45, 48, 53, 58, 65, 72, 82] },
              ].map((m) => (
                <div key={m.k} className="rounded-lg border border-border p-3">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{m.k}</div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-lg font-bold text-navy">{m.v}</div>
                    <Sparkline data={m.trend} width={48} height={20} />
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 pb-5">
              <div className="rounded-lg bg-emerald-soft px-3 py-2 text-xs text-navy-deep">
                <strong>Verdict:</strong> Strong rental demand from student catchment. Yields compress slightly post-2026 but remain top-quartile.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-sm font-semibold text-emerald uppercase tracking-wider">Pricing</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-navy">
              Simple pricing. Cancel anytime.
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Free",
                price: "£0",
                tier: "free" as const,
                features: ["3 postcode lookups per month", "Basic data view", "Email digest"],
                highlighted: false,
              },
              {
                name: "Investor",
                price: "£29",
                badge: "Most popular",
                tier: "investor" as const,
                features: [
                  "Unlimited postcode lookups",
                  "Monthly trend report",
                  "Custom watchlists",
                  "Export to PDF/CSV",
                  "Priority email support",
                ],
                cta: "Join waitlist — first 50 get £15/mo",
                highlighted: true,
              },
              {
                name: "Pro",
                price: "£79",
                tier: "pro" as const,
                features: [
                  "Everything in Investor",
                  "Hotspot reports (top 100)",
                  "Undervalued area alerts",
                  "API access",
                  "Custom queries",
                ],
                highlighted: false,
              },
            ].map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl p-7 border transition-all ${
                  p.highlighted
                    ? "bg-navy text-white border-navy shadow-elegant scale-[1.02]"
                    : "bg-white border-border shadow-card"
                }`}
              >
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald text-accent-foreground text-xs font-bold uppercase tracking-wider">
                    {p.badge}
                  </div>
                )}
                <div className={`text-sm font-semibold uppercase tracking-wider ${p.highlighted ? "text-emerald" : "text-muted-foreground"}`}>
                  {p.name}
                </div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${p.highlighted ? "text-white" : "text-navy"}`}>{p.price}</span>
                  <span className={p.highlighted ? "text-white/60" : "text-muted-foreground"}>/month</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${p.highlighted ? "text-emerald" : "text-emerald"}`} strokeWidth={3} />
                      <span className={p.highlighted ? "text-white/90" : "text-foreground/80"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <WaitlistForm tier={p.tier} ctaLabel={p.cta || "Join waitlist"} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
        <div className="text-center">
          <div className="text-sm font-semibold text-emerald uppercase tracking-wider">FAQ</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-navy">
            Questions, answered
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-10">
          {[
            {
              q: "When does this launch?",
              a: "Targeting early Q3 2026. Waitlist members get early access 2 weeks before public launch.",
            },
            {
              q: "How is this different from PropertyData or Zoopla Pro?",
              a: "We're built by an investor for investors. Focused specifically on BTL postcode selection, not general property search. Priced accordingly.",
            },
            {
              q: "Where does the data come from?",
              a: "UK Land Registry (every sale since 1995), EPC Register (property attributes), and ONS (demographics and trends). All public data. No scraping.",
            },
            {
              q: "Is this financial advice?",
              a: "Absolutely not. This is data and analysis. You make the investment decisions.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes — monthly billing, no contracts.",
            },
          ].map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-semibold text-navy hover:text-emerald hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/75 leading-relaxed">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* FINAL CTA */}
      <section id="waitlist" className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-deep text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Stop guessing. <span className="text-emerald">Start analysing.</span>
          </h2>
          <p className="mt-5 text-lg text-white/75 max-w-xl mx-auto">
            Join the waitlist. Get early access, locked-in pricing, and the monthly insights investors have been asking for.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <WaitlistForm size="lg" tier="investor" ctaLabel="Join waitlist" />
            <p className="mt-3 text-xs text-white/50">No spam. Unsubscribe anytime. GDPR compliant.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-navy flex items-center justify-center">
              <div className="w-2 h-2 rounded-sm bg-emerald" />
            </div>
            <span className="font-bold text-navy">PostcodeIQ</span>
            <span className="text-muted-foreground ml-2">© 2026</span>
          </div>
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="mailto:hello@postcodeiq.co.uk" className="hover:text-navy">hello@postcodeiq.co.uk</a>
            <a href="#" className="hover:text-navy">Privacy</a>
            <a href="#" className="hover:text-navy">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
