// @/api/model/user.js

import config from "@/config"
import http from "@/utils/request"

export default {
	userInfo: {
		url: `${config.MOCK_URL}/userInfo`,
		name: "获取当前用户信息",
		get: async function(){
			return await http.get(this.url)
		}
	}
}