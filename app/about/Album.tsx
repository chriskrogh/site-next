import NextImage from "next/image";

export const Album: React.FC = () => {
  return (
    <>
      <p className="mb-4">
        When I&apos;m not building software, I like spending my time exploring
        in the summer and snowboarding in the winter. Here&apos;s a brief window
        into what that looks like.
      </p>
      <div className="flex flex-col w-full sm:flex-row gap-4 mb-4">
        <Image src="/about-1.jpg" alt="Me offroading in Trinidad" />
        <Image
          src="/about-3.jpg"
          alt="At the top of snowy Blue Mountain, Ontario"
        />
      </div>
      <div className="flex flex-col w-full sm:flex-row gap-4">
        <Image
          src="/about-2.jpg"
          alt="Sunshine through sea spray at the beach"
        />
        <Image src="/about-4.jpg" alt="Me at the Grotto in Tobermorey" />
      </div>
    </>
  );
};

type ImageProps = {
  src: string;
  alt: string;
};

const Image: React.FC<ImageProps> = (props) => (
  <div className="relative w-full sm:w-[50%] h-[460px]">
    <NextImage {...props} fill className="object-cover" />
  </div>
);
