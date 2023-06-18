export const QUERY = gql`
  query GetArticlesQuery($zip: String!) {
    output: getArticles(zip: $zip) {
      totalResults
      articles {
        ... on Article {
          author
          description
          publishedAt
          title
          content
          urlToImage
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
  const articles = output.articles
  const articleDivs = []

  for (let i = 0; i < articles.length; i++) {
    if (articles[i].title && articles[i].author &&  // only inlude articles that have all fields
        articles[i].publishedAt && articles[i].urlToImage && articles[i].content){
      const dateObj = new Date(articles[i].publishedAt)
      const dateString = dateObj.getMonth() + "/" + dateObj.getDate() + "/" + dateObj.getFullYear()


      articleDivs.push(
      <div className='article-div'>
        <img className='article-img' src={articles[i].urlToImage} width={"400"} height={"250"}></img>
        <div className='article-img-overlay'></div>
        <p className='article-title'>{articles[i].title.split(" - ")[0]}</p>
        <p className='article-author-time'>{articles[i].author} — {dateString}</p>
        <p className='article-preview'>{articles[i].content.substring(0, 150) + "..."}</p>
      </div>)

    }


  }

  //  react can display an array of components
  return <div className="articles-cell">{articleDivs}</div>
}

