'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Post = app.model.define('posts', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: STRING(30),
    content: STRING(255),
    user_id: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  // 连接user的表
  Post.associate = function() {
    app.model.Post.belongsTo(app.model.User, {
      // 设置别名
      as: 'user',
      // 通过user_id进行连接
      foreignKey: 'user_id',
    });
  };

  return Post;
};
