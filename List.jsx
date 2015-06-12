class List extends React.Component {
  render() {
    let createItem = item => <li>{item}</li>;
    return <ul>{this.props.items.map(createItem)</ul>;
  }
}
