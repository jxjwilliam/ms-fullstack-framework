import React, { useState, useEffect } from 'react'
import { useTable, useAsyncDebounce, useSortBy, useGlobalFilter } from 'react-table'
import dayjs from 'dayjs'
import { Modal } from '../components'

/**
 * https://github.com/public-apis/public-apis
 * CORS policy: No 'Access-Control-Allow-Origin' header
 */

function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Search:{' '}
      <input
        value={value || ''}
        onChange={e => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder={`type, date, location in ${count} records...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </span>
  )
}

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy)

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
                <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
              </th>
            ))}
          </tr>
        ))}
        <tr>
          <th
            colSpan={visibleColumns.length}
            style={{
              textAlign: 'left',
            }}
          >
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </th>
        </tr>
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: '10px',
                    border: 'solid 1px gray',
                    background: 'papayawhip',
                  }}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default function () {
  const [query, setQuery] = useState('node')
  const [data, setData] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [item, setItem] = useState(null)

  function toggleModal(event) {
    if (!isOpen) {
      const selected = data.find(item => item.id.toString() === event.target.id.toString())
      setItem(selected)
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  const columns = [
    {
      Header: '#',
      id: 'row',
      maxWidth: 50,
      filterable: false,
      Cell: row => <div>{parseInt(row.row.id, 10) + 1}</div>,
    },
    {
      Header: 'Type',
      accessor: 'type',
    },
    {
      Header: 'Date',
      accessor: d => dayjs(d.created_at).format('YYYY-MMM-DD'),
    },
    {
      Header: 'Company',
      accessor: d => (
        <a href={d.company_url} target="__blank">
          {d.company}
        </a>
      ),
    },
    {
      Header: 'Location',
      accessor: 'location',
    },
    {
      Header: 'Title',
      accessor: d => (
        <>
          <button type="button" onClick={toggleModal} id={d.id}>
            👉 {d.title}
          </button>
        </>
      ),
    },
  ]

  useEffect(async () => {
    let mounted = true
    if (query) {
      const res = await fetch(`/github/${query}`)
      const json = await res.json()
      if (mounted) setData(json)
    }
    return () => (mounted = false)
  }, [query])

  const handleChange = event => {
    const search = event.target.value.toLowerCase().trim()
    setQuery(search)
    // useAsyncDebounce(setQuery(search), 500)
  }

  /**
   * TODO: throttle, debounce
   */
  const handleSubmit = event => {
    setQuery(event.target.value.toLowerCase().trim())
    event.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search!</button>
      </form>
      <Table columns={columns} data={data} />
      {isOpen && <Modal isOpen={isOpen} toggleModal={toggleModal} item={item} />}
    </>
  )
}
