import { Component } from 'tiny-ng';
@Component({
	selector: 'click-counter',
	template: `
		<div>You've clicked {{ count }} times</div>
			{{ isClickTooManyTimes() }}
		<button
			(click)="addCount()"
			[disabled]="isClickTooManyTimes()">
			Click me
		</button> 
		<div *ng-if="isClickTooManyTimes()">
	    That's too many clicks! Please stop before you wear out your fingers.
	    <button (click)="resetCount()">Reset clicks</button>
		</div>
	`
})
export class ClickCounterComponent {
	count: number = 0;
	addCount(): void { 
		this.count += 1; 
	}
	resetCount(): void {
		this.count = 0;
	}
	isClickTooManyTimes(): boolean {
		return this.count >= 3;
	}
}
