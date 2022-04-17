import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { SWRConfig } from 'swr';
import { RecoilRoot } from 'recoil';
import { Layout } from './components/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig>
        <RecoilRoot>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: '1 0 auto',
              height: '100vh',
            }}
          >
            <Layout />
          </div>
        </RecoilRoot>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
