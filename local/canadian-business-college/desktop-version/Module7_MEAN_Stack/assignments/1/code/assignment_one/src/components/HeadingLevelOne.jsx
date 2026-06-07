/** This component will act as an h1 element but will allow for dynamic inner text content. The purpose is so that all h1 elements can be changed simultaneously regarding things like CSS classes, rather than needing to emulate one change across all 3 pages. */

/**
 * This component function returns an h1 element with the inner text content dynamically added using props.
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to display; should be equivalent to element.innerText
 * @return {JSX.Element} The rendered h1 element
 */
function HeadingLevelOne(props) {
	return <h1 className="fonts-google iosevka-charon-bold">{props.text}</h1>;
}

export default HeadingLevelOne;
