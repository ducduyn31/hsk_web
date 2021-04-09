import React from 'react';

import ChatRoom from 'routes/ChatRoom';

import { render, screen } from 'test-utils';

describe('ChatRoom', () => {
  it('should render properly', () => {
    render(<ChatRoom />);

    expect(screen.getByTestId('ChatRoom')).toMatchSnapshot();
  });
});
