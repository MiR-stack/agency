const Review = require('../model/review.model')

//create review
function addReview(req,res){

    const reviewData = {
        userId: req.query.id,
        review:req.body.review,
        star:req.body.star
    }

    const newReview = new Review(reviewData)

    newReview.save()
    .then(response => res.status(201).send(response))
    .catch(err => res.status(404).send(err))

}

//get review
function getReview(req,res){
    const _id = req.query.id

    if(_id){
        Review.findById(_id)
        .then(response => res.status(201).send(response))
        .catch(err => res.status(404).send(err))
    }else{
        Review.find()
        .then(response => res.status(201).send(response))
        .catch(err => res.status(404).send(err))
    }
}

//delet review
function deleteReview(req,res){
    Review.findByIdAndDelete(req.query.id)
    .then(()=>res.send('deleted'))
    .catch(err => res.status(404).send(err))
}


module.exports = {addReview,getReview,deleteReview}