import { Component } from 'tiny-ng';

declare var require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

let tpl: string;
tpl = require("../how-to-use.md");
tpl = tpl.replace('{{', '&#123;<span></span>&#123;').replace('}}', '&#125;&#125;')

@Component({
	selector: 'how-to-use',
	template: tpl
})
export class HowToUseComponent {
	constructor(){ }
}
