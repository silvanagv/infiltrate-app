
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Resume App' });
});

module.exports = router;

var models = require('../models/index')

//create user
router.post('/users', function(req, res) {
  models.User.create(req.body.user).then(function(user) {
    res.json(user);
  });
});

// get all user records
router.get('/users', function(req, res) {
  models.User.findAll({
    include: [models.Education, models.Work, models.Skill]
  }).then(function(education) {
    res.json(education);
  });
});

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
  models.Education.create(req.body.education).then(function(education) {
    res.json(education);
  });
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
  router.put('/education/:id', function(req, res){
    models.Education.find({
      where: {
        id: req.params.id
      }
    }).then(function(education){
      if(education){
        education.updateAttributes({
          institutionName: req.body.institutionName,
          qualification: req.body.qualification,
          startDate: req.body.startDate,
          endDate: req.body.endDate,
          UserId: req.body.UserId
        }).then(function(education){
          res.send(education)
        })
      }
    })
  })

  //delete education record
  router.delete('/education/:id', function(req, res){
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
    router.put('/work/:id', function(req, res){
      models.Work.find({
        where: {
          id: req.params.id
        }
      }).then(function(work){
        if(work){
          work.updateAttributes({
            company: req.body.company,
            companyUrl: req.body.companyUrl,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            responsibilities: req.body.responsibilities,
            UserId: req.body.UserId
          }).then(function(work){
            res.send(work)
          })
        }
      })
    })

    //delete work record
    router.delete('/work/:id', function(req, res){
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
      router.put('/skill/:id', function(req, res){
        models.Skill.find({
          where: {
            id: req.params.id
          }
        }).then(function(skill){
          if(skill){
            skill.updateAttributes({
              name: req.body.name,
              type: req.body.type,
              levelOfProficiency: req.body.levelOfProficiency,
              UserId: req.body.UserId
            }).then(function(skill){
              res.send(skill)
            })
          }
        })
      })

      //delete skill
      router.delete('/skill/:id', function(req, res){
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
        models.SkillUser.create({
          SkillId: req.body.SkillId,
          UserId: req.body.UserId
        }).then(function(skilluser){
          res.json(skilluser)
        })
      })
