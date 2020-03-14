const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            "id": 1,
            "image": "https://placeimg.com/64/64/1",
            "name": "유재돈",
            "birthday": "870502",
            "gender": "남자",
            "job": "소프트웨어 엔지니어"
        },
        {
            "id": 2,
            "image": "https://placeimg.com/64/64/2",
            "name": "홍길동",
            "birthday": "810712",
            "gender": "남자",
            "job": "학생"
        },
        {
            "id": 3,
            "image": "https://placeimg.com/64/64/3",
            "name": "연예인",
            "birthday": "931205",
            "gender": "여자",
            "job": "모델"
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
