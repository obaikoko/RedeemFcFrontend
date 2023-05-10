import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import style from '../styles/players.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react';

const players = () => {
  const { data: session, status } = useSession({ required: true });
  const [players, setPlayer] = useState('');

  const router = useRouter();

  useEffect(() => {
    loadPlayers();
  }, []);

  const loadPlayers = async () => {
    const res = await fetch('https://redeemfc.onrender.com/api/users');
    const data = await res.json();
    setPlayer(data);
  };
  if (status === 'authenticated') {
    return (
      <div>
        <Head>
          <title>Redeem FC Players</title>
        </Head>

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

            {session && session.user.email === 'jesseobinna7@gmail.com' ? (
              <Link href='/register'>Register Player</Link>
            ) : (
              <>
                <p>
                  If you are player and your name is not listed above kindly
                  contact the admin to add your name to the list. <br />
                  Select a player to see player's info.
                </p>
                <div>
                  <Link href='/policy'>Policy</Link> <br />
                  <Link href='/policy'>Rules and Regulations</Link>
                </div>
              </>
            )}
          </div>
        )}
        {!players && <p className={style.loading}>Loading players...</p>}
      </div>
    );
  } else {
    return;
  }
};

export default players;
