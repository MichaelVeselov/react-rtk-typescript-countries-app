import { ChangeEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';

import { setSearch } from './controls-slice';
import { selectSearch } from './controls-selectors';

type onSearch = ChangeEventHandler<HTMLInputElement>;

export const useSearch = (): [string, onSearch] => {
  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);

  const handleSearch: onSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return [search, handleSearch];
};
