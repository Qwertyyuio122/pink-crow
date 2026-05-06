import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { IMG } from "@/lib/pinkcrow-images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit — Pink Crow · Charlottetown PEI" },
      { name: "description", content: "Visit Pink Crow at 45 Queen St, Charlottetown PEI. Open daily 11:30 AM – 10 PM. Call 902-892-0909." },
      { property: "og:title", content: "Find Pink Crow" },
      { property: "og:description", content: "45 Queen St, Charlottetown PEI · Open daily 11:30 AM – 10 PM." },
      { property: "og:image", content: IMG.storefront },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <header className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <img src={IMG.storefront} alt="Pink Crow storefront with iconic pink door on Queen Street" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        <div className="relative h-full flex flex-col justify-end pb-16 px-6 lg:px-16 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Visit Us</div>
            <h1 className="font-display text-6xl md:text-8xl">Come find the pink door.</h1>
          </motion.div>
        </div>
      </header>

      <section className="px-6 lg:px-16 max-w-7xl mx-auto py-24 grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <Block label="Address">
            <p className="font-display text-3xl">45 Queen Street</p>
            <p className="font-display text-3xl">Charlottetown, PE C1A 4A4</p>
            <a
              href="https://maps.google.com/?q=Pink+Crow+45+Queen+St+Charlottetown"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-sm uppercase tracking-[0.2em] text-primary hover:underline"
            >
              Open in Google Maps →
            </a>
          </Block>

          <Block label="Reservations">
            <a href="tel:+19028920909" className="font-display text-3xl hover:text-primary transition-colors">
              +1 902-892-0909
            </a>
            <p className="text-muted-foreground mt-2">
              <a href="mailto:inquiry@pinkcrow.ca" className="hover:text-primary">inquiry@pinkcrow.ca</a>
            </p>
          </Block>

          <Block label="Hours">
            <p className="font-display text-3xl">Monday – Sunday</p>
            <p className="text-muted-foreground">11:30 AM — 10:00 PM</p>
          </Block>

          <Block label="Follow">
            <a
              href="https://www.facebook.com/pinkcrowpei/"
              target="_blank"
              rel="noreferrer"
              className="text-sm uppercase tracking-[0.2em] hover:text-primary"
            >
              Facebook · @pinkcrowpei
            </a>
          </Block>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative aspect-[4/5] lg:aspect-auto rounded-sm overflow-hidden border border-border"
        >
          <iframe
            title="Pink Crow on Google Maps"
            src="https://www.google.com/maps?q=45+Queen+St,+Charlottetown,+PE+C1A+4A4&output=embed"
            className="w-full h-full min-h-[480px] grayscale-[40%] contrast-[1.1]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>
    </div>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.4em] text-primary mb-3">{label}</div>
      {children}
    </div>
  );
}
