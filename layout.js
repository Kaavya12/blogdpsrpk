
		document.addEventListener('DOMContentLoaded', ()=> {

			document.querySelector('#page_1').style.display='none'
			document.querySelector('#all').style.display='none'
			document.querySelector('nav').style.display='none'
			document.querySelector('#footer').style.display='none'
			
			document.querySelectorAll('.cont').forEach(cont => {
				cont.style.display='none'
			})



			setTimeout(function(){
				document.querySelector('#nav_head').click()
				showSlides()
				document.querySelector('#start').animationPlayState = 'running'
				document.querySelector('#start').style.display='none'
				

				document.querySelector('#footer').style.display='block'
				document.querySelector('#page_1').style.display='block'
				document.querySelector('#all').style.display='block'
				document.querySelector('nav').style.display='block'

			}, 11000)

			document.querySelectorAll('.nav-item').forEach(a => {
				a.onclick = function(){
					id=this.dataset.id
					document.querySelector('#page_1').style.display = 'none'

					document.querySelectorAll('.cont').forEach(div => {
						if (div.id !== id){
							div.style.display= 'none';
						}else{
							div.style.display= 'block';
						}
					})

					console.log(id)
					anime.timeline()
						.add({
							targets: `#${id}`,
							scaleY: [0,1],
							opacity: [0,1],
							easing: "easeOutExpo",
							duration: 700
						})

					element = this
					document.querySelectorAll('.nav-item').forEach(a => {
						if (a === element){
							a.setAttribute('class', 'nav-item nav-link active')
							a.style.textDecoration = "underline"
						}else{
							a.setAttribute('class', 'nav-item nav-link')
							a.style.textDecoration = "none"
						}
					})

					document.querySelector('#nav_head').style.textDecoration = "none"
					return false
				}
			})	

			

			var slideIndex = 1
			var count = 0
			function showSlides(){
				document.querySelectorAll('.slides').forEach(slide => {

					if (slide.id !== `slide${slideIndex}`){
						slide.style.display= 'none';
					}else{
						slide.style.animationPlayState = 'running';
						slide.style.display= 'block';
					}
				})

				console.log(slideIndex)
				console.log(0.5*(window.innerWidth))
				if (count<10){
					if (slideIndex === 3){
						slideIndex = 1
						setTimeout(showSlides, 5000)
					}
					else{
						slideIndex += 1
						setTimeout(showSlides, 5000)
					}
				}



			}

			document.querySelectorAll('.images').forEach(image => {

				document.getElementById(`${image.id}`).style.width =`${window.innerWidth}px`
				console.log(window.innerWidth)
				console.log(document.getElementById(`${image.id}`).style.width)

			})

			document.querySelector('#nav_head').onclick = function(){
				console.log('clicked')
				document.querySelectorAll('.cont').forEach(cont => {
					cont.style.display= 'none';

				})
				document.querySelectorAll('.nav-item').forEach(a => {
					a.setAttribute('class', 'nav-item nav-link')
					a.style.textDecoration = "none"

				})

				document.querySelector('#nav_head').style.textDecoration = "underline"
				document.querySelector('#page_1').style.display = 'block'
			}

			//document.getElementById('nav_head').click()
			//showSlides()

			window.addEventListener("resize", () => {
				document.querySelectorAll('.images').forEach(image => {

				document.getElementById(`${image.id}`).style.width =`${window.innerWidth}px`
				console.log(window.innerWidth)
				console.log(document.getElementById(`${image.id}`).style.width)

			})
			});

			const colors = ['red','green','blue']

		})
		
		