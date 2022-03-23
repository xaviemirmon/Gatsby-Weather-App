import { Box, Grid, Heading, Paragraph } from "theme-ui"
import d2d from "degrees-to-direction"

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