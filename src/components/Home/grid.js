import ProfileCard from './profile-card'
import Pagination from './pagination'
import React from 'react';

function Grid(props) {
    return (
        <>
            <div className="card mt-5 w-75 mx-auto">
                <div className="card-header bg-light fw-bold">
                    Profiles({props.userCount})
                </div>
                <div className="card-body bg-light p-2">
                    {
                        props.dataLoading && (
                            <div className="text-center my-3">
                               Loading.........
                            </div>
                        )
                    }
                    {
                        props.userCount === 0 ? (
                            <div className="text-center">
                                No Users.
                            </div>
                        )
                            : (
                                <div className="row g-1 text-center fs--1">
                                    {
                                        props.users.map(user => {
                                            return (
                                                <ProfileCard user={user} key={user.id} />
                                            );
                                        })
                                    }
                                
                                    <Pagination
                                        data={props.inputData}
                                        pager={props.pager}
                                        userCount={props.userCount}
                                        currentPage={props.currentPage} />
                               </div>
                            )

                    }

                </div>
            </div>
        </>
    );
}


export default Grid;