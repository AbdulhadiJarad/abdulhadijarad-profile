import type { NextPage } from 'next';
import { useState } from 'react';
import InstagramIcon from '../Icons';
import Gitlab from '../Icons/Gitlab';
import Facebook from '../Icons/Facebook';
import Email from '../Icons/Email';
import Linkedin from '../Icons/Linkedin';


const SocialConnection: NextPage = () => {

  return (
    <div style={{position: 'fixed', bottom: 0, marginLeft: 50}}>
        <div style={{ marginTop: '20px'}}>
            <InstagramIcon/>
            </div>
         <div style={{marginTop: '20px'}}>
            <Gitlab/>
        </div>
        <div style={{marginLeft: '-10px', marginTop: '20px'}}>
            <Linkedin/>
        </div>
          <div style={{marginLeft: '-10px', marginTop: '20px'}}>
            <Email/>
        </div>
       <div className="vl">
</div>
    </div>
  )
}

export default SocialConnection
