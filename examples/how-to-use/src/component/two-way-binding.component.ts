
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
