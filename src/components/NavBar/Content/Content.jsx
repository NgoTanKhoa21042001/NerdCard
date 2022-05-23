import {FaUser} from "react-icons/fa";
import {useSpring, animated} from "react-spring";
import {BsFillCreditCardFill} from 'react-icons/bs';
import checkIconMobile from "../../../assets/checkpoint.svg";

const Content = () => {
  // customers: 0 lấy từ số 0
  // Tạo animate cho số nó chạy
  const customer = useSpring({customers: 10245, from: {customers: 0}});
  const card = useSpring({cards: 12045, from: {cards: 0}});

  return  (
    <section className="md:flex">
      <div className="ml-[70px] mr-[54px] text-bold bg-purple-600 flex flex-col items-center rounded-2xl    bg-gradient-to-b from-white/40 to transparent shadow-md md:w-[20%]">
        <div className="flex gap-8 mt-16 items-start">
          <FaUser size={"22px"} className="mt-[12px]" />
          <div className="text-26 font-medium">
            <animated.div>
              {/* số chạy làm tròn số */}
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div>
            <div className="text-13 font-semibold mb-[36px] md:text-16">Customer</div>
          </div>
        </div>
        <div className="flex gap-8 mb-16 items-start md:text-16">
          <BsFillCreditCardFill size={"22px"} className="mt-[12px]"/>
          <div className="text-26 font-medium">
            <animated.div>
              {/* số chạy làm tròn số */}
              {card.cards.to((val) => Math.floor(val))}
            </animated.div>
            <div className="text-13 font-semibold mb-[36px] md:text-16">Cards Issued</div>
          </div>
        </div>
      </div>
      <div className=" text-13 flex flex-col w-[100%] mt-[99px] font-semibold gap-y-10 md:mt-0 md:ml-[20%] md:w-[30%]">
        <div className="check-content">
          <img src={checkIconMobile}></img>
          <p>Cards reports send to your phoneevery weeks</p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile}></img>
          <p>No externals fee</p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile}></img>
          <p>Set spending limits and restrictions</p>
        </div>
      </div>
    </section>
  );
}

export default Content;