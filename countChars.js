function countChars(str) {
    let count = 0;
    let Bcount = 0;
    while (count < str.length) {
        if (str[count] == "B") {
            Bcount++;
        }
        count++;
    }
    return Bcount
}
console.log(countChars("Billy Bob Thornton likes to play Ball."));

