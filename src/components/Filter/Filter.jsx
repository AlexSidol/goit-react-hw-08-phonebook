import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { selectFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className={css.filter}>
      <label className={css.filter__label}>
        Find contacts by name
        <input
          className={css.filter__input}
          type="text"
          value={filter}
          onChange={evt => {
            const action = changeFilter(evt.target.value);
            dispatch(action);
          }}
        />
      </label>
    </div>
  );
};

export default Filter;
