// openNews 共有方法
function getBoxDataList (boxDom,dataList) {
	var tempDom= $(boxDom);
	if (!tempDom || dataList.length === 0) return;
	var tempStr = '';
	for(let i=0; i < dataList.length; i++) {
        let newsData = dataList[i].newsData || [];
        listStr = '';
        for(var j = 0; j < newsData.length; j++) {
            listStr += `<li><a data-url='${newsData[j].url}' href="#">${newsData[j].title}</a></li>`
        }

        tempStr += `<div class="Box3">
        <div class="tltBox">
            <div class="tlt_1"><a href="./index/components/list.html?s=index_gydt" target="blank"><font color="#c10000">${dataList[i].titleContent.preTitle}</font><font color="#000">${dataList[i].titleContent.lastTitle}</font></a></div>
            <div class="more"><a href="./index/components/list.html?s=index_gydt" target="blank">更多 &gt;</a></div>
        </div>
        <ul>${listStr}</ul></div>`
    }
	tempDom.html(tempStr);
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