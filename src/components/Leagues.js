import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { getLeagues } from './redux/leages';

const Leagues = () => {
  const leagues = useSelector((state) => state.leagues);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeagues());
  }, [dispatch]);

  return (
    <>
      <div className="grid-container">
        <div>
          <h2>WELCOME TO TOP 20 FIFA LEAGUES</h2>
        </div>
        <div className="leages" />
        <div className="leagues">
          {leagues.map((league) => (
            <div className="league" key={league.id}>
              <Link key={league.id} to={`/${league.id}`} state={{ id: league.id }}>
                <div className="league" key={league.id}>
                  <div>
                    <img src={league.logo} alt={league.name} className="image" />
                  </div>
                  <div className="upper-league">
                    <BiRightArrowCircle
                      className="league-btn"
                      style={{
                        width: '25px',
                        height: '25px',
                        color: '#000',
                        background: 'transparent',
                      }}
                    />
                    <p className="league-name">{league.name}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Leagues;
