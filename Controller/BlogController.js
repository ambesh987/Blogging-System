const BlogModel = require("../Models/BlogModel");

//controller to upload post
const uploadData = async (req, res) => {
  try {
    const data = await BlogModel.create(req.body);
    // console.log(data);
    res.status(200).json({
      status: "success",
      data,
    });
  } 
  catch (error) {
    res.status(500).json({ status: "failed", error });
  }
};

//contoller to update likes
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
  } 
  catch (error) {
    res.status(500).json({
      status: "failed to update likes",
    });
  }
};

//contoller to get all post using pagination
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
    const currentCount=data.length;
    res.status(200).json({
      status: "success",
      totalCount,
      currentCount,
      data,
    });
  } 
  catch (error) {
    res.status(500).json({
      status: "failed to fetch all posts",
    });
  }
};

//controller to search post usign title and author
const searchPost = async (req, res) => {
  try {
    const author = req.query.author;
    const title = req.query.title;
    const finalData = await BlogModel.find({$and:[{title},{author}] });
    res.status(200).json({
      status: "success",
      finalData,
    });
  } 
  catch (error) {
    res.status(500).json({
      status: "failed to search from DB",
    });
  }
};

//controller to search blog using id

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

const publish =async(req,res)=>{
    try {
        const id =req.params.id;
        console.log(id);
        await BlogModel.findByIdAndUpdate(id,{published:true});
        res.status(200).json({
            status: "Successfully Published"
        })
    } 
    catch (error) {
    res.status(401).json({
            status: "Error occured during Publishing",
            message : error
    })
}
}



module.exports = {
  uploadData,
  updateLikes,
  allPost,
  searchPost,
  blog,
  publish
};