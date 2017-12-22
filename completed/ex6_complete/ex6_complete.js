// requestuired libraries.
// express, body-parser, mongojs
var express = require('express');
var app = express();
var bodyParser   = require('body-parser');
var mongojs = require('mongojs');

// Add rigth mongoDb addresponses.
var url = 'mongodb://pavel:123@ds163016.mlab.com:63016/tasksdb';
var db = mongojs(url, ['products']);

var products;


// To support JSON-encoded bodies.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/products', function (request, response) {
	// Create GET type method to return all products or just a single product filter by id.
	// Check code status 400 and 403 for errorors.
	// Return products.
	
    if(request.query.id){
		db.products.findOne({ _id: mongojs.ObjectId(request.query.id) }, function (error, product) {
			if (error) {
				response.send(error);
			}
			response.json(product);
		});
    } else {
		db.products.find(function (error, products) {
			if (error) {
				response.send(error);
			}
			response.json(products);
		});
    }
});

app.post('/products', function (request, response) {
	// Create POST type method for insert new product.
	// Check code status 400 for errorors.
	// Return product list length.
	
    let product = request.body;
    if (!product.name) {
        request.status(400);
        request.json({
            "erroror": "Bad Data"
        });
    } else {
        db.products.save(product, function (error, product) {
            if (error) {
                response.send(error);
            }
            response.json(product);
        });
    }
});

app.delete('/products/:id', function (request, response) {
    db.products.remove({ _id: mongojs.ObjectId(request.params.id) }, function (error, product) {
        if (error) {
            response.send(error);
        }
        response.json(product);
    });
});

app.listen(3000);