'use strict';

module.exports = {
  schedule: {
    interval: '300s', // 300秒间隔，vscode调试时修改需要重启才能生效
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    if (!ctx.app.cache) {
      ctx.app.cache = { t: 0 };
    }
    ctx.app.cache.t++;
    console.log(`schedule test : ${ctx.app.cache.t}`);
  },
};
