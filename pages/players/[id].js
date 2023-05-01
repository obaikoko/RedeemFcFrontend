import style from '../../styles/[id].module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadDetails = async () => {
      try {
        const res = await fetch(
          `https://redeemfc.onrender.com/api/users/${id}`
        );
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
        setUser(null);
      }
    };

    if (id) {
      loadDetails();
    }
  }, [id]);

  return (
    <>
      <div className={style.container}>
        {user && (
          <div className={style.card}>
            <h3 className={style.title}>Player Details </h3>
            <div>
              <p>Name: {user.fullName}</p>
              <p>Nickname: {user.userName}</p>
              <p>State Of Origin: {user.state}</p>
              <p>Age: {user.age},</p>
              <p>Favourite Club: {user.club}</p>
              <p>Date joined: {user.createdAt}</p>
            </div>
          </div>
        )}
        {!user && <p className={style.loading} >Loading Player details...</p>}
      </div>
    </>
  );
};

export default Details;
