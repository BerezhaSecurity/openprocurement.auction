angular.module('auction')
  .config(['$translateProvider', function($translateProvider) {
    $translateProvider.useLocalStorage();
    $translateProvider.translations('en', {
      'Announcement': 'Announcement',
      'Bid': 'Bid',
      'Bidder': 'Bidder',
      'Bidders': ' Bidders',
      'Bidding': 'Bidding',
      'English': 'English',
      'Russian': 'Russian',
      'Ukrainian': 'Ukrainian',
      'Client': 'Client',
      'Edit': 'Edit',
      'Info': 'Info',
      'Initial bids': 'Initial bids',
      'Language': 'Language',
      'Login in as viewer': 'Login in as viewer',
      'Login in as': 'Login in as',
      'Logout': 'Logout',
      'Place a bid': 'Place a bid',
      'Preliminary bids': 'Preliminary bids',
      'Round': 'Round',
      'Settings': 'Settings',
      'Time': 'Time',
      'You': 'You',
      'All bidders': 'All bidders',
      'Pause': 'Pause',
      'Results Release': 'Results Release',
      'Waiting': 'Waiting',
      'or lower': 'or lower',
      'UAH': 'UAH',
      'shortTime': 'h:mm a',
      'Restart sync': 'Restart sync',
      'To low value': 'To low value',
      'To high value': 'To high value',
      'Not valid bidder': 'Not valid bidder',
      'Stage not for bidding': 'Stage not for bidding',
      'Bid placed': 'Bid placed',
      'Your proposal': 'Your proposal :',
      'Finish': 'Finish',
      'days': 'days',
      'hours': 'hr',
      'minutes': 'min',
      'seconds': 'sec',
      'minimum': 'minimum',
      'Internet connection is lost. Attempt to restart after 1 sec': 'Internet connection is lost. Attempt to restart after 1 sec',
      'Synchronization failed': 'Synchronization failed',
      'Possible results': 'Possible results',
      'In the room came a new user': 'In the room came a new user',
      'until the auction starts': 'until the auction starts',
      'until your turn': 'until your turn',
      'until your turn ends': 'until your turn ends',
      'until the round starts': 'until the round starts',
      'until the round ends': 'until the round ends',
      'until the results announcement': 'until the results announcement',
      'after the auction was completed': 'after the auction was completed',
      'prohibit connection': 'prohibit connection'
    });

    $translateProvider.translations('uk', {
      'Announcement': 'Оголошення результатів',
      'Bid': 'Заявка',
      'Bidder': 'Учасник',
      'Bidders': ' Учасники',
      'Bidding': 'Торги',
      'English': 'Англійська',
      'Russian': 'Російська',
      'Ukrainian': 'Українська',
      'Client': 'Клієнт',
      'Edit': 'Змінити',
      'Info': 'Інформація',
      'Initial bids': 'Початкові заявки',
      'Language': 'Мова',
      'Login in as viewer': 'Вхід в якості глядача',
      'Login in as': 'Вхід в якості ',
      'Logout': 'Вийти',
      'Place a bid': 'Зробити заявку',
      'Preliminary bids': 'Попередні заявки',
      'Round': 'Раунд',
      'Settings': 'Налаштування',
      'Time': 'Час',
      'You': 'Ви',
      'All bidders': 'Всі учасники торгів',
      'Pause': 'Пауза',
      'Results Release': 'Результати',
      'Waiting': 'Очікування',
      'or lower': 'або менше',
      'UAH': 'грн',
      'shortTime': 'HH:mm',
      'Restart sync': 'Перезапуск синхронізації',
      'To low value': 'Надто низька заявка',
      'To high value': 'Надто висока заявка',
      'Not valid bidder': 'Ви не є валідний користувачем',
      'Stage not for bidding': 'Даний етап аукціону не передбачає приймання заявок',
      'Bid placed': 'Заявку прийнято',
      'Your proposal :': 'Ваша заявка:',
      'Finish': 'Завершено',
      'days': 'дн',
      'hours': 'год',
      'minutes': 'хв',
      'seconds': 'сек',
      'minimum': 'мінімум',
      'Internet connection is lost. Attempt to restart after 1 sec': 'З\'єднання з інтернетом втрачено. спроба перезавантаження через 1 сек',
      'Synchronization failed': 'Помилка синхронізації',
      'Possible results': 'Можливі результати',
      'In the room came a new user': 'В кабінет зайшов новий користувач',
      'until the auction starts': 'до початку аукціону',
      'until your turn': 'до вашої черги',
      'until your turn ends': 'до закінчення вашої черги',
      'until the round starts': 'до початку раунду',
      'until the round ends': 'до закінчення раунду',
      'until the results announcement': 'до оголошення результатів',
      'after the auction was completed': 'після завершення аукціону',
      'prohibit connection': 'заборонити підключення'
    });

    $translateProvider.translations('ru', {
      'Announcement': 'Объявление результатов',
      'Bid': 'Ставка',
      'Bidder': ' Участник',
      'Bidders': ' Учасники',
      'Bidding': 'Торги',
      'English': 'Английский',
      'Russian': 'Русский',
      'Ukrainian': 'Украинский',
      'Client': 'Клиент',
      'Edit': 'Изменить',
      'Info': 'Информация',
      'Initial bids': 'Первоначальные ставки',
      'Language': 'Язык',
      'Login in as viewer': 'Вход в качестве зрителя',
      'Login in as': 'Вход в качестве',
      'Logout': 'Выйти',
      'Place a bid': 'Сделать ставку',
      'Preliminary bids': 'Предварительные ставки',
      'Round': 'Раунд',
      'Settings': 'Настройки',
      'Time': 'Время',
      'You': 'Вы',
      'All bidders': 'Все участники торгов',
      'Pause': 'Пауза',
      'Results Release': 'Результаты',
      'Waiting': 'Ожидание',
      'or lower': 'или меньше',
      'UAH': 'грн',
      'shortTime': 'HH:mm',
      'Restart sync': 'Перезапуск синхронизации',
      'To low value': 'Слишком низкая ставка',
      'To high value': 'Слишком высокая ставка',
      'Not valid bidder': ' Вы не являетесь валидный пользователем',
      'Stage not for bidding': 'Данный этап аукциона не предусматривает приема ставок',
      'Bid placed': 'Ставку принято',
      'Your proposal :': 'Ваше предложение:',
      'Finish': 'Окончен',
      'days': 'дн',
      'hours': 'час',
      'minutes': 'мин',
      'seconds': 'сек',
      'minimum': 'минимум',
      'Internet connection is lost. Attempt to restart after 1 sec': 'Cоединения с интернетом потеряно. попытка перезагрузки через 1 сек',
      'Synchronization failed': 'Ошибка синхронизации',
      'Possible results': 'Возможные результаты',
      'In the room came a new user': 'В кабинет зашел новый пользователь',
      'until the auction starts': 'до начала аукциона',
      'until your turn': 'до вашей очереди',
      'until your turn ends': 'до завершения вашей очереди',
      'until the round starts': 'до начала раунда',
      'until the round ends': ' до окончания раунда',
      'until the results announcement': 'до объявления результатов',
      'after the auction was completed': 'после окончания аукциона',
      'prohibit connection': 'запретить подключение'
    });
  }]);