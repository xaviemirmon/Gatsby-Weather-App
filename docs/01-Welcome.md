# Welcome to the Gatsby Weather App tutorial

![Gatsby Weather Homepage](./images/01/Homepage.png)

Hello and welcome to the Gatsby Weather App tutorial!  

In this codebase, I'll be walking you through how to create your very own Weather app using Gatsby. Along the way, you'll be shown how to use some React functionalities and also how to make the most out of the Gatsby featureset.  Gatsby (especially when compared to other React frameworks) is a highly opinionated frontend framework focussing on performance and sometimes you'll need to do things a specific way. Not to worry — I'll walk you through all those different pieces.

At the end of this tutorial, you will have your very own Gatsby website that is a beautiful Progressive Web App (PWA) that shows the weather in different locations.  The data will be "sourced" from a free GraphQL mirror of the Open Weather API. Lastly, the styling with be responsive and themeable using Theme UI. We'll also tackle the three different render modes (SSG, DSG, and SSR) and when you might want to use them.

There will be two primary functionalities:

1. Display a list of popular locations (in the US and GB) that is searchable.
2. Individual pages with a detailed breakdown of stats for an individual location.  (We'll hook up Unsplash.com to provide a background image of the current location and allow the page to be toggled to imperial or metric measurements)

![](./images/01/Detail-Page.png)

Here's what we'll cover:

1. Adding packages
2. Plugin system
3. Sourcing data
4. Render modes
5. Create pages dynamically
6. Component structure & naming conventions. 
	1. Creating components and keeping things DRY
	2. React hooks — useState, useContext and useEffect
7. Fetching data from APIs
8. Securely storing API credentials
9. Themes + Theme UI
10. Building/Hosting considerations

Now lets get started!

## A few tips about modern JS

In modern JS, there are a few things to know:

### Variables

We use `const` for most variables now as it's locally scoped.  If you need to use a higher scope variable use `let` but not `var`. Gatsby uses "camelCase" to define variables.

### Strings

`const myString = 'value'`

Denoted by wrapping in single quotes `'`, double quotes `"`, or a backtick ``` ` ```

### Numbers

`const myNumber = 2`

Denoted by a number on its own.

### Booleans

`const myBoolean = false`

Denoted by `true` or `false`

### Arrays

`const myArray = [ 'value 1', 'value 2', 2, false ]`

Denoted by wrapping in square brackets `[]`

### Objects

```
const myObject = {
	key: 'value', // string value
	key2: 2, // number value
	key3: false, // Boolean
	key4: ['value 1', 'value 2'], // array value
	key5: {
		key1: 'value 1',
		key2: 'value 2'
	}, // object value
	key6: myVar // a variable
}
```

Denoted by wrapping in curly braces `{}` 

### Template literals

At first glance these look just like a "string" but with backticks ``` ` ``` instead.  However, they house some very useful functionality... Inside a template literal, you can include JS function that returns a string in the text if you wrap it in `${}` e.g. ``` `Hello ${printWorld()}` ```

### Arrow functions

Old structure (**No longer preferred**)

```
function myFunction (propA) {
	var something = propA + " World";
	return something;
}
```
Same function rewritten as an arrow function

```
const myFunction = (propA) => {
	const something = props.propA + " World"
	return something
}

```
In Gatsby/React you are more likely going to be using that code to output a component with JSX. 

```
const HelloWorld = ({ propA }) => {
	const something = propA + " World"
	return (
		<p>{something}</p>
	)
}

// In your page
<HelloWorld propA='Hello' />
```
If you are just manipulating JSX in React and not the underlying data/logic, you can dispense with the `return` statement and just add what you want to be rendered in parenthesis' `()`.

```
const myFunction = ({ propA }) => (
	<p>{propA}{` `}World</p> 
)
```

Because this component is *so* simple and only a one-liner we can write it more shorthand (notice the Template literals?)

```
const myFunction = ({ propA }) => <p>`${propA} World`</p> 
```

### Spread operator

If you want to keep all of an array or object's data and extend it or manipulate it in a new variable you can use the spread operator.

```
const array1 = ['one', 'two'] // ['one', 'two']

const array2 = [...array1, 'three', 'four'] // ['one', 'two', 'three', 'four']
```

Denoted by prefixing the variable you want to spread with an ellipsis `...`

### Destructuring objects

You may want to access the values of your without having to use dot notation e.g. `myObject.key` every time.  That is possible with destructuring, see below:

```
const myObject = {
	key: 'value', // string value
	key2: 2, // number value
	key3: false, // Boolean
	key4: ['value 1', 'value 2'], // array value
	key5: {
		key1: 'value 1',
		key2: 'value 2'
	}, // object value
	key6: myVar // a variable
}

const {key, key2} = myObject

return key + key2.toString()
```

If have a look at the second and third examples from the "Arrow functions" example, you may have noticed a change to the props — I destructured it like so `({ propA, propB })`! 

This means in the component we can use `propA` directly rather than having to do `props.propA`.




