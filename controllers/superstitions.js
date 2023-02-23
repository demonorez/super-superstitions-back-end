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

async function update(req, res) {
  try {
    const superstition = await Superstition.findByPk(req.params.id)
    superstition.set(req.body)
    await superstition.save()
    res.status(200).json(superstition)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function deleteSuperstition(req, res) {
  try {
    const superstition = await Superstition.findByPk(req.params.id)
    await superstition.destroy()
    res.status(200).json(superstition)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteSuperstition,
}