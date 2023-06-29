export const getArticles = async ({ criteria }) => {



  /* Criteria will either be a written search or a set of categories from the user's settings.
     Use that to build the fetch url. For categories, use 'top-headlines' endpoint and do a separate
     query for each category, then combine the results. Otherwise use 'everything' endpoint and build
     the url with each search term. The parsing can be done here. - Ty'rese
   */

  const categories = ['general', 'business', 'entertainment',
                      'technology', 'sports', 'health', 'science']

  let articles = []
  let totalResults = 0

  if (categories.includes(criteria)){  // get articles from nav bar button
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${criteria}&apiKey=ba6325d8cd694530bee9199d481a3861`
    )

    const json = await response.json()

    articles = json.articles
    totalResults = json.totalResults



  } else {  // user settings

    let choices = criteria.split("/")
    choices.pop()

    for (let i=0; i<choices.length; i++){
      let response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${choices[i]}&apiKey=ba6325d8cd694530bee9199d481a3861`
      )

      let json = await response.json()

      articles = [...articles, ...json.articles]
      totalResults += json.totalResults

    }



  }





  return {
    totalResults: totalResults,
    articles: articles
  }
}