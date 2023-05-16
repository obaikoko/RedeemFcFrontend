import { useState, useEffect } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import Link from 'next/link';
import style from '../styles/register.module.css';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { toast } from 'react-toastify';

const register = () => {
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    club: '',
    state: '',
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2, age, club, state, username } =
    formData;

  const router = useRouter();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error('password do not match');
    } else {
      const userData = {
        fullName: name,
        userName: username,
        age,
        club,
        state,
        email,
        password,
      };
     

      toast.success( userData.fullName + ' registered successfully')
      registeruser(userData);

      router.push('/');
    }
  };
  const registeruser = async (data) => {
    await fetch('https://redeemfc.onrender.com/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div>
      <Head>
        <title>Redeem FC Registration</title>
      </Head>
      <form className={style.registerForm} onSubmit={onSubmit}>
        <div className={style.title}>
          <h1>
            <FaUserAlt />
          </h1>
          <p>Register Player</p>
        </div>
        <div className={style.inputItems}>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            placeholder='Fullname'
            className={style.formInputControl}
            onChange={onChange}
          />
          <input
            type='text'
            name='username'
            id='username'
            value={username}
            placeholder='Username'
            className={style.formInputControl}
            onChange={onChange}
          />
          <input
            type='text'
            name='state'
            id='state'
            value={state}
            placeholder='State of Origin'
            className={style.formInputControl}
            onChange={onChange}
          />
          <input
            type='text'
            name='age'
            id='age'
            value={age}
            placeholder='Age'
            className={style.formInputControl}
            onChange={onChange}
          />
          <input
            type='text'
            name='club'
            id='club'
            value={club}
            placeholder='Favourite Football Club'
            className={style.formInputControl}
            onChange={onChange}
          />
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            placeholder='Email'
            className={style.formInputControl}
            onChange={onChange}
          />
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            placeholder='Password'
            className={style.formInputControl}
            onChange={onChange}
          />
          <input
            type='password'
            name='password2'
            id='password2'
            value={password2}
            placeholder='Confirm Password'
            className={style.formInputControl}
            onChange={onChange}
          />
          <button type='submit' className={style.btn}>
            Submit
          </button>
          Already have an Account?
          <Link href='/login'> Login</Link>
        </div>
      </form>
    </div>
  );
};

export default register;
