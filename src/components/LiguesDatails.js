import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import { fetchDetails } from './redux/details';
import classes from './Details.module.css';

const LiguesDatails = () => {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state || {};

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, []);

  return (
    <>
      <div className={classes.Container}>
        <div className={classes.totalClub}>
          Total teams:
          {' '}
          {details.length}
        </div>
        {details.map((club) => (
          <div key={club.name} className={classes.clubContainer}>
            <div className={classes.nameLogo}>
              <img src={club.logo} alt={club.name} />
              <p>{club.name}</p>
            </div>
            <div className={classes.pointsArrow}>
              <p>
                {club.rank}
                {' '}
                points
              </p>
              <BiRightArrowCircle />
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default LiguesDatails;
