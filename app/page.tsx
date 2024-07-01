import Image from "next/image";

import { CONTAINER_CLASSNAME, CONTENT_CONTAINER_CLASSNAME } from "./styles";

const Home: React.FC = () => {
  return (
    <main className={CONTAINER_CLASSNAME}>
      <div className={CONTENT_CONTAINER_CLASSNAME}>
        <h2 className="mb-6">Hi there 👋</h2>
        <p className="mb-2">
          I&apos;m Chris Krogh and I like building cool things. I currently work
          as a Senior Frontend Engineer at{" "}
          <span>
            <a
              href="https://www.faire.com"
              target="_blank"
              className="inline-block -mb-2 cursor-pointer"
            >
              <Image src="/faire.svg" width={89} height={24} alt="Faire logo" />
            </a>
          </span>{" "}
          where I help build the future of wholesale.
        </p>
      </div>
    </main>
  );
};

export default Home;
