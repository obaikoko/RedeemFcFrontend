import Link from 'next/link';
import React, { useState } from 'react';
import style from '../styles/players.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const players = () => {
  const [players, setPlayer] = useState('');
 

  const router = useRouter();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('User'));
  
    if (!userInfo) {
      router.push('/login');
    }
    loadPlayers();
  }, []);

  const loadPlayers = async () => {
    const res = await fetch('https://redeemfc.onrender.com/api/users');
    const data = await res.json();
    setPlayer(data);
  };

  return (
    <div>

      {players && (
        <div className={style.card}>
          <div className={style.title}>
            <h1>PLAYERS</h1>
          </div>
          <div className={style.container}>
            {players &&
              players.map((player, index) => (
                <Link
                  className={style.link}
                  href={'/players/' + player._id}
                  key={player._id}
                >
                  <p>
                    {index + 1}) {player.fullName}
                  </p>
                </Link>
              ))}
          </div>
          <p>
            If you are player and your name is not listed above kindly register
            to add your name to the list. <br />
            Select a player to see player's info.
          </p>
          <Link href='/register'>Register</Link>
        </div>
      )}
      {!players && <p className={style.loading}>Loading players...</p>}
    </div>
  );
};

export default players;
