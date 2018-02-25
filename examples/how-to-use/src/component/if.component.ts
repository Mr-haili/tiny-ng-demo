import { Component } from 'tiny-ng';
@Component({
	selector: 'if',
	template: `
		<p *ng-if="true"> 你在看我 </p>
		<p *ng-if="false"> 你看不见我 </p>		
	`
})
export class IfComponent { }
