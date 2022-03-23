import { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { Box, Button, Paragraph, Input } from "theme-ui"
import { transparentize, darken } from "@theme-ui/color"

import Layout from "../components/Layouts/Layout"
import Seo from "../components/Seo/Seo"
import CountryLinkList from "../components/Lists/CountryLinkList"


const IndexPage = ({ data }) => {

  const [numberPerCountry, setNumberPerCountry] = useState(20)
  const [temp, setTemp] = useState()
  const [imageData, setImageData] = useState('');
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=sunshine,sky&per_page=1&orientation=landscape&client_id=iq1VPE3HOzECR8q0bLHvo6DKxEgWzCYQgBYax653pKU`).then(
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

  const storageEventHandler = () => {
    console.log("hi from storageEventHandler")
  }
  useEffect(() => {
    window.addEventListener("storage", storageEventHandler, false)
    setTemp(localStorage.getItem("defaultTempMetric"))
  }, [])

  const updateLimit = (event, number) => {
    event.preventDefault()
    setNumberPerCountry(number)
  }

  return (
    <Box sx={{
      backgroundImage: `url(${imageData?.urls?.full})`,
      backgroundPosition: `bottom`,
      backgroundSize: `cover`,
      minHeight: `100vh`,
    }}>
      <Box sx={{
        backgroundImage: (theme) => (`linear-gradient(to bottom right, ${transparentize(.4, theme.rawColors.blue)}, ${transparentize(.6, darken(.2, theme.rawColors.blue))})`),
        minHeight: `100vh`,
        backdropFilter: `blur(5px)`
      }}>
        <Layout>
          <Seo title="Home" />
          <Box
            sx={{
              mx: "auto",
              marginBottom: 4,
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
                my: 1,
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
                  my: 1,
                }}
              >
                Reset
              </Button>
            ) : null}
          </Box>
          <CountryLinkList countryCode={'US'} numberPerCountry={numberPerCountry} temp={temp} countryData={data.site.siteMetadata.cities.US} query={query} />
          <CountryLinkList countryCode={'GB'} numberPerCountry={numberPerCountry} temp={temp} countryData={data.site.siteMetadata.cities.GB} query={query} />
          <Box sx={{
            py: 4,
          }}>
            <Paragraph as='small'>Items per country:{` `}
              <Button variant='link' onClick={event => updateLimit(event, 20)}> 20 </Button> |{` `}
              <Button variant='link' onClick={event => updateLimit(event, 50)}> 50 </Button> |{` `}
              <Button variant='link' onClick={event => updateLimit(event, 100)}> 100 </Button> |{` `}
              <Button variant='link' onClick={event => updateLimit(event, 250)}> 250 </Button> |{` `}
              <Button variant='link' onClick={event => updateLimit(event, 500)}> 500 </Button> |{` `}
              <Button variant='link' onClick={event => updateLimit(event, 1000)}> All </Button>
            </Paragraph>
          </Box>
        </Layout>
      </Box>
    </Box>
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
