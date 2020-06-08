# authenticationValidation
This is used to validate users' sessions with an app. See the readme for more.

## How To Use
```
#app.js

const express = require("express");
const app = express();

const authValidation = require("./path/of/authencticationValidation");

//will automatically proceed to the rest of your code if the user 
//has been authenticated. Otherwise, the user will receive an error and code execution will stop.
app.use(authValidation) 

#the rest of your code
```
