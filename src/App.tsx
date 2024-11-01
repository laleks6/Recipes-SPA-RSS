/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from 'react';

import './style/main-style.scss';
import { useAppSelector, useAppDispatch } from './hook';
import Result from './components/result/Result';
import ErrorBtn from './components/error-btn/ErrorBtn';
import Pogination from './components/pagination/Pagination';
import { fetchData } from './store/reduxSlice';
import Header from './components/header/Header';
import ControlPanel from './components/control-panel/ControlPanel';

function App() {
  const { data, valueSearch, activePage, limit } = useAppSelector(
    (state) => state.project
  );
  console.log(data, 'data');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData({ valueSearch, limit, activePage }));
  }, [dispatch, activePage, valueSearch, limit]);
  return (
    <main>
      <Header />
      <section>
        <div className="block-components">
          <ControlPanel />
          <Result />
        </div>
        {data && (
          <Pogination
            propsActivePage={activePage}
            dataTotal={data.total}
            dataLimit={limit}
          />
        )}
        <ErrorBtn />
      </section>
    </main>
  );
}

export default App;
