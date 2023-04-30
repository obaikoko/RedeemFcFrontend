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
      <div>
        {user && (
          <div className={style.card}>
            <h3 className={style.title}>User Details - {user.name}</h3>
            <div>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>
                Address: {user.fullName}, {user.state}
              </p>
            </div>
          </div>
        )}
        {!user && <p>Loading user details...</p>}
      </div>
    </>
  );
};

export default Details;
