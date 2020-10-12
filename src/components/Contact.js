import React from 'react';

const Contact = () => {
    return (
        <b className="Contact">
            <img className="avatar" src ="https://randomuser.me/api/portraits/women/18.jpg" alt="UserAvatar"></img>
            <div>
                <div className="name">Dianne Rice</div>
                <div className="status">
                    <div className="status-online"> </div>
                    <div className="status-text">online</div>
                </div>
            </div>
        </b>
    );
}

export default Contact;