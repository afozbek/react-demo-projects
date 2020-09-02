import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { notify } from '../store/notification/actions';
import { addLink } from '../store/linkList/actions';
import { SubmitButton } from '../components/common/SubmitButton';
import FormControl from '../components/NewLink/FormControl';

import { isValidURL, haveEnoughCharacters } from './../util/index';

const NewLink = ({ addLink, notify }) => {
  const [linkName, setLinkName] = useState('');
  const [linkUrl, setLinkUrl] = useState('');

  const isValidForm = () => {
    let formIsValid = true;
    let errorMessage = '';

    if (!isValidURL(linkUrl)) {
      formIsValid = false;
      errorMessage = 'Lütfen düzgün bir url giriniz';
    }

    if (!haveEnoughCharacters(linkName)) {
      formIsValid = false;
      errorMessage = 'Lütfen boşluk harici en az 5 karakter giriniz.';
    }

    if (!formIsValid) {
      notify({ text: errorMessage, hasError: true });
    }
    return formIsValid;
  };

  const addNewLink = (e) => {
    e.preventDefault();

    const time = new Date().getTime();
    const newLink = {
      id: Math.random(),
      text: linkName,
      url: linkUrl,
      points: 0,
      created_time: time,
      last_voted_time: time,
    };

    if (!isValidForm()) {
      return;
    }

    addLink(newLink);

    const notifyText = linkName + ' added.';
    notify({ text: notifyText });

    e.target.reset();

    // Link ekledikten sonra ilk inputa focus ol
    document.querySelector('.m-linkForm__input').focus();
  };

  return (
    <form className="m-linkForm" action="POST" onSubmit={addNewLink}>
      <NavLink className="m-linkForm__navLink" to="/">
        &#8592; Return to List
      </NavLink>
      <h1 className="m-linkForm__header">Add New Link</h1>

      <FormControl
        id="link_name"
        labelName="Link Name:"
        type="text"
        placeholder="e.g. Alphabet"
        isRequired={true}
        changeHandler={(e) => setLinkName(e.target.value)}
      />

      <FormControl
        id="link_url"
        labelName="Link Url:"
        type="url"
        placeholder="e.g. http://abc.xyz"
        isRequired={true}
        changeHandler={(e) => setLinkUrl(e.target.value)}
      />

      <SubmitButton />
    </form>
  );
};

NewLink.propTypes = {
  addLink: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    linkList: state.linkList,
    notification: state.notification,
  };
};

const mapDispatchToProps = {
  addLink,
  notify,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewLink);
