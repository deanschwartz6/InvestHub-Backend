## Basic Server Setup

``` npm init -y ```

#### To get node project initialized

``` npm install express ```

#### To install the latest version of express

``` npm i nodemon --save-dev ```

#### To install nodemon to auto reload the server without starting and stopping

``` npm i morgan ```

#### To install morgan to show status codes in the terminal on each request
##### 1. Require morgan at the top of app.js just under express
##### 2. Replace current logging if there with the use of ``` app.use(morgan('dev')); ``` at the top of the use declarations

### Knex Setup

``` npm install knex pg ```

#### To install knex dependencies

``` npx knex init ```

#### To initialize knex and create knexfile.js
##### 1. Change development -> client to postgresql
##### 2. Change development -> connection to db instance ( next step )

``` npm install dotenv ```

#### To install dotenv
##### 1. In knexfile.js add ``` require("dotenv").config(); ```
##### 2. After dotenv config add ``` const { DATABASE_URL } = process.env; ```
##### 3. Add DATABASE_URL variable to development -> connection

### Knex Migration

#### Setup src/db folder and create connection.js in that folder with the connection code
#### In your knexfile.js add path to the top and add a migrations path to development
#### Run db migrations in terminal with ``` npx knex migrate:make migration_name ```
#### Execute migrations manually with ``` npx knex migrate:latest ```
#### To undo the latest migration batch run ``` npx knex migrate:rollback ```

### Seeding Data

#### First go to knexfile.js and add seeds in development, then add the directory to store the seeds
#### Run ``` npx knex seed:make seed_name ``` to create a seed
#### Edit seed to fit needs
#### Run ``` npx knex seed:run ``` to execute seeds

### Using Cors

#### Install cors with ``` npm install cors ```
#### Use by reqiring in app.js and using it before ``` app.use(express()); ```



