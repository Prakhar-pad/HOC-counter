import React from 'react';

const customHOC = (WrappedComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    incrementCounter = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCounter={this.incrementCounter}
          {...this.props}
        ></WrappedComponent>
      );
    }
  }
  return NewComponent;
};
export default customHOC;
