const express = require("express");
const morgan = require("morgan");

const app = express();

const sayHello = (req, res, next) => {
    console.log(req.query);
    const {name} = req.query;
    const content = name ? `Hello, ${name}!` : "Hello!";
    res.send(content);
};

const saySomething = (req, res) => {
    const greeting = req.params.greeting;
    const content =  `${greeting}!`;
    res.send(content);
}

app.use(morgan('dev'));

// go to /hello to see output
app.get('/hello', sayHello);

// go to /say/<AnyGreeting> to see output
app.get('/say/:greeting', saySomething);

// go to /songs?title=<TitleName> to see output
app.get('/songs', (req,res) => {
    //store req title to variable from params
    const title = req.query.title;
    //send title
    res.send(title);
});

// go to /states/<StateAbbreviation> to see output
app.get('/states/:abbreviation', (req, res, next) => {
    //store req abbreviation to variable from params
    const abbreviation = req.params.abbreviation;

    //validate if the abbreviation is only a length of two
    if(abbreviation.length !== 2){
        //call the error handler and pass in error
        next('State abbreviation is invalid.');
    } else {
        //send validated abbreviation
        res.send(`${abbreviation} is a nice state, I'd like to visit.`);
    }
});

// application level middleware to vaidate birth year 
const birthYearValidation = (req, res, next) => {
    //store year from params
    const year = req.params.year;
    //validate year character length and not in future
    if(year.length !== 4 || Number(year) > 2023){
        //call error handler with provided error
        next('Birth year is invalid.');
    } else {
        //run the next middleware
        next();
    }
}

//validation example
app.get('/birthyear/:year', birthYearValidation, (req, res, next) => {
    res.send(`I wish I was born in ${req.params.year}!`);
});

//error handling if there is no matching route
app.use((req, res, next) => {
    res.send('That route could not be found.');
});

// error handler
app.use((err, req, res, next) => {
    //log error passed in
    console.log(err);
    //send error passed in
    res.send(err);
});

module.exports = app;