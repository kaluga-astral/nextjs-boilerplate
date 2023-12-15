## WebStorm File Templates / Live Templates 


Чтобы воспользоваться темплейтами, нужно скачать файл ```configs.zip``` в любую директорию.

Далее запустить WebStorm -> File -> Manage IDE Settings -> Import Settings...

В файловой системе находите загруженный configs.zip, а дальше всё интуитивно понятно.

## Реализованные File Templates
[Что это такое?](https://www.jetbrains.com/help/webstorm/using-file-and-code-templates.html)

На данный момент реализовано 5 темплейтов:
```
1. ReactComponent - создание React Component-а с type. 
2. mobXStore - создание mobX стора 
3. repository - создание репозитория 
4. source - создание source(источника)
5. utilityFunction - создание функции-утилиты.
```

Для получения к ним доступа, после импорта конфигов и перезапуска IDE, нужно зайти в контекстно меню, где вы обычно создаете файлы (New ... )
и в самом конце списка будут перечисленные выше шаблоны. 

Нужно отметить, что source создает только реэкспорт и dto файл, т.к. все проекты разные, и вероятно какие-то микро-улучшения лучше проводить в каждом проекте поотдельности 


## Реализованные Live Templates 
[Что это такое?](https://www.jetbrains.com/help/webstorm/using-live-templates.html)
### Styled Components
**scomp** - создаст styled компонент

**scompwp** - создаст styled компонент с пропсами

**theme** - шорткат для быстрого доступа к theme в styled component

``
${({ theme }) => theme.${позиция курсора попадет сюда после клика на таб}};
``
*****
**Предупреждение**: для корректной работы сниппета theme, в начале нужно ввести
символ шаблонной строки `, а затем theme. В ином случае IDE не будет предлагать использовать сниппет.

Пример использования:
``
margin-bottom: `theme ->>>> ${({ theme }) => theme.${позиция курсора попадет сюда после клика на таб}};
``

### MobX
**mobxStore** - создаст mobXStore и инстанс этого стора

### React
**rfc** - создание react component с type

**screen**  - шорткат для создания screen (импорт pageLayout, постфикс screen для компонента)

### Tests

**testeach** - шорткат для test.each

**describeTest** шорткат для describe и it внутри


