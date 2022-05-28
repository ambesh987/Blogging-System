const BlogModel = require("../Models/BlogModel");

const uploadData = async (req, res) => {
  try {
    const data = await BlogModel.create(req.body);
    console.log(data);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    res.status(500).json({ status: "failed", error });
  }
};

const updateLikes = async (req, res) => {
  try {
    const id = req.params.id;
    let payload = await BlogModel.findById(id);
    payload.likes = payload.likes + 1;
    await BlogModel.findByIdAndUpdate(id, payload);
    await res.status(200).json({
      status: "success",
      message: "like updated",
      payload,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed to update likes",
    });
  }
};

const allPost = async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 10;
    const skip = (page - 1) * limit;

    const data = await BlogModel.find()
      .sort({ likes: -1 })
      .skip(skip)
      .limit(limit);

    const totalCount = await BlogModel.count();
    res.status(200).json({
      status: "success",
      totalCount,
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed to fetch all posts",
    });
  }
};

const searchPost = async (req, res) => {
  try {
    const author = req.query.author;
    const title = req.query.title;

    //    const data =  author && await BlogModel.find({author});
    const finalData =
      author == undefined
        ? await BlogModel.find({ title })
        : await BlogModel.find({ author });
    res.status(200).json({
      status: "success",
      finalData,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed to search from DB",
    });
  }
};

const blog = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await BlogModel.findById(id);
    res.status(200).json({
      status: "status",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed to get blog",
    });
  }
};
module.exports = {
  uploadData,
  updateLikes,
  allPost,
  searchPost,
  blog,
};