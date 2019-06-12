import React from "react";

const AnimateLoad = WrappedComponent => {
  return class extends React.Component {
    state = { didMount: false };
    componentDidMount() {
      setTimeout(() => {
        this.setState({ didMount: true });
      }, 0);
    }
    render() {
      const { didMount } = this.state;
      return (
        <div className={`fade-in ${didMount && "visible"}`}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};
export default AnimateLoad;
