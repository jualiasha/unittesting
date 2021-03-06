# Test cases

## **getNumbersByType(firstname, lastname, type)**

Method returns an array of phone numbers of the given type belonging to given persone with given `firstname` and `lastname`

If no persone with given name is found, an empty array is returned. If no number with given type is found, an empty array [] is returned.

If at least one parameter is missing an exception `'missing parameter'` is thrown.

For example Leila Hökki and work:

```json
["01478965", "0000000000"]
```

Before tests create phoneRegister object from the class PhoneRegister

### Test 1: get from default jsonData with parameters Leila Hökki work

```js
phoneRegister.getNumbersByType("Leila", "Hökki", "work");
```

returns

```json
["01478965", "0000000000"]
```

## Test 2: get from default jsonData with parameters Matt River mobile

```js
phoneRegister.getNumbersByType("Matt", "River", "mobile");
```

returns

```json
["13456789"]
```

### Test 3: wrong type or name returns an empty array

```js
phoneRegister.getNumbersByType("Matt", "River", "x");
phoneRegister.getNumbersByType("Matt", "x", "mobile");
phoneRegister.getNumbersByType("x", "River", "mobile");
```

### Test 4: missing parameter throws an exception

```js
phoneRegister.getNumbersByType("Matt", "River");
phoneRegister.getNumbersByType("Matt");
phoneRegister.getNumbersByType();
```
