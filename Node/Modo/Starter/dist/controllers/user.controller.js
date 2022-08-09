"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const config_1 = require("../db/config");
// get all user
const getUsers = (request, response) => {
    config_1.pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
exports.getUsers = getUsers;
// get one user
const getUserById = (request, response) => {
    const id = parseInt(request.params.id);
    config_1.pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
exports.getUserById = getUserById;
// create user
const createUser = (request, response) => {
    const { id, firstname, lastname, age } = request.body;
    config_1.pool.query('INSERT INTO users (id, firstname, lastname , age) VALUES ($1, $2, $3, $4) RETURNING *', [id, firstname, lastname, age], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    });
};
exports.createUser = createUser;
//   update users
const updateUser = (request, response) => {
    const id = parseInt(request.params.id);
    const { firstname, lastname, age } = request.body;
    config_1.pool.query('UPDATE users SET firstname = $1, lastname = $2, age=$3 WHERE id = $4', [firstname, lastname, age, id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`User modified with ID: ${id}`);
    });
};
exports.updateUser = updateUser;
// delete user
const deleteUser = (request, response) => {
    const id = parseInt(request.params.id);
    config_1.pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`User deleted with ID: ${id}`);
    });
};
exports.deleteUser = deleteUser;
// router.route('/api/users/:id').get(Controller.getUserById).patch(Controller.updateUser).delete(Controller.deleteUser)
//# sourceMappingURL=user.controller.js.map