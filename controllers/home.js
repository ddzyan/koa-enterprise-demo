const { Controller } = require('koa-enterprise');

class HomeController extends Controller {
  async index() {
    this.ctx.body = {
      code: 0,
      data: {},
      msg: 'hello word',
    };
  }

  async fetchList(ctx) {
    const data = await ctx.services.home.getList();
    ctx.body = {
      code: 0,
      data,
    };
  }
}

module.exports = HomeController