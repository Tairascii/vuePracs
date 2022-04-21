app.component("product-details", {
  props: {
    arr: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `<ul>
    <li v-for="detail in arr">{{ detail }}</li>
  </ul>`,
});
