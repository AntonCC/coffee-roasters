import react from 'react'
// Banner
import Coffee from '../../assets/plan/desktop/image-hero-blackcup.jpg'

export const bannerInfo = {
  title: 'Create Plan',
  largerTitle: true,
  body: 'Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality.',
  backgroundImg: Coffee
}

export const subscriptionSectionInfo = [
  {
    id: 1,
    sectionNum: '01',
    title: 'Preferences'
  },
  {
    id: 2,
    sectionNum: '02',
    title: 'Bean Type'
  },
  {
    id: 3,
    sectionNum: '03',
    title: 'Quantity'
  },
  {
    id: 4,
    sectionNum: '04',
    title: 'Grind Option'
  },
  {
    id: 5,
    sectionNum: '05',
    title: 'Deliveries'
  },
]

export const subscriptionOptionInfo = [
  {
    id: 1,
    title: 'How do you drink your coffee?',
    options: [
      {
        optionTitle: 'Capsule',
        optionBody: 'Compatible with Nespresso systems and similar brewers.'
      },
      {
        optionTitle: 'Filter',
        optionBody: 'For pour over or drip methods like Aeropress, Chemex, and V60.'
      },
      {
        optionTitle: 'Espresso',
        optionBody: 'Dense and finely ground beans for an intense, flavorful experience.'
      },
    ]
  },
  {
    id: 2,
    title: 'What type of coffee?',
    options: [
      {
        optionTitle: 'Single Origin',
        optionBody: 'Distinct, high quality coffee from a specific family-owned farm.'
      },
      {
        optionTitle: 'Decaf',
        optionBody: 'Just like regular coffee, except the caffeine has been removed.'
      },
      {
        optionTitle: 'Blended',
        optionBody: 'Combination of two or three dark roasted beans of organic coffees.'
      },
    ]
  },
  {
    id: 3,
    title: 'How much would you like?',
    options: [
      {
        optionTitle: '250g',
        optionBody: 'Perfect for the solo drinker. Yields about 12 delicious cups.'
      },
      {
        optionTitle: '500g',
        optionBody: 'Perfect option for a couple. Yields about 40 delectable cups.'
      },
      {
        optionTitle: '1000g',
        optionBody: 'Perfect for offices and events. Yields about 90 delightful cups.'
      },
    ]
  },
  {
    id: 4,
    title: 'Want us to grind them?',
    options: [
      {
        optionTitle: 'Wholebean',
        optionBody: 'Best choice if you cherish the full sensory experience.'
      },
      {
        optionTitle: 'Filter',
        optionBody: 'For drip or pour-over coffee methods such as V60 or Aeropress.'
      },
      {
        optionTitle: 'Cafetiére',
        optionBody: 'Course ground beans specially suited for french press coffee.'
      },
    ]
  },
  {
    id: 5,
    title: 'How often should we deliver?',
    options: [
      {
        optionTitle: 'Every Week',
        optionBody: '$7.20 per shipment. Includes free first-class shipping.'
      },
      {
        optionTitle: 'Every 2 Weeks',
        optionBody: '$9.60 per shipment. Includes free priority shipping.'
      },
      {
        optionTitle: 'Every month',
        optionBody: '$12.00 per shipment. Includes free priority shipping.'
      },
    ]
  },
]