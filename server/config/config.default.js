exports.keys = "zfeig2018";
exports.security = {
	'csrf': false,
  domainWhiteList:['http://127.0.0.1:8080','http://127.0.0.1:8000','http://127.0.0.1:7001']
}
exports.cors = {
  package: 'egg-cors'
};
exports.view = {
	 defaultViewEngine: 'nunjucks',
	 mapping: {
	    '.tpl': 'nunjucks',
	  },
}
exports.mysql = {
	client: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: 'test',
  },
}
exports.api = {
	 	baidu: "http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=node&bk_length=600"
	 }

exports.middleware = [
  'counter',
  'robot',
  'info'
];
exports.robot = {
  ua: [
    /Baiduspider/i,
  ]
};
