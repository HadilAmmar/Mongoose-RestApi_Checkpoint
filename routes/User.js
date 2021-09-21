const express=require("express");
const router=express.Router();
const User=require("../models/User")

//Post

router.post("/", async (req, res) => {
    try {
      const newUser = new User(req.body);
  
      if (!req.body.email) {
        res.send({ msg: "email is required" });
        return;
      }
      const response = await newUser.save();
      res.send({ response: response, msg: "saved" });
    } catch (error) {
      res.send("connot save it");
      console.log(error);
    }
  });




//Get

router.get("/", async (req, res) => {
    try {
      const result = await User.find();
      res.send({ result: result, msg: "getting users s_uccessfully" });
    } catch (error) {
      res.send({ message: "cannot get Users" });
    }
  });



//Get by id 

router.get("/:id", async (req, res) => {
    try {
      const result = await User.findOne({ _id: req.params.id });
      res.send({ result: result, msg: "getting users s_uccessfully" });
    } catch (error) {
      res.send({ message: "cannot get the User" });
    }
  });




//delete


router.delete("/:id", async (req, res) => {
    try {
      const result = await User.findOneAndRemove({ _id: req.params.id });
      res.send({ msg: "deleted" });
    } catch (error) {
      res.send({ message: "cannot delete the user" });
    }
  });



//put
router.put("/:id", async (req, res) => {
    try {
      const result = await User.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      res.send({ respond: result, msg: "updated" });
    } catch (error) {
      res.send({ message: "cannot update the user" });
    }
  });







module.exports=router;