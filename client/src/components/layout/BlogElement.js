import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const BlogElement = (props) => {
    const { blogtag, title, content, author, picture, date, id } = props
    return (

        <div className="col-lg-4">
            <div className="latest-item set_bg" style={{ backgroundImage: `url('${picture.data}')` }} >
                <div className="li-tag">{blogtag}</div>
                <div className="li-text">
                    <h5><Link to={`/blog/${id}`}>{title}</Link></h5>
                    <span><i className="fa fa-clock-o"></i> <Moment parse="YYYY-MM-DD" format="YYYY/MM/DD"> {date}
                    </Moment></span>
                </div>
            </div>
        </div >

    )
};



export default BlogElement;