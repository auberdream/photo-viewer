<img src="/images/title.png" style="width: 350px; display: block; margin-left: auto; margin-right: auto; "/>

<p align="center">[How to Use](#How-do-I-use-it?) || [Tech](#Tech) || [User Stories](#User-Stories) || [Approach](#Approach) || [Areas for Development](#Areas-for-development)</p>

### What is it?

This app is designed so the user can interact with the interface to explore a photo-collection. They can also navigate back and forth within the entire collection, shuffle to see a random photo, and search for a specific photo by tag or name.

<img src="/images/app-screenshot.png" style="width: 700px; display: block; margin-left: auto; margin-right: auto; "/>


### How do I use it?

```
> git clone { this repo }
> cd elliewem-tech-test
> npm install
> npm start

-- to run tests --
> npm test

```

- Flick through the photos with the '<' and '>' buttons.
- 'S' stands for shuffle, which will return a random photo
- Type a tag or photographer's name in the search bar to show up to three matching photos. Click the search result to bring the photo into the main view.

### Tech
- React (create-react-app)
- Enzyme for testing

### User Stories

```
As a user
So I can acknowledge the beauty of this world
I would like to see a photo on the screen

As a user
So I can learn more about the photo
I want to see the date it was taken, the photographer's name, and its tags

As a user
So I can view the collection
I would like to press buttons to scroll back and forth through the photos

As a user
So I am kept informed about the current photo
I would like the photo details to change as a new photo is rendered

(Extra)
As a user
So I can be entertained by an unexpected photo
I would like a button to show a random photo

As a user
So I can find a particular photo
I would like to be able to search by the photographer's name or the photo's tags

As a user
So I can use the app with ease
I would like it to be styled in a way that facilitates my usage
```

### Approach

<img src="/images/diagramming.jpg" style="width: 700px; display: block; margin-left: auto; margin-right: auto;" />

I started by diagramming the app and pulling out the components, such as Slideshow, Buttons etc. Before this test, I've only ever made a to-do-list in React, so I took my time here to make sure I was certain on my direction. I also wrote out what I expected to be the parent/child relationship from these components. This gave me a really good foundation to start from.

However, the first thing I did was add some entries to Images.json so I had something to work with. I wasn't certain whether I could automate this process or not; I looked into writing my own programme to convert the txt file into JSON, but figured I'd have to put in the URLs manually anyway. In the end, I used [ObjGen](http://www.objgen.com/json?demo=true) to make it quicker to write.

### Areas for development

- I'd really like to do some research into doing integration testing. At the moment, the current tests in Enzyme and Jest simply check that the components are rendering correctly rather than testing the outcomes of the methods. I've been looking into [Nightwatch](http://nightwatchjs.org/), which seems to be a good (but difficult to install) option.
