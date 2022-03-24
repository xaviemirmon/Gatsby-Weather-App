import { Grid, Heading, Paragraph } from "theme-ui"
import d2d from "degrees-to-direction"
import { GlassOverlayBackground } from "../Backgrounds/Backgrounds"
import { ResponsiveTextAlignedBox } from "./Boxes"

export const WeatherBlockTopLevelStats = ({ data, city, country, tempUnit }) => (
  <GlassOverlayBackground>
    <Grid columns={[1, null, 3]}  sx={{
      alignItems: `center`,
      px: 5,
      my: 4,
    }}>
      <ResponsiveTextAlignedBox align={'left'}>
        <Paragraph sx={{
          fontSize: 8
        }}>{data.temperature.actual} {tempUnit}</Paragraph>
        <Paragraph as={'small'}>Feels like: {data.temperature.feelsLike} {tempUnit}</Paragraph>
      </ResponsiveTextAlignedBox>
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
      <ResponsiveTextAlignedBox align={'right'}>
        <Heading as={'h1'}>{city}, {country}</Heading>
      </ResponsiveTextAlignedBox>
    </Grid>
  </GlassOverlayBackground>
)

export const WeatherBlockTempurature = ({ data, tempUnit }) => (
  <ResponsiveTextAlignedBox align={'left'}>
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
  </ResponsiveTextAlignedBox>
)

export const WeatherBlockWind = ({ data, speedUnit }) => (
  <ResponsiveTextAlignedBox align={'left'}>
    <Heading as={"h3"} sx={{
      mb: 3
    }}>
      Wind
    </Heading>
    <Grid columns={[1, null, 2]}>
      <Paragraph>Direction: {d2d(data.deg)}</Paragraph>
      <Paragraph>Speed: {data.speed} {speedUnit}</Paragraph>
    </Grid>
  </ResponsiveTextAlignedBox>
)

export const WeatherBlockClouds = ({ data }) => (
  <ResponsiveTextAlignedBox align={'left'}>
    <Heading as={"h3"} sx={{
      mb: 3
    }}>
      Clouds
    </Heading>
    <Grid columns={[1, null, 2]}>
      <Paragraph>Humidity: {data.humidity}%</Paragraph>
      <Paragraph>Visibility: {data.visibility / 1000}km</Paragraph>
    </Grid>
  </ResponsiveTextAlignedBox>
)