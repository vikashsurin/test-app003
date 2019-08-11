import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments';
const Header = ({ auth }) => {
  const renderContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href='/auth/google'>Login With Google</a>
          </li>
        );
      default:
        return [
          <li key='payment'>
            <Payments />
          </li>,
          <li key='3' style={{ margin: '0px 10px' }}>
            Credits:{auth.credits}
          </li>,
          <li key='logout'>
            <a href='/api/logout'>Logout</a>
          </li>
        ];
    }
  };
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to={auth ? '/surveys' : '/'} className='left brand-logo'>
          Emaily
        </Link>
        <ul className='right'>
          {/* <li>
            <a href='##'>Login With Google</a>
          </li> */}
          {renderContent()}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Header);
