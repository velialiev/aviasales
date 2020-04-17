import { LOCALIZATION } from '../constants/localization'

const convertMinutesToDisplayableFormat = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
  const minutesRest = minutes - hours * 60
  return `${hours}${LOCALIZATION.TIME.H} ${minutesRest}${LOCALIZATION.TIME.M}`
}

const convertMinutesToMilliseconds = (minutes: number): number => {
  return minutes * 60 * 1000
}

const convertToHoursAndMinutesFormat = (date: string | number | Date): string => {
  return new Date(date)
    .toLocaleTimeString()
    .split(':')
    .slice(0, -1)
    .join(':')
}

const getTimeInterval = (date: string, duration: number) => {
  const departureTime = convertToHoursAndMinutesFormat(date)
  const arrivalTime = convertToHoursAndMinutesFormat(
    +new Date(date) + convertMinutesToMilliseconds(duration),
  )

  return `${departureTime} - ${arrivalTime}`
}

const timeUtil = {
  convertMinutesToDisplayableFormat,
  convertMinutesToMilliseconds,
  convertToHoursAndMinutesFormat,
  getTimeInterval,
}

export default timeUtil
