# Code Assessment API

A small web service for potential hires to consume in the performance of their code assessments.

## Setup

### Config

The server checks for two environment variables:

* `PORT` - The port to listen on, defaults to `3000`.
* `HOST` - The host to listen on, defaults to `localhost`.

### Running The Server

```sh
$ # Get the dependencies
$ yarn
$ # Start the server 
$ yarn start
```

## API

### GraphQL Interface (preferred)

The GraphQL interface to the products data can be accessed at `/graphql`. 

Documentation is available via the interactive GraphQL debugger. You can access it by visiting the above path in your web browser.

### REST Interface

The REST interface to the products data can be accessed at `/rest`. The response type for each is `application/json`.

Two endpoints are currently exposed:

* GET `/rest/products/` - returns an array of all products  
* GET `/rest/products/{id}` - returns a product with the specified ID, or HTTP `404` if the product is not found.