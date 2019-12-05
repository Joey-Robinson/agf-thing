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

## Commentary

### (S)CSS Usage

First, I want to say I was incredibly heavy-handed with my styling here. I could have absolutely accomplished the same in much less code with better usage of SCSS.

I overused several rules and didn't fully utilize what I and CSS are capable of.
