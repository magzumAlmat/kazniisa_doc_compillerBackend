const express=require('express')
const router=express.Router()


// Import your controllers
const {createTitle, getTitles, getSubtitles, createSubtitleById,updateTitle,deleteTitle,updateSubTitle} = require('./controller');

// Define routes for titles and subtitles
router.put('/api/edittitle', updateTitle);
router.post('/api/createtitle', createTitle);
router.get('/api/gettitles', getTitles);
router.delete('/api/delete/:passedId', deleteTitle);

router.post('/api/createsubtitle', createSubtitleById);
router.get('/api/getsubtitles', getSubtitles);
router.put('/api/editsubtitle', updateSubTitle)
module.exports = router;