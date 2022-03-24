import { graphql } from "gatsby"
import { Box, Paragraph, Grid, Heading } from "theme-ui"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/Seo/Seo"
import { useEffect, useState } from "react"
import { darken, transparentize } from "polished"
import {
  WeatherBlockClouds,
  WeatherBlockTopLevelStats,
  WeatherBlockTempurature,
  WeatherBlockWind
} from "../components/Blocks/WeatherBlocks"

const CityPage = ({data, pageContext}) => {
  const [imageData, setImageData] = useState('');
  const city = data.allWeather.getCityByName.name
  const country = data.allWeather.getCityByName.country
  const weather = data.allWeather.getCityByName.weather
  const tempUnit = pageContext.unit === 'metric' ? '℃' : '℉'
  const speedUnit = pageContext.unit === 'metric' ? 'm/s' : 'mph'

  Object.entries(weather.temperature).forEach(entry => {
    const [key, value] = entry
    weather.temperature[key] = Math.round(value)
  })

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=${data.allWeather.getCityByName.name}%20,{data.allWeather.getCityByName.country}&per_page=1&orientation=landscape&client_id=iq1VPE3HOzECR8q0bLHvo6DKxEgWzCYQgBYax653pKU`).then(
      data => {
        data.json().then(
          json => {
            const fetchedDataResults = json.results[0]
            setImageData(fetchedDataResults)
          }
        )
      }
    )
    }, [data.allWeather.getCityByName.name])

  return (
  <Box sx={{
    background: `url(${imageData?.urls?.full}&width=1400) center center / cover`,
    minHeight: `100vh`
  }}>
    <Box sx={{
      backgroundImage: (theme) => (`linear-gradient(to bottom right, ${transparentize(.4, weather.summary.icon.slice(-1) === 'n' ? theme.rawColors.blue : theme.rawColors.yellow)}, ${transparentize(.6, darken(.2, weather.summary.icon.slice(-1) === 'n' ? theme.rawColors.blue : theme.rawColors.yellow))})`),
      color: `white`,
      minHeight: `100vh`
    }}>
      <Layout imageData={imageData}>
        <Seo title={`${city}, ${country} Weather`} />

        <WeatherBlockTopLevelStats data={weather} city={city} country={country} tempUnit={tempUnit}/>

        <Box sx={{
          my: 4
        }}>
          <WeatherBlockTempurature data={weather.temperature} tempUnit={tempUnit} />
        </Box>
        <Box sx={{
          my: 4
        }}>
          <Grid columns={[1, null, 2]}>
            <WeatherBlockWind data={weather.wind} speedUnit={speedUnit} />
            <WeatherBlockClouds data={weather.clouds} />
          </Grid>
        </Box>

        <Paragraph as="small">Data fetched: {new Date(weather.timestamp * 1000).toLocaleString()}</Paragraph>

      </Layout>
    </Box>
  </Box>
)}

export default CityPage

export const query = graphql`
  query ($city: String!, $country: String, $unit: Weather_Unit){
    allWeather {
      getCityByName(name: $city, country: $country, config: {units: $unit}) {
        country
        id
        name
        weather {
          wind {
            deg
            speed
          }
          timestamp
          temperature {
            actual
            feelsLike
            max
            min
          }
          summary {
            title
            icon
            description
          }
          clouds {
            all
            humidity
            visibility
          }
        }
      }
    }
  }
`