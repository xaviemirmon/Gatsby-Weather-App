import { graphql } from "gatsby"
import { Box, Paragraph, Grid, Heading } from "theme-ui"
import d2d from 'degrees-to-direction'

import Layout from "../components/Layouts/Layout"
import Seo from "../components/Seo/Seo"
import { useEffect, useState } from "react"
import { darken, transparentize } from "polished"
import { WeatherBlockClouds, WeatherBlockTempurature, WeatherBlockWind } from "../components/Blocks/WeatherBlocks"

const CityPage = ({data, pageContext}) => {
  const [imageData, setImageData] = useState('');
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
        <Seo title={`${data.allWeather.getCityByName.name}, ${data.allWeather.getCityByName.country} Weather`} />
        <Grid columns={[1, null, 3]}  sx={{
          backgroundColor: `rgba(0, 0, 0, .25)`,
          alignItems: `center`,
          border: `1px solid rgba(0, 0, 0, .3)`,
          boxShadow: `rgb(0 0 0 / 15%) 0px 0px 10px`,
          px: 5,
          my: 5,
          backdropFilter: `blur(5px)`,
          borderRadius: `10px`
        }}>
          <Box>
            <Paragraph sx={{
              fontSize: 8
            }}>{weather.temperature.actual} {tempUnit}</Paragraph>
            <Paragraph as={'small'}>Feels like: {weather.temperature.feelsLike} {tempUnit}</Paragraph>
          </Box>
          <Grid columns={1} sx={{
            m: `0 auto`
          }}>
            <img src={`https://openweathermap.org/img/wn/${weather.summary.icon}@4x.png`} loading="lazy" />
            <Paragraph
              sx={{
                pb:3
              }}
              variant={'text.centered'}
            >
              {weather.summary.title}
            </Paragraph>
          </Grid>
          <Heading as={'h1'} sx={{
            textAlign: `right`
          }}>
            {data.allWeather.getCityByName.name}, {data.allWeather.getCityByName.country}
          </Heading>
        </Grid>

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