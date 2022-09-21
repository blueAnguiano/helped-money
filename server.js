const api = require('./backend/app');

const PORT = process.env.PORT || 3000;

api.listen(PORT, () => {
    console.log(`Sever is listening on port ${PORT}`);
});

api.get('/', async(req, res) => {
    return res.status(200).json({
        timestamp: new Date().toISOString(),
        status: res.statusCode,
        message: 'Helped Money'
    });
});

api.use(async (req, res) => {
    return res.status(404).json({
        timestamp: new Date().toISOString(),
        status: res.statusCode,
        message: 'Unrecognized path',
        //path: req.path
    });
});

module.exports = api;