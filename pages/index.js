import React from 'react';

export default class Home extends React.Component {
    constructor() {
        console.log('Home.constructor()');
        super();
    }

    render() {
        console.log('home.rendersape()');

        return (
          <div className="iframeContainer">
            <iframe src="https://mercadolibre.com.ar" title="iframe mercadolibre" height="100%" wifth="100%" />
            <style jsx>
              {`
                .home {
                    background-color: black;
                }
                .iframeContainer {
                    width: 100vw;
                    height: 100vh;
                    overflow: hidden;
                }
                iframe {
                    outline: none;
                    margin-top: -60px;
                    width: 100%;
                    border: none;
                    pointer-events: none;
                }
            `}
            </style>
          </div>

        );
    }
}
