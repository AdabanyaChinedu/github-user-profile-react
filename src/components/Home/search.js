import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { SEARCH_USER } from '../../constants/actionTypes';


const mapDispatchToProps = dispatch => ({
    onMouseEnter: (payload, inputData)  =>
        dispatch({ type: SEARCH_USER, payload, inputData })
});



function Search(props) {

    const mouseEnter = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();           
            let pageNumber = "1";
            let inputData = event.target.value;
            if(inputData){
                let data = agent.Users.get(inputData, pageNumber);           
                props.onMouseEnter(data, inputData)
            }
            
        }
    };

    return (
        <>
            <div className="search-box mt-5">
                <form className="position-relative w-25 mx-auto" data-bs-toggle="search" data-bs-display="static" aria-expanded="false">
                    <input className="form-control search-input fuzzy-search" onKeyDown={mouseEnter} type="search" placeholder="Search..." aria-label="Search" />
                    <svg className="svg-inline--fa fa-search fa-w-16 search-box-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>

                </form>
                <div className="btn-close-falcon-container position-absolute end-0 top-50 translate-middle shadow-none" data-bs-dismiss="search">
                    <div className="btn-close-falcon" aria-label="Close"></div>
                </div>

            </div>
        </>
    );
}


// export default Search;

export default connect(() => ({}), mapDispatchToProps)(Search);