// Mocked for Vercel demo
export async function getResults(uploadId: string, scope: "sector" | "client", scopeValue: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateMockData(scopeValue));
    }, 800);
  });
}

export async function getScopes(uploadId: string, type: "sector" | "client" = "sector"): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["General", "Tech Innovations", "Global Markets", "Brand Alpha", "Competitor Beta"]);
    }, 500);
  });
}

export async function getArticles(uploadId: string, filters: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Mock Article 1 about AI", publisher: "TechCrunch", author: "Jane Doe", sentiment: "positive", date: "2024-05-10" },
        { id: 2, title: "Market faces downturn", publisher: "WSJ", author: "John Smith", sentiment: "negative", date: "2024-05-11" },
        { id: 3, title: "New product launch is a huge success", publisher: "Wired", author: "Alice Bob", sentiment: "positive", date: "2024-05-12" }
      ]);
    }, 600);
  });
}

function generateMockData(seed: string) {
  const multiplier = seed.length % 3 === 0 ? 1.5 : (seed.length % 2 === 0 ? 0.8 : 1.2);
  const shift = seed.length % 7;
  const shiftArray = (arr: any[], amount: number) => [...arr.slice(amount), ...arr.slice(0, amount)];
  
  const basePublications = [
    { publisher: "Times of India", article_count: Math.floor(120 * multiplier) },
    { publisher: "The Economic Times", article_count: Math.floor(95 * multiplier) },
    { publisher: "Moneycontrol", article_count: Math.floor(82 * multiplier) },
    { publisher: "Mint", article_count: Math.floor(75 * multiplier) },
    { publisher: "Business Standard", article_count: Math.floor(64 * multiplier) },
    { publisher: "NDTV Profit", article_count: Math.floor(58 * multiplier) },
    { publisher: "CNBC TV18", article_count: Math.floor(45 * multiplier) },
    { publisher: "The Hindu Business Line", article_count: Math.floor(38 * multiplier) },
    { publisher: "Zee Business", article_count: Math.floor(32 * multiplier) },
    { publisher: "Financial Express", article_count: Math.floor(28 * multiplier) }
  ];

  const baseCompanies = [
    { name: "Reliance Ind", count: Math.floor(150 * multiplier) },
    { name: "TCS", count: Math.floor(120 * multiplier) },
    { name: "HDFC Bank", count: Math.floor(110 * multiplier) },
    { name: "Infosys", count: Math.floor(90 * multiplier) },
    { name: "Tata Motors", count: Math.floor(80 * multiplier) },
    { name: "ICICI Bank", count: Math.floor(75 * multiplier) },
    { name: "Bharti Airtel", count: Math.floor(70 * multiplier) },
    { name: "SBI", count: Math.floor(65 * multiplier) },
    { name: "L&T", count: Math.floor(60 * multiplier) },
    { name: "ITC", count: Math.floor(55 * multiplier) }
  ];

  const baseJournalists = [
    { author: "Rahul Sharma", article_count: Math.floor(45 * multiplier) },
    { author: "Priya Patel", article_count: Math.floor(38 * multiplier) },
    { author: "Amit Kumar", article_count: Math.floor(32 * multiplier) },
    { author: "Neha Gupta", article_count: Math.floor(29 * multiplier) },
    { author: "Vikram Singh", article_count: Math.floor(25 * multiplier) },
    { author: "Anjali Desai", article_count: Math.floor(21 * multiplier) },
    { author: "Rajesh Iyer", article_count: Math.floor(18 * multiplier) },
    { author: "Sneha Reddy", article_count: Math.floor(15 * multiplier) },
    { author: "Rohan Mehta", article_count: Math.floor(12 * multiplier) },
    { author: "Kavita Joshi", article_count: Math.floor(10 * multiplier) }
  ];

  return {
    meta: {
      total_articles: Math.floor(1500 * multiplier),
      english_articles: Math.floor(1400 * multiplier),
      duplicate_articles: Math.floor(100 * multiplier),
      failed_rows: 0
    },
    reachlens_enabled: true,
    widgets: {
      sentiment_overview: {
        donut: [
          { label: "positive", count: Math.floor(800 * multiplier) },
          { label: "neutral", count: Math.floor(500 * multiplier) },
          { label: "negative", count: Math.floor(200 * multiplier) }
        ]
      },
      word_cloud: {
        data: shiftArray([
          { word: "Innovation", weight: Math.floor(120 * multiplier) },
          { word: "Technology", weight: Math.floor(100 * multiplier) },
          { word: "Growth", weight: Math.floor(85 * multiplier) },
          { word: "AI", weight: Math.floor(150 * multiplier) },
          { word: "Future", weight: Math.floor(90 * multiplier) },
          { word: "Machine Learning", weight: Math.floor(80 * multiplier) },
          { word: "Data", weight: Math.floor(110 * multiplier) },
          { word: "Strategy", weight: Math.floor(75 * multiplier) },
          { word: "Startups", weight: Math.floor(95 * multiplier) },
          { word: "Investment", weight: Math.floor(85 * multiplier) },
          { word: "Revenue", weight: Math.floor(70 * multiplier) },
          { word: "Leadership", weight: Math.floor(65 * multiplier) },
          { word: "Global", weight: Math.floor(105 * multiplier) },
          { word: "Expansion", weight: Math.floor(60 * multiplier) },
          { word: "Ecosystem", weight: Math.floor(55 * multiplier) },
          { word: "Automation", weight: Math.floor(88 * multiplier) },
          { word: "Cloud", weight: Math.floor(92 * multiplier) },
          { word: "Security", weight: Math.floor(78 * multiplier) },
          { word: "Privacy", weight: Math.floor(62 * multiplier) },
          { word: "Enterprise", weight: Math.floor(82 * multiplier) },
          { word: "Consumer", weight: Math.floor(58 * multiplier) }
        ], shift)
      },
      top_publications: {
        data: shiftArray(basePublications, shift)
      },
      top_companies: {
        data: shiftArray(baseCompanies, shift)
      },
      top_journalists: {
        data: shiftArray(baseJournalists, shift)
      },
      hot_topics: {
        data: shiftArray([
          { topic: "AI advancements", score: 2.8 * multiplier },
          { topic: "Market expansion", score: 1.5 * multiplier },
          { topic: "Regulatory changes", score: 2.1 * multiplier }
        ], shift % 3)
      },
      positive_word_cloud: {
        data: shiftArray([
          { word: "Excellent", weight: Math.floor(40 * multiplier) },
          { word: "Breakthrough", weight: Math.floor(35 * multiplier) },
          { word: "Success", weight: Math.floor(30 * multiplier) },
          { word: "Visionary", weight: Math.floor(25 * multiplier) },
          { word: "Profitable", weight: Math.floor(28 * multiplier) },
          { word: "Surge", weight: Math.floor(22 * multiplier) },
          { word: "Promising", weight: Math.floor(20 * multiplier) },
          { word: "Robust", weight: Math.floor(18 * multiplier) },
          { word: "Efficient", weight: Math.floor(24 * multiplier) },
          { word: "Seamless", weight: Math.floor(15 * multiplier) }
        ], shift)
      },
      negative_word_cloud: {
        data: shiftArray([
          { word: "Delay", weight: Math.floor(15 * multiplier) },
          { word: "Concern", weight: Math.floor(10 * multiplier) },
          { word: "Risk", weight: Math.floor(8 * multiplier) },
          { word: "Layoffs", weight: Math.floor(12 * multiplier) },
          { word: "Lawsuit", weight: Math.floor(9 * multiplier) },
          { word: "Deficit", weight: Math.floor(7 * multiplier) },
          { word: "Vulnerable", weight: Math.floor(11 * multiplier) },
          { word: "Plunge", weight: Math.floor(14 * multiplier) },
          { word: "Recall", weight: Math.floor(6 * multiplier) },
          { word: "Backlash", weight: Math.floor(13 * multiplier) }
        ], shift)
      }
    }
  };
}
