// const Pool = require('pg')
import {Pool} from 'pg';


export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'modo_api',
  password: 'manager',
  port: 5432,
})
