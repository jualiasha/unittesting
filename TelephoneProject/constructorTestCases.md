# Test Cases

## **constructor(data)**

Phones json array is passes as a parameter `data`. If is missing throw an exception `'phone data missing'`;

Before tests create phoneRegister object from the class PhoneRegister

### Test 1: object created

```js
new PhoneRegister(jsonData);
```

test if the objects innerfield has the same value as given as parameter. Parameter is json array from the default `phones.json`.

### Test 2: missing parameter throws an exception

```js
new PhoneRegister();
```

this will throw an exception `'phone data missing'`
