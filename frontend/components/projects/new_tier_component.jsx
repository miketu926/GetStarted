import React from 'react';


const TierItem = ({ tier, key, updateTier }) => {
  return (

    <div className="tier-box">
      <h2 className='basics-title2'>Title</h2>
      <h2 className='basics-title3'>Briefly describe this reward.</h2>
      <input type="text"
        className='session-input input-box'
        placeholder='Signed limited-edition'
        value={tier.title}
        onChange={updateTier("title")} 
      />

      <h2 className='basics-title2'>Pledge amount</h2>
      <h2 className='basics-title3'>Set a minimum pledge amount for this reward.</h2>
      <input type="text"
        className='session-input input-box'
        placeholder='1'
        value={tier.amount}
        onChange={updateTier("amount")} 
      />

      <h2 className='basics-title2'>Description</h2>
      <h2 className='basics-title3'>Describe this reward in more detail.</h2>
      <textarea
        className='session-input input-box'
        cols="80"
        rows="5"
        value={tier.desc}
        placeholder='Get an early copy - hot off the press!'
        onChange={updateTier("description")} 
      />
    </div>

    );
};

export default TierItem;