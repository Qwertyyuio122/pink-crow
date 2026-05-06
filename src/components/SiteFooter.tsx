import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40 mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-3xl">Pink<span className="text-primary">·</span>Crow</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Wood-fired pizza & dry-aged steak in historic downtown Charlottetown, PEI.
          </p>
          <div className="flex gap-4 mt-6 text-muted-foreground">
            <a href="https://www.instagram.com/pinkcrowcharlottetown/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/pinkcrowpei/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        <div className="text-sm space-y-2">
          <div className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-3">Visit</div>
          <div>45 Queen St, Charlottetown</div>
          <div>PE C1A 4A4, Canada</div>
          <a href="tel:+19028920909" className="block hover:text-primary">+1 902-892-0909</a>
        </div>
        <div className="text-sm space-y-2">
          <div className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-3">Hours</div>
          <div>Monday – Sunday</div>
          <div>11:30 AM — 10:00 PM</div>
          <div className="flex gap-4 mt-4 uppercase tracking-[0.2em] text-xs">
            <Link to="/menu" className="hover:text-primary">Menu</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pink Crow · Crafted with fire
      </div>
    </footer>
  );
}
