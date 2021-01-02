// JavaScript Document
//相关链接移动效果
function linkABC(obj, obj1, obj2){
	var pic1 = document.getElementById(obj1);
	var pic2 = document.getElementById(obj2);
	if(obj.id == 'linkA') {
		obj.src="../index/images/link_Aup.gif";
		pic1.src="../index/images/link_Bout.gif";
		pic2.src="../index/images/link_Cout.gif";
	} else if(obj.id == 'linkB') {
		obj.src="../index/images/link_Bup.gif";
		pic1.src="../index/images/link_Aout.gif";
		pic2.src="../index/images/link_Cout.gif";
	} else if(obj.id == 'linkC') {
		obj.src="../index/images/link_Cup.gif";
		pic1.src="../index/images/link_Aout.gif";
		pic2.src="../index/images/link_Bout.gif";
	}
}