# Test cases for dice

This is dice class for dice games. Dice holds the number of dots. The number of dots is between 1 and given upper bound(=max number of dots) (included). The maximum upper bound is 20. The minimum (number of sides) upper bound is 2. If the dice hasn't been rolled, the number of dots is 0.

After the dice has been rolled, the dot count can't become 0.

## Operations

### **constructor**

- initializes the dice with upper bound that is passed as parameter
- if no upper bound is given, the default upper bound is 6
- initializes dot count to 0
- dot count is between 1 and 6
- if upper bound is not integer, throw an exception `'upper bound must be an integer'`

- if the upper bound is not between 1 and 20, an exception is thrown :
  - upper bound>20: `'Upper bound too big'`
  - upper bound<1: `'Upper bound too small'`

#### Test cases for constructor

1. Create a dice with no upper bound

- creates a dice with dot count between 1 and 6
- dot count is 0

2. Create a dice with given upper bound 2-20

   - creates a dice with dot count between 1-upper bound
   - dot count is zero (tested in test case 1)

   -

3. Test the exceptions

- 0 throws an exception `'Upper bound too small'`
- 1 throws an exception `'Upper bound too small'`
- -1 throws an exception `'Upper bound too small'`
- 21 throws an exception `'Upper bound too big'`
- 'a' throws an exception `'upper bound must be an integer'`
- 2.5 throws an exception `'upper bound must be an integer'`

### **methods**

#### **roll()**

- rolls the dice
- when rolled, the dot count become a random number between 1 and upper bound(included)
- returns nothing

#### test cases for roll

- create a dice with no upper bound. Upper bound should be 6. When the dice hasn't been rolled yet dot count is 0. Then roll the dice and now dot count should be between 1 and 6.

- create a dice with upper bound 20 => after rolled results dot count between 1 and 20

#### **toString()**

- returns dot count as a string. For example: `'4'`
- if the dice hasn't been rolled yet, returns a text `'Not rolled yet'`

#### test cases for toString()

In both cases create a new dice (no upper bound). Roll the dice and compare result string with dots number

- Roll the dice and compare the result string with dots
- don't roll the dice. Compare result to `'Not rolled yet'`

### **Getter**

#### **dots**

- returns the number of dots

#### **minimumValue**

- returns the lower bound of a dice. It should be 1...

#### **maximumValue**

- returns the upper bound of a dice.
