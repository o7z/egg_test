'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('/api/v1/logs', controller.logs);
  router.resources('/api/v1/users', controller.users);
};
