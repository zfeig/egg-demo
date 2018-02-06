module.exports = (options,app) => {
	return async function infoMiddleware(ctx, next) {
	    await next();
    	const ip = ctx.ip || '0.0.0.0';
    	console.log(`mdware=> [method]:${ctx.method} [url]:${ctx.url}  [ip]: ${ctx.ip}`);
    
  }
}