h1 tag using html
h1 tag using javascript
React cdn 
h1 tag using core react
React.createElement takes 3 arguments 
    1) Name of tag
    2) Object which take attributes ex. prop
    3) Children if single child then directly put and if multiple use array
React.createElement at the end is an object => HTML(browser understands)
render puts html child inside root
render replaces the whole code inside the root



React.createElement => Object => HTML
const heading = React.createElement('h1', { id: 'heading'}, "Namaste React 🚀 ")

JSX -> HTML or XML Like syntax
JSX(transpiles before reaching to js) -PARCEL-Babel
JSX -> Babel transpiles -> React.createElement - ReactElement(JS Object) -> HTML Element(render)
const jsxHeading = <h1 id="heading" className="sid" tabIndex='5'>Namaste React 🚀 using JSX</h1>

#React Element
const jsxHeading = (
    <h1 id="heading" className="sid" tabIndex='5'>
        Namaste React 🚀 using JSX
    </h1>);

#React Functional Component
const FunctionalComponent1 = () => (
    <div id="container">
        <h1 id="heading">Functional Component1</h1>
    </div>
);

#Component composition-> component component
const JsxHeading = () =>(
    <h1 id="heading" className="sid" tabIndex='5'>
        Namaste React 🚀 using JSX
    </h1>);

const FunctionalComponent1 = () => (
    <div id="container">
        <JsxHeading />
        <h1 id="heading1">Functional Component1</h1>
    </div>
);


#React Hooks
Normal JS utility functions
- useState()
- useEffect()

virtual dom
react fiber 
diff algorithm

#Episode 9
custom Hook
Lazy Loading

#Episode 10 
Css
1) Using index.css file and then className in element
2) SCSS, SASS-> Add Superpower
3) Styled Components- https://styled-components.com/
4) Material UI, Bootstrap, Ant Design , Chakra 
4) Tailwind, postcss

