// Component/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // always scroll to top whenever pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // change to "auto" if you want instant jump
    });
  }, [pathname]);

  return null;
}
