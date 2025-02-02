# FooBarQix

# Problem
You should implement a function String compute(String) which implements the following rules.

## Step 1

### Rules

- If the number is divisible by 3, write “Foo” instead of the number
- If the number is divisible by 5, add “Bar”
- If the number is divisible by 7, add “Qix”
- For each digit 3, 5, 7, add “Foo”, “Bar”, “Qix” in the digits order.

### Examples

```
1  => 1
2  => 2
3  => FooFoo (divisible by 3, contains 3)
4  => 4
5  => BarBar (divisible by 5, contains 5)
6  => Foo (divisible by 3)
7  => QixQix (divisible by 7, contains 7)
8  => 8
9  => Foo
10 => Bar
13 => Foo
15 => FooBarBar (divisible by 3, divisible by 5, contains 5)
21 => FooQix
33 => FooFooFoo (divisible by 3, contains two 3)
51 => FooBar
53 => BarFoo
```

## Step 2

We have a new business request: we must keep a trace of 0 in numbers, each 0 must be replaced by char “*”.

### Examples

```
101   => 1*1
303   => FooFoo*Foo
105   => FooBarQix*Bar
10101 => FooQix**
```

# How to code and run
## To setup development environment:
You need to have the following installed
- NodeJS

After installing NodeJS, go to the folder and run `npm install` to install all required libraries.

## To run tests:

Run `npm test`

## To start program

Run `npm start`

## Development Process
- Write a test case against the problem
- Run tests and see the test failing
- Write code to fulfill the test case
- Run tests to pass the new test
- Repeat until all requirements are met and the code is working

You can also write tests for some internal functions you write to test your internal building blocks.

Happy coding!
