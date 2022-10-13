import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateData, updatePage } from '../../store/info/actions';
import polling from '../../store/utils/polling';
import info from '../Info';

const Info = connect(
  (state) => {
    let label;
    if (state.info.bid) label = `Ставка: ${state.info.bid.toString()} р`;

    return {
      text: state.info.title,
      image: process.env.CONFIG.IMAGES_BASEPATH + state.info.imgUrl,
      subText: label,
      loading: state.info.isLoading,
    };
  },
)(info);

function InfoPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePage());
    const unsubscribe = polling(
      `/auction/${id}`,
      ((response) => dispatch(updateData(response.auction))),
    );
    return () => {
      unsubscribe();
      dispatch(updatePage());
    };
  }, [id]);
  return <Info />;
}

export default InfoPage;
