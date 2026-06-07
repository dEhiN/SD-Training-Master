/** This component will act as a welcome card that can be featured in the hero section of the main page. */

function WelcomeCard() {
	return (
		<div>
			<p className="fonts-google iosevka-charon-regular">
				Welcome to my first React app! This sentence using Ioveska Charon regular as the
				font. Do you like it?
			</p>
			<p className="fonts-google iosevka-charon-bold">
				Welcome to my first React app! This sentence using Ioveska Charon bold as the font.
				Do you like it?
			</p>
			<p className="fonts-google playwrite-au-vic-lite">
				Welcome to my first React app! This sentence using Playwrite AU Vic with weight 159
				as the font. Do you like it?
			</p>
		</div>
	);
}

export default WelcomeCard;
