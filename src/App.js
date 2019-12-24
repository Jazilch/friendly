import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import styled from 'styled-components';

import FriendlyHeader from './components/Header';
import FriendlyFooter from './components/Footer';
import FriendsList from './components/FriendsList';
import FriendsCalendar from './components/FriendsCalendar';
import AddEventModal from './components/AddEventModal';
import UpdateEventModal from './components/UpdateEventModal';

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

function App() {
  const addModalOpen = useSelector(state => state.modalReducer.addModalOpen);
  const updateModalOpen = useSelector(
    state => state.modalReducer.updateModalOpen
  );
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
                <FriendsList />
              </StyledSider>
              <StyledContent>
                <FriendsCalendar />
              </StyledContent>
            </Route>
          </Switch>
        </StyledLayout>
        <Footer>
          <FriendlyFooter />
        </Footer>
      </Layout>
      {addModalOpen && <AddEventModal />}
      {updateModalOpen && <UpdateEventModal />}
    </Router>
  );
}

export default App;
