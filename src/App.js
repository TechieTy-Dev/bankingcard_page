import "./App.css";
import cards from "./assets/CreditCards2.png";
import social from "./assets/social.png";
import arrow from "./assets/arrow.png";

function App() {
  return (
    <div className="bg-img">
      <div className="text-white nav-links">
        <ul className="flex flex-row justify-end pt-8 mr-[48px] space-x-12">
          <li className="p-2 underline hover:underline">
            <a href="/">Home</a>
          </li>
          <li className="p-2 hover:underline">
            <a href="/">About</a>
          </li>
          <li className="p-2 hover:underline">
            <a href="/">Services</a>
          </li>
          <li className="p-2 hover:underline">
            <a href="/">Plans</a>
          </li>
          <li className="p-2 hover:underline">
            <a href="/">Contact</a>
          </li>
          <button className="px-6 py-2 text-white bg-[#7b57ed]  button rounded-3xl">
            Sign up
          </button>
        </ul>
      </div>
      <div className="hero">
        <div className="right">
          <h1 className="font-bold text-white hero-heading font-wrap">
            Make Banking easier than ever with the next gen card
          </h1>
          <p className="text-white hero-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            id amet porro sint, vitae quod. Iste, tenetur ab labore et eum fuga
            porro non possimus esse, perspiciatis hic, error cupiditate? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Reiciendis id
            amet porro sint, vitae quod. Iste, tenetur ab labore et eum fuga
            porro non possimus esse, perspiciatis hic, error cupiditate?
          </p>
          <div>
            <button className="start-button bg-[#7b57ed]  text-white px-6 py-2 rounded-3xl">
              Get Started
            </button>
            <button className="flex text-white download-button">
              <img
                src={arrow}
                alt="down Arrow"
                className="mr-[16px] download-icon animate-bounce"
              />
              Download App
            </button>

            <img className="social" alt="social" src={social} />
            <p className="text-white social-p">
              Join the 25,702+ Community
              <br />
              <a href="/" className="text-purple-600 underline">
                Learn More
              </a>
            </p>
          </div>
        </div>
        <div className="left">
          <img
            className="cards animate-pulse"
            src={cards}
            alt="Glass Cards by KTDesigns"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
