export const getArticles = async ({ criteria }) => {

  /* Criteria will either be a written search or a chosen category. Use that to build the fetch url.
     For categories, use top-headlines endpoint and simmply input the category. Otherwise use
     everything endpoint and build the url with each search term. The parsing can be done here. - Ty'rese
   */

  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${criteria}&apiKey=ba6325d8cd694530bee9199d481a3861`
  )

  const json = await response.json()




  return {
    totalResults: json.totalResults,
    articles: json.articles
  }
}