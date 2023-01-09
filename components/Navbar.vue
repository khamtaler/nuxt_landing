<template>
	<header class="header">
		<button
			type="button"
			class="button button__open"
			@click="(e) => e.target.parentNode.parentNode.classList.toggle('menu__mobile')"
		>
			<img class="button__openIcon" src="../assets/images/Hamburger_icon.svg" />
		</button>
		<button
			type="button"
			class="button button__close"
			@click="(e) => e.target.parentNode.parentNode.classList.toggle('menu__mobile')"
		>
			<img class="button__closeIcon" src="../assets/images/close-icon.svg" />
		</button>

		<NuxtLink class="header__logoLink" to="/"
			><img class="header__logoImage" src="../assets/images/logo.png"
		/></NuxtLink>

		<Menu />
		<button type="button" class="button button__registerButton">Register</button>
	</header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	align-items: center;
	// justify-content: space-between;
	max-width: 1460px;
	height: 159px;
	background: #111111;
	margin: auto;
	border: none;
}
.button__registerButton {
	width: 150px;
	height: 51px;
	margin-left: auto;
	font-size: 19px;
	background: rgba(255, 255, 255, 0.1);
	color: #fff;
	border-radius: 31px;
	border: none;
}
.button__open,
.button__close {
	display: none;
}
@media only screen and (max-width: 1460px) {
	.header {
		max-width: 1200px;
	}
}

@media only screen and (max-width: 1240px) {
	.header {
		max-width: 1000px;
		width: 90%;
		justify-content: space-between;

		&__logoLink {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	.button__open {
		display: flex;
		background: transparent;
		filter: invert(100%) sepia(0%) saturate(7398%) hue-rotate(163deg) brightness(122%)
			contrast(114%);
		border: none;
		&:hover {
			cursor: pointer;
		}
	}
	.menu__mobile {
		.button__open {
			display: none;
		}
		.button__close {
			display: block;
			position: absolute;
			z-index: 999999999;
			color: #fff;
			background: transparent;
			border: none;
			filter: invert(100%) sepia(0%) saturate(7398%) hue-rotate(163deg) brightness(122%)
				contrast(114%);
			border: none;

			&:hover {
				cursor: pointer;
			}
		}
		.button__closeIcon {
			width: 32px;
			height: 32px;
		}
	}
}
@media only screen and (max-width: 600px) {
	.header__logoImage {
		width: 90px;
	}
	.button__registerButton {
		width: 100px;
		height: 42px;
		font-size: 16px;
	}
}
</style>
