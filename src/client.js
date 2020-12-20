import * as sapper from '@sapper/app';

import './bootstrap-client';

sapper.start({
	target: document.querySelector('#sapper')
});