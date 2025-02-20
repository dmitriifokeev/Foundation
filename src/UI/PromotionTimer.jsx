import React, { useEffect, useState } from "react";

function PromotionTimer({ onlyDate, onlyTimer }) {
  // При первом рендере рассчитываем конечную дату: +2 дня от "сегодня" и ставим время 00:00
  const [targetDate] = useState(() => {
    const now = new Date();
    const tempDate = new Date(now);
    // Добавляем 2 дня к текущему дню
    tempDate.setDate(now.getDate() + 2);
    // Ставим время в 00:00:00
    tempDate.setHours(0, 0, 0, 0);
    return tempDate;
  });

  // Храним оставшееся время (в миллисекундах)
  const [timeLeft, setTimeLeft] = useState(targetDate.getTime() - Date.now());

  useEffect(() => {
    // Обновляем каждую секунду
    const intervalId = setInterval(() => {
      setTimeLeft(targetDate.getTime() - Date.now());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  // Если onlyDate=true, показываем только дату
  if (onlyDate) {
    const formattedTargetDate = targetDate.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
    });
    return <p>*При оплате до {formattedTargetDate}</p>;
  }

  // Когда onlyDate=false, показываем часы:минуты:секунды до 00:00
  const totalSeconds = Math.max(0, Math.floor(timeLeft / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Форматируем в HH:MM:SS
  const hh = String(hours).padStart(2, "0");
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  // Форматируем дату (например, "17 февраля")
  const formattedTargetDate = targetDate.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
  });

  if (onlyTimer) {
    return (
      <div>
        <p>
          {hh}:{mm}:{ss}
        </p>
      </div>
    );
  }

  return (
    <div>
      <p>
        До конца акции осталось {hh}:{mm}:{ss}
      </p>
      <p>*При оплате до {formattedTargetDate}</p>
    </div>
  );
}

export default PromotionTimer;
