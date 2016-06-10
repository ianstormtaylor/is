
build: node_modules index.js

clean:
	@rm -fr build components node_modules

node_modules: package.json
	@npm install
	@touch node_modules

test: build
	@open test/index.html

.PHONY: clean test
