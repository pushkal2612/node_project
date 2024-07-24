const express=require("express")
const app=express()
const mongoose=require("mongoose")
const hbs=require("hbs")
const path=require("path")
const bodyparser=require("body-parser")
const cookieparser=require("cookie-parser")
app.use(bodyparser())
app.use(cookieparser())
require("dotenv").config()
const PORT=process.env.PORT
const DBURL=process.env.DBURL
mongoose.connect(DBURL).then(result=>{
    console.log("DB Connected");
})

const publicpath=path.join(__dirname,"../public")
const viewpath=path.join(__dirname,"../templetes/views")
const partialpath=path.join(__dirname,"../templetes/partials")
app.set("view engine","hbs")
app.set("views",viewpath)
hbs.registerPartials(partialpath)
app.use(express.static(publicpath))
app.use("/",require("../router/userrouter"))
app.use("/",require("../router/adminrouter"))

app.listen(PORT,()=>{
    console.log(`server running on the port ${PORT}`);
})