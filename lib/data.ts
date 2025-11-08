export interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: {
    name: string
    avatar: string
  }
  date: string
  image: string
  featured?: boolean
}

export const categories = [
  { id: 'politics', name: 'Politics' },
  { id: 'sports', name: 'Sports' },
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'technology', name: 'Technology' },
  { id: 'business', name: 'Business' },
  { id: 'health', name: 'Health' },
]

export const articles: Article[] = [
  {
    id: '1',
    title: 'Government Announces New Economic Policy',
    excerpt: 'New economic measures aim to boost growth and stabilize the market.',
    content: 'The government has announced a comprehensive new economic policy aimed at stimulating growth and creating jobs. The measures include tax incentives for small businesses and infrastructure investments.',
    category: 'politics',
    author: {
      name: 'John Smith',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    date: '2025-11-08',
    image: 'https://placehold.co/800x450/2563eb/white?text=News+1',
    featured: true
  },
  {
    id: '2',
    title: 'Local Team Wins Championship',
    excerpt: 'In a thrilling match, the home team secured their first championship in a decade.',
    content: 'The local team made history last night with a stunning victory in the championship finals. The game went into overtime, keeping fans on the edge of their seats until the final buzzer.',
    category: 'sports',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    date: '2025-11-07',
    image: 'https://placehold.co/800x450/7c3aed/white?text=News+2',
    featured: true
  },
  {
    id: '3',
    title: 'New Smartphone Breaks Sales Records',
    excerpt: 'Latest smartphone model sells out within hours of release.',
    content: 'The newly released smartphone has exceeded all sales expectations, with units selling out within hours. Tech analysts attribute the success to its innovative features and competitive pricing.',
    category: 'technology',
    author: {
      name: 'Mike Chen',
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    date: '2025-11-06',
    image: 'https://placehold.co/800x450/059669/white?text=News+3',
    featured: true
  },
  {
    id: '4',
    title: 'Stock Market Hits Record High',
    excerpt: 'Major indices reach all-time highs amid positive economic indicators.',
    content: 'Investors celebrated as the stock market reached record levels today, driven by strong corporate earnings and positive economic data. Analysts remain cautiously optimistic about the market outlook.',
    category: 'business',
    author: {
      name: 'Emma Wilson',
      avatar: 'https://i.pravatar.cc/150?img=4'
    },
    date: '2025-11-05',
    image: 'https://placehold.co/800x450/d97706/white?text=News+4'
  },
  // Add more articles as needed
]
