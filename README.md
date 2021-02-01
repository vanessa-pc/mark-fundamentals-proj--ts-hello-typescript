---
module: fundamentals

level: 0

methods:
  - team
  - pair
  - solo

tags:
  - wip
---

# TS Hello World

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

This project is about introducing and motivating TypeScript.

## Learning Outcomes

- Run a JavaScript file with `node`
- Run a TypeScript file with `ts-node`
- Compile a TypeScript file with `tsc`

## Exercise 0: The quirks of JavaScript's dynamic and weak typing

> 🎯 **Success criterion:** you can run the project JavaScript code and see its weird quirky behaviour

JavaScript is semi-notorious for having weird quirky behaviour at the extremes of the language, [as illustrated in this famous 5 minute lightning walk](https://www.destroyallsoftware.com/talks/wat).

### Seeing strange behaviour in your terminal

There's an example of this in `src/javascript/index.js` - if you run this through your terminal, you'll see some slightly 'funky' output.

There are three different ways you can run that code (try all of them!).

Assuming that you're in the root directory of the project:

- `node src/javascript/index.js`: Use `node` to run a JavaScript file. Which one? The one at `src/javascript/index.js`.
- `node src/javascript`: Use `node` to run a JavaScript file. Which one? The one at `src/javascript`. Oh, that's not a JavaScript file, it's a folder - but it does have an `index.js` file in the folder, so I'll run that! (This is known shorthand with `node` - if the path is to a folder rather than to a file, it will try to find an `index.js` inside that folder)
- `yarn start:js`: we have specified for you the `start:js` script in `package.json` to run `node src/javascript`

The output which we might expect or hope JavaScript would give to us would probably be:

```bash
7 plus 10 is... 17
Array addition: 1,2,3 + 4,5,6 is... 1,2,3,4,5,6
# or possibly 5, 7, 9
```

but JavaScript gives us some different output. (Try it for yourself!)

### Interpreting the strange behaviour

This slightly strange behaviour is a consequence of JavaScript being a dynamic and weakly typed language:

1. It is [**dynamically typed**](https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing) because it does not need us to declare the types of variables and parameters before the code can be run
2. It is **weakly typed** because it will do a lot of implicit [type coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion) for us

By contrast, Python is also dynamically typed, but is _more_ strongly typed than JavaScript - 'dynamic' and 'weak' do not mean the same thing when we describe languages and their typings.

(Python still performs _some_ implicit type coercion, but to a lesser degree than JavaScript.)

The vocabulary is not super-important right now (and it will become more meaningful with time), but [here is a good video overview of static vs dynamic and strong vs weak typing](https://en.hexlet.io/courses/intro_to_programming/lessons/types/theory_unit).

For example, here is the "thought process" that we might project onto the JavaScript engine (not because it actually 'thinks' like this, but as a way of reasoning about dynamic and weak typing):

#### Dynamic typing

In JavaScript, we can declare variables without saying what type they have to be.

```js
let myFirstNumber = 5;
// okay, cool, you're declaring a variable! what type will it hold?
// well, after declaring it, you've immediately assigned it to a number, so I guess this thing must be a number

myFirstNumber = "banana";
// oh, you want to re-assign that variable to a string?
// that's totally cool with me!
```

Dynamic typing can be helpful because it gives us a lot of freedom! (The alternative, static typing, involves more verbose code.)

But the freedom of dynamic typing can also be very dangerous, in leading to unintentional errors. In order to know what we can do with a variable, we need to know what type it has (for example, we can't call `.toUpperCase()` on a number, but we could on a string) - and it's harder for us to maintain that knowledge if it changes depending on where we are in our code!

#### Weak typing

In JavaScript, we can write code which JavaScript will take and - without us explicitly instructing it to - use type coercion on.

(There's a reference example on this `src/javascript/type-coercion.js` - you can run this with `node src/javascript/type-coercion.js`.)

Weaker typing can be helpful because it means fewer errors in runtime. (The alternative, stronger typing, throws an error. You can check this by running the Python code in `src/python/attempted-coercion.py`.)

But the flexibility of weak typing can also be very dangerous, in leading to unexpected behaviour. Stronger typing systems require us to explicitly denote where we're converting a value from one type to another (e.g. in `src/python/explicit-casting.py`), which leads to clearer code which is consequently easier to reason about and predict.

### Installing `node` via `nvm`

JavaScript [originated as a browser-based language](https://www.springboard.com/blog/history-of-javascript), but it can also now be run outside browsers as a backend (server-side) language, most popularly through the [Node.js](https://nodejs.dev/learn/a-brief-history-of-nodejs) environment.

Whilst we could run JavaScript just in the browser, in order to explore the full power of modern JavaScript (and, soon, TypeScript) we'll be using Node.js to run JavaScript e.g. through our terminals.

Node.js comes in different versions - so we'll use something called Node Version Manager (or `nvm`), because this will make it easier for us to switch between Node.js versions if we want to later.

[Here's the `nvm` documentation](https://github.com/nvm-sh/nvm). It has instructions on installation, verifying installation and troubleshooting common problems. Note: you may need to restart your terminal in order to use `nvm` / verify that it is installed.

Once you've installed `nvm` (and verified its installation), [follow the `nvm` docs on installing the latest version of Node.js](https://github.com/nvm-sh/nvm#usage).

### Running JavaScript in the terminal

Now that we've got `node` installed, we can open up an interactive JavaScript console in our terminal simply with:

```bash
node
```

Here are some of the things you could try in the JavaScript shell:

- `2 + 2`
- `"Hello, world!"`
- `["Roses are red", "Violets are blue", "Python is fun", "JS is too!"]`

Feel free to experiment!

Once you are satisfied, you can exit the JavaScript console and return to your normal shell with `Ctrl + C`.

### Installing `yarn`

The JavaScript ecosystem has lots of pre-written 'libraries' of code that we can plug into, like [React](https://reactjs.org/) (which we'll use in a later week).

We'll need a way to grab the code of these libraries (or 'install' them).

There are two common 'package managers' used in the JavaScript ecosystem:

- `npm`, automatically bundled with `node`;
- `yarn`, an alternative to `npm` [built and open-sourced by Facebook](https://engineering.fb.com/2016/10/11/web/yarn-a-new-package-manager-for-javascript/)

All our examples will use `yarn` commands (on the basis that the commands are slightly more concise and [it benchmarks slightly better in speed](https://www.digitalocean.com/community/tutorials/nodejs-npm-yarn-cheatsheet)), but there are [equivalent `npm` commands](https://www.digitalocean.com/community/tutorials/nodejs-npm-yarn-cheatsheet) for everything.

Because `yarn` isn't bundled with `node` by default, we'll have to install it... ironically, therefore, we'll be installing it using `npm`!

Look at [the Yarn docs on installation here](https://classic.yarnpkg.com/en/docs/install/), and follow the docs to verify that you have successfully installed it.

## Exercise 1: Installing and running your first JavaScript project

> 🎯 **Success criterion:** you are able to run the tests for this project locally and see the output in your terminal (hopefully all passing tests!).

This repository contains a JavaScript project written following TDD principles.

To start with, we'll clone the repository and run the existing tests to check the existing state of the code.

### Clone and inspect the repository

Let's clone the repository:

```bash
cd ~/Developer/Academy # or wherever you're storing Academy repos
git clone https://github.com/WeAreAcademy/mark-fundamentals-proj--js-fizzbuzz.git
```

and now note a few files:

- `yarn.lock` - let's ignore this for now
- `fizzbuzz.js` - this has our main code
- `fizzbuzz.spec.js` - this has our tests
- `package.json` - let's look at this now!

### Reading `package.json`

`package.json` is a file which sits in the root folder of most JavaScript/TypeScript projects.

It has different fields - which you can [read about in more detail in the `npm` docs](https://docs.npmjs.com/cli/v6/configuring-npm/package-json) - but two will be of particular interest to us in this project: `scripts` and `dependencies`.

We'll come back to `scripts` later in this project. For now, if you look at `dependencies`, you will see that there is one direct _dependency_ listed: `jest`, a [JavaScript testing library](https://jestjs.io/) (which, as it happens, has also been open-sourced by Facebook).

(The `"^26.6.3"` tells us about which versions of Jest are consistent with the project. Don't worry too much about that right now.)

> ⚠️ Normally, we would see `jest` under `devDependencies`, but we'll learn about why in another project.

### Installing the dependencies

To install all dependencies required for the project, ensure that you are in the same directory as the project's `package.json`, and run the following command.

```bash
yarn # this is equivalent to npm install
```

After this finishes running, you will see a `node_modules` folder appear as a subdirectory... _and it's pretty big_.

It has a bunch of its own subdirectories, including:

- `import-local`
- `pkg-dir`
- `find-up`

Where did they all come from? What does it mean?

### Tracing the dependency tree

`node_modules` holds all the code of libraries that we need for this JavaScript project (outside of the code which we write ourselves).

This includes both _direct dependencies_ and _indirect dependencies_.

If you scour the `node_modules` folder, you'll see a `jest` folder - let's take a look at that.

The `node_modules/jest` folder has its _own_ `package.json`. It has more fields than what is in our project's root `package.json`, but some shared ones - in particular, _`jest` has its own dependencies_:

- `@jest/core`
- `import-local`
- `jest-cli`

These aren't direct dependencies of our root project - but, as dependencies of a direct dependency (`jest`), they are _indirect_ dependencies.

This means that you will be able to find another folder, `node_modules/import-local` - which, again, has its own `package.json`, and its own dependencies, e.g. `pkg-dir`, which has its own dependencies...

It's by tracing out this dependency tree that we end up with the huge massive `node_modules` folder. (This is a bit of a meme in JavaScript-land - you can use your favourite search engine and look at "node modules meme"...). Due to the fact that `node_modules` is so large and can be readily installed via the `yarn` command, we do not want to include it in our git repos. Therefore, it is always listed in the gitignore file.

Now that you have installed the dependencies, you'll be able to run the following command to execute the project tests:

```bash
yarn test
```

You'll see `jest` pop up in the terminal, followed by the test output. Congratulations, you've run your first JavaScript tests!

### Returning to `scripts` in `package.json`

The reason why `jest` pops up goes back to our `scripts` in `package.json` - you'll see that we have a script called `test` which is set to `"jest"`:

```json
"scripts": {
  "test": "jest"
},
```

Try replacing `"jest"` with `"pwd"`...

```json
"scripts": {
  "test": "pwd"
},
```

... then execute `yarn test` again. You'll see that it prints your working directory.

Now, try replacing `"test"` with `"pick-avocados"` (a deliberately silly name chosen for demonstration purposes).

When you try to run `yarn test`, you'll see that it'll tell you that it can't find the command - but `yarn pick-avocados` will execute the `pwd` command and print your working directory.

We won't often be adding to our `scripts`, but it's helpful to understand what's going on when we run a command like `yarn test` - it does what we specified in our `package.json`.

Finally, let's revert to `"test": "jest"` as we had before, and confirm that this work with another `yarn test`.

## Exercise 2: Documenting differences between Python and JavaScript syntax

> 🎯 **Success criterion:** a document which outlines the similarities and differences between a Python and JavaScript Fizzbuzz solution.

We think that you will be able to work out lots about JavaScript just by bringing in your existing ideas from Python and looking at the implementation of Fizzbuzz in `fizzbuzz.js`.

Here are some things in particular which you could pay attention to in comparing JavaScript and Python:

- How are code comments left?
- How are functions defined?
- How are variables declared and assigned values?
- How are values compared?
- How are `for` loops written?
- How are `if`/`else` statements written?

The following readings may help you:

- [JavaScript variables](https://javascript.info/variables)
- [JavaScript `for` loops](https://www.programiz.com/javascript/for-loop)
- [JavaScript if else and else if](https://www.w3schools.com/js/js_if_else.asp)
- [JavaScript function basics](https://javascript.info/function-basics)
- [JavaScript - Double Equals vs. Triple Equals](https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a)
- [JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)

### Checking your understanding

A great way to check your understanding is to:

1. Change something in the code
2. Predict whether the tests will continue to pass/fail
3. Run the tests (`yarn test`)
4. Check whether your prediction was correct/incorrect

For example, here are the things worth investigating:

- What happens if you remove the `let` keyword?
- What happens if you change `n = n + 1` for `n++`?
- What happens if you change a `===` to a `==`?
- What happens if you change the order of the `if`/`else` branches in `toFizzbuzz`?
- What happens if you remove the `return` keyword from this function?

## Exercise 3: Arrow functions (block body / explicit return)

> 🎯 **Success criterion:** all the functions in `fizzbuzz.js` are rewritten into arrow function (block body) style, with the tests still passing.

There's a section of code which is currently commented out:

```js
// let isBuzz = (n) => {
//   return n % 5 === 0
// }
```

This is using an alternative function syntax in JavaScript, called 'arrow functions' (here, with a block body and explicit return - we'll look at a different arrow function syntax soon).

Let's comment-out the whole `function isBuzz() { ... }` and de-comment out this block body `isBuzz` function:

```js
let isBuzz = (n) => {
  return n % 5 === 0;
};
```

Now run the tests - you should find that they still pass.

Arrow functions are an alternative way of declaring functions in JavaScript. (They don't behave in _precisely_ the same way as the traditional function expression used in previous exercises, but those niggling differences aren't going to be important to know for a while yet - so, for now, you can treat them as equivalent.)

The advantages of arrow functions will become clearer later (we'll see one advantage in the next exercise!) - but, for now, see if you can rewrite all the current `function` expressions into arrow function syntax.

## Exercise 4: Arrow functions (implicit return)

> 🎯 **Success criterion:** all the relevant functions in `fizzbuzz.js` are rewritten into arrow function (implicit return) style, with the tests still passing.

There's another section of code which is currently commented out:

```js
// let isBuzz = (n) => n % 5 === 0;
```

This is an arrow function syntax variant, which we might call a 'implicit return' arrow function.

Let's comment-out the previous arrow function (with block body and explicit return) `isBuzz`, and de-comment this one-line arrow function for it:

```js
let isBuzz = (n) => n % 5 === 0;
```

Now run the tests - you should find that they still pass.

This arrow function is a concise way of declaring short and simple functions in JavaScript, with an implicit return rather than an explicit return.

(Traditional `function` expressions and block body arrow functions both require the `return` keyword explicitly to return a value.)

However, only functions which are doing a direct and immediate `return` can be rewritten in this implicit return style - for example, we can't straightforwardly refactor `fizzbuzz` or `toFizzbuzz` into implicit return arrow functions.

However, you should be able to **rewrite both `isFizz` and `isFizzbuzz` into implicit return arrow functions, and confirm that the tests still pass afterwards**.

> 💡 It is possible to rewrite `toFizzbuzz` into an implicit return arrow function by chaining JavaScript ternaries, but we won't do this now as it's a bit of a distraction - but feel free to research how this might be done.

## Exercise 5: `let` vs `const` vs `var`

> 🎯 **Success criterion:** all variable assignments are rewritten to use `const` wherever possible

Up until this point, we have been using `let` to declare our variables, as opposed to `const` and `var` (which can also be used to declare variables).

A common opinion (which we'll adopt in future examples) is "use `const` by default to declare; use `let` if re-assignment really is necessary; don't use `var`." (`var` used to be the only way to declare variables in JavaScript, so there is a lot of legacy code which uses it exclusively, but it is extremely rare in modern JavaScript code.)

Whilst this is the most common opinion, it isn't the only one. Here are some related readings:

- [Let vs Const in JavaScript](https://flaviocopes.com/javascript-let-const/)
- [var vs let vs const in JavaScript](https://ui.dev/var-let-const/)
- [On let vs const](https://overreacted.io/on-let-vs-const/)

However, we'll stick with the consensus in all future examples.

**Rewrite the code to use `const` wherever possible, and ensure that the tests still pass.**
