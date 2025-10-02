console.clear()

function highestRunScorer(playersInfo) {
    let maxScorer = playersInfo[0][0];
    let maxScore = playersInfo[0][1];

    for (let i = 1; i < playersInfo.length; i++) {
        if (maxScore < playersInfo[i][1]) {
            maxScore = playersInfo[i][1]
            maxScorer = playersInfo[i][0]
        }
    }
    return maxScorer;
}

let playersInfo = [
    ['Nahid', 15],
    ['Tamim', 20],
    ['Mahmudullah', 105],
    ['Musfiq', 57],
]

let maxScorer = highestRunScorer(playersInfo)
console.log(maxScorer);