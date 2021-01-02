// JavaScript Document
<!--
/*�������� ��һ����ʽ �ڶ�����ʽ ������ʾ��ʽ*/
function setTab(name,cursel,n){
	for(var i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById(name+i+"Div");
		var conMore=document.getElementById(name+i+"DivMore");
		if(i==cursel){
			menu.className = "hover";
			con.style.display = "block";
			conMore.style.display = "block";
		}else{
			menu.className = "";
			con.style.display = "none";
			conMore.style.display = "none";
		}
		
		//var con1=document.getElementById("con1_"+name+"_"+i);
		//menu.className=i==cursel?"hover":"";
		//con1.style.display=i==cursel?"block":"none";
	}
}
//function setTab12(name,cursel,n){
	//alert(name+"  "+cursel+" "+n);
	//for(i=1;i<=n;i++){
	//	var menu=document.getElementById(name+i);
	//	var con2=document.getElementById("con2_"+name+"_"+i);
	//	menu.className=i==cursel?"hover":"";
	//	con2.style.display=i==cursel?"block":"none";
	//}
//}
function picjs1(obj, obj1){
	var pic = document.getElementById(obj1);
	if(obj.id == 'pic11') {
		obj.src="../index/images/lan1_label_Aup.gif";
		pic.src="../index/images/lan1_label_Bout.gif";
	} else if(obj.id == 'pic12') {
		obj.src="../index/images/lan1_label_Bup.gif";
		pic.src="../index/images/lan1_label_Aout.gif";
	} 
}
//-->
<!--
/*��ȱ��� ��һ����ʽ �ڶ�����ʽ ������ʾ��ʽ*/
/*function setTab21(name,cursel,n){
	for(i=1;i<=n;i++){
	var menu=document.getElementById(name+i);
	var con1=document.getElementById("con1_"+name+"_"+i);
	menu.className=i==cursel?"hover":"";
	con1.style.display=i==cursel?"block":"none";
	}
}
function setTab22(name,cursel,n){
	for(i=1;i<=n;i++){
	var menu=document.getElementById(name+i);
	var con2=document.getElementById("con2_"+name+"_"+i);
	menu.className=i==cursel?"hover":"";
	con2.style.display=i==cursel?"block":"none";
	}
}*/
function picjs2(obj, obj1){
	var pic = document.getElementById(obj1);
	if(obj.id == 'pic21') {
		obj.src="../index/images/lan2_label_Aup.gif";
		pic.src="../index/images/lan2_label_Bout.gif";
	} else if(obj.id == 'pic22') {
		obj.src="../index/images/lan2_label_Bup.gif";
		pic.src="../index/images/lan2_label_Aout.gif";
	} 
}
//-->
<!--
/*�����Ұ ��һ����ʽ �ڶ�����ʽ ������ʾ��ʽ*/
/*function setTab31(name,cursel,n){
	for(i=1;i<=n;i++){
	var menu=document.getElementById(name+i);
	var con1=document.getElementById("con1_"+name+"_"+i);
	menu.className=i==cursel?"hover":"";
	con1.style.display=i==cursel?"block":"none";
	}
}
function setTab32(name,cursel,n){
	for(i=1;i<=n;i++){
	var menu=document.getElementById(name+i);
	var con2=document.getElementById("con2_"+name+"_"+i);
	menu.className=i==cursel?"hover":"";
	con2.style.display=i==cursel?"block":"none";
	}
}*/
function picjs3(obj, obj1){
	var pic = document.getElementById(obj1);
	if(obj.id == 'pic31') {
		obj.src="../index/images/lan3_label_Aup.gif";
		pic.src="../index/images/lan3_label_Bout.gif";
	} else if(obj.id == 'pic32') {
		obj.src="../index/images/lan3_label_Bup.gif";
		pic.src="../index/images/lan3_label_Aout.gif";
	} 
}
//-->
