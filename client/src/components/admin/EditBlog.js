import React, { useState, Fragment } from "react";
import FormElement from "../layout/FormElement";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editBlog } from "../../actions/blog";

const EditBlog= ({ match,editBlog }) => {
  const [formData, setFormData] = useState({
    blogtag: "",
    title: "",
    content: "",
    author: "",
  });

  const { blogtag, title, content, author } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    editBlog(match.params.id,blogtag, title, content, author);
  };
  return (
    <Fragment>
      <div className="container card mb-3 ">
        <div className="card-header">EDIT BLOG</div>
        <div className="card-body">
          <form onSubmit={(e) => onSubmit(e)}>
            <FormElement
              label="Blog Tag"
              name="blogtag"
              placeholder="Enter Blog Tag"
              type="text"
              value={blogtag}
              onChange={(e) => onChange(e)}
            />
            <FormElement
              label="Title"
              name="title"
              placeholder="Enter Title"
              type="text"
              value={title}
              onChange={(e) => onChange(e)}
            />
            <FormElement
              label="Content"
              name="content"
              placeholder="Enter Content"
              type="text"
              value={content}
              onChange={(e) => onChange(e)}
            />
            <FormElement
              label="Author"
              name="author"
              placeholder="Enter Author"
              type="text"
              value={author}
              onChange={(e) => onChange(e)}
            />
            <input
              type="submit"
              value="Edit Blog"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};
EditBlog.propTypes = {
  editBlog: PropTypes.func.isRequired,
};

export default connect(null, { editBlog })(EditBlog);
