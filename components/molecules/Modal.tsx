import React, { memo } from 'react';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Card from './Card';
import * as S from '../../styles/globalStyles';
import * as TYPE from '../../interface/index';

//파스칼 캐이스
interface likeDataProps {
  handleModal: () => void;
  datas: TYPE.registProps[] | TYPE.itemProps[];
  title: string;
  type: string;
  deleteUploadImg?: any;
}
const Modal = memo(
  ({ datas, handleModal, title, type, deleteUploadImg }: likeDataProps) => (
    <S.ModalContainer>
      <div className="modalContent">
        <Heading text={title} />
        <S.GridLikeCard>
          {datas?.map((data: any) => (
            <div key={data.id}>
              <Card
                url={data.url}
                breedGroup={data.breeds[0]?.breed_group}
                name={data.breeds[0]?.name}
                width={100}
                height={100}
              />
              {type === 'regist' && (
                <Button
                  onClick={() => deleteUploadImg(data.id)}
                  name="delete"
                />
              )}
            </div>
          ))}
        </S.GridLikeCard>
        <Button name="EXIT" onClick={handleModal} type="exitBtn" />
      </div>
    </S.ModalContainer>
  )
);

export default Modal;
