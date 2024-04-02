#!/bin/bash

# Clone the repository if it doesn't already exist
if [ ! -d "portfolio" ]; then
    git clone https://github.com/mixelburg/portfolio.git
fi

cd portfolio || exit

# Start the startup.sh script in the background and save its PID
./startup.sh &
PID=$!

# Function to kill the running startup.sh process
kill_startup() {
    kill -9 $PID
    lsof -ti:4444 | xargs kill -9
    wait $PID 2>/dev/null
}

# Function to pull new changes and restart startup.sh
pull_and_restart() {
    git pull
    ./startup.sh &
    PID=$!
}

# Infinite loop to check for remote changes every 60 seconds
while true; do
    # Fetch changes from the remote without merging them
    git fetch origin

    # Check if there are changes by comparing local and remote
    LOCAL=$(git rev-parse @)
    REMOTE=$(git rev-parse @{u})

    if [ "$LOCAL" != "$REMOTE" ]; then
        echo "Repository has been updated. Restarting the startup script..."
        kill_startup
        pull_and_restart
    else
        echo "No changes detected. Checking again in 60 seconds..."
    fi

    # Wait for 60 seconds before next check
    sleep 60
done
