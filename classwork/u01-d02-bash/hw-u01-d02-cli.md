#First, things first!
You are **required** to add a picture to your slack and github accounts. Please do so by **tonight**!!!

#Third, Star Wars, the Command Line, and The Battle for the Fate of the Universe

Working in the command line is a key skill to develop as a programmer. It's a big break from what you're used to, and practice makes (eventually) perfect. Let's explore the Star Wars narrative using the command line!

Please RECORD your commands underneath each bullet point in this markdown.

As you work, make sure you `git add .` and `git commit -m "[YOUR MESSAGE HERE]"`!

## "A New Hope"
### Act I

* Fork and Clone this repository (HW_U01_D02_datatypes_cli) into your **HWs** directory.

* In your `HWs/HW_U01_D02_datatypes_cli/cli_practice` directory, create a new directory called `star_wars`.

> Example answer: `mkdir star_wars`

* In the `star_wars` folder, create two new directories: `empire` and `rebellion`.
> mkdir {empire,rebellion}

* Inside the `empire` directory, create a .txt file called `darth_vader`.
> touch darth_vader.txt

* Use the force (or your knowledge of the command line) to add the text "...heavy breathing..." to the `darth_vader` file. (Don't remember how to do this? Use the `other force`, known as Google!)
> $ echo '...heavy breathing...' >> darth_vader.txt


* Inside the `empire` directory, create a .txt file called `emperor_palpatine`.
> cd empire // touch emperor_palpatine.txt

* Inside the `empire` directory, create a directory called `death_star`.
> mkdir death_star

* Move `darth_vader` into the `death_star`.
> mv darth_vader.txt death_star

### Act II

* Move back to your `star_wars` directory, and enter the `rebellion` directory.
> cd .. // cd rebellion

* Create a file called `princess_leia` and add the text "Help me, Obi-Wan...You're my only hope."
> touch princess_leila.txt // echo 'Help me, Obi-Wan...You're my only hope.' >> princess_leila.txt

* Create a file called `obi_wan`.
> touch {obi_wan,luke_skywalker}.txt

* Create a file called `luke_skywalker`.
> touch {obi_wan,luke_skywalker}.txt

* Create a directory called `millenium_falcon`.
> mkdir millenium_falcon

* Inside the `millenium_falcon`, create two files: `han_solo` and `chewy`.
> cd millenium_falcon // touch {han_solo,chewy}.txt

* Move `luke_skywalker`, `obi_wan`, and `princess_leia` into the `millenium_falcon`.
> cd .. // mv rebellion/*.txt millenium_falcon/

* Move the `millenium_falcon` into the `death_star`.
> mv millenium_falcon empire/death_star

### Act III

* Unload the Millenium Falcon! Move the whole crew from the `millenium_falcon` directory into the `death_star` directory.
> mv death_star/millenium_falcon/*.txt death_star/

* `darth_vader` has defeated `obi_wan`! Delete poor `obi_wan`.
> rm obi_wan.txt

* Our heroes have disabled the tractor beam! Move the whole crew back into the `millenium_falcon`! Remember: `darth_vader` remains in the `death_star` and `emperor_palpatine` is still in the `empire`.
> mv {chewy,han_solo,luke_skywalker,princess_leila}.txt millenium_falcon/

* Move the `millenium_falcon` back into the `rebellion` directory.
> cd ../../.. // mv empire/death_star/millenium_falcon rebellion/

* `darth_vader` leaves the `death_star` to pursue Luke! Move him from the `death_star` into the `empire` directory!
> cd .. // mv empire/death_star/darth_vader.txt empire/

* Thanks to his practice back home at Beggar's Canyon, Luke blew up the `death_star`! Remove it from the galaxy!
> cd empire // rm -rf death_star

 :boom:

#### Act IV

Submit the HW following the directions in README.md :tada: