'use strict';

const Service = require('egg').Service;

class Post extends Service {
  // 查询全部。 忽略0条。 10个分页
  async list({ offset = 0, limit = 10, user_id }) {
    const options = {
      offset,
      limit,
      attributes: [ 'id', 'title', 'user_id', 'created_at', 'updated_at' ],
      order: [[ 'created_at', 'desc' ]],
    };
    if (user_id) {
      options.where = {
        user_id,
      };
    }
    return this.ctx.model.Post.findAndCountAll(options);
  }

  // 查询单个
  async find(id) {
    const post = await this.ctx.model.Post.findById(id, {
      include: [{
        model: this.ctx.model.User,
        as: 'user',
        attributes: [ 'id', 'name', 'age' ],
      }],
    });
    // 不存在。 返回404
    if (!post) {
      this.ctx.throw(404, 'post not found');
    }
    return post;
  }

  // 创建
  async create(post) {
    return this.ctx.model.Post.create(post);
  }

  // 更新
  async update({ id, user_id, updates }) {
    const post = await this.ctx.model.Post.findById(id);
    // 不存在这个ID ，返回404
    if (!post) {
      this.ctx.throw(404, 'post not found');
    }
    // ID不相等，返回403
    if (post.user_id !== user_id) {
      this.ctx.throw(403, 'not allowed to modify others post');
    }
    // 进行更新
    return post.update(updates);
  }

  // 删除
  async del(id) {
    const post = await this.ctx.model.Post.findById(id);
    // 不存在返回404
    if (!post) {
      this.ctx.throw(404, 'post not found');
    }
    // 存在删除
    return post.destroy();
  }
}

module.exports = Post;
