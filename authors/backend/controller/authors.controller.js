const favAuthor = require("../models/authors.model")

module.exports.findAllAuthor = (req, res) => {
    favAuthor.find().sort({firstName: "asc"})
    .then(eachAuthor => res.json({ author: eachAuthor}))
    .catch(err => res.json({message: "there is an error here"}))
}

module.exports.findOneAuthor = (req, res) => {
    favAuthor.findOne({_id: req.params.id})
    .then(oneAuthor => res.json({ author: oneAuthor}))
    .catch(err => res.json({message: "there is an error here"}))
}

module.exports.createAuthor = (req, res) => {
    favAuthor.create(req.body)
    .then(createdAuthor => res.json({ author: createdAuthor}))
    .catch(err => res.status(400).json(err))
}

module.exports.updateAuthor = (req, res) => {
    favAuthor.findOneAndUpdate({_id: req.params.id},req.body, {new:true, runValidators: true})
    .then(updatedAuthor => res.json({ author: updatedAuthor}))
    .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (request, response) => {
    favAuthor.deleteOne({ _id: request.params.id })
    .then(() => response.json("deleted author!"))
    .catch(err => response.json(err))
}

module.exports.likeAuthor = (req, res) => {
    console.log("request.params is an objeect!", request.params)
    favAuthor.findOneAndUpdate(
        request.params.id,
        {
            $inc:{
                likes: 1
            }
        },
            {
                new:true // returns the updated document
            }
            )
            .then(updated => res.json(updated))
            .catch(err => res.json({error: err}))
        }

//     .then(likedAuthor => res.json({ author: likedAuthor}))
//     .catch(err => res.status(400).json(err))





