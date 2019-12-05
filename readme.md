# NOTICE:

[CLICK THIS LINK AND DOWNLOAD THIS REPO. THE ONE YOU ARE VIEWING HAS BUILD ASSETS AND IS MUCH BIGGER THAN THE ONE IN THIS LINK.](https://github.com/Joey-Robinson/agf-dev)

# Usage & Install

First, clone or download the repository. Once you've done that, you can run the command:

```
npm install
```

To install all the required dependencies.

Once you've done that, you have a few options. In your terminal, you can run one of the following scripts:

```
npm start
```

Which will start the project as you would expect, though the way this was setup, running that command usually implies you'll be working more with the JavaScript than the CSS.

Should this command break, you can run another command in a different terminal window to force updates. That command is:

```
npm run build
```

The next command you can run is the following:

```
npm run cssStart
```

When you run this command, your (S)CSS will (usually) be live updated as you save your files. Sometimes, it can break. If that happens, you should run the following command in a different terminal window:

```
npm run build:css
```

This will compile everything into your dist/ folder and a simple refresh should have everything working. Note: If it _actually_ breaks, you'll need to keep running the above command until you completely restart the server.

## Tools

- webpack
- babel
- npm scripts
- scss
  - postcss

## Commentary

### (S)CSS Usage

First, I want to say I was incredibly heavy-handed with my styling here. I could have absolutely accomplished the same in much less code with better usage of SCSS.

I overused several rules and didn't fully utilize what I and CSS are capable of.

If I had to redo everything, I'd approach the entire styling portion of this differently. I'd let the cascade happen and not try to force things into place so aggressively.

Additionally, I'd separate everything into different files (components). I didn't do that here because I felt that the SCSS file would be small enough, but it's a bit large for my liking.

### HTML

For the HTML, I tried to be as semantic as I could while trying to make the project as accurate as I could.

If I were to redo the HTML, I'd probably have better spacing inside of the file for better readability.

Additionally, I'm a huge supporter of accessibility, but I didn't make this as accessible as I could. I'm not saying I regret doing that, but for something like this I think it's ok to not do so.

### JavaScript

Similar to the SCSS, I think I may have been a bit heavy-handed here. I knew what I wanted to do, but _actually_ making it work the way I wanted was harder than I expected.

While there's not a lot of JavaScript there (less than 100 lines), I feel like someone more experienced could have done it in much less code. A majority of the time I spent on this was inside of index.js trying to make things work as I wanted them to.

I chose to use ES6 here because I enjoy using new features. Before I cleaned the file up, I had quite a large sampling of ES6 features.

If I had to do it over again, I'd try to refactor what I could to make it concise. Not to say I'm unhappy with what I wrote, but I do feel that I could have done better.

I'd also break everything down into different components. I'm a stickler for modular code, even in Vanilla projects. So I'd start by doing this before anything else if given a chance to repeat myself.

### Known Bugs

The only bug I found during my own QA was something related to the JavaScript that I wasn't able to fix, despite trying for several hours. When you click one of the buttons without the inputs checked, the proper message appear and everything works as it should. But, if you click the inputs after that, you're still given an alert message if you try to submit.

Given enough time I could figure this out, but for some reason I just couldn't get it to work in time.

### Mobile Friendly

I didn't make it responsive for tablets, as that wasn't asked of me or required. I did make it response for phones, however.

### Overall

I enjoyed doing this. I haven't actually written any code in about a month, and it actually showed me that I can't really afford to slack off like that.

The frustration of not being able to have something work as you want it to work and then the happiness after you finally do get it to work is something I've missed quite a bit.
