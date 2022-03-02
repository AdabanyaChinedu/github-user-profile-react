import React, { useState } from 'react';

function ProfileCard(props) {
    let user = props.user;
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    return (
        <>
            <div className="col-md-4 col-xxl-3 mb-1">
                <div className="bg-white dark__bg-1100 p-3 h-100" onMouseEnter={toggleHover}  onMouseLeave={toggleHover}>
                    <img className="img-thumbnail img-fluid rounded-circle mb-3 shadow-sm" src={user.avatar_url} alt="" width="100" />
                    <h6 className="mb-1 text-blue">{user.login}</h6>
                    <div className={ `${'mt-2'} ${ hovered ? '' : 'd-none'}`} >
                        <p className="fs--2 mb-2"> <b>Score:</b> {user.score}</p>
                        <p className="fs--2 mb-2"><b>Type:</b> {user.type}</p>
                        <p className="fs--2 mb-2"><b>Html Url:</b> {user.html_url} </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileCard;