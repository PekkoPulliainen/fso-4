const Blog = require("../models/blog");

const initialBlogs = [
  {
    title: "Peli blogi",
    author: "Jonne Jokela",
    url: "jokelablog.fi",
    likes: 10,
  },
  {
    title: "Jonne blogi",
    author: "Jonne Jakaja",
    url: "jonneblog.fi",
    likes: -1,
  },
];

const nonExistingId = async () => {
  const blog = new Blog({ content: "willremovethissoon" });
  await blog.save();
  await blog.deleteOne();

  return blog._id.toString();
};

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb,
};
