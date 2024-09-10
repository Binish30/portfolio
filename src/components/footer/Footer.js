import React from 'react'

const FooterBottom = () => {
    const year = new Date();

  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        © {year.getFullYear()}, All rights reserved by Binish Rawal
      </p>
    </div>
  );
}

export default FooterBottom