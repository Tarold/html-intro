import {
  BsArrowUpRightCircle,
  BsArrowRightCircle,
  BsArrowDownRightCircle,
  BsArrowDownCircle,
  BsArrowDownLeftCircle,
  BsArrowLeftCircle,
  BsArrowUpLeftCircle,
  BsArrowUpCircle,
} from 'react-icons/bs';

function WindDir(props) {
  const { dir } = props;
  let arrow;
  switch (true) {
    case dir > 22.5 && dir <= 67.5: //право верх
      arrow = <BsArrowUpRightCircle />;
      break;
    case dir > 67.5 && dir <= 112.5: //право верх
      arrow = <BsArrowRightCircle />;
      break;
    case dir > 112.5 && dir <= 157.5: //право верх
      arrow = <BsArrowDownRightCircle />;
      break;
    case dir > 157.5 && dir <= 202.5: //право верх
      arrow = <BsArrowDownCircle />;
      break;
    case dir > 202.5 && dir <= 247.5: //право верх
      arrow = <BsArrowDownLeftCircle />;
      break;
    case dir > 247.5 && dir <= 292.5: //право верх
      arrow = <BsArrowLeftCircle />;
      break;
    case dir > 292.5 && dir <= 337.5: //право верх
      arrow = <BsArrowUpLeftCircle />;
      break;
    default:
      arrow = <BsArrowUpCircle />;
      break;
  }

  return (
    <li>
      <p>{dir}°</p>
      {arrow}
    </li>
  );
}

export default WindDir;
