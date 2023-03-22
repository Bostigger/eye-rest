# Eye Rest

Eye Rest is a simple Node.js package that helps you remember to take a break and rest your eyes while working on the computer.


## Installation

```sh
npm install eye-rest
```


Installation
You can install Eye Rest using the above command:


# Usage
To use Eye Rest, simply require the package in your Node.js application and call the startTimer function:

```sh
const eyeRest = require('eye-rest');

eyeRest();
By default, Eye Rest will remind you to take a break every 60 seconds (1 minute). You can customize the interval by passing a number (in milliseconds) as an argument to the startTimer function:


// Remind to take a break every 1 hour
eyeRest({ breakInterval: 60 * 60 * 1000 });
When it's time to take a break, Eye Rest will display a notification prompting you to take a break.
```
# License
Eye Rest is released under the MIT License. See LICENSE for details.

# Contributing
Contributions are welcome! If you have any ideas for new features or improvements to the code, please open an issue or submit a pull request.
