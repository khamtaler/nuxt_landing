<template>
	<header class="header">
		<button
			type="button"
			class="header__button header__buttonOpen"
			@click="(e) => e.target.parentNode.parentNode.classList.toggle('menu__mobile')"
		>
			<img class="header__openIcon" src="../assets/images/Hamburger_icon.svg" />
		</button>
		<button
			type="button"
			class="header__button header__buttonClose"
			@click="(e) => e.target.parentNode.parentNode.classList.toggle('menu__mobile')"
		>
			<img class="header__closeIcon" src="../assets/images/close-icon.svg" />
		</button>
		<Menu />
		<button type="button" class="header__registerButton">Register</button>
	</header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1460px;
	height: 159px;
	background: #111111;
	margin: auto;
	border: none;
	&__buttonOpen,
	&__buttonClose {
		display: none;
	}

	&__registerButton {
		width: 150px;
		height: 51px;
		font-size: 19px;
		background: rgba(255, 255, 255, 0.1);
		color: #fff;
		border-radius: 31px;
		border: none;
	}
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

		&__buttonOpen {
			display: flex;
			background: transparent;
			filter: invert(100%) sepia(0%) saturate(7398%) hue-rotate(163deg) brightness(122%)
				contrast(114%);
			border: none;
			&:hover {
				cursor: pointer;
			}
		}
		&__registerButton {
			justify-self: right;
		}
		&__closeIcon {
			width: 32px;
			height: 32px;
		}
	}
	.menu__mobile {
		.header__buttonClose {
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
	}
}
</style>
