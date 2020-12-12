//to test any js code or implements //

import React from 'react';

export default function JavascriptTest() {
	const things = [ 1, 2, 3, 4, 5 ];

	things.forEach((thing, i) => {
		console.log(thing, i);
	});

	return null;
}
