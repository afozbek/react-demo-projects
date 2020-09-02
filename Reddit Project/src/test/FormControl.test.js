import React from 'react';
import { mount } from 'enzyme';

import FormControl from './../components/NewLink/FormControl';

describe('Pagination.js', () => {
  it('should render correct buttons', () => {
    const wrapper = mount(
      <FormControl
        id="test-control"
        labelName="Test"
        type="text"
        placeholder="Denemeler"
        isRequired={true}
        changeHandler={() => {}}
      />
    );
    expect(wrapper.find('[data-test]').text()).toBe('Test');
  });
  it('shuold call changeHandler function when change happens', () => {
    const fakeChangePage = jest.fn();

    const wrapper = mount(
      <FormControl
        id="deneme"
        labelName="Test"
        type="text"
        placeholder="Denemeler"
        isRequired={true}
        changeHandler={fakeChangePage}
      />
    );

    const input = wrapper.find('[data-id="test"]');
    input.simulate('change');
    wrapper.update();
    expect(wrapper.props().changeHandler).toHaveBeenCalled();
  });
});
