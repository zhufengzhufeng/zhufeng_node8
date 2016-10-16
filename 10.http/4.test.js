var url = require('url');
console.log(url.parse('https://username:password@www.baidu.com:80/s?wd=asda&rsv_spt=1&rsv_iqid=0x8c8b0fa700005a17&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=78040160_5_pg&rsv_enter=1&rsv_sug3=4&rsv_sug1=2&rsv_sug7=100&rsv_sug2=0&inputT=461&rsv_sug4=461',true));


/*
 Url {
 protocol: 'https:', 协议
 slashes: true, 是否带斜杠
 auth: null, 作者
 host: 'www.baidu.com', 主机+端口
 port: null, 端口号
 hostname: 'www.baidu.com', 主机名
 hash: null, hash值（路径变化不跳转页面，会产生历史管理）
 search: '?wd=asda&rsv_spt=1&rsv_iqid =0x8c8b0fa700005a17&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=78040160_5_pg&rsv_enter=1&rsv_sug3=4&rsv_sug1=2&rsv_sug7=100&rsv_sug2=0&inputT=461&rsv_sug4=461',  查询字符串
 query: 查询对象
 { wd: 'asda',
 rsv_spt: '1',
 rsv_iqid: '0x8c8b0fa700005a17',
 issp: '1',
 f: '8',
 rsv_bp: '0',
 rsv_idx: '2',
 ie: 'utf-8',
 tn: '78040160_5_pg',
 rsv_enter: '1',
 rsv_sug3: '4',
 rsv_sug1: '2',
 rsv_sug7: '100',
 rsv_sug2: '0',
 inputT: '461',
 rsv_sug4: '461' },
 pathname: '/s',  请求路径
 path: '/s?wd=asda&rsv_spt=1&rsv_iqid=0x8c8b0fa700005a17&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=78040160_5_pg&rsv_enter=1&rsv_sug3=4&rsv_sug1=2&rsv_sug7=100&rsv_sug2=0&inputT=461&rsv_sug4=461',
 href: 'https://www.baidu.com/s?wd=asda&rsv_spt=1&rsv_iqid=0x8c8b0fa700005a17&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=78040160_5_pg&rsv_enter=1&rsv_sug3=4&rsv_sug1=2&rsv_sug7=100&rsv_sug2=0&inputT=461&rsv_sug4=461' }

 */