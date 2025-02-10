(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [98],
  {
    93489: function (e, r, t) {
      Promise.resolve().then(t.t.bind(t, 81749, 23)),
        Promise.resolve().then(t.bind(t, 88349));
    },
    47907: function (e, r, t) {
      "use strict";
      var s = t(15313);
      t.o(s, "usePathname") &&
        t.d(r, {
          usePathname: function () {
            return s.usePathname;
          },
        }),
        t.o(s, "useRouter") &&
          t.d(r, {
            useRouter: function () {
              return s.useRouter;
            },
          });
    },
    88349: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return d;
          },
        });
      var s = t(57437),
        n = t(2265),
        a = t(47907),
        o = t(98793),
        i = t(70997),
        l = t(71399);
      function c() {
        let e = (0, a.useRouter)(),
          [r, t] = (0, n.useState)({ email: "", password: "", remember: !1 }),
          [c, d] = (0, n.useState)(""),
          u = (e) => {
            let { name: r, value: s, type: n, checked: a } = e.target;
            t((e) => ({ ...e, [r]: "checkbox" === n ? a : s }));
          };
        return (0, s.jsxs)("form", {
          onSubmit: (t) => {
            if (
              (t.preventDefault(),
              d(""),
              "Admin@123" === r.email || "UserVi@123" === r.email)
            ) {
              let t = (0, o.pH)(r.email, r.password);
              if (t.success) {
                r.remember && localStorage.setItem("rememberUser", "true");
                let s = "admin" === t.user.role ? "/Dashboard" : "/";
                e.push(s);
              } else d("Invalid password");
            } else d("Invalid email address");
          },
          children: [
            (0, s.jsxs)("div", {
              className: "mb-4",
              children: [
                (0, s.jsx)("label", {
                  htmlFor: "email",
                  className:
                    "mb-2.5 block font-medium text-dark dark:text-white",
                  children: "Username",
                }),
                (0, s.jsxs)("div", {
                  className: "relative",
                  children: [
                    (0, s.jsx)("input", {
                      type: "email",
                      placeholder: "Enter your Username",
                      name: "email",
                      value: r.email,
                      onChange: u,
                      className:
                        "w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary",
                    }),
                    (0, s.jsx)("span", {
                      className: "absolute right-4.5 top-1/2 -translate-y-1/2",
                      children: (0, s.jsx)(l.wzp, {}),
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "mb-5",
              children: [
                (0, s.jsx)("label", {
                  htmlFor: "password",
                  className:
                    "mb-2.5 block font-medium text-dark dark:text-white",
                  children: "Password",
                }),
                (0, s.jsxs)("div", {
                  className: "relative",
                  children: [
                    (0, s.jsx)("input", {
                      type: "password",
                      name: "password",
                      placeholder: "Enter your password",
                      value: r.password,
                      onChange: u,
                      autoComplete: "current-password",
                      className:
                        "w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary",
                    }),
                    (0, s.jsx)("span", {
                      className: "absolute right-4.5 top-1/2 -translate-y-1/2",
                      children: (0, s.jsx)(i.xuE, {}),
                    }),
                  ],
                }),
              ],
            }),
            c &&
              (0, s.jsx)("div", {
                className: "mb-4 text-red-500 text-sm text-center",
                children: c,
              }),
            (0, s.jsx)("div", {
              className: "mb-6 flex items-center justify-between gap-2 py-2",
              children: (0, s.jsxs)("label", {
                htmlFor: "remember",
                className:
                  "flex cursor-pointer select-none items-center font-satoshi text-base font-medium text-dark dark:text-white",
                children: [
                  (0, s.jsx)("input", {
                    type: "checkbox",
                    name: "remember",
                    id: "remember",
                    checked: r.remember,
                    onChange: u,
                    className: "peer sr-only",
                  }),
                  (0, s.jsx)("span", {
                    className:
                      "mr-2.5 inline-flex h-5.5 w-5.5 items-center justify-center rounded-md border border-stroke bg-white text-white text-opacity-0 peer-checked:border-primary peer-checked:bg-primary peer-checked:text-opacity-100 dark:border-stroke-dark dark:bg-white/5 ".concat(
                        r.remember ? "bg-primary" : ""
                      ),
                    children: (0, s.jsx)("svg", {
                      width: "10",
                      height: "7",
                      viewBox: "0 0 10 7",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M9.70692 0.292787C9.89439 0.480314 9.99971 0.734622 9.99971 0.999786C9.99971 1.26495 9.89439 1.51926 9.70692 1.70679L4.70692 6.70679C4.51939 6.89426 4.26508 6.99957 3.99992 6.99957C3.73475 6.99957 3.48045 6.89426 3.29292 6.70679L0.292919 3.70679C0.110761 3.51818 0.00996641 3.26558 0.0122448 3.00339C0.0145233 2.74119 0.119692 2.49038 0.3051 2.30497C0.490508 2.11956 0.741321 2.01439 1.00352 2.01211C1.26571 2.00983 1.51832 2.11063 1.70692 2.29279L3.99992 4.58579L8.29292 0.292787C8.48045 0.105316 8.73475 0 8.99992 0C9.26508 0 9.51939 0.105316 9.70692 0.292787Z",
                        fill: "currentColor",
                      }),
                    }),
                  }),
                  "Remember me",
                ],
              }),
            }),
            (0, s.jsxs)("div", {
              className: "mb-4.5",
              children: [
                (0, s.jsx)("button", {
                  type: "submit",
                  className:
                    "flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-orange-500 p-4 font-medium text-white transition hover:bg-opacity-90",
                  children: "Sign In",
                }),
                (0, s.jsx)("h1", {
                  className: "font-bold text-sm",
                  children: "**For Testing** ",
                }),
                (0, s.jsxs)("h2", {
                  className: "text-red",
                  children: [
                    (0, s.jsx)("span", {
                      className: "font-bold",
                      children: "Username:",
                    }),
                    "Admin@123",
                    (0, s.jsx)("span", {
                      className: "font-bold pl-3",
                      children: "Password:",
                    }),
                    " admin123 ",
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function d() {
        return (0, s.jsxs)("div", {
          className:
            "flex flex-col items-center justify-center   dark:bg-dark-2",
          children: [
            (0, s.jsxs)("div", {
              className: "w-full  p-6 bg-white rounded-lg  dark:bg-dark-3",
              children: [
                (0, s.jsxs)("div", {
                  className: "text-center mb-6",
                  children: [
                    (0, s.jsx)("h1", {
                      className: "text-2xl font-bold text-dark dark:text-white",
                      children: "Welcome Back!",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "mt-2 text-sm text-gray-600 dark:text-gray-400",
                      children: "Sign in to access your Dashboard",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "my-6 flex items-center justify-center",
                  children: [
                    (0, s.jsx)("span", {
                      className:
                        "block h-px w-full bg-gray-300 dark:bg-gray-600",
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "px-4 text-sm font-medium text-gray-500 bg-white dark:bg-dark-3",
                      children: "Sign in to Dashboard",
                    }),
                    (0, s.jsx)("span", {
                      className:
                        "block h-px w-full bg-gray-300 dark:bg-gray-600",
                    }),
                  ],
                }),
                (0, s.jsx)("div", { children: (0, s.jsx)(c, {}) }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "mt-8 text-sm text-gray-500 dark:text-gray-400",
              children: [
                "\xa9 ",
                new Date().getFullYear(),
                " MediGO AI Dashboard. All rights reserved.",
              ],
            }),
          ],
        });
      }
    },
    98793: function (e, r, t) {
      "use strict";
      t.d(r, {
        TX: function () {
          return i;
        },
        pH: function () {
          return o;
        },
        ts: function () {
          return a;
        },
        wt: function () {
          return n;
        },
      });
      let s = {
        "Admin@123": {
          password: "admin123",
          role: "admin",
          name: "Admin User",
        },
        "UserVi@123": {
          password: "user123",
          role: "user",
          name: "Regular User",
        },
      };
      function n() {
        return !!localStorage.getItem("user_session");
      }
      function a() {
        {
          let e = localStorage.getItem("user_session");
          try {
            return e ? JSON.parse(e) : null;
          } catch (e) {
            console.error("Error parsing user session:", e);
          }
        }
        return null;
      }
      function o(e, r) {
        try {
          let t = (function (e, r) {
            let t = s[e];
            if (t && t.password === r) {
              let { password: r, ...s } = t;
              return { ...s, username: e };
            }
            return null;
          })(e, r);
          if (t)
            return (
              localStorage.setItem("user_session", JSON.stringify(t)),
              { success: !0, user: t }
            );
          return { success: !1, error: "Invalid credentials" };
        } catch (e) {
          return {
            success: !1,
            error: "Login failed: ".concat(
              e instanceof Error ? e.message : "Unknown error"
            ),
          };
        }
      }
      function i() {
        try {
          localStorage.removeItem("user_session");
        } catch (e) {
          throw Error(
            "Logout failed: ".concat(
              e instanceof Error ? e.message : "Unknown error"
            )
          );
        }
      }
    },
    70158: function (e, r, t) {
      "use strict";
      t.d(r, {
        w_: function () {
          return d;
        },
      });
      var s = t(2265),
        n = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        a = s.createContext && s.createContext(n),
        o = ["attr", "size", "title"];
      function i() {
        return (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var s in t)
                  Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
              }
              return e;
            }).apply(this, arguments);
      }
      function l(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          r &&
            (s = s.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, s);
        }
        return t;
      }
      function c(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? l(Object(t), !0).forEach(function (r) {
                var s, n;
                (s = r),
                  (n = t[r]),
                  (s = (function (e) {
                    var r = (function (e, r) {
                      if ("object" != typeof e || !e) return e;
                      var t = e[Symbol.toPrimitive];
                      if (void 0 !== t) {
                        var s = t.call(e, r || "default");
                        if ("object" != typeof s) return s;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === r ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof r ? r : r + "";
                  })(s)) in e
                    ? Object.defineProperty(e, s, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[s] = n);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function d(e) {
        return (r) =>
          s.createElement(
            u,
            i({ attr: c({}, e.attr) }, r),
            (function e(r) {
              return (
                r &&
                r.map((r, t) =>
                  s.createElement(r.tag, c({ key: t }, r.attr), e(r.child))
                )
              );
            })(e.child)
          );
      }
      function u(e) {
        var r = (r) => {
          var t,
            { attr: n, size: a, title: l } = e,
            d = (function (e, r) {
              if (null == e) return {};
              var t,
                s,
                n = (function (e, r) {
                  if (null == e) return {};
                  var t = {};
                  for (var s in e)
                    if (Object.prototype.hasOwnProperty.call(e, s)) {
                      if (r.indexOf(s) >= 0) continue;
                      t[s] = e[s];
                    }
                  return t;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (s = 0; s < a.length; s++)
                  (t = a[s]),
                    !(r.indexOf(t) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, t) &&
                      (n[t] = e[t]);
              }
              return n;
            })(e, o),
            u = a || r.size || "1em";
          return (
            r.className && (t = r.className),
            e.className && (t = (t ? t + " " : "") + e.className),
            s.createElement(
              "svg",
              i(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                r.attr,
                n,
                d,
                {
                  className: t,
                  style: c(c({ color: e.color || r.color }, r.style), e.style),
                  height: u,
                  width: u,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              l && s.createElement("title", null, l),
              e.children
            )
          );
        };
        return void 0 !== a
          ? s.createElement(a.Consumer, null, (e) => r(e))
          : r(n);
      }
    },
  },
  function (e) {
    e.O(0, [699, 522, 749, 971, 69, 744], function () {
      return e((e.s = 93489));
    }),
      (_N_E = e.O());
  },
]);
