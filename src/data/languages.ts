import type { Language } from "../types";

export const programmingLanguages: Language[] = [
  {
    id: "python",
    name: "Python",
    description:
      "A versatile, beginner-friendly language perfect for data science, web development, and automation.",
    level: "Beginner",
    icon: "🐍",
    color: "bg-blue-500",
    topics: [
      "Variables & Data Types",
      "Control Flow",
      "Functions",
      "Object-Oriented Programming",
      "Libraries & Modules",
    ],
    examples: [
      {
        title: "Hello World",
        code: `print("Hello, World!")`,
        description: "The classic first program in Python",
      },
      {
        title: "Variables and Data Types",
        code: `# Different data types in Python
name = "Alice"          # String
age = 20               # Integer
height = 5.6           # Float
is_student = True      # Boolean

print(f"Name: {name}, Age: {age}, Height: {height}m, Student: {is_student}")`,
        description:
          "Learn about Python's basic data types and string formatting",
      },
    ],
    tutorials: [
      {
        title: "Python Basics",
        steps: [
          {
            id: "1",
            title: "Variables and Print",
            description:
              "Learn how to create variables and print output in Python",
            code: `# Creating variables
message = "Hello, Python!"
number = 42

# Printing variables
print(message)
print(number)`,
            explanation:
              "In Python, variables are created by simply assigning a value. The print() function displays output to the console.",
            output: "Hello, Python!\n42",
          },
          {
            id: "2",
            title: "Data Types",
            description: "Explore Python's built-in data types",
            code: `# Different data types
text = "Python"        # String
age = 25              # Integer
price = 19.99         # Float
is_active = True      # Boolean

print(type(text))
print(type(age))
print(type(price))
print(type(is_active))`,
            explanation:
              "Python has several built-in data types. Use the type() function to check what type a variable is.",
            output:
              "<class 'str'>\n<class 'int'>\n<class 'float'>\n<class 'bool'>",
          },
        ],
      },
    ],
    quizzes: [
      {
        title: "Python Fundamentals Quiz",
        questions: [
          {
            id: "1",
            question:
              "What is the correct way to print 'Hello World' in Python?",
            options: [
              "print('Hello World')",
              "echo('Hello World')",
              "console.log('Hello World')",
              "printf('Hello World')",
            ],
            correctAnswer: 0,
            explanation:
              "In Python, the print() function is used to display output.",
          },
          {
            id: "2",
            question: "Which of the following is NOT a valid Python data type?",
            options: ["int", "float", "string", "bool"],
            correctAnswer: 2,
            explanation:
              "In Python, the string data type is called 'str', not 'string'.",
          },
        ],
      },
    ],
  },
  {
    id: "javascript",
    name: "JavaScript",
    description:
      "The language of the web, essential for front-end development and increasingly popular for back-end.",
    level: "Beginner",
    icon: "🌐",
    color: "bg-yellow-500",
    topics: [
      "Variables & Scope",
      "Functions",
      "DOM Manipulation",
      "Async Programming",
      "ES6+ Features",
    ],
    examples: [
      {
        title: "Function Declaration",
        code: `function greetUser(name) {
    return \`Hello, \${name}! Welcome to JavaScript.\`;
}

console.log(greetUser("Student"));`,
        description: "Learn how to create and call functions in JavaScript",
      },
      {
        title: "Array Methods",
        code: `const numbers = [1, 2, 3, 4, 5];

// Map - transform each element
const doubled = numbers.map(n => n * 2);

// Filter - get elements that match condition
const evenNumbers = numbers.filter(n => n % 2 === 0);

// Reduce - combine all elements into single value
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Even numbers:", evenNumbers);
console.log("Sum:", sum);`,
        description: "Master JavaScript array methods for data manipulation",
      },
    ],
    tutorials: [
      {
        title: "JavaScript Essentials",
        steps: [
          {
            id: "1",
            title: "Variables and Constants",
            description: "Learn about variable declaration in JavaScript",
            code: `// Variable declarations
let name = "John";
const age = 25;
var city = "New York";

console.log(name, age, city);`,
            explanation:
              "Use 'let' for variables that can change, 'const' for constants, and avoid 'var' in modern JavaScript.",
            output: "John 25 New York",
          },
        ],
      },
    ],
    quizzes: [
      {
        title: "JavaScript Basics Quiz",
        questions: [
          {
            id: "1",
            question:
              "Which keyword is used to declare a constant in JavaScript?",
            options: ["var", "let", "const", "final"],
            correctAnswer: 2,
            explanation:
              "The 'const' keyword is used to declare constants in JavaScript.",
          },
        ],
      },
    ],
  },
  {
    id: "java",
    name: "Java",
    description:
      "A robust, object-oriented language widely used in enterprise applications and Android development.",
    level: "Intermediate",
    icon: "☕",
    color: "bg-red-500",
    topics: [
      "Classes & Objects",
      "Inheritance",
      "Polymorphism",
      "Collections",
      "Exception Handling",
    ],
    examples: [
      {
        title: "Class Definition",
        code: `public class Student {
    private String name;
    private int age;
    private double gpa;
    
    public Student(String name, int age, double gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age + ", GPA: " + gpa);
    }
    
    public static void main(String[] args) {
        Student student = new Student("John Doe", 20, 3.8);
        student.displayInfo();
    }
}`,
        description:
          "Learn Java class structure and object-oriented programming basics",
      },
    ],
    tutorials: [
      {
        title: "Java OOP Fundamentals",
        steps: [
          {
            id: "1",
            title: "Classes and Objects",
            description:
              "Understanding the basics of object-oriented programming in Java",
            code: `public class Car {
    private String brand;
    private String model;
    
    public Car(String brand, String model) {
        this.brand = brand;
        this.model = model;
    }
    
    public void start() {
        System.out.println(brand + " " + model + " is starting...");
    }
}`,
            explanation:
              "A class is a blueprint for creating objects. Objects are instances of classes with their own data and methods.",
          },
        ],
      },
    ],
    quizzes: [
      {
        title: "Java OOP Quiz",
        questions: [
          {
            id: "1",
            question: "What is the correct way to create a class in Java?",
            options: [
              "class MyClass {}",
              "public class MyClass {}",
              "public class MyClass() {}",
              "class MyClass() {}",
            ],
            correctAnswer: 1,
            explanation:
              "In Java, classes are typically declared as 'public class ClassName {}'.",
          },
        ],
      },
    ],
  },
  {
    id: "cpp",
    name: "C++",
    description:
      "A powerful systems programming language that offers both high-level and low-level programming capabilities.",
    level: "Advanced",
    icon: "⚡",
    color: "bg-purple-500",
    topics: [
      "Pointers & Memory",
      "Templates",
      "STL",
      "Object-Oriented Programming",
      "System Programming",
    ],
    examples: [
      {
        title: "Pointers and References",
        code: `#include <iostream>
using namespace std;

int main() {
    int value = 42;
    int* ptr = &value;        // Pointer to value
    int& ref = value;         // Reference to value
    
    cout << "Value: " << value << endl;
    cout << "Pointer address: " << ptr << endl;
    cout << "Pointer value: " << *ptr << endl;
    cout << "Reference: " << ref << endl;
    
    *ptr = 100;  // Modify through pointer
    cout << "After modification: " << value << endl;
    
    return 0;
}`,
        description: "Understanding pointers and references in C++",
      },
    ],
    tutorials: [
      {
        title: "C++ Memory Management",
        steps: [
          {
            id: "1",
            title: "Pointers Basics",
            description: "Learn about pointers and memory addresses in C++",
            code: `#include <iostream>
using namespace std;

int main() {
    int number = 10;
    int* ptr = &number;
    
    cout << "Value: " << number << endl;
    cout << "Address: " << &number << endl;
    cout << "Pointer: " << ptr << endl;
    cout << "Dereferenced: " << *ptr << endl;
    
    return 0;
}`,
            explanation:
              "Pointers store memory addresses. Use & to get an address and * to dereference (access the value at that address).",
          },
        ],
      },
    ],
    quizzes: [
      {
        title: "C++ Pointers Quiz",
        questions: [
          {
            id: "1",
            question:
              "What operator is used to get the address of a variable in C++?",
            options: ["*", "&", "@", "#"],
            correctAnswer: 1,
            explanation:
              "The & operator is used to get the address of a variable in C++.",
          },
        ],
      },
    ],
  },
];
