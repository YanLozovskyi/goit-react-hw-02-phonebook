const Filter = ({ value, onChange }) => (
  <>
    <label>
      Фильтр
      <input
        type="text"
        placeholder="Find contacts"
        value={value}
        onChange={onChange}
      />
    </label>
  </>
);

export default Filter;
