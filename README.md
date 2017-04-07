# Sailing Club

## Epicodus JavaScript Week 4 Code Review using Angular 2 CLI.

#### Demonstrate Essential Angular CLI features including dynamic routing and data stored in Firebase.

## Copyright (c)
* 2017 Benjamin T. Seaver

## Known Bugs
* No known bugs

## Support and contact details
* None

## License
* MIT

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Summarized User Story
* About page and Welcome page
* Page for all club members
* Pipe to filter club officers or all members
* Click on member to go to profile page
* Admin page to enable Add, Edit, Delete of members

## Software Prerequisites
The following is required to create or use this example.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Angular 2](https://github.com/angular/angular-cli)

## Additional Software Utilized
* [Bootstrap](http://getbootstrap.com/)

## Firebase Prerequisites to run app on your computer):
* Create your own account on Google Firebase
* Create a project on Firebase for this app, say "fundme"
* Optionally seed your project with data imported from `sample-data.json`
* Modify and Publish the app's database rules as follows:

``` JSON
{
    "rules": {
      ".read": "true",
      ".write": "true"
    }
}
```
* Click `Overview`, `Add Firebase to your Web app` and copy your project's API and other info displayed within Firebase's `var config = {...}`.

In Project root, create file: `src/app/api-keys.ts`.
Edit this file and fill with your project's API and other info as follows:

``` js
  export const masterFirebaseConfig = {
    apiKey: 'your-apiKey-here',
    authDomain: 'your-authDomain-here.firebaseapp.com',
    databaseURL: 'https://your-databaseURL-here.firebaseio.com',
    projectId: 'your-projectId-here',
    storageBucket: 'your-storageBucket-here.appspot.com',
    messagingSenderId: 'your-messagingSenderId-here'
  };
```

## Install and run
* See Essential Firebase instructions:
* `git clone <this-repository-url>`
* `cd <repository-folder>`
* `npm install`
* `bower install`
* `ng serve`
* Open browser to `localhost:4200`

## Project development plan
* Generate new Angular2 CLI project
* Initial README.md
* Integrate Twitter Bootstrap styling
* Navbar
* Home, About, Members, Admin routes
* Create sample data
* Create Firebase app and import sample data
* Display list of members
* Create filter (pipe) for members
* Display member profile
* Display list of members on Admin page
* Add new member
* Delete member
* Edit member
* Improve styling of project
* use `ng lint` to improve typescript compliance


## Commands used to create parts of project:
``` sh
  ng new club
  cd club

  bower init
  bower install bootstrap --save

  ng g component home
  ng g component members
  ng g component admin
  ng g component about
  touch src/app/app.routing.ts

  ng g class member.model
  touch sample-data.json

  touch src/app/api-keys.ts
  npm install angularfire2 firebase --save

  ng g component member-list
  ng g component profile

  ng g service member.service

  ng g pipe member

```


##### End of File
