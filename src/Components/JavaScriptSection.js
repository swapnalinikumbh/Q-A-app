import React, { useState } from 'react'

const JavaScriptSection = () => {
  const javaScriptQuestions = [
    {
      question: '1.	Data types in js ?',
      answer: (
        <>
          <strong>Primitive Data Types:( Pass by Value)</strong><br /><br />
          <h6>Number: </h6>Represents both integer and floating-point numbers.<br />
          <h6>String: </h6>Represents sequences of characters, like text.<br />
          <h6>Boolean: </h6>Represents a true or false value.<br />
          <h6>Undefined: </h6>Represents a variable that has been declared but hasn't been assigned a value.<br />
          <h6>Null: </h6>Represents the intentional absence of any object or value.<br />
          <h6>Symbol: </h6>Represents unique and immutable values, always used as object property keys.<br /><br />
          <strong>Non-Primitive Data Types:( Pass by Reference)</strong><br /><br />
          <h6>Object: </h6>A complex data type that can store key-value pairs, functions, and other objects.<br />
          <h6>Array: </h6>A special type of object used to store ordered collections of data.<br />
          <h6>Function: </h6>A reusable block of code that can be invoked with arguments.<br />
          <h6>Date: </h6>Represents dates and times.
        </>
      ),
    },
    {
      question: '2.	Difference between var, let and const?',
      answer: (
        <>
          In JavaScript, var, let, and const are used to declare variables, but they have important differences in terms of scope, hoisting, and mutability<br /><br />
          <strong>var:</strong><br />
          Variables declared with var are function-scoped or globally-scoped. This means they are visible throughout the function or globally, regardless of where they are declared within that function.<br />
          -var variables are hoisted to the top of their function or global scope during execution, which means we can use them before they are declared in code. <br />
          -However, they will be initialized with undefined. var variables can be reassigned and re-declared within the same scope.<br /><br />
          <strong>let:</strong><br />
          Variables declared with let are block-scoped, they are limited to the block (e.g., within { }) in which they are declared.<br />
          -let variables are also hoisted, but they are not initialized until their declaration statement is came across in the code. Accessing them before declaration results in a ReferenceError.<br />
          -let variables can be reassigned, but they cannot be re-declared within the same scope.<br /><br />
          <strong>const:</strong><br />
          Variables declared with const are also block-scoped like let.<br />
          const variables must be initialized when declared, and their values cannot be reassigned after initialization. However, for objects and arrays declared with const, the properties or elements within them can be modified. Both reassign and re-declare are not possible with const.
        </>
      ),
    },
    {
      question: '3.	What is object.freeze() and const?',
      answer: (
        <>
          <strong>Object.freeze() </strong>is a method in JavaScript that is used to prevent any modifications to an object. When we call Object.freeze(obj), it makes the object immutable, meaning we can't add, update, or remove properties from it. This is a form of shallow immutability, as the properties themselves are still mutable if they are objects.<br /><br />
          <strong>const: </strong>The const keyword is used to declare variables , meaning their reference cannot be reassigned after their initial assignment. It doesn't prevent mutability of the object itself or its properties. We can still modify the properties of an object declared with const, but we can't reassign the entire object to a new value.
        </>
      ),
    },
    {
      question: '4.	What is hoisting in js ?',
      answer: (
        <>
          Hoisting is a behavior in JavaScript where variable and function declarations are moved (or "hoisted") to the top of their containing scope during the compilation phase. We can use a variable or function before it's actually declared in code. However, there's a two types variable and function hoisting.<br /><br />
          <strong>Variable Hoisting: </strong>When we declare a variable using var, it gets hoisted to the top of its containing function or global scope. However, only the declaration is hoisted, not the initialization.<br />
          <b>console.log(x); // undefined (not an error) <br />
            var x = 5; </b><br /><br />
          <strong>Function Hoisting:</strong>-Function declarations are fully hoisted, including both the declaration and the function's code.<br />
          -Hoisting only affects the declarations, not assignments or initializations. Variables declared with let and const are also hoisted, but they aren't initialized until their actual declaration in the code. Additionally, function expressions (e.g., anonymous functions assigned to variables) are not hoisted in the same way as function declarations.<br />
          -Hoisting is to avoid unexpected behavior and bugs in code. It's recommended to declare variables and functions at the beginning of their respective scopes to make code more readable and predictable.
        </>
      ),
    },
    {
      question: '5.	Difference between null and undefined in js?',
      answer: (
        <>
          <strong>undefined:</strong><br />
          Undefined is a primitive value in JavaScript.<br />
          It typically indicates that a variable has been declared but hasn't been assigned a value. Function parameters that are not provided with a value default to undefined.<br />
          It can also be the result of attempting to access an object property or array element that does not exist.<br /><br />
          <strong>null:</strong><br />
          null is also a primitive value in JavaScript.<br />
          It is explicitly used to indicate the absence of a value or an empty value. <br />
          When we want to clear a variable or object property, we can set it to null.
        </>
      ),
    },
    {
      question: '6.	Closures in js ?',
      answer: (
        <>
          In JavaScript, a closure is a function that has access to the variables and parameters of its outer (enclosing) function, even after the outer function has finished executing. <br />
          Closures are a fundamental concept in JavaScript and are always used to create private variables, maintain state, and wrap functionality.<br />
          -They are commonly used in JavaScript for tasks like data hiding, event handling, and creating modular code structures.
        </>
      ),
    },
    {
      question: '7.	Spreads and rests operator in js?',
      answer: (
        <>
          <strong>Spread Operator (...): </strong><br />
          The spread operator allows us to spread the elements of an array or the properties of an object into another array or object. It's commonly used for creating shallow copies of arrays or objects and for combining multiple arrays or objects.<br />
          used to create a copy of an array, combine multiple arrays<br /><br />
          <strong>Rest Operator (...): </strong><br />
          The rest operator allows us to collect multiple values into an array or object.<br />
          used in object destructuring, collects all remaining arguments into an array.
        </>
      ),
    },
    {
      question: '8.	Reference error?',
      answer: 'When we try to reference a variable or function that has not been declared or is not within the current scope.Hoisting Issues, Hoisting Issues, Typo in Variable Name ',
    },
    {
      question: '9.	How to remove property of object?',
      answer: 'In JavaScript, we can remove a property from an object using the delete operator.',
    },
    {
      question: '10.	How to convert json to string and string to json?',
      answer: (
        <>
          <strong>JSON Parsing (JSON.parse()):</strong>To convert a JSON string into a JavaScript object, we can use the JSON.parse()<br /><br />
          <strong>JSON Stringification (JSON.stringify()):</strong>To convert a JavaScript object into a JSON string, we can use the JSON.stringify()
        </>
      ),
    },
    {
      question: '11.	Callback?',
      answer: (
        <>
          A callback is a function that is passed as an argument to another function and is executed after a specific event or condition occurs. Allowing to define what should happen when an operation is completed without blocking the rest of code.<br />
          -Callbacks are commonly used in asynchronous operations like fetching data from a server, handling user events, and more. They are a core building block for handling non-blocking code execution in JavaScript.<br />
          -However, as code becomes more complex, using callbacks can lead to a phenomenon known as "callback hell" or "Pyramid of Doom," where deeply nested callbacks make code hard to read and maintain. To address this, JavaScript introduced Promises and, more recently, async/await syntax, which provide cleaner and more structured ways to handle asynchronous operations.
        </>
      ),
    },
    {
      question: '12.	Promises in js?',
      answer: (
        <>
          Promises in JavaScript are a way to manage asynchronous operations and handle their results or errors. They are especially useful for handling tasks like fetching data from a server, reading files, or any operation that may take some time to complete. Promises provide a way to work with asynchronous code that avoids the callback pyramid of doom (also known as callback hell). <br /><br />
          <strong>How promises work:</strong><br />
          <strong>Creating a Promise: </strong>we can create a new promise using the Promise constructor. It takes a single argument, a function  which receives two functions as parameters: resolve and reject. Inside this function, we perform asynchronous operation and call resolve (value) when it succeeds or reject (reason) when it fails.<br /><br />
          <strong>Consuming a Promise:</strong>We can use the .then () method to specify what should happen when the promise is resolved successfully. This method takes a function as an argument, and that function will be called with the resolved value.-we can also use the .catch () method to specify what should happen when the promise is rejected. This method takes a function that will be called with the error reason.<br /><br />
          <strong>Chaining Promises:</strong>We can chain multiple .then () calls to create a sequence of asynchronous operations. Each .then () returns a new promise, allowing to handle the result of the previous operation and perform additional asynchronous tasks
        </>
      ),
    },
    {
      question: '13. Async/Await?',
      answer: (
        <>
          Async/await is a more modern and syntactically cleaner way to handle asynchronous operations. Async functions are functions that indirectly return Promises, and we can use the await keyword within these functions to pause execution until the Promise is resolved or rejected.<br />
          -Async/await provides a more sequential and synchronous-looking code, making it easier to read and maintain, especially when dealing with multiple asynchronous operations.<br />
          -In summary, JavaScript provides callbacks, Promises, and async/await for handling asynchronous operations. Promises and async/await are more commonly used and recommended for modern JavaScript applications due to their readability, error handling capabilities, and improved flow control.
        </>
      ),
    },
    {
      question: '14. DOM?',
      answer: 'The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a web page, allowing programs and scripts to dynamically access and manipulate the content and structure of web documents. A way to interact with and modify web.',
    },
    {
      question: '15.	Call, apply & bind method?',
      answer: (
        <>
          Allow to control the execution context (the value of this) and pass arguments to functions. They are commonly used to invoke functions in specific contexts.<br /><br />
          <strong>Call Method:</strong>The call method is used to invoke a function with a specified this value and individual arguments provided as a comma-separated list. It allows to call a function in a specific context.<br /><br />
          <strong>apply Method:</strong>The apply method is similar to call, but it accepts arguments as an array or an array-like object instead of individual arguments.<br /><br />
          <strong>bind Method:</strong>The bind method creates a new function with a specified this value and, optionally, preset arguments. It doesn't immediately invoke the function but returns a new function that can be called later.
        </>
      ),
    },
    {
      question: '16.	Ternary operator?',
      answer: (
        <>
          The ternary operator, also known as the conditional operator, is a short way to write conditional (if-else) statements in JavaScript.<br />
          It allows to make a decision between two values or expressions based on a condition. <br />
          It's always used to assign a value to a variable based on a condition.<br />
          -when we want to return different values in a short way within a function or expression.

        </>
      ),
    },
    {
      question: '17.	Destructuring in js? ECMAScript 6 (ES6)',
      answer: (
        <>
          Destructuring is a feature in JavaScript that allows us to extract values from objects and arrays and assign them to variables in a short and natural way. It makes working with complex data structures more simple. There are two main types of destructuring: object destructuring and array destructuring.
        </>
      ),
    },
    {
      question: '18.	HOF in JavaScript?',
      answer: (
        <>Higher-Order Function (HOF) is a function that takes one or more functions as arguments, returns a function as its result, or both. Commonly used in JavaScript to create reusable code.<br />
          -the map, filter, and reduce functions are commonly used Higher-Order Functions in JavaScript., Callback fn<br />
          -allowing to write more modular, reusable, and flexible code. They are used extensively in libraries like lodash and in modern JavaScript frameworks like React and Redux.
        </>
      ),
    },
    {
      question: '19.	forEachs, map, filter and reduce in js method in js?',
      answer: (
        <>
          <strong>forEach() method:</strong><br />
          - used when we want to perform some action for each element in the array but do not need to create a new array based on the results.<br />
          -We can use forEach to modify the original array. We can directly change the array elements within the callback function.<br />
          -It iterates over each element of the array and calls the provided function, passing the current element as an argument.<br />
          -It does not return a new array; instead, it performs a side effect on each element.<br />
          -The return value of forEach() is always undefined.<br /><br />
          <strong>map() method:</strong><br />
          -It iterates over each element of the array, applies the provided function to it, and collects the return values into a new array.<br />
          -The map method applies a function to each element of an array and returns a new array containing the results.<br />
          -The original array is not modified. --It creates a new array with the transformed values.<br />
          -The new array will have the same length as the original array.<br /><br />
          <strong>filter:</strong><br />
          -The filter method creates a new array with all the elements that pass a given condition (predicate) specified in a callback function.<br />
          -The original array remains unchanged.<br />
          -The new array may have a different length than the original array.<br /><br />
          <strong>reduce:</strong><br />
          -reduce is used to accumulate or reduce an array into a single value (e.g., summing up all elements, finding the maximum, etc.).<br />
          -It applies a provided function to each element of the array, accumulating a result as it iterates through the array.<br />
          -You can also provide an initial value for the accumulation.
        </>
      ),
    },
    {
      question: '20.	Which method and keyword use to debug the code?',
      answer: (
        <>
          <strong>console.log(): </strong>This is a simple and effective way to print values to the browser's console. We can insert console.log() statements in code to output variable values, check the flow of code, and identify issues.<br /><br />
          <strong>console.error(): </strong>Similar to console.log(), console.error() is used to log error messages to the console. It's helpful for highlighting critical issues in code.<br /><br />
          <strong>Breakpoints: </strong>We can set breakpoints in code using the browser's developer tools. These breakpoints pause the execution of code at specific lines, allowing to inspect variable values and the call stack. We can also step through code line by line.<br /><br />
          <strong>Debugger Statement: </strong>we can insert the debugger statement directly into JavaScript code. When the browser came across it, it triggers a breakpoint, and we can start debugging in the developer tools.<br /><br />
          <strong>Browser Developer Tools: </strong>Most modern browsers (e.g., Chrome, Firefox, Edge) come with developer tools that include a "Console" tab for logging, a "Sources" tab for debugging with breakpoints, a "Debugger" tab for step-by-step debugging, and more.<br /><br />
          <strong>Try-Catch Blocks: </strong>Use try-catch blocks to catch and handle exceptions. When an error occurs within the try block, it's caught by the catch block, allowing to handle the error without crashing application.
        </>
      ),
    },
    {
      question: '21.	Can you describe your experience making HTTP requests to REST APIs from?',
      answer: (
        <>
          <strong>Fetch API:</strong>The Fetch API is a built-in JavaScript API that provides a modern, promise-based way to make HTTP requests. It allows to make GET, POST, PUT, DELETE, and other types of requests to REST APIs.<br /><br />
          <strong>Axios:</strong>
        </>
      ),
    },
    {
      question: '22.	How would you handle errors when consuming APIs?',
      answer: (
        <>
          <strong>Using Promises or Async/Await:</strong>If we are using the Fetch API or Axios, we can control Promises or Async/Await to handle errors. Both approaches allow we to use .catch () to handle errors that might occur during the API call.<br /><br />
          <strong>Displaying User-Friendly Messages:</strong>When an error occurs, it's necessary to provide meaningful feedback to the user. We can display user-friendly error messages or handle them in a way that doesn't disrupt the user experience. This might include showing a notification, a loading spinner, or a friendly error message on the user interface.<br /><br />
          <strong>Logging Errors:</strong>To displaying user-friendly messages, logging errors can be necessary for debugging and monitoring purposes. We can log errors to the console or send them to a server for analysis.
        </>
      ),
    },
    {
      question: '23.	Get reference in JavaScript?',
      answer: (
        <>
          <strong>DOM Elements:</strong>To reference HTML elements in the Document Object Model (DOM), we can use various methods like getElementById, querySelector, or accessing properties like document.body.<br /><br />
          <strong>Array Elements:</strong>We can access elements in an array using their index.<br /><br />
          <strong>Object Methods:</strong>We can reference methods of an object.<br /><br />
          <strong>Constructor Functions:</strong>We can create instances of objects using constructor functions.<br /><br />
          <strong>Event Handlers:</strong>We can reference event handlers (functions) for HTML elements to attach event listeners.<br /><br />
          <strong>Functions:</strong>We can store a reference to a function in a variable.
        </>
      ),
    },
    {
      question: '24.	Events in JavaScript?',
      answer: (
        <>
          In JavaScript, events are occurrences or interactions that happen in the web browser or the Document Object Model (DOM) and trigger specific JavaScript code to execute in response.<br /><br />
          <strong>Mouse Events: </strong>These events are triggered by mouse interactions, such as clicks, movements, and hover actions. Examples include click, mousemove, mousedown, mouseup, and mouseover.<br /><br />
          <strong>Keyboard Events: </strong>These events are triggered by keyboard interactions, such as key presses and releases. Examples include keydown, keyup, and keypress.<br /><br />
          <strong>Form Events: </strong>These events are related to form elements like input fields, buttons, and form submissions. Examples include submit, input, and change.<br /><br />
          <strong>Window Events: </strong>These events are related to the browser window or document itself. Examples include load, resize, and scroll.<br /><br />
          <strong>Custom Events: </strong>We can also create custom events to handle specific interactions in application.<br /><br />
          <strong>Event Listeners:</strong>To respond to events, we can attach event listeners to DOM elements. Event listeners are functions that "listen" for specific events on a target element and execute code when the event occurs.
        </>
      ),
    },
    {
      question: '25.	Event looping in JavaScript?',
      answer: (
        <>
          The event loop is responsible for handling asynchronous code execution and managing events. It ensures that JavaScript can perform tasks like handling user interactions, making network requests, and running timers without blocking the main execution thread, which would result in a non-responsive user interface.<br /><br />
          <strong>Here's how the event loop works in JavaScript:</strong><br />
          <strong>Call Stack: </strong>JavaScript maintains a call stack, which is a data structure that keeps track of the function calls currently being executed. When we run synchronous code, it gets added to the call stack and executed sequentially.<br /><br />
          <strong>Asynchronous Operations: </strong>When JavaScript came across asynchronous operations, such as setTimeout, AJAX requests, or event handlers, it doesn't block the call stack. Instead, these operations are scheduled to run later, and their associated callbacks are placed in various task queues (e.g., the timer queue for setTimeout).<br /><br />
          <strong>Event Loop: </strong>The event loop continuously checks if the call stack is empty. When it is empty, the event loop looks at the task queues and moves any pending callbacks to the call stack for execution. This process allows asynchronous code to be executed when the main thread is idle.
        </>
      ),
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    // Add more questions and answers as needed
  ];

  // State to manage which question is currently expanded
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  // Function to toggle the expanded question
  const toggleQuestion = (index) => {
    setExpandedQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mt-5">
      <h2 style={{ marginTop: '7rem' }} className="mb-4">JavaScript Section</h2>
      <ul className="list-group">
        {javaScriptQuestions.map((q, index) => (
          <li key={index} className="list-group-item">
            <div
              onClick={() => toggleQuestion(index)}
              style={{ cursor: 'pointer', marginBottom: '8px', fontSize: '18px', }}
              className="font-weight-bold"
            >
              {q.question}
            </div>
            {expandedQuestion === index && <div className="answer-container bg-light-blue text-dark p-3">{q.answer}</div>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JavaScriptSection;