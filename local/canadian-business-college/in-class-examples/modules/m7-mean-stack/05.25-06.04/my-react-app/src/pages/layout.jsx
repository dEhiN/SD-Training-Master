
// children prop to allow us to put html structure inside an html element
// a container component
function Container_div({ children }){
    return(
        <div className="container">
            { children }
        </div>
    )
}

// a row component
export function Row_div({ children }){
    return(
        <div className="row">
            { children }
        </div>
    )
}

// a row component
export function Column_div({ children }){
    return(
        <div className="column">
            { children }
        </div>
    )
}

export default Container_div;