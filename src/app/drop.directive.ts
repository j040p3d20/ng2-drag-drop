
import { Directive, ElementRef, Input, Renderer , OnInit } from '@angular/core';

@Directive({
	selector : '[drop]',
	host : {
		'(drag)' : 'drag($event)',
		'(dragend)': 'dragend($event)',
		'(dragenter)': 'dragenter($event)',
		'(dragexit)': 'dragexit($event)',
		'(dragleave)': 'dragleave($event)',
		'(dragover)': 'dragover($event)',
		'(dragstart)': 'dragstart($event)',
		'(drop)': 'drop($event)'
	}
})
export class DropDirective implements OnInit {
	
	renderer: Renderer;
	el: ElementRef;
	
	constructor( el: ElementRef, renderer: Renderer ) {
		this.el = el;
		this.renderer = renderer;
	}
	
	ngOnInit() {
	}
	
	drag(ev: DragEvent) {
//		console.log("drop","drag");
	}
	
	dragend(ev: DragEvent) {
        console.log("drop","dragend",ev.dataTransfer.getData("application/javascript"));
	}
	
	dragenter(ev: DragEvent) {
		console.log("drop","dragenter");
		ev.preventDefault();
	}
	
	dragexit(ev: DragEvent) {
//		console.log("drop","dragexit");
	}
	
	dragleave(ev: DragEvent) {
//		console.log("drop","dragleave");
		this
		.renderer
		.setElementStyle(
			this.el.nativeElement,
			"opacity",
			"1"
		);
	}
	
	dragover(ev: DragEvent) {
		console.log("drop","dragover");
		ev.preventDefault();
		this
		.renderer
		.setElementStyle(
			this.el.nativeElement,
			"opacity",
			"0.5"
		);
	}
	
	dragstart(ev: DragEvent) {
		console.log("drop","dragstart",ev.dataTransfer.getData("application/javascript"));
	}
	
	drop(ev: DragEvent) {
		console.log("drop","drop",ev.dataTransfer.getData("application/javascript"));
	}
}
