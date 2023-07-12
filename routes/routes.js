import express from 'express';
import shortUrl from 'node-url-shortener';
import Url from '../models/url.js'


const router = express.Router();
router.get('/', async(req, res) => {
    const url = await Url.find()
    res.send(url);
})

router.post('/shortUrl', function(req, res) {
    try {
        shortUrl.short(req.body.url, function(err, surl) {
            const url = new Url({ url: req.body.url, shortUrl: surl })
            url.save()
            if (err) {
                console.error(err);
            } else {
                res.send({ shortUrl: surl })
            }
        })
    } catch (err) {
        res.status(500).send("Something went wrong")
    }
})
export default router;