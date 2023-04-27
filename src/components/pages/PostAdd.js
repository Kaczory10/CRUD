import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/postsRedux";
import { Navigate, useNavigate } from "react-router-dom";

const PostAdd = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({
        title,
        author,
        publishedDate,
        shortDescription,
        content,
    }));

    navigate('/')
  };

  const isFormValid = () => title && author && publishedDate && shortDescription && content;

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <form onSubmit={handleSubmit} className="container-fluid">
            <div className="row flex-row gap-3">
              <div className="form-group text-start col-12 col-md-8 col-lg-6">
                <label htmlFor="title">Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Title"
                  name="title"
                />
              </div>
              <div className="form-group text-start col-12 col-md-8 col-lg-6">
                <label htmlFor="title">Author</label>
                <input
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  type="text"
                  className="form-control"
                  id="author"
                  placeholder="Author"
                  name="author"
                />
              </div>
              <div className="form-group text-start col-12 col-md-8 col-lg-6">
                <label htmlFor="published">Published</label>
                <input
                  value={publishedDate}
                  onChange={(e) => setPublishedDate(e.target.value)}
                  type="text"
                  className="form-control"
                  id="published"
                  placeholder="Published"
                  name="published"
                />
              </div>
              <div className="form-group text-start col-12">
                <label htmlFor="shortDescription">Short description</label>
                <textarea
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  className="form-control"
                  id="shortDescription"
                  rows="3"
                  name="shortDescription"
                  placeholder="Short description"
                ></textarea>
              </div>
              <div className="form-group text-start col-12">
                <label htmlFor="content">Main content</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="form-control"
                  id="content"
                  rows="6"
                  name="content"
                  placeholder="Main content"
                ></textarea>
              </div>
              <div className="col-auto">
                <button type="submmit" className="btn btn-primary" disabled={ !isFormValid() }>Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostAdd;
