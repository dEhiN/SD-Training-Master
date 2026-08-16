import { Component, inject, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
	selector: "app-data-list",
	imports: [],
	templateUrl: "./data-list.html",
	styleUrl: "./data-list.css",
})
export class DataList {
	private http = inject(HttpClient);

	// Data storage tracking incoming server records
	posts: any[] = [];

	ngOnInit() {
		this.loadRemoteData();
	}

	loadRemoteData() {
		this.http.get<any>("https://jsonplaceholder.typicode.com/posts?_limit=4").subscribe({
			next: (response) => {
				console.log(this.posts);
				console.log(response);
				this.posts = response;
				console.log(response);
			},
			error: (error) => {
				console.error("Network retrieval failed:", error);
			},
		});
	}
}
