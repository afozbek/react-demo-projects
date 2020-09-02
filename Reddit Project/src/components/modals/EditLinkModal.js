import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { editLink } from '../../store/linkList/actions';
import { notify } from '../../store/notification/actions';
import FormControl from './../NewLink/FormControl';

const EditLinkModal = ({ closeModal, link, editLink, notify }) => {
  const [linkText, setLinkText] = useState(link.text);
  const [linkUrl, setLinkUrl] = useState(link.url);
  const modal = useRef();

  const overlayClickHandler = (e) => {
    if (e.target === modal.current) {
      closeModal();
    }
  };

  const editLinkHandler = () => {
    const newLink = {
      text: linkText,
      url: linkUrl,
    };

    editLink(link.id, newLink);

    const notifyText = link.text + ' edited.';
    notify({ text: notifyText });

    closeModal();
  };

  return (
    <div
      className="m-modal"
      role="dialog"
      ref={modal}
      onClick={overlayClickHandler}
    >
      <div className="m-modal__container">
        <h2 className="m-modal__header">Remove Link</h2>
        <div className="m-modal__body">
          <div className="m-modal__buttonWrapper">
            <FormControl
              id="link_name"
              labelName="Link Name:"
              type="text"
              placeholder="e.g. Alphabet"
              isRequired={true}
              changeHandler={(e) => setLinkText(e.target.value)}
              value={linkText}
            />

            <FormControl
              id="link_url"
              labelName="Link Url:"
              type="url"
              placeholder="e.g. http://abc.xyz"
              isRequired={true}
              value={linkUrl}
              changeHandler={(e) => setLinkUrl(e.target.value)}
            />

            <button className="a-submitBtn" onClick={editLinkHandler}>
              UPDATE
            </button>
            <button className="a-submitBtn" onClick={() => closeModal()}>
              CANCEL
            </button>
          </div>

          <button
            className="m-modal__closeBtn"
            aria-label="You can close dialog from here by pressing enter or space key."
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

EditLinkModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  link: PropTypes.object.isRequired,
  editLink: PropTypes.func.isRequired,
  notify: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  editLink,
  notify,
};

export default connect(null, mapDispatchToProps)(EditLinkModal);
