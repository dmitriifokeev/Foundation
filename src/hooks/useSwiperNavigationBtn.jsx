import { useEffect } from "react";

export default function useSwiperNavigation(swiperRef, prevButtonRef, nextButtonRef) {
  useEffect(() => {
    if (swiperRef.current && prevButtonRef.current && nextButtonRef.current) {
      // Назначаем кнопки навигации
      swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.params.navigation.nextEl = nextButtonRef.current;

      // Пересоздаем навигацию
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [swiperRef, prevButtonRef, nextButtonRef]);
}
