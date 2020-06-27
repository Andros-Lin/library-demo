import Vue from "vue";
import { Button } from "element-ui";
import ElementLocale from "element-ui/lib/locale";
import i18n from "@/plugins/i18n";

Vue.use(Button);

Object.defineProperties(Vue.prototype, {
  $ELEMENT: {
    value: { size: "small" }
  }
});

ElementLocale.i18n((key, value) => i18n.t(key, value));
