Feature: Список задач


# View: Condition rendering
Scenario: Получение непустого списка задач
  Given Непустой список задач
  When Список загружен
  Then Элементы списка есть в разметке

Scenario: Получение пустого списка задач
  Given Пустой список задач
  When Список загружен
  Then Список содержитт текст 'Задач нет'


# View: Вызов команд с требуемыми параметрами
Scenario: Редактирование задачи из списка
  Given Задача списка
  When Пользователь кликнул на кнопку Редактировать
  Then Вызвалась команда openUpdateDialog с id


# Business logic: Все публичные методы
Scenario: Создание одной задачи
  Given Созданная задача
  When Пользователь вызвал команду Сохранить
  Then Вызвалась команда openUpdateDialog с id