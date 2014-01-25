define(function(require, exports, module) {
  "use strict";

  var $ = require("jquery");
  var _ = require("underscore");
  var Backbone = require("backbone");
  var app = require("app");


var Story={
	introText:"I can't seem to find it. What did I do today?...",
	//makeCoolText:function(){
	//},

	storyLines: new Array(),
	dreamQuotes: new Array(),
	makeStoryElement:function(){
		var storyEl = document.createElement('div');
		storyEl.className="overlay_text";
		document.body.appendChild(storyEl);

		// not sure what to do with this...

		$(storyEl).text(story.storyLines[0].text);
        $(storyEl).fadeOut(4000);

        $(storyEl).text(story.storyLines[1].text);
        $(storyEl).fadeIn(4000);
	},
	makeTheStory:function(){
		this.storyLines[0] = {
			text:'I got out of bed. ',
			tag:'sometag'
		};
		
		this.storyLines[1] = {
			text:'For breakfast, I made myself a spinach and cheese omlete.',
			tag:'sometag'
		};
		
		this.storyLines[2] = {
			text:'I walked the dog.',
			tag:'sometag'
		};
		
		this.storyLines[3] = {
			text:'Then I went to get some coffee.',
			tag:'sometag'
		};

		// --------------------

		this.dreamQuotes[0] = "dreams were related to the world of the supernatural beings in whom they believed, and that they brought inspirations from the gods and demons.";

		this.dreamQuotes[1] = "dreams must serve a special purpose in respect of the dreamer; that, as a rule, they predicted the future.";

		this.dreamQuotes[2] = "the dream is not god-sent, that it is not of divine but of demonic origin.";

	}

}

module.exports=Story
});