import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: String,
  slug: String,
  desc: String,
  content: String,
  readTime: String,
  category: String,
  tags: [String],
  date: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

blogSchema.set('toJSON', {
  virtuals: true,
  transform: (_, ret) => {
    ret._id = ret._id.toString();
    ret.date = ret.date?.toISOString();
    delete ret.__v;
    return ret;
  }
});

const blogModel = mongoose.model('Blog', blogSchema);

export default blogModel;