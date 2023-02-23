const { Superstition } = require('../models')
// const { Profile } = require('../models')

async function create(req, res) {
  try {
    const superstition = await Superstition.create(req.body)
    res.status(200).json(superstition)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function index(req, res) {
  try {
    const superstitions = await Superstition.findAll()
    res.status(200).json(superstitions)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
}