import React, { memo } from 'react';
import Card from '../molecules/Card';
import Link from 'next/link';
import Toggle from '../molecules/Toggle';
import * as TYPE from '../../interface/index';
import * as S from '../../styles/globalStyles';

interface CardGridProps {
  handleEnroll: (id: string) => void;
  handleCancel: (enjoyId: number) => void;
  useInfinity?: (pageSet: number, value: string) => void;
  card: any;
  value: string;
}

const CardGrid = memo(
  ({ handleEnroll, handleCancel, useInfinity, card, value }: CardGridProps) => {
    if (useInfinity) {
      let pageSet = 0;
      useInfinity(pageSet, value);
    }
    const isCard = card.length > 3;

    // Fix => 분리 하기 isCard / card.length === 1 인경우 나누기
    // const renderA = () => {
    //   if(){
    //     return
    //   }
    // }
    return (
      <S.GridMainCard>
        {isCard ? (
          card.map((item: TYPE.cardProps) => {
            return (
              <S.CardWrapper key={item.id}>
                <Link href={`/Detail/${item.image.id}`}>
                  <a>
                    <Card
                      url={item.image.url}
                      breedGroup={item.breed_group}
                      name={item.name}
                      width={100}
                      height={100}
                    />
                    <Toggle
                      src1={'/yellowstar.png'}
                      src2={'/star.png'}
                      handleEnroll={handleEnroll}
                      handleCancel={handleCancel}
                      id={item.image.id}
                    />
                  </a>
                </Link>
              </S.CardWrapper>
            );
          })
        ) : (
          <Card
            url={card[0]?.url}
            breedGroup={card[0]?.breeds[0]?.breed_group}
            name={card[0]?.breeds[0]?.name}
            width={350}
            height={350}
          />
        )}
      </S.GridMainCard>
    );
  }
);

export default CardGrid;
