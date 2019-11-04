import React from 'react';
import { Notification, useNotification } from '../index';
import renderer from 'react-test-renderer';

test('Should render successfully', () => {
  const component = renderer.create(<Notification />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
