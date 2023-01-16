# WeatherAPI

A REST API to query weather using the openweathermap.org API, developed in Node.js and TypeScript.

##### Table of Contents 
1. [Getting Started](#getting-started)
2. [Prerequisites](#prerequisites)
3. [Installing](#installing)
4. [Running the app](#running-the-app)
5. [Running the tests](#running-the-tests)
6. [Built With](#built-with)
7. [Usage](#Usage)
8. [Contributing](#contributing)
9. [Author](#author)
10. [License](#License)

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

## Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Axios](https://github.com/axios/axios)
- [Cors](https://github.com/expressjs/cors)
- [dotenv](https://github.com/motdotla/dotenv)
- [TypeScript](https://www.typescriptlang.org/)
- [TSLint](https://palantir.github.io/tslint/)

## Usage

### Get weather by city name

Make a GET request to `/weather/:city` to get the current weather for a specific city.

Example: `/weather/london`

### Get forecast for multiple cities

Make a GET request to `/weather/cities?cities=city1,city2,city3` to get the forecast for multiple cities.

Example: `/weather/cities?cities=london,paris,newyork`

### Get forecast based on user's location

Make a GET request to `/weather/location` to get the forecast based on the user's current location.

Example: `/weather/location`

Form Params:
- `lat`: (Required) The latitude of the user's location
- `lon`: (Required) The longitude of the user's location

### Get additional weather information

Make a GET request to `/weather/:city/details` to get additional weather information such as humidity and wind speed for a specific city.

Example: `/weather/london/details`

### Get current weather for multiple cities

Make a GET request to `/weather/cities/current?cities=city1,city2,city3` to get the current weather for multiple cities.

Example: `/weather/cities/current?cities=london,paris,newyork`

### Get weather information with different units

Make a GET request to `/weather/:city/units?units=metric` or `/weather/:city/units?units=imperial` to get weather information for a specific city in the desired units.

Example: `/weather/london/units?units=metric`

### Get sunrise and sunset time

Make a GET request to `/weather/:city/sun` to get the time of sunrise and sunset for a specific city.

Example: `/weather/london/sun`

### Get temperature statistics

Make a GET request to `/weather/:city/stats` to get statistics of temperature such as minimum, maximum and average for a specific city.

Example: `/weather/london/stats`

### Get weather by zip code

Make a GET request to `/weather/zipcode/:zipcode` to get the current weather by zip code.

Example: `/weather/zipcode/90210`

## Contributing

This project is open to contributions. If you have any ideas or suggestions, please open an issue or a pull request.

## Author

This project was created by [Sebastià Baró](https://github.com/SebastiaBaro) - [sebastiabaro@protonmail.com](mailto:sebastiabaro@protonmail.com) as a personal project to learn and practice Node.js and TypeScript.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.