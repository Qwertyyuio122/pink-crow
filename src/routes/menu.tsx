import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MENU } from "@/lib/pinkcrow-data";
import { IMG } from "@/lib/pinkcrow-images";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Pink Crow · Charlottetown PEI" },
      { name: "description", content: "Wood-fired pizza, dry-aged steak, oysters, cocktails. Explore the full Pink Crow menu." },
      { property: "og:title", content: "Pink Crow Menu" },
      { property: "og:description", content: "Wood-fired pizza, dry-aged steak, oysters, cocktails." },
      { property: "og:image", content: IMG.pepperoniAlt },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div>
      <header className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <img src={IMG.pepperoniAlt} alt="Wood-fired pepperoni pizza with hot honey" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        <div className="relative h-full flex flex-col justify-end pb-16 px-6 lg:px-16 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">The Menu</div>
            <h1 className="font-display text-6xl md:text-8xl">Eat by the fire.</h1>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Crafted with fire and passion by Chef Jared Acorn and the Pink Crow culinary team.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="px-6 lg:px-16 max-w-6xl mx-auto py-24 space-y-24">
        {MENU.map((section, idx) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-6 mb-10">
              <span className="text-primary text-sm tracking-[0.3em]">0{idx + 1}</span>
              <h2 className="font-display text-4xl md:text-5xl">{section.title}</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {section.items.map((item) => (
                <li key={item.name} className="group">
                  <div className="flex items-baseline gap-4">
                    <h3 className="font-display text-xl">{item.name}</h3>
                    <span className="flex-1 border-b border-dotted border-border/60 translate-y-[-4px]" />
                    {item.price && <span className="text-primary font-medium">{item.price}</span>}
                  </div>
                  {item.desc && <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>}
                </li>
              ))}
            </ul>
          </motion.section>
        ))}

        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Prices in CAD · Substitute Gluten Free Crust +3 · Subject to change
        </p>
      </div>
    </div>
  );
}
