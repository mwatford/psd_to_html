<template>
<nav>
	<div class="navbar">
		<div id="title" class="navbar__title">marble</div>
		<ul class="navbar__menu">
			<li v-for="item in menu">
				<router-link :to="item.path" exact>{{ item.value }}</router-link>
			</li>
		</ul>
	</div>
</nav>
</template>

<script>
export default {
	data() {
		return {
			menu: [
				{ value: 'home', path: '/' },
				{	value: 'about', path: '/about' },
				{ value: 'journal', path: '/journal' },
				{ value: 'service', path: '/service' },
				{ value: 'features', path: '/#'},
				{ value: 'contact', path: '/#'}
			]
		}
	}

}
</script>

<style lang="scss">
a {
	margin: 0;
	padding: 0;
	text-decoration: none;
	color: inherit;

	&:hover {
		color: #1abb9c;
		cursor: pointer;
	}
}
a.router-link-exact-active {
	padding: 0;
	text-decoration: none;
	color: #1abb9c;
}
.navbar {
	min-height: 100px;
	max-height: 120px;
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 215fr repeat(3, 390fr) 215fr;
	align-items: center;
	text-transform: uppercase;
	font-family: 'Oswald', sans-serif;

	&__title {
		grid-column: 2;
		font-weight: 600;
		font-size: 28px;
		margin: 0 auto 0 0;

		&:hover {
			transition: none;
			color: #1abb9c;
			cursor: pointer;
		}

		&--bigRed {
			@extend .navbar__title;
			color: red;
			font-size: 35px;
			transform: rotateZ(360deg);
			transition-duration: 2s;
			transition-timing-function: ease-in;
			transition-property: transform font-size color;
		}

	}
	&__menu {
		grid-column: 3 / span 2;
		padding: 0;
		margin: auto 0 auto auto;
		list-style-type: none;

		& li {
			font-weight: 600;
			display: inline;
			padding: 0 0 0 1.8vw;
			// padding: none;
		}
	}
}
</style>

