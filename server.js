var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    'articleone':{
    title:' Article-one-Abhijith',
    heading:'Article one',
    content:`   
    <p>This is content for my first article This is content for my first article This is content for my first article This is content for my first article
      </p>
       <p>This is content for my first article This is content for my first article This is content for my first article This is content for my first article
       </p>
       <p>This is content for my first article This is content for my first article This is content for my first article This is content for my first article
       </p>`},
      'articletwo':{ 
       title:' Article-two-Abhijith',
    heading:'Article two',
    content:`
          <p>This is content for my second article.
        </p>`},
        'articlefour':{ title:' Article-four-Abhijith',
    heading:'Article four',
    content:`
         <p>This is content for my fourth article.
        </p>`},
      };
        function createtemplate(data){
          var title=data.title;
          var heading=data.heading;
        var content=data.content;
var htmlcontent=`
<!doctype html>
<html>
<head>
    <title>
     ${title}
    </title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
 <link href="/ui/style.css" rel="stylesheet" />
</head>
<body><div>
    <a href="/">home</a>
</div>
  <div class="container">
    <hr />
    <h1>
        ${heading}
    </h1>
    <div>
        aug 23, 2017
    </div>
    <div>
       ${content}
    </div>
    </div>
</body>
</html>`;
return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
     res.send(createtemplate(articles[articleName]));
});
app.get('/article-two',function(req,res){
        res.sendFile(path.join(__dirname, 'article-two.html')); 
});
app.get('/article-four',function(req,res){
     res.sendFile(path.join(__dirname, 'article-four.html'));
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
