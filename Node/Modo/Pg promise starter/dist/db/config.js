"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const pg_promise_1 = __importDefault(require("pg-promise"));
const pgp = (0, pg_promise_1.default)({
    query(e) {
        console.log('QUERY RESULT:', e.query);
    },
    receive(data, result, e) {
        console.log(`DATA FROM QUERY ${e.query} WAS RECEIVED.`);
    }
});
const connection = {
    host: 'localhost',
    port: 5432,
    database: 'modo_api',
    user: 'postgres',
    password: 'manager'
};
const db = pgp(connection);
exports.db = db;
//# sourceMappingURL=config.js.map