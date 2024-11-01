import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import LimitCards from './LimitCards';
import ButtonDropDown from './ButtonDropDown';

function Filters() {
  const [activeBlock, setactiveBlock] = useState(true);
  return (
    <div className="block-filters">
      <CSSTransition in={activeBlock} timeout={500} classNames="fade">
        <div className="filters">
          <LimitCards />
        </div>
      </CSSTransition>
      <ButtonDropDown
        setactiveBlock={setactiveBlock}
        activeBlock={activeBlock}
      />
    </div>
  );
}

export default Filters;
