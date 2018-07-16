'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  //  查询全部
  async posts() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.post.list(ctx.query);
  }
  // 查询单个
  async post() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.post.find(ctx.params.id);
  }

  // 创建一个
  async create() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    body.user_id = +ctx.params.user_id;
    const created = await ctx.service.post.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = created;
  }

  // 更新
  async update() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    const user_id = +ctx.params.user_id;
    const body = ctx.request.body;
    ctx.body = await ctx.service.post.update({ id, user_id, updates: body });
  }

  // 删除
  async del() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    await ctx.service.post.del(id);
    ctx.status = 200;
  }
}

module.exports = PostController;
