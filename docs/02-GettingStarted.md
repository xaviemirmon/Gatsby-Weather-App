# Getting Started

First things first, we need a codebase to work against.

## Setup CLI

Make sure that you've got `npm` and `yarn` installed (I prefer Yarn over NPM so all of the commands will refer to using Yarn).

### Install Gatsby CLI

Installing Gatsby CLI is super straightforward. You just need to run the following command for it to be installed globally on your computer.

`npm install -g gatsby-cli`

#### Configure Gatsby CLI to use Yarn

In order for Gatsby CLI to default to Yarn, you'll need to set it up as the default. Edit the Gatsby CLI configuration file available at ~/.config/gatsby/config.json to add the following lines.

```
{
  "cli": {
    "packageManager": "yarn"
  }
}
```

## Install Gatsby Starter

In Terminal, navigate to where you want your project to live e.g. `cd ~/Projects` or `cd ~/Sites`. Then run the command to created a new Gatsby project `gatsby new Gatsby-Weather-App`.  This will create a new site using the Gatsby Default starter.

Next, navigate to the newly created project directory `cd Gatsby-Weather-App`, and then we'll add the required packages.


### Tip

You will probably want to add your IDE's files to the `.gitignore` e.g.:

```
# Phpstorm
*.idea*

```

## Add the required packages

For this project, we need the following packages.

### Gatsby Source GraphQL

This is arguably the most important package as it allows us to connect Gatsby to a GraphQL endpoint.  It's this GraphQL endpoint where we will get all of our data.

To install run:

`yarn add gatsby-source-graphql`

### Theme UI

This set of packages allows use to use [Theme UI](https://theme-ui.com/) in our project. Theme UI is a great extension to the CSS-in-JS library Emotion. It allows for the definition of a theme file (more on that later) with variable which we can reference in our components.  This theme file can be extended or a new theme definition created, allowing our components to adapt automatically — super powerful!

To install run:

`yarn add theme-ui gatsby-plugin-theme-ui @emotion/react @mdx-js/react@v1`

### Theme UI Presets

A package of predefined themes that we will use to extend when creating our own later.

To install run:

`yarn add @theme-ui/presets`

### Polished

This library provides a bunch of CSS helpers and us with fuctions to let us adjust our colors e.g. transparentize() and darken().

To install run:

`yarn add polished`

### Degrees to Direction

This is a small helper library used to convert a numeric degrees value into a direction on a compass.  We'll use this to help create a more user friendly wind display.

To install run:

`yarn add degrees-to-direction`

## Next steps

We have all of the packages required to run our app.  