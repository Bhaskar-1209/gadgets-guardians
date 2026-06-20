import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Search,
  MousePointerClick,
  Share2,
  Megaphone,
  Mail,
  ShieldCheck,
  Users,
  Code2,
  Smartphone,
  Palette,
  Monitor,
  Check,
  Star,
  TrendingUp,
  Award,
  Globe,
  Phone,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import ggLogo from "@/assets/gg-logo.png.asset.json";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gadgets Guardians — Digital Marketing, Web & Mobile Development Agency" },
      {
        name: "description",
        content:
          "Gadgets Guardians is a full-service tech agency offering SEO, SEM, SMM, PPC, web & mobile development, and graphic design. Grow your brand with measurable results.",
      },
      { property: "og:title", content: "Gadgets Guardians — Digital Marketing & Tech Agency" },
      {
        property: "og:description",
        content:
          "SEO, SEM, SMM, PPC, ORM, web & mobile development. Plans starting at $200/mo.",
      },
      { property: "og:image", content: ggLogo.url },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Search, title: "SEO", desc: "Rank higher on Google with white-hat, AI-ready SEO strategies." },
  { icon: MousePointerClick, title: "SEM & PPC", desc: "Conversion-driven Google & Bing ads that maximize ROAS." },
  { icon: Share2, title: "Social Media (SMM)", desc: "Build a loyal audience on Instagram, LinkedIn, TikTok & more." },
  { icon: Mail, title: "Email Marketing", desc: "Lifecycle, automation & cold outreach that books meetings." },
  { icon: ShieldCheck, title: "ORM", desc: "Online reputation management to protect & elevate your brand." },
  { icon: Megaphone, title: "Influencer Marketing", desc: "Curated creator partnerships that drive real reach." },
  { icon: Users, title: "CRM", desc: "HubSpot, Zoho & Salesforce setup, automation and integrations." },
  { icon: Code2, title: "Web Development", desc: "Fast, scalable websites in React, Next.js, Shopify & WordPress." },
  { icon: Smartphone, title: "Mobile Development", desc: "Native iOS, Android and cross-platform Flutter / React Native apps." },
  { icon: Monitor, title: "Web Designing", desc: "UX-first website designs that convert visitors into customers." },
  { icon: Palette, title: "Graphic Designing", desc: "Logos, brand kits, social creatives and print-ready collateral." },
  { icon: Sparkles, title: "AI SEO", desc: "Get found in ChatGPT, Perplexity & Google AI Overviews." },
];

const pricing = [
  { name: "SEO", price: 250, popular: false, features: ["Keyword research & on-page", "Technical SEO audit", "Monthly reporting", "Content optimization"] },
  { name: "PPC", price: 200, popular: false, features: ["Google Ads setup", "Campaign optimization", "Conversion tracking", "Bi-weekly reports"] },
  { name: "AI SEO", price: 300, popular: true, features: ["ChatGPT & Perplexity SEO", "AEO + GEO optimization", "Schema & entity SEO", "AI visibility tracking"] },
  { name: "Digital Marketing", price: 350, popular: false, features: ["SEO + PPC + SMM", "Email & content", "Dedicated strategist", "Weekly reviews"] },
  { name: "Link Building", price: 200, popular: false, features: ["High-DA backlinks", "Guest post outreach", "HARO links", "White-hat only"] },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "15+", label: "Countries Served" },
  { value: "50+", label: "In-house Experts" },
];

const process = [
  { step: "01", title: "Discover", desc: "We audit your brand, competitors & goals to map opportunities." },
  { step: "02", title: "Strategize", desc: "A custom growth plan with KPIs, timelines & deliverables." },
  { step: "03", title: "Execute", desc: "Our specialists ship work weekly across every channel." },
  { step: "04", title: "Scale", desc: "Transparent reporting, iteration & compounding growth." },
];

const testimonials = [
  { name: "Aarav Mehta", role: "Founder, Lumio Skincare", quote: "Gadgets Guardians rebuilt our Shopify store and our SEO traffic 4x in 6 months. The most reliable agency we've worked with." },
  { name: "Sara Khan", role: "CMO, FinEdge", quote: "Their PPC team cut our cost-per-lead by 47%. Reporting is transparent and the strategy calls are gold." },
  { name: "James O'Connor", role: "CEO, NorthPeak SaaS", quote: "From mobile app to brand identity — one team, zero handoff friction. Truly an extension of our company." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyUs />
      <Pricing />
      <Process />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <img src={ggLogo.url} alt="Gadgets Guardians" className="h-10 w-10 rounded-md object-cover" />
          <span className="font-display text-xl tracking-tight text-foreground">
            gadgets<span className="text-accent">guardians</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#pricing" className="hover:text-accent transition-colors">Pricing</a>
          <a href="#process" className="hover:text-accent transition-colors">Process</a>
          <a href="#testimonials" className="hover:text-accent transition-colors">Clients</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition shadow-card-soft"
        >
          Get a Free Audit <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero text-cream">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[oklch(0.22_0.035_200)]" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-cream/80">
            <Sparkles className="h-3.5 w-3.5 text-copper" /> Award-winning tech agency
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] text-balance text-cream">
            Guardians of your <span className="italic text-copper">digital</span> growth.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/75 leading-relaxed">
            From SEO and paid media to web, mobile and design — Gadgets Guardians is the
            full-stack tech partner that turns ambitious brands into category leaders.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-copper-gradient text-white px-7 py-3.5 text-sm font-semibold shadow-copper hover:scale-[1.02] transition">
              Start your project <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-cream/30 text-cream px-7 py-3.5 text-sm font-medium hover:bg-cream/10 transition">
              Explore services
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8 text-sm text-cream/70">
            <div className="flex items-center gap-2">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-copper text-copper" />)}</div>
              <span>4.9/5 · 200+ reviews</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Award className="h-4 w-4 text-copper" /> Top Rated Agency 2025
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-6 bg-copper-gradient rounded-3xl opacity-20 blur-3xl" />
            <div className="relative rounded-3xl border border-cream/10 bg-[oklch(0.25_0.04_200)]/60 backdrop-blur p-8 shadow-elegant">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { k: "Organic Traffic", v: "+312%", icon: TrendingUp },
                  { k: "Avg. ROAS", v: "6.8x", icon: MousePointerClick },
                  { k: "Pages Ranked", v: "1.2M+", icon: Search },
                  { k: "Countries", v: "15+", icon: Globe },
                ].map((s) => (
                  <div key={s.k} className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-5">
                    <s.icon className="h-5 w-5 text-copper" />
                    <div className="mt-4 font-display text-3xl text-cream">{s.v}</div>
                    <div className="text-xs text-cream/60 mt-1">{s.k}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-copper-gradient text-white p-5 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-80">Free</div>
                  <div className="font-display text-xl">Website + SEO Audit</div>
                </div>
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const logos = ["Shopify", "HubSpot", "Google Ads", "Meta", "WordPress", "Webflow"];
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-wrap items-center justify-between gap-6">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Certified Partners</p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {logos.map((l) => (
            <span key={l} className="font-display text-xl text-foreground/60">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">What we do</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">
            One team. Every digital service you need to scale.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Replace five vendors with one accountable partner — strategy, execution and reporting under one roof.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-7 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-copper-gradient group-hover:text-white transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    { title: "Senior-only team", desc: "No juniors on your account. Every specialist has 5+ years of category experience." },
    { title: "Transparent reporting", desc: "Live dashboards, weekly calls and zero billable-hour games." },
    { title: "Performance guaranteed", desc: "If we don't hit the KPIs we agreed, you don't pay for that month. Period." },
  ];
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.25em] text-copper">Why Gadgets Guardians</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance text-cream">
            Built on craft, accountability & real results.
          </h2>
          <p className="mt-5 text-cream/70 leading-relaxed">
            We started Gadgets Guardians because the industry was full of vague reports and
            invisible work. We do the opposite — small senior teams, sharp deliverables and
            obsessive transparency.
          </p>
        </div>
        <div className="lg:col-span-7 space-y-4">
          {points.map((p, i) => (
            <div key={p.title} className="flex gap-5 rounded-2xl border border-cream/10 bg-cream/[0.03] p-6">
              <div className="font-display text-3xl text-copper shrink-0">0{i + 1}</div>
              <div>
                <h3 className="font-display text-2xl text-cream">{p.title}</h3>
                <p className="mt-1 text-cream/70 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Pricing</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">
            Cost-effective plans that grow with you.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Affordable digital marketing for startups, SMBs and enterprises. No contracts, cancel anytime.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-7 flex flex-col ${
                p.popular
                  ? "border-accent bg-primary text-primary-foreground shadow-elegant lg:-translate-y-4"
                  : "border-border bg-card"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-copper-gradient text-white text-[10px] uppercase tracking-widest px-3 py-1 font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className={`font-display text-2xl ${p.popular ? "text-cream" : ""}`}>{p.name}</h3>
              <div className="mt-2 text-xs uppercase tracking-wider opacity-70">Starting from</div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className={`font-display text-5xl ${p.popular ? "text-copper" : "text-accent"}`}>${p.price}</span>
                <span className="text-sm opacity-70">/mo</span>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className={`h-4 w-4 shrink-0 mt-0.5 ${p.popular ? "text-copper" : "text-accent"}`} />
                    <span className={p.popular ? "text-cream/85" : "text-muted-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  p.popular
                    ? "bg-copper-gradient text-white"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Get started <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Need web or mobile development? <a href="#contact" className="text-accent underline underline-offset-4">Request a custom quote →</a>
        </p>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">How we work</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">
            A proven 4-step process that compounds growth.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {process.map((p) => (
            <div key={p.step} className="rounded-2xl bg-card border border-border p-7 relative overflow-hidden">
              <div className="font-display text-7xl text-copper/15 absolute -top-2 -right-2 select-none">{p.step}</div>
              <div className="relative">
                <div className="font-display text-xs text-accent tracking-widest">STEP {p.step}</div>
                <h3 className="mt-2 font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-border py-12">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-5xl md:text-6xl text-primary">{s.value}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Client love</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">
            Trusted by founders & marketers worldwide.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-7 flex flex-col">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <blockquote className="mt-5 font-display text-xl leading-snug text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="font-medium text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-hero p-12 md:p-20 text-cream shadow-elegant">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-copper/30 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight text-cream text-balance">
                Let's build something <span className="italic text-copper">worth guarding.</span>
              </h2>
              <p className="mt-5 text-cream/75 max-w-lg">
                Book a free 30-minute strategy call. We'll audit your site, identify the
                biggest growth opportunities and send you a custom roadmap — no obligation.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@gadgetsguardianstech.com" className="flex items-center justify-between rounded-2xl bg-cream/[0.06] border border-cream/15 px-6 py-5 hover:bg-cream/[0.1] transition">
                <span className="flex items-center gap-4"><Mail className="h-5 w-5 text-copper" /><span className="text-cream">hello@gadgetsguardianstech.com</span></span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="tel:+910000000000" className="flex items-center justify-between rounded-2xl bg-cream/[0.06] border border-cream/15 px-6 py-5 hover:bg-cream/[0.1] transition">
                <span className="flex items-center gap-4"><Phone className="h-5 w-5 text-copper" /><span className="text-cream">+91 00000 00000</span></span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#" className="flex items-center justify-between rounded-2xl bg-copper-gradient text-white px-6 py-5 hover:opacity-95 transition shadow-copper">
                <span className="flex items-center gap-4"><MessageCircle className="h-5 w-5" /><span className="font-semibold">Chat on WhatsApp</span></span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={ggLogo.url} alt="Gadgets Guardians" className="h-10 w-10 rounded-md" />
            <span className="font-display text-xl text-cream">gadgets<span className="text-copper">guardians</span></span>
          </div>
          <p className="mt-5 max-w-sm text-sm text-cream/70 leading-relaxed">
            A full-service tech & digital marketing agency helping brands grow with strategy,
            craft and accountability.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-copper">Services</div>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li>SEO & AI SEO</li><li>PPC & SEM</li><li>Social Media</li>
            <li>Web Development</li><li>Mobile Development</li><li>Graphic Design</li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-copper">Company</div>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/55">
          <p>© {new Date().getFullYear()} Gadgets Guardians Tech. All rights reserved.</p>
          <p>gadgetsguardianstech.com</p>
        </div>
      </div>
    </footer>
  );
}
