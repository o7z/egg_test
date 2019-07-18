'use strict';

module.exports = () => {
  return async function(ctx, next) {
    console.log('report--start');
    const startTime = Date.now();
    await next();
    // 上报请求时间
    ctx.logger.info(`used : ${Date.now() - startTime}ms`);
    console.log('report--end');
  };
};
