import { fetch } from '@whatwg-node/fetch'

export const getWeather = async ({ zip }) => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6ea1d97965ac4d75a9ba09b29075cc1c`
  )
  const json = await response.json()



  return {
    totalResults: json.totalResults,
    articles: json.articles
  }
}