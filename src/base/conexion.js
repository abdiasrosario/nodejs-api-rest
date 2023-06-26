import {createPool} from 'mysql2/promise'
import database from './keys.js'

export const con = createPool(database)


