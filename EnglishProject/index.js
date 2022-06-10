class BulmaModal {
	constructor(selector) {
		this.elem = document.querySelector(selector)
		this.close_data()
    }
	show() {
		this.elem.classList.toggle('is-active')
		this.on_show()
	}
	close() {
		this.elem.classList.toggle('is-active')
		this.on_close()
	}
	close_data() {
		var modalClose = this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background")
		var that = this
		modalClose.forEach(function(e) {
			e.addEventListener("click", function() {
				if (that.elem.id == "timelineModal") {
    				const timelinebtn = document.querySelector("#timelinebtn")
					const hoembtn = document.querySelector("#homebtn")
					hoembtn.classList.toggle('is-active')
					timelinebtn.classList.toggle('is-active')
				}
				that.elem.classList.toggle('is-active')
				var event = new Event('modal:close')
				that.elem.dispatchEvent(event);
			})
		})
	}
	on_show() {
		var event = new Event('modal:show')
		this.elem.dispatchEvent(event);
	}
	on_close() {
		var event = new Event('modal:close')
		this.elem.dispatchEvent(event);
	}
	addEventListener = (event, callback) => this.elem.addEventListener(event, callback)
}

document.addEventListener('DOMContentLoaded', () => {
	const infbtn = document.querySelector("#infobtn")
    const infmdl = new BulmaModal("#infoModal")

    infbtn.addEventListener("click", function () {
        infmdl.show()
    })

    const loginbtn = document.querySelector("#loginbtn")
    const loginmdl = new BulmaModal("#loginModal")

    loginbtn.addEventListener("click", function () {
        loginmdl.show()
    })


    const timelinebtn = document.querySelector("#timelinebtn")
    const timelinemdl = new BulmaModal("#timelineModal")

	const hoembtn = document.querySelector("#homebtn")

    timelinebtn.addEventListener("click", function () {
        hoembtn.classList.toggle('is-active')
		timelinebtn.classList.toggle('is-active')
		timelinemdl.show()
    })

	// here will be the users
	const users = [{
		user: "@Prince",
		name: "Prince Escalus"
		//ID: 0
	}, {
		user: "@Lord_Capulet",
		name: "Lord Capulet"
		//ID: 1
	}, {
		user: "@Paris",
		name: "Count Paris"
		//ID: 2
	}, {
		user: "@TybaltC",
		name: "Tybalt Capulet"
		//ID: 3
	}, {
		user: "@Mercutio",
		name: "Mercutio"
		//ID: 4
	}, {
		user: "@Montague",
		name: "Montague"
		//ID: 5
	}, {
		user: "@Friar_Lawrence",
		name: "Friar Lawrence"
		//ID: 6
	}, {
		user: "@F_John",
		name: "Friar John"
		//ID: 7
	}, {
		user: "@Romeo",
		name: "Romeo Montague"
		//ID: 8
	}, {
		user: "@Juliet",
		name: "Juliet Capulet"
		//ID: 9
	}];

	// Example post object just for reference
	const post = {
		user_id: Number, // Based on the index (From 0 to the (length of users - 1))
		content: String, // The message content
		date: String, // Date formatted in string
		type: 0 || 1, // 0 and 1, 0 being just a user post, 1 being a divider with an explanation, used for explaining the timeline
	}
	const posts = [{
		user_id: -1,
		content: "Montague & Capulet servants engage in a riot.",
		date: "Sunday",
		type: 1
	}, {
		user_id: 0,
		content: "Every rebel and enemy to peace who start a riot again will be punished. It's been 3 times already that riots have broken out in Verona, all because of your rivalry <a>@Montague</a> and <a>@Lord_Capulet</a>. I demand for you both to stop disturbing the peace. <a>#riot</a> <a>#fight</a>",
		date: "Sunday",
		type: 0
	}, {
		user_id: -1,
		content: "Capulet hosts a party, and Paris is invited, and also the Montague family joins the party without revealing themselves",
		date: "Sunday",
		type: 1
	}, {
		user_id: 8,
		content: "I love someone, but she doesn't love me. She refuses to be hit by Cupid's arrow, and wont listen to the words of love that she's given. <a>#love</a>",
		date: "Sunday",
		type: 0
	}, {
		user_id: 1,
		content: "This night, I will hold a traditional feast for <a>@Paris</a>, and others to take part in at the Capulet House. <a>#feast</a> <a>#party</a>",
		date: "Sunday",
		type: 0
	}, {
		user_id: 8,
		content: "Today I've met someone at a party. Oh she shows the torches how to burn bright! She stood out like a riched jewel in an Ethiope's ear. She's too beautiful to die in this world. I can't believe my eyes when I saw true beauty before tonight! <a>#love</a> <a>#party</a> <a>#beauty</a>",
		date: "Sunday",
		type: 0
	}, {
		user_id: 3,
		content: "I cannot believe that a Montague, that man <a>@Romeo</a> came into this party and scorn our celebration, they came in to mock our celebration which is unbelievable! <a>#montague</a> <a>#party</a>",
		date: "Sunday",
		type: 0
	}, {
		user_id: -1,
		content: "Romeo secretly goes to the Capulet's home, where the famous balcony scene happens",
		date: "Sunday/Monday",
		type: 1
	}, {
		user_id: 9,
		content: "What's in a name? We call a rose by a rose, but if we call it by any other name would smell as sweet as one.",
		date: "Sunday/Monday",
		type: 0
	}, {
		user_id: -1,
		content: "Romeo asks Friar Lawrence of he and Juliet can be married, and he agrees and they're both secretly married",
		date: "Monday",
		type: 1
	}, {
		user_id: 8,
		content: "I proposed to the girl I love and she accepted! I've asked a Friar and they agreed to perform a marriage ceremony! <a>#marriage</a> <a>#love</a>",
		date: "Monday",
		type: 0
	}, {
		user_id: -1,
		content: "Romeo encounters Tybalt as he is being confronted",
		date: "Monday",
		type: 1
	}, {
		user_id: 3,
		content: "<a>@Romeo</a> is acting cowardly for no reason, despite him being the villain and wreaking havoc on the Capulets and to me!",
		date: "Monday",
		type: 0
	}, {
		user_id: 4,  //147
		content: "<a>@Romeo</a> & <a>@TybaltC</a> A plague to both of your houses! To both of your families! I'm done for, and for that, curse both of your families! <a>#aCUT</a> <a>#plague</a> <a>#curse</a> <a>#dead</a>",
		date: "Monday",
		type: 0
	}, {
		user_id: 8,  //147
		content: "I've done something terrible, I'm fortune's fool <a>#unlucky</a> <a>#revene</a>",
		date: "Monday",
		type: 0
	}, {
		user_id: -1,
		content: "Romeo is banished",
		date: "Monday",
		type: 1
	}, {
		user_id: 0,
		content: "Because of the murder of <a>@TybaltC</a>, <a>@Romeo</a> is hereby EXILED from Verona, and because of your bloody feud <a>@Montague</a> and <a>@Lord_Capulet</a>, my relative <a>@Mercutio</a> is dead! <a>#banishment</a> <a>#death</a>",
		date: "Monday",
		type: 0
	}, {
		user_id: 8,  //147
		content: "My best friend died, and I've been exiled. This fate is worse than death. <a>#exiled</a>",
		date: "Monday",
		type: 0
	}, {
		user_id: -1,
		content: "Juliet is being forced to be married to Paris",
		date: "Tuesday",
		type: 1
	}, {
		user_id: 1,
		content: "The unfortunate death of <a>@TybaltC</a> has made my daughter <a>@Juliet</a> weep all night. As to resolve this, she and <a>@Paris</a> will be wed! <a>#marriage</a>",
		date: "Tuesday",
		type: 0
	}, {
		user_id: 2,
		content: "Me and <a>@Juliet</a> will have a marriage on Thursday! <a>#wedding</a> <a>#marriage</a>",
		date: "Tuesday",
		type: 0
	}, {
		user_id: -1,
		content: "Juliet is found to be \"dead\"",
		date: "Wednesday",
		type: 1
	}, {
		user_id: 1,
		content: "This is outragous! Everything was going perfectly well at setting up the wedding for my daugter, now death has taken her. The wedding will be turned into a funeral. <a>#grief</a> <a>#death</a> <a>#funeral</a>",
		date: "Wednesday",
		type: 0
	}, {
		user_id: 7,
		content: "I am currently in quaruntine trying to deliver a letter, I'm unsure if I will be able to deliver it on time. <a>#quaruntine</a> <a>#mantua</a>",
		date: "Wednesday",
		type: 0
	}, {
		user_id: -1,
		content: "The Death of Romeo, Juliet, and Paris is found.",
		date: "Thursday",
		type: 1
	}, {
		user_id: 6,
		content: "Unfortunately, I am guilty in the situation where <a>@Paris</a>, <a>@Romeo</a>, and <a>@Juliet</a> are dead. I've explained the whole story to <a>@Prince</a>, though I still will be placed under suspicion.",
		date: "Thursday",
		type: 0
	}, {
		user_id: 0,
		content: "<a>@Lord_Capulet<a> and <a>@Montague</a> now do you see what your great rivalry and hatred has brought upon both families? Everyone has perished because of it, and because of your feud, my relatives had died because of it!",
		date: "Thursday",
		type: 0
	}, {
		user_id: -1,
		content: "Montague and Capulet both agree to create statues honoring both Romeo and Juliet.",
		date: "Thursday",
		type: 1
	}, {
		user_id: 0,
		content: "The agreement of both parties has brought peace. Some while some may be pardoned or punished. There was a story never filled with pain and sadness, than Romeo and Juliet.",
		date: "Thursday",
		type: 0
	}, ]

	const usersMenu = document.getElementById("users")
	if (!usersMenu) throw alert("Something went wrong.")
	users.forEach(user => {
		//https://bulma.io/documentation/layout/media-object/
		const li = document.createElement("li");
		const a = document.createElement("a");
		a.classList.add("has-text-link");
		const iconFigure = document.createElement("figure")
		const icon = document.createElement("img");
		icon.src = `./imgs/${user.user.substring(1)}.jpg`;
		icon.classList.add("is-rounded");
		iconFigure.classList.add("image", "is-32x32");
		iconFigure.appendChild(icon)
		const p = document.createElement("b");
		p.innerText = ` ${user.user}`;

		const span = document.createElement("span")
		span.classList.add("icon")
		span.appendChild(iconFigure);
		a.appendChild(span);
		a.appendChild(p)
		li.appendChild(a);
		a.classList.add("columns", "is-flex", "is-vcentered")
		usersMenu.appendChild(li);
	})

	const section = document.getElementById("section");

	posts.forEach(post => {
		if (post.type == 0) { // actual post
			const user = users[post.user_id];
			/*
<div class="card">
						<div class="card-content">
							<div class="media">
								<div class="media-left">
									<figure class="image is-48x48">
										<img src="https://bulma.io/images/placeholders/96x96.png"
											alt="Placeholder image">
									</figure>
								</div>
								<div class="media-content">
									<p class="title is-4">John Smith</p>
									<p class="subtitle is-6">@johnsmith</p>
								</div>
							</div>

							<div class="content">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Phasellus nec iaculis mauris. <a>@bulmaio</a>.
								<a href="#">#css</a> <a href="#">#responsive</a>
								<br>
								<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
							</div>
						</div>
					</div>
			*/
			const card = document.createElement("div");
			card.classList.add("card");
			const cardContent = document.createElement("div");
			cardContent.classList.add("card-content");
			const userDiv = document.createElement("div");
			userDiv.classList.add("media");
			userDiv.innerHTML = `<div class="media-left">
					<figure class="image is-48x48">
						<img src="./imgs/${user.user.substring(1)}.jpg"
						alt="Placeholder image" class="is-rounded">
					</figure>
				</div>
				<div class="media-content">
				<p class="title is-4">${user.name}</p>
				<p class="subtitle is-6">${user.user}</p>
			</div>
			`;
			const contentDiv = document.createElement("div");
			contentDiv.classList.add("content");
			contentDiv.innerHTML = `${post.content}<br><i>> ${post.date}</i>`;
			cardContent.appendChild(userDiv);
			cardContent.appendChild(contentDiv);
			card.appendChild(cardContent);
			section.appendChild(card);
		} else { // global thing
			const title = document.createElement("h3");
			title.classList.add("title", "is-4", "has-text-centered")
			title.innerHTML = post.content;
			const subtitle = document.createElement("h2");
			subtitle.classList.add("subtitle", "is-6", "has-text-centered");
			subtitle.innerHTML = post.date;
			//<p class="subtitle is-6">@johnsmith</p
			title.id = `event-${posts.indexOf(post)}`
			section.appendChild(title);
			section.appendChild(subtitle);
			
		}
		section.appendChild(document.createElement("br"));
	});

	// for timeline modal
	const timelineContent = document.getElementById("timeline");
	posts.filter(x => x.type == 1).forEach(post => {
		//<a href="#e" aria-label="close" data-bulma-modal="close" class="button is-medium is-fullwidth">Medium</a>
		timelineContent.innerHTML += `<a href="#event-${posts.indexOf(post)}" aria-label="close" data-bulma-modal="close" class="button is-medium is-fullwidth">
			<span class="has-text-left" style="max-width: 100%;">${post.content}</span>
		</a>`
	})

});