const express = require("express");
const morgan = require("morgan");

const app = express();

const sayHello = (req, res, next) => {
    console.log(req.query);
    const name = req.query.name;
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

// error handler
app.use((err, req, res, next) => {
    //log error passed in
    console.log(err);
    //send error passed in
    res.send(err);
});

module.exports = app;