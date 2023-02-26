import { defineComponent as w, openBlock as S, createElementBlock as D, pushScopeId as T, popScopeId as V, createElementVNode as u } from "vue";
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const O = () => {
}, R = Object.assign, b = Array.isArray, q = (t) => typeof t == "function";
let x;
function z(t, e = x) {
  e && e.active && e.effects.push(t);
}
const _ = (t) => {
  const e = new Set(t);
  return e.w = 0, e.n = 0, e;
}, N = (t) => (t.w & c) > 0, k = (t) => (t.n & c) > 0, j = ({ deps: t }) => {
  if (t.length)
    for (let e = 0; e < t.length; e++)
      t[e].w |= c;
}, A = (t) => {
  const { deps: e } = t;
  if (e.length) {
    let s = 0;
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      N(i) && !k(i) ? i.delete(t) : e[s++] = i, i.w &= ~c, i.n &= ~c;
    }
    e.length = s;
  }
};
let a = 0, c = 1;
const h = 30;
let o;
Symbol(process.env.NODE_ENV !== "production" ? "iterate" : "");
Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class B {
  constructor(e, s = null, n) {
    this.fn = e, this.scheduler = s, this.active = !0, this.deps = [], this.parent = void 0, z(this, n);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = o, s = f;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent;
    }
    try {
      return this.parent = o, o = this, f = !0, c = 1 << ++a, a <= h ? j(this) : v(this), this.fn();
    } finally {
      a <= h && A(this), c = 1 << --a, o = this.parent, f = s, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    o === this ? this.deferStop = !0 : this.active && (v(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function v(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let s = 0; s < e.length; s++)
      e[s].delete(t);
    e.length = 0;
  }
}
let f = !0;
function y(t, e) {
  let s = !1;
  a <= h ? k(t) || (t.n |= c, s = !N(t)) : s = !t.has(o), s && (t.add(o), o.deps.push(t), process.env.NODE_ENV !== "production" && o.onTrack && o.onTrack(Object.assign({ effect: o }, e)));
}
function E(t, e) {
  const s = b(t) ? t : [...t];
  for (const n of s)
    n.computed && g(n, e);
  for (const n of s)
    n.computed || g(n, e);
}
function g(t, e) {
  (t !== o || t.allowRecurse) && (process.env.NODE_ENV !== "production" && t.onTrigger && t.onTrigger(R({ effect: t }, e)), t.scheduler ? t.scheduler() : t.run());
}
function p(t) {
  const e = t && t.__v_raw;
  return e ? p(e) : t;
}
function I(t) {
  f && o && (t = p(t), process.env.NODE_ENV !== "production" ? y(t.dep || (t.dep = _()), {
    target: t,
    type: "get",
    key: "value"
  }) : y(t.dep || (t.dep = _())));
}
function M(t, e) {
  t = p(t);
  const s = t.dep;
  s && (process.env.NODE_ENV !== "production" ? E(s, {
    target: t,
    type: "set",
    key: "value",
    newValue: e
  }) : E(s));
}
var m;
class P {
  constructor(e, s, n, i) {
    this._setter = s, this.dep = void 0, this.__v_isRef = !0, this[m] = !1, this._dirty = !0, this.effect = new B(e, () => {
      this._dirty || (this._dirty = !0, M(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = n;
  }
  get value() {
    const e = p(this);
    return I(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
m = "__v_isReadonly";
function C(t, e, s = !1) {
  let n, i;
  const l = q(t);
  l ? (n = t, i = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : O) : (n = t.get, i = t.set);
  const r = new P(n, i, l || !i, s);
  return process.env.NODE_ENV !== "production" && e && !s && (r.effect.onTrack = e.onTrack, r.effect.onTrigger = e.onTrigger), r;
}
const d = (t) => (T("data-v-b02636ef"), t = t(), V(), t), F = { class: "pit-loader" }, G = /* @__PURE__ */ d(() => /* @__PURE__ */ u("div", { class: "pit-square" }, null, -1)), W = /* @__PURE__ */ d(() => /* @__PURE__ */ u("div", { class: "pit-square" }, null, -1)), $ = /* @__PURE__ */ d(() => /* @__PURE__ */ u("div", { class: "pit-square" }, null, -1)), H = /* @__PURE__ */ d(() => /* @__PURE__ */ u("div", { class: "pit-square" }, null, -1)), J = [
  G,
  W,
  $,
  H
], K = /* @__PURE__ */ w({
  __name: "PitSpinner",
  props: {
    color: { type: String },
    size: { type: Number },
    duration: { type: String }
  },
  setup(t) {
    const e = t;
    return C(() => {
      const s = e.size || 100, n = s / 4, i = s * 2 + n, l = e.color || "#E9AE24", r = e.duration || "3s";
      return {
        "--primary": l,
        "--square": s,
        "--gap": n,
        "--canvas": i,
        "--animation-duration": r
      };
    }), (s, n) => (S(), D("div", F, J));
  }
});
const L = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [n, i] of e)
    s[n] = i;
  return s;
}, Q = /* @__PURE__ */ L(K, [["__scopeId", "data-v-b02636ef"]]), X = {
  install: (t) => {
    t.component("PitSpinner", Q);
  }
};
export {
  Q as PitSpinner,
  X as default
};
