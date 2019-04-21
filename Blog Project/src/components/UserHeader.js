import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    const user = this.props.user;

    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  };
};
export default connect(mapStateToProps)(UserHeader);
