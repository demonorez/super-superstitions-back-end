const router = require('express').Router()
const superstitionsCtrl = require('../controllers/superstitions.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, superstitionsCtrl.create)


module.exports = router