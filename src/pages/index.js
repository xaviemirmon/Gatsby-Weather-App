import { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { Box, Button, Paragraph, Input, useThemeUI } from "theme-ui"

import Layout from "../components/Layouts/Layout"
import Seo from "../components/Seo/Seo"
import CountryLinkList from "../components/Lists/CountryLinkList"
import { GradientBackground, ImageBackground } from "../components/Backgrounds/Backgrounds"


const IndexPage = ({ data }) => {

  const context = useThemeUI()
  const [numberPerCountry, setNumberPerCountry] = useState(20)
  const [temp, setTemp] = useState()
  const [imageData, setImageData] = useState("")
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=sunshine,sky&per_page=1&orientation=landscape&client_id=${process.env.GATSBY_UNSPLASH_CLIENT_ID}`).then(
      data => {
        data.json().then(
          json => {
            const fetchedDataResults = json.results[0]
            setImageData(fetchedDataResults)
          }
        )
      }
    )
  }, [])


  useEffect(() => {
     setTemp(localStorage.getItem("defaultTempMetric") ? localStorage.getItem("defaultTempMetric") : null)
  }, [])

  const updateLimit = (event, number) => {
    event.preventDefault()
    setNumberPerCountry(number)
  }

  return (
    <ImageBackground
      image={imageData?.urls?.full}
      sx={{
        height: `100vh`,
        overflow: `scroll`
      }}
    >
      <GradientBackground
        color={context.theme.rawColors.secondary}
        sx={{
          minHeight: `100vh`,
        }}
      >
        <Layout>
          <Seo title="Home" />
          <Box
            sx={{
              mx: "auto",
              marginBottom: 4
            }}
          >
            <Input
              onChange={e => {
                setQuery(e.target.value)
              }}
              sx={{
                display: `inline`,
                textAlign: `center`,
                mx: 1,
                my: 1
              }}
              placeholder="Search by city..."
              value={query}
            />
            {query !== "" ? (
              <Button
                onClick={() => setQuery("")}
                sx={{
                  ml: 2,
                  mx: 1,
                  my: 1
                }}
              >
                Reset
              </Button>
            ) : null}
          </Box>
          <CountryLinkList countryCode={"US"} numberPerCountry={numberPerCountry} temp={temp}
                           countryData={data.site.siteMetadata.cities.US} query={query} />
          <CountryLinkList countryCode={"GB"} numberPerCountry={numberPerCountry} temp={temp}
                           countryData={data.site.siteMetadata.cities.GB} query={query} />
          <Box sx={{
            py: 4
          }}>
            <Paragraph as="small">Items per country:{` `}
              <Button variant="link" onClick={event => updateLimit(event, 20)}> 20 </Button> |{` `}
              <Button variant="link" onClick={event => updateLimit(event, 50)}> 50 </Button> |{` `}
              <Button variant="link" onClick={event => updateLimit(event, 100)}> 100 </Button> |{` `}
              <Button variant="link" onClick={event => updateLimit(event, 250)}> 250 </Button> |{` `}
              <Button variant="link" onClick={event => updateLimit(event, 500)}> 500 </Button> |{` `}
              <Button variant="link" onClick={event => updateLimit(event, 1000)}> All </Button>
            </Paragraph>
          </Box>
        </Layout>
      </GradientBackground>
    </ImageBackground>
  )
}

export default IndexPage

export const query = graphql`
  {
    site {
      siteMetadata {
        cities
        {
          US
          GB
        }
      }
    }
  }
`
