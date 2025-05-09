import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    token: '',
  }),
  actions: {
    setUser(username: string, token: string) {
      this.username = username;
      this.token = token;
    },
  },
});
