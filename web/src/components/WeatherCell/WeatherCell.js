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
  const paragraphs = []

  for (let i = 0; i < articles.length; i++) {
    if (articles[i].title && articles[i].author && articles[i].publishedAt){
      paragraphs.push(<p style={{color: 'red'}}>{articles[i].title.split(" - ")[0]}</p>)
      paragraphs.push(<p>-----{articles[i].author}</p>)
      paragraphs.push(<p>-----{articles[i].publishedAt}</p>)
    }


  }


  return <div>{paragraphs}</div>
}