# authenticationValidation
This is used to validate users' sessions with an app. See the readme for more.

## How To Use
```
#app.js

const express = require("express");
const app = express();

const authValidation = require("./path/of/authencticationValidation");

app.use(authValidation)
//will automatically proceed to the rest of your code if the user 
//has been authenticated. Otherwise, the user will receive an error and code execution will stop.

#the rest of your code
```

## Dependencies
This module is to be used within an Express application, and depends on Request.js, which you will need to add to your project's `package.json`. This might be able to be implemented using a framework other than Express, but it will likely need to be modified. 
