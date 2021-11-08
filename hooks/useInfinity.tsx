import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../store/modules/actions';

export const useInfinity = (pageSet: number, value: string) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 1
      ) {
        pageSet++;
        if (pageSet < 4) dispatch(actions.getMainCard(50, pageSet, value));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [value]);

  useEffect(() => {
    dispatch(actions.getMainCardOrder(50, pageSet, value));
  }, [value]);
};
