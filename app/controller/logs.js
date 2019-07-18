'use strict';

const Controller = require('egg').Controller;

class LogsController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, logs index';
  }
  async create() {
    const { ctx } = this;
    ctx.body = 'hi, logs create';
  }
  async update() {
    const { ctx } = this;
    console.log(ctx.request.body);
    console.log(ctx.app.config.env);
    console.log(ctx.db);
    console.log(ctx.helper.test('123'));
    console.log(ctx.app.config.appMiddleware);
    console.log(ctx.app.config.coreMiddleware);
    // Object.keys(ctx.app.middleware).forEach(key => {
    //   console.log(`ctx.app.middleware.${key}`);
    // });
    // console.log(ctx.app.config);
    // ctx.logger.debug('test logger debug');
    // ctx.logger.info('test logger info');
    // ctx.logger.warn('test logger warn');
    // ctx.logger.error(new Error('test logger error')); // Error类型带堆栈信息

    ctx.body = 'hi, logs update';
  }
}

module.exports = LogsController;
