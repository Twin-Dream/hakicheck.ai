import Image from "next/image";

export const AppLogo = () => {
  return (
    <Image
      src={"/icon.svg"}
      width={30}
      height={30}
      priority
      alt="Hakicheck.ai"
    />
  );
};
