
import { useIsMobile } from "./use-mobile";

/**
 * @deprecated Use useIsMobile() from "@/hooks/use-mobile" instead.
 */
export const useMobile = () => {
  console.warn("useMobile is deprecated. Please use useIsMobile from '@/hooks/use-mobile' instead.");
  return useIsMobile();
};

export default useMobile;
