import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { upVote, downVote } from '../../store/linkList/actions';
import DeleteTodoModal from '../modals/DeleteLinkModal';
import EditLinkModal from '../modals/EditLinkModal';

export const Link = ({ link, upVote, downVote }) => {
  const [isModelOpening, setModal] = useState(false);
  const [isModalEditing, setIsModalEditing] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const handleOperation = (e) => {
    if (e.target.dataset.editing) {
      setIsModalEditing(true);
    } else {
      setIsModalEditing(false);
    }

    setModal(true);
  };

  let modal = null;
  if (isModelOpening) {
    if (isModalEditing) {
      modal = <EditLinkModal closeModal={closeModal} link={link} />;
    } else {
      modal = <DeleteTodoModal closeModal={closeModal} link={link} />;
    }
  }

  return (
    <div className="m-link" data-test>
      <div className="m-link__point">
        <h1>{link.points}</h1>
        <p>POINTS</p>
      </div>
      <div className="m-link__desc">
        <h3 className="m-link__text">{link.text}</h3>
        <p className="m-link__url">({link.url})</p>

        <div className="m-link__buttonList">
          <button
            className="m-link__button"
            data-upvote-test
            onClick={() => upVote(link.id)}
          >
            &uarr; Up Vote
          </button>
          <button
            className="m-link__button"
            data-downvote-test
            onClick={() => downVote(link.id)}
          >
            &darr; Down Vote
          </button>
        </div>
      </div>

      <button
        className="m-link__editButton"
        data-edit-test
        data-editing
        onClick={handleOperation}
      >
        &#9998;
      </button>

      <button
        className="m-link__deleteButton"
        data-delete-test
        onClick={handleOperation}
      >
        X
      </button>

      {modal}
    </div>
  );
};

Link.propTypes = {
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  link: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  upVote,
  downVote,
};

export default connect(null, mapDispatchToProps)(Link);
