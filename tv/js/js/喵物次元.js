var rule={
  title: "喵物次元",
  host: "https://www.catwcy.com",
  url: "/show/fyclassfyfilter.html",
  searchUrl: "/search/page/fypage/wd/**.html",
  searchable: 2,
  quickSearch: 0,
  filterable: 1,
  filter: "H4sIAAAAAAAAA+2aW28TRxTHv0plaSQQtN41vuzytuvYXMIl3C8VDxZYQBugSlIqBEghkNSJQ+ygXEgJgaAGOyXGTgPFiXHyZTy7m6d+hc56d4/HJywCqqq0zJv3/ztzZua/s+szmr0ZkAO7v70Z+D59I7A7YC7X6Fw2sDNwNXUlzV9fT3X/mG4GXmUyHSxu3i3aMrsI3N7pqEZ+zlwad9Xg+e5Ub2/Q1bwQayNPR4rtIa7mhdC3A43qlDk52h7VkiFwZJluTKMoR/NCzLsla76/PcTVYNCZh8YUyuJqkOXFnDGCszgaZHk6Tx+VUBZH80I2Hz8wHi60h7gaZLmTNTPLKIujwaSHHmzOLKJJOxqE5MfoyxcoxNFgRjPrNJ9BM3I0GMvvNeMeCnE1mFFpwliZRDNyNMgysGRO4SXhaBAyVjTzQyjE0WBGCz/T1RqakaPBjArjW0JcDTqqVo1MDnXkaJBlYY5NAGVxtNY9yhv9U/geNTVY5PP91iC6064GWWbX2CJDWRyNW5iNteEtC9PWYLgjZbP+Gxquo4F1wwXj7iCyztFguP11c30MDdfRYCylUSszh8biaJBlYNicRGNxNRju+hitjNOFFTRikCFXvUYrOav8CqUDubXUq8zYzaW3eLV7cmsFrRj9BZofx4vIk2GmK/Obj59tmUlLhsClZ43V/JaMLfn2OTvUea3S1VeNWr31WoXrD3mthqRQ2OvkRjrVE2wKHN2F6S6ehjAN8VTGVOaphKnEUVlFlAkcVTBVeBrDNMbTKKZRnkYwjfAUeyXzXsnYK5n3SsZeybxXMvZK5r2SsVcy75WEvZJ4ryTslcR7JWGvJN4rCXsl8V5J2CuJ90rCXkm8VxL2SuK9krBXEu+VhL2SeK8k7BUT2h6X0rRRvs89Lt71hzwumpe7O93Xl+4JakB0RHQgcUTiQDoQ6QCSQCQBJIlIEsgeRPYA2YvIXiD7ENkHZD8i+4F0ItIJ5AAiB4AcROQgkEOIHAJyGJHDQLoQ6QJyBJEjQI4ichTIMUSOATmOyHEgJxA5AeQkIieBnELkFJDTiJwGcgaRM0DOInIWiPS1ipitsEfg3M5A6DMrx0WVLarsz7HK/v+V0P9AffzBZe9HVbOzFTq6xv09e9fveSt9l7qe6j3fc/mHvt3Xr12+sE3a3hrkr4XNGViavZeu/RQMBVM96VSQJCJECxMtRhIqUVWiRL+51Helu/VoPJ8xquV3t1SJFrXbJKJEV4iWbG9JcxVjdd2vTyVJdKnZUiV6or2lfTce1d/dMsaiiZKwU6g60TvaW7In1rcl62oXUSM+La3ssm9LhSisgezX5/SCMbvk16caI1qk+SNOtDjy9smib5/sZiSJpvr0Sdff+LaM2A7pMV+HKu93yL4r7+7zfoWuPfe9nx1uS11jqwL1eS/HFiDNLPp1q4Tt9dBaiSwdW08qukMLG2auZA7P+N0k5rOetFcIy6V1NH/YSxrNYuSpkd1gw/GdCBt/c2Ha97w1KJRl8I9Gbco3BRtIlCTCRNeJ6nkhtqpiq/plblWNR6+M6cU27kpiQyo2pGJDam9IP7cdqTggElvX//TWVRwQiQMicUAkqu4vtuoWB0SiHhf1+KfW4xFRj4t6XNTjoh4X9biox0U9LupxUY+LelzU4/9aPR7l6vG/9cfRFbfKbxr1DXOiaFXesP9rOjRoPK2av9wzXuesQobOFLfR5wOJCxfT263CgDmb/erWV8ZwlhUi5osyra1ZL182qlmrXte6uv58e6ftof345Dtu7Xhfcv4FYJVLVrG/NW24/rRPQszZJ+FO1ocxUTZG7xgjk3Q5RzMVc+K1VRhyBsdNzznijga7U1cvNr/CUONETYY7SSJJ9DhR5OYnDmGiJZtH556iaO4XF7rsnvArSvM7gZgdrEeax/YxokS9HyE3t6JDZjg/P3f7L3Cz3vpJMwAA",
  filter_url: "{{fl.类型}}{{fl.字母}}/page/fypage{{fl.年份}}",
  filter_def: "",
  headers: {
    "User-Agent": "MOBILE_UA"
  },
  timeout: 5000,
  class_parse: ".swiper-wrapper&&.swiper-slide;a&&Text;a&&href;(\\d+)",
  cate_exclude: "",
  play_parse: true,
  lazy:muban.mx.lazy,
  double: true,
  推荐: "*",
 一级: ".border-box&&.public-list-box;a&&title;img&&data-src;.public-list-prb&&Text;a&&href;详情",
  二级: {
    title: ".gen-search-form&&ul&&li--em&&Text;.gen-search-form&&ul&&li:eq(6)--em&&Text",
    img: ".lazy1.mask-0&&data-src",
    desc: ".gen-search-form&&ul&&li:eq(1)--em&&Text;.gen-search-form&&ul&&li:eq(4)--em&&Text;.gen-search-form&&ul&&li:eq(5)--em&&Text;.gen-search-form&&ul&&li:eq(2)--em&&Text;.gen-search-form&&ul&&li:eq(3)--em&&Text",
    content: ".gen-search-form&&ul&&li:eq(-1)--em&&Text",
    tabs: ".anthology-tab&&a",
    lists: ".anthology-list-play:eq(#id)&&li",
    tab_text: "body&&Text",
    list_text: "body&&Text",
    list_url: "a&&href"
  },
  搜索: "body&&.public-list-box;.thumb-txt&&Text;img&&data-src;.public-list-prb&&Text;a&&href;.right.rel.flex-auto&&Text"
}
