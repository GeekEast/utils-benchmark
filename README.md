### Start
- `yarn` && `yarn start`

### Result

|         Lib          |     Perf      |    size    |   stars    |       Comment       |
| :------------------: | :-----------: | :--------: | :--------: | :-----------------: |
|       `ramda`        | **143.053ms** |   **7k**   |  `18300`   |   small and fast    |
|     `Immutable`      |  `146.901ms`  |  `60.9k`   |  `29222`   |     Complicated     |
|     `Lodash/fp `     |  `159.368ms`  |  `81.8k`   | **436000** | **Simple and Fast** |
|        `ES6`         |  `369.900ms`  | `Internal` |   `Null`   |  No external libs   |
|       `Immer`        | `1098.237ms`  |  `20.4k `  |  `15300`   |   Simple but Slow   |
| `seamless-immutable` | `5578.396ms`  |   `8.4k`   |   `5200`   |      very slow      |

### Choice
- Lodash/fp

### References
- [Using Immutable.JS with Redux](https://redux.js.org/recipes/using-immutablejs-with-redux/)
