
import { connectToDatabase, startExpressServer, } from "goteddy-models";
import { adduser } from "./add";
import { showuser } from "./showuser";
import { updateApi } from "./update";
import { delate } from "./remove";


const app = startExpressServer([adduser,showuser,updateApi,delate])
    
    app.listen(3000, async () => {
    await connectToDatabase("mongodb+srv://olay:12345@cluster0.8biqp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    console.log("successfully connected");

})