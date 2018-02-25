### 1. 数据绑定:
<hello-world class="hljs"></hello-world>

#### source:
``` typescript
import { Component } from 'tiny-ng';
@Component({
	selector: 'hello-world',
	template: `
		<div> {{ message }} </div>
	`
})
export class HelloWorldComponent {
	message = 'hello tiny-ng';
}

```
### 2. 双向绑定:
<two-way-binding class="hljs"></two-way-binding>

#### source:
``` typescript

import { Component } from 'tiny-ng';
const template = `
	<div>
		<p>First name: <input [(ng-model)]="firstName" /></p>
		<p>Last name: <input [(ng-model)]="lastName" /></p>
		<h2>Hello, {{ fullName }}!</h2>
	</div>
`;
@Component({
	selector: 'two-way-binding',
	template: template
})
export class TwoWayBindingComponent {
	firstName = 'Planet';
	lastName = 'Earth';

	get fullName(): string {
		return `${ this.firstName }  ${ this.lastName }`;
	}
}

```
### 3. 处理用户输入:
<click-counter class="hljs"></click-counter>

#### source:
``` typescript
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
		<div [visible]="isClickTooManyTimes">
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

```
