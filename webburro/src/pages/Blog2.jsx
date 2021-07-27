import React from 'react'

import '../styles/Blog2.css'

export default function Blog2(props) {

    const Params=props.location.state

    console.log(Params)

    
    return (
    <React.Fragment>

     <div className="Main_Blog_Image_2"></div>

        <div className="Blog2">
        
            <div className="title">

                <div className="title__container">
                    <h2 className="title__container--title">{Params.title}</h2>
                </div>
            </div>
            
            <div className="text">
                <div className="text__container">
                    <p className="text__container--text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis minus ea nobis aliquid consequatur assumenda, ab nemo quia non dignissimos itaque architecto. Provident possimus sunt laborum corrupti numquam voluptas doloremque.
                    Odio doloremque atque porro quis suscipit amet rem dignissimos sit? Beatae molestias dicta quod quae rerum reiciendis accusamus nostrum, natus porro ad quidem numquam rem architecto harum iste provident id.
                    Placeat, nemo, optio dolorum mollitia laboriosam voluptatem necessitatibus quidem est ipsam aspernatur officia aliquid tenetur labore ab rerum facilis pariatur ut amet esse dolores quam ea exercitationem rem quisquam? Voluptate.</p>
                </div>

            </div>

        </div>
    </React.Fragment>
    )
}
