import PropTypes from 'prop-types';
import Header from './nav/nav';
import Footer from './footer/footer';
import { breakpoints } from '../assets/styles/constants';

const Layout = ({ /* withHeader, */ children }) => (
  <>
    {/* withHeader && <Header /> */}
    <Header />
    <div className="page-container">{children}</div>
    <Footer />
    <style jsx>
      {`
        .page-container {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        @media (max-width: ${breakpoints.nav}) {
          .page-container {
            margin-top: 8rem;
          }
        }
      `}
    </style>
  </>
);

Layout.propTypes = {
  // withHeader: PropTypes.bool
};

Layout.defaultProps = {
  // withHeader: true
};

export default Layout;
