/** This component will act as a form input element. */

/**
 * This component function will create a form input element using the props values passed in. It can only create and handle form input elements, not any other type of form elements.
 *
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of input field to create.
 * @param {string} props.name- The name for the input field.
 * @param {string} props.placeholder - The placeholder text (if any) to specify.
 * @returns {JSX.Element} The rendered input form element.
 */
function FormInputElement(props) {
	return <input type={props.type} name={props.name} placeholder={props.placeholder} />;
}

export default FormInputElement;
