import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Sort Numbers
const numbersCollection = new NumbersCollection([77, 13, -5, 10, 77]);
numbersCollection.sort();
console.log(numbersCollection.data);

// Sort a string of characters
const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);

// Sorts a LinkedList
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(22);
linkedList.add(59);
linkedList.add(-24);
linkedList.add(93);
linkedList.add(-16);

linkedList.sort();
linkedList.print();
