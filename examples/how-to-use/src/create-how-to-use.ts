// 这是一个工具脚本, 用于生成 how-to-use.md, 我们不写文档, 我们只是配置文件的搬运工
declare var require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

const fs: any = require('fs');

interface PartConfig { name: string, selector: string };

const configs: PartConfig[] = [
	{ name: '数据绑定', selector: 'hello-world' },
	{ name: '双向绑定', selector: 'two-way-binding' },
	{ name: '处理用户输入', selector: 'word-reverse' },	
	{ name: '条件渲染', selector: 'if' },
	{ name: '列表渲染', selector: 'simple-list' }	,

	{ name: '稍微复杂点的用户输入', selector: 'click-counter' },
	{ name: '复杂一点的列表渲染', selector: 'list' }		
]

const howToUseMd = createHowToUseMd(configs);

// 把我们生成的模板写入到目标文件里面去
fs.writeFileSync("./how-to-use.md", howToUseMd);

// 用于更具配置读取文件并产生新的tpl文件
function createHowToUseMd(configs: PartConfig[]){
	let howToUseMd: string = '';
	configs.forEach((config, idx) => {
		const fragment: string = createFragment(config, idx);
		howToUseMd += fragment;
	});
	return howToUseMd;
}

function createFragment(config: PartConfig, idx: number): string {
	const [name, selector] = [config.name, config.selector];
	const sourceCode = fs.readFileSync(
	`./component/${ selector }.component.ts`, 'utf8');

	/*
	 * ...模板字符串产生会由于对齐产生回车换行符, md转成html的时候会被识别...
	 * 这里很苟且的用这个办法规避了...就是这么🐶且
	 */
	const fragment = 
`### ${ idx + 1 }. ${ name }:
<${ selector } class="hljs"></${ selector }>

#### source:
\`\`\` typescript
${ sourceCode }
\`\`\`
`
	return fragment;
}