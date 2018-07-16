'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 查询全部
  async users() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.user.list(ctx.query);
  }

  // 查询单个
  async user() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.user.find(ctx.params.id);
  }

  // 创建
  async create() {
    const ctx = this.ctx;
    const created = await ctx.service.user.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = created;
  }

  // 更新
  async update() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    const body = ctx.request.body;
    ctx.body = await ctx.service.user.update({ id, updates: body });
  }

  // 删除
  async del() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    await ctx.service.user.del(id);
    ctx.status = 200;
  }

}

module.exports = UserController;
