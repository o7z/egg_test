'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  // mysql: {
  //   enable: true,
  //   package: 'egg-mysql',
  // },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  }
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};
