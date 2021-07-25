module.exports.edgeEncode = function(str) {
    let returnArr = [];

    for (let i = 0; i < str.length; i++) {

        let charCode = str.charCodeAt(i);
        let v = parseInt(charCode.toString(8));

        if (v == 0) {
            returnArr.push("\u16D7");
            continue;

        } else {
            while(v > 0) {
                if(v >= 200) {

                    returnArr.push("\u16D4");
                    v = v - 200;

                } else if(v >= 50) {

                    returnArr.push("\u16E4");
                    v = v - 50;

                } else if(v >= 10) {

                    returnArr.push("\u16B8");
                    v = v - 10;

                } else if(v >= 5) {

                    returnArr.push("\u16BB");
                    v = v - 5;

                } else if(v >= 1) {

                    returnArr.push("\u16A4");
                    v = v - 1;

                }
            }
        }

        returnArr.push("\u26B8");

    }

    return returnArr.join("");
    
}