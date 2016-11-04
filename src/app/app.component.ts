import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	list1 = [
		{
			name : "1",
			size : 1
		},
		{
			name : "2",
			size : 2
		},
		{
			name : "3",
			size : 3
		},
		{
			name : "4",
			size : 4
		}
	];
	
	list2 = [
		{
			name : "5",
			size : 5
		},
		{
			name : "6",
			size : 6
		},
		{
			name : "7",
			size : 7
		},
		{
			name : "8",
			size : 8
		}
	];
	
	dropCallback( val ) {
	    console.log( val );
	}
	
}
