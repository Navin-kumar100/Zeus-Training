"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelReservation = exports.checkin = exports.updateReservation = exports.getReservationById = exports.createReservation = exports.getReservation = void 0;
const config_1 = require("../db/config");
const getReservation = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield config_1.db.query('SELECT * FROM reservation ');
    console.log(results);
    response.status(200).json(results);
});
exports.getReservation = getReservation;
const createReservation = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { userid, date, floor_id } = request.body;
    try {
        yield config_1.db.none("INSERT INTO reservation (userid, date ,floor_id)" + " VALUES ($1, $2, $3)", [userid, date, floor_id]);
        response.status(201).json({ Message: `One Record added` });
    }
    catch (error) {
        console.log(error);
    }
});
exports.createReservation = createReservation;
const getReservationById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id);
    const results = yield config_1.db.query(`SELECT * FROM reservation WHERE reservationid=${id}`);
    response.status(200).json({ Message: "success", results });
});
exports.getReservationById = getReservationById;
const updateReservation = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id);
    const { userid, date, floor_id } = request.body;
    const data = { userid, date, floor_id };
    // {name: 'foo', email:undefined, password:'bar}
    //Remove ONLY undefined keys from data
    Object.keys(data).forEach(key => { if (data[key] === undefined)
        delete data[key]; });
    let query = 'UPDATE reservation SET';
    let i = 1;
    Object.keys(data).forEach((key, index) => { query += ` ${key}=$${index + 1},`; i++; });
    query = query.slice(0, -1); // Remove exceeding comma
    query += ` WHERE reservationid=$${i}`;
    const values = Object.values(data);
    values.push(id);
    try {
        const result = yield config_1.db.none(query, values);
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
    response.status(200).json({ message: `reservation modified with ID: ${id}` });
});
exports.updateReservation = updateReservation;
// *****************************************
//    checkin
// *****************************************
const checkin = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { reservationid, status } = request.body;
    try {
        const result = yield config_1.db.none("INSERT INTO checkin (reservationid, status)" + " VALUES ($1, $2)", [reservationid, status]);
        response.status(201).json({ Message: `One Record added` });
    }
    catch (error) {
        console.log(error);
    }
});
exports.checkin = checkin;
// *****************************************
//    CANCEL
// *****************************************
const CancelReservation = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { reservationid, status } = request.body;
    console.log(reservationid, status);
    try {
        const result = yield config_1.db.none("INSERT INTO cancel (reservationid, status)" + " VALUES ($1, $2)", [reservationid, status]);
        response.status(201).json({ Message: `One Record added` });
    }
    catch (error) {
        console.log(error);
    }
});
exports.CancelReservation = CancelReservation;
//# sourceMappingURL=reservation.controller.js.map