var rule = {
  类型:'影视',//影视|听书|漫画|小说
  title:'夕云影视',
  host:'https://www.xyxy.live',
  url:'/index.php/vod/show/id/fyclass/page/fypage.html',
  searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
  searchable:2,
  quickSearch:0,
  filterable:1,
  filter:'',
  filter_url:'',
  filter_def:{},
  headers:{
      'User-Agent':'MOBILE_UA',
  },
  timeout:5000,
  class_parse:'.navbar-items&&li;a&&Text;a&&href;.*/(.*?)\.html',
  cate_exclude:'今日更新',
  play_parse:true,
  lazy:$js.toString(()=>{
    input = {parse:1,url:input,js:''};
  }),
  double:true,
  推荐:'module-poster-items-base;a&&title;.lazy&&data-original;.module-item-note&&Text;a&&href',
  一级:'.module-poster-items-base&&a;a&&title;.lazy&&data-original;.module-item-note&&Text;a&&href',
  二级:{
    title:'h1&&Text;.module-info-tag&&Text',
    img:'.ls-is-cached&&data-original',
    desc:'.module-info-item-content:eq(3)&&Text;.module-info-tag&&a:eq(0)&&Text;.module-info-tag&&a:eq(1)&&Text;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text',
    content:'.module-info-introduction-content&&p&&Text',
    tabs:'#y-playList&&.module-tab-item',
    lists:'.module-play-list-content:eq(#id)&&a',
    tab_text:'span&&Text',
    list_text:'span&&Text',
    list_url:'a&&href',
    list_url_prefix: '',
  },
  搜索:'.module-card-item;.lazy&&alt;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content:eq(1)&&Text',
}