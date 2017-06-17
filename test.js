var LinkedList = require('./LinkedList');

var ll = new LinkedList();

ll.addToHead(100);
ll.addToHead(5);
ll.addToTail(10);
ll.addToTail(5);


console.log(ll.search(100));

console.log(ll.indexOf(10));
