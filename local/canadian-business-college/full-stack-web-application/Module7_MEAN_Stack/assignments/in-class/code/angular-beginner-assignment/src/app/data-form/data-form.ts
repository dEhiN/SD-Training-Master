import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
	selector: "app-data-form",
	imports: [FormsModule],
	templateUrl: "./data-form.html",
	styleUrl: "./data-form.css",
})
export class DataForm {
	// Form model structure matching backend properties
	formData = {
		title: "",
		body: "",
	};

	onSubmit() {
		console.log("Form State Captured:", this.formData);
		alert(`Success! Local data parsed:\nTitle: ${this.formData.title}`);
	}
}
