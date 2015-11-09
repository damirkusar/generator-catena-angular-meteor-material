# Catena - the yeoman-generator for fullstack AngularJS & Meteor apps

Catena is a chain of craters.

`Meteor, AngularJS, Angular-UI, Angular-Material, User handling, Velocity, Jasmine & NightWatch out of the box.`

## Prerequisites

To run a [Meteor][meteor] application, we have to install Meteor on our machine.

On Mac & Linux you can do this:
```bash
curl https://install.meteor.com/ | sh
```

and on Windows, install it via the official [Meteor installer][meteorinstaller]


To clone the repository, you will need git. You can download and install git from [http://git-scm.com/](http://git-scm.com/).

To be able to install the node packages, you will need to install node.js and its package manager (npm).
You can download and install node.js from [http://nodejs.org/](http://nodejs.org/).

You will also need to have yeoman installed:

```bash
npm install -g yo
```

and starrynight to run our browser tests:

```bash
npm install -g starrynight
```

## Getting Started

To get started, just install the catena generator & run it.

```bash
npm install -g generator-catena-angular-meteor-material
```

### Create new project with the Catena Generator

To create a new project create an empty folder and change directory

```bash
mkdir myNewProject
cd myNewProject
```

then run the generator and follow the questions.

```bash
yo catena-angular-meteor-material
```

### Run the Application

To start your new project, simply run Meteor. Meteor will install all dependencies and run your project.

```bash
meteor
```

Now browse to the app at `http://localhost:3000`.

### Demo Module

If you have selected that you want to generate a demo module, the tweet module in client and server is created. You can browse it via. To create a tweet, you have to be logged in. Either create a new one, or use the admin user which was created on first startup.

`http://localhost:3000/tweets`.

## Sub-Generators

As soon you have created your application, you can create modules & angular modules.

For all Sub-Generators you will have to provide a name.
You can do that by a single word or if you have more words add it between ""

### Create Module (Client & Server)

This module creates the angular module, a default collection, server code and tests skeletons.

```bash
yo catena-angular-meteor-material:module newModule
```

or

```bash
yo catena-angular-meteor-material:module "new Module"
```

### Create Angular Module (Client)

This module creates the angular module and tests skeletons for client and nightWatch.

```bash
yo catena-angular-meteor-material:angular-module newModule
```

or

```bash
yo catena-angular-meteor-material:angular-module "new Module"
```

## Testing

This project uses [Velocity][velocity], [Jasmine][jasmine] & [NightWatch][nightWatch] for testing.

### Running Jasmine Tests

Since [Meteor][meteor] & our application uses [Velocity][velocity], the [Jasmine][jasmine] tests are run automatically. You will recognize a dot in the upper right corner.

### Running NightWatch Tests

Our application uses also NightWatch for browser automated tests. I have setup NightWatch with starrynight, so to run it, we run this command in another terminal window. Your application should be running with Meteor.

```bash
starrynight run-tests --framework nightwatch
```

## FAQ

### Mac OS
- If you are using Mac OS X El Capitan, be sure you have installed all updates from the App Store.

#### Why can I not run my NightWatch tests?
- Try to install and start Xcode from the App Store: https://itunes.apple.com/ch/app/xcode/id497799835?mt=12
- Update your Java version from: https://support.apple.com/kb/DL1572?locale=en_US or https://www.java.com/de/

#### UI does not update my Jasmine test and I don't know if they are run successfully?
- Try just execute the tests with:
```bash
meteor --test
```
- It takes some time to start the mirrors, it's faster for unit tests than for integration tests

## Feedback & Improvements

If you miss something or you think i should change or add some feature, please let me know.

## Donation

If you like this seed and you think it is worth to donate something, please feel free to do that via the following link:

[Donate via Paypal][donate]

## Contact

For more information & contact form please check out [http://kusar.ch][kusar] or [http://damirkusar.ch][damirkusar]

## License
The MIT License (MIT)

Copyright (c) 2015 Damir Kusar: damir@kusar.ch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.





[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[velocity]: https://velocity.readme.io
[nightWatch]: http://nightwatchjs.org
[meteor]: https://www.meteor.com
[meteorinstaller]: https://install.meteor.com/windows
[donate]: https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=damir%40kusar%2ech&lc=US&item_name=Damir%20Kusar&currency_code=USD&bn=PP-DonationsBF%3abtn_donate_LG%2egif%3aNonHosted
[kusar]: http://kusar.ch/
[damirkusar]: http://damirkusar.ch/
