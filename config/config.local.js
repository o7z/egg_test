/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = {
  title: 'local a!',
  mysql: {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: '120789',
      database: 'egg_test'
    }
  },
  sequelize: {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    password: '120789',
    database: 'egg_test_dev',
    define: {
      timestamps: false,
      underscored: true, // 注意需要加上这个， egg-sequelize只是简单的使用Object.assign对配置和默认配置做了merge, 如果不加这个 update_at会被转变成 updateAt故报错
      // 禁止修改表名，默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数
      // 但是为了安全着想，复数的转换可能会发生变化，所以禁止该行为
      freezeTableName: true
    }
  },
  app: true, // 是否加载到 app 上，默认开启
  agent: false, // 是否加载到 agent 上，默认关闭
}; 
