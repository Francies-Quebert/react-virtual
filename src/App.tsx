import logo from './assets/logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import axios from './lib/axios';
import { useQuery } from '@tanstack/react-query';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";


function App() {
  const { isLoading, isError, data, error } = useQuery({ queryKey: ['cars'], queryFn: fetchCarsData, refetchOnWindowFocus: false },)

  async function fetchCarsData() {
    try {
      const response = await axios.get('cars', {
        params: { model: 'any', limit: 50 }
      });
      console.log(response.data, 'DATATA');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  console.log({ isLoading, isError, data, error }, 'some data')

  const Row = ({ index, style }: { index: number, style: React.CSSProperties }) => {
    
    return <div
      key={index}
      style={{
        ...style,
        background: ((index + 1) % 2) == 0 ? 'red' : 'blue',
        width: 500,
        height: 500
      }}>
      {`${data[index].class}  || ${data[index].make} || ${data[index].model}`}
    </div>
  }


  if (isLoading || isError) return null;
  return (
    <div className="App" style={{ flex: '1 1 auto', height: '100vh' }}>
      {/* <AutoSizer>
        {({ height, width }: {
          height: number;
          width: number;
        }) => <List
          useIsScrolling={true}
          height={height}
          itemCount={50}
          itemSize={500}
          width={width}
        >
            {Row}
          </List>
        }
      </AutoSizer> */}
      <AutoSizer>
        {({ height, width }: {
          height: number;
          width: number;
        }) => (
          <List
            useIsScrolling={true}
            height={height}
            itemCount={50}
            itemSize={500}
            width={width}
          >
            {Row as any}
          </List>
        )}
      </AutoSizer>
      <>{console.log(isLoading || isError)}</>
    </div>
  );
}

export default App;
