import React, { useState, MouseEvent } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Img from '../atoms/Img';
import Header from '../organisms/Header';
import axios from 'axios';
import firebase from '../../firebase/firebase';
import * as S from '../../styles/globalStyles';
import * as API from '../../api/index';
import * as TYPE from '../../interface/index';

interface registerProps {
  token: string;
}

export default function RegisterPageTemplate({ token }: registerProps) {
  const [image, setImage] = useState<any>([]);
  const [createObjectURL, setCreateObjectURL] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);

  //인풋에 사진 선택한것 저장
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file = e.target.files[0];
      const fileUrl = URL.createObjectURL(file);
      setCreateObjectURL(fileUrl);
      setImage(file);
    }
  };

  //사진 업로드 기능 및 fcm 메세지 요청
  const handleUpload = (e: MouseEvent) => {
    e.preventDefault();
    const formData = new FormData();
    const messaging = firebase.messaging();
    formData.append('file', image);
    formData.append('sub_id', '1234');
    const options = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent: any) => {
        const { loaded, total } = progressEvent;
        let percent = Math.round((loaded * 100) / total);
        setProgress(percent);
      }
    };
    API.postImgUpload(formData, options)
      .then((res) => {
        if (res.status === 201) {
          handleFcm();
          messaging.onMessage((payload: TYPE.firebasePayload) => {
            return alert(payload.notification.title);
          });
        }
      })
      .catch((error) => console.log(error));
  };

  //노드 서버에서 사진이 업로드 성공하면 fcm 요청
  const handleFcm = () => {
    axios
      .get(API.FCM)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <S.RegisterWrapper>
      <Header />
      <Img type="previewImg" src={createObjectURL} alt="asdf" />
      <Input accept="image/*" handleChange={handleChange} type="file" />
      <Button name="upload" onClick={handleUpload} />
      <progress className="registerProgress" max="100" value={progress} />
      {progress}%
    </S.RegisterWrapper>
  );
}
