import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const handleSizeChange = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    handleSizeChange();

    window.addEventListener("resize", handleSizeChange);
    return () => window.removeEventListener("resize", handleSizeChange);
  }, [breakpoint]);

  return isMobile;
}
