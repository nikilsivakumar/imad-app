// add three urls and server em
// This is the source code of the server

// this is for creating the web server, handling http
var express = require('express');

// to output logs of server

var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

// These handle specific urls
// get request to the url and the following function is executed

// for content of the html pages , since no db

var articles = {
    'one' : {
        title: "Article one | Nikil Sivakumar",
        heading: "Article One",
        date: "18 Feb 2018",
        content : `                <p>
                        This is the first article
                        This is the first article
                        This is the first article
                    </p>
                    
                    <p>
                        This is the first article
                        This is the first article
                        This is the first article
                    </p>
                    
                    <p>
                        This is the first article
                        This is the first article
                        This is the first article
                    </p>`
    },
    
    'two' : {
        title: "Article Two | Nikil Sivakumar",
        heading: "Article Two",
        date: "19 Feb 2018",
        content : ` <p>
                        This is the Second article
                    </p>
                    `
    },
    
    
    'three' : {
        title: "Article Three | Nikil Sivakumar",
        heading: "Article Three",
        date: "20 Feb 2018",
        content : ` <p>
                        This is the Third article
                    </p>
                    `
    },
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    
    var htmlTemplate = `<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="Viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr>
                
                <h3>
                    ${heading}
                </h3>
                
                <div>
                    ${date}
                </div>
                
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  // pickup and send ui/index.htnl file
});

//articleName is the article one
app.get('/:articleName', function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
