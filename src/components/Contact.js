import React from 'react';
import PropTypes from 'prop-types';

const Contact = (props) => {
    return (
        <b className="Contact">
            <img className="avatar" src={props.avatar} alt="UserAvatar"></img>
            <div>
                <div className="name"> {props.name} </div>
                <div className="status">
                    <div className={props.online ? "status-online" : "status-offline"}> </div>
                    <div className="status-text"> {props.online ? "online" : "offline"}</div>
                </div>
            </div>
        </b>
    );
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};
 
export default Contact;
