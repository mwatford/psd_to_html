export const toggleNav = {
  methods: {
    toggleNav() {
      eventBus.$emit('toggleNav');
    }
  }
};
