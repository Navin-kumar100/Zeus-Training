"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const config_1 = require("../db/config");
const getUsers = (request, response) => {
    config_1.pool.query('SELECT * FROM reservation ', (error, results) => {
        if (error) {
            throw error;
        }
        console.log(results);
        response.status(200).json(results.rows);
    });
};
exports.getUsers = getUsers;
//# sourceMappingURL=reservation.controller.js.map