function lengthOfLongestSubstring(s: string): number {
    let newString: string = "" 

    if (s.length <= 2 && (s[1] !== s[0])) { return s.length }

    for (let i = 0 ; i < s.length ; i++) {
        for (let j = i+1 ; j < s.length ; j++) {
            if (s[i] === s[j]) {
                newString = s.slice(i, j)
                if (i < 1 && s[0] !== s[1]) { return newString.length }
            }
        }
    }

    return newString.length
};