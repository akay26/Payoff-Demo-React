'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

// exports.list_all_tasks = function(req, res, next) {
//   //query with mongoose
//   var query = dbSchemas.task.find({}).select('name -_id');

//   query.exec(function (err, tsk) {
//       if (err) return next(err);
//       res.send(task);
//   });
// };

// exports.list_all_tasks = function(req, res) {
//   Task.find({name: params.name}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(name);
//   });
// };

exports.save_user_details = function(req, res){
    var new_task= new Task(req.body);
    new_task.save(function(err, task){
        if(err)
        res.send(err);
        res.json(task);
    });
};


exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


// exports.read_a_task = function(req, res) {
//   Task.findById(req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


exports.read_a_task = function(req, res) {
  Task.find({name: req.params.taskId}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};



exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: params.taskId}, {name: req.params.name}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {

  Task.remove({
  },

//   Task.remove({
//     _id: req.params.taskId
// }, 
function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

