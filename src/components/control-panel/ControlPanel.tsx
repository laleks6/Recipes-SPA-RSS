import React from 'react';
import Filters from '../filters/Filteres';
import Search from '../search/Search';

function ControlPanel() {
  return (
    <div className="control-panel">
      <Search />
      <Filters />
    </div>
  );
}

export default ControlPanel;
