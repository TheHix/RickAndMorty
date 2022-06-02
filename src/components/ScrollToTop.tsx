import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
interface ScrollToTopPrpos {
  children: React.ReactNode;
}
const ScrollToTop: React.FC<ScrollToTopPrpos> = ({ children }) => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>{children}</>;
};

export default ScrollToTop;
