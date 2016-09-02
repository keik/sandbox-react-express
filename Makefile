TAG="\n\n\033[0;32m\#\#\# "
END=" \#\#\# \033[0m\n"
npm=$(shell npm bin)

build:
	@echo $(TAG)$@$(END)
	$(npm)/webpack --config ./webpack.config.js

watch:
	@echo $(TAG)$@$(END)
	$(npm)/parallelshell \
    "$(npm)/webpack --config ./webpack.server.config.js --watch --progress" \
    "$(npm)/webpack --config ./webpack.browser.config.js --watch --progress" \
    "$(npm)/nodemon build/app.js"
