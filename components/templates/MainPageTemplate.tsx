import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SortEngeine from '../organisms/SortEngeine';
import CardGrid from '../organisms/CardGrid';
import Header from '../organisms/Header';
import { useRouter } from 'next/router';
import useScrollRestoration from '../../hooks/useScrollByPageMove';
import { useInfinity } from '../../hooks/useInfinity';
import * as API from '../../api/index';
import * as actions from '../../store/modules/actions';
import * as TYPE from '../../interface/index';

export default function MainPageTemplate() {
  const [input, setInput] = useState<string>('');
  const dispatch = useDispatch();
  const router = useRouter();
  const { value } = useSelector((state: TYPE.stateProps) => state.order);
  const { card } = useSelector((state: TYPE.stateProps) => state.mainPage);
  const sendTypeInput = ['jpg', 'png', 'gif'];
  useScrollRestoration(router);
  //즐겨찾기 등록 api요청
  const handleEnroll = useCallback(async (id: string) => {
    //반복적인 try, catch 해결해야함(공통처리)
    try {
      const result = await API.sendFavourites({
        image_id: id,
        sub_id: 'test15'
      });
      if (result.status === 200) return result.data.id;
    } catch (error) {
      console.error(error);
    }
  }, []);

  //즐겨찾기 취소 api요청
  const handleCancel = useCallback(async (enjoyId: number) => {
    API.deleteFavourites(enjoyId).catch((error) => console.log(error));
  }, []);

  //input창 value값 저장 기능
  const handleChange = useCallback(
    (e) => {
      setInput(e.target.value);
    },
    [input]
  );

  // sendTypeInput을 활용해 검색 api요청
  // Fix = > 네이밍
  const searchById = useCallback(() => {
    // Fix  => 상수 표시 upper case로 변경
    if (sendTypeInput.includes(input)) {
      dispatch(actions.getSearchCard(`${API.queryTypes.mime}${input}`));
    } else {
      dispatch(actions.getSearchCard(`${API.queryTypes.breed}${input}`));
    }
  }, [input]);

  //redux에서 단순히 query값만 변경 (api요청X)
  const handleOrderAsc = useCallback(() => {
    dispatch(actions.changeOrder('ASC'));
  }, []);
  //redux에서 단순히 query값만 변경 (api요청X)
  const handleOrderDesc = useCallback(() => {
    dispatch(actions.changeOrder('DESC'));
  }, []);

  // Fix => 함수 네이밍 선언 => handle~ 전달된것 => on~
  return (
    <>
      <Header />
      <SortEngeine
        handleChange={handleChange}
        searchById={searchById}
        handleOrderAsc={handleOrderAsc}
        handleOrderDesc={handleOrderDesc}
      />
      <CardGrid
        card={card}
        value={value}
        useInfinity={useInfinity}
        handleEnroll={handleEnroll}
        handleCancel={handleCancel}
      />
    </>
  );
}
