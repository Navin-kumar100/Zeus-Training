"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
// const Pool = require('pg')
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'modo_api',
    password: 'manager',
    port: 5432,
});
//# sourceMappingURL=config.js.map