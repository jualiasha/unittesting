# Test Cases

## ''getTypes()\*\*

returns all phone types in an array. The type is added to the result array only once. If there is no phones or no persons, an empty array [] is returned

For example:

```json
["home", "work", "mobile"]
```

Before tests create phoneRegister object from the class PhoneRegister

### Test 1: default jsonData

get types of the default jsonData

returns

```json
["home", "work", "mobile"]
```

### Test 2: persons have no phones

Test data:

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

returns an empty array []

### Test case 3: no persons in PhoneRegister

Test data:

```json
[]
```

returns an empty array []
