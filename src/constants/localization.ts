export const LOCALIZATION = {
  SORTING_BUTTON_TOGGLE: {
    FASTEST: 'Самый быстрый',
    CHEAPEST: 'Самый дешевый',
  },
  TICKETS_FILTERS_OPTIONS: {
    ALL: 'Все',
    ONE_TRANSFER: '1 пересадка',
    TWO_TRANSFERS: '2 пересадки',
    THREE_TRANSFERS: '3 пересадки',
    WITHOUT_TRANSFERS: 'Без пересадок',
  },
  TICKETS_PAGE: {
    NUMBER_OF_TRANSFERS: 'Количество пересадок',
    TRAVEL_TIME: 'В пути',
    // TODO (30.03.2020): find out how to localize such things
    TRANSFERS: (count: number) => {
      const countNumbers = count.toString().split('')
      const lastDigit = +countNumbers[countNumbers.length - 1]

      if (lastDigit === 0 || (lastDigit >= 5 && lastDigit <= 9) || (count >= 10 && count <= 20)) {
        return 'пересадок'
      }

      if (lastDigit === 1) {
        return 'пересадка'
      }

      if (lastDigit >= 2 && lastDigit <= 4) {
        return 'пересадки'
      }

      return 'пересадка'
    },
  },
  TIME: {
    H: 'ч',
    M: 'м',
  },
};
