import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import style from '../styles/players.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Spinner from '@/comp/Spinner';

const Players = () => {
  const { data: session, status } = useSession({ required: true });
  const [players, setPlayers] = useState([]);

  

  useEffect(() => {
    loadPlayers();
  }, []);

  const loadPlayers = async () => {
    const res = await fetch('https://redeemfc.onrender.com/api/users');
    const data = await res.json();
    setPlayers(data);
  };
 
  if (status === 'authenticated') {
    return (
      <div className='pt-5'>
        <Head>
          <title>Redeem FC Players</title>
        </Head>
        
        {players ? (
          <div>
            <div className='card-header bg-primary text-white'>
              <h3 className='card-title mb-0 p-3'>Redeem FC Members</h3>
            </div>
            <table className='table table-hover table-striped'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Nick Name</th>
                  <th>State of Origin</th>
                  <th>Date Joined</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <tr key={player._id}>
                    <td>[{1 + index}]</td>
                    <td>{player.fullName}</td>
                    <td>{player.userName}</td>
                    <td>{player.state}</td>
                    <td>{player.createdAt}</td>
                    <td>
                      <Link href={`players/${player._id}`}>
                        <button className='btn btn-light text-primary'>
                          View
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {session && session.user.email === 'jesseobinna7@gmail.com' ? (
              <Link href='/register'>
                <button className='btn btn-primary'>Register Player</button>
              </Link>
            ) : (
              <>
                <p>
                  Attention Redeem FC Players not listed above: Contact
                  administrators to add your name for upcoming club activities.
                  Call Administrator's Phone Number{' '}
                  <span className='text-primary'>08029707512</span>. Your
                  participation matters!
                </p>
                <div className='d-flex'>
                  <Link href='/policy'>
                    <button className='btn btn-sm m-3 btn-primary'>
                      Policy, Rules and Regulations
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        ) : (<Spinner/>)}
      </div>
    );
  } else {
    return null;
  }
};

export default Players;
