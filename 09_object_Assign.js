const professor = {
    
}
     professor.name="Alexandar Stan",
     professor.age=50,
     professor.gender="male",
     professor.workingIn ="Oxford university london",
    

console.log(`Accessing an Nested object property`);
console.log("...#1");
console.log(Object.keys(professor));
console.log(professor);


console.log("");
console.log("...#2");
console.log(`----------- Accessing an Nested Degrees property -----------`);
professor.degrees={
Engineering:"CSE",
PHD:"Adv Computing",
Master:"Programming", 
 
}
console.log(this);
console.log(Object.keys(professor));
console.log(professor.degrees);


console.log("");
console.log("...#3");
console.log(`------------- Accessing an Nested Certification property ----------------`);
professor.Certificates={
    1:"Hacker Rank PArticipations",
    2:"IFE Course",
    3:"Adv Programming",
}
console.log(Object.keys(professor));
console.log(professor.Certificates);

console.log("");
console.log("...#4");
console.log(`------------- Add and Concat Degrees of Professor ----------------`);
 console.log(professor.degrees);
 console.log("The Total Degrees of professor are Engineering,PHD & Masters");
 
 console.log("");
console.log("...#5");
console.log(`------------- Add Total experience of professor----------------`);
professor.totalExperience = "totalExperience:-14 years";
console.log(professor.totalExperience);
// cnsoole.log(professor);

 
// console.log("");
// console.log("...#5");
// console.log(`------------- Adding new properties into object----------------`);
// professor.phoneNumber=  7798802504;
// console.log(Object.keys(professor));
// console.log(professor);
console.log("");
console.log("...#6");
console.log(`------------- Modifying Age property of object----------------`);
professor.age=60;
console.log(professor);
// console.log("");
// console.log("...#7");
// console.log(`------------- Deleting one Certificate from object----------------`);
// delete professor.Certificates[1];
// console.log(professor.Certificates);
console.log("");
console.log("...#7");
console.log(`------------- Adding one Certificate from object----------------`);
professor.Certificates={
    1:"Developer of the year",
    2:"IFE Course",
    3:"Adv Programming",
    4:"Oracle certificate"
}
console.log(professor.Certificates);
console.log("");
console.log("...#8");
console.log(`------------- Adding one Certificate from object----------------`);
console.log(professor.Certificates[4]);