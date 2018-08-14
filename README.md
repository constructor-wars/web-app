# Constructor Wars

## Constructor Wars Web Application

Coding challenges designed for Constructor Labs students. Student can log in and practice on exercises tailored for the course to order to practice. This application features profile page to monitor learning progress, useful links for Constructor Labs syllabus for references, search field for more information on specific topic on MDN and monaco editor to run codes on broswer, and admin page to update the exercise database.

---

<img  width ="600px" src="./presentation/screenshots/screenshot1.png" alt="login Page"></img>
<img  width ="600px" src="./presentation/screenshots/screenshot1.png" alt="dashboard"></img>
<img  width ="600px" src="./presentation/screenshots/screenshot1.png" alt="code editor" ></img>

---

## Constructor Wars App is available on

> [Constructor Wars] ('//insert live Heroku link here')

---

to run application

```
npm run go
```

to run test

```
npm run test
```

to run it without server

```
npm run styling
```

---

## Technologies used:

- React & redux
- Monaco Editor
- iFrame
- Postgres Database
- Express server
- github OAuth authorisation for login

## Team

James //insert contact details!
Rafal
Ethan ([@ethanng329](https://twitter.com/Ethanng329))
Julius
Jose

## potential features and extension
 
- use pupeteer to run test on the whole application
- alternative log in methods
- higher test coverage
- explore graphQL?






## github-instructions

1.  Add and commit changes on working branch.
2.  `git checkout master` and then `git pull --rebase` on master branch.
3.  On working branch `git merge origin master`
4.  `git checkout <branchname>` - run `npm run dev` and check web app is working, might need to do `npm i`.
5.  If there is no conflicts - `git push --set-upstream origin <branchname>`.
6.  Merge it only Github (IMPORTANT: Only merge with papa James present.)
7.  Delete branches you are not working on from github and localy. `git branch -D <branchname>`
