
![2024-08-1100-50-00-ezgif com-video-to-gif-converter (1)](https://github.com/user-attachments/assets/bf708e83-5775-4b8e-8794-d4fb952e7241)

Frontend-приложение На React и Mobx Галереи картинок. Реализован следующий функционал:
- Загрузка фото на backend через админку Directus с последующим выводом данных в frontend приложении.
- Открытие фотографии по клику на интересующий объект.
- Адаптивная вёрстка.
- Добавлена пагинация (бесконечный скролл).
- Реализован роутинг, который позволяет скопировать ссылку на любое фото.

# Backend
1. Установить Docker (https://docs.docker.com/get-docker/)
2. cd backend/directus
3. docker compose up
Backebnd будет доступен по http://localhost:8055

Логин и пароль от админ-панели:

Логин: admin@example.com
Пароль: d1r3ctu5

# Frontend
1. cd frontend
2. npm install
3. npm run dev

