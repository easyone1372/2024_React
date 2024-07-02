import Leader from "./Leader";

type CaptainProps = {
  msg: string;
};

const Captain = ({ msg }: CaptainProps) => {
  return (
    <div>
      대대장께서: {msg} <Leader msg={msg}></Leader>
    </div>
  );
};

export default Captain;
