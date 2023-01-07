<template>
	<header class="header">
		<button class="open" @click="(e) => e.target.parentNode.parentNode.classList.toggle('mobile')">
			<img src="../assets/images/Hamburger_icon.svg" />
		</button>
		<button @click="(e) => e.target.parentNode.parentNode.classList.toggle('mobile')" class="close">
			<img src="../assets/images/close-icon.svg" />
		</button>
		<nav class="navigation">
			<ul>
				<li>
					<NuxtLink to="/"><img src="../assets/images/logo.png" /></NuxtLink>
				</li>
				<li><NuxtLink to="/">Projects</NuxtLink></li>
				<li><NuxtLink to="/">Partners</NuxtLink></li>
				<li><NuxtLink to="/">FAQ</NuxtLink></li>
				<li><NuxtLink to="/">Masters</NuxtLink></li>
				<li><NuxtLink to="/">Classes</NuxtLink></li>
				<li><NuxtLink to="/">Course experience</NuxtLink></li>
				<li><NuxtLink to="/">About us</NuxtLink></li>
			</ul>
		</nav>
		<button class="registerButton">Register</button>
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
	.open,
	.close {
		display: none;
	}
	.navigation {
		ul {
			display: flex;
			align-items: center;
			gap: 60px;
			li {
				list-style: none;
			}
			a {
				text-decoration: none;
				color: #fff;
				font-size: 18px;
			}
		}
	}
	.registerButton {
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

@media only screen and (max-width: 1200px) {
	.header {
		max-width: 1000px;
		width: 90%;
		justify-content: space-between;
		.open {
			display: flex;
			background: transparent;
			filter: invert(100%) sepia(0%) saturate(7398%) hue-rotate(163deg) brightness(122%)
				contrast(114%);
			border: none;
			&:hover {
				cursor: pointer;
			}
		}

		.navigation {
			display: none;
			ul {
				width: 100%;
				flex-direction: column;
				position: absolute;
				z-index: 999999;
				background: black;
				top: 0px;
				left: 0;
				gap: 20px;

				li {
					padding: 10px;
				}
			}
		}
		.registerButton {
			justify-self: right;
		}
	}
	.header.mobile {
		.navigation {
			display: flex;
			li:last-child {
				padding-bottom: 50px;
			}
		}
		.close {
			display: block;
			position: absolute;
			z-index: 999999999;
			color: #fff;
			background: transparent;
			border: none;
			filter: invert(100%) sepia(0%) saturate(7398%) hue-rotate(163deg) brightness(122%)
				contrast(114%);
			border: none;
			img {
				width: 32px;
				height: 32px;
			}
			&:hover {
				cursor: pointer;
			}
		}
	}
}
</style>
