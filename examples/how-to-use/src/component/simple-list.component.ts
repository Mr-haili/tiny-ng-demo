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
