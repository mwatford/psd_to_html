<template>
<nav>
	<div class="navbar">
		<div id="title" class="navbar__title">marble</div>
		<div class="navbar__menu">
			<div class="navbar__menuDropButton">MENU</div>
			<div class="navbar__menuItems">
				<router-link 
					v-for="(item, index) in menu" :key="index"
					:to="item.path" exact
				>
					{{ item.value }}
				</router-link>
			</div>
		</div>
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
	@media (max-width: 40em) {
		display: block;
		background-color: #e5e5e5;
		width: 25vw;
		// height: 10vw;
		border-bottom: 1px solid #4e4e4e;
		justify-content: end;
	}
	padding: 0 5px;
	text-decoration: none;
	color: inherit;
	display: inline-block;

	&:hover {
		color: #1abb9c;
		cursor: pointer;
	}
}
a.router-link-exact-active {
	text-decoration: none;
	color: #1abb9c;
}
nav {
	@media (max-width: 40em) {
		position: sticky;
		top: 0;
		left: 0;
	}

	width: 100%;
}
.navbar {
	height: 100px;
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 215fr repeat(3, 390fr) 215fr;
	align-items: center;
	text-transform: uppercase;
	font-family: 'Oswald', sans-serif;

	&__menuDropButton {
		@media (max-width: 40em) {
			display: flex;
			align-self: end;
		}

		height: 100%;
		display: none;
		width: 15%;
		font-weight: 600;
		align-items: center;
	}

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
	}
	&__menuItems {
		@media (max-width: 40em) {
			display:none;
			position: absolute;
			grid-column: 5;
			bottom: 0;
			// border: 1px solid #4e4e4e;
			z-index: 1;
		}
		align-items: center;
		display: flex;
		justify-content: flex-end;
		font-weight: 600;
		height: 100%;

		&>div {
			display: inline-block;
			background-color: green;
		}

	}
	&__menu {
		@media (max-width: 40em) {
			&:hover .navbar__menuItems {
				display: block;
				position: absolute;
				// bottom: 0;
				top: 100px;
				
			}
		}
		grid-column: 3 / span 2;
		display: flex;
		justify-content: end;
		height: 100%;
	}
}
</style>

