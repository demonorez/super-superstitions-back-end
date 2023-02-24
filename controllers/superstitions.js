const { Superstition, Profile, Comment } = require('../models')
// const { Profile } = require('../models')

async function create(req, res) {
  try {
    req.body.profileId = req.user.profile.id
    const superstition = await Superstition.create(req.body)
    res.status(200).json(superstition)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function index(req, res) {
  try {
    const superstitions = await Superstition.findAll({
      include: [{ model: Comment, as: 'comments' }],
    })
    res.status(200).json(superstitions)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function update(req, res) {
  try {
    const superstition = await Superstition.findByPk(req.params.id)
    if (superstition.profileId === req.user.profile.id){
    superstition.set(req.body)
    await superstition.save()
    }
    res.status(200).json(superstition)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function deleteSuperstition(req, res) {
  try {
    const superstition = await Superstition.findByPk(req.params.id)
    if (superstition.profileId === req.user.profile.id){
    await superstition.destroy()
    }
    res.status(200).json(superstition)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function addComment(req, res) {
  try {
    req.body.superstitionId = req.params.id
    req.body.profileId = req.user.profile.id
    console.log("this is ", req.user.profile.id);
    const comment = await Comment.create(req.body)
    res.status(200).json(comment)
  } catch (error) {
    res.status(500).json(error)
  }
}



module.exports = {
  create,
  index,
  update,
  delete: deleteSuperstition,
  addComment,
}

