import React from 'react'
import Card from './card'
import Row from './row'
import Title from './title'
import { css } from 'emotion'
import Table from './table'
import { ITicket } from '../models/ticket.model'
import URLS from '../constants/urls.constant'
import ticketUtil from '../utils/ticket.util'
import CurrencyFormat from 'react-currency-format'

const ticketHeader = css`
  margin-bottom: 20px;
`

const Ticket = ({ className, ticket }: IProps) => {
  return (
    <Card className={className}>
      <Row className={ticketHeader}>
        <Title>
          <CurrencyFormat
            value={ticket.price}
            displayType="text"
            thousandSeparator=" "
            suffix=" Р"
          />
        </Title>
        <div>
          <img src={URLS.PIC(ticket.carrier)} alt="company logo"/>
        </div>
      </Row>

      <Table table={ticketUtil.getTransfersTable(ticket)}/>
    </Card>
  )
}

interface IProps {
  className?: string
  ticket: ITicket
}

export default Ticket
