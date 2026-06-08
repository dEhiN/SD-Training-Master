/** This component will act as a form input element. */

/** CSS import */
import "./FormInputElement.css";

/**
 * This component function will create a form input element using the props values passed in. It will also add the element label if the same props are passed in. It can only create and handle form input elements, not any other type of form elements.
 *
 * Since the caller in UserInfoFormPage uses useState and a function to update values every time an input field's value changes, this function will also be using that function as a callback for the input element's onChange event and will be updating the input element's value concurrently.
 *
 * @param {Object} props - The component props.
 * @param {string} props.inputType - The type of input field to create.
 * @param {string} props.inputName- The name for the input field.
 * @param {string} props.inputPlaceholder - The placeholder text (if any) to specify for the input field.
 * @param {string} props.id - The id for the input field. This will also be used as the "for" attribute of the associated label element.
 * @param {string} props.labelText - The label text to display.
 * @param {string|number} props.inputValue - The current value or state of the input field.
 * @param {function(React.ChangeEvent<HTMLInputElement>): void} props.changeFunction - The callback function to handle whenever the value for the input element changes.
 * @param {function(React.SubmitEvent<HTMLButtonElement>): void} props.submitFunction - The callback function to handle when a submit input element (in other words, a submit button) is clicked.
 * @returns {JSX.Element} The rendered input form element together with its label.
 */
function FormInputElement(props) {
	return (
		<div className="input-container">
			{props.inputType !== "submit" && (
				<label
					htmlFor={props.id}
					className="fonts-google caveat-medium font-size-bg input-label"
				>
					{props.labelText}
				</label>
			)}

			<input
				type={props.inputType}
				name={props.inputName}
				id={props.id}
				placeholder={props.inputPlaceholder}
				value={props.inputValue}
				onChange={props.changeFunction}
				onClick={props.submitFunction}
				className={props.inputType === "submit" ? "input-submit" : "input-field"}
			/>
		</div>
	);
}

export default FormInputElement;
