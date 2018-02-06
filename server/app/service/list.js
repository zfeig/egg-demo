const Service  = require('egg').Service;

class ListService extends Service {
	async list() {
		return  await this.app.mysql.query("SELECT id,channel,site,account,login_img,login_status,uid,create_time FROM back_singin LIMIT 20");
	}

	async detail(id) {
		return  await this.app.mysql.query("SELECT id,channel,site,account,login_img,login_status,uid,create_time FROM back_singin  WHERE id=?",[id]);
	}
}

module.exports = ListService;