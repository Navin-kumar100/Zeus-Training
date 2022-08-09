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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const config_1 = require("../db/config");
// get all user
const getUsers = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield config_1.db.query("SELECT $1:name FROM $2:name", [
            "*",
            "users",
        ]);
        response.status(200).json(result);
        if (!result)
            throw Error;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getUsers = getUsers;
// get one user
const getUserById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id);
    try {
        const results = yield config_1.db.any("SELECT * FROM users WHERE id = $1", [id]);
        response.status(201).json(results);
        if (!results)
            throw Error;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getUserById = getUserById;
// create user
const createUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, firstname, lastname, age } = request.body;
    try {
        const result = yield config_1.db.none("INSERT INTO users (id,firstname, lastname, age) " +
            " VALUES ($1,$2,$3,$4)", [id, firstname, lastname, age]);
        if (!result)
            throw Error;
    }
    catch (error) {
        console.log(error);
    }
    response.status(201).json({ message: "User Created Successfully" });
});
exports.createUser = createUser;
//   update users
// export const updateUser = async (request, response) => {
//   const id: number = parseInt(request.params.id);
//   const { firstname, lastname, age } = request.body;
//   try {
//     const result = await db.none(
//       "UPDATE users SET firstname = $1, lastname = $2, age=$3 WHERE id = $4",
//       [firstname, lastname, age, id]
//     );
//     if (!result) throw Error;
//   } catch (error) {
//     console.log(error);
//   }
//   // console.log(result);
//   response.status(200).json({ message: `User modified with ID: ${id}` });
// };
const updateUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id);
    const { firstname, lastname, age } = request.body;
    try {
        const result = yield config_1.db.none("UPDATE users SET firstname = COALESCE (NULLIF($1, ''), firstname),lastname = COALESCE (NULLIF($2, ''), lastname), age = COALESCE (NULLIF($3, ''), age)   WHERE id = $4", [firstname, lastname, age, id]);
        if (!result)
            throw Error;
        response.status(200).json({ message: `User modified with ID: ${id}` });
    }
    catch (error) {
        console.log(error);
    }
    // console.log(result);
});
exports.updateUser = updateUser;
// delete user
const deleteUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id);
    try {
        const result = yield config_1.db.none("DELETE FROM users WHERE id = $1", [id]);
        if (!result)
            throw Error;
    }
    catch (error) {
        console.log(error);
    }
    response.status(200).send(`User deleted with ID: ${id}`);
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controller.js.map