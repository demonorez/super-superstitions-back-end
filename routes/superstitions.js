const router = require('express').Router()
const superstitionsCtrl = require('../controllers/superstitions.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', superstitionsCtrl.index)
router.post('/', checkAuth, superstitionsCtrl.create)
// router.post('/:id/comments', checkAuth, superstitionsCtrl.addComment)
router.put('/:id', checkAuth, superstitionsCtrl.update)
router.delete('/:id', checkAuth, superstitionsCtrl.delete)

module.exports = router