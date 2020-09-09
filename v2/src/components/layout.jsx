import PropTypes from 'prop-types';
import Header from './header';

const Layout = ({ /* withHeader, */ children }) => (
  <div className="page-container">
    {/* withHeader && <Header /> */}
    <Header />
    {children}
    <style>
      {`
        .page-container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
    `}
    </style>
  </div>
);

Layout.propTypes = {
  // withHeader: PropTypes.bool
};

Layout.defaultProps = {
  // withHeader: true
};

export default Layout;
