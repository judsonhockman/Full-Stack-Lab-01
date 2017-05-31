console.log("Name:" + "Judson Hockman".toUpperCase());
console.log("Career: Field Service Representative");
console.log("Description: I am a passionate follower of Christ who works well in fellowship with others. I can also be trusted to work with limited supervision.");
console.log("Interests:");
console.log("*Fishing");
console.log("*Fishing");
console.log("*Did I mention I like to fish?");
console.log();

console.log("My Previous Experience:");

function displayPosition(jobTitle, companyName, description) {
  console.log("* " + jobTitle + "at " + companyName + "- " + description);
   
} 
displayPosition("Stryker Mechanic", "Generral Dynamics", "Repaired combat-damaged vehicles");

displayPosition("Astronaut", "NASA", "Tested flight suits");

displayPosition("Disc Jockey", "U.S. Talent", "Played dance music in night clubs");

console.log();

console.log("My Skills");

function displaySkill(skillName, isCool) {
    if (isCool === true) {
        console.log("* " + "BAM: " + skillName);
        } else {
            console.log("* " + skillName);
        }
}
displaySkill("I can twist to anything", true);
displaySkill("Change a cross-over tube on a Cat C-7 blindfolded", false)
displaySkill("Taught myself ho to throw a ball right handed", true)

    console.log("My skills:");
    console.log("BAM: I can twist to anything");
    console.log("Change a cross-over tube on a Cat C-7 blindfolded");
    console.log("BAM: Taught myself how to throw right-handed");

var cool = "Bam";
function displaySkill(name, cool) {
if (cool) {
console.log("BAM:");
} else {
}
}

displaySkill();



// console.log(job title + company name + Description)}
// use if else to put BAM true or false in front of a skill


// function announceWeather(temp, status) {
//     console.log('The temperature is:');
//     console.log(temp);
//     console.log('The sky is:');
//     console.log(status);
// }
// console.log('Hello World!');
// announceWeather('at', '-');
// announceWeather(8, 'snowy');
// // Write your function below. 
// Don't forget to call your function!
// var sleepCheck = function (numhours) {
//  if (numhours >= 8) 
//   { return "You're getting plenty of sleep! Maybe even too much!";}
// else 
//   { return "Get some more shut eye!";}
// };
// sleepCheck(10);


// var people = [
//     {
//         name: 'John Doe',
//         age: 27
//     },
//     {
//         name: 'Jane Doe',
//         age: 26
//     }
// ]
// console.log(people)

// var person = {
//     name: 'John Doe',
//     age: 27,
//     isInstructor: true
// };
// for (var p in person) {
//     console.log(p);
//     console.log(person[p]);
// }

