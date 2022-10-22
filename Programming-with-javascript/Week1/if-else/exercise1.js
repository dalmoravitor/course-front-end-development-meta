var age = 10;

if(age >= 65) {
    console.log("You get your income from your pension");
}
else if(age < 65 && age >= 18) {
    console.log("Each month you get a salary");
}
else if(age < 18) {
    console.log("You get an allowance");
}
else {
    console.log("The value of the age variable is not numerical");
}

var day = "Sunday";

switch(day) {
    case "Monday":
        console.log('Gym 1');
        break;
    case "Tuesday":
        console.log('Programming');
        break;
    case "Wednesday":
        console.log('Gym 2');
        break;
    case "Thursday":
        console.log('Programming');
        break;
    case "Friday":
        console.log('Gym 3');
        break;
    case "Saturday":
        console.log('Hang out with my girl :)');
    case "Sunday":
        console.log('Cry');
        break;
    default:
        console.log("There is no such day");
}