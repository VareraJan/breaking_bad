# breaking_bad

Тестовое задание


1. Необходимо реализовать отображение списка эпизодов из сериала Breaking Bad.
2. Cортировка по умолчанию должна быть по номеру эпизода.
3. Реализовать удаление эпизода из списка.
4. Реализовать функции Добавить и Удалить персонажа в каждом эпизоде (+-1 к количеству персонажей в эпизоде)
5. Реализовать функцию сортировки эпизодов по количеству персонажей в эпизоде.
6. Сделать окончание у слова персонаж(ей) рядом с количеством персонажей в эпизоде в зависимости от их количества.

Сценарий:

1. Первый экран — только заголовок и кнопка Загрузить Эпизоды.
По клику на кнопку происходит загрузка эпизодов методом GET с открытого API https://breakingbadapi.com/api/episodes


Примерный вид приложения.


2. После загрузки кнопка загрузить эпизоды пропадает
Появляется список эпизодов и кнопки для сортировки эпизодов по возрастанию и по убыванию количества персонажей в эпизоде.

В каждом эпизоде по клику на кнопки "+" / "-" происходит увеличение или уменьшение количества персонажей в эпизоде.
Окончание у слова персонаж / персонажЕЙ меняется в зависимости от количества.
По клику "Удалить" эпизод пропадает из списка.
Примерный вид приложения.



3. При удалении всех Эпизодов список и кнопки сортировки пропадают - на экране отображается только кнопка "Загрузить эпизоды" и заголовок.



Верстка может быть любая, внешний вид ваше усмотрение. Можно использовать готовые библиотеки элементов, bootstrap и т.д.
Для загрузки данных моно использовать fetch, axios - на ваше усмотрение.
