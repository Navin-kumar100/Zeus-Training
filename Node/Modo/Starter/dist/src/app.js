"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../routes/index"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// app.get("/api", (req :any, res :any) => {
//   res.send('Hello World!');
// });
app.use(index_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map