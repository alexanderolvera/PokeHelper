# Take Home Technical

This repository serves as Technical Assessment for practical technologies some used by our teams.

Some processes of this demo app have been simplified to keep this assessment straight forward.
If you encounter any blocking issues during the assessment, feel free to reach out.

## Getting started
To participate in this assessment, please fork this repository to your own account before cloning.
When you are finished, simply make a pull request from your fork to this repository. Your code should build cleanly and
the frontend linter should pass with no errors. Do not use eslint ignore comments. A prettier config has been added the
frontend portion of this repository for easy code style compliance.

To execute the frontend, `npm run dev`

## App Layout
The frontend is built with React and written in Typescript. The backend that will be used is section 2, is a ASP.Net API.
A postgres DB is also required to run the API. There is a Docker Compose file supplied for your convenience to quickly spin up the DB.

Below is a list of non standard modules you can expect to encounter during this assessment that you may not be familiar with. 

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- [Vite w/SWC](https://vitejs.dev/) for transpiling and packaging
- [React Hook Form](https://www.react-hook-form.com/) for form building and submission
- [OpenApi Typescript Codegen](https://github.com/ferdikoomen/openapi-typescript-codegen) for importing the backend api via openapi schema
- [Recoil.js](https://recoiljs.org/) for global state
- [React Query](https://tanstack.com/query/v3/) for making and caching api requests
- [Tailwind](https://tailwindcss.com/) for styling components as an alternative to writing css files.

## Assessment Overview

The Assessment is seperated into two main sections. A frontend focused section in Part 1 
and a mixed backend/frontend section in Part 2.

The App premises is a simple frontend implementation of PokeApi that allows users to view a list of pokemon from the api.

Your tasks are as follows
- Part 1: Add the ability to click on pokemon from the main list and navigate to a details view about that pokemon.
- Part 2: Add the ability for a logged in user to favorite pokemon saving them to a viewable list.

Below are further breakdowns of these tasks and additional information to accomplish these tasks but, there is no
specific guidelines for completing each of these sections. This assessment will be testing your intuition and ability to 
complete features with minimal business requirements.

## Part 1

The app currently has a main page that features a list of pokemon loaded from the PokeApi with very basic pagination.

Your first task will be to implement a pokemon details page. This page should have a comprehensive list of details
from the api. The manner of in which the data is displayed is up to you. This details page should be accessible by
clicking on a pokemon on the main list.

## Part 2
The app implements a very crude login functionality. Upon login with a username, the backend api will return a guid which
is loaded into global state. This can then be used to identify the user.

Your first task of this section will be to implement a favorites list for a user while they are logged in. A logged in
user should be able to select a pokemon as a favorite and it appear in a separate list for the user. Pokemon clicked on
from the favorites list should open the details view just like the main list.

Users should also be able to un-favorite any pokemon from the favorites list.

Feel free to make any changes to the database schema that you need to complete these tasks. Some rough guidelines have 
been added to the backend in the form of generic repositories but feel free to change these as you require.

### Part 2 Additional notes
A Postgres database is required for the api to operate. There is a very basic schema written and any migrations
generated will run when the api starts. There is a docker compose in the repository to help get the postgres db up 
running quickly.

The frontend has an `.env` file located in the `environments` directory. This is used to set the base url of your api.
Be sure to update this to match yours.

A common package we use is `openapi code generator`, more specifically we use one that generates code for typescript.
This allows for types to be easily generated for the frontend and also implements all endpoints as methods saving time.
These can be accessed from `/src/services/api`

To update these services after you add new endpoints or make type changes on the backend such as a DTO or response type,
simply make sure the server is running then in the ui folder run the npm script `generate:api`. You may need to update 
the port used in this script to point to your running api instance.
