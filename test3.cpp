#include <iostream>
#include <string>
#include <fstream>

class SimpleClass {
private:
    int number;
public:
    // Constructor
    SimpleClass() {
        number = 0;
    }

    // Constructor with parameter
    SimpleClass(int initialValue) {
        number = initialValue;
    }

    // Setter method
    void setNumber(int newValue) {
        number = newValue;
    }

    // Getter method
    int getNumber() const {
        return number;
    }

    // A simple member function
    void printNumber() const {
        std::cout << "Number: " << number << std::endl;
    }
};

int main() {
    // Create an instance of the SimpleClass
    SimpleClass obj1;
    
    // Use setter to set the value of the number
    obj1.setNumber(42);

    // Use getter to retrieve the value of the number
    int num = obj1.getNumber();
    std::cout << "Retrieved Number: " << num << std::endl;

    // Use the member function to print the number
    obj1.printNumber();

    int finput;
    int thinput;

    std::cout << "Welcome to lerning CPP" << std::endl;
    std::cin >> "Enter your age: " >> finput >> std::endl;
    void mainfun() {
        if (finput = char || bool){
            std::cout << "Cannot be enter" << std::endl;
        } else {
           std::cout << "success" << std::endl;
        };
    };
    
};
