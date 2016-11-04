
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
    
    @Input('drop-to') dropTo:any;
	
	constructor( el: ElementRef, renderer: Renderer ) {
		this.el = el;
		this.renderer = renderer;
	}
	
	ngOnInit() {
	}
	
	drag(ev: DragEvent) {
//		console.log("drop","drag",this,ev);
	}
	
	dragenter(ev: DragEvent) {
//		console.log("drop","dragenter",this,ev);
		ev.preventDefault();
	}
	
	dragexit(ev: DragEvent) {
//		console.log("drop","dragexit",this,ev);
	}
	
	dragleave(ev: DragEvent) {
//		console.log("drop","dragleave",this,ev);
		this
		.renderer
		.setElementStyle(
			this.el.nativeElement,
			"opacity",
			"1"
		);
	}
	
	dragover(ev: DragEvent) {
//		console.log("drop","dragover",this,ev);
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
//		console.log("drop","dragstart",this,ev);
	}
	
	drop(ev: DragEvent) {
	    console.log("drop","drop",this,ev);
        this
        .renderer
        .setElementStyle(
            this.el.nativeElement,
            "opacity",
            "1"
        );
		
		var dropData = JSON.parse(ev.dataTransfer.getData("application/javascript"));
		
		if ( typeof this.dropTo == "function" )
		{
		    this.dropTo.apply( dropData );
		}
		else if ( this.dropTo instanceof Array ) 
		{
            this.dropTo.push( dropData );
        }
		
		ev.dataTransfer.setData("dragDropTransferSuccessfull","true");
		
	}
    
    dragend(ev: DragEvent) {
        console.log("drop","dragend",this,ev);
    }
    
}
