export const QUERY = gql`

  query GetArticlesQuery($criteria: String!, $pageNumber: Int!) {
    output: getArticles(criteria: $criteria, pageNumber: $pageNumber) {
      totalResults
      articles {
        ... on Article {
          author
          description
          publishedAt
          title
          content
          urlToImage
          url
          category
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div> <img src="img/sponge.jpeg" alt="No Results"/> </div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ output }) => {


  let articles = output.articles
  let sortedArticles = [...articles]
  const articleDivs = []
  console.log(sortedArticles)



  const compareDates = (a, b) => {
    const aDate = new Date(a.publishedAt)
    const bDate = new Date(b.publishedAt)

    if (aDate.getTime() > bDate.getTime()) return -1
    if (aDate.getTime() < bDate.getTime()) return 1
    return 0
  }


  sortedArticles.sort((a, b) => 0.5 - Math.random()) // randomize articles so categories not stacked
  sortedArticles.sort(compareDates)
  articles = sortedArticles

  let lastTitle=""
  let count=0

  for (let i = 0; i < articles.length; i++) {
    if (articles[i].title && articles[i].author &&  // only inlude articles that have all fields
        articles[i].publishedAt && articles[i].urlToImage && articles[i].content){
            count++
      if(lastTitle==articles[i].title) continue

      lastTitle=articles[i].title


      const dateObj = new Date(articles[i].publishedAt)

      const minutes = dateObj.getMinutes();
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

      const dateString = (dateObj.getMonth()+1) + "/" + dateObj.getDate() + "/" + dateObj.getFullYear() +" " + dateObj.getHours() +":" + formattedMinutes

      //console.log(articles[i])
      articleDivs.push(
      <a href={articles[i].url} key={i}>
        <div className='article-div'>
          <img className='article-img' src={articles[i].urlToImage} width={"500"} height={"250"}></img>
          <div className='article-img-overlay'></div>
          <p className='article-title'>{articles[i].title.split(" - ")[0]}</p>
          <p className='article-author-time'>{articles[i].author.substring(0, 20) + "..."} — {dateString} {articles[i].category.charAt(0).toUpperCase() + articles[i].category.slice(1)}</p>
          <p className='article-preview'>{articles[i].content.substring(0, 150) + "..."}</p>
        </div>
      </a>
      )

    }

    //console.log(count)
  }


  if(articleDivs.length<1){
    return <div align="center"><img src="img/sponge.jpeg" alt="No Results" /></div>
  }

  //  react can display an array of components
  return <div className="articles-cell">{articleDivs}</div>
}

