import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ProgressBar, withProgress } from 'reprogressbars';

@withProgress
class CustomProgressBar extends Component {
  render() {
    return (
      <div>
        Loading percentage: {this.props.progress.value.toFixed(1)}%
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }
  toggleLoading() {
    this.setState({
      isLoading: !this.state.isLoading
    });
  }
  render() {
    const options = {
      isLoading: this.state.isLoading,
      className: "fixed-progress-bar",
      color: "#B71C1C",
      height: "2px",
      useBoxShadow: true
    };

    return (
      <div>
        <ProgressBar {...options} />
        <button onClick={() => this.toggleLoading()}>{ this.state.isLoading ? 'End Loading' : 'Begin Loading'}</button>
        <CustomProgressBar isLoading={this.state.isLoading} />
      </div>);
  }
}


ReactDOM.render((
  <App />
), document.getElementById('root'));
