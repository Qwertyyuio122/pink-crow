// Real, verified photos from Pink Crow's official menu CDN.
// Each URL has been visually inspected to confirm the subject matches the label.
const CDN = "https://cdn.res-menu.net/pink-crow";

export const IMG = {
  // Exterior — the iconic hot-pink door on Queen Street, Charlottetown PEI
  storefront: `${CDN}/albums-1.jpg`,

  // Interior — open kitchen with the matte-black wood-fired oven at the centre
  kitchen: `${CDN}/albums-7.jpg`,

  // Atmosphere — smoked-glass tumblers on the oak counter
  glassware: `${CDN}/photo-8.jpg`,

  // Signature dishes (verified imagery)
  pepperoniPizza: `${CDN}/albums-3.jpg`,   // pepperoni Neapolitan, leoparded crust
  halfChicken:    `${CDN}/albums-4.jpg`,   // brined spit-roasted half chicken, charred corn, tallow fries
  octopus:        `${CDN}/albums-2.jpg`,   // chorizo-rubbed octopus, herb cream, fingerlings

  // Backwards-compatible aliases used elsewhere in the codebase
  pepperoniAlt:   `${CDN}/albums-3.jpg`,
  halfChickenAlt: `${CDN}/albums-4.jpg`,
  octopusAlt:     `${CDN}/albums-2.jpg`,
};
