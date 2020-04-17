import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Card, { CARD_TYPES } from '../components/card'
import { css } from 'emotion'
import Container from '../components/container'
import Subtitle from '../components/subtitle'
import { LOCALIZATION } from '../constants/localization'
import Filters from '../components/filters'
import ButtonToggle from '../components/button-toggle'
import { SORTING_OPTIONS, SORTING_TYPES } from '../constants/sorting-options'
import { FILTER_OPTIONS, FILTER_TYPES, IFilter } from '../constants/filter-options'
import List from '../components/list'
import Ticket from '../components/ticket'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchIdThunk, getTicketsThunk } from '../store/tickets'
import { ITicket } from '../models/ticket.model'
import Title from '../components/title'
import { ThunkDispatch } from 'redux-thunk'
import ticketUtil from '../utils/ticket.util'

//#region Styles
const ticketsPageStyles = css`
  display: flex;
`

const filtersStyles = css`
  width: 232px;
  margin-right: 20px;
`

const filtersSubtitleStyles = css`
  padding: 20px 20px 0 20px;
`

const contentStyles = css`
  width: 502px;
`

const ticketsSorter = css`
  margin-bottom: 20px;
`
//endregion

const TicketsPage = () => {
  const [selectedSorting, setSelectedSorting] = useState<SORTING_TYPES>(SORTING_TYPES.CHEAPEST)
  const [processedData, setProcessedData] = useState<ITicket[]>([]);

  const [filters, setFilters] = useState(FILTER_OPTIONS.reduce(
    (acc, curr) => ({ ...acc, [curr.id]: true }),
    {} as Record<FILTER_TYPES, boolean>,
  ))

  const dispatch: ThunkDispatch<any, any, any> = useDispatch()

  const {
    data,
    searchIdLoading,
    errors,
    stop,
    searchId,
    ticketsRequestCounter,
  } = useSelector((state: any) => state.tickets)

  const isLoading = searchIdLoading || !data.length

  useEffect(() => {
    (async () => {
      await dispatch(getSearchIdThunk())
    })()
  }, [])

  useEffect(() => {
    (async () => {
      if (searchId && !stop) {
        await dispatch(getTicketsThunk(searchId))
      }
    })()
    // TODO (29.03.2020): refactor hack with request counter
  }, [ticketsRequestCounter, searchId, stop])

  useEffect(() => {
    setProcessedData(
      [...data].filter((ticket: ITicket) => {
        return ticketUtil.getAppropriateFilters(ticket)
          .some(filter => filters[filter])
      }).sort(ticketUtil.getComparatorBySortingType(selectedSorting)),
    )
  }, [data, filters, selectedSorting])

  return (
    <>
      <Header/>

      <main>
        <Container className={ticketsPageStyles}>
          <aside>
            <Card
              className={filtersStyles}
              type={CARD_TYPES.WITHOUT_CONTENT_PADDING}
            >
              <Subtitle className={filtersSubtitleStyles}>
                {LOCALIZATION.TICKETS_PAGE.NUMBER_OF_TRANSFERS}
              </Subtitle>

              <Filters
                filters={FILTER_OPTIONS}
                values={filters}
                setValues={setFilters}
              />
            </Card>
          </aside>

          <article className={contentStyles}>
            <ButtonToggle
              className={ticketsSorter}
              handleSelect={setSelectedSorting}
              items={SORTING_OPTIONS}
              selectedItemId={selectedSorting}
            />

            <List>
              {
                errors && errors.map((error: string) => (
                  <Title className={css`color: red; text-align: center`}>{error}</Title>
                ))
              }
              {
                processedData && processedData.slice(0, 5)
                  .map((ticket: ITicket) => <Ticket ticket={ticket}/>)
              }
            </List>
          </article>
        </Container>
      </main>
    </>
  )
}

export default TicketsPage
