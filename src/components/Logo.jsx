import Image from "next/image";

export function Logomark(props) {
  return <Logo {...props} />;
}

export function Logo(props) {
  return <Image alt="Logo" src="/logo.svg" width={106} height={40} />;
}
