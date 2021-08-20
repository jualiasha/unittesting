# Dice class (API)

This is dice class for dice games. Dice holds the number of dots. The number of dots is between 1 and given upper bound (included). The maximum upper bound is 20. If the dice hasn't been rolled, the number of dots is 0.

After the dice has been rolled, the dot count can't become 0.

## Operations

### **constructor**

- initializes the dice with upper bound that is passed as parameter
- if no upper bound is given, the default upper bound is 6
- initializes dot count to 0

- if upper bound is not integer, throw an exception `'upper bound must be an integer'`

- if the upper bound is not between 1 and 20, an exception is thrown :
  - upper bound>20: `'Upper bound too big'`
  - upper bound<1: `'Upper bound too small'`

### **methods**

#### **roll**

- rolls the dice
- when rolled, the dot count become a random number between 1 and upper bound(included)
- returns nothing

#### **toString**

- returns dot count as a string. For example: `'4'`
- if the dice hasn't been rolled yet, returns a text `'Not rolled yet'`

### **GEtter**

#### **dots**

- returns the number of dots

#### **minimumValue**

- returns the lower bound of a dice. It should be 1...

#### **maximumValue**

- returns the upper bound of a dice.
