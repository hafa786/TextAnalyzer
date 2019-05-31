# TextAnalyzer
A simple implementation of REST Api endpoint to analyze text using Expressjs. 

### Testing 

```
node api/test.js

```

### Deployment 

This REST api is deployed on Heroku. To check api, you can use any api checker tool for Example Postman

```
#   Url =  https://hafiz-text-analyzer.herokuapp.com/textanalyzer/
#   Method : POST
#   Header data , text = "hello 2 times  "
#   Response:
    {"textLength":{"withSpaces":15,"withoutSpaces":11},"wordCount":3,"characterCount":[{"e":2},{"h":1},{"i":1},{"l":2},{"m":1},{"o":1},{"s":1},{"t":1}]}
```

### File Structure

```
# api
    # endpoint.js         # main expressjs REST api endpoints.
    # functions.js        # include all the functions use for endpoints and test case.
    # test.js             # test file for short test cases.
# Procfle                 # the main procfile use for deployment.
```