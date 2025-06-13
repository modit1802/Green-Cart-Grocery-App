import React, { useState } from 'react';
import { assets } from '../assets/assets';

// Capitalized component name
const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    className='w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition'
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required
  />
);

const AddAddress = () => {
  // State for address form
  const [address, setAddress] = useState({
    firstname: '',
    lastname: '',
    email: '',
    street:'',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
       ...prevAddress, 
       [name]: value
     }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(address); // handle form submission here
  };

  return (
    <div className='mt-16 pb-16'>
      <p className='text-2xl md:text-3xl text-gray-500'>
        Add Shipping <span className='font-semibold text-primary'>Address</span>
      </p>

      <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
        <div className='flex-1 max-w-md'>
          <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-sm'>
            <div className='grid grid-cols-2 gap-4'>
              <InputField
                handleChange={handleChange}
                address={address}
                name='firstname'
                type='text'
                placeholder='First Name'
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name='lastname'
                type='text'
                placeholder='Last Name'
              />
            </div>

            <InputField handleChange={handleChange} address={address} name='email' type='email' placeholder='Email' />
            <InputField handleChange={handleChange} address={address} name='street' type='text' placeholder='Street' />
            <div className='grid grid-cols-2 gap-4'>
              <InputField
                handleChange={handleChange}
                address={address}
                name='city'
                type='text'
                placeholder='city'
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name='Country'
                type='text'
                placeholder='Country'
              />
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <InputField
                handleChange={handleChange}
                address={address}
                name='Zipcode'
                type='Number'
                placeholder='ZipCode'
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name='State'
                type='text'
                placeholder='State'
              />
            </div>
            <InputField
                handleChange={handleChange}
                address={address}
                name='Phone'
                type='text'
                placeholder='Phone'
              />

            
            <button
              type='submit'
              className='mt-4 px-4 py-2 w-full cursor-pointer hover:bg-primary-dull bg-primary text-white rounded'
            >
              Save Address
            </button>
          </form>
        </div>
        <img
          className='md:mr-16 mb-16 md:mt-0'
          src={assets.add_address_iamge}
          alt='Add Address'
        />
      </div>
    </div>
  );
};

export default AddAddress;
