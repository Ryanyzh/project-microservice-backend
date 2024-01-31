var express = require("express");
var router = express.Router();
const firebaseDatabase = require("./../config.js")
const sdgCollection = firebaseDatabase.collection("sdg")

router.get("/", async function(req, res, next) {
    const snapshot = await sdgCollection.get();
    const sdgList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(sdgList);
});

module.exports = router;