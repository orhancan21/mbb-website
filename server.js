import express from 'express';
const app = express();
app.set('view engine', 'html');
app.use(express.static(__dirname + '/pages'));


app.get('/', (req,res) =>{
	res.render('index')
})
app.get('/*', (req,res) =>{
	res.render('404')
})
const port = process.env.PORT || 5656;
app.listen(port, () => {
})
