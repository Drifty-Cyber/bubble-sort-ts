"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// Sort Numbers
const numbersCollection = new NumbersCollection_1.NumbersCollection([77, 13, -5, 10, 77]);
numbersCollection.sort();
console.log(numbersCollection.data);
// Sort a string of characters
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);
// Sorts a LinkedList
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(22);
linkedList.add(59);
linkedList.add(-24);
linkedList.add(93);
linkedList.add(-16);
linkedList.sort();
linkedList.print();
