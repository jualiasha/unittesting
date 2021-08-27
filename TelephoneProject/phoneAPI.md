# Phone API

## data

Data will be in a json file

### phones.json

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

## Class PhoneRegister

## **constructor(data)**

Phones json array is passes as a parameter `data`. If is missing throw an exception `'phone data missing'`;

## ''getTypes()\*\*

returns all phone types in an array. The type is added to the result array only once. If there is no phones, an empty array [] is returned

For example:

```json
["home", "work", "mobile"]
```

## **getNumbersByType(firstname, lastname, type)**

Method returns an array of phone numbers of the given type belonging to given persone with given `firstname` and `lastname`

If no persone with given name is found, an empty array is returned

If at least one parameter is missing an exception `'missing parameter'` is thrown.

For example Leila Hökki and work:

```json
["01478965", "0000000000"]
```
