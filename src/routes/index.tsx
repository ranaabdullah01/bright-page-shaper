import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useMemo, useRef, useState } from "react";
import {
  Building2,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Phone,
  MessageCircle,
  Mail,
  ArrowUpRight,
  Star,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import heroDubai from "@/assets/hero-dubai.jpg";
import propPenthouse from "@/assets/prop-penthouse.jpg";
import propVilla from "@/assets/prop-villa.jpg";
import propMarina from "@/assets/prop-marina.jpg";
import commDowntown from "@/assets/comm-downtown.jpg";
import commPalm from "@/assets/comm-palm.jpg";
import commHills from "@/assets/comm-hills.jpg";
import agentPhoto from "@/assets/agent.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "AK Web Services — Luxury Dubai Real Estate" },
      {
        name: "description",
        content:
          "Discover Dubai's finest properties with Ahmed Khan. Off-plan, resale, Golden Visa and portfolio advisory. RERA licensed.",
      },
    ],
  }),
});

const AGENCY = "AK WEB SERVICES";
const AGENT_NAME = "Ahmed Khan";
const PHONE = "+971 50 123 4567";
const WA = "https://wa.me/971501234567";

const NAV = [
  { label: "Properties", href: "#properties" },
  { label: "Off-Plan", href: "#offplan" },
  { label: "Communities", href: "#communities" },
  { label: "Advisory", href: "#advisory" },
  { label: "Contact", href: "#contact" },
];

const PROPERTIES = [
  {
    id: 1,
    img: propPenthouse,
    title: "Skyline Penthouse",
    community: "Downtown Dubai",
    price: "AED 12,500,000",
    beds: 4,
    baths: 5,
    area: "5,240",
    type: "Penthouse",
    tag: "Signature",
  },
  {
    id: 2,
    img: propVilla,
    title: "Beachfront Palm Villa",
    community: "Palm Jumeirah",
    price: "AED 25,000,000",
    beds: 6,
    baths: 7,
    area: "9,800",
    type: "Villa",
    tag: "Waterfront",
  },
  {
    id: 3,
    img: propMarina,
    title: "Marina Sky Residence",
    community: "Dubai Marina",
    price: "AED 3,800,000",
    beds: 2,
    baths: 3,
    area: "1,860",
    type: "Apartment",
    tag: "New Listing",
  },
];

const COMMUNITIES = [
  { name: "Downtown Dubai", img: commDowntown, note: "Burj views · Central" },
  { name: "Palm Jumeirah", img: commPalm, note: "Beachfront · Iconic" },
  { name: "Emirates Hills", img: commHills, note: "Villas · Golf" },
];

const TESTIMONIALS = [
  {
    quote:
      "Ahmed helped me find the perfect investment property in Dubai. His knowledge of off-plan projects and market trends is exceptional.",
    name: "Sarah Johnson",
    role: "Property Investor · UK",
  },
  {
    quote:
      "Professional, responsive, and truly understands luxury real estate. Made our property purchase seamless from start to finish.",
    name: "Michael Chen",
    role: "Business Owner · Singapore",
  },
  {
    quote:
      "Ahmed guided us through the entire Golden Visa process. His expertise made a complex process simple and fast.",
    name: "David Rodriguez",
    role: "Golden Visa · Spain",
  },
];

const STATS = [
  { k: "12+", v: "Years in Dubai" },
  { k: "850", v: "Properties Closed" },
  { k: "1.2K", v: "Global Clients" },
  { k: "AED 4B", v: "Transacted Volume" },
];

/* -------------------- Components -------------------- */

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-navy/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="w-9 h-9 grid place-items-center border border-gold/60 rounded-sm">
            <span className="font-display font-bold text-gold text-sm tracking-wider">AK</span>
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="text-[11px] tracking-[0.25em] text-gold uppercase">{AGENCY}</div>
            <div className="text-[10px] text-muted-foreground tracking-widest">Luxury Real Estate · Dubai</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-cream/80 hover:text-gold transition-colors relative group"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>
        <a
          href={WA}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 text-xs tracking-widest uppercase border border-gold/70 text-gold px-4 py-2 rounded-sm hover:bg-gold hover:text-navy transition-colors"
        >
          <MessageCircle size={14} /> Enquire
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroDubai}
          alt="Dubai skyline at twilight"
          width={1920}
          height={1200}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--navy)_90%)]" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 lg:px-10 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="hairline w-14" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-gold">
            RERA BRN 123456 · Est. 2013
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl max-w-5xl leading-[0.95]"
        >
          The address of <span className="gold-gradient-text italic font-light">Dubai&apos;s</span>
          <br /> most quiet fortunes.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 max-w-xl text-cream/70 text-base md:text-lg"
        >
          Signature residences, off-plan positions and Golden Visa portfolios —
          advised by {AGENT_NAME}, personally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#properties"
            className="group inline-flex items-center gap-3 bg-gold text-navy px-8 py-4 rounded-sm text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors"
          >
            View Collection
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-cream/30 text-cream px-8 py-4 rounded-sm text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
          >
            Private Consultation
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-cream/50 uppercase flex flex-col items-center gap-2"
      >
        Scroll
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-8 bg-gold/60"
        />
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = ["Downtown", "Palm Jumeirah", "Emirates Hills", "Dubai Marina", "Jumeirah Bay", "Dubai Hills", "Business Bay", "MBR City"];
  return (
    <div className="border-y border-border overflow-hidden bg-navy-light/40 py-5">
      <div className="flex whitespace-nowrap animate-marquee gap-16">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="font-display text-2xl md:text-3xl text-cream/70 tracking-tight">{item}</span>
            <span className="text-gold">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-5"
      >
        <span className="hairline w-10" />
        <span className="text-[11px] tracking-[0.35em] uppercase text-gold">{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02]"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-cream/60 max-w-xl"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}

function PropertyCard({ p, i }: { p: typeof PROPERTIES[number]; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-card border border-border rounded-sm overflow-hidden hover:border-gold/50 transition-colors"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase bg-gold/95 text-navy px-3 py-1.5 rounded-sm">
          {p.tag}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-widest text-cream/70">{p.type}</div>
            <div className="flex items-center gap-1 text-cream/90 text-sm mt-1">
              <MapPin size={12} className="text-gold" /> {p.community}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl mb-2">{p.title}</h3>
        <div className="gold-gradient-text font-display text-xl mb-5">{p.price}</div>
        <div className="flex items-center gap-5 text-xs text-cream/70 border-t border-border pt-4">
          <span className="flex items-center gap-1.5"><BedDouble size={14} className="text-gold" /> {p.beds} Beds</span>
          <span className="flex items-center gap-1.5"><Bath size={14} className="text-gold" /> {p.baths} Baths</span>
          <span className="flex items-center gap-1.5"><Maximize size={14} className="text-gold" /> {p.area} sqft</span>
        </div>
        <a
          href="#contact"
          className="mt-5 inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gold group/link"
        >
          Request Details
          <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.article>
  );
}

function Properties() {
  return (
    <section id="properties" className="py-28 md:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHead
            eyebrow="Signature Collection"
            title={<>Residences <em className="gold-gradient-text font-light">worth owning.</em></>}
            sub="A private selection of penthouses, villas and skyline residences across Dubai's most sought-after addresses."
          />
          <a href="#" className="text-xs tracking-[0.3em] uppercase text-gold border-b border-gold/40 pb-1 self-start md:self-end">
            View All Listings →
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROPERTIES.map((p, i) => <PropertyCard key={p.id} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}

function Communities() {
  return (
    <section id="communities" className="py-28 md:py-40 px-6 lg:px-10 bg-navy-light/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          eyebrow="The Neighbourhoods"
          title={<>Where Dubai <em className="gold-gradient-text font-light">lives well.</em></>}
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {COMMUNITIES.map((c, i) => (
            <motion.a
              key={c.name}
              href="#properties"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-border block"
            >
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-[10px] tracking-[0.35em] uppercase text-gold mb-2">{c.note}</div>
                <div className="font-display text-3xl md:text-4xl">{c.name}</div>
                <div className="mt-4 flex items-center gap-2 text-xs tracking-widest uppercase text-cream/70 group-hover:text-gold transition-colors">
                  Explore <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Agent() {
  return (
    <section id="advisory" className="py-28 md:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-gold/30">
            <img src={agentPhoto} alt={AGENT_NAME} loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gold text-navy p-6 rounded-sm hidden md:block">
            <div className="font-display text-3xl">12+</div>
            <div className="text-[10px] tracking-[0.3em] uppercase">Years</div>
          </div>
        </motion.div>

        <div className="lg:col-span-7">
          <SectionHead
            eyebrow="The Advisor"
            title={<>{AGENT_NAME} — <em className="gold-gradient-text font-light">personally.</em></>}
          />
          <p className="mt-6 text-cream/70 leading-relaxed">
            Over a decade advising private buyers, family offices and Golden Visa
            candidates on Dubai&apos;s luxury market. Every mandate is handled
            end-to-end — from off-market discovery and negotiation to handover
            and portfolio management.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-t border-gold/40 pt-4"
              >
                <div className="font-display gold-gradient-text text-3xl md:text-4xl">{s.k}</div>
                <div className="mt-1 text-[10px] tracking-[0.25em] uppercase text-cream/60">{s.v}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 text-xs tracking-widest uppercase rounded-sm hover:bg-gold-light transition-colors">
              <MessageCircle size={14} /> WhatsApp Ahmed
            </a>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 border border-cream/30 text-cream px-6 py-3 text-xs tracking-widest uppercase rounded-sm hover:border-gold hover:text-gold transition-colors">
              <Phone size={14} /> Call Direct
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ROI() {
  const [price, setPrice] = useState(2_000_000);
  const [rent, setRent] = useState(120_000);
  const [service, setService] = useState(15_000);
  const roi = useMemo(() => {
    const net = rent - service;
    return price > 0 ? ((net / price) * 100).toFixed(2) : "0.00";
  }, [price, rent, service]);

  return (
    <section id="offplan" className="py-28 md:py-40 px-6 lg:px-10 bg-navy-light/30 border-y border-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionHead
            eyebrow="Investment Advisory"
            title={<>Numbers before <em className="gold-gradient-text font-light">romance.</em></>}
            sub="Model gross and net yield on any Dubai asset. We share the same underwriting we use with family-office clients."
          />
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              { icon: TrendingUp, k: "6-9%", v: "Avg. Net Yield" },
              { icon: ShieldCheck, k: "0%", v: "Property Tax" },
              { icon: Sparkles, k: "10yr", v: "Golden Visa" },
            ].map(({ icon: Icon, k, v }) => (
              <div key={v} className="border border-border rounded-sm p-5 bg-card/60">
                <Icon size={18} className="text-gold mb-3" />
                <div className="font-display text-2xl gold-gradient-text">{k}</div>
                <div className="text-[10px] tracking-widest uppercase text-cream/60 mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card border border-gold/40 rounded-sm p-8 md:p-10"
        >
          <div className="text-[10px] tracking-[0.35em] uppercase text-gold mb-6">ROI Calculator</div>
          <div className="space-y-6">
            {[
              { label: "Property Price (AED)", value: price, set: setPrice, step: 100_000 },
              { label: "Annual Rent (AED)", value: rent, set: setRent, step: 5_000 },
              { label: "Service Charges (AED/yr)", value: service, set: setService, step: 1_000 },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-[11px] tracking-widest uppercase text-cream/60 mb-2">{f.label}</label>
                <input
                  type="number"
                  value={f.value}
                  step={f.step}
                  onChange={(e) => f.set(Number(e.target.value))}
                  className="w-full bg-navy/60 border border-border rounded-sm px-4 py-3 text-cream font-display text-xl focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-gold/30 flex items-end justify-between">
            <div>
              <div className="text-[10px] tracking-[0.35em] uppercase text-cream/60">Estimated Net Yield</div>
              <div className="font-display text-5xl md:text-6xl gold-gradient-text mt-2">{roi}%</div>
            </div>
            <a href="#contact" className="text-xs tracking-widest uppercase text-gold border-b border-gold/40 pb-1">
              Discuss →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-28 md:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          eyebrow="The Word"
          title={<>Reputation, <em className="gold-gradient-text font-light">quietly earned.</em></>}
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="border border-border rounded-sm p-8 bg-card/40 hover:border-gold/40 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-display text-lg leading-snug text-cream/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="text-sm text-cream">{t.name}</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-gold mt-1">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40 px-6 lg:px-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src={heroDubai} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/85" />
      </div>
      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="hairline w-10" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Begin The Conversation</span>
          <span className="hairline w-10" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl leading-[1.02]"
        >
          Your next Dubai address <br />
          <em className="gold-gradient-text font-light">starts here.</em>
        </motion.h2>

        <p className="mt-8 text-cream/70 max-w-xl mx-auto">
          Share what you&apos;re looking for. Ahmed responds personally within the hour, seven days a week.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { icon: MessageCircle, label: "WhatsApp", value: PHONE, href: WA },
            { icon: Phone, label: "Direct Line", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
            { icon: Mail, label: "Private Enquiry", value: "info@akwebservices.com", href: "mailto:info@akwebservices.com" },
          ].map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group border border-border hover:border-gold/60 rounded-sm p-6 bg-card/60 backdrop-blur-sm transition-colors text-left"
            >
              <Icon size={18} className="text-gold mb-4" />
              <div className="text-[10px] tracking-[0.3em] uppercase text-cream/60">{label}</div>
              <div className="mt-2 text-sm text-cream group-hover:text-gold transition-colors">{value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 lg:px-10 bg-navy">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 grid place-items-center border border-gold/60 rounded-sm">
            <span className="font-display font-bold text-gold text-xs tracking-wider">AK</span>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-gold">{AGENCY}</div>
            <div className="text-[10px] text-cream/50">RERA BRN 123456 · Dubai, UAE</div>
          </div>
        </div>
        <div className="text-[10px] tracking-[0.25em] uppercase text-cream/50">
          © {new Date().getFullYear()} AK Web Services · All Rights Reserved
        </div>
        <div className="flex items-center gap-5 text-cream/60">
          <Building2 size={14} />
          <a href="#" className="text-[11px] hover:text-gold transition-colors">Instagram</a>
          <a href="#" className="text-[11px] hover:text-gold transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

/* -------------------- Page -------------------- */

function Home() {
  return (
    <div className="min-h-screen bg-navy text-cream">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Properties />
        <Communities />
        <Agent />
        <ROI />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
