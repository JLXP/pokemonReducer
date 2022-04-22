import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Message } from 'semantic-ui-react';
import { clearError } from '../../actions';
import Menu from '../Menu';
import './styles.css';

const Layout = ({ children }) => {
  const errorMessage = useSelector((state)=>state.error);
  const dispatch = useDispatch();

  return (
    <div>
      <Menu />
      {errorMessage && (
        <div className='wrapper'>
          <Message
            
            content={errorMessage}
            color='red'
          />
        </div>
      )}
    </div>
    
  );
};

export default Layout;
