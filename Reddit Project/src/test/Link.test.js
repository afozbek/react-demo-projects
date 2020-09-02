import React from 'react';
import { mount } from 'enzyme';

import { Link } from './../components/LinkList/Link';

describe('Link.js', () => {
  it('should show correct text', () => {
    const upVote = jest.fn();
    const downVote = jest.fn();
    const link = {
      id: Math.random(),
      text: 'Random',
      url: 'random',
      points: 0,
      created_time: new Date().getTime(),
    };

    const wrapper = mount(
      <Link downVote={downVote} upVote={upVote} link={link} />
    );
    expect(wrapper.find('.m-link__text').text()).toBe(link.text);
  });

  it('should call click handlers', () => {
    const upVote = jest.fn();
    const downVote = jest.fn();
    const link = {
      id: Math.random(),
      text: 'Random',
      url: 'random',
      points: 0,
      created_time: new Date().getTime(),
    };

    const wrapper = mount(
      <Link downVote={downVote} upVote={upVote} link={link} />
    );

    const upVoteButton = wrapper.find('[data-upvote-test]');
    const downVoteButton = wrapper.find('[data-downvote-test]');
    const deleteButton = wrapper.find('[data-delete-test]');

    upVoteButton.simulate('click');
    downVoteButton.simulate('click');
    wrapper.update();
    expect(wrapper.props().upVote).toHaveBeenCalled();
    expect(wrapper.props().downVote).toHaveBeenCalled();
  });
});
