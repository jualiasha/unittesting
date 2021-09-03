# Test cases

Before tests create phoneRegister object from the class PhoneRegister

## **getAllNumbers()**

Returns all phone numbers in an array, each as an object of form:

```json
{ "firstname": "", "lastname": "", "phones": [] }
```

The phone object in phones array is of form:

```json
{ "type": "", "number": "" }
```

If a person doesn't have a phone (yhe phone-field is an empty array), then the person is not added into the result array. If all phones are missing, an empty array is returned.

Before tests create phoneRegister object from the class PhoneRegister

### Test case 1: get all with default data

```js
phoneRegister.getAllNumbers();
```

result is:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "work", "number": "01478965" },
      { "type": "work", "number": "0000000000" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "mobile", "number": "13456789" },
      { "type": "work", "number": "32165498" }
    ]
  }
]
```

### Test 2: some phones missing

Test data:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "work", "number": "01478965" },
      { "type": "work", "number": "0000000000" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  }
]
```

```js
phoneRegister.getAllNumbers();
```

returns:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "work", "number": "01478965" },
      { "type": "work", "number": "0000000000" }
    ]
  }
]
```

### Test 4: all phones missing

test data:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  }
]
```

```js
phoneRegister.getAllNumbers();
```

returns an empty array [].

### Test 5: if all persons and phones are missing

test data:

```json
[]
```

```js
phoneRegister.getAllNumbers();
```

returns an empty array [].
