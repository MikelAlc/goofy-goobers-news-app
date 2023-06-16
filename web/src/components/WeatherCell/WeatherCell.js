export const QUERY = gql`
  query GetWeatherQuery($zip: String!) {
    weather: getWeather(zip: $zip) {
      zip
      status
      totalResults
      articles
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ weather }) => {
  return <div>{JSON.stringify(weather)}</div>
}