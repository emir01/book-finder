# Book Trove

A simple book search application using the Google Books API, Angular and RxJs.

## Running the App with ng Serve

The default `ng-serve` configuration has been ovveriden in `angular.json` to run using the `dev` environment.

To run the application a Google Books API key is required. After creating one following the instructions [here](https://developers.google.com/books/docs/v1/using) you will need to create an `\environments\environment.dev.ts` configuration file based on the `environment.ts`  config and replace the `API_KEY_HERE` with the actual value!
