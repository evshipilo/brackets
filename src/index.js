module.exports = function check(str, bracketsConfig) {
    //если находим () то вырезаем, проверяем длину массива и начинаем сначала
    // повторяем пока находим, если не находим то false
    let strArr = str.split("");
    let i;  //i глобальная чтобы сработало i=-1
    for (i=0; i < strArr.length - 1; i++) {
        for (let j=0; j < bracketsConfig.length; j++) {
            if (strArr[i] == bracketsConfig[j][0] && strArr[i + 1] == bracketsConfig[j][1]) {
                strArr.splice(i, 2);
                if (strArr.length == 0) return true;
                if (strArr.length == 1) return false;
                i = -1; //global
            }
        }
    }
    return false;
}
