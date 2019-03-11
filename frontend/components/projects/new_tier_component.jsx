import React from 'react';


const TierItem = ({ tier, idx, update }) => {
  return (

    <div>
      <h2 className='basics-title2'>Title</h2>
      <h2 className='basics-title2'>Briefly describe this reward.</h2>
      <input type="text"
        className='session-input input-box'
        placeholder='Signed limited-edition'
        value={tier.title}
        // onChange={} 
      />

      <h2 className='basics-title2'>Pledge amount</h2>
      <h2 className='basics-title2'>Set a minimum pledge amount for this reward.</h2>
      <input type="text"
        className='session-input input-box'
        placeholder='1'
        value={tier.amount}
        // onChange={} 
      />

      <h2 className='basics-title2'>Description</h2>
      <h2 className='basics-title2'>Describe this reward in more detail.</h2>
      <textarea
        className='session-input input-box'
        cols="80"
        rows="10"
        value={tier.desc}
        placeholder='Get an early copy - hot off the press!'
        // onChange={} 
      />
    </div>

    );
};

export default TierItem;