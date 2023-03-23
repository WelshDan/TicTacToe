# Tic Tac Toe

This website provides a simple game for two human players to play the classic game Tic Tac Toe. Tic Tac Toe is a turn-based game where players take it in turns to lay their game piece in a 3x3 grid with the aim of forming three-in-a-row. The match is won when a player can get three of their own game piece in a row, whether it be horizontally, vertically or diagonally. A match can be drawn if neither player achieves a three-in-a-row before all the areas of the grid have been filled. Then the game can be just restarted and enjoyed all over again!

This game shows the basic functions in HTML, CSS and JavaScript so can be interesting to look at from that perspective - if the game is not interesting enough!

ENTER MULTI MEDIA PICTURES!!
![Screenshot](assets/images/multidevice.jpg)

## Features


### Page layout


The website is all focused onto one page so there are no links to any other pages.

There is a Heading Box at the top which displays the name of the game and that there are two players who can play.

![Screenshot](assets/images/pagelayout1.jpg)

In the middle of the page is the playing grid. Is is a 3x3 grid of squares that can be clicked on during the duration of the game. Player 1 will enter X's and Player 2 will enter O's.

![Screenshot](assets/images/pagelayout2.jpg)

There is a text information underneath the playing grid, I have called it the status bar. It shows who's current turn it is and also if the match has been won or drawn.

![Screenshot](assets/images/pagelayout3.jpg)

At the bottom is the Play Again button which will restart the game, clearing the grid of previous game information.

![Screenshot](assets/images/pagelayout4.jpg)

And finally the footer which includes the author of the website.

![Screenshot](assets/images/pagelayout5.jpg)

## Bugs

There are a few bugs which have been unfortunately unfixed before deploying.
  Layout of game grid is not aligned correctly on the iPad on the MultiDevice picture. Media query settings were not sufficient to correct this.
  The "playAgain" button that reloads the page could not be formed so I have put in a reload page function in its place.
  The click to choose a square (also choosePlayerIcon function) stopped being stable just as I was finishing the project and so it changes active player every time the button is clicked in the square as opposed to only when the X or O is chosen.


## Validator testing

HTML - W3C validator

![Screenshot](assets/images/w3validator.jpg)

CSS - official (jigsaw) validator

![Screenshot](assets/images/w3CSS.jpg)

I have run this page through dev tools Lighthouse function:

![Screenshot](assets/images/lighthouse.jpg)

## Deployment

The website has been deployed through gitHub and can be found in the following link:
https://welshdan.github.io/TicTacToe/

## Credits

Tips and help:

W3.org - centering of start box / color coding
JavaScript Master - startGame functions and layout help (https://www.youtube.com/watch?v=Slj9rPBJTcY&t=1214s)
Emer Heffernan, personal tutoring and help
Code.mu Winner check function (https://code.mu/en/javascript/book/practice/tick-tack-toe/victory-checking/)
My mentor Akshat Garg, for his guidance and assistance.
