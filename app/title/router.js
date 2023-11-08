const express=require('express')
const router=express.Router()
const app = express();

// Import your controllers
const {createTitle, getTitles, getSubtitles, createSubtitleById} = require('./controller');

// Define routes for titles and subtitles
router.post('/api/createtitle', createTitle);
router.get('/api/gettitles', getTitles);

router.post('/api/createsubtitle/:id', createSubtitleById);
router.get('/api/getsubtitles', getSubtitles);

module.exports = router;