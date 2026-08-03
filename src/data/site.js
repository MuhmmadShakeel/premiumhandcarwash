export const company = {
  name: 'Premium Hand Car Wash LLC',
  shortName: 'Premium Hand Car Wash',
  tagline: 'Nothing Like a Clean Car',
  phone: '713-453-4461',
  phoneHref: 'tel:+17134534461',
  email: 'Mariothanoon@hotmail.com',
  address: '842 Freeport St, Houston, TX 77015',
  hours: [
    ['Monday – Saturday', '8:00 AM – 5:00 PM'],
    ['Sunday', '8:00 AM – 3:00 PM'],
  ],
}

export const benefits = [
  { icon: 'drops', title: 'Contactless Washing', text: 'We use top-of-the-line equipment to protect your vehicle.' },
  { icon: 'shield', title: 'Safety Materials', text: 'Only vehicle-safe products chosen to preserve every finish.' },
  { icon: 'wand', title: 'Modern Equipment', text: 'Professional tools and soft materials for a careful clean.' },
  { icon: 'sparkles', title: 'Extensive Cleaning', text: 'From tires to interior details, we go beyond the surface.' },
]

export const services = [
  { icon: 'car', number: '01', title: 'Premium Hand Wash', text: 'A careful exterior hand wash using a wash mitt, paint-safe materials and a hand-dried finish.' },
  { icon: 'sparkles', number: '02', title: 'Interior Detailing', text: 'Console, dash, windows, door trims, mats and interior surfaces detailed with precision.' },
  { icon: 'gauge', number: '03', title: 'Engine Service', text: 'Engine-bay inspection and cleaning, including visible areas, drying and a dressed finish.' },
  { icon: 'layers', number: '04', title: 'Carpet Shampoo', text: 'Deep shampoo and deodorizing for carpets and floor mats to refresh your cabin.' },
  { icon: 'shield', number: '05', title: 'Hand Wax', text: 'A protective hand wax that restores gloss and helps guard the finish from UV exposure.' },
  { icon: 'seat', number: '06', title: 'Leather Care', text: 'Leather surfaces cleaned and conditioned to help retain softness and appearance.' },
]

export const plans = [
  {
    name: 'Essential', price: '30', label: 'Hand Wash', featured: false,
    description: 'A careful refresh for a regularly maintained vehicle.',
    features: ['Hand wash with wash mitt', 'Paint-safe materials', 'Bug removal', 'Hand dry with chamois', 'Tires and rims cleaned', 'Windows cleaned'],
  },
  {
    name: 'Complete', price: '60', label: 'Wash & Detail', featured: true,
    description: 'Our popular inside-and-out clean for everyday vehicles.',
    features: ['Everything in Essential', 'Tire dressing', 'Console and dash dusting', 'Floor mats cleaned', 'Door trims cleaned', 'Air freshener and deodorizing'],
  },
  {
    name: 'Signature', price: '150', label: 'Full Detail', featured: false,
    description: 'A deep reset and protection treatment for the full vehicle.',
    features: ['Everything in Complete', 'Hand wax and UV protection', 'Carpet shampoo', 'Floor mat shampoo', 'Seat deep cleaning', 'Leather clean and condition'],
  },
]

export const rules = [
  'Pricing may change depending on the condition of the vehicle.',
  'No muddy vehicles.',
  'We do not wash vehicles with patch tires.',
  'Timing is subject to change.',
]
