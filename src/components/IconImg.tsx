interface IProps {
    src: string;
}

const IconImg = ({src}: IProps) => {
  return (
    <img src={src} className="w-4 h-4 md:w-6 md:h-6 md:mr-1"/>
);
};

export default IconImg;