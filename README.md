сайт:[ idea-platform-cyan.vercel.app](https://idea-platform-cyan.vercel.app/) \
файл:[ToDoList](https://github.com/TheOnlyFastCoder2/Idea_Platform/blob/main/toDoList.txt)

Проект — это тестовое задание для управления задачами, созданное с использованием React и MobX. Оно позволяет пользователям легко добавлять, редактировать, удалять и сортировать задачи по различным статусам: "К выполнению", "В процессе", "На проверке" и "Выполнено". Также предусмотрена возможность скачивания и загрузки списка задач.

## Для запуска приложения выполните следующие команды:

```bash
npm install
npm run dev
```
### Основные части приложения:

1. **TODOList**: Главный компонент, который отображает разные списки задач.
2. **TaskManager**: Компонент, который управляет задачами определенного статуса и позволяет перетаскивать их между списками.
3. **ToDoList**: Класс это Mobx, который хранит все задачи и управляет их состоянием. Он позволяет добавлять, редактировать и удалять задачи, а также фильтровать их по поисковому запросу.
4. **Контекст ToDoListContext**: Позволяет другим компонентам получать доступ к задачам и методам управления ими.
5. **hook useToDoList**: Позволяет заполучить ToDoListContext по всеу проекту.

### Основные функции:

- **Создание задач**: Пользователи могут добавлять новые задачи.
- **Редактирование задач**: Можно изменять информацию о задачах.
- **Удаление задач**: Удаление ненужных задач.
- **Перетаскивание задач**: Легкое изменение статуса задач с помощью перетаскивания.
- **Поиск задач**: Фильтрация задач по тексту и датам.
- **Скачивание и загрузка списка задач**: Пользователи могут экспортировать свои задачи в файл и импортировать их обратно в приложение.

### Зависимости:
- **mobx**: Библиотека для управления состоянием, которая позволяет использовать реактивное программирование для управления состоянием приложения.
- **mobx-react**: Обертка для интеграции MobX с React, позволяющая использовать реактивные состояния в компонентах React.
- **react**: Библиотека для построения пользовательских интерфейсов, позволяющая создавать компоненты и управлять их состоянием.
- **react-dom**: Библиотека, обеспечивающая взаимодействие React с DOM, позволяющая рендерить компоненты в браузере.
- **styled-components**: Библиотека для стилизации компонентов с использованием CSS в JavaScript, позволяющая создавать стили, привязанные к компонентам.

<img src="./screens/Idea_Platform_video.gif" width="100%"/>