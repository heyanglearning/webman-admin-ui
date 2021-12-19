<!-- views/newPage.vue -->

<template>
	<h2>{{ userId }}</h2>
	<h3>{{ userName }}</h3>
</template>

<script>
	export default {
		name: 'newPage',
		data() {
			return {
				userId: "",
				userName: ""
			}
		},
		mounted() {
			this.getInfo()
		},
		methods: {
			async getInfo(){
                console.log(this.$API);
				var res = await this.$API.user.userInfo.get()
                console.log(res);
				this.userId = res.data.userId
				this.userName = res.data.userName
			}
		}
	}
</script>