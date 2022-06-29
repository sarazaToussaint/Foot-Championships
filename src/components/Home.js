import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { getLeagues } from './redux/leages';
import Leagues from './Leagues';

const Home = () => {
  const leagues = useSelector((state) => state.leagues);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeagues());
  }, []);

  return (
    <>
      <div className="main-container">
        <p className="total">
          Total Leagues
          &nbsp;
          Available:
          {' '}
          {leagues.length}
        </p>
        <div className="lower-container">
          {/* <div className="leagues-logos">
            {leagues.map((league) => (
              <div key={league.id}>
                <img src={league.logo} alt={league.name}
                 style={{ width: '25px', height: '25px' }} />
              </div>
            ))}
          </div> */}
          <Link to="/Leagues">
            <BiRightArrowCircle
              className="main-icon"
              style={{
                width: '25px',
                height: '25px',
                color: '#000',
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
