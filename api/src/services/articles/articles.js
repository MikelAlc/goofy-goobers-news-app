export const getArticles = async ({ criteria, pageNumber, sortBy}) => {



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
      `https://newsapi.org/v2/top-headlines?country=us&category=${criteria}&pageSize=9&page=${pageNumber}&apiKey=6ea1d97965ac4d75a9ba09b29075cc1c`
    )

    const json = await response.json()

    articles = json.articles.map(article => ({
      ...article,
      category: criteria
    }));
    totalResults = json.totalResults



  } else if (criteria.includes("/")){  // user settings

    let choices = criteria.split("/")
    choices.pop()
    console.log(choices)

    for (let i=0; i<choices.length; i++){
      let response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${choices[i]}&pageSize=9&page=${pageNumber}&apiKey=7f867c25279c4ba79d18d1146c961de1`
      )

      let json = await response.json()
      if (Array.isArray(json.articles)) {

        let articlesWithCategory = json.articles.map(article => ({
          ...article,
          category: choices[i] // Assign the category value
        }));

        articles = [...articles, ...articlesWithCategory]
        totalResults += json.totalResults
        //console.log(articlesWithCategory)
      }

    }



  }
  else{
    console.log(criteria)
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${criteria}&pageSize=9&page=${pageNumber}&country=us&apiKey=6ea1d97965ac4d75a9ba09b29075cc1c`
    )

    const json = await response.json()

    articles = json.articles.map(article => ({
      ...article,
      category: criteria
    }));
    totalResults = json.totalResults
  }

  if (sortBy === 'author') {
    articles.sort((a, b) => a.author.localeCompare(b.author));
  } else if (sortBy === 'date') {
    articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  } else if (sortBy === 'source') {
    articles.sort((a, b) => a.source.name.localeCompare(b.source.name));
  }







  return {
    totalResults: totalResults,
    articles: articles
  }
}
