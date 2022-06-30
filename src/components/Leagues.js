import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { getLeagues } from './redux/leages';
import classes from './Leagues.module.css';

const Leagues = () => {
  const leagues = useSelector((state) => state.leagues);
  // const details = useSelector((state) => state.details);
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
        <div className={classes.leagues}>
          {leagues.map((league, index) => (
            <div className={(index % 2 === 0) ? 'rowbg' : ''} key={league.id}>
              <Link key={league.id} to={`/${league.id}`} state={{ id: league.id }}>
                {index}
                <div className={classes.league} key={league.id}>
                  <div>
                    <img src={league.logo} alt={league.name} className={classes.image} />
                  </div>
                  <div className={classes.upperLeague}>
                    <BiRightArrowCircle
                      className={classes.leagueBtn}
                      style={{
                        width: '25px',
                        height: '25px',
                        color: '#fff',
                        background: 'transparent',
                      }}
                    />
                    <p className={classes.leagueName}>{league.name}</p>
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
