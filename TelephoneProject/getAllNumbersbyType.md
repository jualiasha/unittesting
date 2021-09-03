# Test Cases

## **getAllNumbersByType(type)**

Returns an array of objects consisting of names and numbers of given type. If no number of given type os found it return an empty array [].
If a persone have multiple numbers of the same type, each of them will be init's own object.

If a parameter is missing, the function throws an exception:
**`'missing parameter'`**.

The format of returned object is:

```json
[
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } },
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } }
]
```

Before tests create phoneRegister object from the class PhoneRegister

### Test case 1: get all number by type work:

```js
phoneRegister.getAllNumbersByType("work");
```

returns:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "01478965" }
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "0000000000" }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "work", "tel": "32165498" }
  }
]
```

### Test 2: get all mobile numbers

```js
phoneRegister.getAllNumbersByType("mobile");
```

returns:

```json
[
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "mobile", "tel": "32165498" }
  }
]
```

### Test 3: type 'x' will return an empty array []

```js
phoneRegister.getAllNumbersByType("x");
```

returns [].

### Test 4: missing parameter throws an exception

```js
phoneRegister.getAllNumbersByType();
```

throws an exception 'missing parameter'
