import { useState, useEffect } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import Link from 'next/link';
import style from '../styles/register.module.css';
import { useRouter } from 'next/router';

const login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const router = useRouter();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (!password) {
      console.log('Invalid credentials');
    } else {
      const userData = {
        email,
        password,
      };

      loginUser(userData);
    }
  };
  const loginUser = async (userdata) => {
    try {
      const response = await fetch(
        'https://redeemfc.onrender.com/api/users/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userdata),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('User', JSON.stringify(data.user));
      } else {
        console.log('Request failed with status:', response.status);
      }

      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className={style.registerForm} onSubmit={onSubmit}>
        <div className={style.title}>
          <h1>
            <FaUserAlt />
          </h1>
          <p>Login</p>
        </div>
        <div className={style.inputItems}>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            placeholder='Please Enter Your Email'
            className={style.formInputControl}
            onChange={onChange}
          />
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            placeholder='Please Enter Your Password'
            className={style.formInputControl}
            onChange={onChange}
          />
          <button type='submit' className={style.btn}>Submit</button>
          Don't have an Account?
          <Link href='/register'> Create an Account</Link>
        </div>
      </form>
    </div>
  );
};

export default login;
