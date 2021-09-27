# The Passenger Counter App
We're going to be building an app that an employee would use to count the number of passengers that are taking the train. The employee will click the increment button each time a passenger boards the train.  Then once that train leaves, save those entries and start counting the next batch.

![](https://raw.githubusercontent.com/hoc-labs/images/main/js-passenger-counter-img11.png)

It's going to be our first introduction to using JavaScript. We will use JavaScript to change the content on the live page based on input from the user.

Take a look at index.html. It's pretty basic stuff you've already seen before. Just two elements. Notice the `<h2>` element. It has an id attribute on it, with a value of `count-el` (meant to indicate this is an element that displays the passenger count). It currently displays the value 0 as its content.

```html
    <h1>People entered:</h1>
    <h2 id="count-el">0</h2>
```

Preview the page to see the starting output.

![](https://raw.githubusercontent.com/hoc-labs/images/main/js-passenger-counter-img1.png)

### Adding JavaScript to our Page

* Add the following just below the `<h2>` element and then preview the page.

```html
    <script>
        document.getElementById("count-el").innerText = 5;
    </script>
```

![](https://raw.githubusercontent.com/hoc-labs/images/main/js-passenger-counter-img2.png)

With that change, the content within the `<h2>` element changed from 0 to 5.

### Modifying the Live HTML Document

If you take a look at the element in the Dev Tools inspector, you will see that the element in the Elements tab is in fact now a 5 instead of the original 0 when the HTML document was loaded from the HTML document.

What is displayed in the Dev Tools is the "live" representation of the HTML document that the web browser maintains. Through JavaScript, we are able to modify that live document.

At this point, you aren't expected to understand the JavaScript code in the `<script>` element. Just know that the code is able to modify the "live" representation of the HTML document.

In the `<script>` code above, we asked the web browser for the `document`, which is just the entire live HTML document that the web browser has created. Then we ask for a specific `element` within the document with `document.getElementById("count-el")`. We now have access to the web browser's representation of that element and we can change things about that element, such as its content, using `document.getElementById("count-el").innerHTML = 5`.

### Adding JavaScript Code in an External File

The way we added the JavaScript above is not the best way to do it. Best practice is to keep the JavaScript code in a separate file.

* Create a new file called `script.js` in the root director.
* Cut the code from within the `<script>` tag into and paste it into the new script.js file.
* Change the `<script>` tag as follows:

```html
    <script src="script.js"></script>
```
It works like the `<link>` element, in that it will pull in the file specified as the value of the `src` attribute.

* Preview the page again and you should see that it still works. The two ways are equivalent. It's just that it is much better to maintain your code separately from your HTML markup, just like we maintain the CSS code in separate files.

### Comments in JavaScript Code

To comment out code you have two choices
* // at the beginning of the line
* /*  */ surrounding code to comment out.

Any code that is commented out will be ignored by the JavaScript engine.

* Comment out the line of code that currently exists in the file. We're going to start out with something a bit easier.
* Preview the page and you will see that the code is no longer modifying the page content.

### Variables

The first step in building our app is we need to keep track of how many passengers there are. To do this we need to store that information somewhere. For this, we use variables and in JavaScript you create a variable as follows:

We use the keyword `let` to tell JavaScript we want to create a variable with the name `count` and assign it an initial value of 0. Think of a variable as a box with a label on it and the box holds a value. This box has the label `count` and currently hold the value 0 in it.

```javascript
let count = 0;
```

The `=` sign may be a little confusing here because normally the `=` sign means equals, but in JavaScript it means `assign`, or put the value on the right-hand side in the variable on the left-hand side of the `=` sign.

### Console.log

We are going to use a tool that developers use all the time. It is the console log.  It is mainly there for debugging purposes. For checking our code. What you send to the console log doesn't show up in the browser window.

You can write pretty much anything to the console log. 

* Change your script to look like the following and view the console output.

```javascript
let count = 0;

console.log(count);
```

* To view the console log you need to go into the browser Dev Tools and select the Console tab.
  

![](https://raw.githubusercontent.com/hoc-labs/images/main/js-passenger-counter-img3.png)

   There should now be a zero in the output.

### JavaScript Engine

The web browser does not evaluate the JavaScript code. It delegates that task to what is called a JavaScript Engine. The JavaScript engine reads the script code line by line. There are multiple vendors that have written JavaScript Engines, just like there are multiple browser vendors. The JavaScript Engine within the Chrome browser is written by Google, and is called V8.

The Console within the Chrome Developer Tools is an interface to the V8 JavaScript Engine.

You can enter JavaScript code directly there and it will be evaluated.

* type 3 + 4;

The console should return the value 7.

![](https://raw.githubusercontent.com/hoc-labs/images/main/js-passenger-counter-img4.png)

For now we're going to just use the console.log() method to output information to the log.

### Practice with Variables - myAge

- Create a variable, myAge, and set its value to your age

- Log the myAge variable to the console


See answer at the end of this document.

### Undefined Variables

Move the line that logs the myAge variable to come before the line that creates the variable and view the console log.

The JavaScript code is read from top to bottom, line by line. You should see an error message in the console stating that the variable `myAge` cannot be referenced before initialization.

**Variables defined using the let keyword must be created before they are referenced.**

### Arithmetic 

Return back to your orignal code:

```javascript
let count = 5;
console.log(count);
```

JavaScript supports arithmetic expressions on the right-hand side of an assignment statement. 

Any arithmetic expression can be placed there. The value of the expression will first be calculated, and then the result will be assigned to the variable on the left-hand side of the assignment operator.

* Experiment with changing the 5 on the right-hand side of the assignment operator to an arithmetic expression, such as 2 + 3, or 5 * 10. 

In real-world scenarios, you won't see hard-coded numbers in the expression on the right-hand side of an assignment. You would see variables, that hold the values of numbers that were calculated earlier in your code.

For example, we could create a variable named `firstBatch` to represent the first batch of passengers that enter the train. And then assign the value stored in the variable firstBatch to the variable count.

Again, think of variables as boxes containing values. The assignment statement below is saying, 

"take the value stored in the box with the label `firstBatch` and copy that value and put it in the box labeled `count`"

```javascript
let firstBatch = 5;
let count = firstBatch;
console.log(count);
```

Perhaps we have two batches,

```javascript
let firstBatch = 5;
let secondBatch = 7;
let count = firstBatch + secondBatch;
console.log(count);
```

### Variable Naming Conventions
There are some rules about naming variables that cannot be broken and then there are some conventions, or standards/styles that developers adhere to because they find them useful.

An example of a naming convention that is stylistic, but very popular, is called camelCase. It specifies how each word in a multi-word variable name looks. 
* always start with a lower-case letter
* each new word starts with an upper-case letter.

Following this style, makes the variable name look like camel humps, hence the name camel case.

Another style that is less popular, is to use underscores between words.

The overridding goal is to create variable names that clearly represent the data they are holding.

### Practice with Variables - myDogAge

Before you start this, comment out the previous lines of code by selecting all of the code and using the Ctrl-K-C command sequence. (Ctrl-K-U removes a comment).

- Create two variables, myAge and humanDogRatio
- Assign the variable humanDogRatio the value 7.
- Multiply the two together and store the result in myDogAge 
- Log myDogAge to the console

### Re-assigning, or changing the value in a variable

So far we have just initialized the value stored in a variable. But we can change, or update, the value stored in a variable with another assignment statement.

**Note:** a statement is a single instruction, or single line of code.

* replace your current code with the following:

```javascript
let count = 5;

count = 3;

count = count + 1;

console.log(count);
```

The JavaScript Engine starts at the top and processes the code line by line. What is the value of count when it is sent to the console log? Let's walk through the code.

1. **let count = 5;** 
   1. When the variable is first created, it is assigned an initial value of 5. 

2. **count = 3;** 
   1. Next, the variable is assigned a new value of 3.

3. **count = count + 1;**
   1. Finally, the variable is assigned a new value of the current value of count + 1.  
   2. Remember, that whatever is on the right-hand side of the assignment operator (= sign), will be calculated first, and the result will be assigned to the variable on the left-hand side. So, the value of count is 3 and that is added to 1, to get a total of 4, and that value is assigned to the variable count.

### Practice with Variables - bonusPoints
For the following operations that increase and decrease, use the technique above where you use the current value of the variable to calculate the next value.

* Create a variable, bonusPoints. 
* Initialize it to 50. 
* Increase it to 100.
* Decrease it down to 25.
* Increase it to 70.
* log the value to the console.
  
### Creating a Button to start our JavaScript code

* add a `<button>` element to the html code
* add an id="increment-btn" to the element.

Here's what the html code, and the resulting page, should look like. Because we are focusing on JavaScript, the CSS to style the button already exists.

```html
<body>
    <h1>People entered:</h1>
    <h2 id="count-el">0</h2>
    <!-- Create a INCREMENT button with the id="increment-btn" -->
    <button id="increment-btn">INCREMENT</button>
    <script src="index.js"></script>
</body>
```

```css
button {
    border: none;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    font-weight: bold;
    width: 200px;
    margin-bottom: 5px;
    border-radius: 5px;
}

#increment-btn {
    background: darkred;
}

#save-btn {
    background: darkgreen;
}
```

![](https://raw.githubusercontent.com/hoc-labs/images/main/js-passenger-counter-img5.png)

Right now, nothing happens if you click the button. How do we make it interactive?

### onClick Event Listener

Before we start this exercise, lets define the steps, or pseudo-code, that needs to take place to have the button click increase the value of the count variable and update the page to reflect the new value of the count variable.

```javascript
// 1. create a variable, named count, to store the current count.
// 2. intialize the variable count to 0
// 3. listen for clicks on the increment button
// 4. increment the count variable when the button is clicked
// 5. change the content of the count-el element in the HTML to reflect the new value stored in the count variable.
```

We already know how to do #1-2. 

To do step #3, listen for clicks on the increment button, we add another attribute to the  `<button>` element, called `onclick`, and assign it a value in double-quotes, just like we did for the `id` attribute.


```html
    <button id="increment-btn" onclick="">INCREMENT</button>
```

nside the double-quotes, you write the function that you want to be triggered when the button is clicked. So we're going to call, or invoke, the function named increment.

We have not yet created the function named increment in our JavaScript code. We will do that in a minute. But first, look at the opening and closing parenthesis following the function name. This is the syntax required to call, or invoke, a function. 


```html
    <button id="increment-btn" onclick="increment()">INCREMENT</button>
```

Now, let's switch back to our JavaScript code and create the increment function.  Here is what is looks like:

First, you have the `function` keyword that says you are creating a function. This is similar to the `let` keyword when you are creating a variable.

Next, you have the name of the function, followed by an opening and closing parentheses.

Finally, you have an opening and closing curly brace to surround the code that you write that will be run when the function is called. This is the body of the function.

```javascript
function increment() {

}
```

Let's start out with something really simple, just to see that it works.

* Modify the code to contain the following:

```javascript
function increment() {
    console.log("The button was clicked");
}
```

* View the console log. It should contain the following output:
* Clicking the button multiple times will increase the number next to the output in the console log, indicating that the same output was repeated.
  
![](https://raw.githubusercontent.com/hoc-labs/images/main/js-passenger-counter-img6.png)

The web browser is listening for events, such as mouse clicks,  and when the click event on that element occurs, it switches control over to the JavaScript Engine to execute the function specified to be triggered when that event occurs.

### Practice with Functions - race game

This is a very simple game. We just setup the game by counting down from 5 to one and with our current knowledge of how to write code, we would need to copy the code again if we want to run another round of the game.

```javascript
console.log(5);
console.log(4);
console.log(3);
console.log(2);
console.log(1);
console.log("Go!");

// next game

console.log(5);
console.log(4);
console.log(3);
console.log(2);
console.log(1);
console.log("Go!");
```

Anytime we see this kind of repetition in our code, we want to refactor it into a function. A function is a re-usable chunk of code that can be set aside and called from anywhere in your code any number of times.

Here's what a function would look like. We've named it `countdown` to indicate what it does, and we've moved all of the instructions, or statements, into the body of the function. 

Notice that the instructions are indented, or tabbed. This isn't something JavaScript cares about, it is purely to help in the readability of the code.


```javascript
function countdown() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
    console.log("Go!");
}
```

* Now refresh the page.

Nothing happens. That's because a function does not execute until there is an instruction to call the function. We've written our function that is capable of performing a task, but we need to tell it to perform the task.

* Add a line below the function to call the countdown function.

```javascript
function countdown() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
    console.log("Go!");
}

countdown();
```

* Now modify the code to simulate the full game we had earlier, where we did a countdown, and then restarted the game with a second countdown.

```javascript
function countdown() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
    console.log("Go!");
}

countdown();
// next game
countdown();
```

### Practice with Functions - totalLapTime

Given the following variables, write a function named `totalLapTime` that calculate the sum of the three lap times and logs the result to the console.

These variables can be created outside of the function, but the function can still access them. They are called global variables. Global variables can be accessed from anywhere in your JavaScript code.

Remember to add a call to invoke your function.

```javascript
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

// write function here
```
The console log should show the value 103.

See the solution at the end of the document if you need help.

Take a look at the second solution at the end of this document. It creates a variable within the function to calculate the total, and then passes that value to the console log.

Notice, after the call to the function there is a call to log the value of that variable again, but after the function has been invoked. The comment says that this will cause an error because the variable is undefined. 

This is because variabled created within a function are only available within the code that is in the function. This is different than global variables, that are available always in your code.

### Practice Writing Functions - incrementLapCompleted

* Write a function named `incrementLapCompleted` that increments the value of the global variable lapsCompleted by one every time the function is called. 
* Call the function three times.

If you don't remember how to increment a variable, look back to the earlier exercise where you incremented the value of the count variable by one.

```javascript

let lapsCompleted = 0;

// write your function here

console.log(lapsCompleted);
```

The output in the console should be 3. See the solution at the end of the document if you need help.

### Incrementing the count
Now we're going to write the body of the increment function that we started a while ago. It currently just logs a message to the console to let us know the button was clicked.

We want to return to our list of steps we need to take in the body of the increment function.

```javascript
// 1. create a variable, named count, to store the current count.
// 2. intialize the variable count to 0
// 3. listen for clicks on the increment button
// 4. increment the count variable when the button is clicked
// 5. change the content of the count-el element in the HTML to reflect the new value stored in the count variable.
```

We've already done steps 1-3.

```javascript
let count = 0;
function increment() {
  console.log("The button was clicked");
}
```

* Next, change the body of the increment function to increment the value of the count variable by one and log the new value of the count variable to the console instead of the current message.

The console output should look like the following: writing out the current value of the count variable each time the button is clicked.

![](https://raw.githubusercontent.com/hoc-labs/images/main/js-passenger-counter-img7.png)

### Displaying the current count on the page

Finally, we want to update the content of the `<h2>` element on the page that is displaying the current count.

You are going to use the following instruction, and place that in your function after the count variable has been updated.

This instruction will get the element with the `id="count-el"` and update its innerText, which is the same as the text content that is between its opening and closing tags, `<h2>0</h2>`, with the value of the count variable, `<h2>new count</h2>`, where new count is the value of the count variable.

Let's break it down into two steps:

```javascript
// step1: get the element from the HTML document
let element = document.getElementById("count-el");
console.log(element);
// step2: update the text content of the element with the value of the count variable.
element.innerText = count;
```

Now view the page and click the increment button several times.
You will see in the console log what looks like an HTML element. This is how the console displays the element. It's a string representation of the `<h2>` element. And as you can see, on each call to the increment function, the text content within the `<h2>` element is incremented by 1.

You can also see on the page, that the `<h2>` element is also displaying the updated value of the count.

![](https://raw.githubusercontent.com/hoc-labs/images/main/js-passenger-counter-img8.png)

We now have completed our first example of using JavaScript to respond to a user event and update the content displayed on the page.

### Functions vs Methods

If you look at the code below, the instruction `document.getElementById("count-el")` and `console.log(element)` and the function `increment` are all function. It's just that the functions that have a dot before them are functions that are part of an object. In this case they are called methods instead of functions. For now, just think of them as functions. They act in the same way, in that you are calling, or invoking the function. 

In the case of document.getElementById(), and console.log(), these functions take additional data to help them complete their tasks. For example, the getElementById function needs to take the id of the element to return and the console.log function needs the data the it needs to display on the log. The function data are like ingredients that the function needs to complete its recipe.

We'll learn more about passing data to functions soon.

```javascript
let count = 0;
function increment() {
  count = count + 1;

  let element = document.getElementById("count-el");
  console.log(element);
  element.innerText = count;
}
```

### The DOM
The document object in the statement `document.getElementById("count-el")`, is part of the Document Object Model, or DOM. You'll hear this word a lot. The DOM is just a live representation, or model, of the HTML document that is currently being displayed. Programmers can use the DOM to manipulate the live HTML document and therefore update the page that is being displayed in the browser.

### Practice - updating the DOM

* try erasing the body of your function and re-writing it from scratch without looking at the solution provided previously.

### Practice Writing Functions - save

For this exercise, you will keep the increment function as it is. It will increment the value of the count function, and display the current value on the page.

* Create a new function, save(), which logs out the count when it's called.
* Create a save button in the HTML, that work in a similar way to the increment button, but has its own unique id and calls the save function on the onclick event.

The user can now click the increment button multiple times, and then click the save button, and the current value of the count variable will be output to the console log.

Here's what the console log output should look like:

![](https://raw.githubusercontent.com/hoc-labs/images/main/js-passenger-counter-img9.png)


### Strings

Strings are just text and are used all over the place.  For example, you'd likely have a username in your application.

Below is a variable that is holding a string value.


```javascript
let username = "Anne";
console.log(username);
```

Notice that I am using double-quotes to surround the string value. In JavaScript, double-quotes, as well as single-quotes, are legal ways to surround your string value. 

The only issue is that if you want one of those characters embedded within your string you should use the other to surround the string value.

In the string variable message, the string contains a single-quote, and so the entire string needs to be surrounded by double-quotes.

```javascript
let message = "the student's name is Anne";
```

Alternatively, you can escape the embedded quote.

```javascript
let message = 'the student\'s name is Anne';
```

### Combining Strings
You can combine string (concatenate) using the + operator. So, combining 

```javascript
console.log("Hello" + " " + "Anne")
```
will output "Hello Anne".

### Practice combining string

* Create a variable named name. Assign it a name, such as "Anne".
* Create a variable named message.
* Assign the variable message the value of a combined string that has the format, "Hello Anne. Nice to meet you.", where the name Anne is the value of the name variable.

### Strings vs Numbers

When you add a number to a string, the string always wins. That is because when JavaScript sees two items being added together, and one of them is a string, it will attempt to convert the other item to a string.

What do you think the following code will output?

```javascript
let points = 4;
let bonusPoints = "10";

let totalPoints = points + bonusPoints;

console.log(totalPoints);
```

It will output "410" because the 4 will be converted to a string and the two strings will be combined.

Take a look at each of the following an think about what each will return.

```javascript
console.log(4 + 5);
console.log("2" + "4");
console.log("5" + 1);
console.log(100 + "100");
```

The answers are 9, "24", "51", and "100100".

The string always win.

### Practice with Strings - welcome message

Your going to add a welcome message to the page. It's going to say "Welcome back Anne".

* Create a `<p>` element at the top of the page and add the attribute: `id="welcome-el"`.
* In your script, create two variables, name and message, and assign them a value as you did earlier, but have the message say: "Welcome back Anne", where Anne is the value of the name variable.
* Use the `document.getElementById("welcome-el")` to retrieve the `<p>` element with that id.
* Store the element returned in a variable named welcomeEl.
* Update the value displayed in the `<p>` element by setting the innerText to the value of the message.
  
The page should look like the following:

![](https://raw.githubusercontent.com/hoc-labs/images/main/js-passenger-counter-img10.png)

### Incrementing Variables Short-cut

Our current code for incrementing the count variable looks like the following:

```javascript
let count = 0;
count = count + 1;
```
JavaScript has short-cut for incrementing a variable.
The += operator says 
"add the value on the right-hand side of the assignment operator to the variable on the left-hand side of the operator.

```javascript
let count = 0;
count+=1;
```

You can have any value on the right-hand side. The following adds two to the count variable.
```javascript
let count = 0;
count+=2;
```

### Concatenating Strings short-cut

Our current code for combining strings looks like the following:

```javascript
let name = "Anne";
let message = "Welcome back " + name + "!";
```

JavaScript has a way to format a string in what's called a "template literal". It prevents you from having to deal with adding all the extra spaces with the + operator.

Just like before, you create a variable to hold the message. But instead of combining all the strings together using the "+" operator, you build a string template with the back-tick characters at the beginning and end of the string template.

```javascript
let message = ``;
```

Next, you place all of the template strings that are not based on variables, in the template and then insert a  placeholder using the syntax, ${variablename}, where the variable value should be substituted.

It's like a mail-merge program. JavaScript will substitute the variables into the template string.

```javascript
let message = `Welcome back ${name}!`;
```

### Practice - use a string template in your welcome message.

Change your code for the welcome message to use a string template, instead of combining strings with the "+" operator.

### Final Challenge

* Create a new `<p id="save-el">Previous entries:</p>` on the page, following the buttons.
* Each time the save button is clicked, update the `<p id="save-el">Previous entries:</p>` element to contain a string that is a comma-separated list of the previous values of the count variable.
* Set the value of the count variable back to 0 after each save.

Note, you will need to use the += operator to update the value of the innerText of the save-el `<p>` so that the old value is preserved. Try to use a string template to build the new string for the save previous entries text.

The output should look like the following:

![](https://raw.githubusercontent.com/hoc-labs/images/main/js-passenger-counter-img11.png)

#### Extra Challenge
You can see there is a bug in our output. There is a trailing comma at the end of the string. This is because we are currently always adding a comma because we don't have a way to test whether it should be added or not.

If you already know how to do if statements, you can use one to determine whether it's the first time the save function has been called and only add a comma before the new count value only if it's not the first time called.















### Solutions

#### myAge

- Create a variable, myAge, and set its value to your age
- Log the myAge variable to the console

```javascript
let myAge = 35
console.log(myAge)
```

### myDogAge

```javascript
let myAge = 58;
let humanDogRatio = 7;
let myDogAge = myAge * humanDogRatio;
console.log(myDogAge);
```

### bonusPoints

```javascript
let bonusPoints = 50;
bonusPoints = bonusPoints + 50;
bonusPoints = bonusPoints - 75;
bonusPoints = bonusPoints + 45;
console.log(bonusPoints);
```

### totalLapTime

```javascript
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function totalLapTime() {
  console.log(lap1+lap2+lap3);
}

totalLapTime();
```

or

```javascript
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function totalLapTime() {
    let total = lap1+lap2+lap3;
    console.log(total);
}

console.log(total); // undefined variable

totalLapTime();
```

### incrementLapsCompleted

```javascript
let lapsCompleted = 0;

function incrementLapsCompleted() {
  lapsCompleted = lapsCompleted + 1;
}

incrementLapsCompleted();
incrementLapsCompleted();
incrementLapsCompleted();
```

### increment
```javascript
let count = 0;
function increment() {
  count = count + 1;
  console.log(count);
}
```

### save
```javascript

let count = 0;
function increment() {
  count = count + 1;

  let element = document.getElementById("count-el");
  console.log(element);
  element.innerText = count;
}


function save() {
  console.log(count);
}
```

```html
<button id="increment-btn" onclick="increment()">INCREMENT</button>
<button id="save-btn" onclick="save()">SAVE</button>
```

### combining strings
```javascript
let name = "Anne";
let message = "Hello " + name + ". Nice to meet you.";
console.log(message);
```

### final challenge
```html
<body>
    <h1>People entered:</h1>
    <p id="welcome-el"></p>
    <h2 id="count-el">0</h2>
    <button id="increment-btn" onclick="increment()">INCREMENT</button>
    <button id="save-btn" onclick="save()">SAVE</button>
    <p id="save-el">Previous entries:</p>
    <script src="script.js"></script>
</body>
```

```javascript

let count = 0;

function increment() {
  count = count + 1;

  let element = document.getElementById("count-el");
  console.log(element);
  element.innerText = count;
}

function save() {
  console.log(count);
  let element = document.getElementById("save-el");
  element.innerText+=`${count}, `;
  count = 0;
}

let name = "Anne";
let message = "Welcome back " + name + "!";
let welcomeElement = document.getElementById("welcome-el");
welcomeElement.innerText = message;
```