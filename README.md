

# [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#memory-card-game-tidbits-about-brazil)Memory Card Game: Tidbits about Brazil

The live link can be found [here](https://vivignutz.github.io/second-portfolio-project/).

## [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#introduction)Introduction

This project was thought as the second milestone of the Full Stack Software Development course offered by Code Institute Ireland.

The goal of this memory card game is to offer to users who have some interest in Brazilian culture and like ‘memes’ (or other funny contents) a little bit of the humor in form of a very fast memory card game, which users can find in any online journal or magazine.

[![responsiveness](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/responsiveness.jpg)](https://github.com/vivignutz/second-portfolio-project/blob/main/assets/images/responsiveness.jpg)


The users can play this memory card while they are going or coming back from work, or while they do small pauses during the work day or even when they are relaxing at home. Hopefully, this game can arouse some interest of the online media companies, and offer to users the chance to take a fun pause having this game at their products.

----------

## [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#ux)USER EXPERIENCE - UX

### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#overview)Overview

The game was developed so that it can be inserted in some online media communication media (e-journal, e-magazines) or even become an application, to entertain the user for some minutes.

### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#why-a-memory-card-game)Why a Memory Card Game?

The idea behind the Memory Card Game project came from the people's need to have a small moment of distraction without having to be connected with the social social networks. As an Internet user since long time, I have always been connected to social networks, which have become big "department stores" that is bombarding users all the time with products and services. In the case of this memory game, the user can interact with his gadget, have some fun, without having to scroll the screen
to avoid advertisements.

### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#key-project-goals)Key Project Goals

I would like to provide to users a quick entertaining moment, with some interaction, having a good blogging of e-magazine experience. And looking from the media companies side, avoid having a possible fast bounce rate of this blog or e-magazine, since these are monetized. 

So, by using the game, the user would stay longer inside of a website.

----------

## [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#design)Design

### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#design-process)Design Process
    
 -   #### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#second-impressions-of-the-users)First impressions of the users
 
		- This site is created with the following user expectations in mind: 
				 
	    -   "As a first time user, I would like to:
    
		    -   Have a distraction other than social media channels, at the time I am in the waiting room of the doctor's office;
		    -   The interaction should be easy to navigate and without having to think to solve a problem;
		    -   The layout should not contain confusing elements and should be direct, simple and clear; 
		    -   I can access it from all my electronic devices, be it a tablet, mobile phone;  
		    -   Get an immediate result from my interaction, after all, is what is constantly sought after accessing social networks."
        
    
   
	    -   As the creator of the site, we would like to:
    
		    -   Offer a secure, easy to use game that any adult person can access and immediately be interacting with the cards, having fun with each correct move, no matter where he is.
		    -   
-  #### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#scope-plane)Scope Plane
    
    **Features**
    
    -   The game was not designed for devices with screen sizes larger than 800 px. It was thought so to be implemented as a 'widget' or a 'section' within an online newspaper or magazine.
        
    -   It should be responsive and user-friendly on all browsers of mobile devices.
        
    -   Intuitive and user-friendly game that any people can play and enjoy while on a train journey, after reading an article in a newspaper or having a pause of work.
        
    -   Intuitive and user-friendly layout in order to give to the user a easy first impression about how to play that.
        
    -   The purpose of the game should be clear immediately.



	**Color Scheme**

	-   I have used colors that could be contrasted with the white used in all back faces of the cards. 

	- #949494 Gray for the Head/Instructions
	- #FFFFFF White for the back of the cards and text color
	- #DEBA13 Gold Tips for the details of the back cards
	- #757272 Smokey Gray to the modal content
	- #89730E Corn Harvest for the card content
	- #282816 Zeus for the hover effect
	- #00FF00 Highlighter Green for the border of the cards


        
-  #### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#structure-plane)Structure Plane
    
    **User Story:**
    
    > -   _"As a first time player I would like to immediately understand the rules bacause I have not much time. I would like to have access to a quick game that could distract me for a minute. After one or two minutes playing, it would be nice to see my result on the screen. The rules should be easy."_
    
    **Acceptance Criteria:**
    
    -  The user can access the game as many times as he wants, from any mobile device, as long as it has internet access. He  can easily click on any card in the game and the game will start automatically. 
    -  There is no start button, in order to provide a faster and easier way to start the game. The user can see an instruction headline and the container with 12 cards, where he should find the respective card, which the text refers to it.
    
    **Result:**  User Story accomplished.
    

## [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#features)Features

### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#existing-features)Existing Features

-   **Simple head with instructions**
    
    -   The game has no header and no footer. Instead, the **h1** was build inside of th main div and invites the user to start to play.
    - 	Below the **h1** there is a **paragraph** with instructions to click in one card to start to play.
    - 	The goal to build a simple head is to let the user to focuse in the game and not in any other interactions.
    

[![alt text](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/head.jpg)](https://github.com/vivignutz/second-portfolio-project/blob/main/assets/images/head.jpg)

-  **Hoving effect at the back of the cards**

	- The cards that are showing the back face _"Plase come to Brazil"_, they get a hover effect when the touched.


-   **The flipping Cards**
    
    -   The game has 12 cards which 6 of them contain images and the ohter 6, contain text that correspond to the images. The user has to find the two cards that matches each other.
    
    - When clicked on one card, it flips in 180 degrees and while it is fliping, a 3D-effect appears. If the cards do not match, the third click should unflip both cards in -180 degrees, coming back to the started position. 

[![alt text](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/flipping_cards.gif)](https://github.com/vivignutz/second-portfolio-project/blob/main/assets/images/flipping_cards.gif)


-   **Matching two cards**
    
    -   When two cards match, they stay fixed open, and both get a neon green border to show to the user that these cards are still used and match each other.

[![alt text](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/marked_border.jpg)](https://github.com/vivignutz/second-portfolio-project/blob/main/assets/images/marked_border.jpg)
        

-   **Winning the game**
    
    -   When all cards match with its correspondent ones, a modal container comes to the front and the game and it gets a different color one. In this moment, an image message appears: **"Excellent! Click to play again!"**. 
    
    - Than the cards will be sorted again in a loop, and the game returns to the start.

[![alt text](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/modal_all_matches.jpg)](https://github.com/vivignutz/second-portfolio-project/blob/main/assets/images/modal_all_matches.jpg)
   

-   **Metadata**

"Memory Game: Tidbits about Brazil"


-   **Features Left to Implement**

	- A Fav icon. 
	
	- Improve the responsiveness for all mobile devices.
	
	- Implement the **"Match image Sign"**, which is not appearing in the right moment one. I realized that while running th tests. 

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

-   The configuration **"4 x 3"** of the cards, brought the initial responsiveness to the game accordint to its card configuration.
    
-   The Chrome developer tool have been used to check the responsivness of the website.

[![HTML results](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/gif_responsiveness.gif)](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/gif_responsiveness.gif)
    

### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#validator-testing)Validator Testing

For Markup Validator I have use the W3C Validator and for CSS, the W3C CSS Validator Services to validate all pages of the project to ensure there were no syntax errors in there.

-   **W3C Markup Validator** 
 
[![HTML results](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/w3validator.jpg)](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/w3validator.jpg)
    
    
-   **W3C CSS Validator**  

[![CSS results](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/w3css.jpg)](https://github.com/vivignutz/second-portfolio-project/blob/main/assets/images/w3css.jpg)


For JavaScript validator I have used Extends Class JS Validator, which shows a warning about the Ecma Script.

-   **Extends Class Validator**

[![JavaScript results](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/jsvalidator.jpg)](https://github.com/vivignutz/second-portfolio-project/blob/main/assets/images/jsvalidator.jpg)


-   **JSHint**
[![JavaScript results](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/jshint.jpg)](https://github.com/vivignutz/second-portfolio-project/blob/main/assets/images/jshint.jpg)


-   **Lighthouse**  

[![Lighthouse](https://github.com/vivignutz/second-portfolio-project/raw/main/assets/images/lighthousetest.jpg)](https://github.com/vivignutz/second-portfolio-project/blob/main/assets/images/lighthousetest.jpg)


### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#further-testing)Further Testing

-  I have confirmed that the colours and fonts chosen are easy to read and accessible by running it through lighthouse in Chrome developer tools.
-   Flip up of cards works correctly.
    
-   Hover-effect at back cards works correctly.
    
-   Green border that shows the cards match works correctly.
    
-   The -180 degrees unflip of the cards works correctly.
    
-   The sorting of the cards runs 90% well.
    
-   The modal container with the "win" message works according to the expected.

-  The "match" message does not centralize and has to be improved.
    

### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#solved-bugs)Solved bugs

-   Several bugs were found regarding the fliping of the cards. This were solved with the right debugging with help of Chrome developer tools and the Slack students community of Code Institute.

-   Sorting of cards had also a bug, which was solved after running lots of tests with Chrome developer tools and help or one tutor, the bug inside of an array (for sorting cards) was solved.
    
-   Bug with responsiveness that has to be solved.
        

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
-   [Gif Cap:](https://gifcap.dev/)  To record my screen in .gif format.
-   [Self HTML-Wiki](https://wiki.selfhtml.org/wiki/JavaScript/Tutorials)  Tutorials JavaScript for beginners.

### [](https://github.com/vivignutz/second-portfolio-project/blob/main/README.md#acknowledgements)Acknowledgements

-   A huge thank to my mentor at Code Institute for helpful feedbacks and specially to the tutor "Ed", who teached me some logic to soarting the cards.
    
