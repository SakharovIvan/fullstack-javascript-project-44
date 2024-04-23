install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-games-calc:
	node bin/brain-calc.js
brain-games-even:
	node bin/brain-even.js
brain-games-gcd:
	node bin/brain-gcd.js
brain-games-prime:
	node bin/brain-prime.js
brain-games-progression:
	node bin/brain-progression.js
publish:
	npm publish --dry-run
lint:
	npx eslint
