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
