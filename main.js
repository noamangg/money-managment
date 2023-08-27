import { axios } from "@pipedream/platform";
export default defineComponent({
  props: {
    api: {
      type: "app",
      app: "ticktick",
    },
  },
  async run({ steps, $ }) {
    return await axios($, {
      method: "GET",
      url: `https://api.ticktick.com/v1/info`,
      headers: {
        Authorization: `Bearer ${this.api.$auth.oauth_access_token}`,
      },
    });
  },
});

