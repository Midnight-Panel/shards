#!/bin/bash
# -----------------------------------------------------------------------------
# Midnight Panel Container Entrypoint
# -----------------------------------------------------------------------------

# Set working directory
cd /home/container || exit 1

# Display Midnight brand header
echo -e "\033[0;35m"
echo -e "  __  __ _     _       _       _     _     "
echo -e " |  \/  (_) __| |_ __ (_) __ _| |__ | |_   "
echo -e " | |\/| | |/ _\` | '_ \| |/ _\` | '_ \| __|  "
echo -e " | |  | | | (_| | | | | | (_| | | | | |_   "
echo -e " |_|  |_|_|\__,_|_| |_|_|\__, |_| |_|\__|  "
echo -e "                         |___/             "
echo -e "\033[0m"
echo -e "\033[1;34m  Midnight Container Runtime Environment\033[0m"
echo -e "\033[0;90m  https://github.com/Midnight-Panel\033[0m\n"

# Evaluate and replace placeholders in STARTUP string
MODIFIED_STARTUP=$(eval echo $(echo "${STARTUP}" | sed -e 's/{{/${/g' -e 's/}}/}/g'))

echo -e "\033[1;32m:/\$ ${MODIFIED_STARTUP}\033[0m\n"

# Execute startup command
exec env ${MODIFIED_STARTUP}
