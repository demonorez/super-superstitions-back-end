const router = require('express').Router()
const superstitionsCtrl = require('../controllers/superstitions.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/
router.get('/', superstitionsCtrl.index)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, superstitionsCtrl.create)
router.put('/:id', checkAuth, superstitionsCtrl.update)


module.exports = router