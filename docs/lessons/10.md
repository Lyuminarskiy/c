# 10. Combining everything together

Solve the task, using all the practical skills that have been developed earlier.

Variants (click to open):

<details>
<summary>1</summary>
<hr>

**Making a histogram**

Open a text file and read all its contents. Then, based on its contents, build a histogram that displays the number of alphabetic characters it contains. Count the characters in a register-independent way, that is, the symbols `a` and `A` on the histogram are the same symbol.

Each histogram's column should contain:

1. `Title` - alphabetical character.
2. `Body` - dashed line.
3. `Value` - number of encounters of the character.

The number of dashes should correspond to the number of encounters of a particular alphabetical character in the text.

Sample output:

```
a: ---------------------------- 28
b: ------------------- 19
c: -- 2
d: ------------- 13
e: - 1
f: - 1
g: - 1
h: --------------- 15
i: ------ 6
j: 0
k: ----------------------------- 29
l: 0
m: 0
n: 0
o: 0
p: -- 2
q: 0
r: - 1
s: 0
t: --- 1
u: 0
v: -------- 8
w: -- 2
x: -- 2
y: - 1
z: --- 3
```

<hr>
</details>

<details>
<summary>2</summary>
<hr>

**Rock-paper-scissors game**

Create a game in which the `Player` will compete with the `Computer` in the rock-paper-scissors game.

A player who decides to play `rock` will beat another player who has chosen `scissors`, but will lose to one who has played `paper`; a play of `paper` will lose to a play of `scissors`. If both players choose the same shape, the game's turn is tied and is immediately replayed to break the tie.

The game consists of three turns. The winner is the player who wins twice.

Game's algorithm:

1. Ask the `Player` to enter a nickname.
2. Display the turn's number.
3. Ask the `Player` to choose a shape.
4. The `Player` enters the name of the desired shape.
5. Select a random figure for the `Computer`.
6. If the `Computer` and the `Player` have chosen the same shapes, go to step `3`.
7. Determine the winner of this turn.
8. Display the name of the winner of the turn.
9. If one of the players has already won twice, finish the game. Otherwise go to step `2`.
10. Display the name of the winner of the game.

Sample output:

```
Please, enter your nickname: Nick Smith

========== First turn ==========
Choose a shape: paper
The Computer chose the scissors.

The winner of the turn is Computer.

========== Second turn ==========
Choose a shape: rock
The Computer chose the rock.

Choose a shape: rock
The Computer chose the scissors.

The winner of the turn is Nick Smith.

========== Third turn ==========
Choose a shape: rock
The Computer chose the paper.

The winner of the turn is Computer.

========== Summary ==========
The winner of the game is Computer.
```

<hr>
</details>

<details>
<summary>3</summary>
<hr>

<hr>
</details>

<details>
<summary>4</summary>
<hr>

<hr>
</details>

<details>
<summary>5</summary>
<hr>

<hr>
</details>

<details>
<summary>6</summary>
<hr>

<hr>
</details>