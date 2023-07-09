const express = require('express')
const router = new express.Router()

// import { Configuration, OpenAIApi } from "openai";
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-3tGSSujP3cLaj7tR9Poi2ga4",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


router.post('/chat/driver', async (req, res) => {

  // console.log(req.body.question);
    try {
    const chatCompletion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: req.body.question}],
      });

      console.log(chatCompletion.data.choices[0].message);
      res.send(chatCompletion.data.choices[0].message);
  
   
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
    }
    catch (error) {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      }


    
  })

  module.exports = router