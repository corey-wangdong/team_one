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
    firstLevelUrl: "action=showFirstDoc&t=index_gydt",
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
    firstLevelUrl: "action=showFirstDoc&t=index_jyfz&s=jyfz_cybk&t=index_jyfz",
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
    firstLevelUrl: "action=showNewsIndexing&t=index_news",
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
        secondLevelUrl: "/indeaction=showNewsInYearList&t=index_news&s=news_jjgzxAction.ndo?action=showFirstDoc&s=cwbg_zc&t=index_jyfz&t=index_jyfz&s=jyfz_cwbg",
      }
    ]
  },
  {
    title: "socialResponsibility",
    desc: "社会责任",
    firstLevelUrl: "action=showNewsList&t=index_shzr&s=shzr_shzrbg&t=index_shzr",
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
    firstLevelUrl: "action=showNewsIndexing&t=index_qywh",
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
