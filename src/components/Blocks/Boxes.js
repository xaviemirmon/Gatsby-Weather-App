import { Box } from "theme-ui"

export const ResponsiveTextAlignedBox = ({ children, align = "left" | "right"  }) => (
  <Box sx={{
    textAlign: [`center`, null, align]
  }}>
    {children}
  </Box>
)