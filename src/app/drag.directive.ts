
import { Directive, ElementRef, Input, Renderer , OnInit } from '@angular/core';

/*
 * see
 * 
 * https://angular.io/docs/ts/latest/guide/attribute-directives.html#!#write-directive
 * https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
 * http://stackoverflow.com/questions/37049300/angular2-drag-and-drop-target
 * http://stackoverflow.com/questions/35756555/angular-2-drag-and-drop-directive-extremely-slow
 */

@Directive({
	selector : '[drag]',
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
export class DragDirective implements OnInit {
	
	renderer: Renderer;
	el: ElementRef;
	
	@Input('drag-data') dragData:any;
	
	constructor( el: ElementRef, renderer: Renderer ) {
		this.el = el;
		this.renderer = renderer;
	}
	
	ngOnInit() {
		this
		.renderer
		.setElementAttribute( this.el.nativeElement, "draggable", "true");
	}
	
	drag(ev: DragEvent) {
//		console.log("drag","drag");
	}
	
	dragend(ev: DragEvent) {
//		console.log("drag","dragend");
	}
	
	dragenter(ev: DragEvent) {
//		console.log("drag","dragenter");
	}
	
	dragexit(ev: DragEvent) {
//		console.log("drag","dragexit");
	}
	
	dragleave(ev: DragEvent) {
//		console.log("drag","dragleave");
	}
	
	dragover(ev: DragEvent) {
//		console.log("drag","dragover");
	}
	
	dragstart(ev: DragEvent) {
//		ev.dataTransfer.dropEffect = "move";
		ev.dataTransfer.setData( "application/javascript" , JSON.stringify( this.dragData) );
		console.log("drag","dragstart",ev.dataTransfer.getData("application/javascript"));
	}
	
	drop(ev: DragEvent) {
		console.log("drag","drop",ev);
	}
	
}
