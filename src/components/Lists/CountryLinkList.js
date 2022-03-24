import { Grid, Heading } from "theme-ui"
import { Link } from "gatsby"
import { ResponsiveTextAlignedBox } from "../Blocks/Boxes"

const CountryLinkList = ({countryCode, numberPerCountry, temp, countryData, query }) =>{

  const filteredResults = countryData.filter(filter_data =>
    filter_data.toLowerCase().includes(query.toLowerCase())
  )
  return(
    <ResponsiveTextAlignedBox align='left'>
      <Heading as='h2' sx={{
        py: 4
      }}>
        {countryCode}
      </Heading>
      <Grid columns={[1, null, 2, 5]}>
        {filteredResults.slice(0, numberPerCountry).map(city => (
            <Link key={city} to={countryCode.toLowerCase() + "/" + city.replace(/\s+/g, "-").toLowerCase() + `/${temp ? temp : "c"}`} sx={{
              color: 'inherit',
              textDecoration: 'inherit',
              fontWeight: 'inherit',
              '&:hover': {
                color: 'inherit',
                fontWeight: 'inherit',
                textDecoration: 'inherit'
              }
            }}>{city}</Link>
          )
        )}
      </Grid>
    </ResponsiveTextAlignedBox>
  )
}


export default CountryLinkList