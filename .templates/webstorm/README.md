## WebStorm File Templates / Live Templates 

## Реализованные File Templates
[Что такое File Templates?](https://www.jetbrains.com/help/webstorm/using-file-and-code-templates.html)

На данный момент реализовано 5 темплейтов:
```
1. ReactComponent - создание React Component-а с type. 
2. MobXStore - создание mobX стора 
3. Repository - создание репозитория 
4. Feature - создание фичи
5. UtilityFunction - создание функции-утилиты.
```

Для получения к ним доступа, после импорта конфигов и перезапуска IDE, нужно зайти в контекстно меню, где вы обычно создаете файлы (New ... )
и в самом конце списка будут перечисленные выше шаблоны. 


## Реализованные Live Templates 
[Что такое Live Templates?](https://www.jetbrains.com/help/webstorm/using-live-templates.html)

### Styled Components
**scomp** - создаст styled компонент

**scompwp** - создаст styled компонент с пропсами

**theme** - шорткат для быстрого доступа к theme в styled component

``
${({ theme }) => theme.};
``
*****
**Предупреждение**: для корректной работы сниппета theme, в начале нужно ввести
символ шаблонной строки `, а затем theme. В ином случае IDE не будет предлагать использовать сниппет.

Пример использования:
``
margin-bottom: `theme ->>>> ${({ theme }) => theme.}};
``

### MobX
**mobxStore** - создаст mobXStore и инстанс этого стора

### React
**rfc** - создание react component с type

**screen**  - шорткат для создания screen (импорт pageLayout, постфикс screen для компонента)

### Tests

**iteach** - шорткат для it.each

**describeTest** шорткат для describe и it внутри


