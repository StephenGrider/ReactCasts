(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/app.jsx":[function(require,module,exports){
var options = {
  thumbnailData:  [{
    title: 'Show Courses',
    number: 12,
    header: 'Learn React',
    description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
    imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
  },{
    title: 'Show Courses',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
    imageUrl: 'http://brunch.io/images/others/gulp.png'
  }]
};

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));


},{}]},{},["./src/app.jsx"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc3RlcGhlbmdyaWRlci9Eb2N1bWVudHMvcHJvamVjdHMvdHV0b3JpYWxzL3RodW1ibmFpbC1ndWxwL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBSSxPQUFPLEdBQUc7RUFDWixhQUFhLEdBQUcsQ0FBQztJQUNmLEtBQUssRUFBRSxjQUFjO0lBQ3JCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsTUFBTSxFQUFFLGFBQWE7SUFDckIsV0FBVyxFQUFFLHlJQUF5STtJQUN0SixRQUFRLEVBQUUsdUZBQXVGO0dBQ2xHLENBQUM7SUFDQSxLQUFLLEVBQUUsY0FBYztJQUNyQixNQUFNLEVBQUUsRUFBRTtJQUNWLE1BQU0sRUFBRSxZQUFZO0lBQ3BCLFdBQVcsRUFBRSw2SUFBNkk7SUFDMUosUUFBUSxFQUFFLHlDQUF5QztHQUNwRCxDQUFDO0FBQ0osQ0FBQyxDQUFDOztBQUVGLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzFELEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgb3B0aW9ucyA9IHtcbiAgdGh1bWJuYWlsRGF0YTogIFt7XG4gICAgdGl0bGU6ICdTaG93IENvdXJzZXMnLFxuICAgIG51bWJlcjogMTIsXG4gICAgaGVhZGVyOiAnTGVhcm4gUmVhY3QnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVhY3QgaXMgYSBmYW50YXN0aWMgbmV3IGZyb250IGVuZCBsaWJyYXJ5IGZvciByZW5kZXJpbmcgd2ViIHBhZ2VzLiBSZWFjdCBpcyBhIGZhbnRhc3RpYyBuZXcgZnJvbnQgZW5kIGxpYnJhcnkgZm9yIHJlbmRlcmluZyB3ZWIgcGFnZXMuJyxcbiAgICBpbWFnZVVybDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS93aWtpL2ZhY2Vib29rL3JlYWN0L3JlYWN0LWxvZ28tMTAwMC10cmFuc3BhcmVudC5wbmcnXG4gIH0se1xuICAgIHRpdGxlOiAnU2hvdyBDb3Vyc2VzJyxcbiAgICBudW1iZXI6IDI1LFxuICAgIGhlYWRlcjogJ0xlYXJuIEd1bHAnLFxuICAgIGRlc2NyaXB0aW9uOiAnR3VscCB3aWxsIHNwZWVkIHVwIHlvdXIgZGV2ZWxvcG1lbnQgd29ya2Zsb3cuICBHdWxwIHdpbGwgc3BlZWQgdXAgeW91ciBkZXZlbG9wbWVudCB3b3JrZmxvdy4gIEd1bHAgd2lsbCBzcGVlZCB1cCB5b3VyIGRldmVsb3BtZW50IHdvcmtmbG93LicsXG4gICAgaW1hZ2VVcmw6ICdodHRwOi8vYnJ1bmNoLmlvL2ltYWdlcy9vdGhlcnMvZ3VscC5wbmcnXG4gIH1dXG59O1xuXG52YXIgZWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGh1bWJuYWlsTGlzdCwgb3B0aW9ucyk7XG5SZWFjdC5yZW5kZXIoZWxlbWVudCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpKTtcbiJdfQ==
