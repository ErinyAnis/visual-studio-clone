interface IProps {
    src: string;
}

const IconImg = ({src}: IProps) => {
  return (
    <img src={src} className="w-6 h6 mr-1"/>
);
};

export default IconImg;