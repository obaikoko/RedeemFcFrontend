import style from '../../styles/[id].module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// export const getStaticPaths = async () => {
//   const res = await fetch('https://redeemfc.onrender.com/api/users');
//   const data = await res.json();
//   const paths = data.map((player) => {
//     return {
//       params: { id: player._id.toString() },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch('https://redeemfc.onrender.com/api/users/' + id);
//   const data = await res.json();

//   return {
//     props: { player: data },
//   };
// };

const Details = () => {
  const [player, setPlayer] = useState('');
  const router = useRouter()
  const {id} = router.query
  useEffect(() => {
    loadPlayers();
    // loadPlayersDetails()
  }, []);

  // const loadPlayersDetails = async () => {
    
  //   const res = await fetch('https://redeemfc.onrender.com/api/users');
  //   const data = await res.json();
  //   console.log(id); 
  //   // const paths = data.map((player) => {
    
  //   // });
   
  // };

  const loadPlayers = async () => {
    console.log(id);
    const res = await fetch('https://redeemfc.onrender.com/api/users/');
    const data = await res.json();
     
    setPlayer(data);
    console.log(data);
  };

  return (
    <>
      <div>
        <div className={style.card}>
          <h3 className={style.title}>{player.userName}</h3>
          <div>
            <h5>Name: {player.fullName}</h5>
            <p>Email: {player.email}</p>
            <p>Age: {player.age}</p>
            <p>State of origin: {player.state}</p>
            <p>Current Club: {player.club}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
