export const QUERY = gql`

  query GetArticlesQuery($criteria: String!) {
    output: getArticles(criteria: $criteria) {
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
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ output }) => {
  let articles = output.articles
  let sortedArticles = [...articles]
  const articleDivs = []

  const compareDates = (a, b) => {
    const aDate = new Date(a.publishedAt)
    const bDate = new Date(b.publishedAt)

    if (aDate.getTime() > bDate.getTime()) return -1
    if (aDate.getTime() < bDate.getTime()) return 1
    return 0
  }



  sortedArticles.sort(compareDates)
  articles = sortedArticles

  for (let i = 0; i < articles.length; i++) {
    if (articles[i].title && articles[i].author &&  // only inlude articles that have all fields
        articles[i].publishedAt && articles[i].urlToImage && articles[i].content){
      const dateObj = new Date(articles[i].publishedAt)
      const dateString = (dateObj.getMonth()+1) + "/" + dateObj.getDate() + "/" + dateObj.getFullYear()


      articleDivs.push(
      <a href={articles[i].url} key={i}>
        <div className='article-div'>
          <img className='article-img' src={articles[i].urlToImage} width={"500"} height={"250"}></img>
          <div className='article-img-overlay'></div>
          <p className='article-title'>{articles[i].title.split(" - ")[0]}</p>
          <p className='article-author-time'>{articles[i].author.substring(0, 32) + "..."} — {dateString}</p>
          <p className='article-preview'>{articles[i].content.substring(0, 150) + "..."}</p>
        </div>
      </a>
      )

    }
  }

  console.log(articleDivs)

  //  react can display an array of components
  return <div className="articles-cell">{articleDivs}</div>
}

