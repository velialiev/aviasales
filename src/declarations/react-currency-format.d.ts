declare module 'react-currency-format' {
  declare function CurrencyFormat(props: Partial<IProps>)
  export default CurrencyFormat

  interface IProps {
    value: number
    displayType: string
    thousandSeparator: string
    suffix: string
  }
}
