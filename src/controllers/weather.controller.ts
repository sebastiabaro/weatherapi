import { Request, Response } from 'express'
import axios from 'axios'
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
export default class WeatherController {
    /**
     * Get current weather for a city.
     * @param {Request} req - Express request object.
     * @param {Response} res - Express response object.
     */
    public async getWeather(req: Request, res: Response) {
        // Extract city from request parameters
        const { city } = req.params
        // Get the API key from environment variables
        const apiKey = process.env.OPENWEATHER_API_KEY
        // If the API key is not found, return a 500 error
        if (!apiKey) {
            res.status(500).json({
                message: 'API key not found',
            })
            return
        }
        try {
            // Make a GET request to the OpenWeatherMap API to get weather information for the specified city
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            // Return the data received from the API
            res.json(response.data)
        } catch (error: any) {
            // If there's an error, return a 500 error with the error message
            res.status(500).json({
                message: error.message,
            })
        }
    }

    /**
     * Get forecast for multiple cities.
     * @param {Request} req - Express request object.
     * @param {Response} res - Express response object.
     */
    public async getForecastForMultipleCities(req: Request, res: Response) {
        // Parse list of cities from query parameter
        const { cities } = req.query
        const apiKey = process.env.OPENWEATHER_API_KEY
        if (!apiKey) {
            res.status(500).json({
                message: 'API key not found',
            })
            return
        }
        try {
            if (!cities || !Array.isArray(cities)) {
                res.status(400).json({
                    message: 'Invalid cities parameter',
                })
                return
            }
            // Make separate request for each city
            const promises = cities.map(city => axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`))
            const responses = await Promise.all(promises)
            res.json(responses.map(response => response.data))
        } catch (error: any) {
            res.status(500).json({
                message: error.message,
            })
        }
    }

    /**
     * Get forecast based on user's location.
     * @param {Request} req - Express request object.
     * @param {Response} res - Express response object.
     */
    public async getForecastByLocation(req: Request, res: Response) {
        // Get user's latitude and longitude from query parameters
        const { lat, lon } = req.query
        const apiKey = process.env.OPENWEATHER_API_KEY
        if (!apiKey) {
            res.status(500).json({
                message: 'API key not found',
            })
            return
        }
        try {
            // Make request to OpenWeatherMap API using user's coordinates
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
            res.json(response.data)
        } catch (error: any) {
            res.status(500).json({
                message: error.message,
            })
        }
    }

    /**
     * Get additional weather information for a city.
     * @param {Request} req - Express request object.
     * @param {Response} res - Express response object.
     */
    public async getAdditionalWeatherInformation(req: Request, res: Response) {
        // Get city name from request parameters
        const { city } = req.params
        const apiKey = process.env.OPENWEATHER_API_KEY
        if (!apiKey) {
            res.status(500).json({
                message: 'API key not found',
            })
            return
        }
        try {
            // Make request to OpenWeatherMap API
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`)
            // Extract additional weather information
            const additionalInfo = {
                humidity: response.data.main.humidity,
                windSpeed: response.data.wind.speed,
                visibility: response.data.visibility,
                clouds: response.data.clouds.all,
            }
            res.json(additionalInfo)
        } catch (error: any) {
            res.status(500).json({
                message: error.message,
            })
        }
    }

    /**
     * Get current weather for multiple cities.
     * @param {Request} req - Express request object.
     * @param {Response} res - Express response object.
     */
    public async getCurrentWeatherForMultipleCities(req: Request, res: Response) {
        // Parse list of cities from query parameter
        const { cities } = req.query
        const apiKey = process.env.OPENWEATHER_API_KEY
        if (!apiKey) {
            res.status(500).json({
                message: 'API key not found',
            })
            return
        }
        try {
            // Validate the 'cities' query parameter
            if (!cities || !Array.isArray(cities)) {
                // Send error response if 'cities' parameter is not provided or is not an array
                res.status(400).json({
                    message: 'Invalid cities parameter',
                })
                return
            }
            // Make separate request for each city
            const promises = cities.map(city => axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`))
            const responses = await Promise.all(promises)
            res.json(responses.map(response => response.data))
        } catch (error: any) {
            res.status(500).json({
                message: error.message,
            })
        }
    }

    /**
     * Get weather information with different units.
     * @param {Request} req - Express request object.
     * @param {Response} res - Express response object.
     */
    public async getWeatherWithDifferentUnits(req: Request, res: Response) {
        // Get city from route parameter
        const { city } = req.params
        // Get units from query parameter
        const { units } = req.query
        const apiKey = process.env.OPENWEATHER_API_KEY
        if (!apiKey) {
            res.status(500).json({
                message: 'API key not found',
            })
            return
        }
        try {
            // Make request to OpenWeatherMap API
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`)
            res.json(response.data)
        } catch (error: any) {
            res.status(500).json({
                message: error.message,
            })
        }
    }

    /**
     * Get sunrise and sunset time for a city.
     * @param {Request} req - Express request object.
     * @param {Response} res - Express response object.
     */
    public async getSunriseAndSunsetTime(req: Request, res: Response) {
        // Get city from route parameter
        const { city } = req.params
        const apiKey = process.env.OPENWEATHER_API_KEY
        if (!apiKey) {
            res.status(500).json({
                message: 'API key not found',
            })
            return
        }
        try {
            // Make request to OpenWeatherMap API
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            const data = response.data
            // Extract and format sunrise and sunset time
            const sunrise = new Date(data.sys.sunrise * 1000)
            const sunset = new Date(data.sys.sunset * 1000)
            res.json({
                city,
                sunrise: sunrise.toLocaleTimeString(),
                sunset: sunset.toLocaleTimeString(),
            })
        } catch (error: any) {
            res.status(500).json({
                message: error.message,
            })
        }
    }

    /**
     * Get long-term forecast for a city.
     * @param {Request} req - Express request object.
     * @param {Response} res - Express response object.
     */
    public async getLongTermForecast(req: Request, res: Response) {
        // Get city name from request parameters
        const { city } = req.params
        const apiKey = process.env.OPENWEATHER_API_KEY
        if (!apiKey) {
            res.status(500).json({
                message: 'API key not found',
            })
            return
        }
        try {
            // Make request to OpenWeather API
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${apiKey}`)
            res.json(response.data)
        } catch (error: any) {
            res.status(500).json({
                message: error.message,
            })
        }
    }

    /**
     * Get temperature statistics for a city.
     * @param {Request} req - Express request object.
     * @param {Response} res - Express response object.
     */
    public async getTemperatureStatistics(req: Request, res: Response) {
        // Get city name from route parameter
        const { city } = req.params
        const apiKey = process.env.OPENWEATHER_API_KEY
        if (!apiKey) {
            res.status(500).json({
                message: 'API key not found',
            })
            return
        }
        try {
            // Make request to OpenWeather API
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
            // Extract temperature information from API response
            const temperatureList: number[] = response.data.list.map(
                (item: {
                    main: {
                        temp: number
                    }
                }) => item.main.temp,
            )
            // Calculate statistics
            const minTemp = Math.min(...temperatureList)
            const maxTemp = Math.max(...temperatureList)
            const avgTemp = temperatureList.reduce((a, b) => a + b, 0) / temperatureList.length
            // Return statistics
            res.json({
                min: minTemp,
                max: maxTemp,
                avg: avgTemp,
            })
        } catch (error: any) {
            res.status(500).json({
                message: error.message,
            })
        }
    }

    /**
     * Get Weather statistics for a city.
     * @param {Request} req - Express request object.
     * @param {Response} res - Express response object.
     */
    public async getWeatherByZipCode(req: Request, res: Response) {
        // Get zip code from route parameter
        const { zipcode } = req.params
        const apiKey = process.env.OPENWEATHER_API_KEY
        // Check if API key is present
        if (!apiKey) {
            res.status(500).json({
                message: 'API key not found',
            })
            return
        }
        try {
            // Make request to OpenWeather API
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${apiKey}`)
            res.json(response.data)
        } catch (error: any) {
            res.status(500).json({
                message: error.message,
            })
        }
    }
}
