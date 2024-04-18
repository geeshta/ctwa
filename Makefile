setup: yarn_deps install_fish

yarn_deps:
	yarn install

install_fish:
	curl -fsSL https://download.opensuse.org/repositories/shells:fish:release:3/Debian_12/Release.key | gpg --dearmor -o /etc/apt/trusted.gpg.d/shells_fish_release_3.gpg
	echo "deb [signed-by=/etc/apt/trusted.gpg.d/shells_fish_release_3.gpg] http://download.opensuse.org/repositories/shells:/fish:/release:/3/Debian_12/ /" | tee /etc/apt/sources.list.d/shells_fish_release_3.list
	apt update
	apt install -y fish
	chsh -s /usr/bin/fish root

.PHONY: setup yarn_deps install_fish
