# Next.js website rewrite

Over the summer, the team at Paly Python has been hard at work rewriting and redesigning the website yet again, this time with the Next.js React framework. We've also completely redesigned the style and feel of our website to be more user-friendly and also to allow more functionality to be added in the future. Additionally, behind the scenes, the database has been migrated over to SQLite, a more scalable database format that will allow for faster querying and data saving.

# Problems with the old website

The previous version of our website had a much different design than our current style. Our basic component was the card: all of our content was organized in cards at various positions on the page. While being easy to style and easy to manage, the card system restricted our creativity by limiting what kind of content we could create. Any additional sections had to fit inside cards to match the style of the rest of the website. Also, the UI was not very user-friendly with lots of content all crammed on one screen.

From a technical standpoint, our website had some major flaws. The database connection often had issues since our websocket api was not up to par, and also our file-based database system experienced lag when saving massive amounts of data to a single file. The frontend was also very bloated with lots of unnecessary features and had some issues with cookies and session management.

# Our new approach

Instead of using cards everywhere, we decided to adopt a more free-flowing website layout. There aren't any structure constraints the content has to fit inside and also we spaced out the content more to make the page look more clean. Our new site's mobile responsiveness has also greatly improved; less crowded content can fit smaller screens better. And internally, our code is much cleaner and is more efficient than the old website.