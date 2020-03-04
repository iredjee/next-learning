import Header from './Header';

const layoutStyle = {
  margin: 10,
  padding: 10,
  border: '1px solid #ffff00',
};

const withLayout = (Page) => {
  return () => (
    <div style={layoutStyle}>
      <Header />
      <Page />
    </div>
  );
};

export default withLayout;
