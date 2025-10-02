console.clear();

function highestScore(scores) {
    let max = scores[0];
    for (let i = 1; i < scores.length; i++) {
        if (max < scores[i]) {
            max = scores[i];
        }
    }
    return max;

}

let scores = [21, 45, 34, 55, 15]
let maxScore = highestScore(scores);
console.log(maxScore);