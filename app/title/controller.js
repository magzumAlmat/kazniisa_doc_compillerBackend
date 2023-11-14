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



  const deleteTitle=async(req,res)=>{

    console.log('delete title started',req.params.passedId)
    try {
      const data = await Title.destroy({
          where: {
            id:req.params.passedId
          }
      })
      res.status(200).end()
  } catch (error) {
      res.status(500).send(error)
  }
     
    
  
  }  
  
const updateTitle=async(req,res)=>{
  console.log('updateTitle',req.body.t_number,req.body.name,req.body.passedId)
  try {
    await Title.update({
      t_number: req.body.t_number,
      name: req.body.name,
       
    }, {
        where: {
        id: req.body.passedId
        }
    })
  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving titles' });
  }


}

const updateAllTitleNumbers = async (req, res) => {
  try {
    let t_numbers = [];
    t_numbers.push(req.body.t_number)
    const t_numericArray = t_numbers[0].split(',').map(Number);
 

    let passid=[]
    passid.push(req.body.passedId)
    const numericArray = passid[0].split(',').map(Number);

    console.log('numberARRAY',numericArray,'tnumbers=',t_numericArray);
   
    // Если t_numbers не является массивом, создайте массив из одного элемента
    if (!Array.isArray(t_numbers)) {
      t_numbers = [t_numbers];
    }

    if (t_numericArray.length !== numericArray.length) {
      return res.status(400).json({ error: 'Array lengths do not match' });
    }

    for (let i = 0; i < t_numericArray.length; i++) {
      console.log('3 item inside loop', t_numericArray[i]);
      await Title.update(
        // console.log('t_numericArray[i] insideupdate====',t_numericArray[i])
        { t_number: t_numericArray[i] },
        { where: { id: numericArray[i] } }
      );
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error updating records:', error);
    return res.status(500).json({ error: 'Error updating records' });
  }
};




const updateSubTitle=async(req,res)=>{
  console.log('updateTitle',req.body.p_number,req.body.name,'passedID=',req.body.passedId,'text===',req.body.text)
  try {
    await Subtitle.update({
      p_number: req.body.p_number,
      name: req.body.name,
      text:req.body.text,
    }, {
        where: {
        id: req.body.passedId
        }
    })
  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving titles' });
  }


}
// Get all titles
const getTitles = async (req, res) => {
  try {
    const titles = await Title.findAll();
    // console.log("Titles===============", titles)
    return res.status(200).send(titles);
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
        TitleId: req.body.TitleId,
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
  updateTitle,
  deleteTitle,
  updateSubTitle,
  updateAllTitleNumbers
  // Add other controller methods here.
};


