# WeatherAPI

A REST API to query weather using the openweathermap.org API, developed in Node.js and TypeScript.

##### Table of Contents 
1. [Getting Started](#getting-started)
2. [Prerequisites](#prerequisites)
3. [Installing](#installing)
4. [Running the app](#running-the-app)
5. [Running the tests](#running-the-tests)
6. [Usage](#Usage)
6. [Built With](#built-with)
7. [Contributing](#contributing)
8. [Author](#author)
9. [License](#License)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need Node.js and npm (or yarn) installed on your machine.

### Installing

Clone the repository and install the dependencies:
```
git clone https://github.com/yourusername/WeatherAPI.git
cd WeatherAPI
npm install
```

You will also need to create a `.env` file in the root of the project with your API key for openweathermap.org. The file should look like this:
```
OPENWEATHER_API_KEY=your_api_key
```

### Running the app

You can run the app in development mode with the following command:
```
npm run dev
```

This will start the app and watch for changes in the source files.

You can also build the app and run it in production mode:
```
npm run build
npm start
```

### Running the tests

There are no tests for this project yet.

## Usage

The API has a single endpoint for querying the weather of a city. The endpoint is `/weather/:city` and it accepts the following query parameters:

- `units`: Specifies the units for the temperature. Can be either `metric` (Celsius) or `imperial` (Fahrenheit). Default is `metric`.
- `lang`: Specifies the language of the weather description. Can be any ISO 639-1 language code. Default is `en`.

Here are some examples of how to use the API:

- Get the weather of London in Celsius: `GET /weather/London`
- Get the weather of New York in Fahrenheit: `GET /weather/New+York?units=imperial`
- Get the weather of Tokyo in Japanese: `GET /weather/Tokyo?lang=ja`


## Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Axios](https://github.com/axios/axios)
- [Cors](https://github.com/expressjs/cors)
- [dotenv](https://github.com/motdotla/dotenv)
- [TypeScript](https://www.typescriptlang.org/)
- [TSLint](https://palantir.github.io/tslint/)

## Contributing

This project is open to contributions. If you have any ideas or suggestions, please open an issue or a pull request.

## Author

This project was created by [Sebastià Baró](https://github.com/SebastiaBaro) - [sebastiabaro@protonmail.com](mailto:sebastiabaro@protonmail.com) as a personal project to learn and practice Node.js and TypeScript.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.