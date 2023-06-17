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
    if (articles[i].title && articles[i].author && articles[i].publishedAt && articles[i].urlToImage){
      articleDivs.push(
      <div className='article-div'>
        <img className='article-img' src={articles[i].urlToImage} width={"500"} height={"300"}></img>
        <div className='article-img-overlay'></div>
        <p className='article-title'>hello</p>
      </div>)
      // paragraphs.push(<p style={{color: 'red'}}>{articles[i].title.split(" - ")[0]}</p>)
      // paragraphs.push(<p style={{color: 'red'}}>-----{articles[i].author}</p>)
      // paragraphs.push(<p style={{color: 'red'}}>-----{articles[i].publishedAt}</p>)
      // paragraphs.push(<img style={{color: 'red'}} src={articles[i].urlToImage} alt={"cover"} width={"500"} height={"300"}></img>)
    }


  }


  return <div>{articleDivs}</div>
}