import { Box } from "theme-ui"

export const MenuBackground = ({ borderBottom, borderTop, children}) => (
  <Box sx={{
    backgroundColor: `rgba(0, 0, 0, .25)`,
    borderBottom: borderBottom ? `1px solid rgba(0, 0, 0, .3)` : null,
    borderTop: borderTop ? `1px solid rgba(0, 0, 0, .3)` : null,
    boxShadow: `rgb(0 0 0 / 15%) 0px 0px 10px`,
    backdropFilter: `blur(5px)`,
  }}>
    { children }
  </Box>
)

export const GlassOverlayBackground = ({children}) => (
  <Box sx={{
    backgroundColor: `rgba(0, 0, 0, .25)`,
    border: `1px solid rgba(0, 0, 0, .3)`,
    boxShadow: `rgb(0 0 0 / 15%) 0px 0px 10px`,
    backdropFilter: `blur(5px)`,
    borderRadius: `10px`
  }}>
    { children }
  </Box>
)