const fs = require ('fs');
const path = require ('path');
const express = require ('express')

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//Direct express to the public folder. Configure static directory
app.use(express.static(path.join(__dirname, '/public')));


//Read account data
const accountData = fs.readFileSync('/src/json/accounts.json', {encoding:'utf8'});
const accounts = JSON.parse(accountData);

//Create the Index route
app.get('/', (req, res) => {
    res.render('index', {title: 'Index'})
})

//Create server
app.listen(3000, () => {
    console.log('PS Project Running on port 3000!')
});