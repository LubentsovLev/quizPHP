!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (S, e) {
  "use strict";
  var t = [],
    i = Object.getPrototypeOf,
    a = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    l = t.push,
    o = t.indexOf,
    n = {},
    s = n.toString,
    v = n.hasOwnProperty,
    r = v.toString,
    c = r.call(Object),
    m = {},
    y = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    b = function (e) {
      return null != e && e === e.window;
    },
    k = S.document,
    d = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function x(e, t, n) {
    var i,
      o,
      s = (n = n || k).createElement("script");
    if (((s.text = e), t))
      for (i in d)
        (o = t[i] || (t.getAttribute && t.getAttribute(i))) &&
          s.setAttribute(i, o);
    n.head.appendChild(s).parentNode.removeChild(s);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[s.call(e)] || "object"
      : typeof e;
  }
  var u = "3.5.1",
    C = function (e, t) {
      return new C.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !y(e) &&
      !b(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (C.fn = C.prototype = {
    jquery: u,
    constructor: C,
    length: 0,
    toArray: function () {
      return a.call(this);
    },
    get: function (e) {
      return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = C.merge(this.constructor(), e);
      return (t.prevObject = this), t;
    },
    each: function (e) {
      return C.each(this, e);
    },
    map: function (n) {
      return this.pushStack(
        C.map(this, function (e, t) {
          return n.call(e, t, e);
        })
      );
    },
    slice: function () {
      return this.pushStack(a.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(
        C.grep(this, function (e, t) {
          return (t + 1) % 2;
        })
      );
    },
    odd: function () {
      return this.pushStack(
        C.grep(this, function (e, t) {
          return t % 2;
        })
      );
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: l,
    sort: t.sort,
    splice: t.splice,
  }),
    (C.extend = C.fn.extend = function () {
      var e,
        t,
        n,
        i,
        o,
        s,
        r = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
      for (
        "boolean" == typeof r && ((c = r), (r = arguments[a] || {}), a++),
          "object" == typeof r || y(r) || (r = {}),
          a === l && ((r = this), a--);
        a < l;
        a++
      )
        if (null != (e = arguments[a]))
          for (t in e)
            (i = e[t]),
              "__proto__" !== t &&
                r !== i &&
                (c && i && (C.isPlainObject(i) || (o = Array.isArray(i)))
                  ? ((n = r[t]),
                    (s =
                      o && !Array.isArray(n)
                        ? []
                        : o || C.isPlainObject(n)
                        ? n
                        : {}),
                    (o = !1),
                    (r[t] = C.extend(c, s, i)))
                  : void 0 !== i && (r[t] = i));
      return r;
    }),
    C.extend({
      expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          "[object Object]" !== s.call(e) ||
          ((t = i(e)) &&
            ("function" !=
              typeof (n = v.call(t, "constructor") && t.constructor) ||
              r.call(n) !== c))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        x(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (p(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? C.merge(n, "string" == typeof e ? [e] : e)
              : l.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : o.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
        return (e.length = o), e;
      },
      grep: function (e, t, n) {
        for (var i = [], o = 0, s = e.length, r = !n; o < s; o++)
          !t(e[o], o) !== r && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          o,
          s = 0,
          r = [];
        if (p(e))
          for (i = e.length; s < i; s++)
            null != (o = t(e[s], s, n)) && r.push(o);
        else for (s in e) null != (o = t(e[s], s, n)) && r.push(o);
        return g(r);
      },
      guid: 1,
      support: m,
    }),
    "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]),
    C.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var f = (function (n) {
    var e,
      f,
      x,
      s,
      o,
      h,
      u,
      g,
      w,
      l,
      c,
      T,
      S,
      r,
      k,
      v,
      a,
      d,
      m,
      C = "sizzle" + 1 * new Date(),
      p = n.document,
      $ = 0,
      i = 0,
      y = le(),
      b = le(),
      A = le(),
      P = le(),
      E = function (e, t) {
        return e === t && (c = !0), 0;
      },
      L = {}.hasOwnProperty,
      t = [],
      D = t.pop,
      j = t.push,
      H = t.push,
      M = t.slice,
      O = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      I =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      q = "[\\x20\\t\\r\\n\\f]",
      N =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        q +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      z =
        "\\[" +
        q +
        "*(" +
        N +
        ")(?:" +
        q +
        "*([*^$|!~]?=)" +
        q +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        N +
        "))|)" +
        q +
        "*\\]",
      F =
        ":(" +
        N +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        z +
        ")*)|.*)\\)|)",
      R = new RegExp(q + "+", "g"),
      W = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
      B = new RegExp("^" + q + "*," + q + "*"),
      X = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
      _ = new RegExp(q + "|>"),
      Y = new RegExp(F),
      U = new RegExp("^" + N + "$"),
      V = {
        ID: new RegExp("^#(" + N + ")"),
        CLASS: new RegExp("^\\.(" + N + ")"),
        TAG: new RegExp("^(" + N + "|[*])"),
        ATTR: new RegExp("^" + z),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            q +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            q +
            "*(?:([+-]|)" +
            q +
            "*(\\d+)|))" +
            q +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + I + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            q +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            q +
            "*((?:-\\d)?\\d*)" +
            q +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Z = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      oe = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      se = function () {
        T();
      },
      re = xe(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = M.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              j.apply(e, M.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    function ae(e, t, n, i) {
      var o,
        s,
        r,
        a,
        l,
        c,
        d,
        u = t && t.ownerDocument,
        p = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!i && (T(t), (t = t || S), k)) {
        if (11 !== p && (l = J.exec(e)))
          if ((o = l[1])) {
            if (9 === p) {
              if (!(r = t.getElementById(o))) return n;
              if (r.id === o) return n.push(r), n;
            } else if (u && (r = u.getElementById(o)) && m(t, r) && r.id === o)
              return n.push(r), n;
          } else {
            if (l[2]) return H.apply(n, t.getElementsByTagName(e)), n;
            if (
              (o = l[3]) &&
              f.getElementsByClassName &&
              t.getElementsByClassName
            )
              return H.apply(n, t.getElementsByClassName(o)), n;
          }
        if (
          f.qsa &&
          !P[e + " "] &&
          (!v || !v.test(e)) &&
          (1 !== p || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((d = e), (u = t), 1 === p && (_.test(e) || X.test(e)))) {
            for (
              ((u = (ee.test(e) && me(t.parentNode)) || t) === t && f.scope) ||
                ((a = t.getAttribute("id"))
                  ? (a = a.replace(ie, oe))
                  : t.setAttribute("id", (a = C))),
                s = (c = h(e)).length;
              s--;

            )
              c[s] = (a ? "#" + a : ":scope") + " " + be(c[s]);
            d = c.join(",");
          }
          try {
            return H.apply(n, u.querySelectorAll(d)), n;
          } catch (t) {
            P(e, !0);
          } finally {
            a === C && t.removeAttribute("id");
          }
        }
      }
      return g(e.replace(W, "$1"), t, n, i);
    }
    function le() {
      var i = [];
      return function e(t, n) {
        return (
          i.push(t + " ") > x.cacheLength && delete e[i.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function ce(e) {
      return (e[C] = !0), e;
    }
    function de(e) {
      var t = S.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function ue(e, t) {
      for (var n = e.split("|"), i = n.length; i--; ) x.attrHandle[n[i]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && re(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(r) {
      return ce(function (s) {
        return (
          (s = +s),
          ce(function (e, t) {
            for (var n, i = r([], e.length, s), o = i.length; o--; )
              e[(n = i[o])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function me(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (e in ((f = ae.support = {}),
    (o = ae.isXML = function (e) {
      var t = e.namespaceURI,
        n = (e.ownerDocument || e).documentElement;
      return !Z.test(t || (n && n.nodeName) || "HTML");
    }),
    (T = ae.setDocument = function (e) {
      var t,
        n,
        i = e ? e.ownerDocument || e : p;
      return (
        i != S &&
          9 === i.nodeType &&
          i.documentElement &&
          ((r = (S = i).documentElement),
          (k = !o(S)),
          p != S &&
            (n = S.defaultView) &&
            n.top !== n &&
            (n.addEventListener
              ? n.addEventListener("unload", se, !1)
              : n.attachEvent && n.attachEvent("onunload", se)),
          (f.scope = de(function (e) {
            return (
              r.appendChild(e).appendChild(S.createElement("div")),
              void 0 !== e.querySelectorAll &&
                !e.querySelectorAll(":scope fieldset div").length
            );
          })),
          (f.attributes = de(function (e) {
            return (e.className = "i"), !e.getAttribute("className");
          })),
          (f.getElementsByTagName = de(function (e) {
            return (
              e.appendChild(S.createComment("")),
              !e.getElementsByTagName("*").length
            );
          })),
          (f.getElementsByClassName = K.test(S.getElementsByClassName)),
          (f.getById = de(function (e) {
            return (
              (r.appendChild(e).id = C),
              !S.getElementsByName || !S.getElementsByName(C).length
            );
          })),
          f.getById
            ? ((x.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (x.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && k) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((x.filter.ID = function (e) {
                var n = e.replace(te, ne);
                return function (e) {
                  var t =
                    void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                  return t && t.value === n;
                };
              }),
              (x.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && k) {
                  var n,
                    i,
                    o,
                    s = t.getElementById(e);
                  if (s) {
                    if ((n = s.getAttributeNode("id")) && n.value === e)
                      return [s];
                    for (o = t.getElementsByName(e), i = 0; (s = o[i++]); )
                      if ((n = s.getAttributeNode("id")) && n.value === e)
                        return [s];
                  }
                  return [];
                }
              })),
          (x.find.TAG = f.getElementsByTagName
            ? function (e, t) {
                return void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : f.qsa
                  ? t.querySelectorAll(e)
                  : void 0;
              }
            : function (e, t) {
                var n,
                  i = [],
                  o = 0,
                  s = t.getElementsByTagName(e);
                if ("*" === e) {
                  for (; (n = s[o++]); ) 1 === n.nodeType && i.push(n);
                  return i;
                }
                return s;
              }),
          (x.find.CLASS =
            f.getElementsByClassName &&
            function (e, t) {
              if (void 0 !== t.getElementsByClassName && k)
                return t.getElementsByClassName(e);
            }),
          (a = []),
          (v = []),
          (f.qsa = K.test(S.querySelectorAll)) &&
            (de(function (e) {
              var t;
              (r.appendChild(e).innerHTML =
                "<a id='" +
                C +
                "'></a><select id='" +
                C +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                e.querySelectorAll("[msallowcapture^='']").length &&
                  v.push("[*^$]=" + q + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length ||
                  v.push("\\[" + q + "*(?:value|" + I + ")"),
                e.querySelectorAll("[id~=" + C + "-]").length || v.push("~="),
                (t = S.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length ||
                  v.push("\\[" + q + "*name" + q + "*=" + q + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + C + "+*").length ||
                  v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]");
            }),
            de(function (e) {
              e.innerHTML =
                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = S.createElement("input");
              t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length &&
                  v.push("name" + q + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length &&
                  v.push(":enabled", ":disabled"),
                (r.appendChild(e).disabled = !0),
                2 !== e.querySelectorAll(":disabled").length &&
                  v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:");
            })),
          (f.matchesSelector = K.test(
            (d =
              r.matches ||
              r.webkitMatchesSelector ||
              r.mozMatchesSelector ||
              r.oMatchesSelector ||
              r.msMatchesSelector)
          )) &&
            de(function (e) {
              (f.disconnectedMatch = d.call(e, "*")),
                d.call(e, "[s!='']:x"),
                a.push("!=", F);
            }),
          (v = v.length && new RegExp(v.join("|"))),
          (a = a.length && new RegExp(a.join("|"))),
          (t = K.test(r.compareDocumentPosition)),
          (m =
            t || K.test(r.contains)
              ? function (e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                  return (
                    e === i ||
                    !(
                      !i ||
                      1 !== i.nodeType ||
                      !(n.contains
                        ? n.contains(i)
                        : e.compareDocumentPosition &&
                          16 & e.compareDocumentPosition(i))
                    )
                  );
                }
              : function (e, t) {
                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                  return !1;
                }),
          (E = t
            ? function (e, t) {
                if (e === t) return (c = !0), 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  n ||
                  (1 &
                    (n =
                      (e.ownerDocument || e) == (t.ownerDocument || t)
                        ? e.compareDocumentPosition(t)
                        : 1) ||
                  (!f.sortDetached && t.compareDocumentPosition(e) === n)
                    ? e == S || (e.ownerDocument == p && m(p, e))
                      ? -1
                      : t == S || (t.ownerDocument == p && m(p, t))
                      ? 1
                      : l
                      ? O(l, e) - O(l, t)
                      : 0
                    : 4 & n
                    ? -1
                    : 1)
                );
              }
            : function (e, t) {
                if (e === t) return (c = !0), 0;
                var n,
                  i = 0,
                  o = e.parentNode,
                  s = t.parentNode,
                  r = [e],
                  a = [t];
                if (!o || !s)
                  return e == S
                    ? -1
                    : t == S
                    ? 1
                    : o
                    ? -1
                    : s
                    ? 1
                    : l
                    ? O(l, e) - O(l, t)
                    : 0;
                if (o === s) return pe(e, t);
                for (n = e; (n = n.parentNode); ) r.unshift(n);
                for (n = t; (n = n.parentNode); ) a.unshift(n);
                for (; r[i] === a[i]; ) i++;
                return i ? pe(r[i], a[i]) : r[i] == p ? -1 : a[i] == p ? 1 : 0;
              })),
        S
      );
    }),
    (ae.matches = function (e, t) {
      return ae(e, null, null, t);
    }),
    (ae.matchesSelector = function (e, t) {
      if (
        (T(e),
        f.matchesSelector &&
          k &&
          !P[t + " "] &&
          (!a || !a.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = d.call(e, t);
          if (
            n ||
            f.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          P(t, !0);
        }
      return 0 < ae(t, S, null, [e]).length;
    }),
    (ae.contains = function (e, t) {
      return (e.ownerDocument || e) != S && T(e), m(e, t);
    }),
    (ae.attr = function (e, t) {
      (e.ownerDocument || e) != S && T(e);
      var n = x.attrHandle[t.toLowerCase()],
        i = n && L.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
      return void 0 !== i
        ? i
        : f.attributes || !k
        ? e.getAttribute(t)
        : (i = e.getAttributeNode(t)) && i.specified
        ? i.value
        : null;
    }),
    (ae.escape = function (e) {
      return (e + "").replace(ie, oe);
    }),
    (ae.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (ae.uniqueSort = function (e) {
      var t,
        n = [],
        i = 0,
        o = 0;
      if (
        ((c = !f.detectDuplicates),
        (l = !f.sortStable && e.slice(0)),
        e.sort(E),
        c)
      ) {
        for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
        for (; i--; ) e.splice(n[i], 1);
      }
      return (l = null), e;
    }),
    (s = ae.getText = function (e) {
      var t,
        n = "",
        i = 0,
        o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += s(e);
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; (t = e[i++]); ) n += s(t);
      return n;
    }),
    ((x = ae.selectors = {
      cacheLength: 50,
      createPseudo: ce,
      match: V,
      attrHandle: {},
      find: {},
      relative: {
        ">": { dir: "parentNode", first: !0 },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: !0 },
        "~": { dir: "previousSibling" },
      },
      preFilter: {
        ATTR: function (e) {
          return (
            (e[1] = e[1].replace(te, ne)),
            (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
            "~=" === e[2] && (e[3] = " " + e[3] + " "),
            e.slice(0, 4)
          );
        },
        CHILD: function (e) {
          return (
            (e[1] = e[1].toLowerCase()),
            "nth" === e[1].slice(0, 3)
              ? (e[3] || ae.error(e[0]),
                (e[4] = +(e[4]
                  ? e[5] + (e[6] || 1)
                  : 2 * ("even" === e[3] || "odd" === e[3]))),
                (e[5] = +(e[7] + e[8] || "odd" === e[3])))
              : e[3] && ae.error(e[0]),
            e
          );
        },
        PSEUDO: function (e) {
          var t,
            n = !e[6] && e[2];
          return V.CHILD.test(e[0])
            ? null
            : (e[3]
                ? (e[2] = e[4] || e[5] || "")
                : n &&
                  Y.test(n) &&
                  (t = h(n, !0)) &&
                  (t = n.indexOf(")", n.length - t) - n.length) &&
                  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
              e.slice(0, 3));
        },
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e
            ? function () {
                return !0;
              }
            : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function (e) {
          var t = y[e + " "];
          return (
            t ||
            ((t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) &&
              y(e, function (e) {
                return t.test(
                  ("string" == typeof e.className && e.className) ||
                    (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                    ""
                );
              }))
          );
        },
        ATTR: function (n, i, o) {
          return function (e) {
            var t = ae.attr(e, n);
            return null == t
              ? "!=" === i
              : !i ||
                  ((t += ""),
                  "=" === i
                    ? t === o
                    : "!=" === i
                    ? t !== o
                    : "^=" === i
                    ? o && 0 === t.indexOf(o)
                    : "*=" === i
                    ? o && -1 < t.indexOf(o)
                    : "$=" === i
                    ? o && t.slice(-o.length) === o
                    : "~=" === i
                    ? -1 < (" " + t.replace(R, " ") + " ").indexOf(o)
                    : "|=" === i &&
                      (t === o || t.slice(0, o.length + 1) === o + "-"));
          };
        },
        CHILD: function (h, e, t, g, v) {
          var m = "nth" !== h.slice(0, 3),
            y = "last" !== h.slice(-4),
            b = "of-type" === e;
          return 1 === g && 0 === v
            ? function (e) {
                return !!e.parentNode;
              }
            : function (e, t, n) {
                var i,
                  o,
                  s,
                  r,
                  a,
                  l,
                  c = m !== y ? "nextSibling" : "previousSibling",
                  d = e.parentNode,
                  u = b && e.nodeName.toLowerCase(),
                  p = !n && !b,
                  f = !1;
                if (d) {
                  if (m) {
                    for (; c; ) {
                      for (r = e; (r = r[c]); )
                        if (
                          b ? r.nodeName.toLowerCase() === u : 1 === r.nodeType
                        )
                          return !1;
                      l = c = "only" === h && !l && "nextSibling";
                    }
                    return !0;
                  }
                  if (((l = [y ? d.firstChild : d.lastChild]), y && p)) {
                    for (
                      f =
                        (a =
                          (i =
                            (o =
                              (s = (r = d)[C] || (r[C] = {}))[r.uniqueID] ||
                              (s[r.uniqueID] = {}))[h] || [])[0] === $ &&
                          i[1]) && i[2],
                        r = a && d.childNodes[a];
                      (r = (++a && r && r[c]) || (f = a = 0) || l.pop());

                    )
                      if (1 === r.nodeType && ++f && r === e) {
                        o[h] = [$, a, f];
                        break;
                      }
                  } else if (
                    (p &&
                      (f = a =
                        (i =
                          (o =
                            (s = (r = e)[C] || (r[C] = {}))[r.uniqueID] ||
                            (s[r.uniqueID] = {}))[h] || [])[0] === $ && i[1]),
                    !1 === f)
                  )
                    for (
                      ;
                      (r = (++a && r && r[c]) || (f = a = 0) || l.pop()) &&
                      ((b
                        ? r.nodeName.toLowerCase() !== u
                        : 1 !== r.nodeType) ||
                        !++f ||
                        (p &&
                          ((o =
                            (s = r[C] || (r[C] = {}))[r.uniqueID] ||
                            (s[r.uniqueID] = {}))[h] = [$, f]),
                        r !== e));

                    );
                  return (f -= v) === g || (f % g == 0 && 0 <= f / g);
                }
              };
        },
        PSEUDO: function (e, s) {
          var t,
            r =
              x.pseudos[e] ||
              x.setFilters[e.toLowerCase()] ||
              ae.error("unsupported pseudo: " + e);
          return r[C]
            ? r(s)
            : 1 < r.length
            ? ((t = [e, e, "", s]),
              x.setFilters.hasOwnProperty(e.toLowerCase())
                ? ce(function (e, t) {
                    for (var n, i = r(e, s), o = i.length; o--; )
                      e[(n = O(e, i[o]))] = !(t[n] = i[o]);
                  })
                : function (e) {
                    return r(e, 0, t);
                  })
            : r;
        },
      },
      pseudos: {
        not: ce(function (e) {
          var i = [],
            o = [],
            a = u(e.replace(W, "$1"));
          return a[C]
            ? ce(function (e, t, n, i) {
                for (var o, s = a(e, null, i, []), r = e.length; r--; )
                  (o = s[r]) && (e[r] = !(t[r] = o));
              })
            : function (e, t, n) {
                return (i[0] = e), a(i, null, n, o), (i[0] = null), !o.pop();
              };
        }),
        has: ce(function (t) {
          return function (e) {
            return 0 < ae(t, e).length;
          };
        }),
        contains: ce(function (t) {
          return (
            (t = t.replace(te, ne)),
            function (e) {
              return -1 < (e.textContent || s(e)).indexOf(t);
            }
          );
        }),
        lang: ce(function (n) {
          return (
            U.test(n || "") || ae.error("unsupported lang: " + n),
            (n = n.replace(te, ne).toLowerCase()),
            function (e) {
              var t;
              do {
                if (
                  (t = k
                    ? e.lang
                    : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                )
                  return (
                    (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                  );
              } while ((e = e.parentNode) && 1 === e.nodeType);
              return !1;
            }
          );
        }),
        target: function (e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function (e) {
          return e === r;
        },
        focus: function (e) {
          return (
            e === S.activeElement &&
            (!S.hasFocus || S.hasFocus()) &&
            !!(e.type || e.href || ~e.tabIndex)
          );
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return (
            ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
          );
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function (e) {
          return !x.pseudos.empty(e);
        },
        header: function (e) {
          return G.test(e.nodeName);
        },
        input: function (e) {
          return Q.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t && "button" === e.type) || "button" === t;
        },
        text: function (e) {
          var t;
          return (
            "input" === e.nodeName.toLowerCase() &&
            "text" === e.type &&
            (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          );
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
          return e;
        }),
      },
    }).pseudos.nth = x.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      x.pseudos[e] = fe(e);
    for (e in { submit: !0, reset: !0 }) x.pseudos[e] = he(e);
    function ye() {}
    function be(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function xe(a, e, t) {
      var l = e.dir,
        c = e.next,
        d = c || l,
        u = t && "parentNode" === d,
        p = i++;
      return e.first
        ? function (e, t, n) {
            for (; (e = e[l]); ) if (1 === e.nodeType || u) return a(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var i,
              o,
              s,
              r = [$, p];
            if (n) {
              for (; (e = e[l]); )
                if ((1 === e.nodeType || u) && a(e, t, n)) return !0;
            } else
              for (; (e = e[l]); )
                if (1 === e.nodeType || u)
                  if (
                    ((o =
                      (s = e[C] || (e[C] = {}))[e.uniqueID] ||
                      (s[e.uniqueID] = {})),
                    c && c === e.nodeName.toLowerCase())
                  )
                    e = e[l] || e;
                  else {
                    if ((i = o[d]) && i[0] === $ && i[1] === p)
                      return (r[2] = i[2]);
                    if (((o[d] = r)[2] = a(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(o) {
      return 1 < o.length
        ? function (e, t, n) {
            for (var i = o.length; i--; ) if (!o[i](e, t, n)) return !1;
            return !0;
          }
        : o[0];
    }
    function Te(e, t, n, i, o) {
      for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)
        (s = e[a]) && ((n && !n(s, i, o)) || (r.push(s), c && t.push(a)));
      return r;
    }
    function Se(f, h, g, v, m, e) {
      return (
        v && !v[C] && (v = Se(v)),
        m && !m[C] && (m = Se(m, e)),
        ce(function (e, t, n, i) {
          var o,
            s,
            r,
            a = [],
            l = [],
            c = t.length,
            d =
              e ||
              (function (e, t, n) {
                for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            u = !f || (!e && h) ? d : Te(d, a, f, n, i),
            p = g ? (m || (e ? f : c || v) ? [] : t) : u;
          if ((g && g(u, p, n, i), v))
            for (o = Te(p, l), v(o, [], n, i), s = o.length; s--; )
              (r = o[s]) && (p[l[s]] = !(u[l[s]] = r));
          if (e) {
            if (m || f) {
              if (m) {
                for (o = [], s = p.length; s--; )
                  (r = p[s]) && o.push((u[s] = r));
                m(null, (p = []), o, i);
              }
              for (s = p.length; s--; )
                (r = p[s]) &&
                  -1 < (o = m ? O(e, r) : a[s]) &&
                  (e[o] = !(t[o] = r));
            }
          } else (p = Te(p === t ? p.splice(c, p.length) : p)), m ? m(null, t, p, i) : H.apply(t, p);
        })
      );
    }
    function ke(e) {
      for (
        var o,
          t,
          n,
          i = e.length,
          s = x.relative[e[0].type],
          r = s || x.relative[" "],
          a = s ? 1 : 0,
          l = xe(
            function (e) {
              return e === o;
            },
            r,
            !0
          ),
          c = xe(
            function (e) {
              return -1 < O(o, e);
            },
            r,
            !0
          ),
          d = [
            function (e, t, n) {
              var i =
                (!s && (n || t !== w)) ||
                ((o = t).nodeType ? l(e, t, n) : c(e, t, n));
              return (o = null), i;
            },
          ];
        a < i;
        a++
      )
        if ((t = x.relative[e[a].type])) d = [xe(we(d), t)];
        else {
          if ((t = x.filter[e[a].type].apply(null, e[a].matches))[C]) {
            for (n = ++a; n < i && !x.relative[e[n].type]; n++);
            return Se(
              1 < a && we(d),
              1 < a &&
                be(
                  e
                    .slice(0, a - 1)
                    .concat({ value: " " === e[a - 2].type ? "*" : "" })
                ).replace(W, "$1"),
              t,
              a < n && ke(e.slice(a, n)),
              n < i && ke((e = e.slice(n))),
              n < i && be(e)
            );
          }
          d.push(t);
        }
      return we(d);
    }
    return (
      (ye.prototype = x.filters = x.pseudos),
      (x.setFilters = new ye()),
      (h = ae.tokenize = function (e, t) {
        var n,
          i,
          o,
          s,
          r,
          a,
          l,
          c = b[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (r = e, a = [], l = x.preFilter; r; ) {
          for (s in ((n && !(i = B.exec(r))) ||
            (i && (r = r.slice(i[0].length) || r), a.push((o = []))),
          (n = !1),
          (i = X.exec(r)) &&
            ((n = i.shift()),
            o.push({ value: n, type: i[0].replace(W, " ") }),
            (r = r.slice(n.length))),
          x.filter))
            !(i = V[s].exec(r)) ||
              (l[s] && !(i = l[s](i))) ||
              ((n = i.shift()),
              o.push({ value: n, type: s, matches: i }),
              (r = r.slice(n.length)));
          if (!n) break;
        }
        return t ? r.length : r ? ae.error(e) : b(e, a).slice(0);
      }),
      (u = ae.compile = function (e, t) {
        var n,
          v,
          m,
          y,
          b,
          i,
          o = [],
          s = [],
          r = A[e + " "];
        if (!r) {
          for (t || (t = h(e)), n = t.length; n--; )
            (r = ke(t[n]))[C] ? o.push(r) : s.push(r);
          (r = A(
            e,
            ((v = s),
            (y = 0 < (m = o).length),
            (b = 0 < v.length),
            (i = function (e, t, n, i, o) {
              var s,
                r,
                a,
                l = 0,
                c = "0",
                d = e && [],
                u = [],
                p = w,
                f = e || (b && x.find.TAG("*", o)),
                h = ($ += null == p ? 1 : Math.random() || 0.1),
                g = f.length;
              for (
                o && (w = t == S || t || o);
                c !== g && null != (s = f[c]);
                c++
              ) {
                if (b && s) {
                  for (
                    r = 0, t || s.ownerDocument == S || (T(s), (n = !k));
                    (a = v[r++]);

                  )
                    if (a(s, t || S, n)) {
                      i.push(s);
                      break;
                    }
                  o && ($ = h);
                }
                y && ((s = !a && s) && l--, e && d.push(s));
              }
              if (((l += c), y && c !== l)) {
                for (r = 0; (a = m[r++]); ) a(d, u, t, n);
                if (e) {
                  if (0 < l) for (; c--; ) d[c] || u[c] || (u[c] = D.call(i));
                  u = Te(u);
                }
                H.apply(i, u),
                  o &&
                    !e &&
                    0 < u.length &&
                    1 < l + m.length &&
                    ae.uniqueSort(i);
              }
              return o && (($ = h), (w = p)), d;
            }),
            y ? ce(i) : i)
          )).selector = e;
        }
        return r;
      }),
      (g = ae.select = function (e, t, n, i) {
        var o,
          s,
          r,
          a,
          l,
          c = "function" == typeof e && e,
          d = !i && h((e = c.selector || e));
        if (((n = n || []), 1 === d.length)) {
          if (
            2 < (s = d[0] = d[0].slice(0)).length &&
            "ID" === (r = s[0]).type &&
            9 === t.nodeType &&
            k &&
            x.relative[s[1].type]
          ) {
            if (!(t = (x.find.ID(r.matches[0].replace(te, ne), t) || [])[0]))
              return n;
            c && (t = t.parentNode), (e = e.slice(s.shift().value.length));
          }
          for (
            o = V.needsContext.test(e) ? 0 : s.length;
            o-- && ((r = s[o]), !x.relative[(a = r.type)]);

          )
            if (
              (l = x.find[a]) &&
              (i = l(
                r.matches[0].replace(te, ne),
                (ee.test(s[0].type) && me(t.parentNode)) || t
              ))
            ) {
              if ((s.splice(o, 1), !(e = i.length && be(s))))
                return H.apply(n, i), n;
              break;
            }
        }
        return (
          (c || u(e, d))(
            i,
            t,
            !k,
            n,
            !t || (ee.test(e) && me(t.parentNode)) || t
          ),
          n
        );
      }),
      (f.sortStable = C.split("").sort(E).join("") === C),
      (f.detectDuplicates = !!c),
      T(),
      (f.sortDetached = de(function (e) {
        return 1 & e.compareDocumentPosition(S.createElement("fieldset"));
      })),
      de(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        ue("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (f.attributes &&
        de(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        ue("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      de(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        ue(I, function (e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      ae
    );
  })(S);
  (C.find = f),
    (C.expr = f.selectors),
    (C.expr[":"] = C.expr.pseudos),
    (C.uniqueSort = C.unique = f.uniqueSort),
    (C.text = f.getText),
    (C.isXMLDoc = f.isXML),
    (C.contains = f.contains),
    (C.escapeSelector = f.escape);
  var h = function (e, t, n) {
      for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && C(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    $ = C.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function E(e, n, i) {
    return y(n)
      ? C.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== i;
        })
      : n.nodeType
      ? C.grep(e, function (e) {
          return (e === n) !== i;
        })
      : "string" != typeof n
      ? C.grep(e, function (e) {
          return -1 < o.call(n, e) !== i;
        })
      : C.filter(n, e, i);
  }
  (C.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? C.find.matchesSelector(i, e)
          ? [i]
          : []
        : C.find.matches(
            e,
            C.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    C.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          o = this;
        if ("string" != typeof e)
          return this.pushStack(
            C(e).filter(function () {
              for (t = 0; t < i; t++) if (C.contains(o[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, o[t], n);
        return 1 < i ? C.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(E(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(E(this, e || [], !0));
      },
      is: function (e) {
        return !!E(this, "string" == typeof e && $.test(e) ? C(e) : e || [], !1)
          .length;
      },
    });
  var L,
    D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((C.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || L), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : D.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof C ? t[0] : t),
          C.merge(
            this,
            C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : k, !0)
          ),
          P.test(i[1]) && C.isPlainObject(t))
        )
          for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (o = k.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : y(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(C)
      : C.makeArray(e, this);
  }).prototype = C.fn),
    (L = C(k));
  var j = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function M(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  C.fn.extend({
    has: function (e) {
      var t = C(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        o = this.length,
        s = [],
        r = "string" != typeof e && C(e);
      if (!$.test(e))
        for (; i < o; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (r
                ? -1 < r.index(n)
                : 1 === n.nodeType && C.find.matchesSelector(n, e))
            ) {
              s.push(n);
              break;
            }
      return this.pushStack(1 < s.length ? C.uniqueSort(s) : s);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? o.call(C(e), this[0])
          : o.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    C.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return M(e, "nextSibling");
        },
        prev: function (e) {
          return M(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && i(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              C.merge([], e.childNodes));
        },
      },
      function (i, o) {
        C.fn[i] = function (e, t) {
          var n = C.map(this, o, e);
          return (
            "Until" !== i.slice(-5) && (t = e),
            t && "string" == typeof t && (n = C.filter(t, n)),
            1 < this.length &&
              (H[i] || C.uniqueSort(n), j.test(i) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var O = /[^\x20\t\r\n\f]+/g;
  function I(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function N(e, t, n, i) {
    var o;
    try {
      e && y((o = e.promise))
        ? o.call(e).done(t).fail(n)
        : e && y((o = e.then))
        ? o.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (C.Callbacks = function (i) {
    var e, n;
    i =
      "string" == typeof i
        ? ((e = i),
          (n = {}),
          C.each(e.match(O) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : C.extend({}, i);
    var o,
      t,
      s,
      r,
      a = [],
      l = [],
      c = -1,
      d = function () {
        for (r = r || i.once, s = o = !0; l.length; c = -1)
          for (t = l.shift(); ++c < a.length; )
            !1 === a[c].apply(t[0], t[1]) &&
              i.stopOnFalse &&
              ((c = a.length), (t = !1));
        i.memory || (t = !1), (o = !1), r && (a = t ? [] : "");
      },
      u = {
        add: function () {
          return (
            a &&
              (t && !o && ((c = a.length - 1), l.push(t)),
              (function n(e) {
                C.each(e, function (e, t) {
                  y(t)
                    ? (i.unique && u.has(t)) || a.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !o && d()),
            this
          );
        },
        remove: function () {
          return (
            C.each(arguments, function (e, t) {
              for (var n; -1 < (n = C.inArray(t, a, n)); )
                a.splice(n, 1), n <= c && c--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < C.inArray(e, a) : 0 < a.length;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (r = l = []), (a = t = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (r = l = []), t || o || (a = t = ""), this;
        },
        locked: function () {
          return !!r;
        },
        fireWith: function (e, t) {
          return (
            r ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              l.push(t),
              o || d()),
            this
          );
        },
        fire: function () {
          return u.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!s;
        },
      };
    return u;
  }),
    C.extend({
      Deferred: function (e) {
        var s = [
            [
              "notify",
              "progress",
              C.Callbacks("memory"),
              C.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              C.Callbacks("once memory"),
              C.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              C.Callbacks("once memory"),
              C.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          o = "pending",
          r = {
            state: function () {
              return o;
            },
            always: function () {
              return a.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return r.then(null, e);
            },
            pipe: function () {
              var o = arguments;
              return C.Deferred(function (i) {
                C.each(s, function (e, t) {
                  var n = y(o[t[4]]) && o[t[4]];
                  a[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && y(e.promise)
                      ? e
                          .promise()
                          .progress(i.notify)
                          .done(i.resolve)
                          .fail(i.reject)
                      : i[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (o = null);
              }).promise();
            },
            then: function (t, n, i) {
              var l = 0;
              function c(o, s, r, a) {
                return function () {
                  var n = this,
                    i = arguments,
                    e = function () {
                      var e, t;
                      if (!(o < l)) {
                        if ((e = r.apply(n, i)) === s.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          y(t)
                            ? a
                              ? t.call(e, c(l, s, I, a), c(l, s, q, a))
                              : (l++,
                                t.call(
                                  e,
                                  c(l, s, I, a),
                                  c(l, s, q, a),
                                  c(l, s, I, s.notifyWith)
                                ))
                            : (r !== I && ((n = void 0), (i = [e])),
                              (a || s.resolveWith)(n, i));
                      }
                    },
                    t = a
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            C.Deferred.exceptionHook &&
                              C.Deferred.exceptionHook(e, t.stackTrace),
                              l <= o + 1 &&
                                (r !== q && ((n = void 0), (i = [e])),
                                s.rejectWith(n, i));
                          }
                        };
                  o
                    ? t()
                    : (C.Deferred.getStackHook &&
                        (t.stackTrace = C.Deferred.getStackHook()),
                      S.setTimeout(t));
                };
              }
              return C.Deferred(function (e) {
                s[0][3].add(c(0, e, y(i) ? i : I, e.notifyWith)),
                  s[1][3].add(c(0, e, y(t) ? t : I)),
                  s[2][3].add(c(0, e, y(n) ? n : q));
              }).promise();
            },
            promise: function (e) {
              return null != e ? C.extend(e, r) : r;
            },
          },
          a = {};
        return (
          C.each(s, function (e, t) {
            var n = t[2],
              i = t[5];
            (r[t[1]] = n.add),
              i &&
                n.add(
                  function () {
                    o = i;
                  },
                  s[3 - e][2].disable,
                  s[3 - e][3].disable,
                  s[0][2].lock,
                  s[0][3].lock
                ),
              n.add(t[3].fire),
              (a[t[0]] = function () {
                return (
                  a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                );
              }),
              (a[t[0] + "With"] = n.fireWith);
          }),
          r.promise(a),
          e && e.call(a, a),
          a
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          i = Array(t),
          o = a.call(arguments),
          s = C.Deferred(),
          r = function (t) {
            return function (e) {
              (i[t] = this),
                (o[t] = 1 < arguments.length ? a.call(arguments) : e),
                --n || s.resolveWith(i, o);
            };
          };
        if (
          n <= 1 &&
          (N(e, s.done(r(t)).resolve, s.reject, !n),
          "pending" === s.state() || y(o[t] && o[t].then))
        )
          return s.then();
        for (; t--; ) N(o[t], r(t), s.reject);
        return s.promise();
      },
    });
  var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (C.Deferred.exceptionHook = function (e, t) {
    S.console &&
      S.console.warn &&
      e &&
      z.test(e.name) &&
      S.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (C.readyException = function (e) {
      S.setTimeout(function () {
        throw e;
      });
    });
  var F = C.Deferred();
  function R() {
    k.removeEventListener("DOMContentLoaded", R),
      S.removeEventListener("load", R),
      C.ready();
  }
  (C.fn.ready = function (e) {
    return (
      F.then(e).catch(function (e) {
        C.readyException(e);
      }),
      this
    );
  }),
    C.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --C.readyWait : C.isReady) ||
          ((C.isReady = !0) !== e && 0 < --C.readyWait) ||
          F.resolveWith(k, [C]);
      },
    }),
    (C.ready.then = F.then),
    "complete" === k.readyState ||
    ("loading" !== k.readyState && !k.documentElement.doScroll)
      ? S.setTimeout(C.ready)
      : (k.addEventListener("DOMContentLoaded", R),
        S.addEventListener("load", R));
  var W = function (e, t, n, i, o, s, r) {
      var a = 0,
        l = e.length,
        c = null == n;
      if ("object" === w(n))
        for (a in ((o = !0), n)) W(e, t, a, n[a], !0, s, r);
      else if (
        void 0 !== i &&
        ((o = !0),
        y(i) || (r = !0),
        c &&
          (r
            ? (t.call(e, i), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(C(e), n);
              }))),
        t)
      )
        for (; a < l; a++) t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
      return o ? e : c ? t.call(e) : l ? t(e[0], n) : s;
    },
    B = /^-ms-/,
    X = /-([a-z])/g;
  function _(e, t) {
    return t.toUpperCase();
  }
  function Y(e) {
    return e.replace(B, "ms-").replace(X, _);
  }
  var U = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function V() {
    this.expando = C.expando + V.uid++;
  }
  (V.uid = 1),
    (V.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            U(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          o = this.cache(e);
        if ("string" == typeof t) o[Y(t)] = n;
        else for (i in t) o[Y(i)] = t[i];
        return o;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][Y(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(Y)
              : (t = Y(t)) in i
              ? [t]
              : t.match(O) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || C.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !C.isEmptyObject(t);
      },
    });
  var Z = new V(),
    Q = new V(),
    G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function J(e, t, n) {
    var i, o;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n =
            "true" === (o = n) ||
            ("false" !== o &&
              ("null" === o
                ? null
                : o === +o + ""
                ? +o
                : G.test(o)
                ? JSON.parse(o)
                : o));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  C.extend({
    hasData: function (e) {
      return Q.hasData(e) || Z.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Z.access(e, t, n);
    },
    _removeData: function (e, t) {
      Z.remove(e, t);
    },
  }),
    C.fn.extend({
      data: function (n, e) {
        var t,
          i,
          o,
          s = this[0],
          r = s && s.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((o = Q.get(s)), 1 === s.nodeType && !Z.get(s, "hasDataAttrs"))
          ) {
            for (t = r.length; t--; )
              r[t] &&
                0 === (i = r[t].name).indexOf("data-") &&
                ((i = Y(i.slice(5))), J(s, i, o[i]));
            Z.set(s, "hasDataAttrs", !0);
          }
          return o;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : W(
              this,
              function (e) {
                var t;
                if (s && void 0 === e)
                  return void 0 !== (t = Q.get(s, n))
                    ? t
                    : void 0 !== (t = J(s, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    C.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (i = Z.get(e, t)),
            n &&
              (!i || Array.isArray(n)
                ? (i = Z.access(e, t, C.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = C.queue(e, t),
          i = n.length,
          o = n.shift(),
          s = C._queueHooks(e, t);
        "inprogress" === o && ((o = n.shift()), i--),
          o &&
            ("fx" === t && n.unshift("inprogress"),
            delete s.stop,
            o.call(
              e,
              function () {
                C.dequeue(e, t);
              },
              s
            )),
          !i && s && s.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Z.get(e, n) ||
          Z.access(e, n, {
            empty: C.Callbacks("once memory").add(function () {
              Z.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    C.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? C.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          C.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          o = C.Deferred(),
          s = this,
          r = this.length,
          a = function () {
            --i || o.resolveWith(s, [s]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          r--;

        )
          (n = Z.get(s[r], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(a));
        return a(), o.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    ie = k.documentElement,
    oe = function (e) {
      return C.contains(e.ownerDocument, e);
    },
    se = { composed: !0 };
  ie.getRootNode &&
    (oe = function (e) {
      return (
        C.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
      );
    });
  var re = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && oe(e) && "none" === C.css(e, "display"))
    );
  };
  function ae(e, t, n, i) {
    var o,
      s,
      r = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return C.css(e, t, "");
          },
      l = a(),
      c = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
      d =
        e.nodeType &&
        (C.cssNumber[t] || ("px" !== c && +l)) &&
        te.exec(C.css(e, t));
    if (d && d[3] !== c) {
      for (l /= 2, c = c || d[3], d = +l || 1; r--; )
        C.style(e, t, d + c),
          (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (r = 0),
          (d /= s);
      (d *= 2), C.style(e, t, d + c), (n = n || []);
    }
    return (
      n &&
        ((d = +d || +l || 0),
        (o = n[1] ? d + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = d), (i.end = o))),
      o
    );
  }
  var le = {};
  function ce(e, t) {
    for (var n, i, o, s, r, a, l, c = [], d = 0, u = e.length; d < u; d++)
      (i = e[d]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((c[d] = Z.get(i, "display") || null),
              c[d] || (i.style.display = "")),
            "" === i.style.display &&
              re(i) &&
              (c[d] =
                ((l = r = s = void 0),
                (r = (o = i).ownerDocument),
                (a = o.nodeName),
                (l = le[a]) ||
                  ((s = r.body.appendChild(r.createElement(a))),
                  (l = C.css(s, "display")),
                  s.parentNode.removeChild(s),
                  "none" === l && (l = "block"),
                  (le[a] = l)))))
          : "none" !== n && ((c[d] = "none"), Z.set(i, "display", n)));
    for (d = 0; d < u; d++) null != c[d] && (e[d].style.display = c[d]);
    return e;
  }
  C.fn.extend({
    show: function () {
      return ce(this, !0);
    },
    hide: function () {
      return ce(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            re(this) ? C(this).show() : C(this).hide();
          });
    },
  });
  var de,
    ue,
    pe = /^(?:checkbox|radio)$/i,
    fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (de = k.createDocumentFragment().appendChild(k.createElement("div"))),
    (ue = k.createElement("input")).setAttribute("type", "radio"),
    ue.setAttribute("checked", "checked"),
    ue.setAttribute("name", "t"),
    de.appendChild(ue),
    (m.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (de.innerHTML = "<textarea>x</textarea>"),
    (m.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue),
    (de.innerHTML = "<option></option>"),
    (m.option = !!de.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? C.merge([e], n) : n
    );
  }
  function me(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    m.option ||
      (ge.optgroup = ge.option = [
        1,
        "<select multiple='multiple'>",
        "</select>",
      ]);
  var ye = /<|&#?\w+;/;
  function be(e, t, n, i, o) {
    for (
      var s,
        r,
        a,
        l,
        c,
        d,
        u = t.createDocumentFragment(),
        p = [],
        f = 0,
        h = e.length;
      f < h;
      f++
    )
      if ((s = e[f]) || 0 === s)
        if ("object" === w(s)) C.merge(p, s.nodeType ? [s] : s);
        else if (ye.test(s)) {
          for (
            r = r || u.appendChild(t.createElement("div")),
              a = (fe.exec(s) || ["", ""])[1].toLowerCase(),
              l = ge[a] || ge._default,
              r.innerHTML = l[1] + C.htmlPrefilter(s) + l[2],
              d = l[0];
            d--;

          )
            r = r.lastChild;
          C.merge(p, r.childNodes), ((r = u.firstChild).textContent = "");
        } else p.push(t.createTextNode(s));
    for (u.textContent = "", f = 0; (s = p[f++]); )
      if (i && -1 < C.inArray(s, i)) o && o.push(s);
      else if (
        ((c = oe(s)), (r = ve(u.appendChild(s), "script")), c && me(r), n)
      )
        for (d = 0; (s = r[d++]); ) he.test(s.type || "") && n.push(s);
    return u;
  }
  var xe = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function Se() {
    return !0;
  }
  function ke() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return k.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function $e(e, t, n, i, o, s) {
    var r, a;
    if ("object" == typeof t) {
      for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
        $e(e, a, n, i, t[a], s);
      return e;
    }
    if (
      (null == i && null == o
        ? ((o = n), (i = n = void 0))
        : null == o &&
          ("string" == typeof n
            ? ((o = i), (i = void 0))
            : ((o = i), (i = n), (n = void 0))),
      !1 === o)
    )
      o = ke;
    else if (!o) return e;
    return (
      1 === s &&
        ((r = o),
        ((o = function (e) {
          return C().off(e), r.apply(this, arguments);
        }).guid = r.guid || (r.guid = C.guid++))),
      e.each(function () {
        C.event.add(this, t, o, i, n);
      })
    );
  }
  function Ae(e, o, s) {
    s
      ? (Z.set(e, o, !1),
        C.event.add(e, o, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              i = Z.get(this, o);
            if (1 & e.isTrigger && this[o]) {
              if (i.length)
                (C.event.special[o] || {}).delegateType && e.stopPropagation();
              else if (
                ((i = a.call(arguments)),
                Z.set(this, o, i),
                (t = s(this, o)),
                this[o](),
                i !== (n = Z.get(this, o)) || t ? Z.set(this, o, !1) : (n = {}),
                i !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              i.length &&
                (Z.set(this, o, {
                  value: C.event.trigger(
                    C.extend(i[0], C.Event.prototype),
                    i.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Z.get(e, o) && C.event.add(e, o, Se);
  }
  (C.event = {
    global: {},
    add: function (t, e, n, i, o) {
      var s,
        r,
        a,
        l,
        c,
        d,
        u,
        p,
        f,
        h,
        g,
        v = Z.get(t);
      if (U(t))
        for (
          n.handler && ((n = (s = n).handler), (o = s.selector)),
            o && C.find.matchesSelector(ie, o),
            n.guid || (n.guid = C.guid++),
            (l = v.events) || (l = v.events = Object.create(null)),
            (r = v.handle) ||
              (r = v.handle = function (e) {
                return void 0 !== C && C.event.triggered !== e.type
                  ? C.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
            c = (e = (e || "").match(O) || [""]).length;
          c--;

        )
          (f = g = (a = Te.exec(e[c]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            f &&
              ((u = C.event.special[f] || {}),
              (f = (o ? u.delegateType : u.bindType) || f),
              (u = C.event.special[f] || {}),
              (d = C.extend(
                {
                  type: f,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && C.expr.match.needsContext.test(o),
                  namespace: h.join("."),
                },
                s
              )),
              (p = l[f]) ||
                (((p = l[f] = []).delegateCount = 0),
                (u.setup && !1 !== u.setup.call(t, i, h, r)) ||
                  (t.addEventListener && t.addEventListener(f, r))),
              u.add &&
                (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)),
              o ? p.splice(p.delegateCount++, 0, d) : p.push(d),
              (C.event.global[f] = !0));
    },
    remove: function (e, t, n, i, o) {
      var s,
        r,
        a,
        l,
        c,
        d,
        u,
        p,
        f,
        h,
        g,
        v = Z.hasData(e) && Z.get(e);
      if (v && (l = v.events)) {
        for (c = (t = (t || "").match(O) || [""]).length; c--; )
          if (
            ((f = g = (a = Te.exec(t[c]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            f)
          ) {
            for (
              u = C.event.special[f] || {},
                p = l[(f = (i ? u.delegateType : u.bindType) || f)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                r = s = p.length;
              s--;

            )
              (d = p[s]),
                (!o && g !== d.origType) ||
                  (n && n.guid !== d.guid) ||
                  (a && !a.test(d.namespace)) ||
                  (i && i !== d.selector && ("**" !== i || !d.selector)) ||
                  (p.splice(s, 1),
                  d.selector && p.delegateCount--,
                  u.remove && u.remove.call(e, d));
            r &&
              !p.length &&
              ((u.teardown && !1 !== u.teardown.call(e, h, v.handle)) ||
                C.removeEvent(e, f, v.handle),
              delete l[f]);
          } else for (f in l) C.event.remove(e, f + t[c], n, i, !0);
        C.isEmptyObject(l) && Z.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        o,
        s,
        r,
        a = new Array(arguments.length),
        l = C.event.fix(e),
        c = (Z.get(this, "events") || Object.create(null))[l.type] || [],
        d = C.event.special[l.type] || {};
      for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
      if (
        ((l.delegateTarget = this),
        !d.preDispatch || !1 !== d.preDispatch.call(this, l))
      ) {
        for (
          r = C.event.handlers.call(this, l, c), t = 0;
          (o = r[t++]) && !l.isPropagationStopped();

        )
          for (
            l.currentTarget = o.elem, n = 0;
            (s = o.handlers[n++]) && !l.isImmediatePropagationStopped();

          )
            (l.rnamespace &&
              !1 !== s.namespace &&
              !l.rnamespace.test(s.namespace)) ||
              ((l.handleObj = s),
              (l.data = s.data),
              void 0 !==
                (i = (
                  (C.event.special[s.origType] || {}).handle || s.handler
                ).apply(o.elem, a)) &&
                !1 === (l.result = i) &&
                (l.preventDefault(), l.stopPropagation()));
        return d.postDispatch && d.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        o,
        s,
        r,
        a = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (s = [], r = {}, n = 0; n < l; n++)
              void 0 === r[(o = (i = t[n]).selector + " ")] &&
                (r[o] = i.needsContext
                  ? -1 < C(o, this).index(c)
                  : C.find(o, this, null, [c]).length),
                r[o] && s.push(i);
            s.length && a.push({ elem: c, handlers: s });
          }
      return (
        (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(C.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: y(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[C.expando] ? e : new C.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Se),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Z.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (C.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (C.Event = function (e, t) {
      if (!(this instanceof C.Event)) return new C.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Se
              : ke),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && C.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[C.expando] = !0);
    }),
    (C.Event.prototype = {
      constructor: C.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Se),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Se),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Se),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    C.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && xe.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      C.event.addProp
    ),
    C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      C.event.special[e] = {
        setup: function () {
          return Ae(this, e, Ce), !1;
        },
        trigger: function () {
          return Ae(this, e), !0;
        },
        delegateType: t,
      };
    }),
    C.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, o) {
        C.event.special[e] = {
          delegateType: o,
          bindType: o,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              i = e.handleObj;
            return (
              (n && (n === this || C.contains(this, n))) ||
                ((e.type = i.origType),
                (t = i.handler.apply(this, arguments)),
                (e.type = o)),
              t
            );
          },
        };
      }
    ),
    C.fn.extend({
      on: function (e, t, n, i) {
        return $e(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return $e(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            C(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = ke),
          this.each(function () {
            C.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Pe = /<script|<style|<link/i,
    Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function De(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        C(e).children("tbody")[0]) ||
      e
    );
  }
  function je(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function He(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Me(e, t) {
    var n, i, o, s, r, a;
    if (1 === t.nodeType) {
      if (Z.hasData(e) && (a = Z.get(e).events))
        for (o in (Z.remove(t, "handle events"), a))
          for (n = 0, i = a[o].length; n < i; n++) C.event.add(t, o, a[o][n]);
      Q.hasData(e) && ((s = Q.access(e)), (r = C.extend({}, s)), Q.set(t, r));
    }
  }
  function Oe(n, i, o, s) {
    i = g(i);
    var e,
      t,
      r,
      a,
      l,
      c,
      d = 0,
      u = n.length,
      p = u - 1,
      f = i[0],
      h = y(f);
    if (h || (1 < u && "string" == typeof f && !m.checkClone && Ee.test(f)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (i[0] = f.call(this, e, t.html())), Oe(t, i, o, s);
      });
    if (
      u &&
      ((t = (e = be(i, n[0].ownerDocument, !1, n, s)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || s)
    ) {
      for (a = (r = C.map(ve(e, "script"), je)).length; d < u; d++)
        (l = e),
          d !== p &&
            ((l = C.clone(l, !0, !0)), a && C.merge(r, ve(l, "script"))),
          o.call(n[d], l, d);
      if (a)
        for (c = r[r.length - 1].ownerDocument, C.map(r, He), d = 0; d < a; d++)
          (l = r[d]),
            he.test(l.type || "") &&
              !Z.access(l, "globalEval") &&
              C.contains(c, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase()
                ? C._evalUrl &&
                  !l.noModule &&
                  C._evalUrl(
                    l.src,
                    { nonce: l.nonce || l.getAttribute("nonce") },
                    c
                  )
                : x(l.textContent.replace(Le, ""), l, c));
    }
    return n;
  }
  function Ie(e, t, n) {
    for (var i, o = t ? C.filter(t, e) : e, s = 0; null != (i = o[s]); s++)
      n || 1 !== i.nodeType || C.cleanData(ve(i)),
        i.parentNode &&
          (n && oe(i) && me(ve(i, "script")), i.parentNode.removeChild(i));
    return e;
  }
  C.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var i,
        o,
        s,
        r,
        a,
        l,
        c,
        d = e.cloneNode(!0),
        u = oe(e);
      if (
        !(
          m.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          C.isXMLDoc(e)
        )
      )
        for (r = ve(d), i = 0, o = (s = ve(e)).length; i < o; i++)
          (a = s[i]),
            "input" === (c = (l = r[i]).nodeName.toLowerCase()) &&
            pe.test(a.type)
              ? (l.checked = a.checked)
              : ("input" !== c && "textarea" !== c) ||
                (l.defaultValue = a.defaultValue);
      if (t)
        if (n)
          for (s = s || ve(e), r = r || ve(d), i = 0, o = s.length; i < o; i++)
            Me(s[i], r[i]);
        else Me(e, d);
      return (
        0 < (r = ve(d, "script")).length && me(r, !u && ve(e, "script")), d
      );
    },
    cleanData: function (e) {
      for (var t, n, i, o = C.event.special, s = 0; void 0 !== (n = e[s]); s++)
        if (U(n)) {
          if ((t = n[Z.expando])) {
            if (t.events)
              for (i in t.events)
                o[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
            n[Z.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    C.fn.extend({
      detach: function (e) {
        return Ie(this, e, !0);
      },
      remove: function (e) {
        return Ie(this, e);
      },
      text: function (e) {
        return W(
          this,
          function (e) {
            return void 0 === e
              ? C.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Oe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            De(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Oe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = De(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Oe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Oe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (C.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return C.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return W(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Pe.test(e) &&
              !ge[(fe.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = C.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (C.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Oe(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            C.inArray(this, n) < 0 &&
              (C.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    C.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, r) {
        C.fn[e] = function (e) {
          for (var t, n = [], i = C(e), o = i.length - 1, s = 0; s <= o; s++)
            (t = s === o ? this : this.clone(!0)),
              C(i[s])[r](t),
              l.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var qe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Ne = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = S), t.getComputedStyle(e);
    },
    ze = function (e, t, n) {
      var i,
        o,
        s = {};
      for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((i = n.call(e)), t)) e.style[o] = s[o];
      return i;
    },
    Fe = new RegExp(ne.join("|"), "i");
  function Re(e, t, n) {
    var i,
      o,
      s,
      r,
      a = e.style;
    return (
      (n = n || Ne(e)) &&
        ("" !== (r = n.getPropertyValue(t) || n[t]) ||
          oe(e) ||
          (r = C.style(e, t)),
        !m.pixelBoxStyles() &&
          qe.test(r) &&
          Fe.test(t) &&
          ((i = a.width),
          (o = a.minWidth),
          (s = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = r),
          (r = n.width),
          (a.width = i),
          (a.minWidth = o),
          (a.maxWidth = s))),
      void 0 !== r ? r + "" : r
    );
  }
  function We(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (c) {
        (l.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          ie.appendChild(l).appendChild(c);
        var e = S.getComputedStyle(c);
        (n = "1%" !== e.top),
          (a = 12 === t(e.marginLeft)),
          (c.style.right = "60%"),
          (s = 36 === t(e.right)),
          (i = 36 === t(e.width)),
          (c.style.position = "absolute"),
          (o = 12 === t(c.offsetWidth / 3)),
          ie.removeChild(l),
          (c = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      i,
      o,
      s,
      r,
      a,
      l = k.createElement("div"),
      c = k.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (m.clearCloneStyle = "content-box" === c.style.backgroundClip),
      C.extend(m, {
        boxSizingReliable: function () {
          return e(), i;
        },
        pixelBoxStyles: function () {
          return e(), s;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), a;
        },
        scrollboxSize: function () {
          return e(), o;
        },
        reliableTrDimensions: function () {
          var e, t, n, i;
          return (
            null == r &&
              ((e = k.createElement("table")),
              (t = k.createElement("tr")),
              (n = k.createElement("div")),
              (e.style.cssText = "position:absolute;left:-11111px"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              ie.appendChild(e).appendChild(t).appendChild(n),
              (i = S.getComputedStyle(t)),
              (r = 3 < parseInt(i.height)),
              ie.removeChild(e)),
            r
          );
        },
      }));
  })();
  var Be = ["Webkit", "Moz", "ms"],
    Xe = k.createElement("div").style,
    _e = {};
  function Ye(e) {
    return (
      C.cssProps[e] ||
      _e[e] ||
      (e in Xe
        ? e
        : (_e[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = Be.length;
                n--;

              )
                if ((e = Be[n] + t) in Xe) return e;
            })(e) || e))
    );
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Ve = /^--/,
    Ze = { position: "absolute", visibility: "hidden", display: "block" },
    Qe = { letterSpacing: "0", fontWeight: "400" };
  function Ge(e, t, n) {
    var i = te.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function Ke(e, t, n, i, o, s) {
    var r = "width" === t ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; r < 4; r += 2)
      "margin" === n && (l += C.css(e, n + ne[r], !0, o)),
        i
          ? ("content" === n && (l -= C.css(e, "padding" + ne[r], !0, o)),
            "margin" !== n &&
              (l -= C.css(e, "border" + ne[r] + "Width", !0, o)))
          : ((l += C.css(e, "padding" + ne[r], !0, o)),
            "padding" !== n
              ? (l += C.css(e, "border" + ne[r] + "Width", !0, o))
              : (a += C.css(e, "border" + ne[r] + "Width", !0, o)));
    return (
      !i &&
        0 <= s &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - 0.5
            )
          ) || 0),
      l
    );
  }
  function Je(e, t, n) {
    var i = Ne(e),
      o =
        (!m.boxSizingReliable() || n) &&
        "border-box" === C.css(e, "boxSizing", !1, i),
      s = o,
      r = Re(e, t, i),
      a = "offset" + t[0].toUpperCase() + t.slice(1);
    if (qe.test(r)) {
      if (!n) return r;
      r = "auto";
    }
    return (
      ((!m.boxSizingReliable() && o) ||
        (!m.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === r ||
        (!parseFloat(r) && "inline" === C.css(e, "display", !1, i))) &&
        e.getClientRects().length &&
        ((o = "border-box" === C.css(e, "boxSizing", !1, i)),
        (s = a in e) && (r = e[a])),
      (r = parseFloat(r) || 0) +
        Ke(e, t, n || (o ? "border" : "content"), s, i, r) +
        "px"
    );
  }
  function et(e, t, n, i, o) {
    return new et.prototype.init(e, t, n, i, o);
  }
  C.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Re(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          s,
          r,
          a = Y(t),
          l = Ve.test(t),
          c = e.style;
        if (
          (l || (t = Ye(a)), (r = C.cssHooks[t] || C.cssHooks[a]), void 0 === n)
        )
          return r && "get" in r && void 0 !== (o = r.get(e, !1, i)) ? o : c[t];
        "string" == (s = typeof n) &&
          (o = te.exec(n)) &&
          o[1] &&
          ((n = ae(e, t, o)), (s = "number")),
          null != n &&
            n == n &&
            ("number" !== s ||
              l ||
              (n += (o && o[3]) || (C.cssNumber[a] ? "" : "px")),
            m.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (r && "set" in r && void 0 === (n = r.set(e, n, i))) ||
              (l ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var o,
        s,
        r,
        a = Y(t);
      return (
        Ve.test(t) || (t = Ye(a)),
        (r = C.cssHooks[t] || C.cssHooks[a]) &&
          "get" in r &&
          (o = r.get(e, !0, n)),
        void 0 === o && (o = Re(e, t, i)),
        "normal" === o && t in Qe && (o = Qe[t]),
        "" === n || n
          ? ((s = parseFloat(o)), !0 === n || isFinite(s) ? s || 0 : o)
          : o
      );
    },
  }),
    C.each(["height", "width"], function (e, l) {
      C.cssHooks[l] = {
        get: function (e, t, n) {
          if (t)
            return !Ue.test(C.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, l, n)
              : ze(e, Ze, function () {
                  return Je(e, l, n);
                });
        },
        set: function (e, t, n) {
          var i,
            o = Ne(e),
            s = !m.scrollboxSize() && "absolute" === o.position,
            r = (s || n) && "border-box" === C.css(e, "boxSizing", !1, o),
            a = n ? Ke(e, l, n, r, o) : 0;
          return (
            r &&
              s &&
              (a -= Math.ceil(
                e["offset" + l[0].toUpperCase() + l.slice(1)] -
                  parseFloat(o[l]) -
                  Ke(e, l, "border", !1, o) -
                  0.5
              )),
            a &&
              (i = te.exec(t)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[l] = t), (t = C.css(e, l))),
            Ge(0, t, a)
          );
        },
      };
    }),
    (C.cssHooks.marginLeft = We(m.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Re(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              ze(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    C.each({ margin: "", padding: "", border: "Width" }, function (o, s) {
      (C.cssHooks[o + s] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[o + ne[t] + s] = i[t] || i[t - 2] || i[0];
          return n;
        },
      }),
        "margin" !== o && (C.cssHooks[o + s].set = Ge);
    }),
    C.fn.extend({
      css: function (e, t) {
        return W(
          this,
          function (e, t, n) {
            var i,
              o,
              s = {},
              r = 0;
            if (Array.isArray(t)) {
              for (i = Ne(e), o = t.length; r < o; r++)
                s[t[r]] = C.css(e, t[r], !1, i);
              return s;
            }
            return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((C.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, i, o, s) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = o || C.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = s || (C.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t = C.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = C.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          C.fx.step[e.prop]
            ? C.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!C.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : C.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      },
    }),
    (C.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (C.fx = et.prototype.init),
    (C.fx.step = {});
  var tt,
    nt,
    it,
    ot,
    st = /^(?:toggle|show|hide)$/,
    rt = /queueHooks$/;
  function at() {
    nt &&
      (!1 === k.hidden && S.requestAnimationFrame
        ? S.requestAnimationFrame(at)
        : S.setTimeout(at, C.fx.interval),
      C.fx.tick());
  }
  function lt() {
    return (
      S.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function ct(e, t) {
    var n,
      i = 0,
      o = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      o["margin" + (n = ne[i])] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function dt(e, t, n) {
    for (
      var i,
        o = (ut.tweeners[t] || []).concat(ut.tweeners["*"]),
        s = 0,
        r = o.length;
      s < r;
      s++
    )
      if ((i = o[s].call(n, t, e))) return i;
  }
  function ut(s, e, t) {
    var n,
      r,
      i = 0,
      o = ut.prefilters.length,
      a = C.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (r) return !1;
        for (
          var e = tt || lt(),
            t = Math.max(0, c.startTime + c.duration - e),
            n = 1 - (t / c.duration || 0),
            i = 0,
            o = c.tweens.length;
          i < o;
          i++
        )
          c.tweens[i].run(n);
        return (
          a.notifyWith(s, [c, n, t]),
          n < 1 && o
            ? t
            : (o || a.notifyWith(s, [c, 1, 0]), a.resolveWith(s, [c]), !1)
        );
      },
      c = a.promise({
        elem: s,
        props: C.extend({}, e),
        opts: C.extend(!0, { specialEasing: {}, easing: C.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || lt(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = C.Tween(
            s,
            c.opts,
            e,
            t,
            c.opts.specialEasing[e] || c.opts.easing
          );
          return c.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? c.tweens.length : 0;
          if (r) return this;
          for (r = !0; t < n; t++) c.tweens[t].run(1);
          return (
            e
              ? (a.notifyWith(s, [c, 1, 0]), a.resolveWith(s, [c, e]))
              : a.rejectWith(s, [c, e]),
            this
          );
        },
      }),
      d = c.props;
    for (
      (function (e, t) {
        var n, i, o, s, r;
        for (n in e)
          if (
            ((o = t[(i = Y(n))]),
            (s = e[n]),
            Array.isArray(s) && ((o = s[1]), (s = e[n] = s[0])),
            n !== i && ((e[i] = s), delete e[n]),
            (r = C.cssHooks[i]) && ("expand" in r))
          )
            for (n in ((s = r.expand(s)), delete e[i], s))
              (n in e) || ((e[n] = s[n]), (t[n] = o));
          else t[i] = o;
      })(d, c.opts.specialEasing);
      i < o;
      i++
    )
      if ((n = ut.prefilters[i].call(c, s, d, c.opts)))
        return (
          y(n.stop) &&
            (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      C.map(d, dt, c),
      y(c.opts.start) && c.opts.start.call(s, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      C.fx.timer(C.extend(l, { elem: s, anim: c, queue: c.opts.queue })),
      c
    );
  }
  (C.Animation = C.extend(ut, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return ae(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      y(e) ? ((t = e), (e = ["*"])) : (e = e.match(O));
      for (var n, i = 0, o = e.length; i < o; i++)
        (n = e[i]),
          (ut.tweeners[n] = ut.tweeners[n] || []),
          ut.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          o,
          s,
          r,
          a,
          l,
          c,
          d,
          u = "width" in t || "height" in t,
          p = this,
          f = {},
          h = e.style,
          g = e.nodeType && re(e),
          v = Z.get(e, "fxshow");
        for (i in (n.queue ||
          (null == (r = C._queueHooks(e, "fx")).unqueued &&
            ((r.unqueued = 0),
            (a = r.empty.fire),
            (r.empty.fire = function () {
              r.unqueued || a();
            })),
          r.unqueued++,
          p.always(function () {
            p.always(function () {
              r.unqueued--, C.queue(e, "fx").length || r.empty.fire();
            });
          })),
        t))
          if (((o = t[i]), st.test(o))) {
            if (
              (delete t[i],
              (s = s || "toggle" === o),
              o === (g ? "hide" : "show"))
            ) {
              if ("show" !== o || !v || void 0 === v[i]) continue;
              g = !0;
            }
            f[i] = (v && v[i]) || C.style(e, i);
          }
        if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(f))
          for (i in (u &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (c = v && v.display) && (c = Z.get(e, "display")),
            "none" === (d = C.css(e, "display")) &&
              (c
                ? (d = c)
                : (ce([e], !0),
                  (c = e.style.display || c),
                  (d = C.css(e, "display")),
                  ce([e]))),
            ("inline" === d || ("inline-block" === d && null != c)) &&
              "none" === C.css(e, "float") &&
              (l ||
                (p.done(function () {
                  h.display = c;
                }),
                null == c && ((d = h.display), (c = "none" === d ? "" : d))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (l = !1),
          f))
            l ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Z.access(e, "fxshow", { display: c })),
              s && (v.hidden = !g),
              g && ce([e], !0),
              p.done(function () {
                for (i in (g || ce([e]), Z.remove(e, "fxshow"), f))
                  C.style(e, i, f[i]);
              })),
              (l = dt(g ? v[i] : 0, i, p)),
              i in v ||
                ((v[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ut.prefilters.unshift(e) : ut.prefilters.push(e);
    },
  })),
    (C.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? C.extend({}, e)
          : {
              complete: n || (!n && t) || (y(e) && e),
              duration: e,
              easing: (n && t) || (t && !y(t) && t),
            };
      return (
        C.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in C.fx.speeds
              ? (i.duration = C.fx.speeds[i.duration])
              : (i.duration = C.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          y(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue);
        }),
        i
      );
    }),
    C.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(re)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (t, e, n, i) {
        var o = C.isEmptyObject(t),
          s = C.speed(e, n, i),
          r = function () {
            var e = ut(this, C.extend({}, t), s);
            (o || Z.get(this, "finish")) && e.stop(!0);
          };
        return (
          (r.finish = r),
          o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        );
      },
      stop: function (o, e, s) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(s);
        };
        return (
          "string" != typeof o && ((s = e), (e = o), (o = void 0)),
          e && this.queue(o || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != o && o + "queueHooks",
              n = C.timers,
              i = Z.get(this);
            if (t) i[t] && i[t].stop && r(i[t]);
            else for (t in i) i[t] && i[t].stop && rt.test(t) && r(i[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != o && n[t].queue !== o) ||
                (n[t].anim.stop(s), (e = !1), n.splice(t, 1));
            (!e && s) || C.dequeue(this, o);
          })
        );
      },
      finish: function (r) {
        return (
          !1 !== r && (r = r || "fx"),
          this.each(function () {
            var e,
              t = Z.get(this),
              n = t[r + "queue"],
              i = t[r + "queueHooks"],
              o = C.timers,
              s = n ? n.length : 0;
            for (
              t.finish = !0,
                C.queue(this, r, []),
                i && i.stop && i.stop.call(this, !0),
                e = o.length;
              e--;

            )
              o[e].elem === this &&
                o[e].queue === r &&
                (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; e < s; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    C.each(["toggle", "show", "hide"], function (e, i) {
      var o = C.fn[i];
      C.fn[i] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? o.apply(this, arguments)
          : this.animate(ct(i, !0), e, t, n);
      };
    }),
    C.each(
      {
        slideDown: ct("show"),
        slideUp: ct("hide"),
        slideToggle: ct("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, i) {
        C.fn[e] = function (e, t, n) {
          return this.animate(i, e, t, n);
        };
      }
    ),
    (C.timers = []),
    (C.fx.tick = function () {
      var e,
        t = 0,
        n = C.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || C.fx.stop(), (tt = void 0);
    }),
    (C.fx.timer = function (e) {
      C.timers.push(e), C.fx.start();
    }),
    (C.fx.interval = 13),
    (C.fx.start = function () {
      nt || ((nt = !0), at());
    }),
    (C.fx.stop = function () {
      nt = null;
    }),
    (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (C.fn.delay = function (i, e) {
      return (
        (i = (C.fx && C.fx.speeds[i]) || i),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = S.setTimeout(e, i);
          t.stop = function () {
            S.clearTimeout(n);
          };
        })
      );
    }),
    (it = k.createElement("input")),
    (ot = k.createElement("select").appendChild(k.createElement("option"))),
    (it.type = "checkbox"),
    (m.checkOn = "" !== it.value),
    (m.optSelected = ot.selected),
    ((it = k.createElement("input")).value = "t"),
    (it.type = "radio"),
    (m.radioValue = "t" === it.value);
  var pt,
    ft = C.expr.attrHandle;
  C.fn.extend({
    attr: function (e, t) {
      return W(this, C.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        C.removeAttr(this, e);
      });
    },
  }),
    C.extend({
      attr: function (e, t, n) {
        var i,
          o,
          s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s)
          return void 0 === e.getAttribute
            ? C.prop(e, t, n)
            : ((1 === s && C.isXMLDoc(e)) ||
                (o =
                  C.attrHooks[t.toLowerCase()] ||
                  (C.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void C.removeAttr(e, t)
                  : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : o && "get" in o && null !== (i = o.get(e, t))
                ? i
                : null == (i = C.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!m.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          o = t && t.match(O);
        if (o && 1 === e.nodeType) for (; (n = o[i++]); ) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var r = ft[t] || C.find.attr;
      ft[t] = function (e, t, n) {
        var i,
          o,
          s = t.toLowerCase();
        return (
          n ||
            ((o = ft[s]),
            (ft[s] = i),
            (i = null != r(e, t, n) ? s : null),
            (ft[s] = o)),
          i
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function vt(e) {
    return (e.match(O) || []).join(" ");
  }
  function mt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function yt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(O)) || [];
  }
  C.fn.extend({
    prop: function (e, t) {
      return W(this, C.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[C.propFix[e] || e];
      });
    },
  }),
    C.extend({
      prop: function (e, t, n) {
        var i,
          o,
          s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s)
          return (
            (1 === s && C.isXMLDoc(e)) ||
              ((t = C.propFix[t] || t), (o = C.propHooks[t])),
            void 0 !== n
              ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                ? i
                : (e[t] = n)
              : o && "get" in o && null !== (i = o.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = C.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    m.optSelected ||
      (C.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    C.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        C.propFix[this.toLowerCase()] = this;
      }
    ),
    C.fn.extend({
      addClass: function (t) {
        var e,
          n,
          i,
          o,
          s,
          r,
          a,
          l = 0;
        if (y(t))
          return this.each(function (e) {
            C(this).addClass(t.call(this, e, mt(this)));
          });
        if ((e = yt(t)).length)
          for (; (n = this[l++]); )
            if (((o = mt(n)), (i = 1 === n.nodeType && " " + vt(o) + " "))) {
              for (r = 0; (s = e[r++]); )
                i.indexOf(" " + s + " ") < 0 && (i += s + " ");
              o !== (a = vt(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          i,
          o,
          s,
          r,
          a,
          l = 0;
        if (y(t))
          return this.each(function (e) {
            C(this).removeClass(t.call(this, e, mt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = yt(t)).length)
          for (; (n = this[l++]); )
            if (((o = mt(n)), (i = 1 === n.nodeType && " " + vt(o) + " "))) {
              for (r = 0; (s = e[r++]); )
                for (; -1 < i.indexOf(" " + s + " "); )
                  i = i.replace(" " + s + " ", " ");
              o !== (a = vt(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (o, t) {
        var s = typeof o,
          r = "string" === s || Array.isArray(o);
        return "boolean" == typeof t && r
          ? t
            ? this.addClass(o)
            : this.removeClass(o)
          : y(o)
          ? this.each(function (e) {
              C(this).toggleClass(o.call(this, e, mt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, i;
              if (r)
                for (t = 0, n = C(this), i = yt(o); (e = i[t++]); )
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              else
                (void 0 !== o && "boolean" !== s) ||
                  ((e = mt(this)) && Z.set(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      e || !1 === o ? "" : Z.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]); )
          if (1 === n.nodeType && -1 < (" " + vt(mt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var bt = /\r/g;
  C.fn.extend({
    val: function (n) {
      var i,
        e,
        o,
        t = this[0];
      return arguments.length
        ? ((o = y(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = o ? n.call(this, e, C(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = C.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((i =
                C.valHooks[this.type] ||
                C.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in i &&
                void 0 !== i.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in i &&
          void 0 !== (e = i.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(bt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    C.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = C.find.attr(e, "value");
            return null != t ? t : vt(C.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              o = e.options,
              s = e.selectedIndex,
              r = "select-one" === e.type,
              a = r ? null : [],
              l = r ? s + 1 : o.length;
            for (i = s < 0 ? l : r ? s : 0; i < l; i++)
              if (
                ((n = o[i]).selected || i === s) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = C(n).val()), r)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, i, o = e.options, s = C.makeArray(t), r = o.length;
              r--;

            )
              ((i = o[r]).selected =
                -1 < C.inArray(C.valHooks.option.get(i), s)) && (n = !0);
            return n || (e.selectedIndex = -1), s;
          },
        },
      },
    }),
    C.each(["radio", "checkbox"], function () {
      (C.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < C.inArray(C(e).val(), t));
        },
      }),
        m.checkOn ||
          (C.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (m.focusin = "onfocusin" in S);
  var xt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation();
    };
  C.extend(C.event, {
    trigger: function (e, t, n, i) {
      var o,
        s,
        r,
        a,
        l,
        c,
        d,
        u,
        p = [n || k],
        f = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((s = u = r = n = n || k),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !xt.test(f + C.event.triggered) &&
          (-1 < f.indexOf(".") && ((f = (h = f.split(".")).shift()), h.sort()),
          (l = f.indexOf(":") < 0 && "on" + f),
          ((e = e[C.expando]
            ? e
            : new C.Event(f, "object" == typeof e && e)).isTrigger = i ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : C.makeArray(t, [e])),
          (d = C.event.special[f] || {}),
          i || !d.trigger || !1 !== d.trigger.apply(n, t)))
      ) {
        if (!i && !d.noBubble && !b(n)) {
          for (
            a = d.delegateType || f, xt.test(a + f) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            p.push(s), (r = s);
          r === (n.ownerDocument || k) &&
            p.push(r.defaultView || r.parentWindow || S);
        }
        for (o = 0; (s = p[o++]) && !e.isPropagationStopped(); )
          (u = s),
            (e.type = 1 < o ? a : d.bindType || f),
            (c =
              (Z.get(s, "events") || Object.create(null))[e.type] &&
              Z.get(s, "handle")) && c.apply(s, t),
            (c = l && s[l]) &&
              c.apply &&
              U(s) &&
              ((e.result = c.apply(s, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = f),
          i ||
            e.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(p.pop(), t)) ||
            !U(n) ||
            (l &&
              y(n[f]) &&
              !b(n) &&
              ((r = n[l]) && (n[l] = null),
              (C.event.triggered = f),
              e.isPropagationStopped() && u.addEventListener(f, wt),
              n[f](),
              e.isPropagationStopped() && u.removeEventListener(f, wt),
              (C.event.triggered = void 0),
              r && (n[l] = r))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
      C.event.trigger(i, null, t);
    },
  }),
    C.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          C.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return C.event.trigger(e, t, n, !0);
      },
    }),
    m.focusin ||
      C.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
        var o = function (e) {
          C.event.simulate(i, e.target, C.event.fix(e));
        };
        C.event.special[i] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Z.access(e, i);
            t || e.addEventListener(n, o, !0), Z.access(e, i, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Z.access(e, i) - 1;
            t
              ? Z.access(e, i, t)
              : (e.removeEventListener(n, o, !0), Z.remove(e, i));
          },
        };
      });
  var Tt = S.location,
    St = { guid: Date.now() },
    kt = /\?/;
  C.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new S.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        C.error("Invalid XML: " + e),
      t
    );
  };
  var Ct = /\[\]$/,
    $t = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Pt = /^(?:input|select|textarea|keygen)/i;
  function Et(n, e, i, o) {
    var t;
    if (Array.isArray(e))
      C.each(e, function (e, t) {
        i || Ct.test(n)
          ? o(n, t)
          : Et(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              i,
              o
            );
      });
    else if (i || "object" !== w(e)) o(n, e);
    else for (t in e) Et(n + "[" + t + "]", e[t], i, o);
  }
  (C.param = function (e, t) {
    var n,
      i = [],
      o = function (e, t) {
        var n = y(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
      C.each(e, function () {
        o(this.name, this.value);
      });
    else for (n in e) Et(n, e[n], t, o);
    return i.join("&");
  }),
    C.fn.extend({
      serialize: function () {
        return C.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = C.prop(this, "elements");
          return e ? C.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !C(this).is(":disabled") &&
              Pt.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = C(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? C.map(n, function (e) {
                  return { name: t.name, value: e.replace($t, "\r\n") };
                })
              : { name: t.name, value: n.replace($t, "\r\n") };
          })
          .get();
      },
    });
  var Lt = /%20/g,
    Dt = /#.*$/,
    jt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Mt = /^(?:GET|HEAD)$/,
    Ot = /^\/\//,
    It = {},
    qt = {},
    Nt = "*/".concat("*"),
    zt = k.createElement("a");
  function Ft(s) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        i = 0,
        o = e.toLowerCase().match(O) || [];
      if (y(t))
        for (; (n = o[i++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (s[n] = s[n] || []).unshift(t))
            : (s[n] = s[n] || []).push(t);
    };
  }
  function Rt(t, o, s, r) {
    var a = {},
      l = t === qt;
    function c(e) {
      var i;
      return (
        (a[e] = !0),
        C.each(t[e] || [], function (e, t) {
          var n = t(o, s, r);
          return "string" != typeof n || l || a[n]
            ? l
              ? !(i = n)
              : void 0
            : (o.dataTypes.unshift(n), c(n), !1);
        }),
        i
      );
    }
    return c(o.dataTypes[0]) || (!a["*"] && c("*"));
  }
  function Wt(e, t) {
    var n,
      i,
      o = C.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    return i && C.extend(!0, e, i), e;
  }
  (zt.href = Tt.href),
    C.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
          Tt.protocol
        ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Nt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": C.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Wt(Wt(e, C.ajaxSettings), t) : Wt(C.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(It),
      ajaxTransport: Ft(qt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var d,
          u,
          p,
          n,
          f,
          i,
          h,
          g,
          o,
          s,
          v = C.ajaxSetup({}, t),
          m = v.context || v,
          y = v.context && (m.nodeType || m.jquery) ? C(m) : C.event,
          b = C.Deferred(),
          x = C.Callbacks("once memory"),
          w = v.statusCode || {},
          r = {},
          a = {},
          l = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n)
                  for (n = {}; (t = Ht.exec(p)); )
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = a[e.toLowerCase()] = a[e.toLowerCase()] || e),
                  (r[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || l;
              return d && d.abort(t), c(0, t), this;
            },
          };
        if (
          (b.promise(T),
          (v.url = ((e || v.url || Tt.href) + "").replace(
            Ot,
            Tt.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(O) || [""]),
          null == v.crossDomain)
        ) {
          i = k.createElement("a");
          try {
            (i.href = v.url),
              (i.href = i.href),
              (v.crossDomain =
                zt.protocol + "//" + zt.host != i.protocol + "//" + i.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = C.param(v.data, v.traditional)),
          Rt(It, v, t, T),
          h)
        )
          return T;
        for (o in ((g = C.event && v.global) &&
          0 == C.active++ &&
          C.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Mt.test(v.type)),
        (u = v.url.replace(Dt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Lt, "+"))
          : ((s = v.url.slice(u.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((u += (kt.test(u) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((u = u.replace(jt, "$1")),
              (s = (kt.test(u) ? "&" : "?") + "_=" + St.guid++ + s)),
            (v.url = u + s)),
        v.ifModified &&
          (C.lastModified[u] &&
            T.setRequestHeader("If-Modified-Since", C.lastModified[u]),
          C.etag[u] && T.setRequestHeader("If-None-Match", C.etag[u])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + Nt + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(o, v.headers[o]);
        if (v.beforeSend && (!1 === v.beforeSend.call(m, T, v) || h))
          return T.abort();
        if (
          ((l = "abort"),
          x.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (d = Rt(qt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && y.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (f = S.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), d.send(r, c);
          } catch (e) {
            if (h) throw e;
            c(-1, e);
          }
        } else c(-1, "No Transport");
        function c(e, t, n, i) {
          var o,
            s,
            r,
            a,
            l,
            c = t;
          h ||
            ((h = !0),
            f && S.clearTimeout(f),
            (d = void 0),
            (p = i || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (o = (200 <= e && e < 300) || 304 === e),
            n &&
              (a = (function (e, t, n) {
                for (
                  var i, o, s, r, a = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                  for (o in a)
                    if (a[o] && a[o].test(i)) {
                      l.unshift(o);
                      break;
                    }
                if (l[0] in n) s = l[0];
                else {
                  for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                      s = o;
                      break;
                    }
                    r || (r = o);
                  }
                  s = s || r;
                }
                if (s) return s !== l[0] && l.unshift(s), n[s];
              })(v, T, n)),
            !o &&
              -1 < C.inArray("script", v.dataTypes) &&
              (v.converters["text script"] = function () {}),
            (a = (function (e, t, n, i) {
              var o,
                s,
                r,
                a,
                l,
                c = {},
                d = e.dataTypes.slice();
              if (d[1])
                for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
              for (s = d.shift(); s; )
                if (
                  (e.responseFields[s] && (n[e.responseFields[s]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = s),
                  (s = d.shift()))
                )
                  if ("*" === s) s = l;
                  else if ("*" !== l && l !== s) {
                    if (!(r = c[l + " " + s] || c["* " + s]))
                      for (o in c)
                        if (
                          (a = o.split(" "))[1] === s &&
                          (r = c[l + " " + a[0]] || c["* " + a[0]])
                        ) {
                          !0 === r
                            ? (r = c[o])
                            : !0 !== c[o] && ((s = a[0]), d.unshift(a[1]));
                          break;
                        }
                    if (!0 !== r)
                      if (r && e.throws) t = r(t);
                      else
                        try {
                          t = r(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: r
                              ? e
                              : "No conversion from " + l + " to " + s,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, a, T, o)),
            o
              ? (v.ifModified &&
                  ((l = T.getResponseHeader("Last-Modified")) &&
                    (C.lastModified[u] = l),
                  (l = T.getResponseHeader("etag")) && (C.etag[u] = l)),
                204 === e || "HEAD" === v.type
                  ? (c = "nocontent")
                  : 304 === e
                  ? (c = "notmodified")
                  : ((c = a.state), (s = a.data), (o = !(r = a.error))))
              : ((r = c), (!e && c) || ((c = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || c) + ""),
            o ? b.resolveWith(m, [s, c, T]) : b.rejectWith(m, [T, c, r]),
            T.statusCode(w),
            (w = void 0),
            g && y.trigger(o ? "ajaxSuccess" : "ajaxError", [T, v, o ? s : r]),
            x.fireWith(m, [T, c]),
            g &&
              (y.trigger("ajaxComplete", [T, v]),
              --C.active || C.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return C.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return C.get(e, void 0, t, "script");
      },
    }),
    C.each(["get", "post"], function (e, o) {
      C[o] = function (e, t, n, i) {
        return (
          y(t) && ((i = i || n), (n = t), (t = void 0)),
          C.ajax(
            C.extend(
              { url: e, type: o, dataType: i, data: t, success: n },
              C.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    C.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (C._evalUrl = function (e, t, n) {
      return C.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          C.globalEval(e, t, n);
        },
      });
    }),
    C.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (y(e) && (e = e.call(this[0])),
            (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return y(n)
          ? this.each(function (e) {
              C(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = C(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = y(t);
        return this.each(function (e) {
          C(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              C(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (C.expr.pseudos.hidden = function (e) {
      return !C.expr.pseudos.visible(e);
    }),
    (C.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (C.ajaxSettings.xhr = function () {
      try {
        return new S.XMLHttpRequest();
      } catch (e) {}
    });
  var Bt = { 0: 200, 1223: 204 },
    Xt = C.ajaxSettings.xhr();
  (m.cors = !!Xt && "withCredentials" in Xt),
    (m.ajax = Xt = !!Xt),
    C.ajaxTransport(function (o) {
      var s, r;
      if (m.cors || (Xt && !o.crossDomain))
        return {
          send: function (e, t) {
            var n,
              i = o.xhr();
            if (
              (i.open(o.type, o.url, o.async, o.username, o.password),
              o.xhrFields)
            )
              for (n in o.xhrFields) i[n] = o.xhrFields[n];
            for (n in (o.mimeType &&
              i.overrideMimeType &&
              i.overrideMimeType(o.mimeType),
            o.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              i.setRequestHeader(n, e[n]);
            (s = function (e) {
              return function () {
                s &&
                  ((s = r = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null),
                  "abort" === e
                    ? i.abort()
                    : "error" === e
                    ? "number" != typeof i.status
                      ? t(0, "error")
                      : t(i.status, i.statusText)
                    : t(
                        Bt[i.status] || i.status,
                        i.statusText,
                        "text" !== (i.responseType || "text") ||
                          "string" != typeof i.responseText
                          ? { binary: i.response }
                          : { text: i.responseText },
                        i.getAllResponseHeaders()
                      ));
              };
            }),
              (i.onload = s()),
              (r = i.onerror = i.ontimeout = s("error")),
              void 0 !== i.onabort
                ? (i.onabort = r)
                : (i.onreadystatechange = function () {
                    4 === i.readyState &&
                      S.setTimeout(function () {
                        s && r();
                      });
                  }),
              (s = s("abort"));
            try {
              i.send((o.hasContent && o.data) || null);
            } catch (e) {
              if (s) throw e;
            }
          },
          abort: function () {
            s && s();
          },
        };
    }),
    C.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    C.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return C.globalEval(e), e;
        },
      },
    }),
    C.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    C.ajaxTransport("script", function (n) {
      var i, o;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (i = C("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (o = function (e) {
                  i.remove(),
                    (o = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              k.head.appendChild(i[0]);
          },
          abort: function () {
            o && o();
          },
        };
    });
  var _t,
    Yt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  C.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Yt.pop() || C.expando + "_" + St.guid++;
      return (this[e] = !0), e;
    },
  }),
    C.ajaxPrefilter("json jsonp", function (e, t, n) {
      var i,
        o,
        s,
        r =
          !1 !== e.jsonp &&
          (Ut.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ut.test(e.data) &&
              "data");
      if (r || "jsonp" === e.dataTypes[0])
        return (
          (i = e.jsonpCallback = y(e.jsonpCallback)
            ? e.jsonpCallback()
            : e.jsonpCallback),
          r
            ? (e[r] = e[r].replace(Ut, "$1" + i))
            : !1 !== e.jsonp &&
              (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
          (e.converters["script json"] = function () {
            return s || C.error(i + " was not called"), s[0];
          }),
          (e.dataTypes[0] = "json"),
          (o = S[i]),
          (S[i] = function () {
            s = arguments;
          }),
          n.always(function () {
            void 0 === o ? C(S).removeProp(i) : (S[i] = o),
              e[i] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(i)),
              s && y(o) && o(s[0]),
              (s = o = void 0);
          }),
          "script"
        );
    }),
    (m.createHTMLDocument =
      (((_t = k.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === _t.childNodes.length)),
    (C.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (m.createHTMLDocument
              ? (((i = (t = k.implementation.createHTMLDocument(
                  ""
                )).createElement("base")).href = k.location.href),
                t.head.appendChild(i))
              : (t = k)),
          (s = !n && []),
          (o = P.exec(e))
            ? [t.createElement(o[1])]
            : ((o = be([e], t, s)),
              s && s.length && C(s).remove(),
              C.merge([], o.childNodes)));
      var i, o, s;
    }),
    (C.fn.load = function (e, t, n) {
      var i,
        o,
        s,
        r = this,
        a = e.indexOf(" ");
      return (
        -1 < a && ((i = vt(e.slice(a))), (e = e.slice(0, a))),
        y(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (o = "POST"),
        0 < r.length &&
          C.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
            .done(function (e) {
              (s = arguments),
                r.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  r.each(function () {
                    n.apply(this, s || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (C.expr.pseudos.animated = function (t) {
      return C.grep(C.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (C.offset = {
      setOffset: function (e, t, n) {
        var i,
          o,
          s,
          r,
          a,
          l,
          c = C.css(e, "position"),
          d = C(e),
          u = {};
        "static" === c && (e.style.position = "relative"),
          (a = d.offset()),
          (s = C.css(e, "top")),
          (l = C.css(e, "left")),
          ("absolute" === c || "fixed" === c) && -1 < (s + l).indexOf("auto")
            ? ((r = (i = d.position()).top), (o = i.left))
            : ((r = parseFloat(s) || 0), (o = parseFloat(l) || 0)),
          y(t) && (t = t.call(e, n, C.extend({}, a))),
          null != t.top && (u.top = t.top - a.top + r),
          null != t.left && (u.left = t.left - a.left + o),
          "using" in t
            ? t.using.call(e, u)
            : ("number" == typeof u.top && (u.top += "px"),
              "number" == typeof u.left && (u.left += "px"),
              d.css(u));
      },
    }),
    C.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                C.offset.setOffset(this, t, e);
              });
        var e,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? ((e = i.getBoundingClientRect()),
              (n = i.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            o = { top: 0, left: 0 };
          if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === C.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0)),
              (o.left += C.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - o.top - C.css(i, "marginTop", !0),
            left: t.left - o.left - C.css(i, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === C.css(e, "position");

          )
            e = e.offsetParent;
          return e || ie;
        });
      },
    }),
    C.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (
      t,
      o
    ) {
      var s = "pageYOffset" === o;
      C.fn[t] = function (e) {
        return W(
          this,
          function (e, t, n) {
            var i;
            if (
              (b(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
              void 0 === n)
            )
              return i ? i[o] : e[t];
            i
              ? i.scrollTo(s ? i.pageXOffset : n, s ? n : i.pageYOffset)
              : (e[t] = n);
          },
          t,
          e,
          arguments.length
        );
      };
    }),
    C.each(["top", "left"], function (e, n) {
      C.cssHooks[n] = We(m.pixelPosition, function (e, t) {
        if (t)
          return (t = Re(e, n)), qe.test(t) ? C(e).position()[n] + "px" : t;
      });
    }),
    C.each({ Height: "height", Width: "width" }, function (r, a) {
      C.each({ padding: "inner" + r, content: a, "": "outer" + r }, function (
        i,
        s
      ) {
        C.fn[s] = function (e, t) {
          var n = arguments.length && (i || "boolean" != typeof e),
            o = i || (!0 === e || !0 === t ? "margin" : "border");
          return W(
            this,
            function (e, t, n) {
              var i;
              return b(e)
                ? 0 === s.indexOf("outer")
                  ? e["inner" + r]
                  : e.document.documentElement["client" + r]
                : 9 === e.nodeType
                ? ((i = e.documentElement),
                  Math.max(
                    e.body["scroll" + r],
                    i["scroll" + r],
                    e.body["offset" + r],
                    i["offset" + r],
                    i["client" + r]
                  ))
                : void 0 === n
                ? C.css(e, t, o)
                : C.style(e, t, n, o);
            },
            a,
            n ? e : void 0,
            n
          );
        };
      });
    }),
    C.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        C.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    C.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    C.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        C.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (C.proxy = function (e, t) {
    var n, i, o;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
      return (
        (i = a.call(arguments, 2)),
        ((o = function () {
          return e.apply(t || this, i.concat(a.call(arguments)));
        }).guid = e.guid = e.guid || C.guid++),
        o
      );
  }),
    (C.holdReady = function (e) {
      e ? C.readyWait++ : C.ready(!0);
    }),
    (C.isArray = Array.isArray),
    (C.parseJSON = JSON.parse),
    (C.nodeName = A),
    (C.isFunction = y),
    (C.isWindow = b),
    (C.camelCase = Y),
    (C.type = w),
    (C.now = Date.now),
    (C.isNumeric = function (e) {
      var t = C.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (C.trim = function (e) {
      return null == e ? "" : (e + "").replace(Vt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return C;
      });
  var Zt = S.jQuery,
    Qt = S.$;
  return (
    (C.noConflict = function (e) {
      return S.$ === C && (S.$ = Qt), e && S.jQuery === C && (S.jQuery = Zt), C;
    }),
    void 0 === e && (S.jQuery = S.$ = C),
    C
  );
}),
  (function (e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "undefined" != typeof exports
      ? (module.exports = e(require("jquery")))
      : e(jQuery);
  })(function (c) {
    "use strict";
    var o,
      r = window.Slick || {};
    (((o = 0),
    (r = function (e, t) {
      var n,
        i = this;
      (i.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: c(e),
        appendDots: c(e),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return c('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (i.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        c.extend(i, i.initials),
        (i.activeBreakpoint = null),
        (i.animType = null),
        (i.animProp = null),
        (i.breakpoints = []),
        (i.breakpointSettings = []),
        (i.cssTransitions = !1),
        (i.focussed = !1),
        (i.interrupted = !1),
        (i.hidden = "hidden"),
        (i.paused = !0),
        (i.positionProp = null),
        (i.respondTo = null),
        (i.rowCount = 1),
        (i.shouldClick = !0),
        (i.$slider = c(e)),
        (i.$slidesCache = null),
        (i.transformType = null),
        (i.transitionType = null),
        (i.visibilityChange = "visibilitychange"),
        (i.windowWidth = 0),
        (i.windowTimer = null),
        (n = c(e).data("slick") || {}),
        (i.options = c.extend({}, i.defaults, t, n)),
        (i.currentSlide = i.options.initialSlide),
        (i.originalSettings = i.options),
        void 0 !== document.mozHidden
          ? ((i.hidden = "mozHidden"),
            (i.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((i.hidden = "webkitHidden"),
            (i.visibilityChange = "webkitvisibilitychange")),
        (i.autoPlay = c.proxy(i.autoPlay, i)),
        (i.autoPlayClear = c.proxy(i.autoPlayClear, i)),
        (i.autoPlayIterator = c.proxy(i.autoPlayIterator, i)),
        (i.changeSlide = c.proxy(i.changeSlide, i)),
        (i.clickHandler = c.proxy(i.clickHandler, i)),
        (i.selectHandler = c.proxy(i.selectHandler, i)),
        (i.setPosition = c.proxy(i.setPosition, i)),
        (i.swipeHandler = c.proxy(i.swipeHandler, i)),
        (i.dragHandler = c.proxy(i.dragHandler, i)),
        (i.keyHandler = c.proxy(i.keyHandler, i)),
        (i.instanceUid = o++),
        (i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        i.registerBreakpoints(),
        i.init(!0);
    })).prototype.activateADA = function () {
      this.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
      (r.prototype.addSlide = r.prototype.slickAdd = function (e, t, n) {
        var i = this;
        if ("boolean" == typeof t) (n = t), (t = null);
        else if (t < 0 || t >= i.slideCount) return !1;
        i.unload(),
          "number" == typeof t
            ? 0 === t && 0 === i.$slides.length
              ? c(e).appendTo(i.$slideTrack)
              : n
              ? c(e).insertBefore(i.$slides.eq(t))
              : c(e).insertAfter(i.$slides.eq(t))
            : !0 === n
            ? c(e).prependTo(i.$slideTrack)
            : c(e).appendTo(i.$slideTrack),
          (i.$slides = i.$slideTrack.children(this.options.slide)),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slideTrack.append(i.$slides),
          i.$slides.each(function (e, t) {
            c(t).attr("data-slick-index", e);
          }),
          (i.$slidesCache = i.$slides),
          i.reinit();
      }),
      (r.prototype.animateHeight = function () {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate({ height: t }, e.options.speed);
        }
      }),
      (r.prototype.animateSlide = function (e, t) {
        var n = {},
          i = this;
        i.animateHeight(),
          !0 === i.options.rtl && !1 === i.options.vertical && (e = -e),
          !1 === i.transformsEnabled
            ? !1 === i.options.vertical
              ? i.$slideTrack.animate(
                  { left: e },
                  i.options.speed,
                  i.options.easing,
                  t
                )
              : i.$slideTrack.animate(
                  { top: e },
                  i.options.speed,
                  i.options.easing,
                  t
                )
            : !1 === i.cssTransitions
            ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft),
              c({ animStart: i.currentLeft }).animate(
                { animStart: e },
                {
                  duration: i.options.speed,
                  easing: i.options.easing,
                  step: function (e) {
                    (e = Math.ceil(e)),
                      !1 === i.options.vertical
                        ? (n[i.animType] = "translate(" + e + "px, 0px)")
                        : (n[i.animType] = "translate(0px," + e + "px)"),
                      i.$slideTrack.css(n);
                  },
                  complete: function () {
                    t && t.call();
                  },
                }
              ))
            : (i.applyTransition(),
              (e = Math.ceil(e)),
              !1 === i.options.vertical
                ? (n[i.animType] = "translate3d(" + e + "px, 0px, 0px)")
                : (n[i.animType] = "translate3d(0px," + e + "px, 0px)"),
              i.$slideTrack.css(n),
              t &&
                setTimeout(function () {
                  i.disableTransition(), t.call();
                }, i.options.speed));
      }),
      (r.prototype.getNavTarget = function () {
        var e = this.options.asNavFor;
        return e && null !== e && (e = c(e).not(this.$slider)), e;
      }),
      (r.prototype.asNavFor = function (t) {
        var e = this.getNavTarget();
        null !== e &&
          "object" == typeof e &&
          e.each(function () {
            var e = c(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0);
          });
      }),
      (r.prototype.applyTransition = function (e) {
        var t = this,
          n = {};
        !1 === t.options.fade
          ? (n[t.transitionType] =
              t.transformType +
              " " +
              t.options.speed +
              "ms " +
              t.options.cssEase)
          : (n[t.transitionType] =
              "opacity " + t.options.speed + "ms " + t.options.cssEase),
          !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (r.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(),
          e.slideCount > e.options.slidesToShow &&
            (e.autoPlayTimer = setInterval(
              e.autoPlayIterator,
              e.options.autoplaySpeed
            ));
      }),
      (r.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (r.prototype.autoPlayIterator = function () {
        var e = this,
          t = e.currentSlide + e.options.slidesToScroll;
        e.paused ||
          e.interrupted ||
          e.focussed ||
          (!1 === e.options.infinite &&
            (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
              ? (e.direction = 0)
              : 0 === e.direction &&
                ((t = e.currentSlide - e.options.slidesToScroll),
                e.currentSlide - 1 == 0 && (e.direction = 1))),
          e.slideHandler(t));
      }),
      (r.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows &&
          ((e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow")),
          (e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow")),
          e.slideCount > e.options.slidesToShow
            ? (e.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              e.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              e.htmlExpr.test(e.options.prevArrow) &&
                e.$prevArrow.prependTo(e.options.appendArrows),
              e.htmlExpr.test(e.options.nextArrow) &&
                e.$nextArrow.appendTo(e.options.appendArrows),
              !0 !== e.options.infinite &&
                e.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : e.$prevArrow
                .add(e.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (r.prototype.buildDots = function () {
        var e,
          t,
          n = this;
        if (!0 === n.options.dots) {
          for (
            n.$slider.addClass("slick-dotted"),
              t = c("<ul />").addClass(n.options.dotsClass),
              e = 0;
            e <= n.getDotCount();
            e += 1
          )
            t.append(
              c("<li />").append(n.options.customPaging.call(this, n, e))
            );
          (n.$dots = t.appendTo(n.options.appendDots)),
            n.$dots.find("li").first().addClass("slick-active");
        }
      }),
      (r.prototype.buildOut = function () {
        var e = this;
        (e.$slides = e.$slider
          .children(e.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (e.slideCount = e.$slides.length),
          e.$slides.each(function (e, t) {
            c(t)
              .attr("data-slick-index", e)
              .data("originalStyling", c(t).attr("style") || "");
          }),
          e.$slider.addClass("slick-slider"),
          (e.$slideTrack =
            0 === e.slideCount
              ? c('<div class="slick-track"/>').appendTo(e.$slider)
              : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          e.$slideTrack.css("opacity", 0),
          (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
            (e.options.slidesToScroll = 1),
          c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
          e.setupInfinite(),
          e.buildArrows(),
          e.buildDots(),
          e.updateDots(),
          e.setSlideClasses(
            "number" == typeof e.currentSlide ? e.currentSlide : 0
          ),
          !0 === e.options.draggable && e.$list.addClass("draggable");
      }),
      (r.prototype.buildRows = function () {
        var e,
          t,
          n,
          i,
          o,
          s,
          r,
          a = this;
        if (
          ((i = document.createDocumentFragment()),
          (s = a.$slider.children()),
          1 < a.options.rows)
        ) {
          for (
            r = a.options.slidesPerRow * a.options.rows,
              o = Math.ceil(s.length / r),
              e = 0;
            e < o;
            e++
          ) {
            var l = document.createElement("div");
            for (t = 0; t < a.options.rows; t++) {
              var c = document.createElement("div");
              for (n = 0; n < a.options.slidesPerRow; n++) {
                var d = e * r + (t * a.options.slidesPerRow + n);
                s.get(d) && c.appendChild(s.get(d));
              }
              l.appendChild(c);
            }
            i.appendChild(l);
          }
          a.$slider.empty().append(i),
            a.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (r.prototype.checkResponsive = function (e, t) {
        var n,
          i,
          o,
          s = this,
          r = !1,
          a = s.$slider.width(),
          l = window.innerWidth || c(window).width();
        if (
          ("window" === s.respondTo
            ? (o = l)
            : "slider" === s.respondTo
            ? (o = a)
            : "min" === s.respondTo && (o = Math.min(l, a)),
          s.options.responsive &&
            s.options.responsive.length &&
            null !== s.options.responsive)
        ) {
          for (n in ((i = null), s.breakpoints))
            s.breakpoints.hasOwnProperty(n) &&
              (!1 === s.originalSettings.mobileFirst
                ? o < s.breakpoints[n] && (i = s.breakpoints[n])
                : o > s.breakpoints[n] && (i = s.breakpoints[n]));
          null !== i
            ? null !== s.activeBreakpoint
              ? (i !== s.activeBreakpoint || t) &&
                ((s.activeBreakpoint = i),
                "unslick" === s.breakpointSettings[i]
                  ? s.unslick(i)
                  : ((s.options = c.extend(
                      {},
                      s.originalSettings,
                      s.breakpointSettings[i]
                    )),
                    !0 === e && (s.currentSlide = s.options.initialSlide),
                    s.refresh(e)),
                (r = i))
              : ((s.activeBreakpoint = i),
                "unslick" === s.breakpointSettings[i]
                  ? s.unslick(i)
                  : ((s.options = c.extend(
                      {},
                      s.originalSettings,
                      s.breakpointSettings[i]
                    )),
                    !0 === e && (s.currentSlide = s.options.initialSlide),
                    s.refresh(e)),
                (r = i))
            : null !== s.activeBreakpoint &&
              ((s.activeBreakpoint = null),
              (s.options = s.originalSettings),
              !0 === e && (s.currentSlide = s.options.initialSlide),
              s.refresh(e),
              (r = i)),
            e || !1 === r || s.$slider.trigger("breakpoint", [s, r]);
        }
      }),
      (r.prototype.changeSlide = function (e, t) {
        var n,
          i,
          o = this,
          s = c(e.currentTarget);
        switch (
          (s.is("a") && e.preventDefault(),
          s.is("li") || (s = s.closest("li")),
          (n =
            o.slideCount % o.options.slidesToScroll != 0
              ? 0
              : (o.slideCount - o.currentSlide) % o.options.slidesToScroll),
          e.data.message)
        ) {
          case "previous":
            (i =
              0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n),
              o.slideCount > o.options.slidesToShow &&
                o.slideHandler(o.currentSlide - i, !1, t);
            break;
          case "next":
            (i = 0 === n ? o.options.slidesToScroll : n),
              o.slideCount > o.options.slidesToShow &&
                o.slideHandler(o.currentSlide + i, !1, t);
            break;
          case "index":
            var r =
              0 === e.data.index
                ? 0
                : e.data.index || s.index() * o.options.slidesToScroll;
            o.slideHandler(o.checkNavigable(r), !1, t),
              s.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (r.prototype.checkNavigable = function (e) {
        var t, n;
        if (((n = 0), e > (t = this.getNavigableIndexes())[t.length - 1]))
          e = t[t.length - 1];
        else
          for (var i in t) {
            if (e < t[i]) {
              e = n;
              break;
            }
            n = t[i];
          }
        return e;
      }),
      (r.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots &&
          null !== e.$dots &&
          (c("li", e.$dots)
            .off("click.slick", e.changeSlide)
            .off("mouseenter.slick", c.proxy(e.interrupt, e, !0))
            .off("mouseleave.slick", c.proxy(e.interrupt, e, !1)),
          !0 === e.options.accessibility &&
            e.$dots.off("keydown.slick", e.keyHandler)),
          e.$slider.off("focus.slick blur.slick"),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
            e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
            !0 === e.options.accessibility &&
              (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
              e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
          e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
          e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
          e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
          e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
          e.$list.off("click.slick", e.clickHandler),
          c(document).off(e.visibilityChange, e.visibility),
          e.cleanUpSlideEvents(),
          !0 === e.options.accessibility &&
            e.$list.off("keydown.slick", e.keyHandler),
          !0 === e.options.focusOnSelect &&
            c(e.$slideTrack).children().off("click.slick", e.selectHandler),
          c(window).off(
            "orientationchange.slick.slick-" + e.instanceUid,
            e.orientationChange
          ),
          c(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
          c("[draggable!=true]", e.$slideTrack).off(
            "dragstart",
            e.preventDefault
          ),
          c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
      }),
      (r.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)),
          e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1));
      }),
      (r.prototype.cleanUpRows = function () {
        var e;
        1 < this.options.rows &&
          ((e = this.$slides.children().children()).removeAttr("style"),
          this.$slider.empty().append(e));
      }),
      (r.prototype.clickHandler = function (e) {
        !1 === this.shouldClick &&
          (e.stopImmediatePropagation(),
          e.stopPropagation(),
          e.preventDefault());
      }),
      (r.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(),
          (t.touchObject = {}),
          t.cleanUpEvents(),
          c(".slick-cloned", t.$slider).detach(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
            t.$prevArrow.length &&
            (t.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
          t.$nextArrow &&
            t.$nextArrow.length &&
            (t.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
          t.$slides &&
            (t.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                c(this).attr("style", c(this).data("originalStyling"));
              }),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slideTrack.detach(),
            t.$list.detach(),
            t.$slider.append(t.$slides)),
          t.cleanUpRows(),
          t.$slider.removeClass("slick-slider"),
          t.$slider.removeClass("slick-initialized"),
          t.$slider.removeClass("slick-dotted"),
          (t.unslicked = !0),
          e || t.$slider.trigger("destroy", [t]);
      }),
      (r.prototype.disableTransition = function (e) {
        var t = {};
        (t[this.transitionType] = ""),
          !1 === this.options.fade
            ? this.$slideTrack.css(t)
            : this.$slides.eq(e).css(t);
      }),
      (r.prototype.fadeSlide = function (e, t) {
        var n = this;
        !1 === n.cssTransitions
          ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }),
            n.$slides
              .eq(e)
              .animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
          : (n.applyTransition(e),
            n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
            t &&
              setTimeout(function () {
                n.disableTransition(e), t.call();
              }, n.options.speed));
      }),
      (r.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions
          ? t.$slides
              .eq(e)
              .animate(
                { opacity: 0, zIndex: t.options.zIndex - 2 },
                t.options.speed,
                t.options.easing
              )
          : (t.applyTransition(e),
            t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
      }),
      (r.prototype.filterSlides = r.prototype.slickFilter = function (e) {
        var t = this;
        null !== e &&
          ((t.$slidesCache = t.$slides),
          t.unload(),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slidesCache.filter(e).appendTo(t.$slideTrack),
          t.reinit());
      }),
      (r.prototype.focusHandler = function () {
        var n = this;
        n.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*", function (e) {
            e.stopImmediatePropagation();
            var t = c(this);
            setTimeout(function () {
              n.options.pauseOnFocus &&
                ((n.focussed = t.is(":focus")), n.autoPlay());
            }, 0);
          });
      }),
      (r.prototype.getCurrent = r.prototype.slickCurrentSlide = function () {
        return this.currentSlide;
      }),
      (r.prototype.getDotCount = function () {
        var e = this,
          t = 0,
          n = 0,
          i = 0;
        if (!0 === e.options.infinite)
          if (e.slideCount <= e.options.slidesToShow) ++i;
          else
            for (; t < e.slideCount; )
              ++i,
                (t = n + e.options.slidesToScroll),
                (n +=
                  e.options.slidesToScroll <= e.options.slidesToShow
                    ? e.options.slidesToScroll
                    : e.options.slidesToShow);
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor)
          for (; t < e.slideCount; )
            ++i,
              (t = n + e.options.slidesToScroll),
              (n +=
                e.options.slidesToScroll <= e.options.slidesToShow
                  ? e.options.slidesToScroll
                  : e.options.slidesToShow);
        else
          i =
            1 +
            Math.ceil(
              (e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll
            );
        return i - 1;
      }),
      (r.prototype.getLeft = function (e) {
        var t,
          n,
          i,
          o,
          s = this,
          r = 0;
        return (
          (s.slideOffset = 0),
          (n = s.$slides.first().outerHeight(!0)),
          !0 === s.options.infinite
            ? (s.slideCount > s.options.slidesToShow &&
                ((s.slideOffset = s.slideWidth * s.options.slidesToShow * -1),
                (o = -1),
                !0 === s.options.vertical &&
                  !0 === s.options.centerMode &&
                  (2 === s.options.slidesToShow
                    ? (o = -1.5)
                    : 1 === s.options.slidesToShow && (o = -2)),
                (r = n * s.options.slidesToShow * o)),
              s.slideCount % s.options.slidesToScroll != 0 &&
                e + s.options.slidesToScroll > s.slideCount &&
                s.slideCount > s.options.slidesToShow &&
                (e > s.slideCount
                  ? ((s.slideOffset =
                      (s.options.slidesToShow - (e - s.slideCount)) *
                      s.slideWidth *
                      -1),
                    (r =
                      (s.options.slidesToShow - (e - s.slideCount)) * n * -1))
                  : ((s.slideOffset =
                      (s.slideCount % s.options.slidesToScroll) *
                      s.slideWidth *
                      -1),
                    (r = (s.slideCount % s.options.slidesToScroll) * n * -1))))
            : e + s.options.slidesToShow > s.slideCount &&
              ((s.slideOffset =
                (e + s.options.slidesToShow - s.slideCount) * s.slideWidth),
              (r = (e + s.options.slidesToShow - s.slideCount) * n)),
          s.slideCount <= s.options.slidesToShow && (r = s.slideOffset = 0),
          !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow
            ? (s.slideOffset =
                (s.slideWidth * Math.floor(s.options.slidesToShow)) / 2 -
                (s.slideWidth * s.slideCount) / 2)
            : !0 === s.options.centerMode && !0 === s.options.infinite
            ? (s.slideOffset +=
                s.slideWidth * Math.floor(s.options.slidesToShow / 2) -
                s.slideWidth)
            : !0 === s.options.centerMode &&
              ((s.slideOffset = 0),
              (s.slideOffset +=
                s.slideWidth * Math.floor(s.options.slidesToShow / 2))),
          (t =
            !1 === s.options.vertical
              ? e * s.slideWidth * -1 + s.slideOffset
              : e * n * -1 + r),
          !0 === s.options.variableWidth &&
            ((i =
              s.slideCount <= s.options.slidesToShow ||
              !1 === s.options.infinite
                ? s.$slideTrack.children(".slick-slide").eq(e)
                : s.$slideTrack
                    .children(".slick-slide")
                    .eq(e + s.options.slidesToShow)),
            (t =
              !0 === s.options.rtl
                ? i[0]
                  ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width())
                  : 0
                : i[0]
                ? -1 * i[0].offsetLeft
                : 0),
            !0 === s.options.centerMode &&
              ((i =
                s.slideCount <= s.options.slidesToShow ||
                !1 === s.options.infinite
                  ? s.$slideTrack.children(".slick-slide").eq(e)
                  : s.$slideTrack
                      .children(".slick-slide")
                      .eq(e + s.options.slidesToShow + 1)),
              (t =
                !0 === s.options.rtl
                  ? i[0]
                    ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width())
                    : 0
                  : i[0]
                  ? -1 * i[0].offsetLeft
                  : 0),
              (t += (s.$list.width() - i.outerWidth()) / 2))),
          t
        );
      }),
      (r.prototype.getOption = r.prototype.slickGetOption = function (e) {
        return this.options[e];
      }),
      (r.prototype.getNavigableIndexes = function () {
        var e,
          t = this,
          n = 0,
          i = 0,
          o = [];
        for (
          !1 === t.options.infinite
            ? (e = t.slideCount)
            : ((n = -1 * t.options.slidesToScroll),
              (i = -1 * t.options.slidesToScroll),
              (e = 2 * t.slideCount));
          n < e;

        )
          o.push(n),
            (n = i + t.options.slidesToScroll),
            (i +=
              t.options.slidesToScroll <= t.options.slidesToShow
                ? t.options.slidesToScroll
                : t.options.slidesToShow);
        return o;
      }),
      (r.prototype.getSlick = function () {
        return this;
      }),
      (r.prototype.getSlideCount = function () {
        var n,
          i,
          o = this;
        return (
          (i =
            !0 === o.options.centerMode
              ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
              : 0),
          !0 === o.options.swipeToSlide
            ? (o.$slideTrack.find(".slick-slide").each(function (e, t) {
                if (t.offsetLeft - i + c(t).outerWidth() / 2 > -1 * o.swipeLeft)
                  return (n = t), !1;
              }),
              Math.abs(c(n).attr("data-slick-index") - o.currentSlide) || 1)
            : o.options.slidesToScroll
        );
      }),
      (r.prototype.goTo = r.prototype.slickGoTo = function (e, t) {
        this.changeSlide({ data: { message: "index", index: parseInt(e) } }, t);
      }),
      (r.prototype.init = function (e) {
        var t = this;
        c(t.$slider).hasClass("slick-initialized") ||
          (c(t.$slider).addClass("slick-initialized"),
          t.buildRows(),
          t.buildOut(),
          t.setProps(),
          t.startLoad(),
          t.loadSlider(),
          t.initializeEvents(),
          t.updateArrows(),
          t.updateDots(),
          t.checkResponsive(!0),
          t.focusHandler()),
          e && t.$slider.trigger("init", [t]),
          !0 === t.options.accessibility && t.initADA(),
          t.options.autoplay && ((t.paused = !1), t.autoPlay());
      }),
      (r.prototype.initADA = function () {
        var n = this,
          i = Math.ceil(n.slideCount / n.options.slidesToShow),
          o = n.getNavigableIndexes().filter(function (e) {
            return 0 <= e && e < n.slideCount;
          });
        n.$slides
          .add(n.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          null !== n.$dots &&
            (n.$slides
              .not(n.$slideTrack.find(".slick-cloned"))
              .each(function (e) {
                var t = o.indexOf(e);
                c(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + n.instanceUid + e,
                  tabindex: -1,
                }),
                  -1 !== t &&
                    c(this).attr({
                      "aria-describedby":
                        "slick-slide-control" + n.instanceUid + t,
                    });
              }),
            n.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (e) {
                var t = o[e];
                c(this).attr({ role: "presentation" }),
                  c(this)
                    .find("button")
                    .first()
                    .attr({
                      role: "tab",
                      id: "slick-slide-control" + n.instanceUid + e,
                      "aria-controls": "slick-slide" + n.instanceUid + t,
                      "aria-label": e + 1 + " of " + i,
                      "aria-selected": null,
                      tabindex: "-1",
                    });
              })
              .eq(n.currentSlide)
              .find("button")
              .attr({ "aria-selected": "true", tabindex: "0" })
              .end());
        for (var e = n.currentSlide, t = e + n.options.slidesToShow; e < t; e++)
          n.$slides.eq(e).attr("tabindex", 0);
        n.activateADA();
      }),
      (r.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, e.changeSlide),
          e.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow.on("keydown.slick", e.keyHandler),
            e.$nextArrow.on("keydown.slick", e.keyHandler)));
      }),
      (r.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots &&
          (c("li", e.$dots).on(
            "click.slick",
            { message: "index" },
            e.changeSlide
          ),
          !0 === e.options.accessibility &&
            e.$dots.on("keydown.slick", e.keyHandler)),
          !0 === e.options.dots &&
            !0 === e.options.pauseOnDotsHover &&
            c("li", e.$dots)
              .on("mouseenter.slick", c.proxy(e.interrupt, e, !0))
              .on("mouseleave.slick", c.proxy(e.interrupt, e, !1));
      }),
      (r.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover &&
          (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)),
          e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)));
      }),
      (r.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(),
          e.initDotEvents(),
          e.initSlideEvents(),
          e.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            e.swipeHandler
          ),
          e.$list.on("click.slick", e.clickHandler),
          c(document).on(e.visibilityChange, c.proxy(e.visibility, e)),
          !0 === e.options.accessibility &&
            e.$list.on("keydown.slick", e.keyHandler),
          !0 === e.options.focusOnSelect &&
            c(e.$slideTrack).children().on("click.slick", e.selectHandler),
          c(window).on(
            "orientationchange.slick.slick-" + e.instanceUid,
            c.proxy(e.orientationChange, e)
          ),
          c(window).on(
            "resize.slick.slick-" + e.instanceUid,
            c.proxy(e.resize, e)
          ),
          c("[draggable!=true]", e.$slideTrack).on(
            "dragstart",
            e.preventDefault
          ),
          c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
          c(e.setPosition);
      }),
      (r.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.show(), e.$nextArrow.show()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.show();
      }),
      (r.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === e.keyCode && !0 === t.options.accessibility
            ? t.changeSlide({
                data: { message: !0 === t.options.rtl ? "next" : "previous" },
              })
            : 39 === e.keyCode &&
              !0 === t.options.accessibility &&
              t.changeSlide({
                data: { message: !0 === t.options.rtl ? "previous" : "next" },
              }));
      }),
      (r.prototype.lazyLoad = function () {
        function e(e) {
          c("img[data-lazy]", e).each(function () {
            var e = c(this),
              t = c(this).attr("data-lazy"),
              n = c(this).attr("data-srcset"),
              i = c(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
              o = document.createElement("img");
            (o.onload = function () {
              e.animate({ opacity: 0 }, 100, function () {
                n && (e.attr("srcset", n), i && e.attr("sizes", i)),
                  e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                    e.removeAttr(
                      "data-lazy data-srcset data-sizes"
                    ).removeClass("slick-loading");
                  }),
                  s.$slider.trigger("lazyLoaded", [s, e, t]);
              });
            }),
              (o.onerror = function () {
                e
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  s.$slider.trigger("lazyLoadError", [s, e, t]);
              }),
              (o.src = t);
          });
        }
        var t,
          n,
          i,
          s = this;
        if (
          (!0 === s.options.centerMode
            ? !0 === s.options.infinite
              ? (i =
                  (n = s.currentSlide + (s.options.slidesToShow / 2 + 1)) +
                  s.options.slidesToShow +
                  2)
              : ((n = Math.max(
                  0,
                  s.currentSlide - (s.options.slidesToShow / 2 + 1)
                )),
                (i = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide))
            : ((n = s.options.infinite
                ? s.options.slidesToShow + s.currentSlide
                : s.currentSlide),
              (i = Math.ceil(n + s.options.slidesToShow)),
              !0 === s.options.fade &&
                (0 < n && n--, i <= s.slideCount && i++)),
          (t = s.$slider.find(".slick-slide").slice(n, i)),
          "anticipated" === s.options.lazyLoad)
        )
          for (
            var o = n - 1, r = i, a = s.$slider.find(".slick-slide"), l = 0;
            l < s.options.slidesToScroll;
            l++
          )
            o < 0 && (o = s.slideCount - 1),
              (t = (t = t.add(a.eq(o))).add(a.eq(r))),
              o--,
              r++;
        e(t),
          s.slideCount <= s.options.slidesToShow
            ? e(s.$slider.find(".slick-slide"))
            : s.currentSlide >= s.slideCount - s.options.slidesToShow
            ? e(
                s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)
              )
            : 0 === s.currentSlide &&
              e(
                s.$slider
                  .find(".slick-cloned")
                  .slice(-1 * s.options.slidesToShow)
              );
      }),
      (r.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(),
          e.$slideTrack.css({ opacity: 1 }),
          e.$slider.removeClass("slick-loading"),
          e.initUI(),
          "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
      }),
      (r.prototype.next = r.prototype.slickNext = function () {
        this.changeSlide({ data: { message: "next" } });
      }),
      (r.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }),
      (r.prototype.pause = r.prototype.slickPause = function () {
        this.autoPlayClear(), (this.paused = !0);
      }),
      (r.prototype.play = r.prototype.slickPlay = function () {
        var e = this;
        e.autoPlay(),
          (e.options.autoplay = !0),
          (e.paused = !1),
          (e.focussed = !1),
          (e.interrupted = !1);
      }),
      (r.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked ||
          (t.$slider.trigger("afterChange", [t, e]),
          (t.animating = !1),
          t.slideCount > t.options.slidesToShow && t.setPosition(),
          (t.swipeLeft = null),
          t.options.autoplay && t.autoPlay(),
          !0 === t.options.accessibility &&
            (t.initADA(),
            t.options.focusOnChange &&
              c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
      }),
      (r.prototype.prev = r.prototype.slickPrev = function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
      (r.prototype.preventDefault = function (e) {
        e.preventDefault();
      }),
      (r.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var t,
          n,
          i,
          o,
          s,
          r = this,
          a = c("img[data-lazy]", r.$slider);
        a.length
          ? ((t = a.first()),
            (n = t.attr("data-lazy")),
            (i = t.attr("data-srcset")),
            (o = t.attr("data-sizes") || r.$slider.attr("data-sizes")),
            ((s = document.createElement("img")).onload = function () {
              i && (t.attr("srcset", i), o && t.attr("sizes", o)),
                t
                  .attr("src", n)
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading"),
                !0 === r.options.adaptiveHeight && r.setPosition(),
                r.$slider.trigger("lazyLoaded", [r, t, n]),
                r.progressiveLazyLoad();
            }),
            (s.onerror = function () {
              e < 3
                ? setTimeout(function () {
                    r.progressiveLazyLoad(e + 1);
                  }, 500)
                : (t
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  r.$slider.trigger("lazyLoadError", [r, t, n]),
                  r.progressiveLazyLoad());
            }),
            (s.src = n))
          : r.$slider.trigger("allImagesLoaded", [r]);
      }),
      (r.prototype.refresh = function (e) {
        var t,
          n,
          i = this;
        (n = i.slideCount - i.options.slidesToShow),
          !i.options.infinite && i.currentSlide > n && (i.currentSlide = n),
          i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0),
          (t = i.currentSlide),
          i.destroy(!0),
          c.extend(i, i.initials, { currentSlide: t }),
          i.init(),
          e || i.changeSlide({ data: { message: "index", index: t } }, !1);
      }),
      (r.prototype.registerBreakpoints = function () {
        var e,
          t,
          n,
          i = this,
          o = i.options.responsive || null;
        if ("array" === c.type(o) && o.length) {
          for (e in ((i.respondTo = i.options.respondTo || "window"), o))
            if (((n = i.breakpoints.length - 1), o.hasOwnProperty(e))) {
              for (t = o[e].breakpoint; 0 <= n; )
                i.breakpoints[n] &&
                  i.breakpoints[n] === t &&
                  i.breakpoints.splice(n, 1),
                  n--;
              i.breakpoints.push(t), (i.breakpointSettings[t] = o[e].settings);
            }
          i.breakpoints.sort(function (e, t) {
            return i.options.mobileFirst ? e - t : t - e;
          });
        }
      }),
      (r.prototype.reinit = function () {
        var e = this;
        (e.$slides = e.$slideTrack
          .children(e.options.slide)
          .addClass("slick-slide")),
          (e.slideCount = e.$slides.length),
          e.currentSlide >= e.slideCount &&
            0 !== e.currentSlide &&
            (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
          e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
          e.registerBreakpoints(),
          e.setProps(),
          e.setupInfinite(),
          e.buildArrows(),
          e.updateArrows(),
          e.initArrowEvents(),
          e.buildDots(),
          e.updateDots(),
          e.initDotEvents(),
          e.cleanUpSlideEvents(),
          e.initSlideEvents(),
          e.checkResponsive(!1, !0),
          !0 === e.options.focusOnSelect &&
            c(e.$slideTrack).children().on("click.slick", e.selectHandler),
          e.setSlideClasses(
            "number" == typeof e.currentSlide ? e.currentSlide : 0
          ),
          e.setPosition(),
          e.focusHandler(),
          (e.paused = !e.options.autoplay),
          e.autoPlay(),
          e.$slider.trigger("reInit", [e]);
      }),
      (r.prototype.resize = function () {
        var e = this;
        c(window).width() !== e.windowWidth &&
          (clearTimeout(e.windowDelay),
          (e.windowDelay = window.setTimeout(function () {
            (e.windowWidth = c(window).width()),
              e.checkResponsive(),
              e.unslicked || e.setPosition();
          }, 50)));
      }),
      (r.prototype.removeSlide = r.prototype.slickRemove = function (e, t, n) {
        var i = this;
        if (
          ((e =
            "boolean" == typeof e
              ? !0 === (t = e)
                ? 0
                : i.slideCount - 1
              : !0 === t
              ? --e
              : e),
          i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
        )
          return !1;
        i.unload(),
          !0 === n
            ? i.$slideTrack.children().remove()
            : i.$slideTrack.children(this.options.slide).eq(e).remove(),
          (i.$slides = i.$slideTrack.children(this.options.slide)),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slideTrack.append(i.$slides),
          (i.$slidesCache = i.$slides),
          i.reinit();
      }),
      (r.prototype.setCSS = function (e) {
        var t,
          n,
          i = this,
          o = {};
        !0 === i.options.rtl && (e = -e),
          (t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (o[i.positionProp] = e),
          !1 === i.transformsEnabled ||
            (!(o = {}) === i.cssTransitions
              ? (o[i.animType] = "translate(" + t + ", " + n + ")")
              : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)")),
          i.$slideTrack.css(o);
      }),
      (r.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical
          ? !0 === e.options.centerMode &&
            e.$list.css({ padding: "0px " + e.options.centerPadding })
          : (e.$list.height(
              e.$slides.first().outerHeight(!0) * e.options.slidesToShow
            ),
            !0 === e.options.centerMode &&
              e.$list.css({ padding: e.options.centerPadding + " 0px" })),
          (e.listWidth = e.$list.width()),
          (e.listHeight = e.$list.height()),
          !1 === e.options.vertical && !1 === e.options.variableWidth
            ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
              e.$slideTrack.width(
                Math.ceil(
                  e.slideWidth * e.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === e.options.variableWidth
            ? e.$slideTrack.width(5e3 * e.slideCount)
            : ((e.slideWidth = Math.ceil(e.listWidth)),
              e.$slideTrack.height(
                Math.ceil(
                  e.$slides.first().outerHeight(!0) *
                    e.$slideTrack.children(".slick-slide").length
                )
              ));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth &&
          e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
      }),
      (r.prototype.setFade = function () {
        var n,
          i = this;
        i.$slides.each(function (e, t) {
          (n = i.slideWidth * e * -1),
            !0 === i.options.rtl
              ? c(t).css({
                  position: "relative",
                  right: n,
                  top: 0,
                  zIndex: i.options.zIndex - 2,
                  opacity: 0,
                })
              : c(t).css({
                  position: "relative",
                  left: n,
                  top: 0,
                  zIndex: i.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          i.$slides
            .eq(i.currentSlide)
            .css({ zIndex: i.options.zIndex - 1, opacity: 1 });
      }),
      (r.prototype.setHeight = function () {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css("height", t);
        }
      }),
      (r.prototype.setOption = r.prototype.slickSetOption = function () {
        var e,
          t,
          n,
          i,
          o,
          s = this,
          r = !1;
        if (
          ("object" === c.type(arguments[0])
            ? ((n = arguments[0]), (r = arguments[1]), (o = "multiple"))
            : "string" === c.type(arguments[0]) &&
              ((n = arguments[0]),
              (i = arguments[1]),
              (r = arguments[2]),
              "responsive" === arguments[0] && "array" === c.type(arguments[1])
                ? (o = "responsive")
                : void 0 !== arguments[1] && (o = "single")),
          "single" === o)
        )
          s.options[n] = i;
        else if ("multiple" === o)
          c.each(n, function (e, t) {
            s.options[e] = t;
          });
        else if ("responsive" === o)
          for (t in i)
            if ("array" !== c.type(s.options.responsive))
              s.options.responsive = [i[t]];
            else {
              for (e = s.options.responsive.length - 1; 0 <= e; )
                s.options.responsive[e].breakpoint === i[t].breakpoint &&
                  s.options.responsive.splice(e, 1),
                  e--;
              s.options.responsive.push(i[t]);
            }
        r && (s.unload(), s.reinit());
      }),
      (r.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(),
          e.setHeight(),
          !1 === e.options.fade
            ? e.setCSS(e.getLeft(e.currentSlide))
            : e.setFade(),
          e.$slider.trigger("setPosition", [e]);
      }),
      (r.prototype.setProps = function () {
        var e = this,
          t = document.body.style;
        (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
          "top" === e.positionProp
            ? e.$slider.addClass("slick-vertical")
            : e.$slider.removeClass("slick-vertical"),
          (void 0 === t.WebkitTransition &&
            void 0 === t.MozTransition &&
            void 0 === t.msTransition) ||
            (!0 === e.options.useCSS && (e.cssTransitions = !0)),
          e.options.fade &&
            ("number" == typeof e.options.zIndex
              ? e.options.zIndex < 3 && (e.options.zIndex = 3)
              : (e.options.zIndex = e.defaults.zIndex)),
          void 0 !== t.OTransform &&
            ((e.animType = "OTransform"),
            (e.transformType = "-o-transform"),
            (e.transitionType = "OTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.MozTransform &&
            ((e.animType = "MozTransform"),
            (e.transformType = "-moz-transform"),
            (e.transitionType = "MozTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.MozPerspective &&
              (e.animType = !1)),
          void 0 !== t.webkitTransform &&
            ((e.animType = "webkitTransform"),
            (e.transformType = "-webkit-transform"),
            (e.transitionType = "webkitTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.msTransform &&
            ((e.animType = "msTransform"),
            (e.transformType = "-ms-transform"),
            (e.transitionType = "msTransition"),
            void 0 === t.msTransform && (e.animType = !1)),
          void 0 !== t.transform &&
            !1 !== e.animType &&
            ((e.animType = "transform"),
            (e.transformType = "transform"),
            (e.transitionType = "transition")),
          (e.transformsEnabled =
            e.options.useTransform && null !== e.animType && !1 !== e.animType);
      }),
      (r.prototype.setSlideClasses = function (e) {
        var t,
          n,
          i,
          o,
          s = this;
        if (
          ((n = s.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true")),
          s.$slides.eq(e).addClass("slick-current"),
          !0 === s.options.centerMode)
        ) {
          var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
          (t = Math.floor(s.options.slidesToShow / 2)),
            !0 === s.options.infinite &&
              (t <= e && e <= s.slideCount - 1 - t
                ? s.$slides
                    .slice(e - t + r, e + t + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((i = s.options.slidesToShow + e),
                  n
                    .slice(i - t + 1 + r, i + t + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === e
                ? n
                    .eq(n.length - 1 - s.options.slidesToShow)
                    .addClass("slick-center")
                : e === s.slideCount - 1 &&
                  n.eq(s.options.slidesToShow).addClass("slick-center")),
            s.$slides.eq(e).addClass("slick-center");
        } else
          0 <= e && e <= s.slideCount - s.options.slidesToShow
            ? s.$slides
                .slice(e, e + s.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : n.length <= s.options.slidesToShow
            ? n.addClass("slick-active").attr("aria-hidden", "false")
            : ((o = s.slideCount % s.options.slidesToShow),
              (i = !0 === s.options.infinite ? s.options.slidesToShow + e : e),
              s.options.slidesToShow == s.options.slidesToScroll &&
              s.slideCount - e < s.options.slidesToShow
                ? n
                    .slice(i - (s.options.slidesToShow - o), i + o)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : n
                    .slice(i, i + s.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false"));
        ("ondemand" !== s.options.lazyLoad &&
          "anticipated" !== s.options.lazyLoad) ||
          s.lazyLoad();
      }),
      (r.prototype.setupInfinite = function () {
        var e,
          t,
          n,
          i = this;
        if (
          (!0 === i.options.fade && (i.options.centerMode = !1),
          !0 === i.options.infinite &&
            !1 === i.options.fade &&
            ((t = null), i.slideCount > i.options.slidesToShow))
        ) {
          for (
            n =
              !0 === i.options.centerMode
                ? i.options.slidesToShow + 1
                : i.options.slidesToShow,
              e = i.slideCount;
            e > i.slideCount - n;
            e -= 1
          )
            (t = e - 1),
              c(i.$slides[t])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", t - i.slideCount)
                .prependTo(i.$slideTrack)
                .addClass("slick-cloned");
          for (e = 0; e < n + i.slideCount; e += 1)
            (t = e),
              c(i.$slides[t])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", t + i.slideCount)
                .appendTo(i.$slideTrack)
                .addClass("slick-cloned");
          i.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              c(this).attr("id", "");
            });
        }
      }),
      (r.prototype.interrupt = function (e) {
        e || this.autoPlay(), (this.interrupted = e);
      }),
      (r.prototype.selectHandler = function (e) {
        var t = c(e.target).is(".slick-slide")
            ? c(e.target)
            : c(e.target).parents(".slick-slide"),
          n = parseInt(t.attr("data-slick-index"));
        n || (n = 0),
          this.slideCount <= this.options.slidesToShow
            ? this.slideHandler(n, !1, !0)
            : this.slideHandler(n);
      }),
      (r.prototype.slideHandler = function (e, t, n) {
        var i,
          o,
          s,
          r,
          a,
          l = null,
          c = this;
        if (
          ((t = t || !1),
          !(
            (!0 === c.animating && !0 === c.options.waitForAnimate) ||
            (!0 === c.options.fade && c.currentSlide === e)
          ))
        )
          if (
            (!1 === t && c.asNavFor(e),
            (i = e),
            (l = c.getLeft(i)),
            (r = c.getLeft(c.currentSlide)),
            (c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft),
            !1 === c.options.infinite &&
              !1 === c.options.centerMode &&
              (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
          )
            !1 === c.options.fade &&
              ((i = c.currentSlide),
              !0 !== n
                ? c.animateSlide(r, function () {
                    c.postSlide(i);
                  })
                : c.postSlide(i));
          else if (
            !1 === c.options.infinite &&
            !0 === c.options.centerMode &&
            (e < 0 || e > c.slideCount - c.options.slidesToScroll)
          )
            !1 === c.options.fade &&
              ((i = c.currentSlide),
              !0 !== n
                ? c.animateSlide(r, function () {
                    c.postSlide(i);
                  })
                : c.postSlide(i));
          else {
            if (
              (c.options.autoplay && clearInterval(c.autoPlayTimer),
              (o =
                i < 0
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                    : c.slideCount + i
                  : i >= c.slideCount
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? 0
                    : i - c.slideCount
                  : i),
              (c.animating = !0),
              c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
              (s = c.currentSlide),
              (c.currentSlide = o),
              c.setSlideClasses(c.currentSlide),
              c.options.asNavFor &&
                (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <=
                  a.options.slidesToShow &&
                a.setSlideClasses(c.currentSlide),
              c.updateDots(),
              c.updateArrows(),
              !0 === c.options.fade)
            )
              return (
                !0 !== n
                  ? (c.fadeSlideOut(s),
                    c.fadeSlide(o, function () {
                      c.postSlide(o);
                    }))
                  : c.postSlide(o),
                void c.animateHeight()
              );
            !0 !== n
              ? c.animateSlide(l, function () {
                  c.postSlide(o);
                })
              : c.postSlide(o);
          }
      }),
      (r.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.hide(), e.$nextArrow.hide()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.hide(),
          e.$slider.addClass("slick-loading");
      }),
      (r.prototype.swipeDirection = function () {
        var e,
          t,
          n,
          i,
          o = this;
        return (
          (e = o.touchObject.startX - o.touchObject.curX),
          (t = o.touchObject.startY - o.touchObject.curY),
          (n = Math.atan2(t, e)),
          (i = Math.round((180 * n) / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
          i <= 45 && 0 <= i
            ? !1 === o.options.rtl
              ? "left"
              : "right"
            : i <= 360 && 315 <= i
            ? !1 === o.options.rtl
              ? "left"
              : "right"
            : 135 <= i && i <= 225
            ? !1 === o.options.rtl
              ? "right"
              : "left"
            : !0 === o.options.verticalSwiping
            ? 35 <= i && i <= 135
              ? "down"
              : "up"
            : "vertical"
        );
      }),
      (r.prototype.swipeEnd = function (e) {
        var t,
          n,
          i = this;
        if (((i.dragging = !1), (i.swiping = !1), i.scrolling))
          return (i.scrolling = !1);
        if (
          ((i.interrupted = !1),
          (i.shouldClick = !(10 < i.touchObject.swipeLength)),
          void 0 === i.touchObject.curX)
        )
          return !1;
        if (
          (!0 === i.touchObject.edgeHit &&
            i.$slider.trigger("edge", [i, i.swipeDirection()]),
          i.touchObject.swipeLength >= i.touchObject.minSwipe)
        ) {
          switch ((n = i.swipeDirection())) {
            case "left":
            case "down":
              (t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide + i.getSlideCount())
                : i.currentSlide + i.getSlideCount()),
                (i.currentDirection = 0);
              break;
            case "right":
            case "up":
              (t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide - i.getSlideCount())
                : i.currentSlide - i.getSlideCount()),
                (i.currentDirection = 1);
          }
          "vertical" != n &&
            (i.slideHandler(t),
            (i.touchObject = {}),
            i.$slider.trigger("swipe", [i, n]));
        } else
          i.touchObject.startX !== i.touchObject.curX &&
            (i.slideHandler(i.currentSlide), (i.touchObject = {}));
      }),
      (r.prototype.swipeHandler = function (e) {
        var t = this;
        if (
          !(
            !1 === t.options.swipe ||
            ("ontouchend" in document && !1 === t.options.swipe) ||
            (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))
          )
        )
          switch (
            ((t.touchObject.fingerCount =
              e.originalEvent && void 0 !== e.originalEvent.touches
                ? e.originalEvent.touches.length
                : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            !0 === t.options.verticalSwiping &&
              (t.touchObject.minSwipe =
                t.listHeight / t.options.touchThreshold),
            e.data.action)
          ) {
            case "start":
              t.swipeStart(e);
              break;
            case "move":
              t.swipeMove(e);
              break;
            case "end":
              t.swipeEnd(e);
          }
      }),
      (r.prototype.swipeMove = function (e) {
        var t,
          n,
          i,
          o,
          s,
          r,
          a = this;
        return (
          (s = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
          !(!a.dragging || a.scrolling || (s && 1 !== s.length)) &&
            ((t = a.getLeft(a.currentSlide)),
            (a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX),
            (a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY),
            (a.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))
            )),
            (r = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))
            )),
            !a.options.verticalSwiping && !a.swiping && 4 < r
              ? !(a.scrolling = !0)
              : (!0 === a.options.verticalSwiping &&
                  (a.touchObject.swipeLength = r),
                (n = a.swipeDirection()),
                void 0 !== e.originalEvent &&
                  4 < a.touchObject.swipeLength &&
                  ((a.swiping = !0), e.preventDefault()),
                (o =
                  (!1 === a.options.rtl ? 1 : -1) *
                  (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                !0 === a.options.verticalSwiping &&
                  (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                (i = a.touchObject.swipeLength),
                (a.touchObject.edgeHit = !1) === a.options.infinite &&
                  ((0 === a.currentSlide && "right" === n) ||
                    (a.currentSlide >= a.getDotCount() && "left" === n)) &&
                  ((i = a.touchObject.swipeLength * a.options.edgeFriction),
                  (a.touchObject.edgeHit = !0)),
                !1 === a.options.vertical
                  ? (a.swipeLeft = t + i * o)
                  : (a.swipeLeft =
                      t + i * (a.$list.height() / a.listWidth) * o),
                !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o),
                !0 !== a.options.fade &&
                  !1 !== a.options.touchMove &&
                  (!0 === a.animating
                    ? ((a.swipeLeft = null), !1)
                    : void a.setCSS(a.swipeLeft))))
        );
      }),
      (r.prototype.swipeStart = function (e) {
        var t,
          n = this;
        if (
          ((n.interrupted = !0),
          1 !== n.touchObject.fingerCount ||
            n.slideCount <= n.options.slidesToShow)
        )
          return !(n.touchObject = {});
        void 0 !== e.originalEvent &&
          void 0 !== e.originalEvent.touches &&
          (t = e.originalEvent.touches[0]),
          (n.touchObject.startX = n.touchObject.curX =
            void 0 !== t ? t.pageX : e.clientX),
          (n.touchObject.startY = n.touchObject.curY =
            void 0 !== t ? t.pageY : e.clientY),
          (n.dragging = !0);
      }),
      (r.prototype.unfilterSlides = r.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache &&
          (e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.appendTo(e.$slideTrack),
          e.reinit());
      }),
      (r.prototype.unload = function () {
        var e = this;
        c(".slick-cloned", e.$slider).remove(),
          e.$dots && e.$dots.remove(),
          e.$prevArrow &&
            e.htmlExpr.test(e.options.prevArrow) &&
            e.$prevArrow.remove(),
          e.$nextArrow &&
            e.htmlExpr.test(e.options.nextArrow) &&
            e.$nextArrow.remove(),
          e.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (r.prototype.unslick = function (e) {
        this.$slider.trigger("unslick", [this, e]), this.destroy();
      }),
      (r.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            !e.options.infinite &&
            (e.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            e.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === e.currentSlide
              ? (e.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : e.currentSlide >= e.slideCount - e.options.slidesToShow &&
                !1 === e.options.centerMode
              ? (e.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : e.currentSlide >= e.slideCount - 1 &&
                !0 === e.options.centerMode &&
                (e.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (r.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots &&
          (e.$dots.find("li").removeClass("slick-active").end(),
          e.$dots
            .find("li")
            .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
            .addClass("slick-active"));
      }),
      (r.prototype.visibility = function () {
        this.options.autoplay &&
          (document[this.hidden]
            ? (this.interrupted = !0)
            : (this.interrupted = !1));
      }),
      (c.fn.slick = function () {
        var e,
          t,
          n = this,
          i = arguments[0],
          o = Array.prototype.slice.call(arguments, 1),
          s = n.length;
        for (e = 0; e < s; e++)
          if (
            ("object" == typeof i || void 0 === i
              ? (n[e].slick = new r(n[e], i))
              : (t = n[e].slick[i].apply(n[e].slick, o)),
            void 0 !== t)
          )
            return t;
        return n;
      });
  }),
  (function (l, u, g, e) {
    "use strict";
    function n(e, t) {
      var n,
        i,
        o,
        s = [],
        r = 0;
      (e && e.isDefaultPrevented()) ||
        (e.preventDefault(),
        (t = t || {}),
        e && e.data && (t = d(e.data.options, t)),
        (n = t.$target || g(e.currentTarget).trigger("blur")),
        ((o = g.fancybox.getInstance()) && o.$trigger && o.$trigger.is(n)) ||
          (t.selector
            ? (s = g(t.selector))
            : (i = n.attr("data-fancybox") || "")
            ? (s = (s = e.data ? e.data.items : []).length
                ? s.filter('[data-fancybox="' + i + '"]')
                : g('[data-fancybox="' + i + '"]'))
            : (s = [n]),
          (r = g(s).index(n)) < 0 && (r = 0),
          ((o = g.fancybox.open(s, t, r)).$trigger = n)));
    }
    if (((l.console = l.console || { info: function (e) {} }), g)) {
      if (g.fn.fancybox) return console.info("fancyBox already initialized");
      var t = {
          closeExisting: !1,
          loop: !1,
          gutter: 50,
          keyboard: !0,
          preventCaptionOverlap: !0,
          arrows: !0,
          infobar: !0,
          smallBtn: "auto",
          toolbar: "auto",
          buttons: ["zoom", "slideShow", "thumbs", "close"],
          idleTime: 3,
          protect: !1,
          modal: !1,
          image: { preload: !1 },
          ajax: { settings: { data: { fancybox: !0 } } },
          iframe: {
            tpl:
              '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
            preload: !0,
            css: {},
            attr: { scrolling: "auto" },
          },
          video: {
            tpl:
              '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
            format: "",
            autoStart: !0,
          },
          defaultType: "image",
          animationEffect: "zoom",
          animationDuration: 366,
          zoomOpacity: "auto",
          transitionEffect: "fade",
          transitionDuration: 366,
          slideClass: "",
          baseClass: "",
          baseTpl:
            '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
          spinnerTpl: '<div class="fancybox-loading"></div>',
          errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
          btnTpl: {
            download:
              '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
            zoom:
              '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
            close:
              '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
            arrowLeft:
              '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
            arrowRight:
              '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
            smallBtn:
              '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
          },
          parentEl: "body",
          hideScrollbar: !0,
          autoFocus: !0,
          backFocus: !0,
          trapFocus: !0,
          fullScreen: { autoStart: !1 },
          touch: { vertical: !0, momentum: !0 },
          hash: null,
          media: {},
          slideShow: { autoStart: !1, speed: 3e3 },
          thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y",
          },
          wheel: "auto",
          onInit: g.noop,
          beforeLoad: g.noop,
          afterLoad: g.noop,
          beforeShow: g.noop,
          afterShow: g.noop,
          beforeClose: g.noop,
          afterClose: g.noop,
          onActivate: g.noop,
          onDeactivate: g.noop,
          clickContent: function (e, t) {
            return "image" === e.type && "zoom";
          },
          clickSlide: "close",
          clickOutside: "close",
          dblclickContent: !1,
          dblclickSlide: !1,
          dblclickOutside: !1,
          mobile: {
            preventCaptionOverlap: !1,
            idleTime: !1,
            clickContent: function (e, t) {
              return "image" === e.type && "toggleControls";
            },
            clickSlide: function (e, t) {
              return "image" === e.type ? "toggleControls" : "close";
            },
            dblclickContent: function (e, t) {
              return "image" === e.type && "zoom";
            },
            dblclickSlide: function (e, t) {
              return "image" === e.type && "zoom";
            },
          },
          lang: "en",
          i18n: {
            en: {
              CLOSE: "Close",
              NEXT: "Next",
              PREV: "Previous",
              ERROR:
                "The requested content cannot be loaded. <br/> Please try again later.",
              PLAY_START: "Start slideshow",
              PLAY_STOP: "Pause slideshow",
              FULL_SCREEN: "Full screen",
              THUMBS: "Thumbnails",
              DOWNLOAD: "Download",
              SHARE: "Share",
              ZOOM: "Zoom",
            },
            de: {
              CLOSE: "Schlie&szlig;en",
              NEXT: "Weiter",
              PREV: "Zur&uuml;ck",
              ERROR:
                "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
              PLAY_START: "Diaschau starten",
              PLAY_STOP: "Diaschau beenden",
              FULL_SCREEN: "Vollbild",
              THUMBS: "Vorschaubilder",
              DOWNLOAD: "Herunterladen",
              SHARE: "Teilen",
              ZOOM: "Vergr&ouml;&szlig;ern",
            },
          },
        },
        o = g(l),
        r = g(u),
        s = 0,
        p =
          l.requestAnimationFrame ||
          l.webkitRequestAnimationFrame ||
          l.mozRequestAnimationFrame ||
          l.oRequestAnimationFrame ||
          function (e) {
            return l.setTimeout(e, 1e3 / 60);
          },
        a =
          l.cancelAnimationFrame ||
          l.webkitCancelAnimationFrame ||
          l.mozCancelAnimationFrame ||
          l.oCancelAnimationFrame ||
          function (e) {
            l.clearTimeout(e);
          },
        c = (function () {
          var e,
            t = u.createElement("fakeelement"),
            n = {
              transition: "transitionend",
              OTransition: "oTransitionEnd",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd",
            };
          for (e in n) if (void 0 !== t.style[e]) return n[e];
          return "transitionend";
        })(),
        f = function (e) {
          return e && e.length && e[0].offsetHeight;
        },
        d = function (e, t) {
          var n = g.extend(!0, {}, e, t);
          return (
            g.each(t, function (e, t) {
              g.isArray(t) && (n[e] = t);
            }),
            n
          );
        },
        i = function (e, t, n) {
          var i = this;
          (i.opts = d({ index: n }, g.fancybox.defaults)),
            g.isPlainObject(t) && (i.opts = d(i.opts, t)),
            g.fancybox.isMobile && (i.opts = d(i.opts, i.opts.mobile)),
            (i.id = i.opts.id || ++s),
            (i.currIndex = parseInt(i.opts.index, 10) || 0),
            (i.prevIndex = null),
            (i.prevPos = null),
            (i.currPos = 0),
            (i.firstRun = !0),
            (i.group = []),
            (i.slides = {}),
            i.addContent(e),
            i.group.length && i.init();
        };
      g.extend(i.prototype, {
        init: function () {
          var t,
            n,
            i = this,
            o = i.group[i.currIndex].opts;
          o.closeExisting && g.fancybox.close(!0),
            g("body").addClass("fancybox-active"),
            !g.fancybox.getInstance() &&
              !1 !== o.hideScrollbar &&
              !g.fancybox.isMobile &&
              u.body.scrollHeight > l.innerHeight &&
              (g("head").append(
                '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                  (l.innerWidth - u.documentElement.clientWidth) +
                  "px;}</style>"
              ),
              g("body").addClass("compensate-for-scrollbar")),
            (n = ""),
            g.each(o.buttons, function (e, t) {
              n += o.btnTpl[t] || "";
            }),
            (t = g(
              i.translate(
                i,
                o.baseTpl
                  .replace("{{buttons}}", n)
                  .replace(
                    "{{arrows}}",
                    o.btnTpl.arrowLeft + o.btnTpl.arrowRight
                  )
              )
            )
              .attr("id", "fancybox-container-" + i.id)
              .addClass(o.baseClass)
              .data("FancyBox", i)
              .appendTo(o.parentEl)),
            (i.$refs = { container: t }),
            [
              "bg",
              "inner",
              "infobar",
              "toolbar",
              "stage",
              "caption",
              "navigation",
            ].forEach(function (e) {
              i.$refs[e] = t.find(".fancybox-" + e);
            }),
            i.trigger("onInit"),
            i.activate(),
            i.jumpTo(i.currIndex);
        },
        translate: function (e, t) {
          var n = e.opts.i18n[e.opts.lang] || e.opts.i18n.en;
          return t.replace(/\{\{(\w+)\}\}/g, function (e, t) {
            return void 0 === n[t] ? e : n[t];
          });
        },
        addContent: function (e) {
          var t,
            c = this,
            n = g.makeArray(e);
          g.each(n, function (e, t) {
            var n,
              i,
              o,
              s,
              r,
              a = {},
              l = {};
            g.isPlainObject(t)
              ? (l = (a = t).opts || t)
              : "object" === g.type(t) && g(t).length
              ? ((l = (n = g(t)).data() || {}),
                ((l = g.extend(!0, {}, l, l.options)).$orig = n),
                (a.src = c.opts.src || l.src || n.attr("href")),
                a.type || a.src || ((a.type = "inline"), (a.src = t)))
              : (a = { type: "html", src: t + "" }),
              (a.opts = g.extend(!0, {}, c.opts, l)),
              g.isArray(l.buttons) && (a.opts.buttons = l.buttons),
              g.fancybox.isMobile &&
                a.opts.mobile &&
                (a.opts = d(a.opts, a.opts.mobile)),
              (i = a.type || a.opts.type),
              (s = a.src || ""),
              !i &&
                s &&
                ((o = s.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                  ? ((i = "video"),
                    a.opts.video.format ||
                      (a.opts.video.format =
                        "video/" + ("ogv" === o[1] ? "ogg" : o[1])))
                  : s.match(
                      /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                    )
                  ? (i = "image")
                  : s.match(/\.(pdf)((\?|#).*)?$/i)
                  ? ((i = "iframe"),
                    (a = g.extend(!0, a, {
                      contentType: "pdf",
                      opts: { iframe: { preload: !1 } },
                    })))
                  : "#" === s.charAt(0) && (i = "inline")),
              i ? (a.type = i) : c.trigger("objectNeedsType", a),
              a.contentType ||
                (a.contentType =
                  -1 < g.inArray(a.type, ["html", "inline", "ajax"])
                    ? "html"
                    : a.type),
              (a.index = c.group.length),
              "auto" == a.opts.smallBtn &&
                (a.opts.smallBtn =
                  -1 < g.inArray(a.type, ["html", "inline", "ajax"])),
              "auto" === a.opts.toolbar && (a.opts.toolbar = !a.opts.smallBtn),
              (a.$thumb = a.opts.$thumb || null),
              a.opts.$trigger &&
                a.index === c.opts.index &&
                ((a.$thumb = a.opts.$trigger.find("img:first")),
                a.$thumb.length && (a.opts.$orig = a.opts.$trigger)),
              (a.$thumb && a.$thumb.length) ||
                !a.opts.$orig ||
                (a.$thumb = a.opts.$orig.find("img:first")),
              a.$thumb && !a.$thumb.length && (a.$thumb = null),
              (a.thumb = a.opts.thumb || (a.$thumb ? a.$thumb[0].src : null)),
              "function" === g.type(a.opts.caption) &&
                (a.opts.caption = a.opts.caption.apply(t, [c, a])),
              "function" === g.type(c.opts.caption) &&
                (a.opts.caption = c.opts.caption.apply(t, [c, a])),
              a.opts.caption instanceof g ||
                (a.opts.caption =
                  void 0 === a.opts.caption ? "" : a.opts.caption + ""),
              "ajax" === a.type &&
                1 < (r = s.split(/\s+/, 2)).length &&
                ((a.src = r.shift()), (a.opts.filter = r.shift())),
              a.opts.modal &&
                (a.opts = g.extend(!0, a.opts, {
                  trapFocus: !0,
                  infobar: 0,
                  toolbar: 0,
                  smallBtn: 0,
                  keyboard: 0,
                  slideShow: 0,
                  fullScreen: 0,
                  thumbs: 0,
                  touch: 0,
                  clickContent: !1,
                  clickSlide: !1,
                  clickOutside: !1,
                  dblclickContent: !1,
                  dblclickSlide: !1,
                  dblclickOutside: !1,
                })),
              c.group.push(a);
          }),
            Object.keys(c.slides).length &&
              (c.updateControls(),
              (t = c.Thumbs) && t.isActive && (t.create(), t.focus()));
        },
        addEvents: function () {
          var i = this;
          i.removeEvents(),
            i.$refs.container
              .on("click.fb-close", "[data-fancybox-close]", function (e) {
                e.stopPropagation(), e.preventDefault(), i.close(e);
              })
              .on(
                "touchstart.fb-prev click.fb-prev",
                "[data-fancybox-prev]",
                function (e) {
                  e.stopPropagation(), e.preventDefault(), i.previous();
                }
              )
              .on(
                "touchstart.fb-next click.fb-next",
                "[data-fancybox-next]",
                function (e) {
                  e.stopPropagation(), e.preventDefault(), i.next();
                }
              )
              .on("click.fb", "[data-fancybox-zoom]", function (e) {
                i[i.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
              }),
            o.on("orientationchange.fb resize.fb", function (e) {
              e && e.originalEvent && "resize" === e.originalEvent.type
                ? (i.requestId && a(i.requestId),
                  (i.requestId = p(function () {
                    i.update(e);
                  })))
                : (i.current &&
                    "iframe" === i.current.type &&
                    i.$refs.stage.hide(),
                  setTimeout(
                    function () {
                      i.$refs.stage.show(), i.update(e);
                    },
                    g.fancybox.isMobile ? 600 : 250
                  ));
            }),
            r.on("keydown.fb", function (e) {
              var t = (g.fancybox ? g.fancybox.getInstance() : null).current,
                n = e.keyCode || e.which;
              if (9 != n)
                return !t.opts.keyboard ||
                  e.ctrlKey ||
                  e.altKey ||
                  e.shiftKey ||
                  g(e.target).is("input,textarea,video,audio,select")
                  ? void 0
                  : 8 === n || 27 === n
                  ? (e.preventDefault(), void i.close(e))
                  : 37 === n || 38 === n
                  ? (e.preventDefault(), void i.previous())
                  : 39 === n || 40 === n
                  ? (e.preventDefault(), void i.next())
                  : void i.trigger("afterKeydown", e, n);
              t.opts.trapFocus && i.focus(e);
            }),
            i.group[i.currIndex].opts.idleTime &&
              ((i.idleSecondsCounter = 0),
              r.on(
                "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
                function (e) {
                  (i.idleSecondsCounter = 0),
                    i.isIdle && i.showControls(),
                    (i.isIdle = !1);
                }
              ),
              (i.idleInterval = l.setInterval(function () {
                ++i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime &&
                  !i.isDragging &&
                  ((i.isIdle = !0),
                  (i.idleSecondsCounter = 0),
                  i.hideControls());
              }, 1e3)));
        },
        removeEvents: function () {
          o.off("orientationchange.fb resize.fb"),
            r.off("keydown.fb .fb-idle"),
            this.$refs.container.off(".fb-close .fb-prev .fb-next"),
            this.idleInterval &&
              (l.clearInterval(this.idleInterval), (this.idleInterval = null));
        },
        previous: function (e) {
          return this.jumpTo(this.currPos - 1, e);
        },
        next: function (e) {
          return this.jumpTo(this.currPos + 1, e);
        },
        jumpTo: function (e, i) {
          var t,
            n,
            o,
            s,
            r,
            a,
            l,
            c,
            d,
            u = this,
            p = u.group.length;
          if (!(u.isDragging || u.isClosing || (u.isAnimating && u.firstRun))) {
            if (
              ((e = parseInt(e, 10)),
              !(o = u.current ? u.current.opts.loop : u.opts.loop) &&
                (e < 0 || p <= e))
            )
              return !1;
            if (
              ((t = u.firstRun = !Object.keys(u.slides).length),
              (r = u.current),
              (u.prevIndex = u.currIndex),
              (u.prevPos = u.currPos),
              (s = u.createSlide(e)),
              1 < p &&
                ((o || s.index < p - 1) && u.createSlide(e + 1),
                (o || 0 < s.index) && u.createSlide(e - 1)),
              (u.current = s),
              (u.currIndex = s.index),
              (u.currPos = s.pos),
              u.trigger("beforeShow", t),
              u.updateControls(),
              (s.forcedDuration = void 0),
              g.isNumeric(i)
                ? (s.forcedDuration = i)
                : (i = s.opts[t ? "animationDuration" : "transitionDuration"]),
              (i = parseInt(i, 10)),
              (n = u.isMoved(s)),
              s.$slide.addClass("fancybox-slide--current"),
              t)
            )
              return (
                s.opts.animationEffect &&
                  i &&
                  u.$refs.container.css("transition-duration", i + "ms"),
                u.$refs.container.addClass("fancybox-is-open").trigger("focus"),
                u.loadSlide(s),
                void u.preload("image")
              );
            (a = g.fancybox.getTranslate(r.$slide)),
              (l = g.fancybox.getTranslate(u.$refs.stage)),
              g.each(u.slides, function (e, t) {
                g.fancybox.stop(t.$slide, !0);
              }),
              r.pos !== s.pos && (r.isComplete = !1),
              r.$slide.removeClass(
                "fancybox-slide--complete fancybox-slide--current"
              ),
              n
                ? ((d = a.left - (r.pos * a.width + r.pos * r.opts.gutter)),
                  g.each(u.slides, function (e, t) {
                    t.$slide
                      .removeClass("fancybox-animated")
                      .removeClass(function (e, t) {
                        return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                          " "
                        );
                      });
                    var n = t.pos * a.width + t.pos * t.opts.gutter;
                    g.fancybox.setTranslate(t.$slide, {
                      top: 0,
                      left: n - l.left + d,
                    }),
                      t.pos !== s.pos &&
                        t.$slide.addClass(
                          "fancybox-slide--" +
                            (t.pos > s.pos ? "next" : "previous")
                        ),
                      f(t.$slide),
                      g.fancybox.animate(
                        t.$slide,
                        {
                          top: 0,
                          left:
                            (t.pos - s.pos) * a.width +
                            (t.pos - s.pos) * t.opts.gutter,
                        },
                        i,
                        function () {
                          t.$slide
                            .css({ transform: "", opacity: "" })
                            .removeClass(
                              "fancybox-slide--next fancybox-slide--previous"
                            ),
                            t.pos === u.currPos && u.complete();
                        }
                      );
                  }))
                : i &&
                  s.opts.transitionEffect &&
                  ((c =
                    "fancybox-animated fancybox-fx-" + s.opts.transitionEffect),
                  r.$slide.addClass(
                    "fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")
                  ),
                  g.fancybox.animate(
                    r.$slide,
                    c,
                    i,
                    function () {
                      r.$slide
                        .removeClass(c)
                        .removeClass(
                          "fancybox-slide--next fancybox-slide--previous"
                        );
                    },
                    !1
                  )),
              s.isLoaded ? u.revealContent(s) : u.loadSlide(s),
              u.preload("image");
          }
        },
        createSlide: function (e) {
          var t,
            n,
            i = this;
          return (
            (n = (n = e % i.group.length) < 0 ? i.group.length + n : n),
            !i.slides[e] &&
              i.group[n] &&
              ((t = g('<div class="fancybox-slide"></div>').appendTo(
                i.$refs.stage
              )),
              (i.slides[e] = g.extend(!0, {}, i.group[n], {
                pos: e,
                $slide: t,
                isLoaded: !1,
              })),
              i.updateSlide(i.slides[e])),
            i.slides[e]
          );
        },
        scaleToActual: function (e, t, n) {
          var i,
            o,
            s,
            r,
            a,
            l = this,
            c = l.current,
            d = c.$content,
            u = g.fancybox.getTranslate(c.$slide).width,
            p = g.fancybox.getTranslate(c.$slide).height,
            f = c.width,
            h = c.height;
          l.isAnimating ||
            l.isMoved() ||
            !d ||
            "image" != c.type ||
            !c.isLoaded ||
            c.hasError ||
            ((l.isAnimating = !0),
            g.fancybox.stop(d),
            (e = void 0 === e ? 0.5 * u : e),
            (t = void 0 === t ? 0.5 * p : t),
            ((i = g.fancybox.getTranslate(d)).top -= g.fancybox.getTranslate(
              c.$slide
            ).top),
            (i.left -= g.fancybox.getTranslate(c.$slide).left),
            (r = f / i.width),
            (a = h / i.height),
            (o = 0.5 * u - 0.5 * f),
            (s = 0.5 * p - 0.5 * h),
            u < f &&
              (0 < (o = i.left * r - (e * r - e)) && (o = 0),
              o < u - f && (o = u - f)),
            p < h &&
              (0 < (s = i.top * a - (t * a - t)) && (s = 0),
              s < p - h && (s = p - h)),
            l.updateCursor(f, h),
            g.fancybox.animate(
              d,
              { top: s, left: o, scaleX: r, scaleY: a },
              n || 366,
              function () {
                l.isAnimating = !1;
              }
            ),
            l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
        },
        scaleToFit: function (e) {
          var t,
            n = this,
            i = n.current,
            o = i.$content;
          n.isAnimating ||
            n.isMoved() ||
            !o ||
            "image" != i.type ||
            !i.isLoaded ||
            i.hasError ||
            ((n.isAnimating = !0),
            g.fancybox.stop(o),
            (t = n.getFitPos(i)),
            n.updateCursor(t.width, t.height),
            g.fancybox.animate(
              o,
              {
                top: t.top,
                left: t.left,
                scaleX: t.width / o.width(),
                scaleY: t.height / o.height(),
              },
              e || 366,
              function () {
                n.isAnimating = !1;
              }
            ));
        },
        getFitPos: function (e) {
          var t,
            n,
            i,
            o,
            s = e.$content,
            r = e.$slide,
            a = e.width || e.opts.width,
            l = e.height || e.opts.height,
            c = {};
          return (
            !!(e.isLoaded && s && s.length) &&
            ((t = g.fancybox.getTranslate(this.$refs.stage).width),
            (n = g.fancybox.getTranslate(this.$refs.stage).height),
            (t -=
              parseFloat(r.css("paddingLeft")) +
              parseFloat(r.css("paddingRight")) +
              parseFloat(s.css("marginLeft")) +
              parseFloat(s.css("marginRight"))),
            (n -=
              parseFloat(r.css("paddingTop")) +
              parseFloat(r.css("paddingBottom")) +
              parseFloat(s.css("marginTop")) +
              parseFloat(s.css("marginBottom"))),
            (a && l) || ((a = t), (l = n)),
            t - 0.5 < (a *= i = Math.min(1, t / a, n / l)) && (a = t),
            n - 0.5 < (l *= i) && (l = n),
            "image" === e.type
              ? ((c.top =
                  Math.floor(0.5 * (n - l)) + parseFloat(r.css("paddingTop"))),
                (c.left =
                  Math.floor(0.5 * (t - a)) + parseFloat(r.css("paddingLeft"))))
              : "video" === e.contentType &&
                (a /
                  (o =
                    e.opts.width && e.opts.height
                      ? a / l
                      : e.opts.ratio || 16 / 9) <
                l
                  ? (l = a / o)
                  : l * o < a && (a = l * o)),
            (c.width = a),
            (c.height = l),
            c)
          );
        },
        update: function (n) {
          var i = this;
          g.each(i.slides, function (e, t) {
            i.updateSlide(t, n);
          });
        },
        updateSlide: function (e, t) {
          var n = this,
            i = e && e.$content,
            o = e.width || e.opts.width,
            s = e.height || e.opts.height,
            r = e.$slide;
          n.adjustCaption(e),
            i &&
              (o || s || "video" === e.contentType) &&
              !e.hasError &&
              (g.fancybox.stop(i),
              g.fancybox.setTranslate(i, n.getFitPos(e)),
              e.pos === n.currPos && ((n.isAnimating = !1), n.updateCursor())),
            n.adjustLayout(e),
            r.length &&
              (r.trigger("refresh"),
              e.pos === n.currPos &&
                n.$refs.toolbar
                  .add(n.$refs.navigation.find(".fancybox-button--arrow_right"))
                  .toggleClass(
                    "compensate-for-scrollbar",
                    r.get(0).scrollHeight > r.get(0).clientHeight
                  )),
            n.trigger("onUpdate", e, t);
        },
        centerSlide: function (e) {
          var t = this,
            n = t.current,
            i = n.$slide;
          !t.isClosing &&
            n &&
            (i.siblings().css({ transform: "", opacity: "" }),
            i
              .parent()
              .children()
              .removeClass("fancybox-slide--previous fancybox-slide--next"),
            g.fancybox.animate(
              i,
              { top: 0, left: 0, opacity: 1 },
              void 0 === e ? 0 : e,
              function () {
                i.css({ transform: "", opacity: "" }),
                  n.isComplete || t.complete();
              },
              !1
            ));
        },
        isMoved: function (e) {
          var t,
            n,
            i = e || this.current;
          return (
            !!i &&
            ((n = g.fancybox.getTranslate(this.$refs.stage)),
            (t = g.fancybox.getTranslate(i.$slide)),
            !i.$slide.hasClass("fancybox-animated") &&
              (0.5 < Math.abs(t.top - n.top) ||
                0.5 < Math.abs(t.left - n.left)))
          );
        },
        updateCursor: function (e, t) {
          var n,
            i,
            o = this,
            s = o.current,
            r = o.$refs.container;
          s &&
            !o.isClosing &&
            o.Guestures &&
            (r.removeClass(
              "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"
            ),
            (i = !!(n = o.canPan(e, t)) || o.isZoomable()),
            r.toggleClass("fancybox-is-zoomable", i),
            g("[data-fancybox-zoom]").prop("disabled", !i),
            n
              ? r.addClass("fancybox-can-pan")
              : i &&
                ("zoom" === s.opts.clickContent ||
                  (g.isFunction(s.opts.clickContent) &&
                    "zoom" == s.opts.clickContent(s)))
              ? r.addClass("fancybox-can-zoomIn")
              : s.opts.touch &&
                (s.opts.touch.vertical || 1 < o.group.length) &&
                "video" !== s.contentType &&
                r.addClass("fancybox-can-swipe"));
        },
        isZoomable: function () {
          var e,
            t = this.current;
          if (t && !this.isClosing && "image" === t.type && !t.hasError) {
            if (!t.isLoaded) return !0;
            if (
              (e = this.getFitPos(t)) &&
              (t.width > e.width || t.height > e.height)
            )
              return !0;
          }
          return !1;
        },
        isScaledDown: function (e, t) {
          var n = !1,
            i = this.current,
            o = i.$content;
          return (
            void 0 !== e && void 0 !== t
              ? (n = e < i.width && t < i.height)
              : o &&
                (n =
                  (n = g.fancybox.getTranslate(o)).width < i.width &&
                  n.height < i.height),
            n
          );
        },
        canPan: function (e, t) {
          var n = this.current,
            i = null,
            o = !1;
          return (
            "image" === n.type &&
              (n.isComplete || (e && t)) &&
              !n.hasError &&
              ((o = this.getFitPos(n)),
              void 0 !== e && void 0 !== t
                ? (i = { width: e, height: t })
                : n.isComplete && (i = g.fancybox.getTranslate(n.$content)),
              i &&
                o &&
                (o =
                  1.5 < Math.abs(i.width - o.width) ||
                  1.5 < Math.abs(i.height - o.height))),
            o
          );
        },
        loadSlide: function (n) {
          var e,
            t,
            i,
            o = this;
          if (!n.isLoading && !n.isLoaded) {
            if (!(n.isLoading = !0) === o.trigger("beforeLoad", n))
              return (n.isLoading = !1);
            switch (
              ((e = n.type),
              (t = n.$slide)
                .off("refresh")
                .trigger("onReset")
                .addClass(n.opts.slideClass),
              e)
            ) {
              case "image":
                o.setImage(n);
                break;
              case "iframe":
                o.setIframe(n);
                break;
              case "html":
                o.setContent(n, n.src || n.content);
                break;
              case "video":
                o.setContent(
                  n,
                  n.opts.video.tpl
                    .replace(/\{\{src\}\}/gi, n.src)
                    .replace(
                      "{{format}}",
                      n.opts.videoFormat || n.opts.video.format || ""
                    )
                    .replace("{{poster}}", n.thumb || "")
                );
                break;
              case "inline":
                g(n.src).length ? o.setContent(n, g(n.src)) : o.setError(n);
                break;
              case "ajax":
                o.showLoading(n),
                  (i = g.ajax(
                    g.extend({}, n.opts.ajax.settings, {
                      url: n.src,
                      success: function (e, t) {
                        "success" === t && o.setContent(n, e);
                      },
                      error: function (e, t) {
                        e && "abort" !== t && o.setError(n);
                      },
                    })
                  )),
                  t.one("onReset", function () {
                    i.abort();
                  });
                break;
              default:
                o.setError(n);
            }
            return !0;
          }
        },
        setImage: function (t) {
          var e,
            n = this;
          setTimeout(function () {
            var e = t.$image;
            n.isClosing ||
              !t.isLoading ||
              (e && e.length && e[0].complete) ||
              t.hasError ||
              n.showLoading(t);
          }, 50),
            n.checkSrcset(t),
            (t.$content = g('<div class="fancybox-content"></div>')
              .addClass("fancybox-is-hidden")
              .appendTo(t.$slide.addClass("fancybox-slide--image"))),
            !1 !== t.opts.preload &&
              t.opts.width &&
              t.opts.height &&
              t.thumb &&
              ((t.width = t.opts.width),
              (t.height = t.opts.height),
              ((e = u.createElement("img")).onerror = function () {
                g(this).remove(), (t.$ghost = null);
              }),
              (e.onload = function () {
                n.afterLoad(t);
              }),
              (t.$ghost = g(e)
                .addClass("fancybox-image")
                .appendTo(t.$content)
                .attr("src", t.thumb))),
            n.setBigImage(t);
        },
        checkSrcset: function (e) {
          var t,
            n,
            i,
            o,
            s = e.opts.srcset || e.opts.image.srcset;
          if (s) {
            (i = l.devicePixelRatio || 1),
              (o = l.innerWidth * i),
              (n = s.split(",").map(function (e) {
                var i = {};
                return (
                  e
                    .trim()
                    .split(/\s+/)
                    .forEach(function (e, t) {
                      var n = parseInt(e.substring(0, e.length - 1), 10);
                      if (0 === t) return (i.url = e);
                      n && ((i.value = n), (i.postfix = e[e.length - 1]));
                    }),
                  i
                );
              })).sort(function (e, t) {
                return e.value - t.value;
              });
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              if (
                ("w" === a.postfix && a.value >= o) ||
                ("x" === a.postfix && a.value >= i)
              ) {
                t = a;
                break;
              }
            }
            !t && n.length && (t = n[n.length - 1]),
              t &&
                ((e.src = t.url),
                e.width &&
                  e.height &&
                  "w" == t.postfix &&
                  ((e.height = (e.width / e.height) * t.value),
                  (e.width = t.value)),
                (e.opts.srcset = s));
          }
        },
        setBigImage: function (t) {
          var n = this,
            e = u.createElement("img"),
            i = g(e);
          (t.$image = i
            .one("error", function () {
              n.setError(t);
            })
            .one("load", function () {
              var e;
              t.$ghost ||
                (n.resolveImageSlideSize(
                  t,
                  this.naturalWidth,
                  this.naturalHeight
                ),
                n.afterLoad(t)),
                n.isClosing ||
                  (t.opts.srcset &&
                    (((e = t.opts.sizes) && "auto" !== e) ||
                      (e =
                        (1 < t.width / t.height && 1 < o.width() / o.height()
                          ? "100"
                          : Math.round((t.width / t.height) * 100)) + "vw"),
                    i.attr("sizes", e).attr("srcset", t.opts.srcset)),
                  t.$ghost &&
                    setTimeout(function () {
                      t.$ghost && !n.isClosing && t.$ghost.hide();
                    }, Math.min(300, Math.max(1e3, t.height / 1600))),
                  n.hideLoading(t));
            })
            .addClass("fancybox-image")
            .attr("src", t.src)
            .appendTo(t.$content)),
            (e.complete || "complete" == e.readyState) &&
            i.naturalWidth &&
            i.naturalHeight
              ? i.trigger("load")
              : e.error && i.trigger("error");
        },
        resolveImageSlideSize: function (e, t, n) {
          var i = parseInt(e.opts.width, 10),
            o = parseInt(e.opts.height, 10);
          (e.width = t),
            (e.height = n),
            0 < i && ((e.width = i), (e.height = Math.floor((i * n) / t))),
            0 < o && ((e.width = Math.floor((o * t) / n)), (e.height = o));
        },
        setIframe: function (o) {
          var s,
            t = this,
            r = o.opts.iframe,
            a = o.$slide;
          (o.$content = g(
            '<div class="fancybox-content' +
              (r.preload ? " fancybox-is-hidden" : "") +
              '"></div>'
          )
            .css(r.css)
            .appendTo(a)),
            a.addClass("fancybox-slide--" + o.contentType),
            (o.$iframe = s = g(r.tpl.replace(/\{rnd\}/g, new Date().getTime()))
              .attr(r.attr)
              .appendTo(o.$content)),
            r.preload
              ? (t.showLoading(o),
                s.on("load.fb error.fb", function (e) {
                  (this.isReady = 1),
                    o.$slide.trigger("refresh"),
                    t.afterLoad(o);
                }),
                a.on("refresh.fb", function () {
                  var e,
                    t = o.$content,
                    n = r.css.width,
                    i = r.css.height;
                  if (1 === s[0].isReady) {
                    try {
                      e = s.contents().find("body");
                    } catch (e) {}
                    e &&
                      e.length &&
                      e.children().length &&
                      (a.css("overflow", "visible"),
                      t.css({
                        width: "100%",
                        "max-width": "100%",
                        height: "9999px",
                      }),
                      void 0 === n &&
                        (n = Math.ceil(
                          Math.max(e[0].clientWidth, e.outerWidth(!0))
                        )),
                      t.css("width", n || "").css("max-width", ""),
                      void 0 === i &&
                        (i = Math.ceil(
                          Math.max(e[0].clientHeight, e.outerHeight(!0))
                        )),
                      t.css("height", i || ""),
                      a.css("overflow", "auto")),
                      t.removeClass("fancybox-is-hidden");
                  }
                }))
              : t.afterLoad(o),
            s.attr("src", o.src),
            a.one("onReset", function () {
              try {
                g(this)
                  .find("iframe")
                  .hide()
                  .unbind()
                  .attr("src", "//about:blank");
              } catch (e) {}
              g(this).off("refresh.fb").empty(),
                (o.isLoaded = !1),
                (o.isRevealed = !1);
            });
        },
        setContent: function (e, t) {
          var n;
          this.isClosing ||
            (this.hideLoading(e),
            e.$content && g.fancybox.stop(e.$content),
            e.$slide.empty(),
            (n = t) && n.hasOwnProperty && n instanceof g && t.parent().length
              ? ((t.hasClass("fancybox-content") ||
                  t.parent().hasClass("fancybox-content")) &&
                  t.parents(".fancybox-slide").trigger("onReset"),
                (e.$placeholder = g("<div>").hide().insertAfter(t)),
                t.css("display", "inline-block"))
              : e.hasError ||
                ("string" === g.type(t) &&
                  (t = g("<div>").append(g.trim(t)).contents()),
                e.opts.filter && (t = g("<div>").html(t).find(e.opts.filter))),
            e.$slide.one("onReset", function () {
              g(this).find("video,audio").trigger("pause"),
                e.$placeholder &&
                  (e.$placeholder
                    .after(t.removeClass("fancybox-content").hide())
                    .remove(),
                  (e.$placeholder = null)),
                e.$smallBtn && (e.$smallBtn.remove(), (e.$smallBtn = null)),
                e.hasError ||
                  (g(this).empty(), (e.isLoaded = !1), (e.isRevealed = !1));
            }),
            g(t).appendTo(e.$slide),
            g(t).is("video,audio") &&
              (g(t).addClass("fancybox-video"),
              g(t).wrap("<div></div>"),
              (e.contentType = "video"),
              (e.opts.width = e.opts.width || g(t).attr("width")),
              (e.opts.height = e.opts.height || g(t).attr("height"))),
            (e.$content = e.$slide
              .children()
              .filter("div,form,main,video,audio,article,.fancybox-content")
              .first()),
            e.$content.siblings().hide(),
            e.$content.length ||
              (e.$content = e.$slide
                .wrapInner("<div></div>")
                .children()
                .first()),
            e.$content.addClass("fancybox-content"),
            e.$slide.addClass("fancybox-slide--" + e.contentType),
            this.afterLoad(e));
        },
        setError: function (e) {
          (e.hasError = !0),
            e.$slide
              .trigger("onReset")
              .removeClass("fancybox-slide--" + e.contentType)
              .addClass("fancybox-slide--error"),
            (e.contentType = "html"),
            this.setContent(e, this.translate(e, e.opts.errorTpl)),
            e.pos === this.currPos && (this.isAnimating = !1);
        },
        showLoading: function (e) {
          (e = e || this.current) &&
            !e.$spinner &&
            (e.$spinner = g(this.translate(this, this.opts.spinnerTpl))
              .appendTo(e.$slide)
              .hide()
              .fadeIn("fast"));
        },
        hideLoading: function (e) {
          (e = e || this.current) &&
            e.$spinner &&
            (e.$spinner.stop().remove(), delete e.$spinner);
        },
        afterLoad: function (e) {
          var t = this;
          t.isClosing ||
            ((e.isLoading = !1),
            (e.isLoaded = !0),
            t.trigger("afterLoad", e),
            t.hideLoading(e),
            !e.opts.smallBtn ||
              (e.$smallBtn && e.$smallBtn.length) ||
              (e.$smallBtn = g(t.translate(e, e.opts.btnTpl.smallBtn)).appendTo(
                e.$content
              )),
            e.opts.protect &&
              e.$content &&
              !e.hasError &&
              (e.$content.on("contextmenu.fb", function (e) {
                return 2 == e.button && e.preventDefault(), !0;
              }),
              "image" === e.type &&
                g('<div class="fancybox-spaceball"></div>').appendTo(
                  e.$content
                )),
            t.adjustCaption(e),
            t.adjustLayout(e),
            e.pos === t.currPos && t.updateCursor(),
            t.revealContent(e));
        },
        adjustCaption: function (e) {
          var t,
            n = this,
            i = e || n.current,
            o = i.opts.caption,
            s = i.opts.preventCaptionOverlap,
            r = n.$refs.caption,
            a = !1;
          r.toggleClass("fancybox-caption--separate", s),
            s &&
              o &&
              o.length &&
              (i.pos !== n.currPos
                ? ((t = r.clone().appendTo(r.parent()))
                    .children()
                    .eq(0)
                    .empty()
                    .html(o),
                  (a = t.outerHeight(!0)),
                  t.empty().remove())
                : n.$caption && (a = n.$caption.outerHeight(!0)),
              i.$slide.css("padding-bottom", a || ""));
        },
        adjustLayout: function (e) {
          var t,
            n,
            i,
            o,
            s = e || this.current;
          s.isLoaded &&
            !0 !== s.opts.disableLayoutFix &&
            (s.$content.css("margin-bottom", ""),
            s.$content.outerHeight() > s.$slide.height() + 0.5 &&
              ((i = s.$slide[0].style["padding-bottom"]),
              (o = s.$slide.css("padding-bottom")),
              0 < parseFloat(o) &&
                ((t = s.$slide[0].scrollHeight),
                s.$slide.css("padding-bottom", 0),
                Math.abs(t - s.$slide[0].scrollHeight) < 1 && (n = o),
                s.$slide.css("padding-bottom", i))),
            s.$content.css("margin-bottom", n));
        },
        revealContent: function (e) {
          var t,
            n,
            i,
            o,
            s = this,
            r = e.$slide,
            a = !1,
            l = !1,
            c = s.isMoved(e),
            d = e.isRevealed;
          return (
            (e.isRevealed = !0),
            (t = e.opts[s.firstRun ? "animationEffect" : "transitionEffect"]),
            (i =
              e.opts[s.firstRun ? "animationDuration" : "transitionDuration"]),
            (i = parseInt(
              void 0 === e.forcedDuration ? i : e.forcedDuration,
              10
            )),
            (!c && e.pos === s.currPos && i) || (t = !1),
            "zoom" === t &&
              (e.pos === s.currPos &&
              i &&
              "image" === e.type &&
              !e.hasError &&
              (l = s.getThumbPos(e))
                ? (a = s.getFitPos(e))
                : (t = "fade")),
            "zoom" === t
              ? ((s.isAnimating = !0),
                (a.scaleX = a.width / l.width),
                (a.scaleY = a.height / l.height),
                "auto" == (o = e.opts.zoomOpacity) &&
                  (o = 0.1 < Math.abs(e.width / e.height - l.width / l.height)),
                o && ((l.opacity = 0.1), (a.opacity = 1)),
                g.fancybox.setTranslate(
                  e.$content.removeClass("fancybox-is-hidden"),
                  l
                ),
                f(e.$content),
                void g.fancybox.animate(e.$content, a, i, function () {
                  (s.isAnimating = !1), s.complete();
                }))
              : (s.updateSlide(e),
                t
                  ? (g.fancybox.stop(r),
                    (n =
                      "fancybox-slide--" +
                      (e.pos >= s.prevPos ? "next" : "previous") +
                      " fancybox-animated fancybox-fx-" +
                      t),
                    r.addClass(n).removeClass("fancybox-slide--current"),
                    e.$content.removeClass("fancybox-is-hidden"),
                    f(r),
                    "image" !== e.type && e.$content.hide().show(0),
                    void g.fancybox.animate(
                      r,
                      "fancybox-slide--current",
                      i,
                      function () {
                        r.removeClass(n).css({ transform: "", opacity: "" }),
                          e.pos === s.currPos && s.complete();
                      },
                      !0
                    ))
                  : (e.$content.removeClass("fancybox-is-hidden"),
                    d ||
                      !c ||
                      "image" !== e.type ||
                      e.hasError ||
                      e.$content.hide().fadeIn("fast"),
                    void (e.pos === s.currPos && s.complete())))
          );
        },
        getThumbPos: function (e) {
          var t,
            n,
            i,
            o,
            s,
            r,
            a,
            l,
            c = !1,
            d = e.$thumb;
          return (
            !(
              !d ||
              !(r = d[0]) ||
              r.ownerDocument !== u ||
              (g(".fancybox-container").css("pointer-events", "none"),
              (a = {
                x: r.getBoundingClientRect().left + r.offsetWidth / 2,
                y: r.getBoundingClientRect().top + r.offsetHeight / 2,
              }),
              (l = u.elementFromPoint(a.x, a.y) === r),
              g(".fancybox-container").css("pointer-events", ""),
              !l)
            ) &&
            ((t = g.fancybox.getTranslate(d)),
            (n = parseFloat(d.css("border-top-width") || 0)),
            (i = parseFloat(d.css("border-right-width") || 0)),
            (o = parseFloat(d.css("border-bottom-width") || 0)),
            (s = parseFloat(d.css("border-left-width") || 0)),
            (c = {
              top: t.top + n,
              left: t.left + s,
              width: t.width - i - s,
              height: t.height - n - o,
              scaleX: 1,
              scaleY: 1,
            }),
            0 < t.width && 0 < t.height && c)
          );
        },
        complete: function () {
          var e,
            n = this,
            t = n.current,
            i = {};
          !n.isMoved() &&
            t.isLoaded &&
            (t.isComplete ||
              ((t.isComplete = !0),
              t.$slide.siblings().trigger("onReset"),
              n.preload("inline"),
              f(t.$slide),
              t.$slide.addClass("fancybox-slide--complete"),
              g.each(n.slides, function (e, t) {
                t.pos >= n.currPos - 1 && t.pos <= n.currPos + 1
                  ? (i[t.pos] = t)
                  : t && (g.fancybox.stop(t.$slide), t.$slide.off().remove());
              }),
              (n.slides = i)),
            (n.isAnimating = !1),
            n.updateCursor(),
            n.trigger("afterShow"),
            t.opts.video.autoStart &&
              t.$slide
                .find("video,audio")
                .filter(":visible:first")
                .trigger("play")
                .one("ended", function () {
                  Document.exitFullscreen
                    ? Document.exitFullscreen()
                    : this.webkitExitFullscreen && this.webkitExitFullscreen(),
                    n.next();
                }),
            t.opts.autoFocus &&
              "html" === t.contentType &&
              ((e = t.$content.find("input[autofocus]:enabled:visible:first"))
                .length
                ? e.trigger("focus")
                : n.focus(null, !0)),
            t.$slide.scrollTop(0).scrollLeft(0));
        },
        preload: function (e) {
          var t,
            n,
            i = this;
          i.group.length < 2 ||
            ((n = i.slides[i.currPos + 1]),
            (t = i.slides[i.currPos - 1]) && t.type === e && i.loadSlide(t),
            n && n.type === e && i.loadSlide(n));
        },
        focus: function (e, t) {
          var n,
            i,
            o = this,
            s = [
              "a[href]",
              "area[href]",
              'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
              "select:not([disabled]):not([aria-hidden])",
              "textarea:not([disabled]):not([aria-hidden])",
              "button:not([disabled]):not([aria-hidden])",
              "iframe",
              "object",
              "embed",
              "video",
              "audio",
              "[contenteditable]",
              '[tabindex]:not([tabindex^="-"])',
            ].join(",");
          o.isClosing ||
            ((n = (n =
              !e && o.current && o.current.isComplete
                ? o.current.$slide.find(
                    "*:visible" + (t ? ":not(.fancybox-close-small)" : "")
                  )
                : o.$refs.container.find("*:visible"))
              .filter(s)
              .filter(function () {
                return (
                  "hidden" !== g(this).css("visibility") &&
                  !g(this).hasClass("disabled")
                );
              })).length
              ? ((i = n.index(u.activeElement)),
                e && e.shiftKey
                  ? (i < 0 || 0 == i) &&
                    (e.preventDefault(), n.eq(n.length - 1).trigger("focus"))
                  : (i < 0 || i == n.length - 1) &&
                    (e && e.preventDefault(), n.eq(0).trigger("focus")))
              : o.$refs.container.trigger("focus"));
        },
        activate: function () {
          var t = this;
          g(".fancybox-container").each(function () {
            var e = g(this).data("FancyBox");
            e &&
              e.id !== t.id &&
              !e.isClosing &&
              (e.trigger("onDeactivate"), e.removeEvents(), (e.isVisible = !1));
          }),
            (t.isVisible = !0),
            (t.current || t.isIdle) && (t.update(), t.updateControls()),
            t.trigger("onActivate"),
            t.addEvents();
        },
        close: function (e, t) {
          var n,
            i,
            o,
            s,
            r,
            a,
            l,
            c = this,
            d = c.current,
            u = function () {
              c.cleanUp(e);
            };
          return (
            !c.isClosing &&
            (!(c.isClosing = !0) === c.trigger("beforeClose", e)
              ? ((c.isClosing = !1),
                p(function () {
                  c.update();
                }),
                !1)
              : (c.removeEvents(),
                (o = d.$content),
                (n = d.opts.animationEffect),
                (i = g.isNumeric(t) ? t : n ? d.opts.animationDuration : 0),
                d.$slide.removeClass(
                  "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                ),
                !0 !== e ? g.fancybox.stop(d.$slide) : (n = !1),
                d.$slide.siblings().trigger("onReset").remove(),
                i &&
                  c.$refs.container
                    .removeClass("fancybox-is-open")
                    .addClass("fancybox-is-closing")
                    .css("transition-duration", i + "ms"),
                c.hideLoading(d),
                c.hideControls(!0),
                c.updateCursor(),
                "zoom" !== n ||
                  (o &&
                    i &&
                    "image" === d.type &&
                    !c.isMoved() &&
                    !d.hasError &&
                    (l = c.getThumbPos(d))) ||
                  (n = "fade"),
                "zoom" === n
                  ? (g.fancybox.stop(o),
                    (a = {
                      top: (s = g.fancybox.getTranslate(o)).top,
                      left: s.left,
                      scaleX: s.width / l.width,
                      scaleY: s.height / l.height,
                      width: l.width,
                      height: l.height,
                    }),
                    "auto" == (r = d.opts.zoomOpacity) &&
                      (r =
                        0.1 <
                        Math.abs(d.width / d.height - l.width / l.height)),
                    r && (l.opacity = 0),
                    g.fancybox.setTranslate(o, a),
                    f(o),
                    g.fancybox.animate(o, l, i, u))
                  : n && i
                  ? g.fancybox.animate(
                      d.$slide
                        .addClass("fancybox-slide--previous")
                        .removeClass("fancybox-slide--current"),
                      "fancybox-animated fancybox-fx-" + n,
                      i,
                      u
                    )
                  : !0 === e
                  ? setTimeout(u, i)
                  : u(),
                !0))
          );
        },
        cleanUp: function (e) {
          var t,
            n,
            i,
            o = this,
            s = o.current.opts.$orig;
          o.current.$slide.trigger("onReset"),
            o.$refs.container.empty().remove(),
            o.trigger("afterClose", e),
            o.current.opts.backFocus &&
              ((s && s.length && s.is(":visible")) || (s = o.$trigger),
              s &&
                s.length &&
                ((n = l.scrollX),
                (i = l.scrollY),
                s.trigger("focus"),
                g("html, body").scrollTop(i).scrollLeft(n))),
            (o.current = null),
            (t = g.fancybox.getInstance())
              ? t.activate()
              : (g("body").removeClass(
                  "fancybox-active compensate-for-scrollbar"
                ),
                g("#fancybox-style-noscroll").remove());
        },
        trigger: function (e, t) {
          var n,
            i = Array.prototype.slice.call(arguments, 1),
            o = this,
            s = t && t.opts ? t : o.current;
          if (
            (s ? i.unshift(s) : (s = o),
            i.unshift(o),
            g.isFunction(s.opts[e]) && (n = s.opts[e].apply(s, i)),
            !1 === n)
          )
            return n;
          "afterClose" !== e && o.$refs
            ? o.$refs.container.trigger(e + ".fb", i)
            : r.trigger(e + ".fb", i);
        },
        updateControls: function () {
          var e = this,
            t = e.current,
            n = t.index,
            i = e.$refs.container,
            o = e.$refs.caption,
            s = t.opts.caption;
          t.$slide.trigger("refresh"),
            s && s.length
              ? (e.$caption = o).children().eq(0).html(s)
              : (e.$caption = null),
            e.hasHiddenControls || e.isIdle || e.showControls(),
            i.find("[data-fancybox-count]").html(e.group.length),
            i.find("[data-fancybox-index]").html(n + 1),
            i
              .find("[data-fancybox-prev]")
              .prop("disabled", !t.opts.loop && n <= 0),
            i
              .find("[data-fancybox-next]")
              .prop("disabled", !t.opts.loop && n >= e.group.length - 1),
            "image" === t.type
              ? i
                  .find("[data-fancybox-zoom]")
                  .show()
                  .end()
                  .find("[data-fancybox-download]")
                  .attr("href", t.opts.image.src || t.src)
                  .show()
              : t.opts.toolbar &&
                i.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
            g(u.activeElement).is(":hidden,[disabled]") &&
              e.$refs.container.trigger("focus");
        },
        hideControls: function (e) {
          var t = ["infobar", "toolbar", "nav"];
          (!e && this.current.opts.preventCaptionOverlap) || t.push("caption"),
            this.$refs.container.removeClass(
              t
                .map(function (e) {
                  return "fancybox-show-" + e;
                })
                .join(" ")
            ),
            (this.hasHiddenControls = !0);
        },
        showControls: function () {
          var e = this,
            t = e.current ? e.current.opts : e.opts,
            n = e.$refs.container;
          (e.hasHiddenControls = !1),
            (e.idleSecondsCounter = 0),
            n
              .toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons))
              .toggleClass(
                "fancybox-show-infobar",
                !!(t.infobar && 1 < e.group.length)
              )
              .toggleClass("fancybox-show-caption", !!e.$caption)
              .toggleClass(
                "fancybox-show-nav",
                !!(t.arrows && 1 < e.group.length)
              )
              .toggleClass("fancybox-is-modal", !!t.modal);
        },
        toggleControls: function () {
          this.hasHiddenControls ? this.showControls() : this.hideControls();
        },
      }),
        (g.fancybox = {
          version: "3.5.7",
          defaults: t,
          getInstance: function (e) {
            var t = g(
                '.fancybox-container:not(".fancybox-is-closing"):last'
              ).data("FancyBox"),
              n = Array.prototype.slice.call(arguments, 1);
            return (
              t instanceof i &&
              ("string" === g.type(e)
                ? t[e].apply(t, n)
                : "function" === g.type(e) && e.apply(t, n),
              t)
            );
          },
          open: function (e, t, n) {
            return new i(e, t, n);
          },
          close: function (e) {
            var t = this.getInstance();
            t && (t.close(), !0 === e && this.close(e));
          },
          destroy: function () {
            this.close(!0), r.add("body").off("click.fb-start", "**");
          },
          isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ),
          use3d:
            ((v = u.createElement("div")),
            l.getComputedStyle &&
              l.getComputedStyle(v) &&
              l.getComputedStyle(v).getPropertyValue("transform") &&
              !(u.documentMode && u.documentMode < 11)),
          getTranslate: function (e) {
            var t;
            return (
              !(!e || !e.length) && {
                top: (t = e[0].getBoundingClientRect()).top || 0,
                left: t.left || 0,
                width: t.width,
                height: t.height,
                opacity: parseFloat(e.css("opacity")),
              }
            );
          },
          setTranslate: function (e, t) {
            var n = "",
              i = {};
            if (e && t)
              return (
                (void 0 === t.left && void 0 === t.top) ||
                  ((n =
                    (void 0 === t.left ? e.position().left : t.left) +
                    "px, " +
                    (void 0 === t.top ? e.position().top : t.top) +
                    "px"),
                  (n = this.use3d
                    ? "translate3d(" + n + ", 0px)"
                    : "translate(" + n + ")")),
                void 0 !== t.scaleX && void 0 !== t.scaleY
                  ? (n += " scale(" + t.scaleX + ", " + t.scaleY + ")")
                  : void 0 !== t.scaleX && (n += " scaleX(" + t.scaleX + ")"),
                n.length && (i.transform = n),
                void 0 !== t.opacity && (i.opacity = t.opacity),
                void 0 !== t.width && (i.width = t.width),
                void 0 !== t.height && (i.height = t.height),
                e.css(i)
              );
          },
          animate: function (t, n, i, o, s) {
            var r,
              a = this;
            g.isFunction(i) && ((o = i), (i = null)),
              a.stop(t),
              (r = a.getTranslate(t)),
              t.on(c, function (e) {
                (!e ||
                  !e.originalEvent ||
                  (t.is(e.originalEvent.target) &&
                    "z-index" != e.originalEvent.propertyName)) &&
                  (a.stop(t),
                  g.isNumeric(i) && t.css("transition-duration", ""),
                  g.isPlainObject(n)
                    ? void 0 !== n.scaleX &&
                      void 0 !== n.scaleY &&
                      a.setTranslate(t, {
                        top: n.top,
                        left: n.left,
                        width: r.width * n.scaleX,
                        height: r.height * n.scaleY,
                        scaleX: 1,
                        scaleY: 1,
                      })
                    : !0 !== s && t.removeClass(n),
                  g.isFunction(o) && o(e));
              }),
              g.isNumeric(i) && t.css("transition-duration", i + "ms"),
              g.isPlainObject(n)
                ? (void 0 !== n.scaleX &&
                    void 0 !== n.scaleY &&
                    (delete n.width,
                    delete n.height,
                    t.parent().hasClass("fancybox-slide--image") &&
                      t.parent().addClass("fancybox-is-scaling")),
                  g.fancybox.setTranslate(t, n))
                : t.addClass(n),
              t.data(
                "timer",
                setTimeout(function () {
                  t.trigger(c);
                }, i + 33)
              );
          },
          stop: function (e, t) {
            e &&
              e.length &&
              (clearTimeout(e.data("timer")),
              t && e.trigger(c),
              e.off(c).css("transition-duration", ""),
              e.parent().removeClass("fancybox-is-scaling"));
          },
        }),
        (g.fn.fancybox = function (e) {
          var t;
          return (
            (t = (e = e || {}).selector || !1)
              ? g("body")
                  .off("click.fb-start", t)
                  .on("click.fb-start", t, { options: e }, n)
              : this.off("click.fb-start").on(
                  "click.fb-start",
                  { items: this, options: e },
                  n
                ),
            this
          );
        }),
        r.on("click.fb-start", "[data-fancybox]", n),
        r.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
          g('[data-fancybox="' + g(this).attr("data-fancybox-trigger") + '"]')
            .eq(g(this).attr("data-fancybox-index") || 0)
            .trigger("click.fb-start", { $trigger: g(this) });
        }),
        (h = null),
        r.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
          switch (e.type) {
            case "mousedown":
              h = g(this);
              break;
            case "mouseup":
              h = null;
              break;
            case "focusin":
              g(".fancybox-button").removeClass("fancybox-focus"),
                g(this).is(h) ||
                  g(this).is("[disabled]") ||
                  g(this).addClass("fancybox-focus");
              break;
            case "focusout":
              g(".fancybox-button").removeClass("fancybox-focus");
          }
        });
    }
    var h, v;
  })(window, document, jQuery),
  (function (f) {
    "use strict";
    var i = {
        youtube: {
          matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1,
          },
          paramPlace: 8,
          type: "iframe",
          url: "https://www.youtube-nocookie.com/embed/$4",
          thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
          },
          paramPlace: 3,
          type: "iframe",
          url: "//player.vimeo.com/video/$2",
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l",
        },
        gmap_place: {
          matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function (e) {
            return (
              "//maps.google." +
              e[2] +
              "/?ll=" +
              (e[9]
                ? e[9] +
                  "&z=" +
                  Math.floor(e[10]) +
                  (e[12] ? e[12].replace(/^\//, "&") : "")
                : e[12] + ""
              ).replace(/\?/, "&") +
              "&output=" +
              (e[12] && 0 < e[12].indexOf("layer=c") ? "svembed" : "embed")
            );
          },
        },
        gmap_search: {
          matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: "iframe",
          url: function (e) {
            return (
              "//maps.google." +
              e[2] +
              "/maps?q=" +
              e[5].replace("query=", "q=").replace("api=1", "") +
              "&output=embed"
            );
          },
        },
      },
      h = function (n, e, t) {
        if (n)
          return (
            (t = t || ""),
            "object" === f.type(t) && (t = f.param(t, !0)),
            f.each(e, function (e, t) {
              n = n.replace("$" + e, t || "");
            }),
            t.length && (n += (0 < n.indexOf("?") ? "&" : "?") + t),
            n
          );
      };
    f(document).on("objectNeedsType.fb", function (e, t, o) {
      var n,
        s,
        r,
        a,
        l,
        c,
        d,
        u = o.src || "",
        p = !1;
      (n = f.extend(!0, {}, i, o.opts.media)),
        f.each(n, function (e, t) {
          if ((r = u.match(t.matcher))) {
            if (
              ((p = t.type), (d = e), (c = {}), t.paramPlace && r[t.paramPlace])
            ) {
              "?" == (l = r[t.paramPlace])[0] && (l = l.substring(1)),
                (l = l.split("&"));
              for (var n = 0; n < l.length; ++n) {
                var i = l[n].split("=", 2);
                2 == i.length &&
                  (c[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")));
              }
            }
            return (
              (a = f.extend(!0, {}, t.params, o.opts[e], c)),
              (u =
                "function" === f.type(t.url)
                  ? t.url.call(this, r, a, o)
                  : h(t.url, r, a)),
              (s =
                "function" === f.type(t.thumb)
                  ? t.thumb.call(this, r, a, o)
                  : h(t.thumb, r)),
              "youtube" === e
                ? (u = u.replace(/&t=((\d+)m)?(\d+)s/, function (e, t, n, i) {
                    return (
                      "&start=" +
                      ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10))
                    );
                  }))
                : "vimeo" === e && (u = u.replace("&%23", "#")),
              !1
            );
          }
        }),
        p
          ? (o.opts.thumb ||
              (o.opts.$thumb && o.opts.$thumb.length) ||
              (o.opts.thumb = s),
            "iframe" === p &&
              (o.opts = f.extend(!0, o.opts, {
                iframe: { preload: !1, attr: { scrolling: "no" } },
              })),
            f.extend(o, {
              type: p,
              src: u,
              origSrc: o.src,
              contentSource: d,
              contentType:
                "image" === p
                  ? "image"
                  : "gmap_place" == d || "gmap_search" == d
                  ? "map"
                  : "video",
            }))
          : u && (o.type = o.opts.defaultType);
    });
    var o = {
      youtube: {
        src: "https://www.youtube.com/iframe_api",
        class: "YT",
        loading: !1,
        loaded: !1,
      },
      vimeo: {
        src: "https://player.vimeo.com/api/player.js",
        class: "Vimeo",
        loading: !1,
        loaded: !1,
      },
      load: function (e) {
        var t,
          n = this;
        this[e].loaded
          ? setTimeout(function () {
              n.done(e);
            })
          : this[e].loading ||
            ((this[e].loading = !0),
            ((t = document.createElement("script")).type = "text/javascript"),
            (t.src = this[e].src),
            "youtube" === e
              ? (window.onYouTubeIframeAPIReady = function () {
                  (n[e].loaded = !0), n.done(e);
                })
              : (t.onload = function () {
                  (n[e].loaded = !0), n.done(e);
                }),
            document.body.appendChild(t));
      },
      done: function (e) {
        var t, n;
        "youtube" === e && delete window.onYouTubeIframeAPIReady,
          (t = f.fancybox.getInstance()) &&
            ((n = t.current.$content.find("iframe")),
            "youtube" === e && void 0 !== YT && YT
              ? new YT.Player(n.attr("id"), {
                  events: {
                    onStateChange: function (e) {
                      0 == e.data && t.next();
                    },
                  },
                })
              : "vimeo" === e &&
                void 0 !== Vimeo &&
                Vimeo &&
                new Vimeo.Player(n).on("ended", function () {
                  t.next();
                }));
      },
    };
    f(document).on({
      "afterShow.fb": function (e, t, n) {
        1 < t.group.length &&
          ("youtube" === n.contentSource || "vimeo" === n.contentSource) &&
          o.load(n.contentSource);
      },
    });
  })(jQuery),
  (function (g, l, v) {
    "use strict";
    var m =
        g.requestAnimationFrame ||
        g.webkitRequestAnimationFrame ||
        g.mozRequestAnimationFrame ||
        g.oRequestAnimationFrame ||
        function (e) {
          return g.setTimeout(e, 1e3 / 60);
        },
      y =
        g.cancelAnimationFrame ||
        g.webkitCancelAnimationFrame ||
        g.mozCancelAnimationFrame ||
        g.oCancelAnimationFrame ||
        function (e) {
          g.clearTimeout(e);
        },
      d = function (e) {
        var t = [];
        for (var n in (e =
          (e = e.originalEvent || e || g.e).touches && e.touches.length
            ? e.touches
            : e.changedTouches && e.changedTouches.length
            ? e.changedTouches
            : [e]))
          e[n].pageX
            ? t.push({ x: e[n].pageX, y: e[n].pageY })
            : e[n].clientX && t.push({ x: e[n].clientX, y: e[n].clientY });
        return t;
      },
      b = function (e, t, n) {
        return t && e
          ? "x" === n
            ? e.x - t.x
            : "y" === n
            ? e.y - t.y
            : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
          : 0;
      },
      c = function (e) {
        if (
          e.is(
            'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe'
          ) ||
          v.isFunction(e.get(0).onclick) ||
          e.data("selectable")
        )
          return !0;
        for (var t = 0, n = e[0].attributes, i = n.length; t < i; t++)
          if ("data-fancybox-" === n[t].nodeName.substr(0, 14)) return !0;
        return !1;
      },
      u = function (e) {
        for (
          var t = !1;
          ((n = e.get(0)),
          void 0,
          (i = g.getComputedStyle(n)["overflow-y"]),
          (o = g.getComputedStyle(n)["overflow-x"]),
          (s =
            ("scroll" === i || "auto" === i) &&
            n.scrollHeight > n.clientHeight),
          (r =
            ("scroll" === o || "auto" === o) && n.scrollWidth > n.clientWidth),
          !(t = s || r)) &&
          (e = e.parent()).length &&
          !e.hasClass("fancybox-stage") &&
          !e.is("body");

        );
        var n, i, o, s, r;
        return t;
      },
      n = function (e) {
        var t = this;
        (t.instance = e),
          (t.$bg = e.$refs.bg),
          (t.$stage = e.$refs.stage),
          (t.$container = e.$refs.container),
          t.destroy(),
          t.$container.on(
            "touchstart.fb.touch mousedown.fb.touch",
            v.proxy(t, "ontouchstart")
          );
      };
    (n.prototype.destroy = function () {
      var e = this;
      e.$container.off(".fb.touch"),
        v(l).off(".fb.touch"),
        e.requestId && (y(e.requestId), (e.requestId = null)),
        e.tapped && (clearTimeout(e.tapped), (e.tapped = null));
    }),
      (n.prototype.ontouchstart = function (e) {
        var t = this,
          n = v(e.target),
          i = t.instance,
          o = i.current,
          s = o.$slide,
          r = o.$content,
          a = "touchstart" == e.type;
        if (
          (a && t.$container.off("mousedown.fb.touch"),
          (!e.originalEvent || 2 != e.originalEvent.button) &&
            s.length &&
            n.length &&
            !c(n) &&
            !c(n.parent()) &&
            (n.is("img") ||
              !(e.originalEvent.clientX > n[0].clientWidth + n.offset().left)))
        ) {
          if (!o || i.isAnimating || o.$slide.hasClass("fancybox-animated"))
            return e.stopPropagation(), void e.preventDefault();
          (t.realPoints = t.startPoints = d(e)),
            t.startPoints.length &&
              (o.touch && e.stopPropagation(),
              (t.startEvent = e),
              (t.canTap = !0),
              (t.$target = n),
              (t.$content = r),
              (t.opts = o.opts.touch),
              (t.isPanning = !1),
              (t.isSwiping = !1),
              (t.isZooming = !1),
              (t.isScrolling = !1),
              (t.canPan = i.canPan()),
              (t.startTime = new Date().getTime()),
              (t.distanceX = t.distanceY = t.distance = 0),
              (t.canvasWidth = Math.round(s[0].clientWidth)),
              (t.canvasHeight = Math.round(s[0].clientHeight)),
              (t.contentLastPos = null),
              (t.contentStartPos = v.fancybox.getTranslate(t.$content) || {
                top: 0,
                left: 0,
              }),
              (t.sliderStartPos = v.fancybox.getTranslate(s)),
              (t.stagePos = v.fancybox.getTranslate(i.$refs.stage)),
              (t.sliderStartPos.top -= t.stagePos.top),
              (t.sliderStartPos.left -= t.stagePos.left),
              (t.contentStartPos.top -= t.stagePos.top),
              (t.contentStartPos.left -= t.stagePos.left),
              v(l)
                .off(".fb.touch")
                .on(
                  a
                    ? "touchend.fb.touch touchcancel.fb.touch"
                    : "mouseup.fb.touch mouseleave.fb.touch",
                  v.proxy(t, "ontouchend")
                )
                .on(
                  a ? "touchmove.fb.touch" : "mousemove.fb.touch",
                  v.proxy(t, "ontouchmove")
                ),
              v.fancybox.isMobile &&
                l.addEventListener("scroll", t.onscroll, !0),
              (((t.opts || t.canPan) &&
                (n.is(t.$stage) || t.$stage.find(n).length)) ||
                (n.is(".fancybox-image") && e.preventDefault(),
                v.fancybox.isMobile &&
                  n.parents(".fancybox-caption").length)) &&
                ((t.isScrollable = u(n) || u(n.parent())),
                (v.fancybox.isMobile && t.isScrollable) || e.preventDefault(),
                (1 === t.startPoints.length || o.hasError) &&
                  (t.canPan
                    ? (v.fancybox.stop(t.$content), (t.isPanning = !0))
                    : (t.isSwiping = !0),
                  t.$container.addClass("fancybox-is-grabbing")),
                2 === t.startPoints.length &&
                  "image" === o.type &&
                  (o.isLoaded || o.$ghost) &&
                  ((t.canTap = !1),
                  (t.isSwiping = !1),
                  (t.isPanning = !1),
                  (t.isZooming = !0),
                  v.fancybox.stop(t.$content),
                  (t.centerPointStartX =
                    0.5 * (t.startPoints[0].x + t.startPoints[1].x) -
                    v(g).scrollLeft()),
                  (t.centerPointStartY =
                    0.5 * (t.startPoints[0].y + t.startPoints[1].y) -
                    v(g).scrollTop()),
                  (t.percentageOfImageAtPinchPointX =
                    (t.centerPointStartX - t.contentStartPos.left) /
                    t.contentStartPos.width),
                  (t.percentageOfImageAtPinchPointY =
                    (t.centerPointStartY - t.contentStartPos.top) /
                    t.contentStartPos.height),
                  (t.startDistanceBetweenFingers = b(
                    t.startPoints[0],
                    t.startPoints[1]
                  )))));
        }
      }),
      (n.prototype.onscroll = function (e) {
        (this.isScrolling = !0),
          l.removeEventListener("scroll", this.onscroll, !0);
      }),
      (n.prototype.ontouchmove = function (e) {
        var t = this;
        return void 0 !== e.originalEvent.buttons &&
          0 === e.originalEvent.buttons
          ? void t.ontouchend(e)
          : t.isScrolling
          ? void (t.canTap = !1)
          : ((t.newPoints = d(e)),
            void (
              (t.opts || t.canPan) &&
              t.newPoints.length &&
              t.newPoints.length &&
              ((t.isSwiping && !0 === t.isSwiping) || e.preventDefault(),
              (t.distanceX = b(t.newPoints[0], t.startPoints[0], "x")),
              (t.distanceY = b(t.newPoints[0], t.startPoints[0], "y")),
              (t.distance = b(t.newPoints[0], t.startPoints[0])),
              0 < t.distance &&
                (t.isSwiping
                  ? t.onSwipe(e)
                  : t.isPanning
                  ? t.onPan()
                  : t.isZooming && t.onZoom()))
            ));
      }),
      (n.prototype.onSwipe = function (e) {
        var t,
          o = this,
          s = o.instance,
          n = o.isSwiping,
          i = o.sliderStartPos.left || 0;
        if (!0 !== n)
          "x" == n &&
            (0 < o.distanceX &&
            (o.instance.group.length < 2 ||
              (0 === o.instance.current.index && !o.instance.current.opts.loop))
              ? (i += Math.pow(o.distanceX, 0.8))
              : o.distanceX < 0 &&
                (o.instance.group.length < 2 ||
                  (o.instance.current.index === o.instance.group.length - 1 &&
                    !o.instance.current.opts.loop))
              ? (i -= Math.pow(-o.distanceX, 0.8))
              : (i += o.distanceX)),
            (o.sliderLastPos = {
              top: "x" == n ? 0 : o.sliderStartPos.top + o.distanceY,
              left: i,
            }),
            o.requestId && (y(o.requestId), (o.requestId = null)),
            (o.requestId = m(function () {
              o.sliderLastPos &&
                (v.each(o.instance.slides, function (e, t) {
                  var n = t.pos - o.instance.currPos;
                  v.fancybox.setTranslate(t.$slide, {
                    top: o.sliderLastPos.top,
                    left:
                      o.sliderLastPos.left +
                      n * o.canvasWidth +
                      n * t.opts.gutter,
                  });
                }),
                o.$container.addClass("fancybox-is-sliding"));
            }));
        else if (10 < Math.abs(o.distance)) {
          if (
            ((o.canTap = !1),
            s.group.length < 2 && o.opts.vertical
              ? (o.isSwiping = "y")
              : s.isDragging ||
                !1 === o.opts.vertical ||
                ("auto" === o.opts.vertical && 800 < v(g).width())
              ? (o.isSwiping = "x")
              : ((t = Math.abs(
                  (180 * Math.atan2(o.distanceY, o.distanceX)) / Math.PI
                )),
                (o.isSwiping = 45 < t && t < 135 ? "y" : "x")),
            "y" === o.isSwiping && v.fancybox.isMobile && o.isScrollable)
          )
            return void (o.isScrolling = !0);
          (s.isDragging = o.isSwiping),
            (o.startPoints = o.newPoints),
            v.each(s.slides, function (e, t) {
              var n, i;
              v.fancybox.stop(t.$slide),
                (n = v.fancybox.getTranslate(t.$slide)),
                (i = v.fancybox.getTranslate(s.$refs.stage)),
                t.$slide
                  .css({
                    transform: "",
                    opacity: "",
                    "transition-duration": "",
                  })
                  .removeClass("fancybox-animated")
                  .removeClass(function (e, t) {
                    return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                  }),
                t.pos === s.current.pos &&
                  ((o.sliderStartPos.top = n.top - i.top),
                  (o.sliderStartPos.left = n.left - i.left)),
                v.fancybox.setTranslate(t.$slide, {
                  top: n.top - i.top,
                  left: n.left - i.left,
                });
            }),
            s.SlideShow && s.SlideShow.isActive && s.SlideShow.stop();
        }
      }),
      (n.prototype.onPan = function () {
        var e = this;
        b(e.newPoints[0], e.realPoints[0]) < (v.fancybox.isMobile ? 10 : 5)
          ? (e.startPoints = e.newPoints)
          : ((e.canTap = !1),
            (e.contentLastPos = e.limitMovement()),
            e.requestId && y(e.requestId),
            (e.requestId = m(function () {
              v.fancybox.setTranslate(e.$content, e.contentLastPos);
            })));
      }),
      (n.prototype.limitMovement = function () {
        var e,
          t,
          n,
          i,
          o,
          s,
          r = this,
          a = r.canvasWidth,
          l = r.canvasHeight,
          c = r.distanceX,
          d = r.distanceY,
          u = r.contentStartPos,
          p = u.left,
          f = u.top,
          h = u.width,
          g = u.height;
        return (
          (o = a < h ? p + c : p),
          (s = f + d),
          (e = Math.max(0, 0.5 * a - 0.5 * h)),
          (t = Math.max(0, 0.5 * l - 0.5 * g)),
          (n = Math.min(a - h, 0.5 * a - 0.5 * h)),
          (i = Math.min(l - g, 0.5 * l - 0.5 * g)),
          0 < c && e < o && (o = e - 1 + Math.pow(-e + p + c, 0.8) || 0),
          c < 0 && o < n && (o = n + 1 - Math.pow(n - p - c, 0.8) || 0),
          0 < d && t < s && (s = t - 1 + Math.pow(-t + f + d, 0.8) || 0),
          d < 0 && s < i && (s = i + 1 - Math.pow(i - f - d, 0.8) || 0),
          { top: s, left: o }
        );
      }),
      (n.prototype.limitPosition = function (e, t, n, i) {
        var o = this.canvasWidth,
          s = this.canvasHeight;
        return (
          o < n
            ? (e = (e = 0 < e ? 0 : e) < o - n ? o - n : e)
            : (e = Math.max(0, o / 2 - n / 2)),
          s < i
            ? (t = (t = 0 < t ? 0 : t) < s - i ? s - i : t)
            : (t = Math.max(0, s / 2 - i / 2)),
          { top: t, left: e }
        );
      }),
      (n.prototype.onZoom = function () {
        var e = this,
          t = e.contentStartPos,
          n = t.width,
          i = t.height,
          o = t.left,
          s = t.top,
          r = b(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
          a = Math.floor(n * r),
          l = Math.floor(i * r),
          c = (n - a) * e.percentageOfImageAtPinchPointX,
          d = (i - l) * e.percentageOfImageAtPinchPointY,
          u = (e.newPoints[0].x + e.newPoints[1].x) / 2 - v(g).scrollLeft(),
          p = (e.newPoints[0].y + e.newPoints[1].y) / 2 - v(g).scrollTop(),
          f = u - e.centerPointStartX,
          h = {
            top: s + (d + (p - e.centerPointStartY)),
            left: o + (c + f),
            scaleX: r,
            scaleY: r,
          };
        (e.canTap = !1),
          (e.newWidth = a),
          (e.newHeight = l),
          (e.contentLastPos = h),
          e.requestId && y(e.requestId),
          (e.requestId = m(function () {
            v.fancybox.setTranslate(e.$content, e.contentLastPos);
          }));
      }),
      (n.prototype.ontouchend = function (e) {
        var t = this,
          n = t.isSwiping,
          i = t.isPanning,
          o = t.isZooming,
          s = t.isScrolling;
        if (
          ((t.endPoints = d(e)),
          (t.dMs = Math.max(new Date().getTime() - t.startTime, 1)),
          t.$container.removeClass("fancybox-is-grabbing"),
          v(l).off(".fb.touch"),
          l.removeEventListener("scroll", t.onscroll, !0),
          t.requestId && (y(t.requestId), (t.requestId = null)),
          (t.isSwiping = !1),
          (t.isPanning = !1),
          (t.isZooming = !1),
          (t.isScrolling = !1),
          (t.instance.isDragging = !1),
          t.canTap)
        )
          return t.onTap(e);
        (t.speed = 100),
          (t.velocityX = (t.distanceX / t.dMs) * 0.5),
          (t.velocityY = (t.distanceY / t.dMs) * 0.5),
          i ? t.endPanning() : o ? t.endZooming() : t.endSwiping(n, s);
      }),
      (n.prototype.endSwiping = function (e, t) {
        var n = this,
          i = !1,
          o = n.instance.group.length,
          s = Math.abs(n.distanceX),
          r = "x" == e && 1 < o && ((130 < n.dMs && 10 < s) || 50 < s);
        (n.sliderLastPos = null),
          "y" == e && !t && 50 < Math.abs(n.distanceY)
            ? (v.fancybox.animate(
                n.instance.current.$slide,
                {
                  top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY,
                  opacity: 0,
                },
                200
              ),
              (i = n.instance.close(!0, 250)))
            : r && 0 < n.distanceX
            ? (i = n.instance.previous(300))
            : r && n.distanceX < 0 && (i = n.instance.next(300)),
          !1 !== i || ("x" != e && "y" != e) || n.instance.centerSlide(200),
          n.$container.removeClass("fancybox-is-sliding");
      }),
      (n.prototype.endPanning = function () {
        var e,
          t,
          n,
          i = this;
        i.contentLastPos &&
          (!1 === i.opts.momentum || 350 < i.dMs
            ? ((e = i.contentLastPos.left), (t = i.contentLastPos.top))
            : ((e = i.contentLastPos.left + 500 * i.velocityX),
              (t = i.contentLastPos.top + 500 * i.velocityY)),
          ((n = i.limitPosition(
            e,
            t,
            i.contentStartPos.width,
            i.contentStartPos.height
          )).width = i.contentStartPos.width),
          (n.height = i.contentStartPos.height),
          v.fancybox.animate(i.$content, n, 366));
      }),
      (n.prototype.endZooming = function () {
        var e,
          t,
          n,
          i,
          o = this,
          s = o.instance.current,
          r = o.newWidth,
          a = o.newHeight;
        o.contentLastPos &&
          ((e = o.contentLastPos.left),
          (i = {
            top: (t = o.contentLastPos.top),
            left: e,
            width: r,
            height: a,
            scaleX: 1,
            scaleY: 1,
          }),
          v.fancybox.setTranslate(o.$content, i),
          r < o.canvasWidth && a < o.canvasHeight
            ? o.instance.scaleToFit(150)
            : r > s.width || a > s.height
            ? o.instance.scaleToActual(
                o.centerPointStartX,
                o.centerPointStartY,
                150
              )
            : ((n = o.limitPosition(e, t, r, a)),
              v.fancybox.animate(o.$content, n, 150)));
      }),
      (n.prototype.onTap = function (n) {
        var e,
          i = this,
          t = v(n.target),
          o = i.instance,
          s = o.current,
          r = (n && d(n)) || i.startPoints,
          a = r[0] ? r[0].x - v(g).scrollLeft() - i.stagePos.left : 0,
          l = r[0] ? r[0].y - v(g).scrollTop() - i.stagePos.top : 0,
          c = function (e) {
            var t = s.opts[e];
            if ((v.isFunction(t) && (t = t.apply(o, [s, n])), t))
              switch (t) {
                case "close":
                  o.close(i.startEvent);
                  break;
                case "toggleControls":
                  o.toggleControls();
                  break;
                case "next":
                  o.next();
                  break;
                case "nextOrClose":
                  1 < o.group.length ? o.next() : o.close(i.startEvent);
                  break;
                case "zoom":
                  "image" == s.type &&
                    (s.isLoaded || s.$ghost) &&
                    (o.canPan()
                      ? o.scaleToFit()
                      : o.isScaledDown()
                      ? o.scaleToActual(a, l)
                      : o.group.length < 2 && o.close(i.startEvent));
              }
          };
        if (
          (!n.originalEvent || 2 != n.originalEvent.button) &&
          (t.is("img") || !(a > t[0].clientWidth + t.offset().left))
        ) {
          if (
            t.is(
              ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
            )
          )
            e = "Outside";
          else if (t.is(".fancybox-slide")) e = "Slide";
          else {
            if (
              !o.current.$content ||
              !o.current.$content.find(t).addBack().filter(t).length
            )
              return;
            e = "Content";
          }
          if (i.tapped) {
            if (
              (clearTimeout(i.tapped),
              (i.tapped = null),
              50 < Math.abs(a - i.tapX) || 50 < Math.abs(l - i.tapY))
            )
              return this;
            c("dblclick" + e);
          } else
            (i.tapX = a),
              (i.tapY = l),
              s.opts["dblclick" + e] &&
              s.opts["dblclick" + e] !== s.opts["click" + e]
                ? (i.tapped = setTimeout(function () {
                    (i.tapped = null), o.isAnimating || c("click" + e);
                  }, 500))
                : c("click" + e);
          return this;
        }
      }),
      v(l)
        .on("onActivate.fb", function (e, t) {
          t && !t.Guestures && (t.Guestures = new n(t));
        })
        .on("beforeClose.fb", function (e, t) {
          t && t.Guestures && t.Guestures.destroy();
        });
  })(window, document, jQuery),
  (function (r, a) {
    "use strict";
    a.extend(!0, a.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
      },
      slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
    });
    var n = function (e) {
      (this.instance = e), this.init();
    };
    a.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function () {
        var e = this,
          t = e.instance,
          n = t.group[t.currIndex].opts.slideShow;
        (e.$button = t.$refs.toolbar
          .find("[data-fancybox-play]")
          .on("click", function () {
            e.toggle();
          })),
          t.group.length < 2 || !n
            ? e.$button.hide()
            : n.progress &&
              (e.$progress = a(
                '<div class="fancybox-progress"></div>'
              ).appendTo(t.$refs.inner));
      },
      set: function (e) {
        var t = this,
          n = t.instance,
          i = n.current;
        i && (!0 === e || i.opts.loop || n.currIndex < n.group.length - 1)
          ? t.isActive &&
            "video" !== i.contentType &&
            (t.$progress &&
              a.fancybox.animate(
                t.$progress.show(),
                { scaleX: 1 },
                i.opts.slideShow.speed
              ),
            (t.timer = setTimeout(function () {
              n.current.opts.loop || n.current.index != n.group.length - 1
                ? n.next()
                : n.jumpTo(0);
            }, i.opts.slideShow.speed)))
          : (t.stop(), (n.idleSecondsCounter = 0), n.showControls());
      },
      clear: function () {
        clearTimeout(this.timer),
          (this.timer = null),
          this.$progress && this.$progress.removeAttr("style").hide();
      },
      start: function () {
        var e = this,
          t = e.instance.current;
        t &&
          (e.$button
            .attr(
              "title",
              (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP
            )
            .removeClass("fancybox-button--play")
            .addClass("fancybox-button--pause"),
          (e.isActive = !0),
          t.isComplete && e.set(!0),
          e.instance.trigger("onSlideShowChange", !0));
      },
      stop: function () {
        var e = this,
          t = e.instance.current;
        e.clear(),
          e.$button
            .attr(
              "title",
              (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START
            )
            .removeClass("fancybox-button--pause")
            .addClass("fancybox-button--play"),
          (e.isActive = !1),
          e.instance.trigger("onSlideShowChange", !1),
          e.$progress && e.$progress.removeAttr("style").hide();
      },
      toggle: function () {
        this.isActive ? this.stop() : this.start();
      },
    }),
      a(r).on({
        "onInit.fb": function (e, t) {
          t && !t.SlideShow && (t.SlideShow = new n(t));
        },
        "beforeShow.fb": function (e, t, n, i) {
          var o = t && t.SlideShow;
          i
            ? o && n.opts.slideShow.autoStart && o.start()
            : o && o.isActive && o.clear();
        },
        "afterShow.fb": function (e, t, n) {
          var i = t && t.SlideShow;
          i && i.isActive && i.set();
        },
        "afterKeydown.fb": function (e, t, n, i, o) {
          var s = t && t.SlideShow;
          !s ||
            !n.opts.slideShow ||
            (80 !== o && 32 !== o) ||
            a(r.activeElement).is("button,a,input") ||
            (i.preventDefault(), s.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function (e, t) {
          var n = t && t.SlideShow;
          n && n.stop();
        },
      }),
      a(r).on("visibilitychange", function () {
        var e = a.fancybox.getInstance(),
          t = e && e.SlideShow;
        t && t.isActive && (r.hidden ? t.clear() : t.set());
      });
  })(document, jQuery),
  (function (s, n) {
    "use strict";
    var i = (function () {
      for (
        var e = [
            [
              "requestFullscreen",
              "exitFullscreen",
              "fullscreenElement",
              "fullscreenEnabled",
              "fullscreenchange",
              "fullscreenerror",
            ],
            [
              "webkitRequestFullscreen",
              "webkitExitFullscreen",
              "webkitFullscreenElement",
              "webkitFullscreenEnabled",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "webkitRequestFullScreen",
              "webkitCancelFullScreen",
              "webkitCurrentFullScreenElement",
              "webkitCancelFullScreen",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "mozRequestFullScreen",
              "mozCancelFullScreen",
              "mozFullScreenElement",
              "mozFullScreenEnabled",
              "mozfullscreenchange",
              "mozfullscreenerror",
            ],
            [
              "msRequestFullscreen",
              "msExitFullscreen",
              "msFullscreenElement",
              "msFullscreenEnabled",
              "MSFullscreenChange",
              "MSFullscreenError",
            ],
          ],
          t = {},
          n = 0;
        n < e.length;
        n++
      ) {
        var i = e[n];
        if (i && i[1] in s) {
          for (var o = 0; o < i.length; o++) t[e[0][o]] = i[o];
          return t;
        }
      }
      return !1;
    })();
    if (i) {
      var o = {
        request: function (e) {
          (e = e || s.documentElement)[i.requestFullscreen](
            e.ALLOW_KEYBOARD_INPUT
          );
        },
        exit: function () {
          s[i.exitFullscreen]();
        },
        toggle: function (e) {
          (e = e || s.documentElement),
            this.isFullscreen() ? this.exit() : this.request(e);
        },
        isFullscreen: function () {
          return Boolean(s[i.fullscreenElement]);
        },
        enabled: function () {
          return Boolean(s[i.fullscreenEnabled]);
        },
      };
      n.extend(!0, n.fancybox.defaults, {
        btnTpl: {
          fullScreen:
            '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
        },
        fullScreen: { autoStart: !1 },
      }),
        n(s).on(i.fullscreenchange, function () {
          var e = o.isFullscreen(),
            t = n.fancybox.getInstance();
          t &&
            (t.current &&
              "image" === t.current.type &&
              t.isAnimating &&
              ((t.isAnimating = !1),
              t.update(!0, !0, 0),
              t.isComplete || t.complete()),
            t.trigger("onFullscreenChange", e),
            t.$refs.container.toggleClass("fancybox-is-fullscreen", e),
            t.$refs.toolbar
              .find("[data-fancybox-fullscreen]")
              .toggleClass("fancybox-button--fsenter", !e)
              .toggleClass("fancybox-button--fsexit", e));
        });
    }
    n(s).on({
      "onInit.fb": function (e, t) {
        i
          ? t && t.group[t.currIndex].opts.fullScreen
            ? (t.$refs.container.on(
                "click.fb-fullscreen",
                "[data-fancybox-fullscreen]",
                function (e) {
                  e.stopPropagation(), e.preventDefault(), o.toggle();
                }
              ),
              t.opts.fullScreen &&
                !0 === t.opts.fullScreen.autoStart &&
                o.request(),
              (t.FullScreen = o))
            : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
          : t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
      },
      "afterKeydown.fb": function (e, t, n, i, o) {
        t &&
          t.FullScreen &&
          70 === o &&
          (i.preventDefault(), t.FullScreen.toggle());
      },
      "beforeClose.fb": function (e, t) {
        t &&
          t.FullScreen &&
          t.$refs.container.hasClass("fancybox-is-fullscreen") &&
          o.exit();
      },
    });
  })(document, jQuery),
  (function (e, s) {
    "use strict";
    var r = "fancybox-thumbs";
    s.fancybox.defaults = s.extend(
      !0,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y",
        },
      },
      s.fancybox.defaults
    );
    var i = function (e) {
      this.init(e);
    };
    s.extend(i.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      isActive: !1,
      init: function (e) {
        var t = this,
          n = e.group,
          i = 0;
        (t.instance = e),
          (t.opts = n[e.currIndex].opts.thumbs),
          ((e.Thumbs = t).$button = e.$refs.toolbar.find(
            "[data-fancybox-thumbs]"
          ));
        for (
          var o = 0, s = n.length;
          o < s && (n[o].thumb && i++, !(1 < i));
          o++
        );
        1 < i && t.opts
          ? (t.$button.removeAttr("style").on("click", function () {
              t.toggle();
            }),
            (t.isActive = !0))
          : t.$button.hide();
      },
      create: function () {
        var n,
          e = this,
          t = e.instance,
          i = e.opts.parentEl,
          o = [];
        e.$grid ||
          ((e.$grid = s(
            '<div class="' + r + " " + r + "-" + e.opts.axis + '"></div>'
          ).appendTo(t.$refs.container.find(i).addBack().filter(i))),
          e.$grid.on("click", "a", function () {
            t.jumpTo(s(this).attr("data-index"));
          })),
          e.$list ||
            (e.$list = s('<div class="' + r + '__list">').appendTo(e.$grid)),
          s.each(t.group, function (e, t) {
            (n = t.thumb) || "image" !== t.type || (n = t.src),
              o.push(
                '<a href="javascript:;" tabindex="0" data-index="' +
                  e +
                  '"' +
                  (n && n.length
                    ? ' style="background-image:url(' + n + ')"'
                    : 'class="fancybox-thumbs-missing"') +
                  "></a>"
              );
          }),
          (e.$list[0].innerHTML = o.join("")),
          "x" === e.opts.axis &&
            e.$list.width(
              parseInt(e.$grid.css("padding-right"), 10) +
                t.group.length * e.$list.children().eq(0).outerWidth(!0)
            );
      },
      focus: function (e) {
        var t,
          n,
          i = this,
          o = i.$list,
          s = i.$grid;
        i.instance.current &&
          ((n = (t = o
            .children()
            .removeClass("fancybox-thumbs-active")
            .filter('[data-index="' + i.instance.current.index + '"]')
            .addClass("fancybox-thumbs-active")).position()),
          "y" === i.opts.axis &&
          (n.top < 0 || n.top > o.height() - t.outerHeight())
            ? o.stop().animate({ scrollTop: o.scrollTop() + n.top }, e)
            : "x" === i.opts.axis &&
              (n.left < s.scrollLeft() ||
                n.left > s.scrollLeft() + (s.width() - t.outerWidth())) &&
              o.parent().stop().animate({ scrollLeft: n.left }, e));
      },
      update: function () {
        var e = this;
        e.instance.$refs.container.toggleClass(
          "fancybox-show-thumbs",
          this.isVisible
        ),
          e.isVisible
            ? (e.$grid || e.create(),
              e.instance.trigger("onThumbsShow"),
              e.focus(0))
            : e.$grid && e.instance.trigger("onThumbsHide"),
          e.instance.update();
      },
      hide: function () {
        (this.isVisible = !1), this.update();
      },
      show: function () {
        (this.isVisible = !0), this.update();
      },
      toggle: function () {
        (this.isVisible = !this.isVisible), this.update();
      },
    }),
      s(e).on({
        "onInit.fb": function (e, t) {
          var n;
          t &&
            !t.Thumbs &&
            (n = new i(t)).isActive &&
            !0 === n.opts.autoStart &&
            n.show();
        },
        "beforeShow.fb": function (e, t, n, i) {
          var o = t && t.Thumbs;
          o && o.isVisible && o.focus(i ? 0 : 250);
        },
        "afterKeydown.fb": function (e, t, n, i, o) {
          var s = t && t.Thumbs;
          s && s.isActive && 71 === o && (i.preventDefault(), s.toggle());
        },
        "beforeClose.fb": function (e, t) {
          var n = t && t.Thumbs;
          n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
        },
      });
  })(document, jQuery),
  (function (e, r) {
    "use strict";
    r.extend(!0, r.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
      },
      share: {
        url: function (e, t) {
          return (
            (!e.currentHash &&
              "inline" !== t.type &&
              "html" !== t.type &&
              (t.origSrc || t.src)) ||
            window.location
          );
        },
        tpl:
          '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
      },
    }),
      r(e).on("click", "[data-fancybox-share]", function () {
        var e,
          t,
          n,
          i,
          o = r.fancybox.getInstance(),
          s = o.current || null;
        s &&
          ("function" === r.type(s.opts.share.url) &&
            (e = s.opts.share.url.apply(s, [o, s])),
          (t = s.opts.share.tpl
            .replace(
              /\{\{media\}\}/g,
              "image" === s.type ? encodeURIComponent(s.src) : ""
            )
            .replace(/\{\{url\}\}/g, encodeURIComponent(e))
            .replace(
              /\{\{url_raw\}\}/g,
              ((n = e),
              (i = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;",
              }),
              String(n).replace(/[&<>"'`=\/]/g, function (e) {
                return i[e];
              }))
            )
            .replace(
              /\{\{descr\}\}/g,
              o.$caption ? encodeURIComponent(o.$caption.text()) : ""
            )),
          r.fancybox.open({
            src: o.translate(o, t),
            type: "html",
            opts: {
              touch: !1,
              animationEffect: !1,
              afterLoad: function (e, t) {
                o.$refs.container.one("beforeClose.fb", function () {
                  e.close(null, 0);
                }),
                  t.$content.find(".fancybox-share__button").click(function () {
                    return (
                      window.open(this.href, "Share", "width=550, height=450"),
                      !1
                    );
                  });
              },
              mobile: { autoFocus: !1 },
            },
          }));
      });
  })(document, jQuery),
  (function (s, r, o) {
    "use strict";
    function a() {
      var e = s.location.hash.substr(1),
        t = e.split("-"),
        n =
          (1 < t.length &&
            /^\+?\d+$/.test(t[t.length - 1]) &&
            parseInt(t.pop(-1), 10)) ||
          1;
      return { hash: e, index: n < 1 ? 1 : n, gallery: t.join("-") };
    }
    function t(e) {
      "" !== e.gallery &&
        o("[data-fancybox='" + o.escapeSelector(e.gallery) + "']")
          .eq(e.index - 1)
          .focus()
          .trigger("click.fb-start");
    }
    function l(e) {
      var t, n;
      return (
        !!e &&
        "" !==
          (n =
            (t = e.current ? e.current.opts : e.opts).hash ||
            (t.$orig
              ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger")
              : "")) &&
        n
      );
    }
    o.escapeSelector ||
      (o.escapeSelector = function (e) {
        return (e + "").replace(
          /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          function (e, t) {
            return t
              ? "\0" === e
                ? "�"
                : e.slice(0, -1) +
                  "\\" +
                  e.charCodeAt(e.length - 1).toString(16) +
                  " "
              : "\\" + e;
          }
        );
      }),
      o(function () {
        !1 !== o.fancybox.defaults.hash &&
          (o(r).on({
            "onInit.fb": function (e, t) {
              var n, i;
              !1 !== t.group[t.currIndex].opts.hash &&
                ((n = a()),
                (i = l(t)) &&
                  n.gallery &&
                  i == n.gallery &&
                  (t.currIndex = n.index - 1));
            },
            "beforeShow.fb": function (e, t, n, i) {
              var o;
              n &&
                !1 !== n.opts.hash &&
                (o = l(t)) &&
                ((t.currentHash =
                  o + (1 < t.group.length ? "-" + (n.index + 1) : "")),
                s.location.hash !== "#" + t.currentHash &&
                  (i && !t.origHash && (t.origHash = s.location.hash),
                  t.hashTimer && clearTimeout(t.hashTimer),
                  (t.hashTimer = setTimeout(function () {
                    "replaceState" in s.history
                      ? (s.history[i ? "pushState" : "replaceState"](
                          {},
                          r.title,
                          s.location.pathname +
                            s.location.search +
                            "#" +
                            t.currentHash
                        ),
                        i && (t.hasCreatedHistory = !0))
                      : (s.location.hash = t.currentHash),
                      (t.hashTimer = null);
                  }, 300))));
            },
            "beforeClose.fb": function (e, t, n) {
              n &&
                !1 !== n.opts.hash &&
                (clearTimeout(t.hashTimer),
                t.currentHash && t.hasCreatedHistory
                  ? s.history.back()
                  : t.currentHash &&
                    ("replaceState" in s.history
                      ? s.history.replaceState(
                          {},
                          r.title,
                          s.location.pathname +
                            s.location.search +
                            (t.origHash || "")
                        )
                      : (s.location.hash = t.origHash)),
                (t.currentHash = null));
            },
          }),
          o(s).on("hashchange.fb", function () {
            var e = a(),
              i = null;
            o.each(o(".fancybox-container").get().reverse(), function (e, t) {
              var n = o(t).data("FancyBox");
              if (n && n.currentHash) return (i = n), !1;
            }),
              i
                ? i.currentHash === e.gallery + "-" + e.index ||
                  (1 === e.index && i.currentHash == e.gallery) ||
                  ((i.currentHash = null), i.close())
                : "" !== e.gallery && t(e);
          }),
          setTimeout(function () {
            o.fancybox.getInstance() || t(a());
          }, 50));
      });
  })(window, document, jQuery),
  (function (e, t) {
    "use strict";
    var o = new Date().getTime();
    t(e).on({
      "onInit.fb": function (e, i, t) {
        i.$refs.stage.on(
          "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
          function (e) {
            var t = i.current,
              n = new Date().getTime();
            i.group.length < 2 ||
              !1 === t.opts.wheel ||
              ("auto" === t.opts.wheel && "image" !== t.type) ||
              (e.preventDefault(),
              e.stopPropagation(),
              t.$slide.hasClass("fancybox-animated") ||
                ((e = e.originalEvent || e),
                n - o < 250 ||
                  ((o = n),
                  i[
                    (-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0
                      ? "next"
                      : "previous"
                  ]())));
          }
        );
      },
    });
  })(document, jQuery),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : e("object" == typeof exports ? require("jquery") : jQuery);
  })(function (k) {
    var i,
      e = navigator.userAgent,
      C = /iphone/i.test(e),
      o = /chrome/i.test(e),
      $ = /android/i.test(e);
    (k.mask = {
      definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" },
      autoclear: !0,
      dataName: "rawMaskFn",
      placeholder: "_",
    }),
      k.fn.extend({
        caret: function (e, t) {
          var n;
          if (0 !== this.length && !this.is(":hidden"))
            return "number" == typeof e
              ? ((t = "number" == typeof t ? t : e),
                this.each(function () {
                  this.setSelectionRange
                    ? this.setSelectionRange(e, t)
                    : this.createTextRange &&
                      ((n = this.createTextRange()).collapse(!0),
                      n.moveEnd("character", t),
                      n.moveStart("character", e),
                      n.select());
                }))
              : (this[0].setSelectionRange
                  ? ((e = this[0].selectionStart), (t = this[0].selectionEnd))
                  : document.selection &&
                    document.selection.createRange &&
                    ((n = document.selection.createRange()),
                    (e = 0 - n.duplicate().moveStart("character", -1e5)),
                    (t = e + n.text.length)),
                { begin: e, end: t });
        },
        unmask: function () {
          return this.trigger("unmask");
        },
        mask: function (t, m) {
          var n, y, b, x, w, T, S;
          if (!t && 0 < this.length) {
            var e = k(this[0]).data(k.mask.dataName);
            return e ? e() : void 0;
          }
          return (
            (m = k.extend(
              {
                autoclear: k.mask.autoclear,
                placeholder: k.mask.placeholder,
                completed: null,
              },
              m
            )),
            (n = k.mask.definitions),
            (y = []),
            (b = T = t.length),
            (x = null),
            k.each(t.split(""), function (e, t) {
              "?" == t
                ? (T--, (b = e))
                : n[t]
                ? (y.push(new RegExp(n[t])),
                  null === x && (x = y.length - 1),
                  e < b && (w = y.length - 1))
                : y.push(null);
            }),
            this.trigger("unmask").each(function () {
              function r() {
                if (m.completed) {
                  for (var e = x; e <= w; e++)
                    if (y[e] && h[e] === a(e)) return;
                  m.completed.call(f);
                }
              }
              function a(e) {
                return m.placeholder.charAt(e < m.placeholder.length ? e : 0);
              }
              function l(e) {
                for (; ++e < T && !y[e]; );
                return e;
              }
              function c(e, t) {
                var n, i;
                if (!(e < 0)) {
                  for (n = e, i = l(t); n < T; n++)
                    if (y[n]) {
                      if (!(i < T && y[n].test(h[i]))) break;
                      (h[n] = h[i]), (h[i] = a(i)), (i = l(i));
                    }
                  u(), f.caret(Math.max(x, e));
                }
              }
              function s() {
                p(), f.val() != v && f.change();
              }
              function d(e, t) {
                var n;
                for (n = e; n < t && n < T; n++) y[n] && (h[n] = a(n));
              }
              function u() {
                f.val(h.join(""));
              }
              function p(e) {
                var t,
                  n,
                  i,
                  o = f.val(),
                  s = -1;
                for (i = t = 0; t < T; t++)
                  if (y[t]) {
                    for (h[t] = a(t); i++ < o.length; )
                      if (((n = o.charAt(i - 1)), y[t].test(n))) {
                        (h[t] = n), (s = t);
                        break;
                      }
                    if (i > o.length) {
                      d(t + 1, T);
                      break;
                    }
                  } else h[t] === o.charAt(i) && i++, t < b && (s = t);
                return (
                  e
                    ? u()
                    : s + 1 < b
                    ? m.autoclear || h.join("") === g
                      ? (f.val() && f.val(""), d(0, T))
                      : u()
                    : (u(), f.val(f.val().substring(0, s + 1))),
                  b ? t : x
                );
              }
              var f = k(this),
                h = k.map(t.split(""), function (e, t) {
                  return "?" != e ? (n[e] ? a(t) : e) : void 0;
                }),
                g = h.join(""),
                v = f.val();
              f.data(k.mask.dataName, function () {
                return k
                  .map(h, function (e, t) {
                    return y[t] && e != a(t) ? e : null;
                  })
                  .join("");
              }),
                f
                  .one("unmask", function () {
                    f.off(".mask").removeData(k.mask.dataName);
                  })
                  .on("focus.mask", function () {
                    var e;
                    f.prop("readonly") ||
                      (clearTimeout(i),
                      (v = f.val()),
                      (e = p()),
                      (i = setTimeout(function () {
                        f.get(0) === document.activeElement &&
                          (u(),
                          e == t.replace("?", "").length
                            ? f.caret(0, e)
                            : f.caret(e));
                      }, 10)));
                  })
                  .on("blur.mask", s)
                  .on("keydown.mask", function (e) {
                    if (!f.prop("readonly")) {
                      var t,
                        n,
                        i,
                        o = e.which || e.keyCode;
                      (S = f.val()),
                        8 === o || 46 === o || (C && 127 === o)
                          ? ((n = (t = f.caret()).begin),
                            (i = t.end) - n == 0 &&
                              ((n =
                                46 !== o
                                  ? (function (e) {
                                      for (; 0 <= --e && !y[e]; );
                                      return e;
                                    })(n)
                                  : (i = l(n - 1))),
                              (i = 46 === o ? l(i) : i)),
                            d(n, i),
                            c(n, i - 1),
                            e.preventDefault())
                          : 13 === o
                          ? s.call(this, e)
                          : 27 === o &&
                            (f.val(v), f.caret(0, p()), e.preventDefault());
                    }
                  })
                  .on("keypress.mask", function (e) {
                    if (!f.prop("readonly")) {
                      var t,
                        n,
                        i,
                        o = e.which || e.keyCode,
                        s = f.caret();
                      e.ctrlKey ||
                        e.altKey ||
                        e.metaKey ||
                        o < 32 ||
                        !o ||
                        13 === o ||
                        (s.end - s.begin != 0 &&
                          (d(s.begin, s.end), c(s.begin, s.end - 1)),
                        (t = l(s.begin - 1)) < T &&
                          ((n = String.fromCharCode(o)), y[t].test(n)) &&
                          ((function (e) {
                            var t, n, i, o;
                            for (n = a((t = e)); t < T; t++)
                              if (y[t]) {
                                if (
                                  ((i = l(t)),
                                  (o = h[t]),
                                  (h[t] = n),
                                  !(i < T && y[i].test(o)))
                                )
                                  break;
                                n = o;
                              }
                          })(t),
                          (h[t] = n),
                          u(),
                          (i = l(t)),
                          $
                            ? setTimeout(function () {
                                k.proxy(k.fn.caret, f, i)();
                              }, 0)
                            : f.caret(i),
                          s.begin <= w && r()),
                        e.preventDefault());
                    }
                  })
                  .on("input.mask paste.mask", function () {
                    f.prop("readonly") ||
                      setTimeout(function () {
                        var e = p(!0);
                        f.caret(e), r();
                      }, 0);
                  }),
                o &&
                  $ &&
                  f.off("input.mask").on("input.mask", function () {
                    var e = f.val(),
                      t = f.caret();
                    if (S && S.length && S.length > e.length) {
                      for (p(!0); 0 < t.begin && !y[t.begin - 1]; ) t.begin--;
                      if (0 === t.begin)
                        for (; t.begin < x && !y[t.begin]; ) t.begin++;
                      f.caret(t.begin, t.begin);
                    } else {
                      for (p(!0); t.begin < T && !y[t.begin]; ) t.begin++;
                      f.caret(t.begin, t.begin);
                    }
                    r();
                  }),
                p();
            })
          );
        },
      });
  });
