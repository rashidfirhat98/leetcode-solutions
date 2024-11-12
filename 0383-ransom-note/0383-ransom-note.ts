function canConstruct(ransomNote: string, magazine: string): boolean {
    let temp : string = ransomNote
    
    for(let i = 0; i < ransomNote.length; i++) {
        let letter = ransomNote.charAt(i)
        if(magazine.indexOf(letter) !== -1) {
            magazine = magazine.replace(letter, '')
            temp = temp.replace(letter, '')
        }
    }
    return temp === "" ? true : false
};