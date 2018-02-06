const Controller = require('egg').Controller;
class HomeController extends Controller {
    /**
     * default index action
     * @return {[type]} [description]
     */
    async index() {
        this.ctx.body = 'hello,world!';
    }
    /**
     * news diaplay action
     * @return {[type]} [description]
     */
    async news() {
        const list = {
            'list': [{
                id: 110,
                title: "zth this a tes nwesa for egg.js",
                author: "lisi",
                time: 1515974400000
            }, {
                id: 100,
                title: "zth this a tes nwesa for egg.js",
                author: "lizm",
                time: 1484272800000
            }, {
                id: 130,
                title: "zth this a tes nwesa for egg.js",
                author: "wang",
                time: 1484373600000
            }, {
                id: 111,
                title: "zth this a tes nwesa for egg.js",
                author: "haie",
                time: 1484622000000
            }]
        };
        await this.ctx.render('home/news.tpl', list);
    }
    /**
     * api test with service
     * @return {[type]} [description]
     */
    async api() {
        const list = await this.ctx.service.news.list();
        this.ctx.body = list;
    }
    /**
     * get config
     * @return {[type]} [description]
     */
    async conf() {
        const {
            config,
            ctx
        } = this;
        ctx.body = config;
    }
    /**
     * get params 
     * @return {[type]} [description]
     */
    async user() {
        this.ctx.body = {
            name: `hello,${this.ctx.params.id}`
        }
    }
    /**
     * get post data
     * @return {[type]} [description]
     */
    async post() {
        this.ctx.body = this.ctx.request.body;
    }
    /**
     * get list from mysql
     * @return {[type]} [description]
     */
    async list() {
        this.ctx.body = await this.ctx.service.list.list();
    }
    /**
     * get detail from mysql
     * @return {[type]} [description]
     */
    async detail() {
        const id = this.ctx.params.id || 0;
        const ret = await this.ctx.service.list.detail(id);
        this.logger.info(`detail id is:${id},result is:${JSON.stringify(ret)}`);
        this.ctx.body = ret;
    }
}
module.exports = HomeController;