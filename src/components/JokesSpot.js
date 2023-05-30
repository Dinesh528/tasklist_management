import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJokes } from '../actions/jokeActions';
import { Circles } from 'react-loader-spinner';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navigation from "./Navbar";

const JokesSpot = () => {
  const dispatch = useDispatch();
  const jokes = useSelector((state) => state.jokes.jokes);

  useEffect(() => {
    dispatch(fetchJokes());
  }, [dispatch]);

  const StyledTable = styled(Table)({
    fontFamily: 'Comic Sans MS',
    margin: '20px 0',
  });

  const StyledTableCell = styled(TableCell)({
    fontSize: '18px',
    fontWeight: 'bold',
  });

  const StyledTableRow = styled(TableRow)({
    '&:nth-of-type(odd)': {
      backgroundColor: '#f5f5f5',
    },
  });

  return (
    <div>
      <Navigation />
      {jokes.length > 0 ? (
        <StyledTable>
          <TableHead>
            <StyledTableRow>
            <h2 className='text-center'>Jokes Spot</h2>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {jokes.map((joke) => (
              <StyledTableRow key={joke.id}>
                <StyledTableCell>{joke.joke}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      ) : (
        <div style={{ textAlign: 'center' }}>
                      <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{justifyContent:"center"}}
  wrapperClass=""
  visible={true}
  
/>
        </div>
      )}
    </div>
  );
};

export default JokesSpot;
