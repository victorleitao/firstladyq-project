let activeMode = 'scienceMode';

scienceButton.onclick = () => {
	if (activeMode !== 'scienceMode') {
		activeMode = 'scienceMode';
		clearActiveMode();
		scienceButton.classList.add('active');
		scienceContainer.classList.add('active');
		console.log('science mode active');
	} else {
	}
};

constructionButton.onclick = () => {
	if (activeMode !== 'constructionMode') {
		activeMode = 'constructionMode';
		clearActiveMode();
		constructionButton.classList.add('active');
		constructionContainer.classList.add('active');
		console.log('construction mode active');
	} else {
	}
};

troopButton.onclick = () => {
	if (activeMode !== 'troopMode') {
		activeMode = 'troopMode';
		clearActiveMode();
		troopButton.classList.add('active');
		troopContainer.classList.add('active');
		console.log('troop mode active');
	} else {
	}
};

healButton.onclick = () => {
	if (activeMode !== 'healMode') {
		activeMode = 'healMode';
		clearActiveMode();
		healButton.classList.add('active');
		healContainer.classList.add('active');
		console.log('heal mode active');
	} else {
	}
};

gearButton.onclick = () => {
	console.log('olar');
};

bugReportButton.onclick = () => {
	console.log(activeMode);
};

function clearActiveMode() {
	scienceButton.classList.remove('active');
	scienceContainer.classList.remove('active');
	constructionButton.classList.remove('active');
	constructionContainer.classList.remove('active');
	troopButton.classList.remove('active');
	troopContainer.classList.remove('active');
	healButton.classList.remove('active');
	healContainer.classList.remove('active');
}
