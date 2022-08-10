import { db } from "../db/config";

// get all user

export const getUsers = async (request, response) => {
  try {
    const result = await db.query("SELECT $1:name FROM $2:name", [
      "*",
      "users",
    ]);
    response.status(200).json(result);
    if (!result) throw Error;
  } catch (error) {
    console.log(error);
  }
};

// get one user

export const getUserById = async (request, response) => {
  const id: number = parseInt(request.params.id);
  try {
    const results = await db.any("SELECT * FROM users WHERE id = $1", [id]);
    response.status(201).json(results);
    if (!results) throw Error;
  } catch (error) {
    console.log(error);
  }
};

// create user

export const createUser = async (request, response) => {
  const { id, firstname, lastname, age } = request.body;
  try {
    const result = await db.none(
      "INSERT INTO users (id,firstname, lastname, age) " +
        " VALUES ($1,$2,$3,$4)",
      [id, firstname, lastname, age]
    );
    if (!result) throw Error;
  } catch (error) {
    console.log(error);
  }
  response.status(201).json({ message: "User Created Successfully" });
};

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

// export const updateUser = async (request, response) => {
//   const id: number = parseInt(request.params.id);
//   const { firstname, lastname, age } = request.body;
//   try {
//     const result = await db.none(
//       "UPDATE users SET firstname = COALESCE (NULLIF($1, ''), firstname),lastname = COALESCE (NULLIF($2, ''), lastname), age = COALESCE (NULLIF($3, ''), age)   WHERE id = $4",
//       [firstname, lastname, age, id]
//     );
//     if (!result) throw Error;
    
//     response.status(200).json({ message: `User modified with ID: ${id}` });
//   } catch (error) {
//     console.log(error);
//   }
//   // console.log(result);
// };

// delete user



export const updateUser = async (request, response) => {
  const id: number = parseInt(request.params.id);
  const { firstname, lastname, age } = request.body;
  const data = { firstname, lastname, age }; 
  // {name: 'foo', email:undefined, password:'bar}
  //Remove ONLY undefined keys from data
 
  Object.keys(data).forEach( key => { if(data[key] === undefined) delete data[key] });
  let query = 'UPDATE users SET';
  let i = 1;
  Object.keys(data).forEach( (key,index) => { query += ` ${key}=$${index+1},`; i++; })
  query = query.slice(0, -1) // Remove exceeding comma
  query += ` WHERE id=$${i}`;

  const values = Object.values(data);
  values.push(id);
  try {
        const result = await db.none(query,values);
        if (!result) throw Error;
      } catch (error) {
        console.log(error);
      }
      response.status(200).json({ message: `User modified with ID: ${id}` });

};



export const deleteUser = async (request, response) => {
  const id: number = parseInt(request.params.id);
  try {
    const result = await db.none("DELETE FROM users WHERE id = $1", [id]);
    if (!result) throw Error;
  } catch (error) {
    console.log(error);
  }
  response.status(200).send(`User deleted with ID: ${id}`);
};
