class ChatView extends React.Component {
  handleSubmit = (e) => {
    // post message
  }
  render() {
    <SomeChatLayout>
      <ChatListContainer />
      <ChatInput onSubmit={handleSubmit} />
    </SomeChatLayout>
  }
}
