new Vue({
	el: '#app',
	data: {
		isInGame: false,
		player: {
			health: 100,
			attack: 8,
			special: 12,
			heal: 4
		},
		monster: {
			health: 100,
			attack: 9
		},
		events: []
	},
	methods: {
		attack() {
			let value = Math.round(Math.random() * this.monster.attack);
			this.player.health -= value;
			this.logEvent('Monster', 'deals', value);

			value = Math.round(Math.random() * this.player.attack);
			this.monster.health -= value;
			this.logEvent('Player', 'deals', value);
			this.checkGameState();
		},
		special() {
			let value = Math.round(Math.random() * this.monster.attack);
			this.player.health -= value;
			this.logEvent('Monster', 'deals', value);

			value = Math.round(Math.random() * this.player.special);
			this.monster.health -= value;
			this.logEvent('Player', 'deals', value);
			this.checkGameState();
		},
		heal() {
			const attack = Math.round(Math.random() * this.monster.attack);
			this.player.health -= attack;
			this.logEvent('Monster', 'deals', attack);

			const heal = attack + Math.round(Math.random() * this.player.heal);
			this.player.health += heal;
			this.logEvent('Player', 'heals', heal);
		},
		giveUp() {
			this.player.health = 100;
			this.monster.health = 100;
			this.isInGame = false;
			this.events = [];
		},
		checkGameState() {
			if (this.player.health < 0) {
				this.giveUp();
				this.events.push({ class: 'monster-event', text: `Monster has slain you.` });
			} else if(this.monster.health < 0) {
				this.giveUp();
				this.events.push({ class: 'player-event', text: `You have slain the monster.` });
			}
		},
		logEvent(actor, action, value) {
			const eventActor = actor === 'Player' ? 'player-event' : 'monster-event';
			const eventLength = this.events.length;
			
			this.events.push({ class: eventActor, text: `${actor} ${action} for ${value}` });
			
			if(eventLength >= 10) {
				this.events.splice(0, 1);
			}
		},
		gameInit() {
			if(!this.isInGame) {
				this.isInGame = true;
				this.events = [];
			}
		}
	},
	computed: {
		playerHealthbar() {
			return (this.player.health * 4) + 'px';
		},
		monsterHealthbar() {
			return (this.monster.health * 4) + 'px';
		}
	}
});