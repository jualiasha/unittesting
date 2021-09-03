# Test Cases

## **getName(number)**

The method searches the given phone number from the telephone registry. IF the number is found the method returns an json object of form

```json
{ "firstname": "", "lastname": "" }
```

If no phone with given number is found, the method returns `null`. If the parameter is missing null is also returned.

Before tests create phoneRegister object from the class PhoneRegister

### Test 1: get name of the number "12345678"

Call

```js
phoneRegister.getName("12345678");
```

returns

```json
{ "fristname": "Leila", "lastname": "Hökki" }
```

### Test 2: get names by numbers from default data

```js
const testValues = [
  ["12345678", { fristname: "Leila", lastname: "Hökki" }],
  ["01478965", { fristname: "Leila", lastname: "Hökki" }],
  ["12345679", { fristname: "Matt", lastname: "River" }],
];
```

### Test 3: wrong number

Call

```js
phoneRegister.getName("0000");
```

returns `null`

### Test 4: parameter missing

Call

```js
phoneRegister.getName();
```

returns `null`
