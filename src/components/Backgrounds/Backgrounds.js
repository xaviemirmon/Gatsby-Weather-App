import { Box } from "theme-ui"
import { darken, transparentize } from "polished"

export const MenuBackground = ({ borderBottom, borderTop, className, children }) => (
  <Box
    className={className}
    sx={{
      backgroundColor: `rgba(0, 0, 0, .25)`,
      borderBottom: borderBottom ? `1px solid rgba(0, 0, 0, .3)` : null,
      borderTop: borderTop ? `1px solid rgba(0, 0, 0, .3)` : null,
      boxShadow: `rgb(0 0 0 / 15%) 0px 0px 10px`,
      backdropFilter: `blur(5px)`
    }}
  >
    {children}
  </Box>
)

export const ImageBackground = ({ image, className, children }) => (
  <Box
    className={className}
    sx={{
    backgroundImage: image ? `url(${image}&width=1400)` : null,
    backgroundPosition: `bottom`,
    backgroundSize: `cover`,
  }}>
    {children}
  </Box>
)

export const GradientBackground = ({ color, className, children }) => (
  <Box
    className={className}
    sx={{
      backgroundImage: `linear-gradient(to bottom right, ${transparentize(.4, color)}, ${transparentize(.6, darken(.2, color))})`
    }}
  >
    {children}
  </Box>
)

export const GlassOverlayBackground = ({ className, children }) => (
  <Box
    className={className}
    sx={{
      backgroundColor: `rgba(0, 0, 0, .25)`,
      border: `1px solid rgba(0, 0, 0, .3)`,
      boxShadow: `rgb(0 0 0 / 15%) 0px 0px 10px`,
      backdropFilter: `blur(5px)`,
      borderRadius: `10px`
    }}
  >
    {children}
  </Box>
)

