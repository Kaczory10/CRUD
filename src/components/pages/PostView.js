import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getPostById, removePost } from "../../store/postsRedux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const PostView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => getPostById(state, id));
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePostRemove = () => {
    handleClose();
    dispatch(removePost(id))
  }

  if (!post) return <Navigate to="/" />;

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-6 text-start">
            <h3>{post.title}</h3>
            <div>
              <span className="fw-bold">Author: </span>
              <span>{post.author}</span>
            </div>
            <div>
              <span className="fw-bold">Published: </span>
              <span>{post.publishedDate}</span>
            </div>
            <p>{post.content}</p>
          </div>
          <div className="col-4">
            <div className="d-flex gap-3 align-items-start">
              <button className="btn btn-outline-primary">Edit</button>
              <button className="btn btn-outline-danger" onClick={ handleShow }>Delete</button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will remove post permanently</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handlePostRemove}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostView;
