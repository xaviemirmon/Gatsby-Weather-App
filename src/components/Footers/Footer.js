import { Box, Link } from "theme-ui"

const Footer = ({imageData}) => (
  <footer
    sx={{
      backgroundColor: `rgba(0, 0, 0, .25)`,
      borderTop: `1px solid rgba(0, 0, 0, .3)`,
      boxShadow: `rgb(0 0 0 / 15%) 0px 0px 10px`,
      width: `100vw`,
      position: `fixed`,
      backdropFilter: `blur(5px)`,
      bottom: 0
    }}
  >
    <Box
      sx={{
        padding: `1.0875rem`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        color: "white"
      }}
    >
      <Box>
        © {new Date().getFullYear()}, Built with ♥️ by
        {` `}
        <Link href="https://github.com/xaviemirmon/" target="_blank">@xaviemirmon</Link> using
        {` `}
        <Link href="https://www.gatsbyjs.com">Gatsby</Link>
      </Box>
      <Box>
        {imageData && <Link href={imageData.links.html} target="_blank">{imageData.description ? (imageData.description.length > 40 ? imageData.description.substring(0,40) + '...' : imageData.description) : imageData.alt_description?.charAt(0).toUpperCase() + imageData.alt_description?.substr(1).toLowerCase()} by {imageData?.user?.name}</Link>}
      </Box>
    </Box>

  </footer>
)

export default Footer
