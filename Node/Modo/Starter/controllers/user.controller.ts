
import { pool } from '../db/config';

// get all user

export  const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

// get one user

  export const getUserById = (request, response) => {
    const id:number = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  // create user

  export const createUser = (request, response) => {
    const {id, firstname, lastname , age } = request.body
    pool.query('INSERT INTO users (id, firstname, lastname , age) VALUES ($1, $2, $3, $4) RETURNING *', [id, firstname, lastname , age], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }

//   update users

 export const updateUser = (request, response) => {
  const id:number = parseInt(request.params.id)
  const { firstname, lastname , age } = request.body
  pool.query(
    'UPDATE users SET firstname = $1, lastname = $2, age=$3 WHERE id = $4',
    [firstname, lastname,age, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

// delete user
export const deleteUser = (request, response) => {
    const id:number = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

// router.route('/api/users/:id').get(Controller.getUserById).patch(Controller.updateUser).delete(Controller.deleteUser)
