function createdDom(data, flag) {
  var templateDom = '';
  if(!data){
    return;
  }
  if(flag == 'head') {
    for(var i = 0; i < data.length; i++) {
      if(data[i].title == 'homePage') {
        templateDom += '<div class="tmenulist"><a href="' + data[i].firstLevelUrl + '" class="tmenu_link">' + data[i].desc +'</a>';
      }else {
        templateDom += '<div class="tmenulist"><a href="javascript:openMenu(' + "'" + data[i].firstLevelUrl + "'" + ')" class="tmenu_link">' + data[i].desc + '</a>'
      }
      

      if (data[i].childs.length > 0) {
        var count = 1
        templateDom += '<ul class="mul_II"><li><div><OL>'

        for(var j = 0; j < data[i].childs.length; j++) {
          if (count > 3 || count == 1) {
            templateDom += '<LI>'
          }

          templateDom += '<A href="javascript:childNews(' + "'" + data[i].childs[j].secondLevelUrl + "'" + ')">' + data[i].childs[j].childDesc + '</A>'

          count++;

          if (count > 3 || j == data[i].childs.length - 1) {
            templateDom += '</LI>'
            count = 1
          }
        }

        templateDom += '</OL><span class=nav-img>';
        templateDom += '<IMG src="' + data[i].imgUrl + '"/></span>'
        templateDom += ' </div></li></ul>'
      }


      templateDom += '</div>'

      
    }
  }

  return templateDom
}