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

returns all phone types in an array. The type is added to the result array only once. If there is no phones or persons, an empty array [] is returned

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

### Example type work:

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

## **getName(number)**

The method searches the given phone number from the telephone registry. IF the number is found the method returns an json object of form

```json
{ "firstname": "", "lastname": "" }
```

If no phone with given number is found, the method returns `null`. If the parameter is missing null is also returned.
