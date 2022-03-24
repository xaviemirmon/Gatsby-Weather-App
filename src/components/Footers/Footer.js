import { Box, Link } from "theme-ui"
import { MenuBackground } from "../Backgrounds/Backgrounds"

const Footer = ({imageData}) => (
  <footer
    sx={{
      width: `100vw`,
      position: `fixed`,
      bottom: 0
    }}
  >
    <MenuBackground borderTop>
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
          <Link href="https://github.com/xaviemirmon/" target="_blank" rel="noopener">@xaviemirmon</Link> using
          {` `}
          <Link href="https://www.gatsbyjs.com" target="_blank" rel="noopener">Gatsby</Link>
        </Box>
        <Box>
          {imageData && <Link href={imageData.links.html} target="_blank" rel="noopener">{imageData.description ? (imageData.description.length > 40 ? imageData.description.substring(0,40) + '...' : imageData.description) : imageData.alt_description?.charAt(0).toUpperCase() + imageData.alt_description?.substr(1).toLowerCase()} by {imageData?.user?.name}</Link>}
        </Box>
      </Box>
    </MenuBackground>
  </footer>
)

export default Footer
