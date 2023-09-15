const express = require('express');

const port = process.env.port | 8000;
const app = express();

app.listen(port);

app.use(express.json());

app.post('/api', (req, res) => {
  console.log(req.body); // Access the parsed request body
  // Your code to handle the request data here
});

const array_of_week = new Date().getDay();
const days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
app.get('/api', (req, res) => {
    const slackName = req.query.slack_name;
    const track = req.query.track;
    const utcTime = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
    const currentDay = days_of_week[array_of_week];
    const githubfileURL = "github/hng/stage1";
    const githubRepoURL = "github/hng";
    const statusCode = 200;

    const object_json = {
        slack_name: slackName,
        track: track,
        utc_time: utcTime,
        current_day:currentDay,
        github_file_url: githubfileURL,
        github_repo_url:githubRepoURL,
        status_code: statusCode
    };

    res.json(object_json);

})
