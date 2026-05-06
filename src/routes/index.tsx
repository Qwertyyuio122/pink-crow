import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMG } from "@/lib/pinkcrow-images";
import { REVIEWS } from "@/lib/pinkcrow-data";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <Hero />
      <Marquee />
      <Story />
      <SignatureDishes />
      <ReviewsScroll />
      <CTA />
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden grain">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={IMG.kitchen}
          alt="Pink Crow's open kitchen and wood-fired oven glowing on Queen Street, Charlottetown PEI"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="text-xs uppercase tracking-[0.4em] text-primary">Charlottetown · PEI · Est. 2025</div>
          <h1 className="font-display text-6xl sm:text-7xl md:text-9xl leading-[0.9] text-balance max-w-5xl">
            Fire, flavour <em className="text-primary not-italic">&</em> a little flair.
          </h1>
          <p className="text-lg max-w-xl text-muted-foreground">
            Wood-fired Neapolitan pizza and dry-aged steak served in the heart of historic downtown Charlottetown.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="tel:+19028920909"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm uppercase tracking-[0.2em] font-medium hover:scale-[1.03] transition-transform"
            >
              Reserve a table
            </a>
            <Link
              to="/menu"
              className="px-6 py-3 rounded-full border border-foreground/30 text-sm uppercase tracking-[0.2em] hover:border-primary hover:text-primary transition-colors"
            >
              Explore the menu
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground animate-pulse">
        Scroll
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Wood-Fired", "Neapolitan Pizza", "Dry-Aged Steak", "Open Kitchen", "PEI Oysters", "Smoked Cocktails", "Charred Octopus"];
  return (
    <div className="border-y border-border bg-card/40 overflow-hidden">
      <motion.div
        className="flex gap-12 py-6 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-3xl md:text-4xl text-foreground/70">
            {t} <span className="text-primary mx-6">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Story() {
  return (
    <section className="py-32 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5] overflow-hidden rounded-sm"
        >
          <img src={IMG.storefront} alt="Pink Crow's signature hot-pink door at 45 Queen Street, Charlottetown" className="w-full h-full object-cover" />
          <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-6">The Vibe</div>
          <h2 className="font-display text-5xl md:text-6xl leading-tight text-balance">
            A harmonious blend of comfort & sophistication.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Tucked into a renovated heritage building on Queen Street, Pink Crow is where fire meets flair.
            Our open kitchen showcases expertly crafted Neapolitan-style pizzas, while the subtle aroma of
            smoked wood lingers in the air.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Friendly, attentive service. Inventive cocktails. A wood-fired oven roaring at the centre of it all.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SignatureDishes() {
  const dishes = [
    { img: IMG.pepperoniAlt, title: "Pepperoni", desc: "San Marzano, mozzarella, pepperoni, hot honey drizzle.", price: "$24" },
    { img: IMG.halfChickenAlt, title: "Half Chicken", desc: "Brined, spit roasted with charred corn & truffle ketchup.", price: "$32" },
    { img: IMG.octopusAlt, title: "Octopus", desc: "Chorizo rubbed, romesco, fingerlings, herb cream.", price: "$22" },
  ];
  return (
    <section className="py-32 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Signature plates</div>
          <h2 className="font-display text-5xl md:text-6xl">Crafted with fire.</h2>
        </div>
        <Link to="/menu" className="text-sm uppercase tracking-[0.2em] hover:text-primary transition-colors">
          Full menu →
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {dishes.map((d, i) => (
          <motion.article
            key={d.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden bg-card rounded-sm"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={d.img}
                alt={d.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl">{d.title}</h3>
                <span className="text-primary font-medium">{d.price}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ReviewsScroll() {
  const row1 = REVIEWS.slice(0, 4);
  const row2 = REVIEWS.slice(3);
  return (
    <section className="py-32 overflow-hidden">
      <div className="px-6 lg:px-16 max-w-7xl mx-auto mb-12">
        <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Loved on Google</div>
        <h2 className="font-display text-5xl md:text-6xl max-w-3xl text-balance">
          4.7 stars from guests who came hungry — and left grinning.
        </h2>
      </div>

      <ReviewRow reviews={[...row1, ...row1]} duration={50} />
      <div className="h-6" />
      <ReviewRow reviews={[...row2, ...row2]} duration={60} reverse />
    </section>
  );
}

function ReviewRow({
  reviews,
  duration,
  reverse,
}: {
  reviews: typeof REVIEWS;
  duration: number;
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {reviews.map((r, i) => (
          <figure
            key={i}
            className="w-[360px] md:w-[480px] shrink-0 p-8 rounded-sm bg-card border border-border"
          >
            <div className="text-primary text-xl mb-4">★★★★★</div>
            <blockquote className="font-display text-xl md:text-2xl leading-snug text-balance">
              "{r.quote}"
            </blockquote>
            <figcaption className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {r.name} <span className="text-primary">·</span> {r.role}
            </figcaption>
          </figure>
        ))}
      </motion.div>
    </div>
  );
}

function CTA() {
  return (
    <section className="relative py-32 px-6 lg:px-16 overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMG.glassware} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-7xl text-balance">
          Tonight could taste a little different.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Open daily 11:30 AM — 10:00 PM. Walk-ins welcome; reservations recommended for the wood-fired counter.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a
            href="tel:+19028920909"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground text-sm uppercase tracking-[0.2em] font-medium hover:scale-[1.03] transition-transform"
          >
            Call 902-892-0909
          </a>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full border border-foreground/30 text-sm uppercase tracking-[0.2em] hover:border-primary hover:text-primary transition-colors"
          >
            Find us
          </Link>
        </div>
      </div>
    </section>
  );
}
