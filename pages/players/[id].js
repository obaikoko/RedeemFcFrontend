import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Spinner from '@/comp/Spinner';
import ImageUpload from '@/comp/ImageUpload';
import { useSession } from 'next-auth/react';


const Details = () => {
  const { data: session, status } = useSession({ required: true });
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
      <Head>
        <title>Redeem FC Players Details</title>
      </Head>
      {session && session.user.email === 'jesseobinna7@gmail.com' ? (
        <div>
          <ImageUpload/>
        </div>
      ) : (
        <>
          <div></div>
        </>
      )}
      <div className='container pt-5'>
        <div className='card mt-4'>
          <div className='card-header bg-primary text-white'>
            <h3 className='card-title mb-0'>Player Details</h3>
          </div>
          <div className='card-body'>
            {user ? (
              <div className='d-flex'>
                <dl className='row'>
                  <dt className='col-sm-4'>Name:</dt>
                  <dd className='col-sm-8'>{user.fullName}</dd>

                  <dt className='col-sm-4'>Nickname:</dt>
                  <dd className='col-sm-8'>{user.userName}</dd>

                  <dt className='col-sm-4'>State of Origin:</dt>
                  <dd className='col-sm-8'>{user.state}</dd>

                  <dt className='col-sm-4'>Age:</dt>
                  <dd className='col-sm-8'>{user.age}</dd>

                  <dt className='col-sm-4'>Favorite Club:</dt>
                  <dd className='col-sm-8'>{user.club}</dd>

                  <dt className='col-sm-4'>Date Joined:</dt>
                  <dd className='col-sm-8'>{user.createdAt}</dd>
                </dl>
                <div className='col-sm-4 text-center m-auto '>
                  {user && user.image && user.image.url ? (
                    <img src={user.image.url} alt='Player Image' />
                  ) : (
                    <>
                      <p>No Photo</p>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
