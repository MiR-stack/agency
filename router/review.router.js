const router = require('express').Router()
const {addReview,getReview,deleteReview} = require('../controller/review.controller')


//add review
router.post('/',addReview)

//get review
router.get('/',getReview)

//delete review
router.delete('/',deleteReview)


module.exports = router