import React from 'react';
import ReactDOM from 'react-dom';
import CodepenEmbed from './CodepenEmbed.tsx';

ReactDOM.render(
    <React.StrictMode>
        <CodepenEmbed penId="MWMGLYo" />
        <CodepenEmbed penId="MWMGLYo" theme="light" height={300} />
    </React.StrictMode>,
    document.getElementById('root')
);
