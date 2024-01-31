var express = require("express");
var router = express.Router();
var firestore = require('../firebase'); 
// Access Firestore from the Firebase app instance
const sdgCollection = firestore.collection("sdg");
console.log(sdgCollection)
router.get("/", async function(req, res, next) {
    const snapshot = await sdgCollection.get();
    const sdgList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(sdgList);
});

module.exports = router;
