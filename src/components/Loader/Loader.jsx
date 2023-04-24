import { BallTriangle } from 'react-loader-spinner';
import { 
  Backdrop,
  } from "./styles";

export const Loader = () => {
  return (
  <Backdrop>
    <BallTriangle
      height={200}
      width={200}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={true}
    />
  </Backdrop>          
  )
}