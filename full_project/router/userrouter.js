const router=require("express").Router()

router.get("/",(req,resp)=>{
    resp.render("index")
})
router.get("/about",(req,resp)=>{
    resp.render("about")
})
router.get("/cart",(req,resp)=>{
    resp.render("cart")
})
router.get("/contact",(req,resp)=>{
    resp.render("contact")
})
router.get("/services",(req,resp)=>{
    resp.render("services")
})
router.get("/shop",(req,resp)=>{
    resp.render("shop")
})
router.get("/registration",(req,resp)=>{
    resp.render("registration")
})

router.get("/login",(req,resp)=>{
    resp.render("login")
})
const User=require("../model/users")
router.post("/adduser",async(req,resp)=>{
    try {
        const user=new User(req.body)
        const data=await user.save()
        resp.render("registration",{msg:"Registration Sucessfull"})
    } catch (error) {
        console.log(error);
    }
})

module.exports=router