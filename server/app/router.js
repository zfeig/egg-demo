module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.home.news);
  router.get('/api', controller.home.api);
  router.get('conf','/api/test' ,controller.home.conf);
  router.get('/user/:id', controller.home.user);
  router.post('/post', controller.home.post);
  router.get('/list', controller.home.list);
  router.get('/detail/:id', controller.home.detail);
};