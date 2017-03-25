// Required libraries.
// express, body-parser.
var mongojs = require('mongojs');

// Add rigth mongoDb address.
var url = '...';
var products;

// connection to mongodb

// To support JSON-encoded bodies.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	// Creating method return default black page.
	// Return html.
});

app.get('/products', function (req, res) {
	// Create GET type method to return all products or just a single product filter by id.
	// Check code status 400 and 403 for errors.
	// Return products.
});

app.post('/products', function (req, res) {
	// Create POST type method for insert new product.
	// Check code status 400 for errors.
	// Return product list length.
});

app.listen(3000);
