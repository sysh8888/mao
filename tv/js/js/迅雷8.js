
//sniffer: 0, isVideo: '',  
//模板:'自动', ${MY_CATE}  ${MY_PAGE - 1}
// MOBILE_UA  PC_UA IOS_UA TABS LISTS  VODS
// RULE_CK MY_CATE MY_PAGE MY_FLKEY MY_URL
//class_parse: '#side-menu li;a&&Text;a&&href;/(.*?)\.html',//动态分类/(\\d+).html(数字)  .*/(.*?).html(非数字)
var rule = {
    author: '',
    类型: '影视',
    title: '迅雷8',
    编码: 'utf-8',
    搜索编码:'',
    hostJs: '',
    homeUrl: '', 
    host: 'https://xunlei8.top',
    url: 'https://xunlei8.top/fyclass-0-0-0-hot-fypage-30.html',
    class_name: "电影&剧集",
    class_url: "list&tv",
    searchUrl: ' https://xunlei8.top/s/**.html',
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
    timeout: 9000,
    cate_exclude: '',
    play_parse: true,
 //   lazy: `js:input = {parse: 0, url: input, }`,
    double: true,
    推荐: '列表1;列表2;标题;图片;描述;链接;详情',
    一级: '.b351186d6b114&&.b89cb;a&&title;img&&src;.span-year&&Text;a&&href;详情',
    二级: {
        title: 'h1&&Text;p:contains(类型：)&&Text',
        img: '图片链接',
        desc: '主要信息;p:contains(上映：)&&Text;p:contains(地区：)&&Text;演员;p:contains(导演：)&&Text',
        content: '.b1f40f7888&&Text',
        tabs: '',
        lists: 'ul li .baf6e960dd',
        tab_text: ''
        
    },
    搜索:'*', //'列表;标题;图片;描述;链接;详情'
}
