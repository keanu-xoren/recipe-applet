const Express = require('express');
const router = Express.Router();

// getting all
router.get('/', (request, response) => {
    response.send('Hello World');
});

// getting one
router.get('/:id', (request, response) => {
    
    //request.params.id
});

// creating one
router.post('/', (request, response) => {
    //request.params.id
});

// updating one
router.patch('/', (request, response) => {

});

// deleting one
router.delete('/', (request, response) => {

});

module.exports = router;