import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import styled from 'styled-components';

import FriendlyHeader from './components/Header';
import FriendlyFooter from './components/Footer';
import AddEventCalendar from './containers/AddEventModalContainer';
import UpdateViewCalendar from './containers/UpdateEventModalContainer';
import FriendsCalendarContainer from './containers/FriendsCalendarContainer';
import FriendsListContainer from './containers/FriendsListContainer';

const { Header, Footer, Sider, Content } = Layout;

const StyledHeader = styled(Header)`
  padding: 0 20px;
`;

const StyledLayout = styled(Layout)`
  display: flex;
  justify-content: space-between;
`;

const StyledSider = styled(Sider)`
  padding: 2rem 0;
`;

const StyledContent = styled(Content)`
  margin: 3rem;
`;

function App({ addModalOpen, updateModalOpen }) {
  return (
    <Router>
      <Layout>
        <StyledHeader>
          <FriendlyHeader />
        </StyledHeader>
        <StyledLayout>
          <Switch>
            <Route path="/calendar/:name">
              <StyledSider>
                <FriendsListContainer />
              </StyledSider>
              <StyledContent>
                <FriendsCalendarContainer />
              </StyledContent>
            </Route>
          </Switch>
        </StyledLayout>
        <Footer>
          <FriendlyFooter />
        </Footer>
      </Layout>
      {addModalOpen && <AddEventCalendar />}
      {updateModalOpen && <UpdateViewCalendar />}
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    addModalOpen: state.modalReducer.addModalOpen,
    updateModalOpen: state.modalReducer.updateModalOpen
  };
};

export default connect(mapStateToProps, null)(App);
