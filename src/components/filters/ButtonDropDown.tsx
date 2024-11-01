import React from 'react';
import imgBtn from '../../assets/filter.png';

type Props = {
  setactiveBlock: React.Dispatch<React.SetStateAction<boolean>>;
  activeBlock: boolean;
};

function ButtonDropDown({ setactiveBlock, activeBlock }: Props) {
  const clickBtn = () => {
    setactiveBlock(!activeBlock);
  };
  return (
    <button type="button" className="filters__btn" onClick={clickBtn}>
      <img src={imgBtn} alt="filter-img" />
    </button>
  );
}

export default ButtonDropDown;
