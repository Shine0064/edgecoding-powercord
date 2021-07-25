module.exports.edgeDecode = function(str) {
    
    var charArr = str.split("\u26B8");
    var returnArr = [];

    charArr.filter((e) => e.length > 0);

    charArr.forEach((e) => {

        let chars = e.split("");
        let charCode = 0;
        
        chars.forEach((e2) => {

            if(e2 == "\u16D4") charCode += 200;
            if(e2 == "\u16E4") charCode += 50;
            if(e2 == "\u16B8") charCode += 10;
            if(e2 == "\u16BB") charCode += 5;
            if(e2 == "\u16A4") charCode += 1;

        });

        returnArr.push(String.fromCharCode(parseInt(charCode, 8).toString(10)));

    });

    return returnArr.join("");
}