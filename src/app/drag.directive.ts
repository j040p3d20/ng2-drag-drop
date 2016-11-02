
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
		'(dragstart)': 'onDragStart($event)'
	}
})
export class DragDirective implements OnInit
{
	
	renderer: Renderer;
	el: ElementRef;
	
	@Input('drag-data') dragData:any;
	
	constructor( el: ElementRef, renderer: Renderer )
	{
		this.el = el;
		this.renderer = renderer;
	}
	
	ngOnInit()
	{
		this
		.renderer
		.setElementAttribute( this.el.nativeElement, "draggable", "true");
		
		this
		.renderer
		.setElementAttribute( this.el.nativeElement, "ondragstart", "true");
	}
	
	onDragStart(ev: DragEvent)
	{
		console.log("Drag Started");
		ev.dataTransfer.setData( "application/javascript" , JSON.stringify( this.dragData) );
	}
}
