
import { useState } from 'react';
import { useRouter } from 'next/router';

import { toast } from 'react-toastify';

const ImageUpload = () => {
  const router = useRouter();
  const [fileInput, setFileInput] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [name, setName] = useState('');

  const { id } = router.query;

  const handleSubmitForm = (e) => {
    e.preventDefault();

    uploadImage(previewSource);

    setPreviewSource('');
    setFileInput('');
  };
  const uploadImage = async (previewSource) => {
    try {
      await fetch(`https://redeemfc.onrender.com/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ data: previewSource, name: name }),
        headers: { 'Content-type': 'application/json' },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    setFileInput(e.target.value);
    previewFile(file);
  };

  

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  return (
    <div
      className='mt-5 pt-5 d-sm-flex align-items-center justify-content-left'
      style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
    >
      <div className='m-4 p-4'>
        <form className='gallery-form' onSubmit={handleSubmitForm}>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            placeholder=' Enter Picture Name'
            className='form-input-control my-4'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            type='file'
            className='my-2'
            onChange={handleInputChange}
            value={fileInput}
          />
          <button type='submit'>submit</button>
        </form>
      </div>
      <div>
        <div>
          {previewSource && (
            <img src={previewSource} alt='' className='img-fluid w-md-50' />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
