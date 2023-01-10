<template>
	<nav class="menu">
		<ul class="menu__menuList">
			<li class="menu__menuItem">
				<NuxtLink class="menu__menuLink" to="/">Projects</NuxtLink>
			</li>
			<li class="menu__menuItem">
				<NuxtLink class="menu__menuLink" to="/">Partners</NuxtLink>
			</li>
			<li class="menu__menuItem"><NuxtLink class="menu__menuLink" to="/">FAQ</NuxtLink></li>
			<li class="menu__menuItem">
				<NuxtLink class="menu__menuLink" to="/">Masters</NuxtLink>
			</li>
			<li class="menu__menuItem">
				<NuxtLink class="menu__menuLink" to="/">Classes</NuxtLink>
			</li>
			<li class="menu__menuItem">
				<NuxtLink class="menu__menuLink" to="/">Course experience</NuxtLink>
			</li>
			<li class="menu__menuItem">
				<NuxtLink class="menu__menuLink" to="/">About us</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu {
	margin-left: 50px;
	&__menuList {
		display: flex;
		align-items: center;
		gap: 60px;
	}
	&__menuItem {
		list-style: none;
	}
	&__menuLink {
		text-decoration: none;
		color: #fff;
		font-size: 18px;
	}
}

@media only screen and (max-width: 1460px) {
	.menu {
		&__menuList {
			gap: 40px;
		}
	}
}
@media only screen and (max-width: 1240px) {
	.menu {
		display: none;
		&__menuList {
			width: 100%;
			flex-direction: column;
			background: #111;
			gap: 20px;
		}
		&__menuItem {
			padding: 10px;
		}
	}
	.menu__mobile {
		.menu {
			display: flex;
			width: 100%;
		}
		.menu__menuItem:last-child {
			padding-bottom: 50px;
		}
	}
}
</style>
