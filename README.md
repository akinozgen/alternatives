# alternatives
Some alternative implementations for common interfaces, classes etc.

1. ### React Native AsyncStorage Alternative

[goto file](https://github.com/akinozgen/alternatives/blob/master/asyncstorage-alt.js)

Data reading usage:
```javascript
import { getItem, setItem } from 'asyncstorage-alt';

async function readData() {
  const values = {};
  
  values['get_via_array'] = await getItem(['id', 'name', 'email']);
  values['get_directly'] = await getItem('id');
  console.log(values);
}

```
Output:

```json
{
  "get_via_array": {
    "id": 1,
    "name": "Akın Özgen",
    "email": "akinozgen17@outlook.com"
  },
  "get_directly": 1
}
```

Data writing usage:
```javascript
import { getItem, setItem } from 'asyncstorage-alt';

async function writeData() {
  // Multi definition
  await setItem({ id: 1, name: 'Akın Özgen', email: 'akinozgen17@outlook.com' });
  // Single definition
  await setItem('id', 1);
}
```

2. ### php's http_build_query for key-value pair objects

[goto file](https://github.com/akinozgen/alternatives/blob/master/http_build_query.js)

```javascript
import http_build_query from 'http_build_query';

const loginPayload = {
  username: 'root',
  password: 'toor'
};

console.log(http_build_query(loginPayload));
```
Output:

```raw
username=root&password=toor
```

3. ### NodeList to Array

[goto file](https://github.com/akinozgen/alternatives/blob/master/nodelist_to_array.js)

```javascript
import n2a from 'nodelist_to_array.js';

const rows = document.querySelectorAll('tr');

console.log(n2a(rows));
```

4. ### Insister <small>(really annoying)</small>

[goto file](https://github.com/akinozgen/alternatives/blob/master/insister.js)

```javascript
import ins from 'insister.js';

// Parameters:
//  (ins): insister (which is this function)
//  (_ => prompt("Accept?") !== "yes"): condition (if returns false, function repeats itself)
//  (_ => alert("Thanks")): callback (runs if condtion is true)

ins(ins, _ => prompt("Accept?") !== "yes", _ => alert("Thanks"));

```
