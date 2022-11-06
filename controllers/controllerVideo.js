const { createError } = require('./../errorHandler');
const { VideoModel } = require('./../models/modelVideo');

const add = async (req, res, next) => {
  const newVideo = new VideoModel({ userID: req.user.id, ...req.body });
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (error) {
    next();
  }
};

const update = async (req, res, next) => {
  try {
    const video = await VideoModel.findById(req.params.id);
    if (!video) return next(createError(404, 'Video not found'));

    if (req.params.id === req.user.id) {
      const updateUser = await VideoModel.findByIdAndUpdate(req.params.id,
        {
          $set: req.params.id
        }, {
        new: true
      }
      );
      res.status(200).json(updateUser);
    }
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const video = await VideoModel.findById(req.params.id);
    if (!video) return next(createError(404, 'video not found'));

    if (req.user.id === video.userID) {
      await VideoModel.findByIdAndDelete(req.params.id);
      res.status(200).json('this video has been delete');
    } else {
      return next(createError(404, 'You can delete only your video!'));
    }

  } catch (error) {
    next(error);
  }
};

const get = async (req, res, next) => {
  try {
    const video = await VideoModel.findById(req.params.id);
    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};



const controllerVideo = { add, update, remove, get };
module.exports = { controllerVideo };