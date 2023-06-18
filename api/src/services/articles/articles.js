import { fetch } from '@whatwg-node/fetch'


export const getArticles = async ({ zip }) => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=7f867c25279c4ba79d18d1146c961de1`
  )

  const json = await response.json()




  return {
    totalResults: json.totalResults,
    articles: json.articles
  }
}