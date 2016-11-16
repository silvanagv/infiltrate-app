
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json("hello");
});

module.exports = router;

var models = require('../models/index')

//create user
router.post('/users', function(req, res) {
  models.User.create(req.body.user)
  .then(function(user) {
    res.json(user);
  });
});

// get all user records
router.get('/users', function(req, res) {
  models.User.findAll({
    include: [models.Education, models.Work, models.Skill]
  }).then(function(education) {
    res.json(education)
  });
});

//update user record
router.put('/users/:id', function(req, res){
  models.User.find({
    where: {
      id: req.params.id
    }
  }).then(function(user){
    if(user){
      user.updateAttributes(req.body.user).then(function(user){
        res.json(user)
      })
    }
  })
})

//delete user record
router.delete('/users/:id', function(req, res){
  console.log(req.params.id)
  models.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(user){
    res.json(user)
  })
})


// get all education records
router.get('/educations', function(req, res) {
  models.Education.findAll({
    include: [models.User]
  }).then(function(education) {
    res.json(education);
  });
});

// add new education record
router.post('/educations', function(req, res) {
  debugger;
  models.Education.create(req.body.education).then(function(education) {
    res.json(education);
  })
});

//get single education record
  router.get('/educations/:id', function(req, res){
    models.Education.find({
      where: {
        id: req.params.id },
        include: [models.User]
      }).then(function(education){
      res.json(education)
    })
  })

//update education record
router.put('/educations/:id', function(req, res){
  models.Education.find({
    where: {
      id: req.params.id
    }
  }).then(function(education){
    if(education){
      education.updateAttributes(req.body.education).then(function(education){
        res.json(education)
      })
    }
  })
})

  //delete education record
  router.delete('/educations/:id', function(req, res){
    console.log(req.params.id)
    models.Education.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(education){
      res.json(education)
    })
  })

  // get all work records
  router.get('/works', function(req, res) {
    models.Work.findAll({
      include: [models.User]
    }).then(function(education) {
      res.json(education);
    });
  });

  // add new work record
  router.post('/works', function(req, res) {
    models.Work.create(req.body.work).then(function(work) {
      res.json(work);
    });
  });

  //get single work record
    router.get('/works/:id', function(req, res){
      models.Work.find({
        where: {
          id: req.params.id },
          include: [models.User]
        }).then(function(work){
        res.json(work)
      })
    })

  //update work record
    router.put('/works/:id', function(req, res){
      models.Work.find({
        where: {
          id: req.params.id
        }
      }).then(function(work){
        if(work){
          work.updateAttributes(req.body.work).then(function(work){
            res.json(work)
          })
        }
      })
    })

    //delete work record
    router.delete('/works/:id', function(req, res){
      models.Work.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(work){
        res.json(work)
      })
    })

    // get all skills
    router.get('/skills', function(req, res) {
      models.Skill.findAll({
        include: [models.User]
      }).then(function(skills) {
        res.json(skills);
      });
    });

    // add new skill
    router.post('/skills', function(req, res) {
      models.Skill.create(req.body.skill).then(function(skill) {
        res.json(skill);
      });
    });

    //get single skill
      router.get('/skills/:id', function(req, res){
        models.Skill.find({
          where: {
            id: req.params.id },
            include: [models.User]
          }).then(function(skill){
          res.json(skill)
        })
      })

    //update skill
    router.put('/skills/:id', function(req, res){
      models.Skill.find({
        where: {
          id: req.params.id
        }
      }).then(function(skill){
        if(skill){
          skill.updateAttributes(req.body.skill).then(function(skill){
            res.json(skill)
          })
        }
      })
    })

      //delete skill
      router.delete('/skills/:id', function(req, res){
        models.Skill.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(skill){
          res.json(skill)
        })
      })

      //get skill-users
      router.get('/skillusers', function(req, res){
        models.SkillUser.findAll({
          include: [models.Skill, models.User]
        }).then(function(skillusers){
          res.json(skillusers)
        })
      })

      //add new skilluser
      router.post('/skillusers', function(req, res){
        models.SkillUser.create(req.body.skilluser)
        .then(function(skilluser){
          return models.User.find({
            where: {
              id: skilluser.UserId
            }, include: [models.Skill]
          })
        })
        .then(function(skilluser){
          res.json(skilluser)
        })
      })
