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
<word-reverse class="hljs"></word-reverse>

#### source:
``` typescript
import { Component } from 'tiny-ng';
@Component({
	selector: 'word-reverse',
	template: `
		<div> {{ message }} </div>
		<button (click)="reverse()">逆转消息</button>		
	`
})
export class WordReverseComponent {
	message = 'hello tiny-ng';
	reverse(){
		this.message = this.message.split('').reverse().join('');
	}
}

```
### 4. 条件渲染:
<if class="hljs"></if>

#### source:
``` typescript
import { Component } from 'tiny-ng';
@Component({
	selector: 'if',
	template: `
		<p *ng-if="true"> 你在看我 </p>
		<p *ng-if="false"> 你看不见我 </p>		
	`
})
export class IfComponent { }

```
### 5. 列表渲染:
<simple-list class="hljs"></simple-list>

#### source:
``` typescript
import { Component } from 'tiny-ng';
interface Item { text: string };
@Component({
	selector: 'simple-list',
	template: `
		<div *ng-for="let item of items">
			{{ item }}
		</div
	`
})
export class SimpleListComponent {
	items: string[] = ['hello world', 'tiny-ng', 'aaa'];
}

```
### 6. 稍微复杂点的用户输入:
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

```
### 7. 复杂一点的列表渲染:
<list class="hljs"></list>

#### source:
``` typescript
import { Component } from 'tiny-ng';
interface Item { text: string };
@Component({
	selector: 'list',
	template: `
		<div>
			Add item: <input type="text" [(ng-model)]="newItem.text" />
			<button type="submit" [disabled]="!newItem || !newItem.text.length" (click)="addItem()">
				Add
			</button>
		</div>
		<p>Your values:</p>
		<ul>
			<li
				*ng-for="let item of items"
				(click)="selectedItem = item">
				{{ item.text }}
				<button (click)="removeItem(item)">x</button>
			</li>
		</ul>
		 
		<div>
			<button (click)="sort()" [enable]="items.length > 1">Sort</button>
		</div>
	`
})
export class ListComponent {
	newItem: Item = { text: '' };
	items: Item[] = [
		{ text: 'tiny-ng' },
		{ text: 'just for fun' }
	];
	addItem(): void {
		const item = this.newItem;
		this.items.push(item);
		this.newItem = { text: '' };
	}
	removeItem(item: Item): void {
		const index = this.items.indexOf(item);
		this.items.splice(index, 1);
	}
	sort(): void {
		this.items.sort((itemA, itemB) => itemA.text > itemB.text ? 1 : -1);
	}
}

```
