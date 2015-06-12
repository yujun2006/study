class ListContainer extends React.Component {
  constructor(props) {
    return { items: [] }
  }
  componentWillMount() {
    // fetch items  and setState
  }
  render() {
    return <List items={this.state.items} />
  }
}
