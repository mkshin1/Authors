const authorsController = require("../controller/authors.controller")

module.exports = app => {
    app.get("/api/authors", authorsController.findAllAuthor)
    app.get("/api/authors/:id", authorsController.findOneAuthor)
    app.post("/api/add-author", authorsController.createAuthor)
    app.post("/api/author/:id/likes", authorsController.likeAuthor)
    app.put("/api/update-author/:id", authorsController.updateAuthor)
    app.delete('/api/author/:id', authorsController.deleteAuthor)
}



