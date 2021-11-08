import React, { useEffect, useState } from 'react';
import Header from '../../components/organisms/Header';
import Paragraph from '../../components/atoms/Paragraph';
import Heading from '../../components/atoms/Heading';
import axios from 'axios';
import * as S from '../../styles/globalStyles';
import * as API from '../../api/index';

const Introduce = ({ data }: any) => {
  const [members, setMembers] = useState<string[]>([]);
  useEffect(() => {
    axios.get(API.MEMBER).then((res) => setMembers(res.data));
  }, []);
  return (
    <S.IntroducePage>
      <Header />
      <Heading text={data.title} />
      <Paragraph text={data.subTitle} />
      <Paragraph text={data.description} />
      {members?.map((member: any) => {
        return (
          <div className="gridMember" key={member.id}>
            <Paragraph text={member.name} />
            <Paragraph text={member.position} />
            <Paragraph text={member.gender} />
          </div>
        );
      })}
    </S.IntroducePage>
  );
};
export default Introduce;

export async function getStaticProps() {
  const res = await fetch(API.INTRO);
  const data = await res.json();
  return {
    props: { data }
  };
}
