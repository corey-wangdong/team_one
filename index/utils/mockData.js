/* 
  head 导航
*/

var headData = [
  {
    title: "homePage",
    desc: "首页",
    firstLevelUrl: "dtwz/index.jsp",
    imgUrl: '',
    childs: []
  },
  {
    title: "aboutDT",
    desc: "关于大唐",
    firstLevelUrl: "action=showFirstDoc&t=index_gydt&s=gydt_gsjj",
    imgUrl: './index/images/nav-img-01.jpg',
    childs: [
      {
        childTitle: "companyProfile",
        childDesc: "公司简介",
        secondLevelUrl: "action=showFirstDoc&t=index_gydt&s=gydt_gsjj",
      },
      {
        childTitle: "companyLeader",
        childDesc: "公司领导",
        secondLevelUrl: "action=showFirstDoc&t=index_gydt&s=gydt_gsld",
      },
      {
        childTitle: "companyHonor",
        childDesc: "公司荣誉",
        secondLevelUrl: "action=showNewsList&t=index_gydt&s=zzry_gsry",
      },
      {
        childTitle: "organizationalStructure",
        childDesc: "组织架构",
        secondLevelUrl: "action=showFirstDoc&t=index_gydt&s=gydt_zzjg",
      },
      {
        childTitle: "memberUnits",
        childDesc: "成员单位",
        secondLevelUrl: "action=showFirstDoc&t=index_gydt&s=gydt_cydw",
      },
      {
        childTitle: "memorabilia",
        childDesc: "大事记",
        secondLevelUrl: "action=showNewsInYearList&t=index_gydt&s=gydt_djs",
      },
      {
        childTitle: "contactInformation",
        childDesc: "联系方式",
        secondLevelUrl: "action=showFirstDoc&t=index_gydt&s=gydt_lxfs",
      }
    ]
  },
  {
    title: "businessDevelopment",
    desc: "经营发展",
    firstLevelUrl: "action=showFirstDoc&s=jyfz_cybk&t=index_jyfz&t=index_jyfz&s=jyfz_scjy",
    imgUrl: './index/images/nav-img-02.jpg',
    childs: [
      {
        childTitle: "productionAndOperation",
        childDesc: "生产经营",
        secondLevelUrl: "action=showFirstDoc&s=jyfz_cybk&t=index_jyfz&t=index_jyfz&s=jyfz_scjy",
      },
      {
        childTitle: "financialReports",
        childDesc: "财务报告",
        secondLevelUrl: "action=showFirstDoc&s=cwbg_zc&t=index_jyfz&t=index_jyfz&s=jyfz_cwbg",
      }
    ]
  },
  {
    title: "newsCenter",
    desc: "新闻中心",
    firstLevelUrl: "action=showNewsInYearList&t=index_news&s=news_sjjs",
    imgUrl: './index/images/nav-img-03.jpg',
    childs: [
      {
        childTitle: "currentAffairs",
        childDesc: "时政要闻",
        secondLevelUrl: "action=showNewsInYearList&t=index_news&s=news_sjjs",
      },
      {
        childTitle: "stateOwnedAssetsNews",
        childDesc: "国资动态",
        secondLevelUrl: "action=showFirstDoc&s=cwbg_zc&t=index_jyfz&t=index_jyfz&s=jyfz_cwbg",
      }
    ]
  },
  {
    title: "socialResponsibility",
    desc: "社会责任",
    firstLevelUrl: "action=showNewsList&t=index_shzr&s=shzr_shzrbg",
    imgUrl: './index/images/nav-img-04.jpg',
    childs: [
      {
        childTitle: "responsibilityReport",
        childDesc: "责任报告",
        secondLevelUrl: "action=showNewsList&t=index_shzr&s=shzr_shzrbg",
      }
    ]
  },
  {
    title: "corporateCulture",
    desc: "企业文化",
    firstLevelUrl: "action=showNewsInYearList&t=index_qywh&s=qywh_qykfr",
    imgUrl: './index/images/nav-img-05.jpg',
    childs: [
      {
        childTitle: "enterpriseOpenDay",
        childDesc: "企业开放日",
        secondLevelUrl: "action=showNewsInYearList&t=index_qywh&s=qywh_qykfr",
      }
    ]
  },
  {
    title: "InvestorRelations",
    desc: "投资者关系",
    firstLevelUrl: "action=showNewsList&t=index_tzzgx&s=index_tzzgx&t=index_tzzgx",
    imgUrl: './index/images/nav-img-06.jpg',
    childs: [
      {
        childTitle: "datangPower",
        childDesc: "大唐发电",
        secondLevelUrl: "http://www.dtpower.com/&t=index_tzzgx&s=tzzgx_dtgj",
      }
    ]
  },
]

// 时政要闻 ------- 开始---------
var szNewsData = [
  {
    url:'t=&d=8EE2195F-C79E-0B72-1D9A-FAC07183A98B',
    title:'习近平主持召开中央全面深化改革委员会第十七次会议'
  },
  {
    url:'t=&d=91C529CE-28BC-036D-0411-60F6E9BC0B37',
    title:'习近平出席中央农村工作会议并发表重要讲话'
  },
  {
    url:'t=&d=F571FE1B-BF22-43B1-4159-62336E5E9782',
    title:'习近平主持中共中央政治局召开民主生活会'
  },
  {
    url:'t=&d=E8BC534F-D9D8-29A5-EF92-F2C2758C426F',
    title:'开局“十四五” 开启新征程——从2020年中央经济'
  },
]

// 集团新闻  右边list
	var jtNewsData = [
		{
			url:'t=&d=BA913255-A25A-BFC5-F676-BF7165D6D7CE',
			title:'集团公司党组传达学习贯彻中央经济工作会议精神'
		},
		{
			url:'t=&d=0255842A-8701-6BAD-A67D-B79D7EE7D8FA',
			title:'集团公司召开冬季保暖和安全保电工作视频会'
		},
		{
			url:'t=&d=AACFBD24-557C-470E-3A51-DF5BC31B3E7A',
			title:'邹磊会见中交集团党委书记、董事长、总经理王彤宙'
		},
		{
			url:'t=&d=50876F47-E2A1-7C00-75C4-71F9D11A23D4',
			title:'集团公司召开老领导老同志座谈会'
		},
	]

var contentData = [
  {
    title: "aboutDT",
    desc: "关于大唐",
    titleContent:{
      preTitle:'系统',
      lastTitle:'动态'
    },
    newsData:[
      {
        url:'fl=aboutDT&d=AFA02F4A-AAEE-6AE7-DD45-FE0AD7D4D8CF',
        title:'黑龙江公司：打造民生“暖屋子”'
      },
      {
        url:'fl=aboutDT&d=DF8C8F04-E618-97BE-973A-B0E3BF05CAC2',
        title:'江苏公司：以考促学提升素质能力'
      }
    ]
  },
  {
    title: "businessDevelopment",
    desc: "经营发展",
    titleContent:{
      preTitle:'基层',
      lastTitle:'简讯'
    },
    newsData:[
      {
        url:'fl=businessDevelopment&d=26CDA4D7-EE64-6E57-8373-9BF5AF3EE652',
        title:'张家口热电公司优质大唐热应对极寒天”'
      },
      {
        url:'fl=businessDevelopment&d=1EE40DCB-381D-D2AA-5CC9-0037823239D6',
        title:'桂冠山东分公司：全面启动防寒潮保发电模式'
      }
    ]
  },
  {
    title: "newsCenter",
    desc: "新闻中心",
    titleContent:{
      preTitle:'一线',
      lastTitle:'故事'
    },
    newsData:[
      {
        url:'fl=newsCenter&d=D2EC3DC8-022C-28E5-BB04-50879B55D848',
        title:'锅炉“铁军”'
      },
      {
        url:'fl=newsCenter&d=EB735D1E-A4E7-ADE0-ED87-0E5B387C91DF',
        title:'“疫”刻不停保供电'
      }
    ]
  },
  {
    title: "InvestorRelations",
    desc: "投资者关系",
    titleContent:{
      preTitle:'深度',
      lastTitle:'报道'
    },
    newsData:[
      {
        url:'fl=InvestorRelations&d=3893F3B6-4FCD-9E8D-8534-833A1A1A5F26',
        title:'湖南分公司：战寒潮　顶负荷　全力保发电'
      },
      {
        url:'fl=InvestorRelations&d=214A9209-1676-E359-5634-C354B8D89EDC',
        title:'【全国青年安全生产示范岗】锦州热电公司：青春为伴　砥'
      }
    ]
  },
  {
    title: "socialResponsibility",
    desc: "社会责任",
    titleContent:{
      preTitle:'媒体',
      lastTitle:'关注'
    },
    newsData:[
      {
        url:'fl=socialResponsibility&d=67628C9F-F62E-7681-DE39-28186D01D7B1',
        title:'[新华网]中国大唐召开党组会议专题研究全面从严治党工'
      },
      {
        url:'fl=socialResponsibility&d=7B3DA692-27EB-FFF9-F924-645BDF5DC378',
        title:'[中国能源网]中国大唐召开党组会议专题研究全面从严治'
      }
    ]
  },
  {
    title: "corporateCulture",
    desc: "企业文化",
    titleContent:{
      preTitle:'幸福',
      lastTitle:'大唐'
    },
    newsData:[
      {
        url:'fl=corporateCulture&d=F9EE024E-3CAD-CC21-059A-1D074701CA98',
        title:'江山公司：为幸福+1度'
      },
      {
        url:'fl=corporateCulture&d=8A6B3A2D-526D-84B7-3DE2-542722732040',
        title:'三门峡发电公司：幸福来敲门'
      }
    ]
  }
]