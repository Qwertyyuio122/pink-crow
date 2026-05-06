export type MenuItem = { name: string; desc?: string; price?: string };
export type MenuSection = { title: string; items: MenuItem[] };

export const MENU: MenuSection[] = [
  {
    title: "Salads & Shareables",
    items: [
      { name: "Brussel Caesar", desc: "Charred leaves, bacon, parmesan, roasted garlic crumb, buttermilk dressing", price: "16" },
      { name: "Fennel & Apple", desc: "Local greens, cucumber, fennel, apple, avocado dressing, crispy onion", price: "14" },
      { name: "Warm Olive Plate", desc: "Marinated olives, assorted house pickles", price: "15" },
      { name: "Shishito Peppers", desc: "Roasted garlic aioli, lemon, parmesan", price: "17" },
      { name: "Charred Beet Salad", desc: "Goat cheese, ricotta spread, pumpkin seed brittle, arugula, burnt honey vinaigrette", price: "17" },
    ],
  },
  {
    title: "Appetizers",
    items: [
      { name: "Oysters", desc: "Mignonette, seafood sauce", price: "3.5 ea" },
      { name: "Fire Roasted Oysters", desc: "Half dozen, roasted pepperoni butter, garlic, lemon", price: "26" },
      { name: "Steamed PEI Mussels", desc: "Local beer, butter, garlic, lemon, grilled bread", price: "17" },
      { name: "Octopus", desc: "Chorizo rubbed, roasted red pepper pesto, fingerlings, pickled fennel, herb cream", price: "22" },
      { name: "Argentinian Shrimp", desc: "Chili garlic butter, chimichurri", price: "22" },
      { name: "Fire Roasted Brie", desc: "Honey, charred grapes, herbs, crostini", price: "24" },
    ],
  },
  {
    title: "Wood-Fired Pizza",
    items: [
      { name: "Margherita", desc: "Fresh mozzarella, San Marzano, basil, EVOO", price: "22" },
      { name: "Pepperoni", desc: "San Marzano, mozzarella, pepperoni, hot honey drizzle", price: "24" },
      { name: "Mushroom", desc: "Cheddar, bechamel, arugula, lemon, garlic buttered roasted mushrooms", price: "22" },
      { name: "Pear & Prosciutto", desc: "Fior di latte, grana padano, pear, prosciutto, pesto, balsamic", price: "24" },
      { name: "Lobster & Potato", desc: "Lobster, white cheddar, herbs, bechamel, tomato", price: "32" },
      { name: "Hamburger", desc: "Romesco, garlic aioli, B&B pickles, COWS white cheddar, charcoal bun", price: "24" },
    ],
  },
  {
    title: "Entrées",
    items: [
      { name: "Bavette", desc: "Green peppercorn chimichurri, tallow fries, truffle ketchup", price: "38" },
      { name: "Filet", desc: "Citrus heirloom carrots, broccolini, garlic parmesan white beans, steak sauce", price: "64" },
      { name: "Aged Ribeye", desc: "12oz grilled ribeye, confit garlic herb butter, fingerlings, grilled tomato salad", price: "75" },
      { name: "Half Chicken", desc: "Brined, spit roasted, charred corn, sweet potato fondant, citrus brown butter jus, herbs", price: "32" },
      { name: "Lobster Rigatoni", desc: "Butter poached lobster, roasted cauliflower, COWS white cheddar, cream, grilled lemon, herbs", price: "38" },
      { name: "Striped Bass", desc: "Seared bass, corn puree, fingerlings, local veg, red pepper vinaigrette", price: "38" },
      { name: "Beet-Burger", desc: "Grilled beet, citrus aioli, maple glaze, fennel slaw, goat cheese, charcoal bun", price: "20" },
      { name: "Cauliflower", desc: "Roasted cauliflower, carrot puree, baby potatoes, creamy green peppercorn", price: "22" },
    ],
  },
  {
    title: "Cocktails",
    items: [
      { name: "Ember & Oak", desc: "Busker Irish whiskey, spiced red wine reduction, bitters", price: "14" },
      { name: "White Orchard", desc: "Vodka, Dolin Vermouth Blanc, lychee, lemon, olive oil", price: "14" },
      { name: "Greenwood", desc: "Gin, Lillet Blanc, Curacao, Absinthe, mango shrub, lemon, lime, basil, rosemary", price: "16" },
      { name: "Desert Heat", desc: "Aperol, Tequila Reposado, lime, jalapeño, basil, agave, tajín", price: "15" },
      { name: "Smoke Show", desc: "Mezcal, Tequila, lime, ginger beer syrup", price: "15" },
      { name: "Summer Cellar", desc: "Vodka, Galliano, St. Germain, Prosecco, grape & basil", price: "15" },
      { name: "Dead Reckoning", desc: "Rum, cognac, pineapple, egg white, lemon", price: "16" },
      { name: "Razzle Dazzle", desc: "Non-Alc · raspberry, lime, ginger beer syrup, tonic", price: "9" },
    ],
  },
  {
    title: "Draught",
    items: [
      { name: "Copper Bottom, Red", price: "8.5" },
      { name: "PEI Brew Co, Beacon Blonde", price: "8.5" },
      { name: "Lone Oak, Hollywood IPA", price: "8.5" },
      { name: "Bogside, Tailgate APA", price: "8.5" },
      { name: "Coors Light", price: "8.5" },
      { name: "Stella Artois", price: "9.5" },
      { name: "Michelob Ultra", price: "9.5" },
    ],
  },
  {
    title: "Wine — White & Rosé",
    items: [
      { name: "Casal di Serra Verdicchio", desc: "Italy", price: "52 / btl" },
      { name: "Santa Margherita Pinot Grigio", desc: "Italy", price: "56 / btl" },
      { name: "Domaine de Grand Pré Dry Rosé", desc: "Nova Scotia", price: "52 / btl" },
      { name: "Loveblock Sauvignon Blanc", desc: "New Zealand", price: "58 / btl" },
      { name: "Mionetto Prestige Prosecco", desc: "Italy", price: "50 / btl" },
    ],
  },
  {
    title: "Wine — Red",
    items: [
      { name: "Errazuriz Max Reserva Cabernet", desc: "Chile", price: "59 / btl" },
      { name: "Lionel Osmin Cahors Malbec", desc: "France", price: "58 / btl" },
      { name: "Dogajolo Toscana", desc: "Italy", price: "56 / btl" },
      { name: "Fabiano Valpolicella Ripasso", desc: "Italy", price: "60 / btl" },
      { name: "Whitehaven Pinot Noir", desc: "New Zealand", price: "60 / btl" },
    ],
  },
];

export const REVIEWS = [
  { quote: "If you have one day in Charlottetown, grab a lobster roll at Water Prince for lunch, and come to the Pink Crow for dinner. Thank me later.", name: "Kenny L.", role: "Local Guide" },
  { quote: "The atmosphere is perfect and so inviting — not to mention the amazing food and drinks. Our server Kim was the best we've had in a while. Will definitely be back!", name: "Veronica Naterer", role: "Local Guide" },
  { quote: "Razzle Dazzle is an incredible cocktail — a must-try! The half chicken was so tender it literally melted on its own. The Margherita was fresh, flavourful, and delicious.", name: "Tejeshwar Singh", role: "Local Guide" },
  { quote: "Charlottetown's newest pizza offering. Warm contemporary feel, sleek lighting, a wooden trellis over the bar, and high-quality everything.", name: "Alex Wang", role: "Local Guide" },
  { quote: "I had the beet burger and it was absolutely delicious — the fries crispy, perfectly salted and beautifully golden. Truffle ketchup paired greatly.", name: "Mila Leduc", role: "Google Review" },
  { quote: "Great spot for excellent apps, wood-fired pizza, and dry-aged steaks.", name: "Google Reviewer", role: "★★★★★" },
  { quote: "Amazing customer service, good food and ambiance.", name: "Google Reviewer", role: "★★★★★" },
];
