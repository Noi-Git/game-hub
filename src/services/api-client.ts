import axios from 'axios'
import { configDotenv } from 'dotenv'

// require('dotenv').config()

export default axios.create({

  
    // baseURL: 'https://api.disneyapi.dev'
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:import.meta.env.VITE_RAWG_KEY
        // key:process.env.RAWG_KEY
    }
  
})