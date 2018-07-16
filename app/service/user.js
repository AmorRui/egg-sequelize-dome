'use strict';

const Service = require('egg').Service;

class User extends Service {
  // 查询所有
  async list({ offset = 0, limit = 10, order_by = 'created_at', order = 'ASC' }) {
    return this.ctx.model.User.findAndCountAll({
      offset,
      limit,
      order: [[ order_by, order.toUpperCase() ]],
    });
  }

  // 查询单个
  async find(id) {
    const user = await this.ctx.model.User.findById(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user;
  }

  // 创建一个
  async create(user) {
    return this.ctx.model.User.create(user);
  }

  // 更新
  async update({ id, updates }) {
    const user = await this.ctx.model.User.findById(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user.update(updates);
  }

  // 删除
  async del(id) {
    const user = await this.ctx.model.User.findById(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user.destroy();
  }
}

module.exports = User;
