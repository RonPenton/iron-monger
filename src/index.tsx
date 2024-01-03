import React from "react";
import * as ReactDOM from 'react-dom';

// import './css/styles.scss';

export const App: React.FC = () => {
    return <div>Hello World</div>;
} 

ReactDOM.render(React.createElement(App), document.getElementById("container"));