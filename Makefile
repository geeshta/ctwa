setup: yarn_deps install_fish upgrade_os

yarn_deps:
	yarn install

install_fish:
	curl -fsSL https://download.opensuse.org/repositories/shells:fish:release:3/Debian_12/Release.key | gpg --dearmor -o /etc/apt/trusted.gpg.d/shells_fish_release_3.gpg
	echo "deb [signed-by=/etc/apt/trusted.gpg.d/shells_fish_release_3.gpg] http://download.opensuse.org/repositories/shells:/fish:/release:/3/Debian_12/ /" | tee /etc/apt/sources.list.d/shells_fish_release_3.list
	apt update
	apt install -y fish
	chsh -s /usr/bin/fish root

upgrade_os:
	apt update && apt -y full-upgrade && apt -y autoremove

reown:
	sudo chown -R $(USER):$(USER) *

.PHONY: setup yarn_deps install_fish upgrade_os
