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
