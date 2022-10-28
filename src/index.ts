import app from "./app";
import { dbConnect } from "./database/database";
import { PORT } from "./configs/config";

dbConnect();
app.listen(PORT);
console.log("Server is running on port:", PORT);