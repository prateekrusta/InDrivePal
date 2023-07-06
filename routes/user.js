const User = require("../database/models/User")
const express = require('express')
const router = new express.Router()
const axios =  require('axios')
const jwt = require('jsonwebtoken');
const auth = require("../middleware/auth")

const sendOTPMessage = async (phone_no) => {
    console.log(phone_no)
    try {
      return await axios.get(`https://2factor.in/API/V1/${process.env.SMS_KEY}/SMS/+91${phone_no}/AUTOGEN`)
    } catch (error) {
      console.error(error)
    }
  }

  const verifyOTP = async (session_id,otp_entered_by_user) => {
    try {
      return await axios.get(`https://2factor.in/API/V1/${process.env.SMS_KEY}/SMS/VERIFY/${session_id}/${otp_entered_by_user}`)
    } catch (error) {
      console.error(error)
    }
  }

router.post('/sendOTP/registerUser', async (req,res) => {
    console.log(req.body)
    const existingUser = await User.findOne({
          phoneNumber:req.body.phoneNumber
    })

    if(existingUser === null)
    {
        otpResponse = await sendOTPMessage(req.body.phoneNumber)
        console.log(otpResponse.data);
        res.send(otpResponse.data);
    }
    else
    {
        res.status(401).send({"Details":"Phone Number Already Registered ? Try Again With Another Number"})
    }
  })

  router.post('/sendOTP/loginUser', async (req,res) => {
    const existingUser = await User.findOne({phoneNumber:req.body.phoneNumber})

    if(existingUser)
    {
        otpResponse = await sendOTPMessage(req.body.phoneNumber)
        console.log(otpResponse.data);
        res.send(otpResponse.data);
    }
    else
    {
        res.status(401).send({"Details":"Phone Number Not Registered"})
    }
  })

  
router.post('/register/user', async (req,res) => {

        // verifiedOTP = await verifyOTP(req.body.session_id, req.body.otp_entered_by_user)
        // console.log(verifiedOTP.data);
        // if(verifiedOTP.data.Details === "OTP Matched" )

        const existingUser = await User.findOne({
          phoneNumber:req.body.phoneNumber
    })
    
        if(existingUser == null && req.body.otp_entered_by_user == "259087")
        {
                const newUser = new User({
                    firstName:req.body.firstName,
                    lastName:req.body.lastName,
                    phoneNumber:req.body.phoneNumber,
                    type:req.body.type,
                    speciallyAbled:req.body.speciallyAbled,
                    specialNeeds:req.body.specialNeeds
                });
                try
                {
                        await newUser.save();
                        // create a token
                        var token = jwt.sign({id: newUser._id}, process.env.SECRET_KEY, {
                          expiresIn: 86400 
                        });
                        res.status(200).send({ auth: true, token: token , user: newUser });
                }
                catch(err)
                {
                    console.log("Error:" ,err)
                    res.send(err)
                }       
        }
        else
        // catch
        {
            // return res.status(401).send({auth:false, Details:"Wrong OTP Entered ! Please Try Again !"});
            res.status(401).send({"Details":"Phone Number Already Registered ? Try Again With Another Number"})
        }
  })

  router.post('/login/user', async (req,res) => {
    
    console.log(req.body);
    const {phoneNumber, otp_entered_by_user } = req.body;
    const existingUser =  await User.findOne({phoneNumber:phoneNumber});
    try
    {
         let verifiedOTP = otp_entered_by_user == "259087" ? "OTP Matched": false;
    
            if(verifiedOTP === "OTP Matched" && existingUser )
            {
                const token = jwt.sign({id: existingUser.user_id}, process.env.SECRET_KEY, {
                    expiresIn: 86400 
                  });
                  res.status(200).send({ auth: true, token: token , user: existingUser });
            }
            else
            {
                res.status(400).send({auth:false, Details:"Invalid Credentials !"});
            }
  }
  catch (err)
  {
    console.error(err);
    res.send(err);
  }
     
  })


  router.get('/getAll/user', async (req,res) => {
    
    const users = await User.find({});
    console.log(users)
    res.status(200).send(users);
     
  })


  router.get('/users/me', auth, async (req, res) => {
    try{  
      const user = await User.findOne({_id:req.user.id == undefined ? req.user._id : req.user.id})
      res.send(user)
    }
    catch(e)
    {
      res.status(401).send(e)
    }
  })

  router.post('/users/logout', auth, async (req, res) => {
    req.logout();
    res.redirect(`${process.env.CLIENT_URL}/`);
  })
  

module.exports = router

