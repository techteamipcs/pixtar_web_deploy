!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function q() {
    return "undefined" != typeof window;
  }
  function r() {
    return F || (q() && (F = window.gsap) && F);
  }
  function u() {
    return String.fromCharCode.apply(null, arguments);
  }
  var F,
    I,
    N,
    M,
    z,
    B,
    J,
    U,
    K,
    W,
    j,
    D,
    Q,
    i = "Smoother",
    a = u(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
    t =
      ((function (e) {
        var t = "undefined" != typeof window,
          r =
            0 ===
              (t ? window.location.href : "").indexOf(
                u(102, 105, 108, 101, 58, 47, 47)
              ) ||
            -1 !== e.indexOf(u(108, 111, 99, 97, 108, 104, 111, 115, 116)) ||
            -1 !== e.indexOf(u(49, 50, 55, 46, 48, 32, 48, 46, 49)),
          n = [
            a,
            u(99, 111, 100, 101, 112, 101, 110, 46, 105, 111),
            u(
              99,
              111,
              100,
              101,
              112,
              101,
              110,
              46,
              112,
              108,
              117,
              109,
              98,
              105,
              110,
              103
            ),
            u(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118),
            u(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112),
            u(
              99,
              111,
              100,
              101,
              112,
              101,
              110,
              46,
              119,
              101,
              98,
              115,
              105,
              116,
              101
            ),
            u(112, 101, 110, 115, 46, 99, 108, 111, 117, 100),
            u(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
            u(99, 100, 112, 110, 46, 105, 111),
            u(112, 101, 110, 115, 46, 105, 111),
            u(103, 97, 110, 110, 111, 110, 46, 116, 118),
            u(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116),
            u(
              116,
              104,
              101,
              109,
              101,
              102,
              111,
              114,
              101,
              115,
              116,
              46,
              110,
              101,
              116
            ),
            u(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107),
            u(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116),
            u(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109),
            u(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109),
            u(112, 108, 110, 107, 114, 46, 99, 111),
            u(104, 111, 116, 106, 97, 114, 46, 99, 111, 109),
            u(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109),
            u(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103),
            u(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111),
            u(99, 115, 98, 46, 97, 112, 112),
            u(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109),
            u(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111),
            u(99, 111, 100, 105, 101, 114, 46, 105, 111),
            u(
              109,
              111,
              116,
              105,
              111,
              110,
              116,
              114,
              105,
              99,
              107,
              115,
              46,
              99,
              111,
              109
            ),
            u(
              115,
              116,
              97,
              99,
              107,
              111,
              118,
              101,
              114,
              102,
              108,
              111,
              119,
              46,
              99,
              111,
              109
            ),
            u(
              115,
              116,
              97,
              99,
              107,
              101,
              120,
              99,
              104,
              97,
              110,
              103,
              101,
              46,
              99,
              111,
              109
            ),
            u(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116),
          ],
          o = n.length;
        for (
          setTimeout(function checkWarn() {
            t &&
              ("loading" === document.readyState ||
              "interactive" === document.readyState
                ? document.addEventListener("readystatechange", checkWarn)
                : (document.removeEventListener("readystatechange", checkWarn),
                  t &&
                    window.console &&
                    !window._gsapWarned &&
                    "object" == typeof window.gsap &&
                    !1 !== window.gsap.config().trialWarn &&
                    (console.log(
                      u(37, 99, 87, 97, 114, 110, 105, 110, 103),
                      u(
                        102,
                        111,
                        110,
                        116,
                        45,
                        115,
                        105,
                        122,
                        101,
                        58,
                        51,
                        48,
                        112,
                        120,
                        59,
                        99,
                        111,
                        108,
                        111,
                        114,
                        58,
                        114,
                        101,
                        100,
                        59
                      )
                    ),
                    console.log(
                      u(
                        65,
                        32,
                        116,
                        114,
                        105,
                        97,
                        108,
                        32,
                        118,
                        101,
                        114,
                        115,
                        105,
                        111,
                        110,
                        32,
                        111,
                        102,
                        32
                      ) +
                        i +
                        u(
                          32,
                          105,
                          115,
                          32,
                          108,
                          111,
                          97,
                          100,
                          101,
                          100,
                          32,
                          116,
                          104,
                          97,
                          116,
                          32,
                          111,
                          110,
                          108,
                          121,
                          32,
                          119,
                          111,
                          114,
                          107,
                          115,
                          32,
                          108,
                          111,
                          99,
                          97,
                          108,
                          108,
                          121,
                          32,
                          97,
                          110,
                          100,
                          32,
                          111,
                          110,
                          32,
                          100,
                          111,
                          109,
                          97,
                          105,
                          110,
                          115,
                          32,
                          108,
                          105,
                          107,
                          101,
                          32,
                          99,
                          111,
                          100,
                          101,
                          112,
                          101,
                          110,
                          46,
                          105,
                          111,
                          32,
                          97,
                          110,
                          100,
                          32,
                          99,
                          111,
                          100,
                          101,
                          115,
                          97,
                          110,
                          100,
                          98,
                          111,
                          120,
                          46,
                          105,
                          111,
                          46,
                          32,
                          42,
                          42,
                          42,
                          32,
                          68,
                          79,
                          32,
                          78,
                          79,
                          84,
                          32,
                          68,
                          69,
                          80,
                          76,
                          79,
                          89,
                          32,
                          84,
                          72,
                          73,
                          83,
                          32,
                          70,
                          73,
                          76,
                          69,
                          32,
                          42,
                          42,
                          42,
                          32,
                          76,
                          111,
                          97,
                          100,
                          105,
                          110,
                          103,
                          32,
                          105,
                          116,
                          32,
                          111,
                          110,
                          32,
                          97,
                          110,
                          32,
                          117,
                          110,
                          97,
                          117,
                          116,
                          104,
                          111,
                          114,
                          105,
                          122,
                          101,
                          100,
                          32,
                          115,
                          105,
                          116,
                          101,
                          32,
                          118,
                          105,
                          111,
                          108,
                          97,
                          116,
                          101,
                          115,
                          32,
                          116,
                          104,
                          101,
                          32,
                          108,
                          105,
                          99,
                          101,
                          110,
                          115,
                          101,
                          32,
                          97,
                          110,
                          100,
                          32,
                          119,
                          105,
                          108,
                          108,
                          32,
                          99,
                          97,
                          117,
                          115,
                          101,
                          32,
                          97,
                          32,
                          114,
                          101,
                          100,
                          105,
                          114,
                          101,
                          99,
                          116,
                          46,
                          32,
                          80,
                          108,
                          101,
                          97,
                          115,
                          101,
                          32,
                          106,
                          111,
                          105,
                          110,
                          32,
                          67,
                          108,
                          117,
                          98,
                          32,
                          71,
                          114,
                          101,
                          101,
                          110,
                          83,
                          111,
                          99,
                          107,
                          32,
                          116,
                          111,
                          32,
                          103,
                          101,
                          116,
                          32,
                          102,
                          117,
                          108,
                          108,
                          32,
                          97,
                          99,
                          99,
                          101,
                          115,
                          115,
                          32,
                          116,
                          111,
                          32,
                          116,
                          104,
                          101,
                          32,
                          98,
                          111,
                          110,
                          117,
                          115,
                          32,
                          112,
                          108,
                          117,
                          103,
                          105,
                          110,
                          115,
                          32,
                          116,
                          104,
                          97,
                          116,
                          32,
                          98,
                          111,
                          111,
                          115,
                          116,
                          32,
                          121,
                          111,
                          117,
                          114,
                          32,
                          97,
                          110,
                          105,
                          109,
                          97,
                          116,
                          105,
                          111,
                          110,
                          32,
                          115,
                          117,
                          112,
                          101,
                          114,
                          112,
                          111,
                          119,
                          101,
                          114,
                          115,
                          46,
                          32,
                          68,
                          105,
                          115,
                          97,
                          98,
                          108,
                          101,
                          32,
                          116,
                          104,
                          105,
                          115,
                          32,
                          119,
                          97,
                          114,
                          110,
                          105,
                          110,
                          103,
                          32,
                          119,
                          105,
                          116,
                          104,
                          32,
                          103,
                          115,
                          97,
                          112,
                          46,
                          99,
                          111,
                          110,
                          102,
                          105,
                          103,
                          40,
                          123,
                          116,
                          114,
                          105,
                          97,
                          108,
                          87,
                          97,
                          114,
                          110,
                          58,
                          32,
                          102,
                          97,
                          108,
                          115,
                          101,
                          125,
                          41,
                          59
                        )
                    ),
                    console.log(
                      u(
                        37,
                        99,
                        71,
                        101,
                        116,
                        32,
                        117,
                        110,
                        114,
                        101,
                        115,
                        116,
                        114,
                        105,
                        99,
                        116,
                        101,
                        100,
                        32,
                        102,
                        105,
                        108,
                        101,
                        115,
                        32,
                        97,
                        116,
                        32,
                        104,
                        116,
                        116,
                        112,
                        115,
                        58,
                        47,
                        47,
                        103,
                        114,
                        101,
                        101,
                        110,
                        115,
                        111,
                        99,
                        107,
                        46,
                        99,
                        111,
                        109,
                        47,
                        99,
                        108,
                        117,
                        98
                      ),
                      u(
                        102,
                        111,
                        110,
                        116,
                        45,
                        115,
                        105,
                        122,
                        101,
                        58,
                        49,
                        54,
                        112,
                        120,
                        59,
                        99,
                        111,
                        108,
                        111,
                        114,
                        58,
                        35,
                        52,
                        101,
                        57,
                        56,
                        49,
                        53
                      )
                    ),
                    (window._gsapWarned = 1))));
          }, 50);
          -1 < --o;

        )
          if (-1 !== e.indexOf(n[o])) return;
        r ||
          setTimeout(function () {
            t &&
              (window.location.href =
                u(104, 116, 116, 112, 115, 58, 47, 47) +
                a +
                u(
                  47,
                  114,
                  101,
                  113,
                  117,
                  105,
                  114,
                  101,
                  115,
                  45,
                  109,
                  101,
                  109,
                  98,
                  101,
                  114,
                  115,
                  104,
                  105,
                  112,
                  47
                ) +
                "?plugin=" +
                i +
                "&source=trial");
          }, 3e3);
      })("undefined" != typeof window ? window.location.host : ""),
      (Smoother.register = function register(e) {
        return (
          I ||
            ((F = e || r()),
            q() &&
              window.document &&
              ((N = window),
              (M = document),
              (z = M.documentElement),
              (B = M.body)),
            F &&
              ((J = F.utils.toArray),
              (U = F.utils.clamp),
              (j = F.parseEase("expo")),
              (K = F.core.globals().ScrollTrigger),
              F.core.globals("Smoother", Smoother),
              B &&
                K &&
                ((D = K.core._getVelocityProp),
                (Q = K.core._inputObserver),
                (Smoother.refresh = K.refresh),
                (I = 1)))),
          I
        );
      }),
      (function _createClass(e, t, r) {
        return (
          t && _defineProperties(e.prototype, t),
          r && _defineProperties(e, r),
          e
        );
      })(Smoother, [
        {
          key: "progress",
          get: function get() {
            return this.scrollTrigger
              ? this.scrollTrigger.animation._time / 100
              : 0;
          },
        },
      ]),
      Smoother);
  function Smoother(e) {
    var o = this;
    I ||
      
      console.warn("Please gsap.registerPlugin(Smoother)"),
      (e = this.vars = e || {}),
      W && W.kill(),
      (W = this);
    function Fa() {
      return A.update(-R);
    }
    function Ha() {
      return (n.style.overflow = "visible");
    }
    function Ja(e) {
      e.update();
      var t = e.getTween();
      t && (t.pause(), (t._time = t._dur), (t._tTime = t._tDur)),
        (h = !1),
        e.animation.progress(e.progress, !0);
    }
    function Ka(e, t) {
      ((e !== R && !u) || t) &&
        (C &&
          ((n.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)"),
          (n._gsap.y = e + "px")),
        (_ = e - R),
        (R = e),
        K.isUpdating || K.update());
    }
    function La(e) {
      return arguments.length
        ? (e < 0 && (e = 0),
          (L.y = -e),
          (h = !0),
          u ? (R = -e) : Ka(-e),
          P(e),
          this)
        : -R;
    }
    function Na(e) {
      (v.scrollTop = 0),
        (e.target.contains && e.target.contains(v)) ||
          (b && !1 === b(o, e)) ||
          (K.isInViewport(e.target) ||
            e.target === d ||
            o.scrollTo(e.target, !1, "center center"),
          (d = e.target));
    }
    function Oa(e) {
      var r, n, o, i;
      w.forEach(function (t) {
        (r = t.pins),
          (i = t.markers),
          e.forEach(function (e) {
            t.trigger &&
              e.trigger &&
              t !== e &&
              (e.trigger === t.trigger ||
                e.pinnedContainer === t.trigger ||
                t.trigger.contains(e.trigger)) &&
              ((n = e.start),
              (o = (n - t.start - t.offset) / t.ratio - (n - t.start)),
              r.forEach(function (e) {
                return (o -= e.distance / t.ratio - e.distance);
              }),
              e.setPositions(n + o, e.end + o),
              e.markerStart &&
                i.push(F.quickSetter([e.markerStart, e.markerEnd], "y", "px")),
              e.pin &&
                0 < e.end &&
                ((o = e.end - e.start),
                r.push({ start: e.start, end: e.end, distance: o, trig: e }),
                t.setPositions(t.start, t.end + o),
                t.vars.onRefresh(t)));
          });
      });
    }
    function Pa() {
      Ha(),
        requestAnimationFrame(Ha),
        w &&
          (w.forEach(function (e) {
            var t = e.start,
              r = e.auto
                ? Math.min(K.maxScroll(e.scroller), e.end)
                : t + (e.end - t) / e.ratio,
              n = (r - e.end) / 2;
            (t -= n),
              (r -= n),
              (e.offset = n || 1e-4),
              (e.pins.length = 0),
              e.setPositions(Math.min(t, r), Math.max(t, r)),
              e.vars.onRefresh(e);
          }),
          Oa(K.sort())),
        A.reset();
    }
    function Qa() {
      return K.addEventListener("refresh", Pa);
    }
    function Ra() {
      return (
        w &&
        w.forEach(function (e) {
          return e.vars.onRefresh(e);
        })
      );
    }
    function Sa() {
      return (
        w &&
          w.forEach(function (e) {
            return e.vars.onRefreshInit(e);
          }),
        Ra
      );
    }
    function Ta(t, r, n, o) {
      return function () {
        var e = "function" == typeof r ? r(n, o) : r;
        return (
          e ||
            0 === e ||
            (e = o.getAttribute("data-" + k + t) || ("speed" === t ? 1 : 0)),
          o.setAttribute("data-" + k + t, e),
          "auto" === e ? e : parseFloat(e)
        );
      };
    }
    function Ua(r, e, t, n) {
      function Ib() {
        (e = a()),
          (t = f()),
          (o = parseFloat(e) || 1),
          (c = (s = "auto" === e) ? 0 : 0.5),
          l && l.kill(),
          (l = t && F.to(r, { ease: j, overwrite: !1, y: "+=0", duration: t })),
          i && ((i.ratio = o), (i.autoSpeed = s));
      }
      function Jb() {
        (d.y = h + "px"), d.renderTransform(1), Ib();
      }
      function Nb(e) {
        if (s) {
          Jb();
          var t = (function _autoDistance(e, t) {
            var r,
              n,
              o = e.parentNode || z,
              i = e.getBoundingClientRect(),
              a = o.getBoundingClientRect(),
              s = a.top - i.top,
              l = a.bottom - i.bottom,
              c = (Math.abs(s) > Math.abs(l) ? s : l) / (1 - t),
              u = -c * t;
            return (
              0 < c &&
                ((n =
                  0.5 == (r = a.height / (N.innerHeight + a.height))
                    ? 2 * a.height
                    : 2 *
                      Math.min(a.height, (-c * r) / (2 * r - 1)) *
                      (t || 1)),
                (u += t ? -n * t : -n / 2),
                (c += n)),
              { change: c, offset: u }
            );
          })(r, U(0, 1, -e.start / (e.end - e.start)));
          (m = t.change), (u = t.offset);
        } else (m = (e.end - e.start) * (1 - o)), (u = 0);
        g.forEach(function (e) {
          return (m -= e.distance * (1 - o));
        }),
          e.vars.onUpdate(e),
          l && l.progress(1);
      }
      var o,
        i,
        s,
        l,
        c,
        u,
        a = Ta("speed", e, n, r),
        f = Ta("lag", t, n, r),
        h = F.getProperty(r, "y"),
        d = r._gsap,
        g = [],
        p = [],
        m = 0;
      return (
        Ib(),
        (1 !== o || s || l) &&
          (Nb(
            (i = K.create({
              trigger: s ? r.parentNode : r,
              scroller: v,
              scrub: !0,
              refreshPriority: -999,
              onRefreshInit: Jb,
              onRefresh: Nb,
              onKill: function onKill(e) {
                var t = w.indexOf(e);
                0 <= t && w.splice(t, 1), Jb();
              },
              onUpdate: function onUpdate(e) {
                var t,
                  r,
                  n,
                  o = h + m * (e.progress - c),
                  i = g.length,
                  a = 0;
                if (e.offset) {
                  if (i) {
                    for (r = -R, n = e.end; i--; ) {
                      if (
                        (t = g[i]).trig.isActive ||
                        (r >= t.start && r <= t.end)
                      )
                        return void (
                          l &&
                          ((t.trig.progress +=
                            t.trig.direction < 0 ? 0.001 : -0.001),
                          t.trig.update(0, 0, 1),
                          l.resetTo("y", parseFloat(d.y), -_, !0),
                          H && l.progress(1))
                        );
                      r > t.end && (a += t.distance), (n -= t.distance);
                    }
                    o =
                      h +
                      a +
                      m *
                        ((F.utils.clamp(e.start, e.end, r) - e.start - a) /
                          (n - e.start) -
                          c);
                  }
                  (o = (function _round(e) {
                    return Math.round(1e5 * e) / 1e5 || 0;
                  })(o + u)),
                    p.length &&
                      !s &&
                      p.forEach(function (e) {
                        return e(o - a);
                      }),
                    l
                      ? (l.resetTo("y", o, -_, !0), H && l.progress(1))
                      : ((d.y = o + "px"), d.renderTransform(1));
                }
              },
            }))
          ),
          (F.core.getCache(i.trigger).stRevert = Sa),
          (i.startY = h),
          (i.pins = g),
          (i.markers = p),
          (i.ratio = o),
          (i.autoSpeed = s),
          (r.style.willChange = "transform")),
        i
      );
    }
    var n,
      v,
      t,
      i,
      w,
      a,
      s,
      l,
      c,
      u,
      r,
      f,
      h,
      d,
      g = e.smoothTouch,
      p = e.onUpdate,
      m = e.onStop,
      S = e.smooth,
      b = e.onFocusIn,
      T = e.normalizeScroll,
      x = this,
      E =
        "undefined" != typeof ResizeObserver &&
        new ResizeObserver(function () {
          return i.refresh();
        }),
      k = e.effectsPrefix || "",
      P = K.getScrollFunc(N),
      C =
        1 === K.isTouch
          ? !0 === g
            ? 0.8
            : parseFloat(g) || 0
          : 0 === S || !1 === S
          ? 0
          : parseFloat(S) || 0.8,
      R = 0,
      _ = 0,
      H = 1,
      A = D(0),
      L = { y: 0 };
    function refreshHeight() {
      return (
        (t = n.clientHeight),
        (n.style.overflow = "visible"),
        (B.style.height = t + "px"),
        t - N.innerHeight
      );
    }
    Qa(),
      K.addEventListener("killAll", Qa),
      F.delayedCall(0.5, function () {
        return (H = 0);
      }),
      (this.scrollTop = La),
      (this.scrollTo = function (e, t, r) {
        var n = F.utils.clamp(
          0,
          K.maxScroll(N),
          isNaN(e) ? o.offset(e, r) : +e
        );
        t
          ? u
            ? F.to(o, { duration: C, scrollTop: n, overwrite: "auto", ease: j })
            : P(n)
          : La(n);
      }),
      (this.offset = function (e, t) {
        var r,
          n = (e = J(e)[0]).style.cssText,
          o = K.create({ trigger: e, start: t || "top top" });
        return (
          w && Oa([o]),
          (r = o.start),
          o.kill(!1),
          (e.style.cssText = n),
          (F.core.getCache(e).uncache = 1),
          r
        );
      }),
      (this.content = function (e) {
        if (arguments.length) {
          var t = J(e || "#smooth-content")[0] || B.children[0];
          return (
            t !== n &&
              ((c = (n = t).getAttribute("style") || ""),
              E && E.observe(n),
              F.set(n, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0",
              }),
              C || F.set(n, { clearProps: "transform" })),
            this
          );
        }
        return n;
      }),
      (this.wrapper = function (e) {
        return arguments.length
          ? ((v =
              J(e || "#smooth-wrapper")[0] ||
              (function _wrap(e) {
                var t = M.querySelector(".Smoother-wrapper");
                return (
                  t ||
                    ((t = M.createElement("div")).classList.add(
                      "Smoother-wrapper"
                    ),
                    e.parentNode.insertBefore(t, e),
                    t.appendChild(e)),
                  t
                );
              })(n)),
            (l = v.getAttribute("style") || ""),
            refreshHeight(),
            F.set(
              v,
              C
                ? {
                    overflow: "hidden",
                    position: "fixed",
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }
                : {
                    overflow: "visible",
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    top: "auto",
                    bottom: "auto",
                    left: "auto",
                    right: "auto",
                  }
            ),
            this)
          : v;
      }),
      (this.effects = function (e, t) {
        if (((w = w || []), !e)) return w.slice(0);
        (e = J(e)).forEach(function (e) {
          for (var t = w.length; t--; ) w[t].trigger === e && w[t].kill();
        });
        t = t || {};
        var r,
          n,
          o = t.speed,
          i = t.lag,
          a = [];
        for (r = 0; r < e.length; r++) (n = Ua(e[r], o, i, r)) && a.push(n);
        return w.push.apply(w, a), a;
      }),
      (this.sections = function (e, t) {
        if (((a = a || []), !e)) return a.slice(0);
        var r = J(e).map(function (t) {
          return K.create({
            trigger: t,
            start: "top 120%",
            end: "bottom -20%",
            onToggle: function onToggle(e) {
              (t.style.opacity = e.isActive ? "1" : "0"),
                (t.style.pointerEvents = e.isActive ? "all" : "none");
            },
          });
        });
        return t && t.add ? a.push.apply(a, r) : (a = r.slice(0)), r;
      }),
      this.content(e.content),
      this.wrapper(e.wrapper),
      (this.render = function (e) {
        return Ka(e || 0 === e ? e : R);
      }),
      (this.getVelocity = function () {
        return A.getVelocity(-R);
      }),
      K.scrollerProxy(v, {
        scrollTop: La,
        scrollHeight: function scrollHeight() {
          return refreshHeight() && B.scrollHeight;
        },
        fixedMarkers: !1 !== e.fixedMarkers && !!C,
        content: n,
        getBoundingClientRect: function getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: N.innerWidth,
            height: N.innerHeight,
          };
        },
      }),
      K.defaults({ scroller: v });
    var O = K.getAll().filter(function (e) {
      return e.scroller === N || e.scroller === v;
    });
    O.forEach(function (e) {
      return e.revert(!0);
    }),
      (i = K.create({
        animation: F.fromTo(
          L,
          { y: 0 },
          {
            y: function y() {
              return -refreshHeight();
            },
            immediateRender: !1,
            ease: "none",
            data: "Smoother",
            duration: 100,
            onUpdate: function onUpdate() {
              if (this._dur) {
                var e = h;
                e && (Ja(i), (L.y = R)), Ka(L.y, e), Fa(), p && !u && p(x);
              }
            },
          }
        ),
        onRefreshInit: function onRefreshInit() {
          if (w) {
            var e = K.getAll().filter(function (e) {
              return !!e.pin;
            });
            w.forEach(function (r) {
              r.vars.pinnedContainer ||
                e.forEach(function (e) {
                  if (e.pin.contains(r.trigger)) {
                    var t = r.vars;
                    (t.pinnedContainer = e.pin),
                      (r.vars = null),
                      r.init(t, r.animation);
                  }
                });
            });
          }
          (f = R), (L.y = v.scrollTop = 0);
        },
        id: "Smoother",
        scroller: N,
        invalidateOnRefresh: !0,
        start: 0,
        refreshPriority: -9999,
        end: refreshHeight,
        onScrubComplete: function onScrubComplete() {
          A.reset(), m && m(o);
        },
        scrub: C || !0,
        onRefresh: function onRefresh(e) {
          Ja(e),
            (L.y = -P()),
            Ka(L.y),
            H || e.animation.progress(F.utils.clamp(0, 1, f / -e.end));
        },
      })),
      (this.smooth = function (e) {
        return (
          arguments.length && (C = e || 0),
          arguments.length
            ? i.scrubDuration(e)
            : i.getTween()
            ? i.getTween().duration()
            : 0
        );
      }),
      i.getTween() && (i.getTween().vars.ease = e.ease || j),
      (this.scrollTrigger = i),
      e.effects &&
        this.effects(
          !0 === e.effects
            ? "[data-" + k + "speed], [data-" + k + "lag]"
            : e.effects,
          {}
        ),
      e.sections &&
        this.sections(!0 === e.sections ? "[data-section]" : e.sections),
      O.forEach(function (e) {
        (e.vars.scroller = v), e.init(e.vars, e.animation);
      }),
      (this.paused = function (e, t) {
        return arguments.length
          ? (!!u !== e &&
              (e
                ? (i.getTween() && i.getTween().pause(),
                  P(-R),
                  A.reset(),
                  (r = K.normalizeScroll()) && r.disable(),
                  ((u = K.observe({
                    preventDefault: !0,
                    type: "wheel,touch,scroll",
                    debounce: !1,
                    allowClicks: !0,
                    onChangeY: function onChangeY() {
                      return La(-R);
                    },
                  })).nested = Q(z, "wheel,touch,scroll", !0, !1 !== t)))
                : (u.nested.kill(),
                  u.kill(),
                  (u = 0),
                  r && r.enable(),
                  (i.progress = (-R - i.start) / (i.end - i.start)),
                  Ja(i))),
            this)
          : !!u;
      }),
      (this.kill = function () {
        o.paused(!1), Ja(i), i.kill();
        for (var e = (w || []).concat(a || []), t = e.length; t--; )
          e[t].kill();
        K.scrollerProxy(v),
          K.removeEventListener("killAll", Qa),
          K.removeEventListener("refresh", Pa),
          B.style.removeProperty("height"),
          (v.style.cssText = l),
          (n.style.cssText = c);
        var r = K.defaults({});
        r && r.scroller === v && K.defaults({ scroller: N }),
          o.normalizer && K.normalizeScroll(!1),
          clearInterval(s),
          (W = null),
          E && E.disconnect(),
          N.removeEventListener("focusin", Na);
      }),
      (this.refresh = function (e, t) {
        return i.refresh(e, t);
      }),
      T &&
        (this.normalizer = K.normalizeScroll(
          !0 === T ? { debounce: !0, content: !C && n } : T
        )),
      K.config(e),
      "overscrollBehavior" in N.getComputedStyle(B) &&
        F.set([B, z], { overscrollBehavior: "none" }),
      "scrollBehavior" in N.getComputedStyle(B) &&
        F.set([B, z], { scrollBehavior: "auto" }),
      N.addEventListener("focusin", Na),
      (s = setInterval(Fa, 250)),
      "loading" === M.readyState ||
        requestAnimationFrame(function () {
          return K.refresh();
        });
  }
  (t.version = "3.11.1"),
    (t.create = function (e) {
      return W && e && W.content() === J(e.content)[0] ? W : new t(e);
    }),
    (t.get = function () {
      return W;
    }),
    r(),
    (e.Smoother = t),
    (e.default = t);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
