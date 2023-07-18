const model = require("../model/question")
const Question = model.Question;
const mongoose = require("mongoose")

//Create the Question
exports.createQuestion = async(req,res)=>{
    try{
        const ques = new Question(req.body)
        const ques1 = await ques.save()
        res.status(201).json(ques1)
    } catch(err){
        console.log(err)
        res.status(401).json(err)
    }
}

//Get the detail of Question
exports.getQuestion = async(req,res)=>{
    try{
        const id = req.params.id;
        const ques = await Question.findById(id).populate("options");
        res.status(200).json(ques)
    } catch(err){
        res.status(401).json(err);
    }
}

//Delete the question
exports.deleteQuestion = async(req,res)=>{
    try{
        const id = req.params.id;
        const ques = await Question.findByIdAndDelete(id)
        res.status(200).json(ques)
    } catch(err){
        res.status(401).json(err)
    }
}