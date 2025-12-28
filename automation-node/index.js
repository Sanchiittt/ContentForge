const axios = require('axios');

/**
 * STEP 1: Fake Google Search (Simulation)
 */
function googleSearchSimulation(title) {
  return [
    {
      title: `In-depth analysis on ${title}`,
      url: 'https://exampleblog1.com/article'
    },
    {
      title: `${title} – Expert Opinion`,
      url: 'https://exampleblog2.com/blog'
    }
  ];
}

/**
 * STEP 2: Fake Scraping of Reference Articles
 */
function scrapeReferenceArticle(url) {
  return `
This is a detailed reference article scraped from ${url}.
It explains the topic with proper structure, headings, and examples.
Written in an SEO-friendly and professional tone.
`;
}

/**
 * STEP 3: AI Rewrite Simulation
 */
function aiRewrite(original, references) {
  return `
${original.title}

This updated article is rewritten using insights from top-ranking articles.
It has improved formatting, better explanations, and SEO-friendly structure.

${original.content}

References:
${references.map(r => r.url).join('\n')}
`;
}

/**
 * STEP 4: Save Updated Article using Laravel API
 */
async function saveUpdatedArticle(title, content) {
  await axios.post('http://127.0.0.1:8000/api/articles', {
    title: title,
    content: content,
    type: 'updated'
  });
}

/**
 * MAIN AUTOMATION FLOW
 */
async function runAutomation() {
  try {
    // Fetch original articles from Laravel API
    const res = await axios.get('http://127.0.0.1:8000/api/articles');
    const articles = res.data;

    for (const article of articles) {
      // Skip already updated articles
      if (article.type === 'updated') continue;

      console.log('\nOriginal Article:', article.title);

      // Google search simulation
      const searchResults = googleSearchSimulation(article.title);

      // Fake scraping reference contents
      const referenceContents = searchResults.map(r => ({
        url: r.url,
        content: scrapeReferenceArticle(r.url)
      }));

      console.log('Reference contents ready');

      // AI rewrite simulation
      const updatedContent = aiRewrite(article, referenceContents);
      console.log('AI rewritten article generated');

      // Save updated article
      await saveUpdatedArticle(
        article.title + ' (Updated)',
        updatedContent
      );

      console.log('Updated article saved');
    }

    console.log('\nAutomation completed successfully 🎉');

  } catch (error) {
    console.error('Automation error:', error.message);
  }
}

// Run script
runAutomation();
