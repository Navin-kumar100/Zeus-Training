"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Controller = __importStar(require("../controllers/user.controller"));
const ControllerReservation = __importStar(require("../controllers/reservation.controller"));
const router = (0, express_1.Router)();
router.get('/user', (req, res) => res.send("hello User"));
// get all user
router.route('/api/user').get(Controller.getUsers).post(Controller.createUser);
// // :id
router.route('/api/user/:id').get(Controller.getUserById).patch(Controller.updateUser).delete(Controller.deleteUser);
router.route('/api/reservation').get(ControllerReservation.getReservation).post(ControllerReservation.createReservation);
router.route('/api/reservation/:id').get(ControllerReservation.getReservationById).patch(ControllerReservation.updateReservation);
router.route('/api/reservation/checkin').post(ControllerReservation.checkin);
router.route('/api/reservation/cancel').post(ControllerReservation.CancelReservation);
exports.default = router;
//# sourceMappingURL=index.js.map