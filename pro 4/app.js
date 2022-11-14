
// Chapter 1

alert('Error! Please enter a valid password');
alert('Welcome to JS Land! \n Happy Coding!');
alert('Hello... I can run JS through my web browsers console');





//Chapter 2

var username = "Jhone";
var myname = "Doe";


alert(username +  myname)






var studentname = "Jhone Doe";
var studentage = "15 years old";
var certification = "Certified in Mobile app development";


alert(studentname);
alert(studentage);
alert(certification);


var food = "PIZZA";

alert(food);



var email = "example@example.com";

alert("My email address is" + " "  + email);

var book = "A smarter way to learn JavaScript";

alert("I  am trying to learn from the book" + " "  + book);



document.write('Yah! I can write HTML through Javascript');

alert('▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬');

//Chapter 2 End


//Chapter 3 Start


var age = 15;

alert("i am " + " " + age + " " + "years old")


var visits = 14;

alert("You have visited this site " + " " + visits + " " + "times")





var birth = 1990;

document.write("My Birth year is" + birth + " " + "Data type of my declared variable is number");



var visitorname = "John Doe";
var producttitle = "TShirt";         
var quantity = 05;

document.write(visitorname + " " + producttitle + " " + quantity + " " + "on XYZ Clothing store");



//Chapter 3 End


//Chapter 4 Start


var var3 = ["hello", "hi" ,"bye"]


Legal variable names:
myvar = "John"
my_var = "John"
_my_var = "John"
myVar = "John"
MYVAR = "John"
myvar2 = "John"

Illegal variable names:
2myvar = "John"
my-var = "John"
my var = "John"


document.write("<h1>Rules for naming JS variable");



document.write( "Variable names can only contain" + "________" + "," + "_________" + "and" + "________" + "." + "<br> For $my_1stVariable");


document.write( "<br><br><br>Variables must begin with a" + "________" + "," + "_________" + "or" + "________" + "." + "<br>  For example $name, _name or name");


document.write( "<br><br><br> Variable names are case" + "________" + ".");


document.write( "<br><br><br>  Variable names should not be JS" + "________" + ".");

//Chapter 4 End



//Chapter 5 Start

var num1 = 3;
var num2 =  5;

var sum = num1 + num2;

document.write('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);



var num1 = 3;
var num2 =  5;

var sub = num1 - num2;

document.write('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sub);



var num1 = 3;
var num2 =  5;

var mul = num1 * num2;

document.write('The Multipication of ' + num1 + ' and ' + num2 + ' is: ' + mul);



var num1 = 3;
var num2 =  5;

var divi = num1 / num2;

document.write('The Division of ' + num1 + ' and ' + num2 + ' is: ' + divi);


var ticket = 600;
var booked =  5;

var mul = ticket * booked;

document.write('Total cost to buy 5 tickets to a movie is  ' + ticket + ' and ' + booked + ' is: PKR ' + mul);



const number = parseInt(prompt("Enter a number : "));

for (let i = 1; i <= 10; i++) {
  document.write(number + "*" + i + "=" + number * i + "<br>");
}



var priceitem1 = 650;
var quantity1 =  3;
var priceitem2 = 100;
var quantity2 =  2;
var shipping = 100;

var cart1 = priceitem1 * quantity1 + priceitem2 * quantity2 + shipping;

document.write('Total cost of order is  ' + ' is: PKR ' + cart1);
