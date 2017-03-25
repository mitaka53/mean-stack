// Required libraries.
// npm install mocha chai request express --save
var expect = require('chai').expect;
var request = require('request');
require('../hol4.js');

describe('Get all products', function () {
	// Used to store the result.
    let result;
	
    // First we call the service.
    before(function (done) {		
        // Configure the call with content-type and uri.
        let options = {
            headers: { 'Content-Type': 'application/json'},
            uri: 'http://localhost:3000/products',
            json: {}
        };
		
        // Make call
        request.get(options, function (err, res, body) {
            result = {err, res, body};
            done();
        });
        
    });
	// Catch all conditions.
	// Conditions: Errors, Status Code 200, Return more then 3 items.
    it('should execute without errors', function (done) {
       expect(result.err).to.equal(null);
       done();
    });
    it('should return an http status 200', function (done) {
       expect(result.res.statusCode).to.equal(200);
       done();
    });
    it('should return three items', function (done) {
       expect(result.body.length).to.equal(3);
       done();
    });
});
describe('Get one product', function () {
	// Used to store the result.
    let result;
    
    before(function (done) {
		// Configure the call with content-type and uri.
        // Make call.
        request.get('http://localhost:3000/products?id=3', function (err, res, body) {
            result = {err, res, body};   
            done();
        });
        
    });
	// Catch all conditions.
	// Conditions: Errors, Status Code 200, Return one specific product.
    it('should execute without errors', function (done) {
       expect(result.err).to.equal(null);  
       done();
    });
    it('should return an http status 200', function (done) {
       expect(result.res.statusCode).to.equal(200);
       done();
    });
    it('should return 'Dajm'', function (done) {
       expect(result.body[0].name).to.equal('Dajm');
       done();
    });
});
describe('Add one product', function () {
	// Used to store the result.
    let result;
    
    before(function (done) {
		// Configure the call with content-type and uri.
        // Make call.
        let options = {
            headers: { 'Content-Type': 'application/json'},
            uri: 'http://localhost:3000/products',
            json: {
                id: 4,
                name: 'Fransk norgat',
                price: 8.2
            }
        };
        request.post(options, function (err, res, body) {
            result = {err, res, body};    
            done();
        });
        
    });
	// Catch all conditions.
	// Conditions: Errors, Status Code 200.
    it('should execute without errors', function (done) {
       expect(result.err).to.equal(null);
       done();
    });
    it('should return an http status 200', function (done) {
       expect(result.res.statusCode).to.equal(200);
       done();
    });
});
describe('Get all products again', function () {
	// Used to store the result.
    var result;
    
    before(function (done) {
		// Configure the call with content-type and uri.
        // Make call.
        request.get('http://localhost:3000/products', function (err, res, body) {
            result = {err, res, body};  
            done();
        });
        
    });
	// Catch all conditions.
	// Conditions: Status Code 200, Get the count of the item + 1.
    it('should execute without errors', function (done) {
       expect(result.err).to.equal(null);
       done();
    });
    it('should return an http status 200', function (done) {
       expect(result.res.statusCode).to.equal(200);
       done();
    });
    it('should return four items', function (done) {
       expect(result.body.length).to.equal(4);
       done();
    });
});
