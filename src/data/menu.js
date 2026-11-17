import soupe from '../assets/images/dish-soupe-oignon.jpg'
import stJacques from '../assets/images/dish-saint-jacques.jpg'
import porc from '../assets/images/dish-cote-de-porc.jpg'
import magret from '../assets/images/dish-magret-canard.jpg'
import filet from '../assets/images/dish-filet-boeuf.jpg'
import brulee from '../assets/images/dish-creme-brulee.jpg'

export const CATEGORIES = [
  { id: 'all', label: 'All Dishes' },
  { id: 'starters', label: 'Starters', french: 'Entrées' },
  { id: 'mains', label: 'Main Courses', french: 'Plats' },
  { id: 'desserts', label: 'Desserts', french: 'Desserts' },
]

export const DISHES = [
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
    id: 'brulee',
    category: 'desserts',
    name: 'Crème Brûlée',
    description:
      'Tahitian vanilla custard beneath a glass-thin caramel crust, served with a raspberry and garden mint.',
    price: 13,
    image: brulee,
    alt: 'Crème brûlée in a white ramekin topped with a raspberry and mint',
  },
]
