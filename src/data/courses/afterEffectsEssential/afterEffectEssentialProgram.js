import { v4 as uuidv4 } from "uuid";
import afterEffectsEssential from "../../../assets/img/bgCourseCards/afterEffectsEssential.jpg";

const afterEffectsCourseProgram = {
  programHeader: {
    title: "Adobe After Effects",
    tag: "C нуля",
    heroSubtitle:
      "В этом курсе вы узнаете всё о создании современной и эффектной графики в программе After Effects! Получите востребованные навыки по созданию графики и анимации в After Effects!",
    type: "Курс",
    bgImg: afterEffectsEssential,
    difficulty: 1,
  },

  program: [
    {
      id: uuidv4(),
      title: "Подготовка",
      info: "4 лекции • 14м",
      lessons: [
        { lesson: "О чем курс", time: "03:13" },
        { lesson: "Скачиваем материалы и настраиваем интерфейс!", time: "08:01" },
        { lesson: "Где скачать лицензионный After Effects", time: "02:15" },
        { lesson: "Оставайтесь со мной на связи", time: "00:12" },
      ],
    },
    // 2. Основы After Effects
    {
      id: uuidv4(),
      title: "Основы After Effects",
      info: "22 лекции • 3ч 35м",
      lessons: [
        { lesson: "О чем этот блок", time: "01:18" },
        { lesson: "Как создать композицию", time: "12:33" },
        { lesson: "Базовые горячие клавиши. Как работают слои", time: "11:38" },
        { lesson: "Если у вас потерялся исходник в проекте", time: "03:29" },
        { lesson: "Как работают фигуры. Настройки слоев", time: "15:32" },
        { lesson: "Что такое keyframes анимации", time: "09:35" },
        { lesson: "Если у вас тормозит After Effects", time: "08:28" },
        { lesson: "Как создать текст в After Effects", time: "13:27" },
        { lesson: "Добавляем блюр. Меняем длину видео", time: "06:07" },
        { lesson: "Как работают слои ч.1", time: "13:15" },
        { lesson: "Как работают слои ч.2", time: "12:15" },
        { lesson: "Что такое выражения и дополнительные композиции", time: "13:33" },
        { lesson: "Анимируем текст", time: "08:19" },
        { lesson: "Как работает pen tool", time: "11:44" },
        { lesson: "Визуальное отображение keyframes", time: "09:26" },
        { lesson: "Как работают композиции", time: "09:27" },
        { lesson: "Полезные доп. функции", time: "12:46" },
        { lesson: "Как работает инструмент puppet tool", time: "10:49" },
        { lesson: "Как перевернуть keyframes", time: "08:15" },
        { lesson: "Как запустить рендер проекта", time: "08:21" },
        { lesson: "Где брать материалы для ваших работ", time: "11:45" },
        { lesson: "After Effects немного обновился", time: "02:54" },
      ],
    },
    // 3. Эффекты After Effects
    {
      id: uuidv4(),
      title: "Эффекты After Effects",
      info: "6 лекций • 46м",
      lessons: [
        { lesson: "Как работают эффекты", time: "10:17" },
        { lesson: "Как обрезать футаж по середине", time: "02:12" },
        { lesson: "Разница эффектов и стилей слоев", time: "10:54" },
        { lesson: "Предпросмотр эффектов", time: "05:51" },
        { lesson: "Как добавить свой эффект в панель эффектов", time: "06:49" },
        { lesson: "Как создать свой preset", time: "10:32" },
      ],
    },
    // 4. Маски
    {
      id: uuidv4(),
      title: "Маски",
      info: "10 лекций • 1ч 52м",
      lessons: [
        { lesson: "Маска с помощью фигуры", time: "08:48" },
        { lesson: "Маска с помощью фигуры на практике", time: "11:50" },
        { lesson: "Что такое обтравочная маска", time: "05:29" },
        { lesson: "Обтравочная маска на практике", time: "06:31" },
        { lesson: "Как работает Track Matte", time: "11:00" },
        { lesson: "Track matte на практике", time: "16:25" },
        { lesson: "Как работает track matte luma", time: "05:06" },
        { lesson: "Как создать mogrt file", time: "08:18" },
        { lesson: "Roto brush tool", time: "11:59" },
        { lesson: "Adjustment layers & rasterize", time: "26:18" },
      ],
    },
    // 5. Дополнительные инструменты
    {
      id: uuidv4(),
      title: "Дополнительные инструменты",
      info: "4 лекции • 30м",
      lessons: [
        { lesson: "Интерполяция ключевых точек", time: "06:51" },
        { lesson: "Как работает Parent & Link", time: "09:57" },
        { lesson: "Как создать счетчик из цифр", time: "08:14" },
        { lesson: "Grids, labels, markers", time: "04:58" },
      ],
    },
    // 6. 3D & Camera
    {
      id: uuidv4(),
      title: "3D & Camera",
      info: "4 лекции • 30м",
      lessons: [
        { lesson: "Как работает 3D", time: "10:48" },
        { lesson: "Как создать свет в 3D", time: "05:57" },
        { lesson: "Доп настройки камеры", time: "05:31" },
        { lesson: "1-Node vs 2-Node Camera", time: "07:36" },
      ],
    },
    // 7. Плагины
    {
      id: uuidv4(),
      title: "Плагины",
      info: "1 лекция • 9м",
      lessons: [{ lesson: "Как работают плагины", time: "09:10" }],
    },
    // 8. After Effects Tracker
    {
      id: uuidv4(),
      title: "After Effects Tracker",
      info: "6 лекций • 53м",
      lessons: [
        { lesson: "Как работает Motion Tracker", time: "19:39" },
        { lesson: "Как работает Null Object", time: "03:39" },
        { lesson: "Как работает Camera Tracking", time: "07:39" },
        { lesson: "Как прикреплять элементы к Camera Tracker", time: "08:06" },
        { lesson: "Cinema 4D Делаем слои объемными", time: "11:46" },
        { lesson: "Null в Camera Track", time: "01:52" },
      ],
    },
    {
      id: uuidv4(),
      title: "AE + Adobe = Love",
      info: "4 лекции • 52м",
      lessons: [
        { lesson: "AE + Illustrator", time: "12:32" },
        { lesson: "AE + Illustrator доп возможности", time: "09:08" },
        { lesson: "PS + AE. Как работать с Photoshop", time: "22:16" },
        { lesson: "AE + Premiere Pro", time: "07:51" },
      ],
    },
    {
      id: uuidv4(),
      title: "Web анимации созданные в After Effects",
      info: "1 лекция • 17м",
      lessons: [{ lesson: "Lottie анимация на сайте", time: "17:06" }],
    },
    {
      id: uuidv4(),
      title: "Трекинг с помощью Mocha",
      info: "8 лекций • 1ч 26м",
      lessons: [
        { lesson: "Знакомство с Mocha", time: "17:18" },
        { lesson: "Как соблюдать соотношение сторон", time: "14:00" },
        { lesson: "Подробнее про доп. композиции", time: "05:52" },
        { lesson: "Transform вместо corner pin", time: "08:16" },
        { lesson: "Разница Mocha и Tracker", time: "07:34" },
        { lesson: "Маски с помощью Mocha", time: "13:32" },
        { lesson: "Contante-Aware-Fill", time: "05:31" },
        { lesson: "Замена экрана с помощью Mocha", time: "14:22" },
      ],
    },
    {
      id: uuidv4(),
      title: "Green screen",
      info: "2 лекции • 28м",
      lessons: [
        { lesson: "Как работать с green screen", time: "15:08" },
        { lesson: "Жан Клод Ван Дима", time: "12:43" },
      ],
    },
    {
      id: uuidv4(),
      title: "До новых встреч!",
      info: "1 лекция • 2м",
      lessons: [{ lesson: "Заключение.", time: "02:23" }],
    },
  ],
};

export default afterEffectsCourseProgram;
