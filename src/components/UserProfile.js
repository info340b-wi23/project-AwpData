import React from "react";

import { Link, useParams } from "react-router-dom";

// Private function which will render the poem based on what is in the array
// Use a map to make divs with each poem and then it will add it to the list
function Poem(props) {
    let source = props.sourceInfo.map((attribute) => {
        return <li>{attribute}</li>
    });

    return (
    <div className="col-md-6">
       <div className="explore-card-user-profile"> 
       <Link to="/ExplorePreview">
               <p className="lit">
                   {props.textContent}
               </p>
               <ul className="description-card">
                   {source}
               </ul>
        </Link>
       </div>
    </div>
    );
}

export function UserProfile() {
    const params = useParams();
    const username = params.username !== undefined ? params.username : "Username"; // If username is in the URL then it will replace the placeholder

    return (
        <main>
        <div className="user-profile flexbox-container">
            <div className="user-info">
                <h1>{username}</h1>
                <img src="/img/profile-icon.png" width="100" height="100" className="d-md-inline-block align-top"
                            alt="Your profile icon"/>
            </div>
            <div className="tab-selection">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item user-tab" role="presentation">
                        <button className="nav-link bg-dark active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button"
                            role="tab" aria-controls="home-tab-pane" aria-selected="true">Your Posts</button>
                    </li>
                    <li className="nav-item user-tab" role="presentation">
                        <button className="nav-link bg-dark" id="liked-tab" data-bs-toggle="tab" data-bs-target="#liked-tab-pane" type="button"
                            role="tab" aria-controls="liked-tab-pane" aria-selected="false">Liked</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                                <Poem textContent="Hermione stopped dead; Harry had heard it too.
                                                Somebody had moved close behind them among the
                                                dark bookshelves. They waited, and a moment later
                                                the vulturelike countenance of Madam Pince
                                                appeared around the corner, her sunken cheeks, her
                                                skin like parchment, and her long hooked nose
                                                illuminated unflatteringly by the lamp she was
                                                carrying.“The library is now closed,” she said. “Mind you
                                                return anything you have borrowed to the correct —
                                                what have you been doing to that book, you depraved
                                                boy?”" sourceInfo={["Harry Potter, Page 345", "JK Rowling", "#HarryPotter"]}/>                                                       
                    </div>
                    <div className="tab-pane fade" id="liked-tab-pane" role="tabpanel" aria-labelledby="liked-tab" tabIndex="0">
                    </div>
                </div>
            </div>
        </div>
    </main>

    );
}