import React, { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import Modal from '../molecules/Modal';
import Img from '../atoms/Img';
import * as API from '../../api/index';
import * as TYPE from '../../interface/index';
import * as S from '../../styles/globalStyles';

export default function ProfilePageTemplate() {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isRegist, setIsRegist] = useState<boolean>(false);
  const [like, setLike] = useState<TYPE.likeArrProps[]>([]);
  const [enjoy, setEnjoy] = useState<TYPE.enjoyProps[]>([]);
  const [regist, setRegist] = useState<TYPE.registProps[]>([]);
  const [datas, setDatas] = useState<TYPE.itemProps[]>([]);
  const findDataId = like.map((item: TYPE.likeArrProps) => {
    return item.image_id;
  });

  // async / await /// Fix => 코드정리
  // api 관련 처리 모듈화 좋은방법이 아님 반복적으로 써야함
  // 함수를 나누던 ㅎ하야지  Promise.all처리 다시 생각해보기
  const getLikeData = (idArr: string[]) => {
    const result = Promise.all(
      idArr.map((id: string) => {
        return API.getLikedImg(`${id}`)
          .then((res) => res.data)
          .catch((err) => console.log(err));
      })
    );
    return result;
  };

  //내가 좋아요한 데이터 가져오기
  useEffect(() => {
    getLikeData(findDataId)
      //반복적인거 제거
      .then((data) => setDatas(data))
      .catch((err) => console.log(err));
  }, [like]);

  //modal click시 피요한 데이터 api요청
  const handleLikeData = () => {
    setIsModal(!isModal);
    API.getVotes('eric')
      .then((result) => {
        if (result.status === 200) {
          setLike(result.data);
        }
      })
      .catch((err) => console.log(err));
  };
  //즐겨찾기한 목록 가져오기
  const handleEnjoyData = () => {
    setIsVisible(!isVisible);
    API.getFavourites('test15')
      .then((result) => {
        if (result.status === 200) {
          setEnjoy(result.data);
        }
      })
      .catch((error) => console.log(error));
  };

  //내가 등록한 목록 가져오기
  const handleRegistData = () => {
    setIsRegist(true);
    API.getLikedAllImg(10, '1234')
      .then((result) => {
        if (result.status === 200) {
          setRegist(result.data);
        }
      })
      .catch((error) => console.log(error));
  };

  //내가 등록한거 삭제기능
  const deleteUploadImg = (imgId: string) => {
    API.deleteUploadImg(imgId)
      .then((result) => {
        if (result.status === 204) {
          handleRegistData();
        }
      })
      .catch((error) => console.log(error));
  };

  //Fix => 함수 네이밍
  const handleModal = () => {
    setIsModal(!isModal);
  };

  const handleRegist = () => {
    setIsRegist(!isRegist);
  };

  return (
    <S.ProfileWrapper>
      <Button name="like" type="likeBtn" onClick={handleLikeData} />
      <Button name="enjoy" type="likeBtn" onClick={handleEnjoyData} />
      <Button name="regist" type="likeBtn" onClick={handleRegistData} />
      {isModal && (
        <Modal
          type="like"
          datas={datas}
          title="like"
          handleModal={handleModal}
        />
      )}
      {isRegist && (
        <Modal
          type="regist"
          title="regist"
          datas={regist}
          handleModal={handleRegist}
          deleteUploadImg={deleteUploadImg}
        />
      )}
      {isVisible && (
        <S.GridLikeCard>
          {enjoy?.map((item: any) => (
            <div key={item.id}>
              <Img
                src={item.image.url}
                type="cardImg"
                alt="test"
                width={100}
                height={100}
              />
            </div>
          ))}
        </S.GridLikeCard>
      )}
    </S.ProfileWrapper>
  );
}
