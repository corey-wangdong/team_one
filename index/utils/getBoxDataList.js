// openNews 共有方法
function getBoxDataList (boxDom,dataList) {
	var tempDom= $(boxDom);
	if (!tempDom || dataList.length === 0) return;
	var tempStr = '';
	for(let i=0; i < dataList.length; i++) {
        let newsData = dataList[i].newsData || [];
        listStr = '';
        for(var j = 0; j < newsData.length; j++) {
            listStr += `<li><a href="javascript:openNews('${newsData[j].url}')">${newsData[j].title}</a></li>`
        }

        tempStr += `<div class="Box3">
        <div class="tltBox">
            <div class="tlt_1"><a href="javascript:openMenu('fl=${dataList[i].title}&s=${dataList[i].listTitle}')"><font color="#c10000">${dataList[i].titleContent.preTitle}</font><font color="#000">${dataList[i].titleContent.lastTitle}</font></a></div>
            <div class="more"><a href="javascript:openMenu('fl=${dataList[i].title}&s=${dataList[i].listTitle}')">更多 &gt;</a></div>
        </div>
        <ul>${listStr}</ul></div>`
    }
	tempDom.html(tempStr);
}
function getJtxwBannerTitle(boxDom,dataList) {
	var tempDom= $(boxDom);
	if (!tempDom) return;

	let tempStr = `<div class="tltBox" style="width:1130px; position:relative;">
	<div class="tlt_1"><a href="javascript:openMenu(${dataList.titleContent.linkUrl})"><font color="#c10000">${dataList.titleContent.preTitle}</font><font color="#000">${ dataList.titleContent.lastTitle}</font></a></div>     	
	<div class="more"><a href="javascript:openMenu(${dataList.titleContent.linkUrl})">更多 &gt;</a></div>
	</div>`;

	tempDom.html(tempStr);
}

function getJtxwBannerList(boxDom,dataList) {
	var tempDom= $(boxDom);
	if (!tempDom) return;

	let bannerImgUrlData = dataList.bannerImgUrlData || [];
	let listStr = '';
	for(var i=0; i < bannerImgUrlData.length; i++) {
		listStr += `<script type="text/javascript">rotaionArr[rotaionArr.length]= '${bannerImgUrlData[i].linkUrl}'</script>
		<li><a href="javascript:openWin('${bannerImgUrlData[i].linkUrl}')"><img src="${bannerImgUrlData[i].imgUrl}" alt='${bannerImgUrlData[i].alt}'></a></li>`
	}
	console.log('listStr----',listStr)
	let tempStr = `<script type="text/javascript">var rotaionArr= new Array();</script>
	<div id="yx-rotaion" class="yx-rotaion" style="height:435px;">
	<ul class="rotaion_list">${listStr}</ul>
	</div>
	<script type="text/javascript" src="./index/js/jquery.yx_rotaion.js"></script>
	<script type="text/javascript">$(".yx-rotaion").yx_rotaion({auto:true});</script>`;

	tempDom.html(tempStr);
}

function getJtxwDataList (boxDom,dataList) {
	var tempDom= $(boxDom);
	if (!tempDom) return;
	let listStr = `<h1><a href="./index/components/articles.html?${dataList.jtNewsUrl}">${dataList.jtNewsTitle}</a></h1>
	<h2>${dataList.jtNewsContent}<a href="./index/components/articles.html?${dataList.jtNewsUrl}" class="detailLink">[详情]</a>
				</h2><ul style="margin-top: 10px;">`;
	var tempData = dataList.contentData;
	var temStr = ''
	for(var i=0; i < tempData.length; i++) {
		temStr += `<li><a data-url='${tempData[i].url}' href="#">${tempData[i].title}</a></li>`
	}
	listStr += temStr + '</ul>'
	tempDom.html(listStr);
	tempDom.click(function(e) {
		console.log(e.target.tagName)
			if(e.target.tagName.toLowerCase()=='a'){
				openNews($(e.target).attr('data-url')) 
			}
	})
}

function getDataList (boxDom,dataList,content) {
	var tempDom= $(boxDom);
	if (!tempDom || dataList.length === 0) return;
	let listStr = '';
	for(var i=0; i < dataList.length; i++) {
		listStr += `<li>${content ? content : ''}<a data-url='${dataList[i].url}' href="#">${dataList[i].title}</a></li>`
	}
	tempDom.html(listStr);
	tempDom.click(function(e) {
		console.log(e.target.tagName)
			if(e.target.tagName.toLowerCase()=='a'){
				openNews($(e.target).attr('data-url')) 
			}
	})
}

