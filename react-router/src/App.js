import Parcel from 'single-spa-react/parcel';

export default function Root(props) {
  return (
    <>
      <section>{props.name} is mounted!</section>
      <Parcel config={() => System.import('@henrique-kleinberger/react-single')}/>
    </>
  );
}
