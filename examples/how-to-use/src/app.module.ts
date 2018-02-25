import { bootstrap, Module, ModuleConfig } from 'tiny-ng';
import {
	HelloWorldComponent,
	TwoWayBindingComponent,
	WordReverseComponent,
	IfComponent,
	SimpleListComponent,
	ClickCounterComponent,	
	ListComponent,
	HowToUseComponent
} from './component';

const moduleConfig: ModuleConfig = {
  declarations: [
		HelloWorldComponent,
		TwoWayBindingComponent,
		WordReverseComponent,
		IfComponent,
		SimpleListComponent,
		ClickCounterComponent,
		ListComponent,
		HowToUseComponent
  ],
  entry: 'how-to-use'
}
const appModule = new Module(moduleConfig);
bootstrap(appModule);
