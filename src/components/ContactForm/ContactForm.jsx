import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = { name: '', number: '' };

  nameInputId = nanoid();
  telInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const contactId = nanoid();
    const { name, number } = this.state;
    const newContact = { name, id: contactId, number };

    this.props.onSubmit(newContact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.formContainer} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          <input
            className={css.formInput}
            onChange={this.handleChange}
            type="text"
            name="name"
            placeholder="Enter contact name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            id={this.nameInputId}
            required
          />
        </label>
        <label htmlFor={this.telInputId}>
          <input
            className={css.formInput}
            onChange={this.handleChange}
            type="tel"
            name="number"
            placeholder="Enter contact number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            id={this.telInputId}
            required
          />
        </label>
        <button className={css.submitButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
