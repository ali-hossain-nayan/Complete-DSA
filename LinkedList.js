// Linked List->Singly LinkedList
// A linked list is a linear data structur where elements called nodes, are not stored contiguously in memory.Instead each node contains data and referece or link to the next node in the sequence.
// For one node 
//Create one Node
class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}

// Linked List for one node
class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }



    push(value) {
        let newNode = new Node(value);//create the new node
        if (!this.head) {//if there is nor head then both head tail indicate to newNode which we push
            this.head = newNode;
            this.tail = newNode;

        }
        this.tail.next = newNode;//current tails next pointer to the new node. linking the new node at the end of the list.
        this.tail = newNode;//update tail to be new node
        this.length++;//length increased
    }




    pop() {
        if (!this.head) {//if there is no node/head return undefined 
            return undefined;
        }
        let temp = this.head;
        let prev = this.head;
        while (temp.next) {//as long as temp->next any node exist
            prev = temp;//swap temp to prev
            temp = prev.next;//and temp to the next prev->next node
        }
        this.tail = prev;//after loop tail->prev
        this.tail.next = null;//tail->next null and temp already vanished
        this.length--;//length decreases

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;//return the pop element which we have just poped
    }



    unshift(value) {
        const newNode = new Node(value);//create new node

        if (!this.head) {//if there is no node then both direct to newNode;
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.next = this.head;//after loop we shift head to newNode->next
        this.head = newNode;//then again take head and put it in the newNode

        this.length++;
        return this;
    }


    shift() {
        if (!this.head) {
            return undefined;
        }

        let temp = this.head;//take head and store it in temp a copy
        this.head = this.head.next;//head to head->next

        temp.next = null;//then head null kore delam.
        this.length--;

    }

    getFirst() {
        return this.head;
    }


    getLast() {

        if (!this.head) {
            return null;
        }
        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }
        return temp;
    }

    getElementByIndex(index) {
        let count = 0;
        let temp = this.head;
        while (temp) {
            if (count === index) {
                return temp;
            }
            else {
                count++;
                temp = temp.next;
            }
        }
        return null;
    }

    set(index, value) {
        let temp = this.getElementByIndex(index);//get the index

        if (temp) {
            temp.value = value;//and set the index value if its so.
            return true;
        }
        return false;

    }



    insertNode(index, value) {
        if (index === 0) {
            return this.unshift(value);//if only one 0 index it means put the value in first with unshift method
        }
        if (index === this.length) {
            return this.push(value);//if index==length then put it last 
        }
        const newNode = new Node(value);
        let temp = this.getElementByIndex(index - 1);//access the target prev node
        newNode.next = temp.next;//newNode connect to temp->next node
        temp.next = newNode;//temp connect to newNode
        this.length++;
        return true;

    }

    size() {
        let count = 0;
        let temp = this.head;
        while (temp) {
            count++;
            temp = temp.next;
        }
        return count;
    }
    clear() {
        this.head = null;
    }


}

//create instance of this linkedList
const newLinkedList = new LinkedList(1)
// console.log(newLinkedList)
newLinkedList.push(12)
newLinkedList.push(10)
newLinkedList.push(22)
// console.log(newLinke  dList)
// newLinkedList.pop(12)
// newLinkedList.unshift(0)
// newLinkedList.shift()
// newLinkedList.getFirst()
// console.log(newLinkedList.getFirst())
// console.log(newLinkedList.getLast())
// console.log(newLinkedList.getElementByIndex(0))
// console.log(newLinkedList.set(2, 4))
// console.log(newLinkedList.insertNode(1, 20));
// console.log(newLinkedList.size())
// console.log(newLinkedList.clear())









// -------------   Doubly LinkedList     -------------


class DoublyNode {
    constructor(value) {
        this.head = value;
        this.next = null;

        this.prev = null;
    }
}



class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }



    push(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;//tail->next newNode
        newNode.prev = this.tail//newNode->prev tail as doubly LinkedList next,prev two side connection
        this.tail = newNode;
        this.length++;
        return this;

    }

}
let myDoublyLinkedList = new DoublyLinkedList(0)
myDoublyLinkedList.push(1);
console.log(myDoublyLinkedList)

