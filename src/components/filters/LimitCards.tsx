import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hook';
import { setLimit } from '../../store/reduxSlice';

function LimitCards() {
  const dispatch = useAppDispatch();
  const changeLimit = (el: number) => dispatch(setLimit(el));
  const { limit } = useAppSelector((state) => state.project);
  const f = (event: { target: { value: string } }) => {
    changeLimit(+event.target.value);
  };
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="lable__dropdown">
      <select className="dropdown" value={`${limit}`} onChange={f}>
        <option className="dropdown-item" value="5">
          5
        </option>
        <option className="dropdown-item" value="10">
          10
        </option>
        <option className="dropdown-item" value="50">
          All
        </option>
      </select>
    </label>
  );
}
export default LimitCards;
