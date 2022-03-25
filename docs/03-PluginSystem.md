# The Gatsby plugin system

Gatsby has a plugin system allowing for 3rd party Node packages to be loaded in. This means that 3rd NPM packages can use Gatsby's underlying APIs (e.g. Gatsby Browser, Gatsby Node or Gatsby Filesystem). There isn't a prerequisite to use Gatsby's APIs in a Gatsby plugin as they are just NPM packages. However, in order to use Gatsby API they will need to be registered.

## The gatsby-config.js file

This file is the file that defines how and what your site will use.  In here, you will define all configuration options that your site should load in.

## Registering plugins

Now that we've installed our NPM packages with Yarn we'll need to register them with Gatsby.

This is done in the plugins array of your `gatsby-node.js`

```
plugins:[
 ...
]
```

We want to make this app a PWA so lets enable the plugins by uncommenting line 36: 
``` `gatsby-plugin-offline`,```. 

### Theme UI

Next we'll add Theme UI by adding the following:
```
`gatsby-plugin-theme-ui`,
```

## Configuring other bits

### Site metadata

We still need to stay in this file for the next step to  setup our sourcing of data.  But, before we do that, let's tidy up the global metadata of our site. To do that, we need to find and update the siteMetadata object and update the fields accordingly.  

For example:

```
siteMetadata: {
  title: `Gatsby Weather App`,
  description: `A weather app like no other. So fast it knocks your socks off`,
  author: `@xaviemirmon`,
  siteUrl: `https://hurricanequick.com/`,
},

```

### PWA manifest details

As we are creating this site as a PWA, we'll probably also want to the manifest options that display when you install the app.  

```
{
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `Gatsby Weather App`,
    short_name: `weather`,
    start_url: `/`,
    background_color: `#2a2a2a`,
    // This will impact how browsers show your PWA/website
    // https://css-tricks.com/meta-theme-color-and-trickery/
    // theme_color: `#663399`,
    display: `minimal-ui`,
    icon: `src/images/Logo.png`, // This path is relative to the root of the site.
  },
},
```

You can use the file [here](https://github.com/xaviemirmon/Gatsby-Weather-App/blob/main/src/images/Logo.png) in `./src/images/Logo.png` and delete the images. 

### JSX runtime source/imports 

In order for Theme UI to work correctly there is one thing we should do. It's not stricly necessary but the alternative is adding a JSX pragma to each of our files that have an `sx` prop — yuck! 🤮

There are a few bits of extra config we should add to after our plugin arrays in the JSX runtime. 
This instructs Gatsby to compile our JSX with Theme UI's runtime rather than React's built-in one. 

To do this add the following to the end of your gatsby-config.js after the `plugins: [...],` array:

```
  jsxRuntime: "automatic",
  jsxImportSource: "theme-ui",

```

### Remove `gatsby-browser.js` and `gatsby-ssr.js`

We aren't going to leverage any [Gatsby Browser](https://www.gatsbyjs.com/docs/browser-apis/) or [Gatsby SSR](https://www.gatsbyjs.com/docs/ssr-apis/) APIs for this project so we can safely remove `gatsby-browser.js` and `gatsby-ssr.js`.

## Next steps

Hurrah! we have a shell of an app ready to go, but no data.  Next, we'll move onto adding our source plugin to query the GraphQL endpoint.
