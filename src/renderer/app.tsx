import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Store from '--tooling/dist/store';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

ReactDOM.render(
	<AppContainer>
		<p>123</p>
	</AppContainer>,
	mainElement
);
