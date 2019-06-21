## Github-Readme-Viewer
A demo project showing how to use the GitHub api with React in order to display a readme file

<br/><br/>
## How to use
1. Either fork or clone the repo
2. Realize that we are working with the RAW files here, not the GitHub HPI
3. On GitHub, browse to your README.md (or whatever else file you want as root), and copy the path
4. In your react component of choice (App.js), add the GithubContextProvider and the MarkdownBrowser components.
5. Update the `root` and `rootFile` props with the URL you got in step 3:
```jsx
<GithubContextProvider root="https://raw.githubusercontent.com/<user>/<repo>/<branch>" rootFile="/README.md">
  <MarkdownBrowser />
</GithubContextProvider>
```

### Important Notes:
1. Note that the backslash is left in front of README.md - and not on the root url!
2. Links are beeing rendered as buttons. Use CSS to change their look
3. External links (to somewhere outside the repo) is currently not supported

<br/><br/>
### A Shout-out goes to..
- Espen Hovlandsdal for his work on [react-markdown](https://github.com/rexxars/react-markdown)

