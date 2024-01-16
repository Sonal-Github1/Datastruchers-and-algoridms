#linked list Data structures
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class My_linkedlist:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last_node = self.head
        while last_node.next:
            last_node = last_node.next
        last_node.next = new_node

    def print_list(self):
        current_node = self.head
        while current_node:
            print(current_node.data)
            current_node = current_node.next

linked_list = My_linkedlist()
linked_list.append("List week days from the start: ")
linked_list.append("Monday")
linked_list.append("Tuesday")
linked_list.append("Wednesday")
linked_list.append("Thursday")
linked_list.append("Friday")
linked_list.print_list()



#stack Data Structures
class My_stack:
    def __init__(self):
        self.stack = []

    def push(self, data):
        self.stack.append(data)

    def pop(self):
        if not self.is_empty():
            return self.stack.pop()
        else:
            return None

    def is_empty(self):
        return len(self.stack) == 0

    def peek(self):
        if not self.is_empty():
            return self.stack[-1]
        else:
            return None

stack = My_stack()
stack.push("Monday")
stack.push("Tuesday")
stack.push("Wednesday")
stack.push("Thursday")
stack.push("Friday")
stack.push("pop weekdays from the last:")

print(stack.pop())  # Output: "pop weekdays from the last:"
print(stack.pop())  # Output: "Friday"
print(stack.pop())  # Output: "Thursday"
print(stack.pop())  # Output: "Wednesday"
print(stack.pop())  # Output: "Tuesday"
print(stack.pop())  # Output: "Monday"
print(stack.pop())  # Output: None (Stack is empty)



#Queue Data Structures
from collections import deque

class My_queue:
    def __init__(self):
        self.queue = deque()
        
    def enqueue(self, data):
        self.queue.append(data)
        
    def dequeue(self):
        return self.queue.popleft()
        
    def is_empty(self):
        return len(self.queue) == 0
        
    def peek(self):
        return self.queue[0]

queue = My_queue()
queue.enqueue("Queue weekdays:")
queue.enqueue("Monday")
queue.enqueue("Tuesday")
queue.enqueue("Wednesday")
queue.enqueue("Thursday")
queue.enqueue("Friday")
print(queue.dequeue())
print(queue.dequeue())
print(queue.dequeue())
print(queue.dequeue())
print(queue.dequeue())
print(queue.dequeue())

#Binery tree data structher
class Node:
    def __init__(self,key):
        self.left = None
        self.right = None
        self.val = key
    def traversePreOrder(self):
        print(self.val, end = " ")
        if self.left:
            self.left.traversePreOrder()
        if self.right:
            self.right.traversePreOrder()
