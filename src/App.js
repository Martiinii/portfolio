import Navbar from "./components/Navbar";
import { ShowWhenVisible, visibleVariants } from "./components/ShowWhenVisible";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <header className="ml-10 md:ml-20 lg:ml-40 mt-40 text-6xl font-medium">
          <ShowWhenVisible variants={visibleVariants.slideDown(50)} delay={.3}>
            <h1 className="mb-10">I'm <span className="fancy-text">Martin</span>,<br />Web developer.</h1>
            <ShowWhenVisible variants={visibleVariants.slideUp(50)} delay={1.1}>
              <p className="font-normal text-xl">Front End / Back End</p>
            </ShowWhenVisible>
          </ShowWhenVisible>
        </header>
      </main>
    </>
  );
}

export default App;
