### Start
- `yarn` && `yarn start`

### Result

|         Lib          |     Perf     |     size     |   stars    |       Comment       |
| :------------------: | :----------: | :----------: | :--------: | :-----------------: |
|     `Immutable`      | **11.193ms** |   `60.9k`    |  `29222`   |     Complicated     |
|     `Lodash/fp `     |  `13.647ms`  |   `81.8k`    | **436000** | **Simple and Fast** |
|        `ES6`         |  `22.342ms`  | **Internal** |   `Null`   |  No external libs   |
|       `Immer`        |  `80.092ms`  |   `20.4k `   |  `15300`   |   Simple but Slow   |
| `seamless-immutable` | `583.588ms`  |    `8.4k`    |   `5200`   |      very slow      |

### Choice
- Lodash/fp

### References
- [Using Immutable.JS with Redux](https://redux.js.org/recipes/using-immutablejs-with-redux/)
