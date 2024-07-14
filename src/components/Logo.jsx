import React from 'react'
import {FireFilled} from '@ant-design/icons'
import IconLogoReact from '../assets/reactSVGicon/logo-react.jsx'

const Logo = () => {
  return (
    <div className='logo'>
      <div className='logo-icon'>
        {/* <FireFilled /> */}
       <IconLogoReact style={{ height: "30px", color:"62DAFC" }}  />
      </div>
    </div>
  )
}

export default Logo