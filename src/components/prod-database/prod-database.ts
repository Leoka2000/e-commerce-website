
import Americano from '../../assets/images/americano.png'
import Capuccino from '../../assets/images/capuccino.png'
import Chocolate from '../../assets/images/chocolate.png'
import Cremoso from '../../assets/images/cremoso.png'
import Cubano from '../../assets/images/cubano.png'
import Gelado from '../../assets/images/gelado.png'
import Havaiano from '../../assets/images/Havaiano.png'
import Latte from '../../assets/images/latte.png'
import Leite from '../../assets/images/leite.png'
import Macchiato from '../../assets/images/macchiato.png'



export interface Product {
  id: number;
  productName: string;
  roast: string;
  description: string;
  price: number;
  productImage: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    productName: "Americano",
    roast: "Világos pörkölés",
    description: "Hagyományos eszpresszó fele-fele gőzölt tejjel!",
    price: 399.99,
    productImage: Americano,
  },
  {
    id: 2,
    productName: "Expresso Americano",
    roast: "Sötét pörkölés",
    description: "Hígított eszpresszó, kevésbé intenzív, mint a hagyományos",
    price: 399.99,
    productImage: Americano,
  },
  {
    id: 3,
    productName: "Krémes Eszpresszó",
    roast: "Világos pörkölés",
    description: "Hagyományos eszpresszó kávé krémes habbal",
    price: 399.99,
    productImage: Cremoso,
  },
  {
    id: 4,
    productName: "Jeges Eszpresszó",
    roast: "Világos pörkölés",
    description: "Eszpresszó kávéval és jégkockákkal készült ital",
    price: 459.99,
    productImage: Gelado,
  },
  {
    id: 5,
    productName: "Tejes Kávé",
    roast: "Sötét pörkölés",
    description: "Hagyományos eszpresszó fele-fele gőzölt tejjel!",
    price: 459.99,
    productImage: Leite,
  },
  {
    id: 6,
    productName: "Latte",
    roast: "Sötét pörkölés",
    description: "Fahéjas ital, amely egyenlő arányban kávéból, tejből és habból készül",
    price: 459.99,
    productImage: Latte,
  },
  {
    id: 7,
    productName: "Capuccino",
    roast: "Sötét pörkölés",
    description: "Egy adag eszpresszó dupla tejjel és krémes habbal",
    price: 499.99,
    productImage: Capuccino,
  },
  {
    id: 8,
    productName: "Macchiato",
    roast: "Sötét pörkölés",
    description: "Eszpresszó kávé némi forró tejjel és tejhabbal keverve",
    price: 499.99,
    productImage: Macchiato,
  },
  {
    id: 9,
    productName: "Cubano",
    roast: "Sötét pörkölés",
    description: "Jeges eszpresszó rummal, tejszínnel és mentával",
    price: 499.99,
    productImage: Cubano,
  }
  
]
