// ⚸ - \u26B8 - Seperation Character
// ᛔ - \u16D4 - 200
// ᛤ - \u16E4 - 50
// ᚸ - \u16B8 - 10
// ᚻ - \u16BB - 5
// ᚤ - \u16A4 - 1
// ᛗ - \u16D7 - 0

module.exports.edgeDecode = function(str) {
    var charArr = str.split("\u26B8");
    var returnArr = [];
    charArr.pop();

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

        returnArr.push(String.fromCharCode(charCode));

    });

    return returnArr.join("");
}
