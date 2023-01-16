import { Router } from 'express'
import WeatherController from '../controllers/weather.controller'

/*
 * WeatherAPI - A REST API to query weather using the openweathermap.org API, developed in Node.js and TypeScript
 * Copyright (C) 2023 Sebastià Baró
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const weatherController = new WeatherController()

const router = Router()

// Get forecast for multiple cities
router.get('/cities', weatherController.getForecastForMultipleCities)

// Get forecast based on user's location
router.get('/location', weatherController.getForecastByLocation)

// Get additional weather information
router.get('/:city/details', weatherController.getAdditionalWeatherInformation)

// Get current weather for multiple cities
router.get('/cities/current', weatherController.getCurrentWeatherForMultipleCities)

// Get weather information with different units
router.get('/:city/units', weatherController.getWeatherWithDifferentUnits)

// Get sunrise and sunset time
router.get('/:city/sun', weatherController.getSunriseAndSunsetTime)

// Get temperature statistics
router.get('/:city/stats', weatherController.getTemperatureStatistics)

// Get weather by zip code
router.get('/zipcode/:zipcode', weatherController.getWeatherByZipCode)

// Get weather by city name
router.get('/:city', weatherController.getWeather)

export default router
