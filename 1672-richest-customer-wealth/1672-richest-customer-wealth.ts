function maximumWealth(accounts: number[][]): number {
    let highestSum = 0
    for(let i = 0; i < accounts.length; i++) {
        let curSum = 0
        for(let j = 0; j < accounts[i].length; j++) {
            curSum += accounts[i][j]
        }
        highestSum = Math.max(highestSum, curSum)
    }
    return highestSum
};