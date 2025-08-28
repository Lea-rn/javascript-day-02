////// equality operators (== loose) ; (=== strict) :

//  let age = "18" ;

//  if (age == 18) {   ///// value == value !!!
//     console.log("loose equality operator ..... ")
//  }

//   if (age === 18) {   ////// value === value and data type === data type ...
//     console.log("strict equality operator ..... ")
//  }

// const favorite =  Number( prompt(" what's your favorite number !!! ") )

// // console.log(typeof favorite)  //// string
// console.log( "the type of data after conversion : " ,  typeof favorite)

// if (favorite === 13 ){
//     console.log("13 is great number !!! ")
// }
// else {
//     console.log("wrong number")
// }

///// 5 falsy values : 0 ; "" ; undefined ; null ; NaN (not a number) ::

// let x = NaN ;

// if (x){
//     console.log("condition is true ")
// }

/////// basic boolean logic operators :::

//// AND  : ===> && ; OR ===> || ; NOT ==> !

// const hasDrivingLicense = true ;
// const hasGoodVision = true ;
// const isNotTired = true ;

// if (hasDrivingLicense && hasGoodVision && isNotTired) {
//     console.log("sarah able to drive 🎉")
// }

// else if (!hasDrivingLicense || !hasGoodVision) {
//     console.log("sarah can drive with some conditions 🚗 ")
// }
// else {
//     console.log("sarah can not drive 😔")
// }

////
// let day = "thursday";

// if (day === "monday") {
//   console.log("plan course structure");
//   console.log("go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("prepare nice exercices ..");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("write and test code");
// } else if (day === "friday" || day === "saturday" || day === "sunday") {
//   console.log("enjoy the weekend");
// } else {
//   console.log("not a valid day !!!! ");
// }

///// with switch , case :::
// let day = "wednesdayy";

// switch (day) {
//   case "monday":
//     console.log("plan course structure");
//     console.log("go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("prepare nice exercices ..");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write and test code");

//     break;

//   case "friday":
//   case "saturday":
//   case "sunday":
//     console.log("enjoy the weekend");
//     break;
//   default:
//     console.log("not a valid day !!!! ");
// }

////// the conditional using ternary (3 parts) operators (es6) ==>  

    ////// normal if statement : 

    // const age = 18 ; 
    // if (age >=18){
    //     console.log("sarah able to drive ")
    // } else {
    //     console.log("sarah can not drive !!! ")
    // }


    ///// syntaxe : condition ? true : false

 

// const message = age >= 18  ? "sarah able to drive " : "sarah can not drive !!! "
// console.log(message)


    const age = 15 ; 

    console.log(`i'm ${age} years old so ${age >= 18 ? "i can drive" : "i still a kid " }`  )

