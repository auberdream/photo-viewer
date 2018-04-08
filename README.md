<div align="center">
  <img src="/images/title.png" />
</div>
<br>

<div align="center">
<a href="#how-to-use">How to Use</a> ||
<a href="#tech">Tech</a> ||
<a href="#user-stories">User Stories</a> ||
<a href="#approach">Approach</a> ||
<a href="#areas-for-development">Areas for Development</a> ||
<a href="#future-features">Future Features</a>
</div>

---
### What is it?
---

This app is designed so the user can interact with the interface to explore a photo-collection. They can also navigate back and forth within the entire collection, shuffle to see a random photo, and search for a specific photo by tag or name.

<div style="width: 700px; display: block; margin-left: auto; margin-right: auto;">
  <img src="/images/app-screenshot.png"/>
</div>


### How to Use
---

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
---
- React (create-react-app)
- Enzyme for testing

### User Stories
---

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
---

<div style="width: 700px; display: block; margin-left: auto; margin-right: auto;">
  <img src="/images/diagramming.jpg" />
</div>
<br>

I started by diagramming the app and pulling out the components, such as Slideshow, Buttons etc. Before this test, I've only ever made a to-do-list in React, so I took my time here to make sure I was certain on my direction. I also wrote out what I expected to be the parent/child relationship from these components. This gave me a really good foundation to start from.

However, the first thing I did was add some entries to Images so I had something to work with. I wasn't certain whether I could automate this process or not; I looked into writing my own programme to convert the txt file into JSON, but figured I'd have to put in the URLs manually anyway. In the end, I used [ObjGen](http://www.objgen.com/json?demo=true) to make it quicker to write.

As I'm so new to React, one of the problems I had was knowing the best class to store the id of the current slide. I initially had the Slide store this as state (currentSlide), but changed it to its parent; ImageSlideshow. I did this because I knew I would eventually need to change the id of the current slide from the search bar.

The rest of the app went relatively smoothly after I taught myself how to change the state of the parent element from an event on a child! Now I know how to do this, I could extract a lot of the logic from ImageSlideshow into a button class.

### Areas for development
---

- If I'd had more time, I'd really like to do some research into integration testing. At the moment, the current tests in Enzyme and Jest simply check that the components are rendering correctly rather than testing the outcomes of the methods. I've been looking into [Nightwatch](http://nightwatchjs.org/), which seems to be a popular (but difficult to install) option.
- I'd like to look into ways to make this code more scalable/commercially viable. I think by continuing to write react apps I'll get a feel for best practices.
- Transitions. I went into this project hoping to make the photos, and their descriptions, fade in and out smoothly as the user clicks for the next photo. Unfortunately, I ran out of time, but I'm going to look into [ReactCSSTransitionGroup](https://reactjs.org/docs/animation.html).
- The user currently has to delete the text in the search bar to remove the search results. I'd like to make it so that when they click a photo, or click anywhere else on the screen, the search results disappear.
- Having a shuffle image rather than having an 'S' for shuffle.
- Having images for the '<' and '>' buttons rather than text. I think this would help smooth the current transition on hover.
- The date of the photo could be reformatted.

### Future Functionality
---

- I think it would increase the user experience if there was a way to see a thumbnail of all the photos, pick one, and have that rendered on the main slideshow.
- It would benefit from having a way to view the image without the search bar, buttons, or photo information. Maybe by clicking on the image, it renders it above the current view in the same way clicking an image in the [google drive files](https://drive.google.com/drive/folders/10VXYEqRdMa8TZOfVimDpuqHxKpwyP4kC) renders.
- Letting the user upload their own images (would require a database).
