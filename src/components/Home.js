import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { getLeagues } from './redux/leages';
import Leagues from './Leagues';
import classes from './Home.module.css';

const Home = () => {
  const leagues = useSelector((state) => state.leagues);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeagues());
  }, []);

  return (
    <>
      <div className={classes.mainContainer}>
        <p className={classes.total}>
          Total Leagues
          &nbsp;
          Available:
          {' '}
          {leagues.length}
        </p>
        <div className="lowerContainer">
          <Link to="/Leagues">
            <BiRightArrowCircle
              className={classes.mainIcon}
              style={{
                width: '25px',
                height: '25px',
                color: '#fff',
                border: 'none',
                zIndex: '4',
                opacity: '1',
              }}
            />
          </Link>
        </div>
      </div>
      <Leagues />
    </>
  );
};

export default Home;
