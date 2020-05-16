# -------------------------------------- #
# -------------- Makefile -------------- #
# -------------------------------------- #

# Default commands and setup params
.DEFAULT_GOAL := help

.PHONY: help
help: ## Show this help message.
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
	    awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: fmt
fmt: ## Run project code formatting
	@$(MAKE) fmt-js

.PHONY: test
test: ## Run project tests
	@$(MAKE) lint-js
	@$(MAKE) lint-deps
	@$(MAKE) test-js

.PHONY: build
build: ## Run project build
	@$(MAKE) build-js

# -------------------------------------- #
# ----- HELPER COMMANDS BELOW HERE ----- #
# -------------------------------------- #

.PHONY: fmt-js
fmt-js:
	@yarn run fmt:js

.PHONY: lint-js
lint-js:
	@yarn run lint:js


.PHONY: lint-deps
lint-deps:
	@yarn run lint:deps

.PHONY: test-js
test-js:
	@yarn run test:js

.PHONY: build-js
build-js:
	@yarn run build