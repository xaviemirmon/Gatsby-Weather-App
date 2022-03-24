
exports.createPages = async ({ actions, graphql }) => {
  const units = ["metric", "imperial"]

  const result = await graphql(`
    {
      site {
        siteMetadata {
          cities {
            US
            GB
          }
        }
      }
    }
  `)

  const countries = await result.data.site.siteMetadata.cities

  Object.entries(countries).forEach( entry => {
    const [country, pages ] = entry
    pages.forEach(page => {
      units.forEach( unit => {
        const convertUnit = unit === 'metric' ? 'c' : 'f'
        actions.createPage({
          path: country.toLowerCase() + "/" + page.replace(/\s+/g, '-').toLowerCase()+ "/" + convertUnit,
          component: require.resolve("./src/templates/CityPage.js"),
          context: {
            country: country,
            city: page,
            unit: unit,
          },
          defer: true,
        })
      })
    })
  })

}