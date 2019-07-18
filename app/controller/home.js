'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // Object.keys(this).forEach(key => {
    //   console.log(key);
    //   Object.keys(this[key]).forEach(key1 => {
    //     if (key1.indexOf('rout') >= 0) {
    //       console.log(`  ${key1}`);
    //     }
    //   });
    // });
    ctx.body = `${this.ctx.routerName} ${this.ctx.routerPath}`;
  }
}

module.exports = HomeController;
