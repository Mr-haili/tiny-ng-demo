// 苟且!


import { bootstrap, Module, ModuleConfig } from 'tiny-ng';
import {
	HelloWorldComponent,
	TwoWayBindingComponent,
	ClickCounterComponent,
	ListComponent,
	HowToUseComponent
} from './component';

const moduleConfig: ModuleConfig = {
  declarations: [
		HelloWorldComponent,
		TwoWayBindingComponent,
		ClickCounterComponent,
		ListComponent,
		HowToUseComponent
  ],
  entry: 'how-to-use'
}
const appModule = new Module(moduleConfig);
bootstrap(appModule);
