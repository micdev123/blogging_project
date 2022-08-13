const mongoose = require('mongoose');

// Creating post model
const PostSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            required: true,
            unique: true
        },
        title: {
            type: String,
            required: true,
            unique: true
        },
        desc: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: true
        },
        tags: {
            type: [String],
            default: [""]
        },
        likeCount: {
            type: Number,
            default: 0
        },
        creatorId: {
            type: String,
        },
        creator: {
            type: String,
        },
        creatorPhoto: {
            type: String,
            default: "",
        },
        creatorLink: {
            type: String,
            default: "",
        }
    },
    {timestamps: true}
)

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;