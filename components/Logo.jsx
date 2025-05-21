import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="">
      <Image src="/assets/logo.svg" width={160} height={0} alt="" />
    </Link>
  );
};

export default Logo;
