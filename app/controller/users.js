'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
  async index () {
    const { ctx } = this;
    ctx.body = await ctx.service.user.find();
    console.log(ctx.body)
  }
  async create () {
    const { ctx } = this;
    ctx.body = 'hi, users create';
  }
  async update () {
    const { ctx } = this;
    ctx.body = 'hi, users update';
  }
}

module.exports = UsersController;
