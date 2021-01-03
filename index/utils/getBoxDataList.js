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

function getJtxwDataList (boxDom,dataList) {
	var tempDom= $(boxDom);
	if (!tempDom) return;
	listStr = `<h1><a href="./index/components/articles.html?${dataList.jtNewsUrl}">${dataList.jtNewsTitle}</a></h1>
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
	listStr = '';
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
