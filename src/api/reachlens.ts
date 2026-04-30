export const analyzeUrl = async (url: string, version: string = 'v5') => {
    // Mocked for Vercel demo
    await new Promise(r => setTimeout(r, 1500));
    return {
        url,
        totalMentions: 1254,
        agenticStatus: "Gold",
        estimatedReach: 845000,
        confidenceScore: 92,
        sentimentScore: 2.4,
        velocity: 88,
        breakdown: {
            meta: {
                provenanceTier: "T0",
                deviation: 5,
                uv: 1200000,
                entropy: 0.85,
                socialProof: {
                    x: 450,
                    linkedin: 120
                }
            },
            google: {
                title: "Mocked Reach Lens Analysis for " + url,
                totalMentions: 450
            },
            reddit: {
                count: 125,
                posts: [
                    { title: "Discussion about " + url, subreddit: "technology", score: 120, permalink: "#" },
                    { title: "Amazing insights", subreddit: "artificial", score: 85, permalink: "#" }
                ]
            }
        }
    };
};
