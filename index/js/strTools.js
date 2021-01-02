function encode(strIn) {
    var intLen = strIn.length;
    var strOut = "";
    var strTemp;
    for (var i = 0; i < intLen; i++) {
        strTemp = strIn.charCodeAt(i);
        if (strTemp > 255) {
            tmp = strTemp.toString(16);
            for (var j = tmp.length; j < 4; j++) tmp = "0" + tmp;
            strOut = strOut + "^" + tmp;
        } else {
            if (strTemp < 48 || (strTemp > 57 && strTemp < 65) || (strTemp > 90 && strTemp < 97) || strTemp > 122) {
                tmp = strTemp.toString(16);
                for (var j = tmp.length; j < 2; j++) tmp = "0" + tmp;
                strOut = strOut + "~" + tmp;
            } else {
                strOut = strOut + strIn.charAt(i);
            }
        }
    }
    return (strOut);
}
function decode(strIn) {
    var intLen = strIn.length;
    var strOut = "";
    var strTemp;
    for (var i = 0; i < intLen; i++) {
        strTemp = strIn.charAt(i);
        switch (strTemp) {
            case "~":{
                strTemp = strIn.substring(i + 1, i + 3);
                strTemp = parseInt(strTemp, 16);
                strTemp = String.fromCharCode(strTemp);
                strOut = strOut + strTemp;
                i += 2;
                break;
            }
            case "^":{
                strTemp = strIn.substring(i + 1, i + 5);
                strTemp = parseInt(strTemp, 16);
                strTemp = String.fromCharCode(strTemp);
                strOut = strOut + strTemp;
                i += 4;
                break;
            }
            default:{
                strOut = strOut + strTemp;
                break;
            }
        }
    }
    return (strOut);
}