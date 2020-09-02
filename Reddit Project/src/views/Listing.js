import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import LinkList from '../components/LinkList/LinkList';
import Pagination from '../components/common/Pagination';
import InfoMessage from './../components/common/InfoMessage';

const Main = ({ linkList }) => {
  const [filter, setFilter] = useState('');
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const changeFilter = (e) => {
    setFilter(e.target.value);

    setCurrentPage(0);
  };

  return (
    <React.Fragment>
      <NavLink className="o-app__newLinkButton" to="/new-link">
        <div className="o-app__plusBlock">+</div>
        <div className="o-app__desc">Submit a Link</div>
      </NavLink>

      {linkList.length > 0 ? (
        <React.Fragment>
          <hr />
          <select
            name="filter_linkList"
            id="filter_linkList"
            style={{ marginTop: 10, padding: 10 }}
            onChange={changeFilter}
          >
            <option value="ALL">Order By</option>
            <option value="MOST_VOTED">Most Voted(Z->A)</option>
            <option value="LESS_VOTED">Less Voted(A->Z)</option>
          </select>
        </React.Fragment>
      ) : (
        <InfoMessage>
          Hemen yeni bir link eklemek için yukarıdaki butonu kullanın. 👆👆😊😉
        </InfoMessage>
      )}

      <LinkList
        activeFilter={filter}
        pageSize={pageSize}
        currentPage={currentPage}
      />

      {linkList.length > pageSize && (
        <Pagination
          pageSize={pageSize}
          currentPage={currentPage}
          totalElements={linkList.length}
          changePage={(pageNumber) => setCurrentPage(pageNumber)}
        />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  linkList: state.linkList,
});

export default connect(mapStateToProps)(Main);
