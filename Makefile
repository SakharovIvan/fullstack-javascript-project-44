install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-games-calc:
	node src/games/brain-calc.js
brain-games-even:
	node src/games/brain-even.js
brain-games-gcd:
	node src/games/brain-gcd.js
brain-games-prime:
	node src/games/brain-prime.js
brain-games-progression:
	node src/games/brain-progression.js
publish:
	npm publish --dry-run
lint:
	npx eslint
