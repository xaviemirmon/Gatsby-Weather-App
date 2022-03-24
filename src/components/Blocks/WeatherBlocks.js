import { Box, Grid, Heading, Paragraph } from "theme-ui"
import d2d from "degrees-to-direction"

export const WeatherBlockTopLevelStats = ({ data, city, country, tempUnit }) => (
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
      }}>{data.temperature.actual} {tempUnit}</Paragraph>
      <Paragraph as={'small'}>Feels like: {data.temperature.feelsLike} {tempUnit}</Paragraph>
    </Box>
    <Grid columns={1} sx={{
      m: `0 auto`
    }}>
      <img src={`https://openweathermap.org/img/wn/${data.summary.icon}@4x.png`} loading="lazy" alt="Weather status icon"/>
      <Paragraph
        sx={{
          pb:3
        }}
        variant={'text.centered'}
      >
        {data.summary.title}
      </Paragraph>
    </Grid>
    <Heading as={'h1'} sx={{
      textAlign: `right`
    }}>
      {city}, {country}
    </Heading>
  </Grid>
)

export const WeatherBlockTempurature = ({ data, tempUnit }) => (
  <Box>
    <Heading as={"h3"} sx={{
      mb: 3
    }}>
      Tempurature
    </Heading>
    <Grid columns={[1, null, 2, 4]}>
      <Paragraph>Currently: {data.actual} {tempUnit}</Paragraph>
      <Paragraph>Feels like: {data.feelsLike} {tempUnit}</Paragraph>
      <Paragraph>High: {data.max} {tempUnit}</Paragraph>
      <Paragraph>Low: {data.min} {tempUnit}</Paragraph>
    </Grid>
  </Box>
)

export const WeatherBlockWind = ({ data, speedUnit }) => (
  <Box>
    <Heading as={"h3"} sx={{
      mb: 3
    }}>
      Wind
    </Heading>
    <Grid columns={[1, null, 2]}>
      <Paragraph>Direction: {d2d(data.deg)}</Paragraph>
      <Paragraph>Speed: {data.speed} {speedUnit}</Paragraph>
    </Grid>
  </Box>
)

export const WeatherBlockClouds = ({ data }) => (
  <Box>
    <Heading as={"h3"} sx={{
      mb: 3
    }}>
      Clouds
    </Heading>
    <Grid columns={[1, null, 2]}>
      <Paragraph>Humidity: {data.humidity}%</Paragraph>
      <Paragraph>Visibility: {data.visibility / 1000}km</Paragraph>
    </Grid>
  </Box>
)