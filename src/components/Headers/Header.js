import { useEffect, useState } from "react"
import { Box, Paragraph, Spinner, Heading } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import TempuratureButton from "../Buttons/TempuratureButton"

const Header = ({ siteTitle }) => {

  const [city, setCity] = useState(null)
  const [country, setCountry] = useState(null)
  const [status, setStatus] = useState(false)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}9&longitude=${position.coords.longitude}&localityLanguage=en`)
          .then(
            response => {
              response.json().then(
                data => {
                  setCity(data.city)
                  setCountry(data.countryCode)
                  setStatus(true)
                }
              )
            }
          )

      })
    }
  }, [navigator.geolocation])

  return (
    <header
      sx={{
        backgroundColor: `rgba(0, 0, 0, .25)`,
        borderBottom: `1px solid rgba(0, 0, 0, .3)`,
        boxShadow: `rgb(0 0 0 / 15%) 0px 0px 10px`,
        marginBottom: `1.45rem`,
        position: `sticky`,
        top: 0,
        backdropFilter: `blur(5px)`,
        zIndex: `1`
      }}
    >
      <Box
        sx={{
          margin: `0 auto`,
          padding: `1.45rem 1.0875rem`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`
        }}
      >
        <Link
          to="/"
          sx={{
            color: `white`,
            textDecoration: `none`,
            display: `flex`,
            alignItems: `center`
          }}
        >
          <svg width="73" height="40" viewBox="0 0 118 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.26 64.5233H21.248C18.524 64.4876 15.74 63.9518 13.088 62.785C5.012 59.3203 0.200001 51.5098 0.200001 43.3183C0.200001 40.4965 0.776001 37.639 1.976 34.8887C5.48 26.8996 13.352 22.1252 21.608 22.1371C21.68 22.1371 21.752 22.1371 21.824 22.1371C22.184 20.6012 22.7 19.0653 23.348 17.5651C28.016 6.88519 38.504 0.503441 49.52 0.503441C53.3 0.503441 57.152 1.26544 60.848 2.84897C68.552 6.18272 74.024 12.5049 76.52 19.8273C78.62 19.2082 80.84 18.8748 83.06 18.8748C86.12 18.8748 89.216 19.482 92.168 20.7679C99.32 23.8397 104.084 30.0905 105.56 37.1152C106.868 37.258 108.212 37.5676 109.508 38.1272H109.52C114.692 40.3775 117.812 45.4019 117.788 50.6764C117.8 52.4861 117.428 54.3435 116.648 56.1056C114.596 60.7491 110.312 64.0352 105.332 64.5233L105.2 64.5591L21.26 64.5233Z"
              fill="white" />
            <path
              d="M49.5 57C61.3741 57 71 47.3741 71 35.5C71 23.6259 61.3741 14 49.5 14C37.6259 14 28 23.6259 28 35.5C28 47.3741 37.6259 57 49.5 57Z"
              fill="#DEDEDE" />
            <path
              d="M37.5214 47.4786C34.2964 44.2536 32.6071 39.9536 32.6071 35.8071L49.3464 52.3929C45.0464 52.2393 40.7464 50.7036 37.5214 47.4786ZM53.1857 51.9321L33.0679 31.8143C34.7571 24.2893 41.5143 18.6071 49.5 18.6071C55.1821 18.6071 60.0964 21.3714 63.1679 25.5179L60.8643 27.5143C58.2536 23.9821 54.1071 21.6786 49.5 21.6786C43.5107 21.6786 38.4429 25.5179 36.4464 30.8929L54.1071 48.5536C58.5607 47.0179 61.9393 43.1786 63.0143 38.5714H55.6429V35.5H66.3929C66.3929 43.4857 60.7107 50.2429 53.1857 51.9321Z"
              fill="white" />
          </svg>
          <Heading as={'h1'} sx={{
            m: 0,
            fontSize: 2,
            display: `inline`,
            pl: `10px`
          }}>
            {siteTitle}
          </Heading>
        </Link>

        <Box>
          <Paragraph sx={{
            display: `inline`,
            mr: 3
          }}>
            Current location: {status ? `${city}, ${country}` : <Spinner sx={{height: `20px`}} />}
          </Paragraph>
          {` `}
          <TempuratureButton metric={'c'} />
          {` `}
          <TempuratureButton metric={'f'} />
        </Box>
      </Box>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
