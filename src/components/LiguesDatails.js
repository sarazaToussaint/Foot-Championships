import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
// import { FaMicrophone } from 'react-icons/fa';
// import { IoChevronBackOutline, IoSettingsOutline } from 'react-icons/io5';
import { fetchDetails } from './redux/details';

const LiguesDatails = () => {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, []);

  return (
    <>
      {/* <div className="nav-container">
        <Link to="/"><IoChevronBackOutline style={{ color: '#fff' }} /></Link>
        <p>title</p>
        <div className="nav-icons">
          <FaMicrophone />
          <IoSettingsOutline />
        </div>
      </div> */}
      <div className="grid-container">
        <div>
          <h2>Check all Club info in this Championship</h2>
        </div>
        <div>
          Total teams:
          {' '}
          {details.length}
        </div>
        {details.map((club) => (
          <div key={club.name} className="club-container">
            <div className="name-logo">
              <img src={club.logo} alt={club.name} />
              <p>{club.name}</p>
            </div>
            <div className="points-arrow">
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
