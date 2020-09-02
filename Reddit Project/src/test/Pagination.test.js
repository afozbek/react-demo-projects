import React from 'react';
import { mount } from 'enzyme';
import Pagination from '../components/common/Pagination';

describe('Pagination.js', () => {
  it('should render correct buttons', () => {
    const wrapper = mount(<Pagination totalElements={26} pageSize={5} />);
    expect(wrapper.find('[data-test="paginationButton"]').length).toBe(6);
  });
  it('shuold call changePage function when button is clicked', () => {
    const fakeChangePage = jest.fn();
    const wrapper = mount(
      <Pagination totalElements={26} pageSize={5} changePage={fakeChangePage} />
    );
    const button = wrapper.find('[data-test="nextPageButton"]');
    button.simulate('click');
    wrapper.update();
    expect(wrapper.props().changePage).toHaveBeenCalled();
  });
});
