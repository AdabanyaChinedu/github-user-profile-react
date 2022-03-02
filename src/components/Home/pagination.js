import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { SET_PAGE } from '../../constants/actionTypes';

const mapDispatchToProps = dispatch => ({
  onSetPage: (page, payload) =>
    dispatch({ type: SET_PAGE, page, payload })
});

const ListPagination = props => {
  if (props.userCount <= 31) {
    return null;
  }

  const range = [];
  for (let i = 0; i < Math.ceil(props.userCount / 10); ++i) {
    console.log(props.userCount[i])
    range.push(i);
  }


  const setPage = page => {
    if(props.pager) {
      props.onSetPage(page, props.pager(page));
    }else {
      props.onSetPage(page, agent.Users.get(props.data, page))
    }
  };

  return (
    <nav className="row mt-5 py-4 d-flex justify-content-center">
      <ul className="pagination d-flex w-75 justify-content-center flex-wrap">

        {
          range.map(v => {
            const isCurrent = v === props.currentPage;
            const onClick = ev => {
              ev.preventDefault();
              setPage(v);
            };
            return (
            
               <li
                className={ isCurrent ? 'page-item active' : 'page-item' }
                onClick={onClick}
                key={v.toString()}>

                <a className="page-link" href="">{v + 1}</a>

              </li>
        
              
             
            );
            
          })
        }

      </ul>
    </nav>
  );
};

export default connect(() => ({}), mapDispatchToProps)(ListPagination);
