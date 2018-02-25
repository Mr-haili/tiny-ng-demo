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
