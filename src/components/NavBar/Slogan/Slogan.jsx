import Cards from "../../../assets/isocard.svg";
const Slogan = () => {
  return  (
    <section className="text-36 font-extrabold my-14 md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48 relative">
      <div className="text-center md:col-span-1 md:col-start-2">
        <p>
          Earn <span className="text-purple-300">More</span>
        </p>
        <p>
          Pay Less
        </p>
        <button className="button text-white">Start</button>
      </div>
      <div className="mt-[60px] md:absolute md:right-[-5rem]">
        <img src={Cards} alt=""></img>
      </div>
    </section>
  );
}

export default Slogan;