const swapNumber = () => {
    //initial numbers
    let num1 = 12;
    let num2 = 11;

    //swaping numbers
    [num1, num2] = [num2, num1];

    //out put
    console.log(num1, num2);
}

// swapNumber()

const addToArray = () => {
    //initail array
    let firstNumber = 0;
    let lastNumber = 4;
    let myArray = [1, 2, 3];

    //add at the end of array
    //your output [1,2,3,4] 
    // let myArray2 = [...myArray, lastNumber];

    //add at the first of array
    //your output [0,1,2,3] 
    let myArray2 = [firstNumber, ...myArray];

    //log to the console
    console.log(myArray2);
}

// addToArray()

const useDestructuringWithAlias = () => {
    //initial Objects
    let person1 = {
        firstname: "ali",
        lastname: "alizade"
    }

    let person2 = {
        firstname: "mamad",
        lastname: "hoseyni"
    }

    //destructure  firstname and lastname from both object

    // methode 1
    // function destructuringObject({firstname: name, lastname: lName}, {firstname: fName, lastname: Lname}) {
    //     console.log(name, lName, fName, Lname);
    // }

    // methode 2
    let {firstname:name1, lastname:lastname1} = person1;
    let {firstname: name2, lastname:lastname2} = person2;
    
    //log to the console
    // destructuringObject(person1, person2);
    console.log(name1, lastname1);
    console.log(name2, lastname2);
}
// useDestructuringWithAlias()