import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className=' bg-dark text-light'>
      <div style={{ borderBottom: '2px solid white' }}>
        <Link href='/policy'>Policy</Link> <br />
        <Link href='/policy'>Terms and Conditions</Link>
      </div>
      <div className='lower-footer m-5 pb-5'>
        <ul
          className='d-flex align-items-center justify-content-center'
          style={{ listStyle: 'none' }}
        >
          <li className='m-2'>
            <Link href='https://web.facebook.com/profile.php?id=100080057067273'>
              <FaFacebook />
            </Link>
          </li>
          <li className='m-2'>
            <Link href=''>
              <FaWhatsapp />
            </Link>
          </li>
          <li className='m-2'>
            <Link href=''>
              <FaInstagram />
            </Link>
          </li>
          <li className='m-2'>
            <Link href=''>
              <FaTwitter />
            </Link>
          </li>
          <li className='m-2'>
            <Link href=''>
              <FaLinkedin />
            </Link>
          </li>
        </ul>
        <p className=' text-center'>&copy; 2023 Redeem Football Club.</p>
      </div>
    </div>
  );
};

export default Footer;
