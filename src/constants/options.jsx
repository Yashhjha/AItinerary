export const SelectTravelList = [
  {
    id: 1,
    title: 'Just Me',
    desc: 'Solo vibes, self-exploration, full freedom',
    icon: '👨',
    people: '1 person',
  },
  {
    id: 2,
    title: 'A Couple',
    desc: 'Romantic getaway with your special one',
    icon: '🥂',
    people: '2 people',
  },
  {
    id: 3,
    title: 'Family',
    desc: 'Family time with smiles, stories & fun',
    icon: '👨🏾‍👩🏾‍👦🏾‍👦🏾',
    people: '3 to 5 people',
  },
  {
    id: 4,
    title: 'Friends',
    desc: 'Crazy adventures with your fun gang',
    icon: '⛵',
    people: '5 to 10 people',
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: 'Budget',
    desc: 'Explore smart, spend less, enjoy more',
    icon: '💶',
  },
  {
    id: 2,
    title: 'Comfort',
    desc: 'Balance comfort and cost wisely',
    icon: '💰',
  },
  {
    id: 3,
    title: 'Luxury',
    desc: 'Go all out — style, comfort, and ease',
    icon: '💎',
  },
];


export const AI_PROMPT = 'Generate Travel Plan for Location : {location}, for {totalDays} Days for {traveler} with a {budget} budget ,Give me a Hotels options list with Hotel Name, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with place Name, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format'