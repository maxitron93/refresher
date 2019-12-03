// if
if (true == true) {
    console.log('true')
}


// if else
if (true == false) {
    console.log(`this won't ever print`)
} else {
    console.log('if_else')
}


// else if
if (true == false) {
    console.log(`this won't ever print`)
} else if (true == false) {
    console.log(`this will also never print`)
} else {
    console.log('else_if')
}


// ternary operator
// condition ? do_if_true : do_if_false
true == true ? console.log(true) : console.log(false) 
true == false? console.log(true) : console.log(false)


// switch statement
// need to use break in each case block
const condition = 'painter';
switch (condition) {
    case 'teacher':
        console.log('Condition is a teacher');
        break
    case 'painter':
        console.log('Condition is a painter');
        break
    case 'writer':
        console.log('Condition is a writer');
        break
    default:
        console.log('Condition is something else');
}
