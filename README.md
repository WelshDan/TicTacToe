# Tic Tac Toe ![Screenshot](assets/images/favicon.jpg)

A simple game to be enjoyed with a friend.

---------------

## Table of contents

1. How to play Tic Tac Toe<br/>
    1.1 Basic Rules<br/>
2. Planning<br/>
    2.1 Aim of simplicity<br/>
    2.2 Used languages<br/>
3. Layout & Design<br/>
    3.1 Website structure<br/>
    3.2 Page layout<br/>
    3.3 Icons<br/>
4. Description of game screen<br/>
    4.1 Interactive parts<br/>
    4.2 Non-interactive parts<br/>
5. Important code functions<br/>
    5.1 JavaScript functions<br/>
    5.2 Python start code<br/>
6. Testing, issues & Bugs<br/>
    6.1 Online tests<br/>
    6.2 Manual testing<br/>
7. Issues & Bugs<br/>
    7.1 Resolved issues<br/>
    7.2 Validator testing<br/>
8. Deployment<br/>
    8.1 Github deployment<br/>
    8.2 Link<br/>
9. Credits<br/>
    9.1 Credits, references and thanks<br/>

<br/><br/>

---------------

## 1. How to play Tic Tac Toe?

Tic Tac Toe is a turn-based game where players take it in turns to lay their game piece in a 3x3 grid with the aim of forming three-in-a-row


#### 1.1 Basic Rules:
- Players take it in turns to click on a grid to place their game piece, whether it be an X or an O

![Screenshot of playing grid with one x in it](assets/images/turn-two.jpg)

![Screenshot of playing grid with one x and one o in it](assets/images/turn-three.jpg)

- The match is won when a player can get three of their own game piece in a row, whether it be horizontally, vertically or diagonally

![Screenshot of a winning playing grid for player x](assets/images/x-wins.jpg)

![Screenshot of a winning playing grid for player o](assets/images/o-wins.jpg)

- A match can be drawn if neither player achieves a three-in-a-row before all the areas of the grid have been filled

![Screenshot of a drawn playing grid](assets/images/draw.jpg)

- Clicking on the play again button resets the grid and players can play again

![Screenshot of a drawn playing grid](assets/images/pagelayout4.jpg)

<br/><br/>

---------------

## 2. Planning

#### 2.1 Aim of simplicity

The aim of the game was to show how basic functions can be used to create a relatively simple game.

#### 2.2 Used languages

- HTML
- CSS
- JavaScript

The users only needs to click the mouse to play. There are no redirects, links or page refreshes in the game.

<br/><br/>

---------------

## 3. Layout & Design

#### 3.1 Website structure

The are two webpages in project in total. The main page and the 404 page.

#### 3.2 Page layout

The game is focused onto one page so there are no links to any other pages.
Although there is a 404 page in case a user types something wrong in the addressbar
and that has a button that links back to the game page.

*index.html*

![Screenshot of index.html page](assets/images/index.jpg)

*404 page*

# INSERT 404 PIC

#### 3.3 Icons

I wanted the favicon to include three t's and the main colours used on the page.

The first favicon is from this [Favicon generator](https://favicon.io/favicon-generator/) while
the second favicon was created with the [Favicon creator](https://www.favicon.cc/)

|First idea|Second idea|
|--- |--- |
|![Three t's, two in uppercare and the middle in lower case](assets/images/notused-TTT-favicon.png)|![Three t's, one larger in the middle and two smaller either side](assets/images/favicon.jpg)|

I thought they were both ok but the created one seemed more unique:

![Three t's, one larger in the middle and two smaller either side](assets/images/favicon.jpg)

<br/><br/>

---------------

## 4. Description of game screen

#### 4.1 Interactive parts

In the middle of the page is the playing grid. Is is a 3x3 grid of squares that can be clicked on during the duration of the game. Player 1 will click to enter X's and Player 2 will click to enter O's.

![Picture of a blank 3x3 grid](assets/images/pagelayout2.jpg)

At the bottom is the Play Again button which will restart the game, clearing the grid of previous game information.
This is the colour of the button normally:

![Play Again button normally](assets/images/pagelayout4.jpg)

This is the colour of the Play Again button once it is hovered over to be clicked:

![Play Again button hovered over](assets/images/pagelayout4.jpg)

#### 4.2 Non-interactive parts

There is a heading box at the top which displays the name of the game and that there are two players who can play.

![Heading box that shows the name of the game and the two players, x and o](assets/images/pagelayout1.jpg)

There is a text information underneath the playing grid, I have called it the status bar. It shows who's current turn it is and also if the match has been won or drawn.

![Status bar example](assets/images/pagelayout3.jpg)

And finally the footer which includes the author of the website.

![Footer copyright](assets/images/pagelayout5.jpg)

<br/><br/>

-----

## 5. Important code functions

#### 5.1 JavaScript functions

There are several code functions in the script.js file that gives the gameplay the necessary mechanics to work.

**startGame**

The initial game function
- Adds event listeners to the playing tiles
- Sets the status bar to show that it is player x's turn
- Sets the game to running

**onTileClick**

This is the function that is activated on every tile click
- Checks to see if clicked on game tile is empty
- If empty, it calls the updateSquare function to add the players icon (x or o) and calls the changePlayerIcon function which
changes the current player. It also calls the checkWinner function after that.
- If the tile contains an X or O then it is not clickable

**updateSquare**

This function adds the Xs or the Os to the tile
- Adds the player's icon (x or o) to the clicked on tile through the onTileClick function

**changePlayerIcon**

This function swaps between the current players
- Checks if the current player is O and if it isn't then it is X
- Changes the current player in the status bar

**checkWinner**

This function checks if the win conditions have been met
- Checks if one of the winning tile combinations have been met and if not, the game continues
- If one of the winning tile combinations has been met, the roundWon function is called
- A winning combination is either a win for one of the two sides or a draw
- Stops the running of the game

**clearGame**

This functions is called by the newGame function and resets the playing grid
- It adds an opening and closing p element to each square to set the grid up for the next game
- It adds "" to each tile to enable the tiles to receive the players icons in the next game
- Changes the starting player to player-x
- Starts the running of the game
- Adds a status bar update to show there is a new game to be played

**newGame**

This function is called on the click of the Play Again button
- Calls the clearGame function

#### 5.2 Python start code

From console:
python3 -m http.server

<br/><br/>

-----

## 6. Testing, issues & Bugs

#### 6.1 Online tests

**Multi Device Website Mockup Generator**

The website main page was run through the **[Multi Device Website Mockup Generator](https://techsini.com/multi-mockup/index.php)**
![Screenshot containing the index page on 5 different screen size formats](assets/images/multidevice.jpg)

**Lighthouse**

![Screenshot from the dev tools lighthouse function](assets/images/lighthouse.jpg)

**[W3 html code validator](https://validator.w3.org/#validate_by_input)**

![Screenshot from w3 validator](assets/images/w3validator.jpg)

**[W3 CSS code HTML validator](https://jigsaw.w3.org/css-validator/#validate_by_input)**

![Screenshot from w3 CSS validator](assets/images/w3CSS.jpg)

#### 6.2 Manual testing

<table>
	<tr>
		<th>Test area</th>
		<th>Expected outcome</th>
		<th>Result of test</th>
 	</tr>
 	<tr>
  		<td>Click on refresh page</td>
   		<td>Pages refreshes game grid and status show "Player x's turn"</td>
		<td>Page refreshed game grid and status showed "Player x's turn"</td>
 	</tr>
	<tr>
  		<td>Click on a game grid square</td>
   		<td>An "x" icon should be placed in selected square and status changes to "Player o's turn"</td>
		<td>An "x" icon was placed in selected square and status was changed to "Player o's turn"</td>
 	</tr>
	<tr>
  		<td>Click on previously selected game grid square</td>
   		<td>Player x's icon should remain in previously selected game grid square and status should show "Player o's turn"</td>
		<td>Player x's icon remains in previously selected game grid square and status showed "Player o's turn"</td>
 	</tr>
	<tr>
  		<td>Click on empty game grid square</td>
   		<td>An "o" icon should be placed in selected square and status changes to "Player x's turn"</td>
		<td>An "o" icon was be placed in selected square and status was changed to "Player x's turn"</td>
 	</tr>
<td>Clear the board and alternate between clicks to make sure player x wins the game</td>
   		<td>The correct icons should be placed in selected squares and when a three-in-a-row is made then the status changes to "X's wins"</td>
		<td>The correct icons were placed in selected squares and when a three-in-a-row was made then the status changed to "X's wins"</td>
 	</tr>
</tr>
<td>Clear the board and alternate between clicks to make sure player o wins the game</td>
   		<td>The correct icons should be placed in selected squares and when a three-in-a-row is made then the status changes to "O's wins"</td>
		<td>The correct icons were placed in selected squares and when a three-in-a-row was made then the status changed to "O's wins"</td>
 	</tr>
</tr>
<td>Clear the board and alternate between clicks to make sure player o wins the game</td>
   		<td>The correct icons should be placed in selected squares and when a three-in-a-row is made then the status changes to "O's wins"</td>
		<td>The correct icons were placed in selected squares and when a three-in-a-row was made then the status changed to "O's wins"</td>
 	</tr>
</tr>
<td>Click Play Again button</td>
   		<td>Playing grid should empty of icons and status should show "NEW GAME! Player X's turn"</td>
		<td>Playing grid emptied of icons and status showed "NEW GAME! Player X's turn"</td>
 	</tr>
</table>

<br/><br/>

-----

## 7. Issues & Bugs

#### 7.1 Resolved issues

There were a few bugs which have now been remedied:
 - Squares could be clicked on multiple times and that also saw a change of player. What should have happened is that the square once chosen is then blocked from further changes. This issue was solved by ensuring that only empty squares could be clicked on.
 - The player could continue clicking on empty squares even after the game was finished. Empty squares could still be clicked on and that was stopped by inserting a check to see if the game was over and then if the game was over, the ability to click on an empty box was removed.
 - A 404 error page has now been added.
 - Clicking on the "Play Again" button did not previously clear the board and reset addEventListeners as desired but this has been remedied due to adding an opening and closing paragraph element in the clearGame function
 - This matches what is contained in each grid sqaure in the index file and due to this added paragraph element, the play again button and the event listeners attached to the grid  squares operate correctly.
- Layout of game grid was not aligned correctly on the iPad on the MultiDevice picture but this has been correct by giving the top box a positioning of relative and adjusting the top margin values slightly.
- Blanks arrays have been replace with an array.fill function to list the empty tiles in the grid (blanks = Array(9).fill("");)

#### 7.2 Validator testing

HTML - W3C validator

![screenshot w3 html validator](assets/images/w3validator.jpg)

CSS - official (jigsaw) validator

![screenshot w3 CSS validator](assets/images/w3CSS.jpg)

I have run this page through dev tools Lighthouse function:

![screenshot of Dev Tools Lighthouse](assets/images/lighthouse.jpg)

<br/><br/>

-----

## 8. Deployment

#### 8.1 Github deployment

The website was deployed using the hosting platform Github. Here are the steps:
1. Choose the repository name
2. Select Settings
3. Under "Pages", choose "Code and automation"
4. Under "Build and deployment" and then under "Source", select Deploy from a branch
5. Under "Build and deployment" and under "Branch", use the branch dropdown menu to select a publishing source

#### 8.2 Link

The website has been deployed through gitHub and can be found in the following link:
https://welshdan.github.io/TicTacToe/

<br/><br/>

-----

## 9. Credits

#### 9.1 Credits, references and thanks

Tips and help:

- W3.org - centering of start box / color coding<br>
- JavaScript Master - startGame functions and layout help (https://www.youtube.com/watch?v=Slj9rPBJTcY&t=1214s)<br>
- Emer Heffernan, personal tutoring and help<br>
- Code.mu Winner check function (https://code.mu/en/javascript/book/practice/tick-tack-toe/victory-checking/)<br>
- My mentor Akshat Garg, for his guidance and assistance<br>
- My friend Keith Herne for his assistance on a few CSS matters<br>
- Daisy Mc Girr for her help on the issue with the Play Again button issue<br>
- 404 page guide (https://www.youtube.com/watch?v=vRbBvlDuolc - username: codewj)
