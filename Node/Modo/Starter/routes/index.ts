import {Router} from 'express';
import * as Controller  from '../controllers/user.controller';
import * as ControllerReservation  from '../controllers/reservation.controller';

const router = Router();

router.get('/user',(req,res)=>res.send("hello User"));
// get all user

router.route('/api/user').get(Controller.getUsers).post(Controller.createUser);
// :id
router.route('/api/user/:id').get(Controller.getUserById).patch(Controller.updateUser).delete(Controller.deleteUser)

router.route('/api/reservation').get(ControllerReservation.getReservation).post(ControllerReservation.createReservation);


export default router;



