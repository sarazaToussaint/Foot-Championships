/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { fetchLeagues, leaguesFilter } from './redux/league';
import classes from './Leagues.module.css';

const Leagues = () => {
  const leagues = useSelector((state) => state.leagues);
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(fetchLeagues());
  }, [dispatch]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    dispatch(leaguesFilter(query));
  };

  return (
    <>
      <div className="grid-container">
        <div>
          <h2>WELCOME TO TOP 20 FIFA LEAGUES</h2>
        </div>
        <div className={classes.surchBar}>
          <input type="text" placeholder="Enter league name" value={query} onChange={handleChange} />
        </div>
        <div className={classes.leagues}>
          {leagues.map((league) => (
            <div className={classes.league} key={league.id}>
              <Link key={league.id} to={`/${league.id}`} state={{ id: league.id }}>
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
