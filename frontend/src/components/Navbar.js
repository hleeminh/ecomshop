import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'



const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-wrapper'>
        <div className='nav-left'>
          <span className='nav-language'>VN</span>
          <div className='nav-item-container'>
            <input className='nav-input'/>
            <Search style={{color: 'gray', fontSize: 16}}/>
          </div>
        </div>
        <div className='nav-center'><h1 className='nav-mainlogo'>T1 FASHION.</h1></div>
        <div className='nav-right'>
          <div className='nav-menu'>Register</div>
          <div className='nav-menu'>Sign in</div>
          <div className='nav-menu'>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar