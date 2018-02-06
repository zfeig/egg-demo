module.exports = (options,app) => {
	return async function counterMiddleware(ctx,next) {
       const startTime = Date.now();
       ctx.set("Access-Control-Allow-Origin","*");
       await next();
       const endTime = Date.now() - startTime;
       console.log(`exec time:${endTime} ms`);
	}
}