// 5 judges for a competition
// each judge => score
// standardise the score => low/high 

// ex: 1 3 5 7 9  | low 2 / high 8 => 2, 3, 5, 7, 8;

const scores = [1, 2, 3, 5, 1, 7, 9];

function finalScores(scores){ 

    let standardisedScores = [];

    for( let i = 0; i < scores.length; i++ ){ 
        let score = scores[i];
        if(score < 2){ 
            score = 2;

            standardisedScores.push(2)
            continue;
        }
        if(score > 8) { 
            score = 8;

            standardisedScores.push(score)
            continue;
        }
        if(score >= 2 && score <= 8) { 
            standardisedScores.push(score);
        }
    }
    return standardisedScores;
}

const test = finalScores(scores);

console.log(test)