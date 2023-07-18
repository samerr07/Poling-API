const model = require("../model/option")
const Option = model.Option;
const model1 = require("../model/question")
const Question = model1.Question;
const mongoose = require('mongoose');

// Create the options for the questions
exports.createOption = async (req,res)=>{
    try{
        const opt = new Option(req.body)
        const opt1 = await opt.save();
        const ques = await Question.findById(req.params.id)

        const updOpt = await Option.findByIdAndUpdate(opt1._id, {"add_vote":`http://localhost:8081/option/${opt1._id}/add_Vote`})
    if (ques) {
        ques.options.push(updOpt);
        await ques.save();
        res.status(201).json(ques);
      } else {
        res.status(404).json({ error: 'Question not found' });
      }
    } catch(err){
        res.json(err)
        console.log(err)
    }
}

//Adding the votes to particular option
exports.addVote = async(req,res)=>{
    const id = req.params.id;
    const opt = await Option.findByIdAndUpdate(id,{$inc : {vote:1}},{new:true})
    const opt1 = await opt.save();
    res.status(200).json(opt1)
} 


//Delete the option
exports.deleteOption = async(req,res)=>{
    const id = req.params.id;
    const opt = await Option.findByIdAndDelete(id);
    res.status(200).json(opt)
}