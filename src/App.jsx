import React from 'react'
import { useTable, useSortBy, usePagination } from 'react-table';


const data = [
  { id: 1, name: 'John Doe', gender: 'Male', salary: 50000 },
  { id: 2, name: 'Jane Smith', gender: 'Female', salary: 60000 },
  { id: 3, name: 'Michael Johnson', gender: 'Male', salary: 70000 },
  { id: 4, name: 'Emily Brown', gender: 'Male', salary: 55000 },
  { id: 5, name: 'Olivia Wilson', gender: 'Female', salary: 72000 },
  { id: 6, name: 'William Martinez', gender: 'Male', salary: 65000 },
  { id: 7, name: 'Sophia Anderson', gender: 'Female', salary: 80000 },
  { id: 8, name: 'James Taylor', gender: 'Male', salary: 45000 },
  { id: 9, name: 'Amelia Thomas', gender: 'Female', salary: 70000 },
  { id: 10, name: 'Alexander Hernandez', gender: 'Male', salary: 75000 },
  { id: 11, name: 'Mia White', gender: 'Male', salary: 60000 },
  { id: 12, name: 'Daniel Clark', gender: 'Female', salary: 55000 },
  { id: 13, name: 'Emma Lewis', gender: 'Male', salary: 70000 },
  { id: 14, name: 'Ethan Walker', gender: 'Female', salary: 72000 },
  { id: 15, name: 'Ava Hall', gender: 'Male', salary: 62000 },
  { id: 16, name: 'Sophie King', gender: 'Male', salary: 56000 },
  { id: 17, name: 'Noah Allen', gender: 'Female', salary: 78000 },
  { id: 18, name: 'Isabella Young', gender: 'Male', salary: 50000 },
  { id: 19, name: 'Liam Baker', gender: 'Female', salary: 65000 },
  { id: 20, name: 'Charlotte Green', gender: 'Male', salary: 70000 },
  { id: 21, name: 'Benjamin Hill', gender: 'Female', salary: 60000 },
  { id: 22, name: 'Chloe Harris', gender: 'Male', salary: 55000 },
  { id: 23, name: 'Logan Nelson', gender: 'Female', salary: 72000 },
  { id: 24, name: 'Mia Watson', gender: 'Male', salary: 67000 },
  { id: 25, name: 'Lucas Hughes', gender: 'Female', salary: 74000 },
];



const columns = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Salary",
    accessor: "salary",
  },
];



const App = () => {
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,

        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,

        state:{
          pageIndex,
        },
        pageCount,
        gotoPage,
      } = useTable({
        columns,
        data,
        initialState:{
          pageSize:5
        }
      },
      useSortBy,
      usePagination

)

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {
            headerGroups.map((hg) => (
              <tr {...hg.getHeaderGroupProps()}>
                {
                  hg.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}

                     {
                      column.isSorted && <span>{column.isSortedDesc? ' (dsc)' : ' (asc)'}</span>
                     }

                      </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            page.map(row => {
              prepareRow(row)
              return (
              <tr {...row.getRowProps()}>
                  {
                    row.cells.map(cell => (
                      <td {...cell.getCellProps()}>
                        {
                          cell.render("Cell")
                        }
                      </td>
                    ))
                  }
              </tr>

            )})
          }

        </tbody>
      </table>
      <div className='pagination'>
        <button onClick={()=> gotoPage(0)} disabled={pageIndex === 0}>First-page</button>
        <button className='prev' onClick={previousPage} disabled={!canPreviousPage}>Prev</button>
         <span>{pageIndex + 1} of {pageCount}</span>
        <button className='next' onClick={nextPage} disabled={!canNextPage}>Next</button>
        <button onClick={()=> gotoPage(pageCount - 1)} disabled={pageIndex >= pageCount - 1}>Last-page</button>
      </div>
    </div>
  )
}

export default App

