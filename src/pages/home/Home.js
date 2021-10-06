import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import CreatePost from '../create-post/CreatePost';
import Dashboard from '../dashboard/Dashboard';

const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
);

const Home = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const handleDrawerOpen = (isOpen) => {
        setOpenDrawer(isOpen);
    };

    const handleDrawerClose = (isClose) => {
        setOpenDrawer(isClose);
    };


    return (
        <div>
            <Box sx={{display: 'flex'}}>
                <Header handleDrawerOpen={handleDrawerOpen} openDrawer={openDrawer}></Header>

                <Router>
                    <Sidebar handleDrawerClose={handleDrawerClose} openDrawer={openDrawer}></Sidebar>
                    <Main open={openDrawer}>
                        <Box sx={{marginBottom: '50px'}}></Box>
                        <Switch>
                            <Route exact path="/">
                                <Dashboard></Dashboard>
                            </Route>
                            <Route exact path="/dashboard">
                                <Dashboard></Dashboard>
                            </Route>
                            <Route exact path="/create-post">
                                <CreatePost></CreatePost>
                            </Route>
                        </Switch>
                    </Main>
                </Router>
            </Box>
        </div>
    );
};

export default Home;