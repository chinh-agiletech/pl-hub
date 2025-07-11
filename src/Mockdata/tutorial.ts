import type { TutorialStep } from "../interfaces/Language.ts";

const dataTutorial = {
  javascript: {
    language: "JavaScript",
    title: "JavaScript Fundamentals",
    steps: [
      {
        id: "js-1",
        title: "Variables and Data Types",
        description:
          "Learn how to declare variables and understand different data types in JavaScript.",
        code: `// Variable declarations
let name = "John Doe";
const age = 25;
var isStudent = true;

// Different data types
let number = 42;
let string = "Hello World";
let boolean = false;
let array = [1, 2, 3, 4, 5];
let object = { name: "Alice", age: 30 };`,
        explanation:
          "JavaScript uses 'let', 'const', and 'var' to declare variables. 'const' is for constants, 'let' for block-scoped variables, and 'var' for function-scoped variables. JavaScript has dynamic typing, meaning variables can hold different types of values.",
        output: `undefined
(Variables are declared but no output is shown)`,
      },
      {
        id: "js-2",
        title: "Functions",
        description:
          "Understanding how to create and use functions in JavaScript.",
        code: `// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Arrow function
const add = (a, b) => a + b;

// Function expression
const multiply = function(x, y) {
    return x * y;
};

console.log(greet("World"));
console.log(add(5, 3));
console.log(multiply(4, 6));`,
        explanation:
          "Functions are reusable blocks of code. You can create them using function declarations, arrow functions, or function expressions. Functions can accept parameters and return values.",
        output: `Hello, World!
8
24`,
      },
      {
        id: "js-3",
        title: "Arrays and Loops",
        description: "Working with arrays and different types of loops.",
        code: `const fruits = ["apple", "banana", "orange", "grape"];

// For loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// For...of loop
for (const fruit of fruits) {
    console.log("I like " + fruit);
}

// Array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);`,
        explanation:
          "Arrays store multiple values in a single variable. You can iterate through arrays using various loop types. Array methods like map(), filter(), and reduce() provide powerful ways to manipulate data.",
        output: `apple
banana
orange
grape
I like apple
I like banana
I like orange
I like grape
[2, 4, 6, 8, 10]`,
      },
    ],
  },

  python: {
    language: "Python",
    title: "Python Basics",
    steps: [
      {
        id: "py-1",
        title: "Variables and Print",
        description:
          "Learn how to create variables and display output in Python.",
        code: `# Variable assignments
name = "Alice"
age = 28
height = 5.6
is_programmer = True

# Print statements
print("Name:", name)
print("Age:", age)
print("Height:", height)
print("Is programmer:", is_programmer)

# String formatting
print(f"Hello, my name is {name} and I'm {age} years old.")`,
        explanation:
          "Python uses simple assignment to create variables. The print() function displays output. Python supports string formatting using f-strings for cleaner code.",
        output: `Name: Alice
Age: 28
Height: 5.6
Is programmer: True
Hello, my name is Alice and I'm 28 years old.`,
      },
      {
        id: "py-2",
        title: "Lists and Dictionaries",
        description: "Understanding Python's built-in data structures.",
        code: `# Lists
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print("Fruits:", fruits)

# Dictionary
person = {
    "name": "Bob",
    "age": 35,
    "city": "New York"
}

print("Person:", person)
print("Name:", person["name"])

# List comprehension
squares = [x**2 for x in range(1, 6)]
print("Squares:", squares)`,
        explanation:
          "Lists are ordered collections that can be modified. Dictionaries store key-value pairs. List comprehensions provide a concise way to create lists based on existing lists.",
        output: `Fruits: ['apple', 'banana', 'cherry', 'orange']
Person: {'name': 'Bob', 'age': 35, 'city': 'New York'}
Name: Bob
Squares: [1, 4, 9, 16, 25]`,
      },
      {
        id: "py-3",
        title: "Functions and Control Flow",
        description: "Creating functions and using conditional statements.",
        code: `def check_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

# Test the function
scores = [95, 87, 73, 62, 45]
for score in scores:
    grade = check_grade(score)
    print(f"Score {score}: Grade {grade}")`,
        explanation:
          "Functions in Python are defined with 'def'. Conditional statements use if, elif, and else. For loops can iterate over lists and other iterable objects.",
        output: `Score 95: Grade A
Score 87: Grade B
Score 73: Grade C
Score 62: Grade D
Score 45: Grade F`,
      },
    ],
  },

  react: {
    language: "React",
    title: "React Components",
    steps: [
      {
        id: "react-1",
        title: "Creating Your First Component",
        description: "Learn how to create a simple React functional component.",
        code: `import React from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// Arrow function component
const Greeting = ({ name, age }) => {
    return (
        <div>
            <h2>Welcome, {name}!</h2>
            <p>You are {age} years old.</p>
        </div>
    );
};

export default Welcome;`,
        explanation:
          "React components are JavaScript functions that return JSX. Props are used to pass data to components. You can destructure props for cleaner code.",
        output: `<h1>Hello, John!</h1>
<div>
    <h2>Welcome, John!</h2>
    <p>You are 25 years old.</p>
</div>`,
      },
      {
        id: "react-2",
        title: "Using State with useState Hook",
        description: "Managing component state with the useState hook.",
        code: `import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <p>Hello, {name}!</p>
        </div>
    );
}`,
        explanation:
          "useState hook allows functional components to have state. It returns an array with the current state value and a function to update it. State updates trigger re-renders.",
        output: `Interactive counter and input field
Count starts at 0, can be incremented/decremented
Input field updates greeting in real-time`,
      },
      {
        id: "react-3",
        title: "Rendering Lists and Conditional Rendering",
        description:
          "Learn how to render lists of items and show content conditionally.",
        code: `import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a project', completed: true }
    ]);

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <div>
            <h2>Todo List</h2>
            {todos.length === 0 ? (
                <p>No todos yet!</p>
            ) : (
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>
                            <span 
                                style={{
                                    textDecoration: todo.completed ? 'line-through' : 'none'
                                }}
                                onClick={() => toggleTodo(todo.id)}
                            >
                                {todo.text}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}`,
        explanation:
          "Use map() to render lists of items. Each item needs a unique 'key' prop. Conditional rendering can be done with ternary operators or logical AND operators. The spread operator helps update state immutably.",
        output: `Todo List with clickable items
- Learn React (can be clicked to toggle)
- Build a project ~~strikethrough if completed~~`,
      },
    ],
  },

  typescript: {
    language: "TypeScript",
    title: "TypeScript Essentials",
    steps: [
      {
        id: "ts-1",
        title: "Type Annotations and Interfaces",
        description: "Learn how to add type safety to your JavaScript code.",
        code: `// Basic type annotations
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let hobbies: string[] = ["reading", "coding"];

// Interface definition
interface User {
    id: number;
    name: string;
    email: string;
    isAdmin?: boolean; // Optional property
}

// Using the interface
const user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
};

console.log(user.name);`,
        explanation:
          "TypeScript adds static type checking to JavaScript. Interfaces define the shape of objects. Optional properties are marked with '?'. This helps catch errors at compile time.",
        output: `Alice`,
      },
      {
        id: "ts-2",
        title: "Functions with Types",
        description:
          "Adding type annotations to function parameters and return values.",
        code: `// Function with typed parameters and return type
function add(a: number, b: number): number {
    return a + b;
}

// Arrow function with types
const multiply = (x: number, y: number): number => x * y;

// Function with optional parameter
function greet(name: string, title?: string): string {
    return title ? \`Hello, \${title} \${name}\` : \`Hello, \${name}\`;
}

// Using the functions
console.log(add(5, 3));
console.log(multiply(4, 6));
console.log(greet("John"));
console.log(greet("Smith", "Dr."));`,
        explanation:
          "TypeScript allows you to specify types for function parameters and return values. Optional parameters are marked with '?'. This provides better IntelliSense and catches type-related errors.",
        output: `8
24
Hello, John
Hello, Dr. Smith`,
      },
      {
        id: "ts-3",
        title: "Generics and Union Types",
        description:
          "Understanding advanced TypeScript features for flexible and type-safe code.",
        code: `// Generic function
function identity<T>(arg: T): T {
    return arg;
}

// Using generics
const stringResult = identity<string>("Hello");
const numberResult = identity<number>(42);

// Union types
type Status = "loading" | "success" | "error";

function handleStatus(status: Status): string {
    switch (status) {
        case "loading":
            return "Please wait...";
        case "success":
            return "Operation completed!";
        case "error":
            return "Something went wrong!";
        default:
            return "Unknown status";
    }
}

console.log(handleStatus("loading"));
console.log(handleStatus("success"));`,
        explanation:
          "Generics allow you to write reusable code that works with multiple types. Union types let a value be one of several types. This provides flexibility while maintaining type safety.",
        output: `Please wait...
Operation completed!`,
      },
    ],
  },
};

export default dataTutorial;
