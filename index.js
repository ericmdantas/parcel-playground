import './index.css'
import Vue from 'vue/dist/vue'

new Vue({
	el: '#app',
	data() {
		return {
			msg: ':|'
		}
	},
	template: `
		<div>
			<h1>{{msg}}</h1>
		</div>
	`,
	mounted() {
		setTimeout(() => {
			this.msg = ":D"
		}, 2000)		
	}
})