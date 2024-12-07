function lengthOfLongestSubstring(s: string): string[] {
    //let stringArr: string[] = s.split("")
    let newS: string[] = s.split("")
    let prevChar: string = newS[1]
    for (let i = 0 ; i < newS.length ; i++) {
        for (let j = i+1 ; j < newS.length ; j++) {
            if (newS[i] === prevChar) {
                newS.splice(i - 1, 1)
                i--
            }else if (newS[i] === newS[j]) {
                newS.splice(i,j)
            }
            prevChar = newS[i]
        }
    }

    return newS
};

console.log(lengthOfLongestSubstring('pwwkew'))