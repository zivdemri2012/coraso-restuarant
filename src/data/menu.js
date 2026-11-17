// Entrées
import soupe from '../assets/images/dish-soupe-oignon.jpg'
import stJacques from '../assets/images/dish-saint-jacques.jpg'
import escargots from '../assets/images/dish-escargots.jpg'
import tartare from '../assets/images/dish-tartare-boeuf.jpg'
import foieGras from '../assets/images/dish-foie-gras.jpg'
import chevre from '../assets/images/dish-chevre-chaud.jpg'
// Plats
import porc from '../assets/images/dish-cote-de-porc.jpg'
import magret from '../assets/images/dish-magret-canard.jpg'
import filet from '../assets/images/dish-filet-boeuf.jpg'
import bouillabaisse from '../assets/images/dish-bouillabaisse.jpg'
import bar from '../assets/images/dish-bar-de-ligne.jpg'
import bourguignon from '../assets/images/dish-bourguignon.jpg'
// Desserts
import brulee from '../assets/images/dish-creme-brulee.jpg'
import tatin from '../assets/images/dish-tarte-tatin.jpg'
import mousse from '../assets/images/dish-mousse-chocolat.jpg'
import souffle from '../assets/images/dish-souffle.jpg'
import profiteroles from '../assets/images/dish-profiteroles.jpg'
import citron from '../assets/images/dish-tarte-citron.jpg'

export const CATEGORIES = [
  { id: 'all', label: 'All Dishes' },
  { id: 'starters', label: 'Starters', french: 'Entrées' },
  { id: 'mains', label: 'Main Courses', french: 'Plats' },
  { id: 'desserts', label: 'Desserts', french: 'Desserts' },
]

export const DISHES = [
  // ── Entrées ──────────────────────────────────────────────
  {
    id: 'soupe',
    category: 'starters',
    name: "Soupe à l'Oignon",
    description:
      'Onions slow-caramelised for six hours in veal stock, finished with aged Comté and a crisp sourdough crouton.',
    price: 14,
    image: soupe,
    alt: 'French onion soup with melted Comté in a stoneware bowl',
  },
  {
    id: 'saint-jacques',
    category: 'starters',
    name: 'Saint-Jacques Crues',
    description:
      'Hand-dived Normandy scallops, sliced raw, with citrus beurre blanc, pickled shallot and Espelette pepper.',
    price: 19,
    image: stJacques,
    alt: 'Thinly sliced raw scallops with red onion and herbs in a citrus dressing',
  },
  {
    id: 'escargots',
    category: 'starters',
    name: 'Escargots de Bourgogne',
    description:
      'Six Burgundy snails baked in their shells with parsley, garlic and Échiré butter, served with warm baguette.',
    price: 18,
    image: escargots,
    alt: 'Six Burgundy snails in their shells, bubbling with garlic and parsley butter in a cast-iron dish',
  },
  {
    id: 'tartare',
    category: 'starters',
    name: 'Tartare de Bœuf',
    description:
      'Hand-cut Charolais beef with capers, cornichons, shallot and Dijon mustard, crowned with fresh parsley.',
    price: 21,
    image: tartare,
    alt: 'A neat round of hand-cut beef tartare topped with curly parsley',
  },
  {
    id: 'foie-gras',
    category: 'starters',
    name: 'Foie Gras Poêlé',
    description:
      'Seared duck foie gras from the Périgord, spiced brioche, fig chutney and a reduction of aged port.',
    price: 26,
    image: foieGras,
    alt: 'Seared foie gras on a white plate with a glossy dark reduction',
  },
  {
    id: 'chevre-chaud',
    category: 'starters',
    name: 'Salade de Chèvre Chaud',
    description:
      'Warm Sainte-Maure goat cheese with a honey brûlée crust, garden leaves, strawberries and walnut vinaigrette.',
    price: 16,
    image: chevre,
    alt: 'Salad of mixed leaves and strawberries topped with a caramelised round of goat cheese',
  },

  // ── Plats ────────────────────────────────────────────────
  {
    id: 'cote-de-porc',
    category: 'mains',
    name: 'Côte de Porc Normande',
    description:
      'Heritage pork chop roasted on the bone, caramelised Calvados apples and a cider and wholegrain mustard jus.',
    price: 32,
    image: porc,
    alt: 'Roasted pork chop topped with caramelised apples and herbs',
  },
  {
    id: 'magret',
    category: 'mains',
    name: 'Magret de Canard',
    description:
      'Rosé duck breast from the Landes, cherries poached in Banyuls, gratin dauphinois and wilted spinach.',
    price: 36,
    image: magret,
    alt: 'Sliced pink duck breast with gratin and greens on a white plate',
  },
  {
    id: 'filet',
    category: 'mains',
    name: 'Filet de Bœuf',
    description:
      'Charolais beef fillet, bone-marrow crust, pommes soufflées and a deep Bordelaise sauce.',
    price: 42,
    image: filet,
    alt: 'Rare beef fillet sliced to show a rosy centre, with flaky salt',
  },
  {
    id: 'bouillabaisse',
    category: 'mains',
    name: 'Bouillabaisse Marseillaise',
    description:
      'Rockfish, langoustine and red mullet in a saffron and fennel broth, with rouille and garlic croûtons.',
    price: 39,
    image: bouillabaisse,
    alt: 'Saffron fish stew with langoustine and white fish in a shallow bowl',
  },
  {
    id: 'bar-de-ligne',
    category: 'mains',
    name: 'Bar de Ligne',
    description:
      'Line-caught Breton sea bass with crisp skin, beurre blanc, shaved fennel and young herbs from the garden.',
    price: 38,
    image: bar,
    alt: 'Sea bass fillet with golden crisp skin, topped with micro herbs, in a butter sauce',
  },
  {
    id: 'bourguignon',
    category: 'mains',
    name: 'Bœuf Bourguignon',
    description:
      'Beef cheek braised for nine hours in Pinot Noir with smoked lardons, button mushrooms and pearl onions.',
    price: 34,
    image: bourguignon,
    alt: 'Dark, glossy braised beef with mushrooms and pearl onions in a white bowl',
  },

  // ── Desserts ─────────────────────────────────────────────
  {
    id: 'brulee',
    category: 'desserts',
    name: 'Crème Brûlée',
    description:
      'Tahitian vanilla custard beneath a glass-thin caramel crust, served with a raspberry and garden mint.',
    price: 13,
    image: brulee,
    alt: 'Crème brûlée in a white ramekin topped with a raspberry and mint',
  },
  {
    id: 'tarte-tatin',
    category: 'desserts',
    name: 'Tarte Tatin',
    description:
      'Upside-down caramelised apple tart on butter puff pastry, with crème fraîche from Isigny.',
    price: 14,
    image: tatin,
    alt: 'Upside-down apple tart with deeply caramelised apples',
  },
  {
    id: 'mousse',
    category: 'desserts',
    name: 'Mousse au Chocolat',
    description:
      'Airy Valrhona Guanaja 70% mousse, Chantilly cream and fresh raspberries.',
    price: 12,
    image: mousse,
    alt: 'Chocolate mousse in a white ramekin with whipped cream and raspberries',
  },
  {
    id: 'souffle',
    category: 'desserts',
    name: 'Soufflé au Grand Marnier',
    description:
      'Baked to order and risen high above the ramekin, with orange liqueur and a dusting of icing sugar. Allow twenty minutes.',
    price: 16,
    image: souffle,
    alt: 'Three golden soufflés risen above their white ramekins',
  },
  {
    id: 'profiteroles',
    category: 'desserts',
    name: 'Profiteroles',
    description:
      'Choux pastry filled with Madagascar vanilla ice cream, finished at the table with warm dark chocolate sauce.',
    price: 14,
    image: profiteroles,
    alt: 'Warm chocolate sauce being poured over cream puffs',
  },
  {
    id: 'tarte-citron',
    category: 'desserts',
    name: 'Tarte au Citron Meringuée',
    description:
      'Menton lemon curd in a sablé breton crust, under a cloud of torched Italian meringue.',
    price: 13,
    image: citron,
    alt: 'Lemon meringue tart with swirled, torched meringue and a slice cut out',
  },
]
