import React from 'react';
import { mount } from 'enzyme';
import { Notification } from './../components/common/Notification';

describe('Notification', () => {
  it('', () => {
    const notification = {
      displayTime: 1000,
      text: 'Text message',
    };
    const clearNotify = jest.fn();
    const wrapper = mount(
      <Notification notification={notification} clearNotify={clearNotify} />
    );
    expect(wrapper.find('.m-notification').text()).toBe(notification.text);
  });
  it('', () => {
    const notification = {
      displayTime: 1000,
      text: 'Text message',
    };
    const clearNotify = jest.fn();
    jest.useFakeTimers();
    const wrapper = mount(
      <Notification notification={notification} clearNotify={clearNotify} />
    );
    jest.advanceTimersByTime(1001);
    expect(wrapper.props().clearNotify).toHaveBeenCalled();
  });
});
