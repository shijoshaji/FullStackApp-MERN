import * as React from 'react';

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className="bg-slate-900 text-base text-white text-center fixed bottom-1 w-full">
      Copyright &#169; Shijo Shaji
    </div>
  );
};

export default Footer;
