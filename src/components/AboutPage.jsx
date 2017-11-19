import React from 'react';

import './AboutPage.less';

const AboutPage = React.createClass({
	render() {
		return (
			<div className='AboutPage'>
				<h2 className='title'>
					This is message application
				</h2>
	
				<div className='text'>
					about message
				</div>
			</div>
		);
	}
});

export default AboutPage;