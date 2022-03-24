import { system as baseTheme } from '@theme-ui/presets'

const theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: 'white',
    background: '#fff',
    blue: `rgb(11, 16, 82)`,
    yellow: `rgb(255, 182, 0)`
  },
  buttons: {
    ...baseTheme.buttons,
    primary: {
      fontFamily: `inherit`
    },
    link: {
      color: 'white',
      bg: 'transparent',
      p: 0,
      fontWeight: `bold`,
      fontFamily: `inherit`
    },
  },
  forms: {
    ...baseTheme.forms,
    input: {
      "&::placeholder": {
        color: `white`
      }
    }
  },
  text: {
    ...baseTheme.text,
    centered: {
      textAlign: `center`
    }
  },
  styles: {
    ...baseTheme.styles,
    a: {
      ...baseTheme.styles.a,
      textDecoration: `none`,
      fontWeight: `bold`,
      color: `white`,
      "&:hover": {
        textDecoration: `underline`,
      },
    }
  }
}

export default theme