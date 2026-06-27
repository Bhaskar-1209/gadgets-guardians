import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Menu,
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
  Phone,
  MessageCircle,
  Sparkles,
  Play,
  Link as LinkIcon,
  Activity,
  Headphones,
  GraduationCap,
  Trophy,
  Calendar,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  ArrowUpRight,
  Briefcase,
  Plus,
  Quote,
} from "lucide-react";
import * as React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ggLogo from "@/assets/gg-logo.png.asset.json";
import heroBg from "@/assets/hero-bg.jpg";
import officePoster from "@/assets/office-video-poster.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import worldMap from "@/assets/world-map.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gadgets Guardians — Digital Marketing, Web & Mobile Development Agency" },
      {
        name: "description",
        content:
          "Gadgets Guardians is a full-service tech agency offering SEO, SEM, SMM, PPC, web & mobile development and graphic design. Grow your brand with measurable results.",
      },
      { property: "og:title", content: "Gadgets Guardians — Digital Marketing & Tech Agency" },
      {
        property: "og:description",
        content: "SEO, SEM, SMM, PPC, ORM, web & mobile development. Plans from $200/mo.",
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
  { name: "SEO", price: 250, icon: Search, popular: false },
  { name: "PPC", price: 200, icon: Monitor, popular: false },
  { name: "AI SEO", price: 300, icon: Sparkles, popular: true },
  { name: "Digital Marketing", price: 350, icon: Activity, popular: false },
  { name: "Link Building", price: 200, icon: LinkIcon, popular: false },
];

const process = [
  { step: "01", title: "Discover", desc: "We audit your brand, competitors & goals to map opportunities." },
  { step: "02", title: "Strategize", desc: "A custom growth plan with KPIs, timelines & deliverables." },
  { step: "03", title: "Execute", desc: "Our specialists ship work weekly across every channel." },
  { step: "04", title: "Scale", desc: "Transparent reporting, iteration & compounding growth." },
];

const testimonials = [
  { name: "Brad Henderson", role: "Sports Bar Owner", img: testimonial1 },
  { name: "Sara Khan", role: "CMO, FinEdge", img: testimonial2 },
  { name: "Dyllan Dalya", role: "Owner at AutoDD", img: testimonial3 },
];

const blogs = [
  { img: blog1, tag: "Digital Marketing", title: "10 Digital Marketing Trends That Will Dominate 2026", date: "Jun 18, 2026", read: "6 min" },
  { img: blog2, tag: "SEO", title: "AI SEO: How to Rank in ChatGPT, Perplexity & Google AI Overviews", date: "Jun 12, 2026", read: "8 min" },
  { img: blog3, tag: "Social Media", title: "Instagram Algorithm 2026: A Complete Playbook for Brands", date: "Jun 04, 2026", read: "5 min" },
];

const countries = [
  { name: "United States", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "India", flag: "🇮🇳" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Ireland", flag: "🇮🇪" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "Brazil", flag: "🇧🇷" },
  { name: "Japan", flag: "🇯🇵" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustStrip />
      <Services />
      <Pricing />
      <WhyUs />
      <VideoTestimonials />
      <Testimonials />
      <Process />
      <WorldMap />
      <FAQ />
      <Blog />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

/* ------------------------------ HEADER ------------------------------ */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navItems = ["Home", "Who We Are", "Services", "AI", "Digital Marketing", "Case Studies", "Resources"];
  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      {/* <div className="bg-teal-darker text-cream/90 text-xs"> */}
      <div className="hidden md:block bg-teal-darker text-cream/90 text-xs">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between px-4 md:px-6 py-2.5 gap-3">
          <div className="flex items-center gap-2">
            <Trophy className="h-3.5 w-3.5 text-copper" />
            <span className="font-medium">Tech Agency of the Year 2025, 26</span>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <span className="hidden md:inline opacity-60">Free Audit:</span>
            <a href="mailto:hello@gadgetsguardianstech.com" className="hidden sm:inline hover:text-copper transition">hello@gadgetsguardianstech.com</a>
            <span className="hidden md:inline opacity-30">|</span>
            <a href="tel:+910000000000" className="hidden md:inline hover:text-copper transition">+91 00000 00000</a>
            <a
              href="https://wa.me/910000000000"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 text-white px-3.5 py-1.5 text-[11px] font-semibold hover:bg-emerald-600 transition"
            >
              <MessageCircle className="h-3.5 w-3.5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
      {/* Main nav */}
      <div className="bg-background/95 backdrop-blur-md border-b border-border">
        {/* <div className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-6 py-3"> */}
        {/* <div className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-6 py-4"> */}
        {/* <div className="mx-auto max-w-[1500px] flex items-center gap-6 px-4 lg:px-8 py-4"> */}
        <div className="mx-auto max-w-[1500px] flex items-center justify-between px-4 lg:px-8 py-3">
          {/* <a href="/" className="flex items-center gap-3 shrink-0"> */}
          {/* <a href="/" className="flex items-center gap-3 flex-shrink-0"> */}
          <a
  href="/"
  // className="flex items-center gap-3 w-auto lg:w-[280px] flex-shrink-0"
   className="flex flex-1 lg:flex-none items-center gap-2 min-w-0"
>
            <img src={ggLogo.url} alt="Gadgets Guardians logo" 
            // className="h-9 w-9 md:h-11 md:w-11 rounded-lg object-cover" 
              className="h-8 w-8 lg:h-11 lg:w-11 rounded-lg object-contain flex-shrink-0"
            />
            {/* <div className="leading-tight"> */}
            <div className="leading-tight min-w-0">
              {/* <div className="font-display text-base md:text-xl font-bold text-foreground"> */}
              {/* <div className="font-display text-lg lg:text-xl font-bold text-foreground truncate">
                Gadgets <span className="text-accent">Guardians</span>
              </div> */}
              <div className="font-display font-bold text-foreground">
  <span className="text-lg lg:text-xl">
    Gadgets
  </span>

  <span className="hidden sm:inline text-accent text-lg lg:text-xl">
    {" "}Guardians
  </span>
</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground hidden lg:block">Tech & Digital Marketing</div>
            </div>
          </a>
          {/* <nav className="hidden lg:flex items-center gap-1 rounded-full border border-border bg-card/60 px-2 py-1.5 text-sm">
            {navItems.map((n, i) => (
              <a
                key={n}
                href={`#${n.toLowerCase().replace(/\s+/g, "-")}`}
                className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full transition ${
                  i === 0 ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground/80"
                }`}
              >
                {n}
                {i > 0 && i < 6 && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              </a>
            ))}
          </nav> */}
          <nav className="hidden lg:flex flex-1 justify-center">
  <div className="flex items-center gap-1 rounded-full border border-border bg-card px-2 py-2">

    {navItems.map((n, i) => (

      <a
        key={n}
        href={`#${n.toLowerCase().replace(/\s+/g, "-")}`}
        className={`flex items-center gap-1 whitespace-nowrap rounded-full px-4 py-2 text-[15px] font-medium transition-all duration-300 ${
          i === 0
            ? "bg-primary text-white"
            : "hover:bg-muted"
        }`}
      >
        {n}

        {i > 0 && i < 6 && (
          <ChevronDown className="h-4 w-4" />
        )}

      </a>

    ))}

  </div>
</nav>
          {/* <div className="flex items-center gap-2"> */}
          {/* <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a href="#contact" className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-500 text-white px-4 py-2 text-sm font-semibold hover:bg-emerald-600 transition">
              Contact Us
            </a>
            <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-copper-gradient text-white px-4 py-2 text-sm font-semibold hover:opacity-95 transition shadow-copper">
              <Calendar className="h-4 w-4" /> Book a Meeting
            </a>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <button aria-label="Open menu" className="p-2">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-6 p-6">
                  <a href="/" className="flex items-center gap-3">
                    <img src={ggLogo.url} alt="Gadgets Guardians logo" className="h-9 w-9 md:h-11 md:w-11 rounded-lg object-cover" />
                    <div className="leading-tight">
                      <div className="font-display text-lg font-bold text-foreground">
                        Gadgets <span className="text-accent">Guardians</span>
                      </div>
                    </div>
                  </a>
                  <nav className="flex flex-col gap-2">
                    {navItems.map((n) => (
                      <a
                        key={n}
                        href={`#${n.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg font-medium text-foreground/80 hover:text-accent transition-colors py-2"
                      >
                        {n}
                      </a>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div> */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
  <a
    href="#contact"
    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 text-white px-4 py-2 text-sm font-semibold"
  >
    Contact Us
  </a>

  <a
    href="#contact"
    className="inline-flex items-center gap-1.5 rounded-full bg-copper-gradient text-white px-4 py-2 text-sm font-semibold"
  >
    <Calendar className="h-4 w-4" />
    Book a Meeting
  </a>
</div>
{/* <div className="lg:hidden"> */}
<div className="lg:hidden flex-shrink-0 ml-3">
  <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
    <SheetTrigger asChild>
      <button
        aria-label="Open menu"
        className="rounded-lg border border-border p-2"
      >
        <Menu className="h-6 w-6" />
      </button>
    </SheetTrigger>

    <SheetContent side="left" className="w-[300px]">
      <div className="flex flex-col gap-6 mt-6">

        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium"
          >
            {item}
          </a>
        ))}

      </div>
    </SheetContent>
  </Sheet>
</div>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------ HERO ------------------------------ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero text-cream">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-copper/40 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-teal-deep/80 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-cream/80">
            <Sparkles className="h-3.5 w-3.5 text-copper" /> Award-winning tech agency
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-extrabold leading-[1.02] tracking-tight text-balance text-cream">
            Guardians of your <span className="text-copper">digital growth</span>.
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
          <div className="mt-10 flex items-center gap-6 text-sm text-cream/70">
            <div className="flex items-center gap-2">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-copper text-copper" />)}</div>
              <span>4.9/5 · 200+ reviews</span>
            </div>
          </div>
        </div>
        {/* Animated hero image */}
        <div className="lg:col-span-6 relative">
          <div className="relative">
            <div className="absolute -inset-8 bg-copper-gradient rounded-[2.5rem] opacity-25 blur-3xl animate-pulse-glow" />
            <div className="relative animate-float-slow">
              <img
                src={heroBg}
                alt="Digital marketing dashboards and growth ecosystem"
                loading="eager"
                width={1536}
                height={1280}
                className="relative rounded-3xl border border-cream/10 shadow-elegant w-full"
              />
            </div>
            {/* Floating chips */}
            <div className="absolute -top-4 -left-4 md:-left-8 rounded-2xl bg-cream text-teal-darker px-4 py-3 shadow-elegant animate-float-fast">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-copper-gradient flex items-center justify-center text-white"><Activity className="h-5 w-5" /></div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider opacity-60">Organic ↑</div>
                  <div className="font-display font-bold text-lg leading-none">+312%</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 md:-right-6 rounded-2xl bg-cream text-teal-darker px-4 py-3 shadow-elegant animate-float-fast" style={{ animationDelay: "1.2s" }}>
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-teal-deep flex items-center justify-center text-cream"><MousePointerClick className="h-5 w-5" /></div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider opacity-60">Avg. ROAS</div>
                  <div className="font-display font-bold text-lg leading-none">6.8x</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ TRUST ------------------------------ */
function TrustStrip() {
  const logos = [
    "Shopify",
    "HubSpot",
    "Google Ads",
    "Meta",
    "WordPress",
    "Webflow",
    "Salesforce",
    "AWS",
  ];
  return (
    <section className="border-y border-border bg-card overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8 flex flex-col md:flex-row items-center gap-6">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground shrink-0">Certified Partners</p>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="font-display text-xl font-semibold text-foreground/50">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ SERVICES ------------------------------ */
function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">What we do</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">
            One team. Every digital service you need to scale.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Replace five vendors with one accountable partner — strategy, execution and reporting under one roof.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-7 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-copper-gradient group-hover:text-white transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PRICING (image 1 style) ------------------------------ */
function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-balance">
            Our Cost-Effective Service Pricing
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Our mission is to make digital marketing affordable for startups, SMBs and
            enterprises, helping them grow first. Every business deserves a chance to thrive online.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl bg-card border ${
                p.popular ? "border-2 border-accent" : "border-border"
              } p-6 flex flex-col items-center text-center transition hover:shadow-elegant hover:-translate-y-1`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-md bg-accent/15 text-accent text-[11px] uppercase tracking-wider px-3 py-1 font-semibold">
                  Popular
                </span>
              )}
              <div className="mt-2 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{p.name}</h3>
              <div className="mt-6 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Starting From</div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="font-display text-3xl font-bold text-foreground">${p.price}</span>
                <span className="text-xs text-muted-foreground">/mo</span>
              </div>
              <a
                href="#contact"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md bg-accent text-white px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition"
              >
                <LinkIcon className="h-3.5 w-3.5" /> Explore
              </a>
              <a
                href="#contact"
                className="mt-2 w-full inline-flex items-center justify-center rounded-md border border-accent text-accent px-4 py-2.5 text-sm font-semibold hover:bg-accent/5 transition"
              >
                Contact Us
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ WHY US (image 3) ------------------------------ */
function WhyUs() {
  const points = [
    { icon: GraduationCap, title: "Doctorate-Level Leadership", desc: "Led by experienced industry professionals", tint: "bg-teal-deep/10" },
    { icon: Headphones, title: "24/7 Dedicated Support", desc: "Always-on account management team", tint: "bg-emerald-500/10" },
    { icon: ShieldCheck, title: "98% Client Retention Rate", desc: "Clients who stay and grow with us", tint: "bg-copper/10" },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          {points.map((p, i) => (
            <div
              key={p.title}
              className={`flex items-center gap-5 rounded-2xl ${p.tint} border border-border p-6 border-l-4 ${
                i === 0 ? "border-l-teal-deep" : i === 1 ? "border-l-emerald-500" : "border-l-copper"
              }`}
            >
              <div className="h-14 w-14 shrink-0 rounded-xl bg-card flex items-center justify-center shadow-card-soft">
                <p.icon className="h-7 w-7 text-foreground" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-lg md:text-xl font-bold">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/3] group cursor-pointer">
          <img src={officePoster} alt="Gadgets Guardians HQ" loading="lazy" width={1280} height={800} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-darker/60 via-transparent to-transparent" />
          <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-card/90 backdrop-blur px-4 py-2 text-xs font-semibold text-foreground">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" /> Gadgets Guardians HQ
          </div>
          <button type="button" aria-label="Play video" className="absolute inset-0 m-auto h-20 w-20 rounded-full bg-cream/95 flex items-center justify-center shadow-elegant hover:scale-110 transition">
            <Play className="h-8 w-8 text-teal-deep ml-1 fill-teal-deep" />
          </button>
          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { v: "400+", l: "Digital Experts" },
              { v: "15+", l: "Countries Served" },
              { v: "30+", l: "Industry Niches" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl bg-teal-darker/70 backdrop-blur border border-cream/10 p-3 text-center text-cream">
                <div className="font-display font-bold text-xl">{s.v}</div>
                <div className="text-[10px] mt-0.5 opacity-80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ VIDEO TESTIMONIALS (image 2) ------------------------------ */
function VideoTestimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-balance">Clients Recommend Us</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Our affordable digital services have made a difference. Still unsure? Check out our video testimonials from{" "}
            <span className="text-accent underline underline-offset-4 font-semibold">1000+ satisfied clients</span> to see how we've helped them grow their online business.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="relative rounded-2xl overflow-hidden bg-card shadow-card-soft hover:shadow-elegant transition group cursor-pointer">
              <div className="relative aspect-[4/5]">
                <img src={t.img} alt={t.name} loading="lazy" width={800} height={1024} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-darker/85 via-teal-darker/10 to-transparent" />
                <button type="button" aria-label={`Play ${t.name} testimonial`} className="absolute bottom-5 right-5 h-14 w-14 rounded-full bg-cream/95 flex items-center justify-center shadow-elegant hover:scale-110 transition">
                  <Play className="h-6 w-6 text-teal-deep ml-0.5 fill-teal-deep" />
                </button>
                <div className="absolute bottom-5 left-5 text-cream">
                  <div className="font-display font-bold text-lg">{t.name}</div>
                  <div className="text-sm opacity-85">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PROCESS ------------------------------ */
function Process() {
  return (
    <section id="process" className="py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">How we work</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">
            A proven 4-step process that compounds growth.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {process.map((p) => (
            <div key={p.step} className="rounded-2xl bg-card border border-border p-7 relative overflow-hidden">
              <div className="font-display text-7xl font-bold text-copper/15 absolute -top-2 -right-2 select-none">{p.step}</div>
              <div className="relative">
                <div className="font-display text-xs font-bold text-accent tracking-widest">STEP {p.step}</div>
                <h3 className="mt-2 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ WORLD MAP (image 5) ------------------------------ */
function WorldMap() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-4 text-center lg:text-left">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-balance leading-tight">
            Satisfied Customers Around The World
          </h2>
          <p className="mt-5 text-muted-foreground">
            Gadgets Guardians has delighted customers in <strong className="text-foreground">15+ countries</strong> worldwide.
          </p>
          <div className="mt-10 inline-block">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">We Served In Over</div>
            <div className="font-display text-7xl md:text-8xl font-bold text-teal-deep mt-2">15+</div>
            <div className="font-display text-sm tracking-[0.4em] font-bold text-foreground/80">COUNTRIES</div>
          </div>
        </div>
        <div className="lg:col-span-8 relative">
          <img src={worldMap} alt="World map of countries served" loading="lazy" width={1400} height={700} className="w-full" />
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {countries.map((c) => (
              <span key={c.name} className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5 text-xs font-medium">
                <span>{c.flag}</span> {c.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ BLOG (image 2 highlight) ------------------------------ */
function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-accent">From the blog</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">
              Fresh insights from our growth experts.
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
            View all articles <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <article key={b.title} className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={b.img} alt={b.title} loading="lazy" width={1024} height={700} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-4 left-4 inline-flex rounded-full bg-cream/95 text-teal-deep px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">{b.tag}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{b.date}</span><span>•</span><span>{b.read} read</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug group-hover:text-accent transition">{b.title}</h3>
                <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Read article <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CTA ------------------------------ */
function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-hero p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-copper/30 blur-3xl" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center"></div> */}
            <div className="min-w-0">
              {/* <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-cream text-balance"> */}
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight break-words text-cream">
                Let's build something <span className="text-copper">worth guarding.</span>
              </h2>
              <p className="mt-5 text-cream/75 max-w-lg">
                Book a free 30-minute strategy call. We'll audit your site, identify the
                biggest growth opportunities and send you a custom roadmap — no obligation.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@gadgetsguardianstech.com" className="flex items-center justify-between gap-3 rounded-2xl bg-cream/[0.06] border border-cream/15 px-6 py-5 hover:bg-cream/[0.1] transition">
                <span className="flex items-center gap-4"><Mail className="h-5 w-5 text-copper flex-shrink-0" /><span className="text-cream break-all text-sm sm:text-base">hello@gadgetsguardianstech.com</span></span>
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
              </a>
              <a href="tel:+910000000000" className="flex items-center justify-between gap-3 rounded-2xl bg-cream/[0.06] border border-cream/15 px-6 py-5 hover:bg-cream/[0.1] transition">
                <span className="flex items-center gap-4"><Phone className="h-5 w-5 text-copper" /><span className="text-cream break-all text-sm sm:text-base">+91 00000 00000</span></span>
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
              </a>
              <a href="https://wa.me/910000000000" className="flex items-center justify-between gap-3 rounded-2xl bg-copper-gradient text-white px-6 py-5 hover:opacity-95 transition shadow-copper">
                <span className="flex items-center gap-4"><MessageCircle className="h-5 w-5" /><span className="font-semibold">Chat on WhatsApp</span></span>
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER (image 6 style, no CEO name) ------------------------------ */
function Footer() {
  const offices = [
    { country: "India (HQ)", address: "C 210 A, 4th Floor, Industrial Area, Phase 8B, Mohali, Punjab, 160071" },
    { country: "United Kingdom", address: "White Heather, St Mary's Road, Springborne, Bournemouth, BH14QP, UK" },
    { country: "United States", address: "1234 Market Street, Suite 500, San Francisco, CA 94103, USA" },
    { country: "Canada", address: "Robert Speck Parkway, Suite 750, Mississauga, ON L4Z 1H8, Canada" },
    { country: "Australia", address: "Barmedman Avenue, Gobbagombalin, NSW 2650, Australia" },
  ];
  const tagCloud = ["Digital Marketing", "Social Media Marketing", "Paid Marketing", "Amazon PPC", "Content Writing", "Web Design", "Reputation Management", "Web Analytics", "Influencer Marketing", "Shopify Marketing", "Product Marketing", "Startup Digital Marketing", "Facebook Ads", "Instagram Ads", "YouTube Ads", "Reddit Marketing", "Video Marketing", "Enterprise Digital Marketing", "WordPress Speed Optimization", "AI Digital Marketing"];
  return (
    <footer className="bg-teal-darker text-cream">
      {/* Top headline */}
      <div className="border-b border-cream/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-cream">The Sun Never Sets on Gadgets Guardians</h3>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-8">
            {offices.map((o) => (
              <div key={o.country} className="text-center">
                <div className="mx-auto h-10 w-10 rounded-md bg-copper/15 flex items-center justify-center mb-3">
                  <Briefcase className="h-5 w-5 text-copper" />
                </div>
                <div className="font-semibold text-cream">{o.country}</div>
                <div className="mt-1 text-xs text-cream/65 leading-relaxed">{o.address}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle columns */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <img src={ggLogo.url} alt="Gadgets Guardians" className="h-12 w-12 rounded-lg" />
            <div className="font-display text-xl font-bold">Gadgets <span className="text-copper">Guardians</span></div>
          </div>
          <p className="mt-5 text-sm text-cream/70 leading-relaxed">
            At Gadgets Guardians, each client is our top priority. We ensure every visit is satisfying and meets your expectations. Forward your concerns to{" "}
            <a href="mailto:hello@gadgetsguardianstech.com" className="text-copper font-semibold">hello@gadgetsguardianstech.com</a> anytime — we're committed to delivering our best at all times.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((I, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full bg-cream/5 border border-cream/10 flex items-center justify-center hover:bg-copper hover:border-copper transition">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="min-w-0">
          <h4 className="text-xs uppercase tracking-[0.2em] text-copper font-semibold">Our Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
            {["About Us", "Contact Us", "Client Reviews", "Locations", "Video Testimonials"].map((l) => (
              <li key={l}><a href="#" className="hover:text-copper transition">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <h4 className="text-xs uppercase tracking-[0.2em] text-copper font-semibold">Resources</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
            {["Portfolio", "PPC Portfolio", "SMO Portfolios", "SEO Portfolios", "Case Studies", "Latest Blogs"].map((l) => (
              <li key={l}><a href="#" className="hover:text-copper transition">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <h4 className="text-xs uppercase tracking-[0.2em] text-copper font-semibold">Packages</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
            {["SEO Small Business", "Digital Marketing", "AI SEO Packages", "Web Development", "Mobile App Plans"].map((l) => (
              <li key={l}><a href="#" className="hover:text-copper transition">{l}</a></li>
            ))}
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-2">
            {["Training", "Reseller", "Career", "Referral"].map((l) => (
              <a key={l} href="#" className="rounded-lg bg-cream/5 border border-cream/10 px-3 py-2 text-xs font-medium text-center hover:bg-copper/15 hover:border-copper/30 transition">{l}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Tag cloud */}
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-8 flex flex-wrap justify-center gap-x-2 gap-y-1">
          {tagCloud.map((t) => (
            <a key={t} href="#" className="text-[11px] text-cream/65 hover:text-copper transition border-r border-cream/10 pr-2 last:border-0">{t}</a>
          ))}
        </div>
      </div>

      {/* Partners */}
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-8 grid grid-cols-2 md:grid-cols-5 gap-4">
          {["Google Partner", "Meta Partner", "Bing Partner", "ISO Certified", "DMCA Protected"].map((p) => (
            <div key={p} className="rounded-lg bg-cream/5 border border-cream/10 px-4 py-3 text-center text-xs font-semibold text-cream/85">{p}</div>
          ))}
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/55">
          <p>© {new Date().getFullYear()} Gadgets Guardians. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <a href="#" className="hover:text-copper">Privacy Policy</a>
            <a href="#" className="hover:text-copper">Terms & Conditions</a>
            <a href="#" className="hover:text-copper">Legal Disclaimer</a>
            <a href="#" className="hover:text-copper">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------ TESTIMONIALS (written) ------------------------------ */
function Testimonials() {
  const items = [
    {
      quote:
        "Gadgets Guardians transformed our online presence. Within 6 months our organic traffic tripled and inbound leads are now our #1 channel.",
      name: "Amanda Rivera",
      role: "Founder, NorthPeak Studio",
      img: testimonial1,
    },
    {
      quote:
        "The team is incredibly responsive and data-driven. Their PPC overhaul cut our CPL by 47% while doubling qualified demos.",
      name: "Rohan Mehta",
      role: "Head of Growth, FinEdge",
      img: testimonial2,
    },
    {
      quote:
        "From rebranding to a full Shopify rebuild — they handled it end-to-end. Best agency partnership we've ever had, hands down.",
      name: "Dyllan Dalya",
      role: "Owner, AutoDD",
      img: testimonial3,
    },
  ];
  return (
    <section id="reviews" className="py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">What clients say</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">
            Loved by <span className="text-accent">200+ brands</span> worldwide.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl bg-card border border-border p-7 shadow-card-soft hover:shadow-elegant transition flex flex-col">
              <Quote className="h-8 w-8 text-accent/70" />
              <p className="mt-5 text-foreground/85 leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-2 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <div className="mt-5 flex items-center gap-3 pt-5 border-t border-border">
                <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div className="min-w-0">
                  <div className="font-display font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FAQ ------------------------------ */
function FAQ() {
  const faqs = [
    {
      q: "What services does Gadgets Guardians offer?",
      a: "We're a full-stack tech agency covering Digital Marketing (SEO, SEM, SMM, PPC, Email, ORM, Influencer, CRM), Web Development, Mobile App Development, Web Designing and Graphic Designing — all under one roof.",
    },
    {
      q: "How much do your services cost?",
      a: "Our plans start from $200/month for PPC and Link Building, $250/mo for SEO, $300/mo for AI SEO and $350/mo for Full-Stack Digital Marketing. Custom enterprise plans are also available.",
    },
    {
      q: "How long does it take to see results from SEO?",
      a: "SEO is a compounding investment. Most clients start seeing meaningful ranking and traffic improvements within 3–6 months, with strong ROI typically arriving between months 6–12.",
    },
    {
      q: "Do you work with international clients?",
      a: "Yes! We currently serve clients in 15+ countries including the US, UK, Canada, Australia, UAE, Singapore, Germany and more — with 24/7 dedicated account managers.",
    },
    {
      q: "Will I get reports of the work done?",
      a: "Absolutely. You'll receive transparent weekly progress updates and detailed monthly reports covering KPIs, deliverables, traffic, rankings and ROI.",
    },
    {
      q: "Do you build websites and mobile apps too?",
      a: "Yes — we build production-grade websites in React, Next.js, Shopify and WordPress, plus native iOS / Android and cross-platform Flutter & React Native mobile apps.",
    },
  ];
  return (
    <section id="faq" className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">FAQs</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance leading-tight">
            Questions? <span className="text-accent">We've got</span> answers.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Can't find what you're looking for? Reach out and our team will get back within 24 hours.
          </p>
          <a
            href="https://wa.me/910000000000"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-copper-gradient text-white px-6 py-3 text-sm font-semibold shadow-copper hover:scale-[1.02] transition"
          >
            <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
          </a>
        </div>
        <div className="lg:col-span-8 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group rounded-2xl bg-card border border-border p-6 open:shadow-card-soft transition"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                <span className="font-display text-base md:text-lg font-bold text-foreground">{f.q}</span>
                <span className="h-9 w-9 shrink-0 rounded-full bg-accent/10 text-accent flex items-center justify-center group-open:bg-accent group-open:text-white transition">
                  <Plus className="h-4 w-4 group-open:rotate-45 transition-transform" />
                </span>
              </summary>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ WHATSAPP FLOATING BUTTON ------------------------------ */
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/910000000000?text=Hi%20Gadgets%20Guardians%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/60 animate-ping" />
      <span className="relative flex items-center gap-2.5 rounded-full bg-emerald-500 text-white pl-4 pr-5 py-3.5 shadow-[0_18px_40px_-12px_rgba(16,185,129,0.6)] hover:bg-emerald-600 transition">
        <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current" aria-hidden="true">
          <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.385.694 4.605 1.89 6.473L4 29l7.71-1.86A11.93 11.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3Zm0 21.6c-1.71 0-3.36-.45-4.815-1.305l-.345-.21-4.575 1.11 1.155-4.41-.225-.36A9.55 9.55 0 0 1 6.4 15c0-5.295 4.305-9.6 9.6-9.6s9.6 4.305 9.6 9.6-4.304 9.6-9.6 9.6Zm5.355-7.155c-.285-.15-1.695-.84-1.96-.93-.27-.105-.465-.15-.66.15-.21.285-.765.93-.93 1.125-.18.18-.345.21-.63.075-.285-.15-1.215-.45-2.31-1.425a8.7 8.7 0 0 1-1.605-1.995c-.165-.285-.015-.45.135-.585.135-.135.285-.345.435-.51.135-.18.18-.285.285-.495.105-.21.045-.39-.015-.54-.075-.15-.66-1.59-.9-2.16-.24-.585-.495-.495-.66-.495h-.555c-.18 0-.495.075-.75.36-.27.285-1.005.99-1.005 2.4 0 1.41 1.035 2.79 1.17 2.985.15.195 2.04 3.105 4.965 4.35 1.755.75 2.43.825 3.3.69.525-.09 1.695-.69 1.935-1.365.24-.66.24-1.23.165-1.365-.075-.135-.27-.21-.555-.36Z" />
        </svg>
        <span className="hidden sm:inline text-sm font-semibold">Chat with us</span>
      </span>
    </a>
  );
}
