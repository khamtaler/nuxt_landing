@import '../assets/scss/variables.scss'

<template>
	<header class="header">
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
	}
}
</style>
