'use strict';


module.exports = app => {
  const { home } = app.controller;

  const root = '/home';
  app.get('/', home.index);

  // users
  // 全部
  app.router.get('/users', 'user.users');
  // 单个
  app.router.get('/users/:id', 'user.user');
  // 创建
  app.router.post('/users', 'user.create');
  // 更新
  app.router.put('/users/:id', 'user.update');
  // 删除
  app.del('/users/:id', 'user.del');

  // posts 连表查询（外键）
  // 全部
  app.get('/posts', 'post.posts');
  // 单个(连表)
  app.get('/posts/:id', 'post.post');
  // 创建（连表）
  app.post('/users/:user_id/posts', 'post.create');
  // 更新（连表）
  app.put('/users/:user_id/posts/:id', 'post.update');
  // 删除（连表）
  app.del('/users/:user_id/posts/:id', 'post.del');
};
