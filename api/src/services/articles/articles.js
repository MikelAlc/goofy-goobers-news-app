


export const getArticles = async ({ zip }) => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=ba6325d8cd694530bee9199d481a3861`
  )

  const json = await response.json()




  return {
    totalResults: json.totalResults,
    articles: json.articles
  }
}