import React, { Component } from "react";

export default class LifeCycleB extends Component {
  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }

  constructor(props) {
    super(props);
    this.state = {
      name: "John",
    };
    console.log("LifeCycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("LifeCycleB render");
    return (
      <div>
        <div>LifeCycleB Component</div>
      </div>
    );
  }
}
