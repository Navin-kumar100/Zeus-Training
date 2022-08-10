import { db } from "../db/config";

export  const getReservation = async(request, response) => {
  const results = await db.query('SELECT * FROM reservation ');
      console.log(results);
      response.status(200).json(results);
  }

  export const createReservation = async(request, response) => {
    const { userid, date , floor_id } = request.body
 try{
   await db.none("INSERT INTO reservation (userid, date ,floor_id)"+" VALUES ($1, $2, $3)", [ userid, date , floor_id]);
    response.status(201).json({Message:`One Record added`})
  }
  catch (error) {
    console.log(error);
  }
}
  
export const getReservationById =async(request,response)=>{
    const id: number = parseInt(request.params.id);
    const results = await db.query(`SELECT * FROM reservation WHERE reservationid=${id}` );
    response.status(200).json({Message:"success",results})
}

export const updateReservation = async (request, response) => {
    const id: number = parseInt(request.params.id);
    const { userid, date , floor_id } = request.body;
    const data = { userid, date , floor_id }; 
    // {name: 'foo', email:undefined, password:'bar}
    //Remove ONLY undefined keys from data
   
    Object.keys(data).forEach( key => { if(data[key] === undefined) delete data[key] });
    let query = 'UPDATE reservation SET';
    let i = 1;
    Object.keys(data).forEach( (key,index) => { query += ` ${key}=$${index+1},`; i++; })
    query = query.slice(0, -1) // Remove exceeding comma
    query += ` WHERE reservationid=$${i}`;
  
    const values = Object.values(data);
    values.push(id);
    try {
          const result = await db.none(query,values);
        console.log(result);
        } catch (error) {
          console.log(error);
        }
        response.status(200).json({ message: `reservation modified with ID: ${id}`});
  
  };


// *****************************************
        //    checkin
// *****************************************


export const checkin= async(request, response) => {
    const { reservationid, status } = request.body
 try{
    const result = await db.none("INSERT INTO checkin (reservationid, status)"+" VALUES ($1, $2)", [ reservationid, status]);
    response.status(201).json({Message:`One Record added`})
  }
  catch (error) {
    console.log(error);
  }
}

// *****************************************
        //    CANCEL
// *****************************************

export const CancelReservation= async(request, response) => {
    const { reservationid, status } = request.body
    console.log(reservationid,status)
 try{
  const result = await db.none("INSERT INTO cancel (reservationid, status)"+" VALUES ($1, $2)", [ reservationid, status]);
    response.status(201).json({Message:`One Record added`});
  }
  catch (error) {
    console.log(error);
  }
}
