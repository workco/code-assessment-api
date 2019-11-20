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

## Schema

Products returned by this service have the following schema:

```javascript
{
    "id": Number,
    "title": String,
    "price": {
      "value": Number,
      "currency": String
    },
    "inventory": Number,
    "images": [
      {
        "src": String,
        "type": String
      }
    ]
}
```

The service also returns a price breakdown for a list of cart items:

```javascript
{
    "subtotal": {
      "value": Number,
      "currency": String
    },
    "tax": {
      "value": Number,
      "currency": String
    },
    "total": {
      "value": Number,
      "currency": String
    }
}
```

## API

### GraphQL Interface (preferred)

The GraphQL interface to the products data can be accessed at `/graphql`.

Documentation is available via the interactive GraphQL debugger. You can access it by visiting the above path in your web browser.

### REST Interface

The REST interface to the products data can be accessed at `/rest`. The response type for each is `application/json`.

Two endpoints are currently exposed:

* GET `/rest/products/` - returns an array of all products
* GET `/rest/cart` - calculates subtotal, tax, and total for cart items provided as a query param, eg `/rest/cart?items=[{"id":1,"count":1},{"id":2,"count":2}]`