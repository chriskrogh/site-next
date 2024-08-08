import { About } from "./_sections/About";
import { Blog } from "./_sections/Blog";
import { Intro } from "./_sections/Intro";
import { Work } from "./_sections/Work";
import { CONTAINER_CLASSNAME, CONTENT_CONTAINER_CLASSNAME } from "./styles";

const Home: React.FC = () => {
  return (
    <main className={CONTAINER_CLASSNAME}>
      <div className={CONTENT_CONTAINER_CLASSNAME}>
        <Intro />
        <div className="h-10" />
        <Work />
        <div className="h-10" />
        <Blog />
        <div className="h-10" />
        <About />
      </div>
    </main>
  );
};

export default Home;
