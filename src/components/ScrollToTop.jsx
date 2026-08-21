import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    /*
      Always move the new page
      to the very top.
    */
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

  }, [pathname]);

  return null;
}

export default ScrollToTop;