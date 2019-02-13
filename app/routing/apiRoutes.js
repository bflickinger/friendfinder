//Requirements
// const path = require('path');
const friends = require('../data/friends.js');

// API Routes
module.exports = function (app) {
    //Get friends data
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });
    //Add new friend
    app.post('/api/friends', function(req, res) {
        let appAnswers = (req.body).scores;

        //Matching
        let friendName = '';
        let friendPic = '';
        let difference = 10000;

        for (let i=0; i < friends.length; i++) {
            let temp = 0;

            for (let j = 0; j < appAnswers.length; j++) {
                temp += Math.abs(friends[i].scores[j] - appAnswers[j]);
            }
            
            if(temp < difference) {
                difference = temp;
                friendName = friends[i].name;
                friendPic = friends[i].photo;
            }
        }

        res.json({status: 'ok', friendName: friendName, friendPic: friendPic});
    });
};