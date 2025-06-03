import { Suspense } from 'react';
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import Header from 'features/Header';
import { AppStyles, Footer, Wrapper, Main } from 'App.styled';

const App = () => {
  return (
    <>
      <AppStyles />
      <Wrapper>
        <Header />
        <Main>
          <Suspense fallback={'Loading...'}>
            <PrivateRoutes />
            <PublicRoutes />
          </Suspense>
        </Main>
        <Footer>
          <div>MarketPlace MW</div>
        </Footer>
      </Wrapper>
    </>
  );
};

export default App;
