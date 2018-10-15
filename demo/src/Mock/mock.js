const Mock = require('mockjs'); // 获取mockjs插件
const Random = Mock.Random; // 获取Mock对象
const produceDate = function(opt){
	console.log("opt", opt);
	let articles = [];
	for (let i = 0; i < 30; i++) { // 定义假数据生成规则
		let newArticleObject = {
			title: Random.csentence(5, 30), // Random.csentence(min, max)
			date: Random.date() + ' ' + Random.time(), // Random.date() 默认格式yyyy-MM-dd, Random.time() 返回一个随机的时间字符串
			email: Random.email(),
			name: Random.cname()
		}
		articles.push(newArticleObject)
	}
	return {
		data: articles
	}
}

Mock.mock('/', 'post', produceDate);
