// let day = 7;
// switch (day) {
//   case 1:
//     console.log("today is Monday");
//     break;
//   case 2:
//     console.log(`today is tuesday`);
//     break;
//   case 3:
//     console.log(`today is Wednesday`);
//     break;
//   case 4:
//     console.log(`today is thursday`);
//     break;
//   case 5:
//     console.log(`today is Friday`);
//     break;
//   case 6:
//     console.log("today is Saturday");
//     break;
//   case 7:
//     console.log("today is Sunday");
//     break;
//   default:
//     console.log("enter wrong value");
// }

// Task 5 write a program that uses a switch case to assign a grade ('A','B','C','D','F')based on a score and log the grade to the console

let grade = 98;
if(typeof grade==='number'){


switch(true) {
  case  grade >=90:
    console.log("your grade is A");
    break;
  case grade>=80:
    console.log("your grade is B");
    break;
  case grade>=70:
    console.log("your grade is C");
    break;
  case grade>=60:
    console.log("your grade is D");
    break;
  default:
    console.log("your grade is F");
    break;
}
}
else{
    console.log(`grade is not number`)
}
