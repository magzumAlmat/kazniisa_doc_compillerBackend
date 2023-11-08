const Title = require('./model/Title');
const Subtitle = require('./model/Subtitle');
// const TitleSubtitle = require('./model/TitleSubtitle');

const createTitle = async (req, res) => {
    try {
      const title = await Title.create(req.body)
      
      return res.status(201).json(title);
    } catch (error) {
      console.error('Error creating title:', error);
      return res.status(500).json({ error: 'Error creating title' });
    }
  };
  

// Get all titles
const getTitles = async (req, res) => {
  try {
    const titles = await Title.findAll();
    return res.status(200).json(titles);
  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving titles' });
  }
};




// Create a new subtitle
const createSubtitleById = async (req, res) => {
    try {
      
    
      console.log("REQ PARAMS = ", req.params.id);
      const subtitle = await Subtitle.create({
        name: req.body.name,
        p_number: req.body.p_number,
        text: req.body.text,
        TitleId: req.params.id,
      });
  
      return res.status(201).json(subtitle);
    } catch (error) {
      console.error('Error creating subtitle:', error);
      return res.status(500).json({ error: 'Error creating subtitle' });
    }
  };
  

// Get all subtitles
const getSubtitles = async (req, res) => {
  try {
    const subtitles = await Subtitle.findAll();
    return res.status(200).json(subtitles);
  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving subtitles' });
  }
};

// Add more methods for updating, deleting, and other operations as needed.


module.exports = {
  createSubtitleById,
  getSubtitles,
  createTitle,
  getTitles,
  // Add other controller methods here.
};


