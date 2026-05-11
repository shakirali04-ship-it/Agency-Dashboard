export const clients = [
  { id: 1, name: 'Audi Hyderabad', industry: 'Auto Dealer', logo: 'AH' },
  { id: 2, name: 'Saboo RKS Maruti', industry: 'Auto Dealer', logo: 'SR' },
  { id: 3, name: 'Prestige Realty', industry: 'Real Estate', logo: 'PR' },
]

export const metaData = {
  spend: 142000,
  clicks: 8420,
  impressions: 198400,
  ctr: 4.24,
  leads: 312,
  cpl: 455,
  weeklyLeads: [42, 58, 61, 74, 69, 82, 88, 94],
  weeklySpend: [16000, 17500, 18200, 19800, 18600, 20100, 21400, 22400],
  campaigns: [
    { name: 'Audi Q5 — Test Drive', clicks: 2840, leads: 98, cpl: 412, score: 9, status: 'active' },
    { name: 'Audi Q8 — Brand', clicks: 2100, leads: 74, cpl: 489, score: 8, status: 'active' },
    { name: 'Audi A4 — Search', clicks: 1680, leads: 62, cpl: 445, score: 7, status: 'active' },
    { name: 'e-tron — Display', clicks: 980, leads: 48, cpl: 510, score: 6, status: 'active' },
    { name: 'A6 — Retargeting', clicks: 820, leads: 30, cpl: 618, score: 5, status: 'paused' },
  ],
  creatives: [
    { name: 'Q5 Lifestyle Reel', type: 'Video', hook: 9, visual: 8, cta: 9, status: 'top' },
    { name: 'Q8 Price Reveal', type: 'Carousel', hook: 8, visual: 9, cta: 7, status: 'top' },
    { name: 'A4 Feature Static', type: 'Image', hook: 5, visual: 6, cta: 5, status: 'weak' },
    { name: 'e-tron Launch Story', type: 'Story', hook: 7, visual: 8, cta: 6, status: 'average' },
  ]
}

export const googleData = {
  spend: 98000,
  clicks: 5641,
  impressions: 84200,
  ctr: 6.7,
  leads: 214,
  cpl: 458,
  weeklyLeads: [28, 32, 38, 41, 36, 44, 48, 52],
  topKeywords: [
    { kw: 'Audi dealer Hyderabad', clicks: 940, leads: 41, intent: 'high', cpl: 380 },
    { kw: 'Buy Audi Q5 Hyderabad', clicks: 820, leads: 34, intent: 'high', cpl: 412 },
    { kw: 'Audi Q8 price Hyderabad', clicks: 640, leads: 28, intent: 'high', cpl: 445 },
    { kw: 'Audi showroom near me', clicks: 580, leads: 24, intent: 'high', cpl: 460 },
    { kw: 'Audi car price India', clicks: 420, leads: 12, intent: 'low', cpl: 680 },
    { kw: 'Luxury cars Hyderabad', clicks: 380, leads: 10, intent: 'low', cpl: 720 },
  ],
  deviceSplit: [
    { device: 'Mobile', pct: 71, leads: 152 },
    { device: 'Desktop', pct: 22, leads: 47 },
    { device: 'Tablet', pct: 7, leads: 15 },
  ],
  locationSplit: [
    { loc: 'Banjara Hills', pct: 28 },
    { loc: 'Jubilee Hills', pct: 24 },
    { loc: 'Gachibowli', pct: 21 },
    { loc: 'Secunderabad', pct: 16 },
    { loc: 'Others', pct: 11 },
  ]
}

export const socialData = {
  reach: 182400,
  engagement: 4.8,
  followers: 28400,
  followerGrowth: 8.2,
  reelViews: 94200,
  storyViews: 41800,
  weeklyReach: [18200, 21400, 24800, 22100, 28400, 32100, 36200, 38100],
  posts: [
    { type: 'Reel', title: 'Q5 Test Drive Experience', reach: 42100, eng: 8.4, likes: 3540, comments: 218 },
    { type: 'Reel', title: 'Q8 Night Drive HYD', reach: 38200, eng: 7.9, likes: 3018, comments: 194 },
    { type: 'Carousel', title: 'Audi Features Breakdown', reach: 24800, eng: 5.2, likes: 1290, comments: 88 },
    { type: 'Image', title: 'Showroom Event May', reach: 18400, eng: 4.1, likes: 754, comments: 42 },
    { type: 'Story', title: 'Weekend Test Drive Offer', reach: 14200, eng: 3.8, likes: 0, comments: 0 },
  ]
}

export const gmbData = {
  calls: 284,
  websiteClicks: 1840,
  directions: 412,
  views: 48200,
  locations: ['Banjara Hills', 'Gachibowli'],
  reviews: {
    total: 48,
    positive: 41,
    negative: 7,
    avgRating: 4.6,
    positiveTopics: [
      { topic: 'Sales experience', count: 28 },
      { topic: 'Showroom ambience', count: 22 },
      { topic: 'Staff behavior', count: 19 },
      { topic: 'Test drive experience', count: 16 },
      { topic: 'Hospitality', count: 14 },
    ],
    negativeTopics: [
      { topic: 'Waiting time', count: 4 },
      { topic: 'Communication gaps', count: 3 },
      { topic: 'Parking', count: 2 },
      { topic: 'Service delays', count: 1 },
    ],
    recent: [
      { name: 'Rajesh K.', rating: 5, text: 'Excellent showroom experience. The staff was very professional and helped us choose the perfect Q5.', sentiment: 'positive' },
      { name: 'Priya M.', rating: 5, text: 'Amazing test drive experience for the Q8. Sales team was knowledgeable and not pushy at all.', sentiment: 'positive' },
      { name: 'Suresh R.', rating: 2, text: 'Had to wait over 45 minutes before anyone attended to us. Poor communication about wait times.', sentiment: 'negative' },
      { name: 'Anitha V.', rating: 5, text: 'Wonderful hospitality and a truly premium showroom environment. Highly recommend!', sentiment: 'positive' },
      { name: 'Kiran B.', rating: 4, text: 'Great experience overall. Parking could be improved but the staff more than made up for it.', sentiment: 'positive' },
    ]
  }
}

export const whatsappData = {
  sent: 4200,
  delivered: 4116,
  read: 3240,
  clicked: 1890,
  replies: 620,
  leads: 184,
  readRate: 78.7,
  clickRate: 45.0,
  campaigns: [
    { name: 'Q5 Weekend Offer', sent: 1800, read: 82, click: 51, leads: 88 },
    { name: 'Monsoon Service Deal', sent: 1400, read: 76, click: 42, leads: 62 },
    { name: 'Q8 Launch Invite', sent: 1000, read: 81, click: 44, leads: 34 },
  ]
}
