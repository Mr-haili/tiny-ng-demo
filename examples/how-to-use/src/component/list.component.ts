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
