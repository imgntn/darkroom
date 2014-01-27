define(function(require, exports, module) {
		"use strict";

		var $ = require("jquery");
		var _ = require("underscore");
		var Backbone = require("backbone");
		var app = require("app");


		var Story = {
			introText: "I can't seem to find it. What did I do today?...",
			//makeCoolText:function(){
			//},

			storyLines: new Array(),
			dreamQuotes: new Array(),


			makeStoryElement: function(currentLocation) {
		console.log('marking story el')
		var storyEl = document.createElement('div');
		var storyHolder=document.createElement('div');
		storyHolder.id="storyholder_"+currentLocation;
		storyHolder.className="storyholder story";
		storyEl.id="story_"+currentLocation;
		storyEl.className = "overlay_text story";
		storyHolder.appendChild(storyEl);
		document.body.appendChild(storyHolder);
				var delay = 3; //seconds

				function loop(roomState, delay) {

					// we need a global variable 

					var scrollText;

					switch (roomState) {
						case 0:
							scrollText = new Array();
							Story.storyLines.forEach(function(entry) {
								scrollText.push(entry.text);
							});
							break;
						case 1:
							scrollText = Story.dreamQuotes[1];
							break;
						case 2:
							scrollText = Story.dreamQuotes[2];
							break;
						case 3:
							scrollText = Story.dreamQuotes[3];
							break;
						case 4:
							scrollText = Story.dreamQuotes[4];
							break;
						case 5:
							scrollText = Story.dreamQuotes[5];
							break;
						default:
							scrollText = null;
					}

					$.each(scrollText, function(i, elm) {
						$(storyEl).delay(delay * 1E3).fadeOut();
						$(storyEl).queue(function() {
							$(storyEl).html(scrollText[i]);
							$(storyEl).dequeue();
						});

						$(storyEl).fadeIn();
						$(storyEl).queue(function() {
							if (i == scrollText.length - 1) {
								loop(roomState, delay);
							}
							$(storyEl).dequeue();
						});
					});
				}

				loop(currentLocation, delay);
			},
			makeTheStory: function() {

		

				this.storyLines[0] = {
					text: 'I got out of bed. ',
					tag: 'sometag'
				};

				this.storyLines[1] = {
					text: 'For breakfast, I made myself a spinach and cheese omelette.',
					tag: 'sometag'
				};

				this.storyLines[2] = {
					text: 'I walked the dog.',
					tag: 'sometag'
				};

				this.storyLines[3] = {
					text: 'Then I went to get some coffee.',
					tag: 'sometag'
				};

				this.storyLines[4] = {
					text: 'Then I went to get some coffee.',
					tag: 'sometag'
				};

				this.storyLines[5] = {
					text: 'Then I went to get some coffee...',
					tag: 'sometag'
				};

				this.storyLines[6] = {
					text: 'I can’t find it.',
					tag: 'sometag'
				};

				this.storyLines[7] = {
					text: 'I need it.',
					tag: 'sometag'
				};

				this.storyLines[8] = {
					text: 'Where is it?',
					tag: 'sometag'
				};

				this.storyLines[9] = {
					text: 'I just had it.',
					tag: 'sometag'
				};

				this.storyLines[10] = {
					text: 'Who am I?',
					tag: 'sometag'
				};

				this.storyLines[11] = {
					text: 'Where is my ID?',
					tag: 'sometag'
				};

				this.storyLines[12] = {
					text: 'My driver’s license number – no, it’s just, wait – D32… 432…. 530… 4145..',
					tag: 'sometag'
				};

				this.storyLines[13] = {
					text: 'Social security license, no social safety number is 623-53…54…51…wait, hold on, what is it…614-32..',
					tag: 'sometag'
				};

				this.storyLines[14] = {
					text: 'My mother’s maiden name?',
					tag: 'sometag'
				};

				this.storyLines[15] = {
					text: 'My first pet? Rufus.. no Rudolph, Rudy, no, yes, Ruby?',
					tag: 'sometag'
				};
				this.storyLines[16] = {
					text: 'The street where I grew up?',
					tag: 'sometag'
				};

				this.storyLines[17] = {
					text: 'I forgot my username.  My name.  My mother’s maiden name.  My brother’s middle name.  Maternal grandmother’s maiden name.  My name.',
					tag: 'sometag'
				};

				this.storyLines[18] = {
					text: 'Certificates of naturalization, birth abroad, probate document… I don’t know.  Where is it?  My wallet? With all my cards and identification all the things to prove I was who I am and am who I are and I don’t know…',
					tag: 'sometag'
				};


				// --------------------

				this.dreamQuotes[0] = ["dreams were related to the world of the supernatural beings in whom they believed, and that they brought inspirations from the gods and demons.",
					"dreams must serve a special purpose in respect of the dreamer; that, as a rule, they predicted the future.",
					"the dream is not god-sent, that it is not of divine but of demonic origin.",
					"on the whole the peculiarities of the dream can only be described as a series of contrasts which apparently amount to contradictions",
					"We may observe how the memory of a dream which in the morning was still vivid fades in the course of the day, leaving only a few trifling remnants.",
					"the dream-structure rises, as it were, from the soil of our psychic life, and floats in psychic space like a cloud in the sky."
				];

				this.dreamQuotes[1] = ["A house was on fire.",
					"My father stood beside my bed and woke me up.",
					"I dressed quickly.",
					"Mother wanted to stop and save her jewel-case;",
					'but father said: "I refuse to let myself and my children be burnt for the sake of your jewel-case."',
					"We hurried downstairs, and as soon as I was outside I woke up."
				];

				this.dreamQuotes[2] = ["I was walking about in a town which I did not know.",
					"I saw streets and squares which were strange to me.",
					"Then I came into a house where I lived, went to my room, and found a letter from Mother lying there.",
					"She wrote saying that as I had left town without my parents' knowledge she had not wished to write to me saying that Father was ill.",
					"Now he is dead, and if you like you can come.",
					'I then went to the station and asked about a hundred times: "Where is the station?"',
					'I always got the answer: "Five minutes."',
					"I then saw a thick wood before me which I went into, and there I asked a man whom I met.",
					'He said to me: "Two and a half hours more."',
					"He offered to accompany me. But I refused and went alone.",
					"I saw the station in front of me and could not reach it.",
					"At the same time I had the usual feeling that one has in dreams when one cannot move forward.",
					"Then I was at home.",
					"I must have been traveling in the meantime, but I know nothing about that.",
					"I walked into the porter's lodge, and inquired for our flat.",
					"The maidservant opened the door to me and replied that Mother and the others were already at the cemetery."
				];

				this.dreamQuotes[3] = ["A large hall - numerous guests.",
					"I at once took her to one side, as though to answer her letter and to reproach her for not having accepted my 'solution' yet.",
					"The syringe was infectious.",
					"I said to her: 'If you still get pains, it's really only your fault.'",
					"She replies: 'If you only knew what pains I've got now in my throat and stomach and abdomen - it's choking me.'",
					"The syringe transmitted it.",
					"I saw extensive whitish grey scabs upon some remarkably curly structures in her mouth.",
					"Dr. M said: 'There's no doubt it's an infection, but no matter; dysentery will supervene and the toxin will be eliminated.'",
					"The syringe was dirty.",
					"Otto had given her an injection of a preparation of propyl, propyls ... propionic acid ... trimethylamin… trimethylamin",
					"Injections of this sort ought not to be given so thoughtlessly.",
					"The syringe had not been clean."
				];

				this.dreamQuotes[4] = ["The courtyard of my house covered with snow, and found there two little lizards, half-frozen and buried in the snow.",
					"In the upper portion of a clarinet, or the mouthpiece of a tobacco-pipe, or, again, a piece of fur.",
					"Being a lover of animals I picked them up, warmed them, and put them back into the hole in the wall which was reserved especially for them.",
					"In a very narrow, slippery and soft hole, leading through the courtyard, I obliged to walk, in order to carry a letter to a man.",
					"I gave them a few fronds of a little fern that was growing on the wall: Asplenium ruta muralis.",
					"I saw two other little lizards falling upon what was left of the ferns.",
					"I turned my eyes to the open fields and saw a fifth and a sixth lizard making for the soft, secret hole in the wall, and finally the whole road was covered by a procession of lizards, all of them, wandering in the same direction."
				];

				this.dreamQuotes[5] = ["This isn’t a battle with inner demons, this is a truce with who I am.",
					"I too am unstranslatable.",
					"I too am not tamed.",
					"My demons are me.",
					"My pyromania is nothing more than my love of flame – the infernos of need and desire and hope and fury that blaze within.",
					"My kleptomania is nothing more than my love of things -- my unending greed, my insatiable hunger for the beauty of the world to contain it within me,",
					"to hold it all so that it bloats my body and I become pregnant with all the world offers me and all I strain to contain.",
					"I want things.",
					"I need them.",
					"I want to hold the coins, the computers, the children,",
					"the trees and the facial hair and the Picassos and Freud’s dry bones all in my wet mouth and chew and chew and chew and swallow it whole into my body.",
					"Then I own it all.",
					"Then I have it all.",
					"I am large.",
					"I am LARGE.",
					"I contain multitudes.",
					"I contain MULTITUDES.",
					"My narcolepsy is nothing more than my love of solitude – my mind retreating into the tangles of its hell,",
					"caressing the corners of terror and silence and the peace of ignorance.",
					"Give me solitude.",
					"Give me nature.",
					"Give me detonations of quiet.",
					"Give me, o Nature, your primal silences.",
					"My voyeurism is nothing more than my love of looking – the gaze which takes in it all, the fresh corn and wheat,",
					"the passions and pageants, the powerful throbs of people moving and pushing and moving and pushing and singing and sleeping and singing and sleeping.",
					"My perversions.",
					"My gaze are eyes forever.",
					"My eyes do more than look but take in, absorb like a waterless sponge, suck it into myself.",
					"Glut me.",
					"I rubberneck.  I pervert.  I am more than a witness or a watcher.",
					"I am all I see.  In all, I see myself.  I see.  In all, I see myself.",
					"Glut me.  Enrich my soul.  Flood me. Fill me up.",
					"I too am unstranslatable.  I too am not tamed.",
					"The darkroom is the development of my mind.  The interpretation of my dreams.",
					"Things in themselves are dull and dreary; I am large.  I contain multitudes.",
					"To see things as I am; to see things as we are.  That is where the beauty of madness and perversion and disturbance makes me who I am, makes us human.",
					"Glut me.  Fill me up.  With beauty and madness and fury and sound.",
					"The mind can’t be classified as healthy or diseased.",
					"My mind is diseased.",
					"My mind is disordered.",
					"But, most of all, my mind is mine.",
					"I celebrate myself.  My whole body -- every disorder and disease and disturbance all together in whole together – celebrates myself."
				];

		}

	}

	module.exports = Story
});