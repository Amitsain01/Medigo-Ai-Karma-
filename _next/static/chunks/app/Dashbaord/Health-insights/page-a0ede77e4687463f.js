(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [181],
  {
    89252: function (e, a, s) {
      Promise.resolve().then(s.bind(s, 5985)),
        Promise.resolve().then(s.bind(s, 97370));
    },
    5985: function (e, a, s) {
      "use strict";
      s.r(a);
      var t = s(57437),
        r = s(2265),
        l = s(55211),
        n = s(69475),
        i = s(79580),
        d = s(10632),
        c = s(62985),
        o = s(18046),
        m = s(26587),
        x = s(71362),
        g = s(38333),
        h = s(23356),
        u = s(22983),
        j = s(10166),
        b = s(98061);
      a.default = () => {
        let [e, a] = (0, r.useState)([]),
          [s, p] = (0, r.useState)(!1),
          k = (0, r.useRef)(null),
          N = () => [
            { timestamp: "6:00", heartRate: 68, glucoseLevel: 85 },
            { timestamp: "8:00", heartRate: 72, glucoseLevel: 95 },
            { timestamp: "10:00", heartRate: 85, glucoseLevel: 120 },
            { timestamp: "12:00", heartRate: 78, glucoseLevel: 105 },
            { timestamp: "14:00", heartRate: 82, glucoseLevel: 110 },
            { timestamp: "16:00", heartRate: 75, glucoseLevel: 98 },
            { timestamp: "18:00", heartRate: 70, glucoseLevel: 92 },
          ],
          y = (e) => {
            let a = [],
              s = e[e.length - 1];
            return (
              s.glucoseLevel > 110 &&
                a.push(
                  "Consider monitoring carbohydrate intake and increasing physical activity"
                ),
              s.heartRate > 80 &&
                a.push(
                  "Practice relaxation techniques to maintain optimal heart rate"
                ),
              s.glucoseLevel < 90 &&
                a.push("Ensure regular, balanced meals throughout the day"),
              a.length ? a : ["All metrics are within normal ranges"]
            );
          },
          v = async (s) => {
            p(!0),
              setTimeout(() => {
                let t = N();
                a([
                  ...e,
                  {
                    fileUrl: URL.createObjectURL(s),
                    fileName: s.name,
                    analysisResult:
                      "Analysis complete - Report processed successfully",
                    keyFindings: [
                      "Normal heart rate variability",
                      "Glucose levels showing minor fluctuations",
                      "Overall vital signs within healthy range",
                    ],
                    metrics: t,
                    suggestions: y(t),
                  },
                ]),
                  p(!1);
              }, 2e3);
          };
        return (0, t.jsx)("div", {
          className:
            "min-h-screen p-8 bg-white dark:bg-gray-900 text-black dark:text-white",
          children: (0, t.jsxs)("div", {
            className: "max-w-6xl mx-auto",
            children: [
              (0, t.jsxs)("h1", {
                className:
                  "text-3xl font-bold mb-8 text-orange-800 dark:text-orange-400 flex items-center",
                children: [
                  (0, t.jsx)(l.Z, {
                    className: "mr-4 text-orange-600 dark:text-orange-400",
                  }),
                  "Health Metrics Dashboard",
                ],
              }),
              (0, t.jsxs)("div", {
                className:
                  "bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8",
                children: [
                  (0, t.jsxs)("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [
                      (0, t.jsx)("h3", {
                        className:
                          "text-xl font-semibold text-orange-800 dark:text-orange-400",
                        children: "Medical Reports",
                      }),
                      (0, t.jsx)(n.Z, {
                        className: "text-orange-500 dark:text-orange-400",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "border-2 border-dashed rounded-xl p-6 text-center",
                    children: [
                      (0, t.jsx)("input", {
                        type: "file",
                        ref: k,
                        accept: ".pdf,.doc,.docx,.jpg,.png",
                        className: "hidden",
                        onChange: (e) => e.target.files && v(e.target.files[0]),
                      }),
                      (0, t.jsxs)("button", {
                        onClick: () => {
                          var e;
                          return null === (e = k.current) || void 0 === e
                            ? void 0
                            : e.click();
                        },
                        className:
                          "flex flex-col items-center w-full text-gray-700 dark:text-gray-200",
                        disabled: s,
                        children: [
                          s
                            ? (0, t.jsx)(i.Z, {
                                className:
                                  "w-16 h-16 text-orange-600 dark:text-orange-400 mb-4 animate-spin",
                              })
                            : (0, t.jsx)(d.Z, {
                                className:
                                  "w-16 h-16 text-orange-600 dark:text-orange-400 mb-4",
                              }),
                          (0, t.jsx)("p", {
                            className: "font-medium mb-2",
                            children: s
                              ? "Analyzing Report..."
                              : "Upload Medical Report",
                          }),
                          (0, t.jsx)("span", {
                            className:
                              "text-sm text-gray-500 dark:text-gray-400",
                            children: s ? "Please wait" : "PDF, DOC, Image",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.length > 0 &&
                (0, t.jsxs)("div", {
                  className:
                    "bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6",
                  children: [
                    (0, t.jsx)("h3", {
                      className:
                        "text-xl font-semibold text-orange-800 dark:text-orange-400 mb-6",
                      children: "Analysis Results",
                    }),
                    (0, t.jsx)("div", {
                      className: "space-y-8",
                      children: e.map((e, a) => {
                        var s, r;
                        return (0, t.jsxs)(
                          "div",
                          {
                            className: "space-y-6",
                            children: [
                              (0, t.jsx)("div", {
                                className:
                                  "bg-orange-50 dark:bg-gray-700 p-4 rounded-lg",
                                children: (0, t.jsxs)("div", {
                                  className: "flex items-center",
                                  children: [
                                    (0, t.jsx)(n.Z, {
                                      className:
                                        "mr-3 text-orange-600 dark:text-orange-400",
                                    }),
                                    (0, t.jsxs)("div", {
                                      children: [
                                        (0, t.jsx)("p", {
                                          className:
                                            "font-bold dark:text-white",
                                          children: e.fileName,
                                        }),
                                        (0, t.jsx)("p", {
                                          className:
                                            "text-gray-600 dark:text-gray-300 mt-1",
                                          children: e.analysisResult,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, t.jsxs)("div", {
                                className: "grid md:grid-cols-2 gap-6",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className:
                                      "bg-orange-50 dark:bg-gray-700 p-4 rounded-lg",
                                    children: [
                                      (0, t.jsxs)("div", {
                                        className:
                                          "flex justify-between items-center mb-4",
                                        children: [
                                          (0, t.jsx)("h4", {
                                            className:
                                              "font-semibold text-orange-800 dark:text-orange-400",
                                            children: "Heart Rate (BPM)",
                                          }),
                                          (0, t.jsx)(l.Z, {
                                            className:
                                              "text-orange-500 dark:text-orange-400",
                                          }),
                                        ],
                                      }),
                                      (0, t.jsx)(m.h, {
                                        width: "100%",
                                        height: 200,
                                        children: (0, t.jsxs)(x.w, {
                                          data: e.metrics,
                                          children: [
                                            (0, t.jsx)(g.q, {
                                              strokeDasharray: "3 3",
                                              stroke: "#f3d9b1",
                                            }),
                                            (0, t.jsx)(h.K, {
                                              dataKey: "timestamp",
                                              stroke: "#FF6B35",
                                            }),
                                            (0, t.jsx)(u.B, {
                                              domain: [60, 100],
                                              stroke: "#FF6B35",
                                            }),
                                            (0, t.jsx)(j.u, {}),
                                            (0, t.jsx)(b.x, {
                                              type: "monotone",
                                              dataKey: "heartRate",
                                              stroke: "#FF6B35",
                                              strokeWidth: 3,
                                              dot: {
                                                fill: "#FF6B35",
                                                strokeWidth: 2,
                                              },
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className:
                                      "bg-orange-50 dark:bg-gray-700 p-4 rounded-lg",
                                    children: [
                                      (0, t.jsxs)("div", {
                                        className:
                                          "flex justify-between items-center mb-4",
                                        children: [
                                          (0, t.jsx)("h4", {
                                            className:
                                              "font-semibold text-orange-800 dark:text-orange-400",
                                            children: "Glucose Levels (mg/dL)",
                                          }),
                                          (0, t.jsx)(c.Z, {
                                            className:
                                              "text-orange-500 dark:text-orange-400",
                                          }),
                                        ],
                                      }),
                                      (0, t.jsx)(m.h, {
                                        width: "100%",
                                        height: 200,
                                        children: (0, t.jsxs)(x.w, {
                                          data: e.metrics,
                                          children: [
                                            (0, t.jsx)(g.q, {
                                              strokeDasharray: "3 3",
                                              stroke: "#f3d9b1",
                                            }),
                                            (0, t.jsx)(h.K, {
                                              dataKey: "timestamp",
                                              stroke: "#FF6B35",
                                            }),
                                            (0, t.jsx)(u.B, {
                                              domain: [70, 140],
                                              stroke: "#FF6B35",
                                            }),
                                            (0, t.jsx)(j.u, {}),
                                            (0, t.jsx)(b.x, {
                                              type: "monotone",
                                              dataKey: "glucoseLevel",
                                              stroke: "#FF6B35",
                                              strokeWidth: 3,
                                              dot: {
                                                fill: "#FF6B35",
                                                strokeWidth: 2,
                                              },
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: "grid md:grid-cols-2 gap-6",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className:
                                      "bg-orange-50 dark:bg-gray-700 p-4 rounded-lg",
                                    children: [
                                      (0, t.jsx)("h4", {
                                        className:
                                          "font-semibold text-orange-700 dark:text-orange-400 mb-4",
                                        children: "Key Findings",
                                      }),
                                      (0, t.jsx)("ul", {
                                        className: "space-y-2",
                                        children:
                                          null === (s = e.keyFindings) ||
                                          void 0 === s
                                            ? void 0
                                            : s.map((e, a) =>
                                                (0, t.jsxs)(
                                                  "li",
                                                  {
                                                    className:
                                                      "text-gray-700 dark:text-gray-200 flex items-center",
                                                    children: [
                                                      (0, t.jsx)("div", {
                                                        className:
                                                          "w-2 h-2 rounded-full bg-orange-400 mr-2",
                                                      }),
                                                      e,
                                                    ],
                                                  },
                                                  a
                                                )
                                              ),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className:
                                      "bg-orange-50 dark:bg-gray-700 p-4 rounded-lg",
                                    children: [
                                      (0, t.jsxs)("div", {
                                        className: "flex items-center mb-4",
                                        children: [
                                          (0, t.jsx)("h4", {
                                            className:
                                              "font-semibold text-orange-700 dark:text-orange-400",
                                            children: "Recommendations",
                                          }),
                                          (0, t.jsx)(o.Z, {
                                            className:
                                              "ml-2 text-orange-500 dark:text-orange-400",
                                          }),
                                        ],
                                      }),
                                      (0, t.jsx)("ul", {
                                        className: "space-y-2",
                                        children:
                                          null === (r = e.suggestions) ||
                                          void 0 === r
                                            ? void 0
                                            : r.map((e, a) =>
                                                (0, t.jsxs)(
                                                  "li",
                                                  {
                                                    className:
                                                      "text-gray-700 dark:text-gray-200 flex items-center",
                                                    children: [
                                                      (0, t.jsx)("div", {
                                                        className:
                                                          "w-2 h-2 rounded-full bg-orange-400 mr-2",
                                                      }),
                                                      e,
                                                    ],
                                                  },
                                                  a
                                                )
                                              ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          a
                        );
                      }),
                    }),
                  ],
                }),
            ],
          }),
        });
      };
    },
  },
  function (e) {
    e.O(0, [699, 51, 675, 574, 749, 533, 93, 370, 971, 69, 744], function () {
      return e((e.s = 89252));
    }),
      (_N_E = e.O());
  },
]);
