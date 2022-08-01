const Task = require("../model/task.model");
const asyncwrapper=require('../middleware/asynwrapper')
const {createCustomeError}=require('../errors/custom-error')


const getAlltasks = asyncwrapper( async (req, res) => {
    const task = await Task.find();
    res.status(201).json({ task: task });
});


const createtask = asyncwrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task: task });

});

const getltask = asyncwrapper(async (req, res,next) => {
 
    const task = await Task.findById(req.params.id);
    if (!task) {
        return next(createCustomeError(`No task with Id  ${req.params.id}}`,404));
    //   res.status(400).json({ msg: `No task with Id  ${req.params.id}}` });
    } else {
      res.status(201).json({ task: task });
    }
});

const updatetask = asyncwrapper( async (req, res) => {

    const task = await Task.findByIdAndUpdate({"_id":req.params.id}, req.body,{new:true,runValidators:true});
    if (!task) {
        return next(createCustomeError(`No task with Id  ${req.params.id}}`,404));
    } else {
      res.status(201).json({ task: task });
    }
});

const deletetask = asyncwrapper(async (req, res) => {
    const task = await Task.findOneAndRemove({ _id: req.params.id });
    if(!task){
        return next(createCustomeError(`No task with Id  ${req.params.id}}`,404));
    }
    else
{    res.status(201).json({ "task": "null",status:"sucess" });}
});



module.exports = {
  getAlltasks,
  createtask,
  getltask,
  updatetask,
  deletetask,
};
