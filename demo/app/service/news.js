const Service  = require('egg').Service;

class NewsService extends Service {
	async list() {
		let url = this.config.api.baidu;
		return  await this.ctx.curl(url,{dataType: "json"});
	}
}

module.exports = NewsService;