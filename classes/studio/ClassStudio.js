//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
        this.scores.push(newScore);
    }
    average(){
        let sum = 0;
        for(let i = 0; i < this.scores.length; i++){
            sum += Number(this.scores[i]);
        }
        return (sum / this.scores.length).toFixed(1);
    }
    status(){
        let averageTestScore = this.average();
        if(averageTestScore >= 90){
            return "Accepted";
        } else if (averageTestScore >= 80){
            return "Reserve";
        } else if (averageTestScore >= 70 ){
            return "Probationary";
        } else {
            return "Rejected";
        }
    }

}

const bear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
const dog = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
const gator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
bear.addScore(83);
console.log(bear);

console.log(bear.average());

bear.addScore(0);

console.log(`${bear.name} earned an average test score of ${bear.average()}% and has a status of ${bear.status()}.`);


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let counter = 0;
while (gator.status() !== 'Accepted'){
    gator.addScore(100);
    counter += 1;
}

console.log(`${gator.name} took ${counter} attempts to be ${gator.status()}`);