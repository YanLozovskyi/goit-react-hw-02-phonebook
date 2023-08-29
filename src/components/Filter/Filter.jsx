import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

const filterId = nanoid();

const Filter = ({ value, onChange }) => (
  <>
    <label className={css.filterLabel} htmlFor={filterId}>
      <input
        className={css.filterInput}
        type="text"
        placeholder="Find contacts"
        value={value}
        onChange={onChange}
        id={filterId}
      />
    </label>
  </>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
