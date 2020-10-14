import React from 'react';
import PropTypes from 'prop-types';

// const Contact = (props) => {
//     return (
//         <b className="Contact">
//             <img className="avatar" src={props.avatar} alt="UserAvatar"></img>
//             <div>
//                 <div className="name"> {props.name} </div>
//                 <div className="status">
//                     <div className={props.online ? "status-online" : "status-offline"}> </div>
//                     <div className="status-text"> {props.online ? "online" : "offline"}</div>
//                 </div>
//             </div>
//         </b>
//     );
// }

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online:this.props.online
        };
    }
    render() {
        return (
            <b className="Contact">
                <img className="avatar" src={this.props.avatar} alt="UserAvatar"></img>
                <div>
                    <div className="name"> {this.props.name} </div>
                    <div className="status" onClick={event => {
                            this.setState({online: !this.state.online})
                        }
                    }>
                        <div className={this.state.online ? "status-online" : "status-offline"}> </div>
                        <div className="status-text"> {this.state.online ? "online" : "offline"}</div>
                    </div>
                </div>
            </b>
        );
    };
};

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};

export default Contact;
