//sniffer: 0, isVideo: '',  
//模板:'自动', ${MY_CATE}  ${MY_PAGE - 1}
// MOBILE_UA  PC_UA IOS_UA TABS LISTS  VODS
// RULE_CK MY_CATE MY_PAGE MY_FLKEY MY_URL
//class_parse: '#side-menu li;a&&Text;a&&href;/(.*?)\.html',//动态分类/(\\d+).html(数字)  .*/(.*?).html(非数字)
var rule = {
	author: '',
	类型: '人人影视',
	title: '',
	编码: 'utf-8',
	搜索编码: '',
	hostJs: '',
	homeUrl: '',
	host: 'https://www.rrdynb.com',
	url: '/fyclass_fypage.html',
	class_name: "电影&剧集&动漫&综艺",
	class_url: "movie/list_2&dianshiju/list_6&dongman/list_13&zongyi/list_10",
	searchUrl: '**',
	detailUrl: '',
	searchable: 2,
	quickSearch: 0,
	filterable: 0,
	filter: '',
	filter_url: '',
	filter_def: '',
	headers: {
		'User-Agent': 'MOBILE_UA',
	},
	timeout: 5000,
	cate_exclude: '',
	play_parse: true,
	// lazy: `js:input = {parse: 1, url: input, js: '',header:rule.headers}`,
	double: true,
	推荐: '列表1;列表2;标题;图片;描述;链接;详情',
	一级: '#movielist li;img&&alt;img&&data-original;.tags&&Text;.movie-thumbnails&&href;详情',
	二级: {
		title: 'h1&&Text;span:contains(类型:)&&Text',
		img: '图片链接',
		desc: 'span:contains(编剧:)&&Text;span:contains(上映日期:)&&Text;span:contains(地区:)&&Text;span:contains(主演:)&&Text;span:contains(导演:)&&Text',
		content: 'span:contains(。)&&Text',
		tabs: '.movie-txt a',
		lists: '.movie-txt a:eq(#id)',

		list_url: 'a&&href',
		list_url_prefix: 'push://'
	},
	搜索: $js.toString(() => {
		let id = [2,6,13];
		let d = [];
		id.forEach((it) => {
			let html = request(`https://www.rrdynb.com/data/rss/${it}.xml`, {
				headers: rule.headers
			});
			let items = pdfa(html, `channel&&item:contains(${KEY})`);
			items.forEach(it => {
				d.push({
					title: pdfh(it, 'title&&Text').replace(/\]\]\>|百度云网盘|下载|\<|\>|阿里云盘|\.|\!\[CDATA\[|《|》/g, ''),
					url: it.match(/link>(.*?)\.html/)[1] + '.html',
					desc: pdfh(it, 'pubDate&&Text'),
					content: pdfh(it, 'description&&Text')
				});
			});
		});
		setResult(d);
	}),

}
