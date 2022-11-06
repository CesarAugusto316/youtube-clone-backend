const { createError } = require('../errorHandler');
const { VideoModel } = require('../models/modelVideo');

const add = async (req, res, next) => {
  const newVideo = new VideoModel({ userID: req.user.id, ...req.body });
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const video = await VideoModel.findById();
    if (!video) return next(createError(404, 'Video not found'));
    if (req.user.id === video.userID) {
      const updatedUser = await VideoModel.findByIdAndUpdate(
        req.params.id,
        {
          $set:req.body
        },{
          new:true
        }
      );
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    await VideoModel.findOne({ $where: { name: req.params.name } });
    res.status().send({ message: 'delete video' });
  } catch (error) {
    next(error);
  }
};



const controllerVideo = { add, update, remove };

module.exports = { controllerVideo };
