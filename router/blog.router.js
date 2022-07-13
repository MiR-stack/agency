const router = require('express').Router()
const {
        handleBlogs,
        createBlog,
        addComment,
        reply, 
        deletBlog,
        deletComment,
        deletReply,
        updateBlog,
        updateComment,
        updateReply
    } = require('../controller/blogs.controller')

router.get('/',handleBlogs)

//create new blog
router.post('/',createBlog)

//add new comment
router.post('/comment',addComment)

//add a reply
router.post('/reply',reply)


//delet section start here

//delet blog
router.delete('/',deletBlog)

//delet Comment
router.delete('/comment',deletComment)

//delet reply
router.delete('/reply',deletReply)

//delet section end here
//update section start here

//update blog
router.put('/',updateBlog)

//update comment
router.put('/comment',updateComment)

//update reply
router.put('/reply',updateReply)

//update section end here

module.exports = router