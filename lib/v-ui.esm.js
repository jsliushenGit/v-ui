var t = {
    render: function () {
      var t = this.$createElement,
        e = this._self._c || t;
      return e("button", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple:[ripple]",
          arg: this.ripple
        }],
        staticClass: "v-button",
        class: this.buttonClass,
        attrs: {
          type: "button"
        },
        on: {
          click: this.handleClick
        }
      }, [e("span", [this._t("default")], 2), this._v(" "), this.ripple ? e("span", {
        staticClass: "waves-animation"
      }) : this._e()])
    },
    staticRenderFns: [],
    name: "VButton",
    components: {},
    props: {
      type: {
        type: String,
        default: "default"
      },
      size: {
        type: String,
        default: "medium"
      },
      ripple: {
        type: Boolean,
        default: !1
      },
      disabled: {
        type: Boolean,
        default: !1
      }
    },
    methods: {
      handleClick() {
        this.$emit("click")
      }
    },
    computed: {
      buttonClass() {
        return [{
          medium: "medium",
          small: "small",
          mini: "mini"
        } [this.size] || "medium", {
          default: "default",
          primary: "primary",
          success: "success",
          warning: "warning",
          danger: "danger",
          info: "info",
          text: "text"
        } [this.type] || "default", {
          ripple: this.ripple,
          disabled: this.disabled
        }]
      }
    },
    directives: {
      ripple: {
        bind(t, {
          arg: e
        }) {
          if (!e) return !1;
          t.addEventListener("click", (function (e) {
            var i = t.getElementsByClassName("waves-animation")[0];
            i.style.left = e.offsetX - i.clientWidth / 2 + "px", i.style.top = e.offsetY - i.clientHeight / 2 + "px"
          }))
        }
      }
    },
    install: function (e) {
      e.component(t.name, t)
    }
  },
  e = {
    render: function () {
      var t = this.$createElement;
      return (this._self._c || t)("span", {
        staticClass: "v-tag",
        class: this.tagClass
      }, [this._t("default")], 2)
    },
    staticRenderFns: [],
    name: "VTag",
    components: {},
    props: {
      type: {
        type: String,
        default: "primary"
      },
      size: {
        type: String,
        default: "medium"
      }
    },
    computed: {
      tagClass() {
        return [{
          medium: "medium",
          small: "small",
          mini: "mini"
        } [this.size] || "medium", {
          primary: "primary",
          success: "success",
          warning: "warning",
          danger: "danger",
          info: "info",
          text: "text"
        } [this.type] || "primary"]
      }
    },
    install: function (t) {
      t.component(e.name, e)
    }
  },
  i = [t, e],
  n = {
    install: function (t) {
      i.map((function (e) {
        return t.component(e.name, e)
      }))
    }
  };
export default n;
export {
  t as Button, e as Tag
};