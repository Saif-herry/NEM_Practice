const express = require('express')

const crudModel = require('../Model/crud.model')

const CrudRouter = express.Router()

CrudRouter.get('/', async (req, res) => {
  try {
    const user = await crudModel.find()
    res.status(200).send(user)
  } catch (err) {
    res.status(500).send(err)
  }
})

CrudRouter.post('/post', async (req, res) => {
  try {
    const user = await crudModel.create(req.body)
    user.save()
    res.status(200).send(user)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
})

CrudRouter.delete('/delete/id', async (req, res) => {
  try {
    const user = crudModel.findByIdAndDelete({ _id: req.params.id })
    res.status(200).send(user)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
})

CrudRouter.patch('/edit/id', async (req, res) => {
  try {
    const user = crudModel.findByIdAndUpdate(req.body, req.params.id)
    user.save()
    res.status(200).send(user)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
})

module.exports = CrudRouter
