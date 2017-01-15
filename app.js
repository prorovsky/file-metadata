var express = require('express'),
    multer = require('multer'),
    upload = multer({dest: 'uploads/'}),
    fs = require('fs'),
    app = express();

app.use(express.static('./public'));

app.get('/', function(req, res){
    res.render('index.html');
});

app.post('/get-file-details', upload.single('uploadFile'), function(req, res){
    fs.unlink(req.file.path,function(err){
        if(err){ return console.error(err) }
    });
    res.json({fileSize: req.file.size});
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server started...");
});