<template>
	<div>
		<ul class="tabsNav">
			<li class="tabsNav__tab" v-for="(tab, index) in tabList" :key="index">
				<input
					:id="`${index}`"
					type="radio"
					:name="`${index}-tab`"
					:value="index + 1"
					v-model="activeTab"
				/>
				<label :for="`${index}`" v-text="tab" />
			</li>
		</ul>

		<template v-for="(tab, index) in tabList">
			<div :key="index" v-if="index + 1 === activeTab">
				<slot :name="`tabPanel-${index + 1}`" />
			</div>
		</template>
	</div>
</template>

<script>
export default {
	props: {
		tabList: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			activeTab: 1,
		};
	},
};
</script>

<style lang="scss" scoped>
.tabsNav {
	display: flex;

	&__tab {
		font-size: 19px;
		line-height: 26px;
		list-style: none;

		border-top: 1px solid #000000;
		border-right: 1px solid #000000;
		border-bottom: 1px solid #000000;
		label {
			display: inline-block;
			height: 100%;
			padding: 15px 79px 19px;
			text-align: center;
		}
		:checked ~ label {
			background: #000;
			color: #fff;
		}
		:hover {
			cursor: pointer;
		}
	}
	&__tab:first-child {
		border: 1px solid #000000;
		border-radius: 16px 0px 0px 16px;
	}
	&__tab:first-child label {
		border-radius: 16px 0px 0px 16px;
	}
	&__tab:last-child {
		border-radius: 0px 16px 16px 0px;
	}
	&__tab:last-child label {
		border-radius: 0px 16px 16px 0px;
	}

	&__tab input {
		display: none;
	}
}
@media only screen and (max-width: 1200px) {
	.tabsNav {
		&__tab {
			label {
				text-align: center;
			}
		}
	}
}
@media only screen and (max-width: 1000px) {
	.tabsNav {
		&__tab {
			label {
				padding: 20px;
			}
		}
	}
}
@media only screen and (max-width: 768px) {
	.tabsNav {
		width: 90%;
	}
}

@media only screen and (max-width: 500px) {
	.tabsNav {
		&__tab {
			font-size: 15px;
			line-height: 17px;
			label {
				padding: 15px;
			}
		}
	}
}
</style>
