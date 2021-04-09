import React from 'react';
import { Box, Container } from 'styled-minimal';

import ChatContainer from 'containers/ChatContainer';

import Header from 'components/Header';

function ChatRoom() {
  return (
    <Box key="ChatRoom" data-testid="ChatRoom">
      <Header />
      <Container ySpacing>
        <ChatContainer />
      </Container>
    </Box>
  );
}

export default ChatRoom;
