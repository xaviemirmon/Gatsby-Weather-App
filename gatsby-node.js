
exports.createPages = async ({ actions, graphql }) => {
  const countries = ["US", "GB"]
  const units = ["metric", "imperial"]

  await countries.forEach( async country => {
    const result = await graphql(`
    {
      site {
        siteMetadata {
          cities {
            ${country}
          }
        }
      }
    }
  `)

    const pages = await result.data.site.siteMetadata.cities[country]

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