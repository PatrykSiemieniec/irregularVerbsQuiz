import { useEffect, useState } from "react";
import "./ScrollToTop.css";
import { FaArrowUp } from "react-icons/fa";
const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(window.innerHeight);
  const [mobile, setMobile] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.visualViewport) {
        setHeight(window.visualViewport?.height);
        setMobile(true);
      }
      setHeight(window.innerHeight);
      setMobile(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const buttonPosition = height - 100;
  const mobilePhonePosition = height;

  return (
    <div
      className="btnContainer"
      style={{ top: mobile ? mobilePhonePosition : buttonPosition }}
    >
      {showBtn && (
        <button className="scrollTopBtn" onClick={scrollTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
