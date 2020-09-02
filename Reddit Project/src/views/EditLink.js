import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useParams, useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { notify } from '../store/notification/actions';
import { editLink } from '../store/linkList/actions';
import { SubmitButton } from '../components/common/SubmitButton';
import FormControl from '../components/NewLink/FormControl';

import { isValidURL, haveEnoughCharacters } from './../util/index';

const EditLink = ({ editLink, notify, linkList }) => {
  const { linkId } = useParams();
  const history = useHistory();
  const [linkName, setLinkName] = useState('');
  const [linkUrl, setLinkUrl] = useState('');

  useEffect(() => {
    const [currentLink] = linkList.filter((link) => link.id === +linkId);

    if (currentLink) {
      setLinkName(currentLink.text);
      setLinkUrl(currentLink.url);
    } else {
      notify({
        text: 'Belirtilen id ile ilgili link bulunamadı!',
        hasError: true,
      });

      // Go index page
      history.push('/');
    }
  }, [linkId]);

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

  const editLinkHandler = (e) => {
    e.preventDefault();

    const newLink = {
      text: linkName,
      url: linkUrl,
    };

    if (!isValidForm()) {
      console.log('Valid Değil');
      return;
    }

    editLink(+linkId, newLink);

    const notifyText = linkName + ' edited.';
    notify({ text: notifyText });

    // Link ekledikten sonra ilk inputa focus ol
    document.querySelector('.m-linkForm__input').focus();
  };

  return (
    <form className="m-linkForm" action="POST" onSubmit={editLinkHandler}>
      <NavLink className="m-linkForm__navLink" to="/">
        &#8592; Return to List
      </NavLink>
      <h1 className="m-linkForm__header">Edit Link</h1>

      <FormControl
        id="link_name"
        labelName="Link Name:"
        type="text"
        placeholder="e.g. Alphabet"
        isRequired={true}
        changeHandler={(e) => setLinkName(e.target.value)}
        value={linkName}
      />

      <FormControl
        id="link_url"
        labelName="Link Url:"
        type="url"
        placeholder="e.g. http://abc.xyz"
        isRequired={true}
        changeHandler={(e) => setLinkUrl(e.target.value)}
        value={linkUrl}
      />

      <SubmitButton />
    </form>
  );
};

EditLink.propTypes = {
  editLink: PropTypes.func.isRequired,
  linkList: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    linkList: state.linkList,
    notification: state.notification,
  };
};

const mapDispatchToProps = {
  editLink,
  notify,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditLink);
