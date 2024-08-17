# Pig Dice Game 🎲

## Overview

A simple implementation of the Pig Dice Game designed for two players. The goal is to be the first player to reach 100 points.
Players take turns rolling a dice. Each time a player rolls a die they decide to 'hold' to add the points from 'current score' to 'total score' or risk to see if you can win more. A playear is losing their current score if they roll a 1 and the turn passes to another player.

## Features

- **Custom player names:** You can personalize your game by setting player names
- **Score tracking:** Real time score updates
- **Simple interface:** Interface is easy for everyone to understand

## How to play

1. Enter names
2. Take your turn and roll a die
3. You can roll a die as many times as you wish. Your current score will grow until you roll a 1 or decide to 'hold' your points from 'current score' to 'total score'
4. If you roll a 1 you lose your current points and your turn ends
5. If you hold points you save your points by adding them to total score then your turn ends
6. The first player who reachs 100 poins in their 'total score' wins game

## Installation and Setup

- Clone the repository

```bash
git clone https://github.com/dkaspiarovich/pig-dice-game.git
```

- Navigate to the Project

```bash
cd pig-dice-game
```

- Open the index.html file in your browser
  - On Windows:
  ```bash
  start index.html
  ```
  - On macOS:
  ```bash
  open index.html
  ```
  - On Linux:
  ```bash
  xdg-open index.html
  ```

- Play the game!
