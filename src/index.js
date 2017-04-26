/**
 * 入口模块
 */

require('../src/footer.js');
require('../src/heard.js' );

var index = {
	
	name:'index',
	
	init:function()
	{
		console.log(footer.name);
		console.log(heard.name);
	}
}

index.init();
