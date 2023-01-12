import { Request, Response } from 'express';
import axios from 'axios';

/*
 * WeatherAPI - A REST API to query weather using the openweathermap.org API, developed in Node.js and TypeScript
 * Copyright (C) 2021 Sebastià Baró
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
  // Method to handle a request to get weather information of a specific city
  public async getWeather(req: Request, res: Response) {
    // Extract city from request parameters
    const { city } = req.params;

    // Get the API key from environment variables
    const apiKey = process.env.OPENWEATHER_API_KEY;

    // If the API key is not found, return a 500 error
    if (!apiKey) {
      res.status(500).json({ message: 'API key not found' });
      return;
    }

    try {
      // Make a GET request to the OpenWeatherMap API to get weather information for the specified city
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      // Return the data received from the API
      res.json(response.data);
    } catch (error:any) {
      // If there's an error, return a 500 error with the error message
      res.status(500).json({ message: error.message });
    }
  }
}
