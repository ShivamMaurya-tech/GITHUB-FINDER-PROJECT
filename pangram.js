let str = "abcdefghijklmnopqrstuvwxyz";

function checkPangram(str) {
    str = str.toLowerCase();

    for (let i = 97; i <= 122; i++) {
        if (str.indexOf(String.fromCharCode(i)) === -1) {
            return "not pangrams";
        }
    }

    return "pangram";
}

console.log(checkPangram(str));