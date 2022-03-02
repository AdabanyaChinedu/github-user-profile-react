import Search from './search';
import Grid from './grid'
import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    ...state.home
});

function Home(props) {
    return (
        <>
            <Search />            
            <Grid
                pager={props.pager}
                dataLoading = {props.inProgress}
                users={props.users}
                loading={props.loading}
                userCount={props.userCount}
                currentPage={props.currentPage} 
                inputData = {props.inputData}/>
        </>
    );
}

export default connect(mapStateToProps)(Home);
