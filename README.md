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