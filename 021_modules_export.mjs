/**
 * MODULES - EXPORTING
 * How about we make our code even more reusable?
 * 
 * Modules allow us to create much more reusable code, and import that
 * snippet of code in other files. That means we can create entire libraries
 * full of functionalities and generalized content that can be qualified for
 * multiple usage.
 * In Node <= 12, we need to run the file with the flag "--experimental-modules"
 * before the filename, so it will allow us to export and import our files.
 * We also need to use the .mjs extension for it to work properly in this version.
 * When we're working with NPM and the package.json modules, things are a little bit
 * different, but we won't get into it here.
 * 
 * THIS FILE: Exports a module with a string and a function we can import somewhere
 * else and use it.
 * 
 * RUN: node --experimental-modules 022_module_import.mjs
 */

export const myNameIs = 'John';

export function printMyName() {
  console.log('Hello, my name is:', myNameIs);
}