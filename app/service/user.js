'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find (id) {
    if (id) {
      return await this.ctx.model.User.findByPk(id);
    } else {
      return await this.ctx.model.User.findAll();
    }
  }
}

module.exports = UserService;