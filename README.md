## [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#readme-in-construction)README IN CONSTRUCTION

# [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#memory-card-game-tidbits-about-brazil)Memory Card Game: Tidbits about Brazil

The live link can be found  [here](https://vivignutz.github.io/second-portfolio-project/).

## [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#introduction)Introduction

This project was thought as part of the Full Stack Software Development course offered by Code Institute Ireland.

The goal of this memory card game is to offer to users who have some interest in Brazilian culture and like ‘memes’ (or other funny contents) a little bit of the humor in the form of very fast memory card game, which users can find in any online journal or magazine.

[![responsiveness](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/responsiveness.jpg)](https://github.com/vivignutz/second-portfolio-project/blob/main/assets/images/responsiveness.jpg)


The users can play this memory card while they are going or coming back to and from work, or during small pauses during the day or while relaxing at home. Hopefully, this game can spark some interest from online media companies and offer to users the chance to take a fun pause.

----------

## [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#ux)USER EXPERIENCE - UX

### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#overview)Overview

The game was developed so that it can be inserted in some online media communication media (e-journal, e-magazines) or even become an application, to entertain the user in a moment of pause.

### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#why-a-memory-card-game)Why a Memory Card Game?

The idea behind the Memory Card Game project came from the need for people to have a small moment of distraction without the need to be connected all the time on social networks. As an Internet user, I have always been very connected to social networks, which have become big "department stores" that bombard us all the time with products and services. In the case of this memory game, the user can interact with his gadget, have some fun, without having to scroll the screen to avoid advertisements.

### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#key-project-goals)Key Project Goals

I would like to provide the users with an entertaining moment, of quick interaction, so that they have a good experience on the weblog and also to avoid a possible fast bounce rate, since the blog is monetized. So, by using the jog, the user would stay longer inside my site.

----------

## [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#design)Design

### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#design-process)Design Process
    
 -   #### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#second-impressions-of-the-users)First impressions of the users
 
		- This site is created with the following user expectations in mind: 
				 
	    -   As a first time user, I would like to:
    
		    -   Have a distraction other than social media, at the time I am in the waiting room of the doctor's office 
		    -   The interaction should be easy to navigate and without having to think to solve a problem
	        -   The layout should not contain confusing elements and should be direct, simple and clear  
		    -   I can access it from all my electronic devices, be it a tablet, mobile phone or laptop  
		    -   Get an immediate result from my interaction, after all, is what is constantly sought after accessing social networks
        
    
   
	    -   As the creator of the site, we would like to:
    
		    -   Offer a secure, easy to use game that any adult person can access and immediately be interacting with the cards, having fun with each correct move, no matter where he is.
-  #### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#scope-plane)Scope Plane
    
    **Features**
    
    -   The game was not designed for devices with screen sizes larger than 680 px. It was thought to be implemented  as a widget or a section within an online newspaper or magazine.
        
    -   It should be responsive and user-friendly on all browsers and mobile devices.
        
    -   Intuitive and user-friendly game that any people can play and enjoy while on a train journey, after reading an article in a newspaper or having a pause of work.
        
    -   Intuitive and user-friendly layout.
        
    -   The purpose of the game should be clear immediately.



	**Color Scheme**

	-   I have used colors that could be contrasted with the white used fo the back face of the cards. 

	- #949494 Gray for the Head/Instructions
	- #FFFFFF White for the back of the cards and text color
	- #DEBA13 Gold Tips for the details of the back cards
	- #757272 Smokey Gray to the modal content
	- #89730E Corn Harvest for the card content
	- #282816 Zeus for the hover effect
	- #00FF00 Highlighter Green for the border of the cards


        
-  #### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#structure-plane)Structure Plane
    
    **User Story:**
    
    > -   "As a first time player I would like to immediately understand the rules bacause I have not much time. I would like to have access to a quick game that could distract me for a minute. After a minute or two of playing, I would like to see the result of my game as soon as possible. I would like the game to have easy rules."
    
    **Acceptance Criteria:**
    
    -  The user can access the game as many times as he wants, from any mobile device, as long as it has internet access. The user can easily click on any card in the game and the game will start automatically. 
    -  There is no start button, in order to provide a faster and easier way to start the game. The user can see an instruction headline and the container with 12 cards, where he should find the respective card, which the text refers to it.
    
    **Result:**  User Story accomplished.
    

## [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#features)Features

### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#existing-features)Existing Features

-   **Simple head with instructions**
    
    -   The game has no header and no footer. Instead, the h1 was build inside of th main div and invites the user to start to play.
    - Below the h1 there is a paragraph with instructions to click in one card to start to play.
    - The goal to build a simple head is to let the user to focuse in the game and not in any other interactions.

[![alt text](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/head.jpg)](https://github.com/vivignutz/second-portfolio-project/blob/main/assets/images/head.jpg)

-  **Hoving effect at the back of the cards**

	- The cards that are showing the back face "Plase come to Brazil", they get a hover effect when the touched.


-   **The flipping Cards**
    
    -   The game has 12 cards which 6 of them contain images and the ohter 6 contain text that correspond to the images. The user has to find the two cards that matches each other.
    
    - When clicked on one card, it flips in 180 degrees showing a 3D loop. If the cards do not match, the third click should unflip both cards in -180 degrees. 

[![alt text](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/flipping_cards.gif)](https://github.com/vivignutz/second-portfolio-project/blob/main/assets/images/flipping_cards.gif)


-   **Matching two cards**
    
    -   When two cards match, they stay open and both get a light green border to show to the user that these cards are still used.

[![alt text](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/marked_border.jpg)](https://github.com/vivignutz/second-portfolio-project/blob/main/assets/images/marked_border.jpg)
        

-   **Winning the game**
    
    -   When all cards match with its correspondent ones, the modal container comes to the front and the game gets a different color one. In this moment an image message appears: "Excellent! Click to play again!". 
    
    - Than the cards will be sorted again (loop) and the game returns to the start.

[![alt text](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/modal_all_matches.jpg)](https://github.com/vivignutz/second-portfolio-project/blob/main/assets/images/modal_all_matches.jpg)
   

-   **Metadata**

"Memory Game: Tidbits about Brazil"


-   **Features Left to Implement**

	- A Fav icon. 
	
	- Improve the responsiveness for other mobile devices.
	
	- Implement the "Match image Sign", which did not work when I run the tests. 

	- The sorting of the cards has to be improved, since some times the same card opens more than one time.


## [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#technologies-used)Technologies Used

-   HTML5
-   CSS3
-   JavaScript
-   [Google Fonts:](https://fonts.google.com/)  To import font family ’Lato’ into the style.css file which is used on all pages. Added fallback font sans-serif.
-   [GitHub:](https://github.com/)  GitHub is used to store the projects code after being pushed from Git.
-   [Git](https://git-scm.com/)  Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
-   [Gif Cap:](https://gifcap.dev/)  To record my screen and transfor in a .gif format.
-   [Google Images - Creative Commons:](https://images.google.com.br/)  Used Brazilian Google Image Creative common in order to get the images of Brazilian memes.
-   [Am I Responsive:](http://ami.responsivedesign.is/)  Checking the responsive.
-   [Arty Click Colors:](https://colors.artyclick.com/color-name-finder/)  To discover the name of the colors.

## [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#tests)Tests

### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#browser-testing)Browser testing

-   The game was though to run in mobile devices. I have used to test the browses Chrome and Safari (for iPhone).
    
-   The tests with Chrome Developer Tools were done using Windows 11 Pro.


### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#responsivness)Responsivness

-   I have tested that this game works on different screen sizes for mobile devices. The tests were ran for Samsung Galaxi S8+ (360px wide)  and also for iPad (800px wiede).

- The configuration "4 x 3" of the cards, brought the responsiveness to the game.
    
-   The Chrome developer tool have been used to check the responsivness of the website.

[![HTML results](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/gif_responsiveness.gif)](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/gif_responsiveness.gif)
    

### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#validator-testing)Validator Testing

For Markup Validator I have use the W3C Validator and for CSS, the W3C CSS Validator Services to validate all pages of the project to ensure there were no syntax errors in there.

-   W3C Markup Validator  
[![HTML results](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/w3validator.jpg)](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/w3validator.jpg)
    
-   W3C CSS Validator  [![CSS results](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/w3css.jpg)](https://github.com/vivignutz/second-portfolio-project/blob/main/assets/images/w3css.jpg)

-   Lighthouse  [![Lighthouse](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/lighthousetest.jpg)](https://github.com/vivignutz/second-portfolio-project/blob/main/assets/images/lighthousetest.jpg)

### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#further-testing)Further Testing

-  I have confirmed that the colours and fonts chosen are easy to read and accessible by running it through lighthouse in Chrome developer tools.
-   Flip of cards works correctly.
    
-   Hover effect at back cards works correctly.
    
-   Border that shows the cards that matches works correctly.
    
-   The unflipp of the cards works correctly.
    
-   The sorting of the cards runs 90% well.
    
-   The modal container with the "win" message works well.

-  The "match" message does not centralize.
    

### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#solved-bugs)Solved bugs

-   Several bugs were found regarding the flipping of the cards. This were solved with the right debugging at Chrome developer tools.

-  Sorting of cards had also a bug, that is still there and sometimes the same card is pushed and the game can't be finalized.
    
-   Bug with responsiveness that has to be solved.
    
-   The logo was not styck inside of the head. I changed the positio to fixed.
    

## [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#deployment)Deployment

-   The site was deployed to GitHub page, according to the steps:
    
    -   Log in to GitHub > GitHub repository > second-portfolio-project.
    -   "Settings" > "Pages" (on the left hand menu).
    -   Under "Source" > "Main" > "Root".
    -   Click on "Save".

[![GitHub](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/deployed.jpg)](https://github.com/vivignutz/second-portfolio-project/blob/main/assets/images/deployed.jpg)

## [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#credits)Credits

-   [Google Fonts:](https://fonts.google.com/)  Font family ’Lato’ used on all pages.
-   [Font Awesome:](https://fontawesome.com/)  Oly used in fifth section to add icons at the style.
-   [Am I Responsive:](http://ami.responsivedesign.is/)  Checking the responsive.
-   [Gif Cap:](https://gifcap.dev/)  To record my screen in .fig format.

### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#acknowledgements)Acknowledgements

-   A huge thank to my mentor at Code Institute for helpful feedbacks and to the tutors for helping me while the process.
    
