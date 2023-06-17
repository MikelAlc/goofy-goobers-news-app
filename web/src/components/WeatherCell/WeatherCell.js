export const QUERY = gql`
  query GetWeatherQuery($zip: String!) {
    output: getWeather(zip: $zip) {
      totalResults
      articles {
        ... on Article {
          title
          description
          publishedAt
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

  /*  Since the return values are HMTL/React elements themselves with JS
      in the parenthesis, I can't yet figure out how to generate them with
      loops.
   */

  return (
    <div>
      <p>{articles[0].title}</p>
      <p>{articles[1].title}</p>
      <p>{articles[2].title}</p>
      <p>{articles[3].title}</p>
      <p>{articles[4].title}</p>
      <p>{articles[5].title}</p>
      </div>

  )
}