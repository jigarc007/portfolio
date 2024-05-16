import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Logo() {
  return (
    <Link href="/">
      <Image src={"/JCLogo.png"} width={54} height={54} alt="logo" priority />
    </Link>
  );
}
