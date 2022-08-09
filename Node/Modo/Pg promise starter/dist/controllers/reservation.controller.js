// import { pool } from '../db/config';
// export  const getReservation = (request, response) => {
//     pool.query('SELECT * FROM reservation ', (error, results) => {
//       if (error) {
//         throw error
//       }
//       console.log(results);
//       response.status(200).json(results.rows);
//     })
//   }
//   export const createReservation = (request, response) => {
//     const { userid, date , floor_id } = request.body
//     pool.query('INSERT INTO reservation (userid, date , floor_id) VALUES ($1, $2, $3) RETURNING *', [ userid, date , floor_id], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(201).send(`User added with ID: ${results.rows[0].id}`)
//     })
//   }
//# sourceMappingURL=reservation.controller.js.map