# calc library API

## **sum(a,b)**

Function returns the sum of two numbers. Numbers are passed to the function as parameters.

Returns the sum on given numbers

- if parameter is missing, throw an exception: 'parameter is missing'
- if parameters are not numbers, throw an exception 'only numbers allowed'

## Test cases

Note that test case descriptions are usually in their own file but for the sake of simplicity, we are keeping everything in one file

### Integers

- sum(1,1) return 2
- sum (2,3) return 5
- sum (-2,-4) return -6
  -sum (-2,4) return 2