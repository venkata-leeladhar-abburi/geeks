(this["webpackJsonpgeeksforgeeks-org"] = this["webpackJsonpgeeksforgeeks-org"] || []).push([
    [0], {
        256: function(e, t, s) {},
        273: function(e, t) {},
        290: function(e, t, s) {},
        298: function(e, t, s) {},
        437: function(e, t, s) {
            "use strict";
            s.r(t);
            var a = s(0),
                c = s.n(a),
                n = s(40),
                i = s.n(n),
                r = (s(256), s(57)),
                o = s(24),
                l = s(2),
                d = s(4),
                g = s(21),
                u = s(37),
                j = s(228),
                h = window.location.protocol,
                m = ("".concat(window.location.origin, "/"), "".concat(h, "//udevtest3.geeksforgeeks.org/"), {
                    GFG_SITE_URL: "https://www.geeksforgeeks.org/",
                    VIDEO_API_URL: "https://apiscript.geeksforgeeks.org/",
                    AUTH_SITE_URL: "https://auth.geeksforgeeks.org/",
                    GFG_PREMIUM_URL: "https://premium.geeksforgeeks.org/",
                    GFG_UTIL_URL: "https://util.geeksforgeeks.org/",
                    GFG_DISCUSS_URL: "https://discuss.geeksforgeeks.org/discuss/",
                    GFG_PRACTICE_URL: "https://practice.geeksforgeeks.org/",
                    GFG_PRACTICE_API_URL: "https://practiceapi.geeksforgeeks.org/",
                    GFG_UTIL_DJANGO_CF_URL: "https://utilapi.geeksforgeeks.org/",
                    GFG_API_URL: "https://api.geeksforgeeks.org/"
                }),
                p = "csrftoken",
                b = "video",
                x = function(e) {
                    return 1 === e ? "category" : "tag"
                },
                f = "https://media.geeksforgeeks.org/",
                _ = "https://media.geeksforgeeks.org/auth-dashboard-uploads/video_02082021.png",
                O = "https://media.geeksforgeeks.org/auth-dashboard-uploads/empty_asset.png",
                v = !0,
                N = "Videos | GeeksforGeeks",
                w = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",
                y = "A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions.",
                k = "gfgThemeDark",
                S = [{
                    name: "DSA"
                }, {
                    name: "Python"
                }, {
                    name: "Machine Learning"
                }, {
                    name: "JavaScript"
                }, {
                    name: "Interview Preparation"
                }],
                L = "https://media.geeksforgeeks.org/auth-dashboard-uploads/Group.svg",
                C = "https://www.geeksforgeeks.org/community/?ref=homepage",
                G = function(e, t) {
                    false
                },
                E = s(229),
                T = s.n(E),
                R = s(42),
                F = s.n(R),
                I = function() {
                    return /http(s)?:\/\/(premium)\.geeksforgeeks\.org/.test(window.location.origin)
                },
                A = function(e) {
                    return e && !F.a.isEmpty(e) ? "?".concat(T.a.stringify(e)) : ""
                };

            function D(e) {
                for (var t = null, s = document.cookie.split(";"), a = 0; a < s.length; a++) {
                    var c = s[a].split("=");
                    c[0].trim() === e && (t = c[1].trim())
                }
                return t
            }
            var U = function() {
                    var e = Object(u.a)(Object(g.a)().mark((function e() {
                        return Object(g.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, !P()) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return e.next = 5, fetch("".concat(m.VIDEO_API_URL, "get-csrf-token/"), {
                                        credentials: "include"
                                    });
                                case 5:
                                    return e.abrupt("return", D(p));
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), G(e.t0), e.abrupt("return", {
                                        hasError: !0,
                                        message: "Some error occurred",
                                        error: e.t0
                                    });
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                P = function() {
                    var e = D(p);
                    return e ? (G("Csrf: ".concat(e)), e) : (G("CSRF Not present"), null)
                },
                B = function() {
                    document.cookie = "".concat(p, "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.geeksforgeeks.org;")
                },
                q = function() {
                    var e = D("gfg_theme");
                    return G("Theme: ".concat(e)), e === k ? "dark" : "light"
                },
                V = s(1),
                M = c.a.createContext({
                    isLoggedIn: !1,
                    loginModalClass: "",
                    loginInformation: {
                        csrf_token: !1
                    },
                    logoutHandler: function() {},
                    loginHandler: function() {},
                    getToken: function() {
                        var e = Object(u.a)(Object(g.a)().mark((function e() {
                            return Object(g.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    theme: function() {}
                }),
                z = (M.Consumer, function(e) {
                    var t = Object(a.useState)(!1),
                        s = Object(d.a)(t, 2),
                        c = s[0],
                        n = s[1],
                        i = Object(a.useState)({
                            loading: !0
                        }),
                        r = Object(d.a)(i, 2),
                        o = r[0],
                        h = r[1];
                    return Object(a.useEffect)((function() {
                        new Promise(function() {
                            var e = Object(u.a)(Object(g.a)().mark((function e(t, s) {
                                var a, c, n;
                                return Object(g.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, fetch("".concat(m.GFG_UTIL_URL, "getToken.php"), {
                                                credentials: "include"
                                            });
                                        case 3:
                                            return a = e.sent, e.next = 6, a.json();
                                        case 6:
                                            c = e.sent, (n = Object(j.a)(c.token)).uuid ? t(Object(l.a)({}, n)) : s({
                                                hasError: !0,
                                                error: {
                                                    message: "Please login",
                                                    reason: "User not loggedIn"
                                                }
                                            }), G({
                                                token: n,
                                                type: "Extract user cookie"
                                            }), e.next = 16;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(0), G({
                                                message: e.t0.message,
                                                type: "[Error] Extract user cookie"
                                            }), s({
                                                hasError: !0,
                                                error: {
                                                    message: e.t0.message,
                                                    reason: "Invalid token"
                                                }
                                            });
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 12]
                                ])
                            })));
                            return function(t, s) {
                                return e.apply(this, arguments)
                            }
                        }()).then((function(e) {
                            h(Object(l.a)(Object(l.a)({}, e), {}, {
                                loading: !1
                            })), n(!0)
                        })).catch((function(e) {
                            h(Object(l.a)(Object(l.a)({}, e), {}, {
                                loading: !1
                            })), n(!1)
                        }))
                    }), []), Object(V.jsx)(M.Provider, {
                        value: {
                            isLoggedIn: c,
                            loginModalClass: "login-modal-btn",
                            loginInformation: Object(l.a)({}, o),
                            getToken: U,
                            theme: q
                        },
                        children: e.children
                    })
                }),
                W = M,
                H = s(5),
                J = s(237),
                Q = s(28),
                X = s(14),
                Y = s(91),
                K = s(92),
                Z = s(54),
                $ = Object(K.a)({
                    reducerPath: "fetchVideoListApi",
                    tagTypes: ["videos", "watchlistTag"],
                    baseQuery: Object(Z.d)({
                        baseUrl: m.VIDEO_API_URL
                    }),
                    endpoints: function(e) {
                        return {
                            getVideoList: e.query({
                                query: function(e) {
                                    var t = {};
                                    return e.taxonomy && (t.category = e.taxonomy), Number(e.page) > 1 && (t.page = Number(e.page)), e.search && (t.title = e.search), {
                                        url: "/gfg-video-list/".concat(A(t)),
                                        credentials: "include"
                                    }
                                },
                                keepUnusedDataFor: 600
                            }),
                            getCategoryList: e.query({
                                query: function() {
                                    return {
                                        url: "get-gfg-category-list/",
                                        credentials: "include"
                                    }
                                },
                                keepUnusedDataFor: 21600
                            }),
                            getUserWatchlist: e.query({
                                query: function() {
                                    return {
                                        url: "watch-later-video-list/",
                                        method: "GET",
                                        credentials: "include"
                                    }
                                },
                                keepUnusedDataFor: 600,
                                providesTags: ["watchlistTag"]
                            })
                        }
                    }
                }),
                ee = s(9),
                te = ["slug"],
                se = ["type", "csrfToken"],
                ae = Object(K.a)({
                    reducerPath: "fetchVideoBySlugApi",
                    tagTypes: ["video"],
                    baseQuery: Object(Z.d)({
                        baseUrl: m.VIDEO_API_URL
                    }),
                    endpoints: function(e) {
                        return {
                            getVideoDetails: e.query({
                                query: function(e) {
                                    return {
                                        url: "gfg-video-details/".concat(e, "/"),
                                        method: "GET",
                                        credentials: "include"
                                    }
                                },
                                transformResponse: function(e) {
                                    try {
                                        e.recommendations = e.recommendations.filter((function(e) {
                                            return e.slug
                                        }))
                                    } catch (t) {
                                        G({
                                            type: "[getVideoDetails] while transforming response",
                                            error: t
                                        })
                                    }
                                    return e
                                },
                                keepUnusedDataFor: 600
                            }),
                            updateVideoDetails: e.mutation({
                                query: function(e) {
                                    var t = e.slug,
                                        s = Object(ee.a)(e, te);
                                    return {
                                        url: "/logged-in-video-details/".concat(t, "/"),
                                        method: "PUT",
                                        body: s,
                                        credentials: "include"
                                    }
                                },
                                invalidatesTags: function(e, t, s) {
                                    return [{
                                        type: "video",
                                        slug: s.slug
                                    }]
                                }
                            }),
                            updateViewCount: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "update-user-views/",
                                        method: "POST",
                                        body: {
                                            slug: e.slug
                                        },
                                        credentials: "include",
                                        headers: {
                                            Accept: "application/json",
                                            "Content-Type": "application/json",
                                            "X-CSRFToken": e.csrfToken
                                        }
                                    }
                                }
                            })
                        }
                    }
                }),
                ce = Object(K.a)({
                    reducerPath: "userVideoActionsApi",
                    tagTypes: ["UserStats"],
                    baseQuery: Object(Z.d)({
                        baseUrl: m.VIDEO_API_URL
                    }),
                    endpoints: function(e) {
                        return {
                            getUserVideoStats: e.query({
                                query: function(e) {
                                    return {
                                        url: "/logged-in-video-details/".concat(e, "/"),
                                        method: "GET",
                                        credentials: "include"
                                    }
                                },
                                keepUnusedDataFor: 600,
                                providesTags: function(e) {
                                    return [{
                                        type: "UserStats",
                                        slug: e
                                    }]
                                }
                            }),
                            updateUserVideoStats: e.mutation({
                                query: function(e) {
                                    var t = e.type,
                                        s = e.csrfToken,
                                        a = Object(ee.a)(e, se);
                                    return G({
                                        type: "User stats update API [".concat(t, "]"),
                                        payload: a,
                                        csrfToken: s
                                    }), {
                                        url: "like" !== t ? "/add-to-watchlist/" : "/update-user-likes/",
                                        method: "POST",
                                        body: a,
                                        credentials: "include",
                                        headers: {
                                            Accept: "application/json",
                                            "Content-Type": "application/json",
                                            "X-CSRFToken": s
                                        }
                                    }
                                }
                            })
                        }
                    }
                }),
                ne = ce.useUpdateUserVideoStatsMutation,
                ie = (ae.useUpdateVideoDetailsMutation, ae.useUpdateViewCountMutation),
                re = s(34),
                oe = ["loading", "data", "handleWatchlist"],
                le = function(e) {
                    var t, s = e.loading,
                        c = e.data,
                        n = e.handleWatchlist,
                        i = Object(ee.a)(e, oe),
                        r = Object(a.useContext)(W);
                    if (s) return Object(V.jsx)("div", {
                        className: "articles-list_item video-card skeleton",
                        children: Object(V.jsx)("div", {
                            className: "content",
                            children: Object(V.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexGrow: 1
                                },
                                className: "flex-column-sm",
                                children: [Object(V.jsx)("div", {
                                    className: "skeleton-box video-thumbnail"
                                }), Object(V.jsxs)("div", {
                                    className: "gfg-cw-100",
                                    children: [Object(V.jsx)("div", {
                                        className: "head skeleton-box gfg-cw-30",
                                        style: {
                                            height: "20px"
                                        }
                                    }), Object(V.jsxs)("div", {
                                        className: "text",
                                        children: [Object(V.jsx)("div", {
                                            className: "head skeleton-box gfg-cw-60"
                                        }), Object(V.jsx)("div", {
                                            className: "head skeleton-box gfg-cw-50"
                                        }), Object(V.jsx)("div", {
                                            className: "head skeleton-box gfg-cw-40"
                                        })]
                                    }), Object(V.jsxs)("div", {
                                        className: "tags",
                                        children: [Object(V.jsx)("i", {
                                            className: "gfg-icon gfg-icon_tag-primary"
                                        }), Object(V.jsxs)("div", {
                                            className: "tags-list gfg-cw-100",
                                            children: [Object(V.jsx)("div", {
                                                className: "tags-list_item gfg-cw-8 gfg-cw-sm-16",
                                                children: Object(V.jsx)("div", {
                                                    className: "item skeleton-box gfg-cw-80"
                                                })
                                            }), Object(V.jsx)("div", {
                                                className: "tags-list_item gfg-cw-8 gfg-cw-sm-16",
                                                children: Object(V.jsx)("div", {
                                                    className: "item skeleton-box gfg-cw-80"
                                                })
                                            }), Object(V.jsx)("div", {
                                                className: "tags-list_item gfg-cw-8 gfg-cw-sm-16",
                                                children: Object(V.jsx)("div", {
                                                    className: "item skeleton-box gfg-cw-80"
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })
                    });
                    var o = function(e) {
                            if (e > 59) {
                                var t = 0 !== (e / 3600 | 0) ? e / 3600 | 0 : "",
                                    s = e % 3600 / 60 | 0,
                                    a = e % 60;
                                return t = t < 10 ? "0".concat(t) : t, s = s < 10 ? "0".concat(s) : s, a = a < 10 ? "0".concat(a) : a, 0 == t ? "".concat(s, ":").concat(a) : "".concat(t, ":").concat(s, ":").concat(a)
                            }
                            return "0:".concat(e < 10 ? "0" + e : e)
                        },
                        l = function(e) {
                            var t = !!r.loginInformation.premiumUser,
                                s = c.title,
                                a = c.slug,
                                n = c.duration,
                                i = c.meta,
                                l = i.thumbnail,
                                d = i.largeThumbnail,
                                g = i.isPremium;
                            switch (e) {
                                case 0:
                                    return Object(V.jsx)(re.b, {
                                        to: "/videos/".concat(a, "/"),
                                        title: s,
                                        className: "thumbnail ".concat(g && !t ? "premium-overlay" : ""),
                                        "data-duration": o(n),
                                        rel: "bookmark",
                                        children: Object(V.jsx)("img", {
                                            src: l || d || _,
                                            onError: function(e) {
                                                return function(e) {
                                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                                    e.target.src = t || _
                                                }(e, d)
                                            },
                                            alt: "Preview",
                                            style: {
                                                float: "left"
                                            },
                                            width: 200
                                        })
                                    });
                                case 1:
                                    return Object(V.jsx)(re.b, {
                                        to: "/videos/".concat(a, "/"),
                                        title: s,
                                        rel: "bookmark",
                                        children: Object(V.jsx)("h1", {
                                            style: {
                                                fontSize: "14pt",
                                                fontWeight: "600"
                                            },
                                            children: s
                                        })
                                    });
                                case 2:
                                    return Object(V.jsx)(re.b, {
                                        to: "/videos/".concat(a, "/"),
                                        children: Object(V.jsx)("span", {
                                            style: {
                                                color: "#308D46"
                                            },
                                            children: "Read More"
                                        })
                                    });
                                default:
                                    return {}
                            }
                        };
                    return Object(V.jsxs)("div", {
                        className: "articles-list_item video-card video-".concat(c.id, " ").concat(null !== c && void 0 !== c && null !== (t = c.meta) && void 0 !== t && t.isPremium ? "is-premium" : ""),
                        "data-video-id": c.id,
                        id: "video-".concat(c.id),
                        children: [Object(V.jsxs)("div", {
                            className: "content",
                            children: [l(0), Object(V.jsxs)("div", {
                                children: [Object(V.jsx)("div", {
                                    className: "head",
                                    children: l(1)
                                }), Object(V.jsxs)("div", {
                                    className: "text",
                                    children: [Object(V.jsx)("span", {
                                        dangerouslySetInnerHTML: {
                                            __html: c.description.substr(0, 200).replace(/<\/?[^>]+(>|$)/g, "")
                                        }
                                    }), Object(V.jsx)("span", {
                                        className: "read-more",
                                        children: l(2)
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "tags",
                                    children: [Object(V.jsx)("i", {
                                        className: "gfg-icon gfg-icon_tag-primary"
                                    }), Object(V.jsx)("div", {
                                        className: "tags-list",
                                        children: c.category && !F.a.isEmpty(c.category) && c.category.map((function(e, t) {
                                            return Object(V.jsx)("div", {
                                                className: "tags-list_item",
                                                children: Object(V.jsx)("div", {
                                                    className: "item",
                                                    children: Object(V.jsx)(re.b, {
                                                        to: "/videos/".concat(x(e.term_id__term_type), "/").concat(e.term_id__slug),
                                                        children: e.term_id__term_name
                                                    })
                                                })
                                            }, t)
                                        }))
                                    })]
                                })]
                            })]
                        }), i.watchlist && Object(V.jsx)("i", {
                            className: "gfg-icon gfg-icon_bookmark primary video-card__bmIcon cp filled",
                            onClick: function(e) {
                                return n(c.slug)
                            }
                        })]
                    })
                },
                de = function(e) {
                    if (void 0 !== e && null !== e) return (e = (e = e.charAt(0).toUpperCase() + e.slice(1)).replace(/_/g, " ")).toLowerCase().split(" ").map((function(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    })).join(" ")
                },
                ge = ["page", "pagination"],
                ue = function(e) {
                    var t = e.totalCount,
                        s = e.queryParams,
                        c = Object(o.j)(),
                        n = c.page,
                        i = (c.pagination, Object(ee.a)(c, ge)),
                        r = Object(o.k)().path,
                        g = Object(a.useState)(Math.ceil(t / 10) || void 0),
                        u = Object(d.a)(g, 1)[0],
                        j = s.search ? "?".concat(new URLSearchParams(s)) : "";
                    return 1 !== u && Object(V.jsx)("nav", {
                        id: "pagination",
                        className: "navigation",
                        role: "navigation",
                        children: Object(V.jsxs)("div", {
                            className: "gfg-pagination",
                            children: [n && 1 !== Number(n) ? 2 === Number(n) ? Object(V.jsx)(re.b, {
                                className: "gfg-mr-2",
                                to: {
                                    pathname: "".concat(Object(o.f)(r, Object(l.a)({}, i)), "/"),
                                    search: j
                                },
                                children: "Prev"
                            }) : Object(V.jsx)(re.b, {
                                className: "gfg-mr-2",
                                to: {
                                    pathname: "".concat(Object(o.f)(r, Object(l.a)(Object(l.a)({}, i), {}, {
                                        pagination: "page",
                                        page: (Number(n) || 1) - 1
                                    })), "/"),
                                    search: j
                                },
                                children: "Prev"
                            }) : Object(V.jsx)("button", {
                                className: "btn btn--bg-gray btn--disabled gfg-mr-2 font-sm-1",
                                children: "Prev"
                            }), n || 1, " of ", u, Number(n) === u ? Object(V.jsx)("button", {
                                className: "btn btn--bg-gray btn--disabled gfg-ml-2 font-sm-1",
                                children: "Next"
                            }) : Object(V.jsx)(re.b, {
                                className: "gfg-ml-2",
                                to: {
                                    pathname: "/videos/".concat(i.type ? "".concat(i.type, "/").concat(i.taxonomy, "/") : "", "page/").concat((Number(n) || 1) + 1, "/"),
                                    search: j
                                },
                                children: "Next"
                            })]
                        })
                    })
                },
                je = function(e) {
                    var t = e.data;
                    return Object(V.jsx)("ul", {
                        className: "gfg-breadcrumb",
                        children: t && !F.a.isEmpty(t) && t.map((function(e, t) {
                            return Object(V.jsx)("li", {
                                className: "gfg-breadcrumb__item ".concat(e.active ? "gfg-breadcrumb__item--active" : ""),
                                children: Object(V.jsx)(re.b, {
                                    to: e.path,
                                    children: e.name
                                })
                            }, t)
                        }))
                    })
                },
                he = function e(t) {
                    var s = t.data,
                        a = t.level,
                        c = s.slug,
                        n = s.name;
                    return [Object(V.jsx)("option", {
                        value: c,
                        children: "\xa0\xa0".repeat(a + a) + n
                    }, c), s.children && s.children.length ? s.children.map((function(t) {
                        return Object(V.jsx)(e, {
                            data: t,
                            level: a + 1
                        }, t.id)
                    })) : ""]
                },
                me = function(e) {
                    var t = e.selectedchild,
                        s = e.name,
                        a = e.setSelectedParent,
                        c = e.isLoading,
                        n = e.isError,
                        i = e.data;
                    return Object(V.jsxs)("select", {
                        name: s,
                        value: t || void 0,
                        onChange: a,
                        children: [Object(V.jsx)("option", {
                            value: "",
                            children: c ? "Loading.." : "Select Category"
                        }), n && Object(V.jsx)("option", {
                            value: "",
                            children: "Some error occurred"
                        }), !c && i && i.map((function(e) {
                            return Object(V.jsx)(he, {
                                data: e,
                                level: 0
                            }, e.id)
                        }))]
                    })
                },
                pe = function(e) {
                    var t = e.search,
                        s = e.category,
                        c = Object(o.h)(),
                        n = Object(a.useState)({
                            category: "",
                            search: ""
                        }),
                        i = Object(d.a)(n, 2),
                        r = i[0],
                        g = i[1],
                        u = Object(a.useState)(!(!t && !s)),
                        j = Object(d.a)(u, 2),
                        h = j[0],
                        m = j[1],
                        p = Object(Q.d)(),
                        b = Object(Q.e)((function(e) {
                            return $.endpoints.getCategoryList.select()(e)
                        })),
                        x = b.data,
                        f = b.isLoading,
                        _ = b.isError;
                    Object(a.useEffect)((function() {
                        var e = p($.endpoints.getCategoryList.initiate()).unsubscribe;
                        return function() {
                            e()
                        }
                    }), [p]), Object(a.useEffect)((function() {
                        g({
                            category: s || "",
                            search: t || ""
                        }), s || t || m(!1)
                    }), [s, t]);
                    var O = function(e) {
                        g(Object(l.a)(Object(l.a)({}, r), {}, Object(H.a)({}, e.target.name, e.target.value)))
                    };
                    return Object(V.jsx)("div", {
                        className: "video-filters",
                        children: Object(V.jsxs)("form", {
                            autoComplete: "off",
                            onSubmit: function(e) {
                                e.preventDefault();
                                var t = "",
                                    s = "";
                                r.category && (t = "category/".concat(r.category)), r.search && (s = "?search=".concat(r.search)), (t || s) && (m(!0), c.push("/videos/".concat(t).concat(s)))
                            },
                            onReset: function() {
                                m(!1), g({
                                    category: "",
                                    search: ""
                                }), c.push("/videos/")
                            },
                            children: [Object(V.jsxs)("div", {
                                className: "video-filters__form",
                                children: [Object(V.jsxs)("div", {
                                    className: "video-filters__form-select",
                                    children: [Object(V.jsx)("label", {
                                        hidden: !0,
                                        children: "Select Category"
                                    }), Object(V.jsx)(me, {
                                        selectedchild: r.category,
                                        setSelectedParent: O,
                                        data: x,
                                        isLoading: f,
                                        isError: _,
                                        name: "category"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "custom-input--icon video-filters__form-input",
                                    children: [Object(V.jsx)("label", {
                                        hidden: !0,
                                        children: "Search"
                                    }), Object(V.jsx)("input", {
                                        type: "text",
                                        name: "search",
                                        placeholder: "Search",
                                        value: r.search,
                                        onChange: O
                                    })]
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "action-buttons",
                                children: [Object(V.jsx)("button", {
                                    type: "submit",
                                    className: "btn icon-only",
                                    title: "Apply filters",
                                    children: Object(V.jsx)("i", {
                                        className: "gfg-icon gfg-icon_check white"
                                    })
                                }), h && Object(V.jsx)("button", {
                                    type: "reset",
                                    className: "btn icon-only gfg-ml-1 gfg-ml-sm-0",
                                    title: "Clear filters",
                                    children: Object(V.jsx)("i", {
                                        className: "gfg-icon gfg-icon_times"
                                    })
                                })]
                            })]
                        })
                    })
                };
            var be, xe = function() {
                    return new URLSearchParams(Object(o.i)().search)
                },
                fe = s(43),
                _e = "Please try again, some error occurred.",
                Oe = {
                    notLoggedIn: "Please login to proceed",
                    premiumVideoLikeError: "Please Subscribe to Premium to Like this Video",
                    premiumVideoSaveError: "Please Subscribe to Premium to Save this Video"
                },
                ve = s(138),
                Ne = function(e) {
                    var t = e.title,
                        s = e.description,
                        a = e.thumbnail,
                        c = Object(o.k)().url;
                    return Object(V.jsxs)(ve.a, {
                        children: [t && Object(V.jsx)("title", {
                            children: t
                        }), s && Object(V.jsx)("meta", {
                            name: "description",
                            content: s,
                            "data-react-helmet": !0
                        }), s && Object(V.jsx)("meta", {
                            name: "og:description",
                            content: s
                        }), Object(V.jsx)("meta", {
                            property: "og:url",
                            content: "".concat(m.GFG_SITE_URL.slice(0, m.GFG_SITE_URL.length - 1)).concat(c)
                        }), a && Object(V.jsx)("meta", {
                            property: "og:image",
                            content: a
                        }), Object(V.jsx)("link", {
                            rel: "canonical",
                            href: "https://www.geeksforgeeks.org".concat("/" === c[c.length - 1] ? c : c + "/")
                        }), Object(V.jsx)("meta", {
                            property: "twitter:url",
                            content: "".concat(m.GFG_SITE_URL.slice(0, m.GFG_SITE_URL.length - 1)).concat(c)
                        }), t && Object(V.jsx)("meta", {
                            name: "twitter:title",
                            content: t
                        }), s && Object(V.jsx)("meta", {
                            name: "twitter:description",
                            content: s
                        }), a && Object(V.jsx)("meta", {
                            name: "twitter:image",
                            content: a
                        })]
                    })
                },
                we = function(e) {
                    var t = e.isPremiumDomain,
                        s = Object(o.k)(),
                        c = s.params,
                        n = s.path,
                        i = xe().get("search"),
                        r = Object(a.useState)(!1),
                        l = Object(d.a)(r, 2),
                        g = l[0],
                        u = l[1],
                        j = Object(a.useContext)(W),
                        h = Object(Q.e)((function(e) {
                            return $.endpoints.getVideoList.select(c)(e)
                        })),
                        m = h.isLoading,
                        p = void 0 === m || m,
                        b = h.data,
                        x = h.isError,
                        f = Object(Q.d)();
                    Object(a.useEffect)((function() {
                        var e = c;
                        i && (e.search = i);
                        var t = f($.endpoints.getVideoList.initiate(e)).unsubscribe;
                        return function() {
                            window.scrollTo({
                                behavior: "smooth",
                                top: 0
                            }), t()
                        }
                    }), [c, i, f]), Object(a.useEffect)((function() {
                        x && fe.a.error(_e)
                    }), [x]);
                    return Object(V.jsxs)("div", {
                        className: "article--container ".concat(t || j.loginInformation.premiumUser ? "is-premium" : ""),
                        style: {
                            marginTop: "0px",
                            paddingTop: "40px"
                        },
                        children: [Object(V.jsx)(Ne, {
                            title: i ? "Search Result for '".concat(i, "' - Videos | GeeksforGeeks") : "Videos | GeeksforGeeks",
                            thumbnail: w,
                            description: y
                        }), Object(V.jsxs)("div", {
                            className: "articles-list",
                            children: [Object(V.jsxs)("div", {
                                className: "heading",
                                children: [Object(V.jsxs)("div", {
                                    className: "def-title_wrap",
                                    style: {
                                        padding: 0
                                    },
                                    children: [Object(V.jsx)("div", {
                                        className: "title",
                                        children: Object(V.jsx)("h1", {
                                            style: {
                                                fontSize: "16pt",
                                                fontWeight: "300",
                                                color: "#308D46"
                                            },
                                            children: "GeeksforGeeks Videos"
                                        })
                                    }), Object(V.jsx)("button", {
                                        onClick: function() {
                                            u((function(e) {
                                                return !e
                                            }))
                                        },
                                        type: "button",
                                        "data-toggle": "collapse",
                                        className: "btn icon-only",
                                        children: Object(V.jsx)("i", {
                                            className: "gfg-icon gfg-icon_filter"
                                        })
                                    })]
                                }), c.taxonomy && Object(V.jsx)(je, {
                                    data: [{
                                        name: "Videos",
                                        path: "/videos/"
                                    }, {
                                        name: "".concat(de(c.taxonomy)),
                                        path: n,
                                        active: !0
                                    }]
                                }), g && Object(V.jsx)(pe, {
                                    search: i,
                                    category: "tag" !== c.type ? c.taxonomy : ""
                                })]
                            }), x || p ? Object(V.jsxs)(a.Fragment, {
                                children: [Object(V.jsx)(le, {
                                    loading: !0
                                }), Object(V.jsx)(le, {
                                    loading: !0
                                }), Object(V.jsx)(le, {
                                    loading: !0
                                }), Object(V.jsx)(le, {
                                    loading: !0
                                }), Object(V.jsx)(le, {
                                    loading: !0
                                }), Object(V.jsx)(le, {
                                    loading: !0
                                }), Object(V.jsx)(le, {
                                    loading: !0
                                }), Object(V.jsx)(le, {
                                    loading: !0
                                })]
                            }) : p || !b || F.a.isEmpty(b.results) ? !p && b && b.results ? Object(V.jsxs)("div", {
                                className: "d-flex flex-column--def align-items-center gfg-mt-4 gfg-pt-4 gfg-mb-4",
                                children: [Object(V.jsx)("img", {
                                    src: O,
                                    alt: "Empty List",
                                    width: 300,
                                    className: "img-fluid"
                                }), Object(V.jsxs)("div", {
                                    className: "gfg-mt-4 gfg-pt-4 text-center",
                                    children: [Object(V.jsx)("h2", {
                                        className: "gfg-mb-1 text-dark",
                                        children: "Oh Snap!"
                                    }), Object(V.jsx)("p", {
                                        className: "gfg-mb-3 text-dark",
                                        children: "No videos found"
                                    })]
                                })]
                            }) : "" : b.results.map((function(e, t) {
                                return Object(V.jsx)(le, {
                                    data: e
                                }, t)
                            })), b && !F.a.isEmpty(b.results) && Object(V.jsx)(ue, {
                                totalCount: b.count || 0,
                                queryParams: {
                                    search: i
                                }
                            })]
                        })]
                    })
                },
                ye = s(8),
                ke = {
                    type: "watchlist"
                },
                Se = function(e) {
                    var t = e.isPremiumDomain,
                        s = Object(Q.e)((function(e) {
                            return $.endpoints.getUserWatchlist.select(ke)(e)
                        })),
                        c = s.isLoading,
                        n = void 0 === c || c,
                        i = s.data,
                        r = s.isError,
                        o = Object(Q.d)(),
                        j = Object(a.useContext)(W),
                        h = ne(),
                        m = Object(d.a)(h, 1)[0],
                        p = Object(a.useState)(!1),
                        b = Object(d.a)(p, 2),
                        x = b[0],
                        f = b[1];
                    Object(a.useEffect)((function() {
                        var e = o($.endpoints.getUserWatchlist.initiate(ke)).unsubscribe;
                        return function() {
                            window.scrollTo({
                                behavior: "smooth",
                                top: 0
                            }), e()
                        }
                    }), [o]), Object(a.useEffect)((function() {
                        r && j.isLoggedIn && fe.a.error(_e)
                    }), [r, j.isLoggedIn]);
                    var _ = function(e) {
                            var t = i.results ? Object(ye.a)(i.results) : [];
                            t = F.a.map(F.a.omitBy(t, {
                                slug: e
                            })), o($.util.updateQueryData("getUserWatchlist", ke, (function() {
                                return Object(l.a)(Object(l.a)({}, i), {}, {
                                    count: i.count - 1,
                                    results: t
                                })
                            }))), o(ce.util.invalidateTags(["UserStats"]), e)
                        },
                        v = function() {
                            var e = Object(u.a)(Object(g.a)().mark((function e(t) {
                                var s;
                                return Object(g.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, f(!0), e.next = 4, m({
                                                slug: t,
                                                watchlist: !1,
                                                csrfToken: P()
                                            }).unwrap();
                                        case 4:
                                            _(t), e.next = 13;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), s = _e, e.t0.data && "Invalid CSRF Token" === e.t0.data.message && (B(), j.getToken(), s = "Token verification failed, please refresh & try again"), G(e.t0), fe.a.error(s);
                                        case 13:
                                            return e.prev = 13, f(!1), e.finish(13);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7, 13, 16]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(V.jsxs)("div", {
                        className: "article--container ".concat(t || j.loginInformation.premiumUser ? "is-premium" : ""),
                        style: {
                            marginTop: "0px",
                            paddingTop: "40px"
                        },
                        children: [Object(V.jsx)(Ne, {
                            title: "Watchlist - Videos | GeeksforGeeks",
                            thumbnail: w,
                            description: y
                        }), Object(V.jsxs)("div", {
                            className: "articles-list",
                            children: [Object(V.jsx)("div", {
                                className: "heading",
                                children: Object(V.jsx)("div", {
                                    className: "def-title_wrap",
                                    style: {
                                        padding: 0
                                    },
                                    children: Object(V.jsx)("div", {
                                        className: "title",
                                        children: Object(V.jsx)("h1", {
                                            style: {
                                                fontSize: "16pt",
                                                fontWeight: "300",
                                                color: "#308D46"
                                            },
                                            children: "Saved Videos"
                                        })
                                    })
                                })
                            }), j.isLoggedIn || j.loginInformation.loading ? r || n ? Object(V.jsxs)(a.Fragment, {
                                children: [Object(V.jsx)(le, {
                                    loading: !0
                                }), Object(V.jsx)(le, {
                                    loading: !0
                                }), Object(V.jsx)(le, {
                                    loading: !0
                                }), Object(V.jsx)(le, {
                                    loading: !0
                                }), Object(V.jsx)(le, {
                                    loading: !0
                                })]
                            }) : n || !i || F.a.isEmpty(i.results) ? Object(V.jsxs)("div", {
                                className: "d-flex flex-column--def align-items-center gfg-mt-4 gfg-pt-4 gfg-mb-4",
                                children: [Object(V.jsx)("img", {
                                    src: O,
                                    alt: "Empty List",
                                    width: 300,
                                    className: "img-fluid"
                                }), Object(V.jsxs)("div", {
                                    className: "gfg-mt-4 gfg-pt-4 text-center",
                                    children: [Object(V.jsx)("h2", {
                                        className: "gfg-mb-1 text-dark",
                                        children: "Oh Snap!"
                                    }), Object(V.jsx)("p", {
                                        className: "gfg-mb-3 text-dark",
                                        children: "No Saved videos found"
                                    }), Object(V.jsx)(re.b, {
                                        to: "/videos/",
                                        className: "btn btn--bg-primary btn--medium td-none text-light",
                                        children: "Browse Videos"
                                    })]
                                })]
                            }) : i.results.map((function(e, t) {
                                return Object(V.jsx)(le, {
                                    data: e,
                                    watchlist: !0,
                                    handleWatchlist: v
                                }, t)
                            })) : Object(V.jsxs)("div", {
                                className: "d-flex flex-column--def align-items-center gfg-mt-4 gfg-pt-4 gfg-mb-4",
                                children: [Object(V.jsx)("img", {
                                    src: O,
                                    alt: "Empty List",
                                    width: 300,
                                    className: "img-fluid"
                                }), Object(V.jsxs)("div", {
                                    className: "gfg-mt-4 gfg-pt-4 text-center",
                                    children: [Object(V.jsx)("p", {
                                        className: "gfg-mb-3",
                                        children: "Please login to see your saved videos"
                                    }), Object(V.jsx)("button", {
                                        className: "cp btn btn--bg-primary btn--medium td-none text-light ".concat(j.loginModalClass),
                                        children: "Login"
                                    })]
                                })]
                            }), i && !F.a.isEmpty(i.results) && Object(V.jsx)(ue, {
                                queryParams: {},
                                totalCount: i.count || 0
                            })]
                        }), x && Object(V.jsx)("div", {
                            className: "gfg-loader",
                            children: Object(V.jsx)("div", {
                                className: "gfg-loader--overlay",
                                children: Object(V.jsxs)("div", {
                                    className: "loading-dots",
                                    children: [Object(V.jsx)("div", {
                                        className: "loading-dots--dot"
                                    }), Object(V.jsx)("div", {
                                        className: "loading-dots--dot"
                                    }), Object(V.jsx)("div", {
                                        className: "loading-dots--dot"
                                    })]
                                })
                            })
                        })]
                    })
                },
                Le = I(),
                Ce = function(e) {
                    var t = e.match.params;
                    return t && "watchlist" === t.type ? Object(V.jsx)(Se, {
                        isPremiumDomain: Le
                    }) : Object(V.jsx)(we, {
                        isPremiumDomain: Le
                    })
                },
                Ge = function(e) {
                    var t = e.loading,
                        s = e.data,
                        c = e.allowCollapse,
                        n = void 0 !== c && c,
                        i = Object(a.useState)(!1),
                        r = Object(d.a)(i, 2),
                        o = r[0],
                        l = r[1];
                    return Object(a.useEffect)((function() {
                        return function() {
                            n && l(!1)
                        }
                    }), [s.description, n]), Object(V.jsx)("div", {
                        className: "text p-relative",
                        style: n && !o ? {} : {
                            whiteSpace: "pre-wrap"
                        },
                        children: t ? Object(V.jsxs)(a.Fragment, {
                            children: [Object(V.jsx)("p", {
                                className: "skeleton-box gfg-cw-100"
                            }), Object(V.jsx)("p", {
                                className: "skeleton-box gfg-cw-80"
                            }), Object(V.jsx)("p", {
                                className: "skeleton-box gfg-cw-50"
                            })]
                        }) : s.description && s.description.length < 350 ? Object(V.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: s.description
                            }
                        }) : n && !o ? Object(V.jsxs)(a.Fragment, {
                            children: [Object(V.jsx)("div", {
                                style: {
                                    height: "100px",
                                    overflowY: "hidden"
                                },
                                children: Object(V.jsx)("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: s.description
                                    }
                                })
                            }), Object(V.jsx)("button", {
                                className: "toggleDescriptionButton btn btn--bg-grey translucent gfg-cw-100 btn--large text-large cp",
                                onClick: function() {
                                    return l((function(e) {
                                        return !e
                                    }))
                                },
                                children: "Show more"
                            })]
                        }) : !n || n && o ? Object(V.jsxs)(a.Fragment, {
                            children: [Object(V.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: s.description
                                }
                            }), n && Object(V.jsx)("button", {
                                className: "btn btn--bg-grey translucent gfg-cw-100 btn--large text-large cp",
                                onClick: function() {
                                    return l((function(e) {
                                        return !e
                                    }))
                                },
                                children: "Show less"
                            })]
                        }) : ""
                    })
                },
                Ee = function(e) {
                    var t = e.loading,
                        s = e.data;
                    return Object(V.jsx)(V.Fragment, {
                        children: t ? Object(V.jsxs)(a.Fragment, {
                            children: [Object(V.jsx)("div", {
                                className: "title skeleton-box gfg-cw-25"
                            }), Object(V.jsx)("div", {
                                className: "media",
                                children: Object(V.jsx)("div", {
                                    className: "meta skeleton-box gfg-cw-20"
                                })
                            })]
                        }) : Object(V.jsx)(a.Fragment, {
                            children: Object(V.jsx)("div", {
                                className: "d-flex justify-content-between align-items-center",
                                children: Object(V.jsx)("div", {
                                    children: Object(V.jsx)("div", {
                                        className: "media gfg-mb-0 gfg-mt-0",
                                        children: Object(V.jsx)("div", {
                                            className: "meta d-row nowrap justify-content-between gfg-cw-100",
                                            children: s && s.meta ? Object(V.jsxs)("ul", {
                                                className: "gfg-pb-1",
                                                children: [s.meta.views > 1 && Object(V.jsxs)("li", {
                                                    className: "noPadding",
                                                    children: [s.meta.views, " Views"]
                                                }), s.time && Object(V.jsx)("li", {
                                                    className: "noMarker",
                                                    children: s.time
                                                })]
                                            }) : ""
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                Te = function(e) {
                    var t = e.data,
                        s = e.type;
                    return Object(V.jsx)("div", {
                        className: "bottom-wrap ".concat(s === b ? "gfg-pti-0" : ""),
                        children: Object(V.jsx)("div", {
                            className: "improved",
                            children: t && !F.a.isEmpty(t) && Object(V.jsxs)(a.Fragment, {
                                children: [Object(V.jsx)("div", {
                                    className: "t-head",
                                    style: {
                                        minWidth: "auto"
                                    },
                                    children: "Related Tags:"
                                }), Object(V.jsx)("ul", {
                                    children: t.map((function(e, t) {
                                        return Object(V.jsx)("li", {
                                            children: Object(V.jsx)(re.b, {
                                                to: "/videos/".concat(x(e.term_id__term_type), "/").concat(e.term_id__slug),
                                                children: e.term_id__term_name
                                            })
                                        }, t)
                                    }))
                                })]
                            })
                        })
                    })
                },
                Re = function(e) {
                    var t = e.data,
                        s = e.isError,
                        c = Object(a.useContext)(W);
                    return Object(V.jsx)("div", {
                        className: "video-loginView skeleton-box ".concat(s ? "skeleton-box--error" : ""),
                        children: t && t.largeThumbnail ? Object(V.jsxs)(a.Fragment, {
                            children: [Object(V.jsx)("img", {
                                src: t.largeThumbnail,
                                alt: t.title,
                                className: "img-fluid"
                            }), !c.loginInformation.premiumUser && Object(V.jsx)("a", {
                                href: m.GFG_PREMIUM_URL,
                                className: "btn btn--bg-primary td-none btn--large ws-nowrap",
                                style: {
                                    color: "white"
                                },
                                children: "Subscribe to Premium"
                            })]
                        }) : ""
                    })
                },
                Fe = s(98),
                Ie = (s(284), s(285), s(286), s(287), s(288), Object(X.createSlice)({
                    name: "extraVideoSlice",
                    initialState: {
                        videoLoad: 1
                    },
                    reducers: {
                        toggleVideoOnLoad: function(e) {
                            e.videoLoad++
                        }
                    }
                })),
                Ae = Ie.actions.toggleVideoOnLoad,
                De = Ie.reducer,
                Ue = ["src", "controls", "autoplay", "type"],
                Pe = ["src", "controls", "autoplay", "type"],
                Be = function(e) {
                    var t = e.src,
                        s = e.controls,
                        c = e.autoplay,
                        n = e.type,
                        i = Object(ee.a)(e, Pe),
                        r = function(e) {
                            var t = e.src,
                                s = e.controls,
                                c = void 0 === s || s,
                                n = e.autoplay,
                                i = void 0 !== n && n,
                                r = e.type,
                                o = void 0 === r ? "application/x-mpegURL" : r,
                                g = Object(ee.a)(e, Ue),
                                u = Object(a.useRef)(null),
                                j = Object(a.useState)(null),
                                h = Object(d.a)(j, 2),
                                m = h[0],
                                p = h[1];
                            return Object(a.useEffect)((function() {
                                var e = {
                                        fill: !0,
                                        fluid: !0,
                                        aspectRatio: g.isPremium ? "2:1" : "16:9",
                                        preload: "auto",
                                        nativeAudioTracks: !1,
                                        nativeVideoTracks: !1,
                                        html5: {
                                            hls: {
                                                debug: !0,
                                                overrideNative: !0,
                                                enableLowInitialPlaylist: !0,
                                                smoothQualityChange: !0
                                            }
                                        },
                                        playbackRates: [.5, 1, 1.5, 2],
                                        width: "100% !important",
                                        height: "450px",
                                        controlBar: {
                                            volumePanel: {
                                                inline: !1,
                                                vertical: !0
                                            },
                                            pictureInPictureToggle: !1
                                        }
                                    },
                                    s = ["html5"];
                                "video/youtube" === o && s.push("youtube");
                                var a = Object(Fe.default)(u.current, Object(l.a)(Object(l.a)({}, e), {}, {
                                    controls: c,
                                    autoplay: i,
                                    preload: "none",
                                    poster: g.thumbnail || g.largeThumbnail,
                                    sources: [{
                                        src: t,
                                        type: o
                                    }],
                                    techOrder: s
                                }), (function() {
                                    if ("video/youtube" !== o) {
                                        a.qualityLevels();
                                        try {
                                            a.hlsQualitySelector({})
                                        } catch (e) {
                                            G("HLS not working - ", t)
                                        }
                                    }
                                    g.subtitle && a.addRemoteTextTrack({
                                        kind: "captions",
                                        label: "English",
                                        srcLang: "en",
                                        src: g.subtitle,
                                        default: !0
                                    });
                                    try {
                                        a.hotkeys({
                                            seekStep: 5,
                                            volumeStep: .1,
                                            enableModifiersForNumbers: !1
                                        })
                                    } catch (e) {
                                        G("Hotkeys not working - ", e)
                                    }
                                }));
                                return p(a),
                                    function() {
                                        null !== m && m.dispose()
                                    }
                            }), []), Object(a.useEffect)((function() {
                                null !== m && m.src({
                                    src: t
                                })
                            }), [t, m]), u
                        }(Object(l.a)({
                            src: t,
                            controls: s,
                            autoplay: c,
                            type: n
                        }, i)),
                        g = Object(a.useState)(!1),
                        u = Object(d.a)(g, 2),
                        j = u[0],
                        h = u[1],
                        m = Object(Q.e)((function(e) {
                            return e.additionalDetails.videoLoad
                        })),
                        p = Object(Q.d)(),
                        b = ie(),
                        x = Object(d.a)(b, 1)[0],
                        f = Object(o.j)(),
                        _ = Object(o.h)();
                    Object(a.useEffect)((function() {
                        return "PUSH" === _.action && p(Ae()),
                            function() {
                                p(Ae()), h(!1)
                            }
                    }), [t]);
                    return Object(V.jsx)("div", {
                        "data-vjs-player": !0,
                        className: "video-gfgPlayer",
                        children: Object(V.jsx)("video", {
                            ref: r,
                            onTimeUpdate: function(e) {
                                var t = Number(e.target.currentTime),
                                    s = P();
                                !isNaN(t) && t > 0 && !j && s && (h(!0), x({
                                    slug: f.slug,
                                    csrfToken: s
                                }))
                            },
                            autoPlay: !0,
                            muted: m <= 1 && (window.chrome || !!window.safari),
                            id: "gfgVideoPlayer",
                            className: "video-js vjs-default-skin vjs-big-play-centered"
                        })
                    })
                },
                qe = function(e) {
                    var t = e.title,
                        s = e.loading,
                        c = e.data,
                        n = Object(o.k)().path,
                        i = Object(a.useState)({
                            page: 1,
                            flex: 2,
                            listItems: 2
                        }),
                        r = Object(d.a)(i, 2),
                        g = r[0],
                        u = r[1],
                        j = Object(a.useState)([]),
                        h = Object(d.a)(j, 2),
                        m = h[0],
                        p = h[1];
                    Object(a.useEffect)((function() {
                        window.innerWidth <= 576 && u((function(e) {
                            return Object(l.a)(Object(l.a)({}, e), {}, {
                                flex: 1
                            })
                        }))
                    }), []), Object(a.useEffect)((function() {
                        if (c && c.length) {
                            var e = [],
                                t = [];
                            c.forEach((function(s, a) {
                                (a % g.listItems === 0 && a > 0 || a === c.length - 1) && t.length && e.push(t), a % g.listItems === 0 && (t = []), t.push(s)
                            })), c.length % 2 !== 0 && e.push(t), p([].concat(e))
                        }
                        return function() {
                            p([]), u({
                                page: 1,
                                flex: 2,
                                listItems: 2
                            })
                        }
                    }), [c, g.listItems]);
                    return !s && m.length <= 0 ? "" : Object(V.jsx)("div", {
                        className: "article--recommended",
                        children: Object(V.jsxs)("div", {
                            className: "article--recommended_wrapper",
                            children: [Object(V.jsxs)("div", {
                                className: "top-bar",
                                children: [Object(V.jsx)("div", {
                                    className: "def-title_wrap pl-0",
                                    children: Object(V.jsx)("div", {
                                        className: "title large",
                                        children: t
                                    })
                                }), c && c.length > g.flex * g.listItems && Object(V.jsxs)("div", {
                                    className: "page-list",
                                    children: [!s && Object(V.jsx)("div", {
                                        className: "page-h",
                                        children: "Page :"
                                    }), Object(V.jsx)("div", {
                                        className: "pages",
                                        children: c && c.length && F.a.times(Math.ceil(c.length / (g.flex * g.listItems)), (function(e) {
                                            return Object(V.jsx)("div", {
                                                className: "page p ".concat(g.page === e + 1 ? "active" : ""),
                                                onClick: function() {
                                                    return t = e + 1, void u(Object(l.a)(Object(l.a)({}, g), {}, {
                                                        page: t
                                                    }));
                                                    var t
                                                },
                                                "data-page": e,
                                                children: e + 1
                                            }, e)
                                        }))
                                    })]
                                })]
                            }), Object(V.jsx)("div", {
                                className: "gfg-carousel",
                                children: Object(V.jsxs)("div", {
                                    className: "gfg-carousel__wrap",
                                    "data-flex": "2",
                                    children: [m && m.map((function(e, t) {
                                        var s = (g.page - 1) * g.flex,
                                            a = g.page * g.flex,
                                            c = a > t && s <= t ? 1 === g.page ? "initial" : "active" : a <= t ? "next" : "prev";
                                        return Object(V.jsx)("div", {
                                            className: "gfg-carousel__wrap-slide ".concat(c),
                                            children: Object(V.jsx)("div", {
                                                className: "slide-item_list",
                                                children: e && e.map((function(e, t) {
                                                    return Object(V.jsxs)("div", {
                                                        className: "slide-item",
                                                        children: [Object(V.jsx)("img", {
                                                            src: null === e || void 0 === e ? void 0 : e.largeThumbnail,
                                                            className: "img-fluid slide-item_thumbnail",
                                                            alt: "".concat(e.title)
                                                        }), Object(V.jsxs)(re.b, {
                                                            to: Object(o.f)(n, {
                                                                slug: e.slug
                                                            }),
                                                            title: e.title,
                                                            rel: "bookmark",
                                                            className: "c-wrap",
                                                            children: [Object(V.jsx)("div", {
                                                                className: "head",
                                                                children: e.title
                                                            }), Object(V.jsx)("div", {
                                                                className: "meta",
                                                                children: e.time
                                                            })]
                                                        })]
                                                    }, t)
                                                }))
                                            })
                                        }, t)
                                    })), s && Object(V.jsxs)(V.Fragment, {
                                        children: [Object(V.jsx)("div", {
                                            className: "gfg-carousel__wrap-slide initial",
                                            children: Object(V.jsxs)("div", {
                                                className: "slide-item_list",
                                                children: [Object(V.jsxs)("div", {
                                                    className: "slide-item gfg-cw-100",
                                                    children: [Object(V.jsx)("div", {
                                                        className: "skeleton-box slide-item_thumbnail"
                                                    }), Object(V.jsxs)("div", {
                                                        className: "c-wrap gfg-cw-40 gfg-cw-sm-100 skeleton",
                                                        children: [Object(V.jsx)("div", {
                                                            className: "head skeleton-box gfg-cw-50 gfg-cw-sm-80"
                                                        }), Object(V.jsx)("div", {
                                                            className: "meta skeleton-box gfg-cw-30 gfg-cw-sm-50 gfg-mt-2"
                                                        })]
                                                    })]
                                                }), Object(V.jsxs)("div", {
                                                    className: "slide-item gfg-cw-100",
                                                    children: [Object(V.jsx)("div", {
                                                        className: "skeleton-box slide-item_thumbnail"
                                                    }), Object(V.jsxs)("div", {
                                                        className: "c-wrap gfg-cw-40 gfg-cw-sm-100 skeleton",
                                                        children: [Object(V.jsx)("div", {
                                                            className: "head skeleton-box gfg-cw-50 gfg-cw-sm-80"
                                                        }), Object(V.jsx)("div", {
                                                            className: "meta skeleton-box gfg-cw-30 gfg-cw-sm-50 gfg-mt-2"
                                                        })]
                                                    })]
                                                })]
                                            })
                                        }), Object(V.jsx)("div", {
                                            className: "gfg-carousel__wrap-slide initial",
                                            children: Object(V.jsxs)("div", {
                                                className: "slide-item_list",
                                                children: [Object(V.jsxs)("div", {
                                                    className: "slide-item gfg-cw-100",
                                                    children: [Object(V.jsx)("div", {
                                                        className: "skeleton-box slide-item_thumbnail"
                                                    }), Object(V.jsxs)("div", {
                                                        className: "c-wrap gfg-cw-40 gfg-cw-sm-100 skeleton",
                                                        children: [Object(V.jsx)("div", {
                                                            className: "head skeleton-box gfg-cw-50 gfg-cw-sm-80"
                                                        }), Object(V.jsx)("div", {
                                                            className: "meta skeleton-box gfg-cw-30 gfg-cw-sm-50 gfg-mt-2"
                                                        })]
                                                    })]
                                                }), Object(V.jsxs)("div", {
                                                    className: "slide-item gfg-cw-100",
                                                    children: [Object(V.jsx)("div", {
                                                        className: "skeleton-box slide-item_thumbnail"
                                                    }), Object(V.jsxs)("div", {
                                                        className: "c-wrap gfg-cw-40 gfg-cw-sm-100 skeleton",
                                                        children: [Object(V.jsx)("div", {
                                                            className: "head skeleton-box gfg-cw-50 gfg-cw-sm-80"
                                                        }), Object(V.jsx)("div", {
                                                            className: "meta skeleton-box gfg-cw-30 gfg-cw-sm-50 gfg-mt-2"
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }), Object(V.jsx)("div", {
                                className: "gfg-carousel_dots",
                                children: Object(V.jsxs)("div", {
                                    className: "carousel--dots",
                                    children: [Object(V.jsx)("div", {
                                        className: "page p dots active",
                                        "data-page": "1"
                                    }), Object(V.jsx)("div", {
                                        className: "page p dots ",
                                        "data-page": "2"
                                    }), Object(V.jsx)("div", {
                                        className: "page p dots ",
                                        "data-page": "3"
                                    })]
                                })
                            })]
                        })
                    })
                },
                Ve = function(e) {
                    var t = e.handleVideoOperations,
                        s = e.userStats,
                        c = e.authCtx,
                        n = e.data,
                        i = e.disableButton,
                        r = e.handleLikeOperation,
                        o = Object(a.useState)(!1),
                        g = Object(d.a)(o, 2),
                        u = g[0],
                        j = g[1];
                    return Object(a.useEffect)((function() {
                        return function() {
                            j(!1)
                        }
                    }), [u]), Object(V.jsxs)("button", {
                        onClick: function(e) {
                            c.isLoggedIn ? !n.isPremium || c.loginInformation.premiumUser ? s ? t(Object(l.a)(Object(l.a)({}, s), {}, {
                                liked: !s.liked || !1
                            })).then((function(e) {
                                e.hasError ? fe.a.error(e.message || _e) : (r(s.liked ? 0 : 1), G("Successfully done [Like operation]"))
                            })).catch((function(e) {
                                G(e), fe.a.error(e.message || _e)
                            })).finally((function() {
                                j(!0)
                            })) : fe.a.error(_e) : fe.a.error(Oe.premiumVideoLikeError) : fe.a.error(Oe.notLoggedIn)
                        },
                        disabled: !!i && "disabled",
                        "data-disabled": i && !u,
                        className: "btn btn--transparent btn--hoverable cp d-row ".concat(null !== s && void 0 !== s && s.liked && c.isLoggedIn ? "text-primary" : "inactive", " gfg-pb-1 gfg-pl-1 gfg-pr-1 ").concat(c.isLoggedIn ? "" : c.loginModalClass),
                        title: "Like",
                        children: [Object(V.jsx)("span", {
                            className: "gfg-icon gfg-icon_videoLike ".concat(null !== s && void 0 !== s && s.liked && c.isLoggedIn ? "active primary" : "")
                        }), Object(V.jsx)("span", {
                            className: "gfg-pl-1",
                            children: function() {
                                var e = null !== s && void 0 !== s && s.liked && c.isLoggedIn ? 1 : 0,
                                    t = e;
                                return Number(n.likes) > 0 && (t = Number(n.likes) > 1e3 ? (n.likes / 1e3).toFixed(1) + "k" : n.likes || e), t = t > 1 ? t + " Likes" : t + " Like"
                            }()
                        })]
                    })
                },
                Me = function(e) {
                    var t = e.handleVideoOperations,
                        s = e.userStats,
                        c = e.authCtx,
                        n = e.disableButton,
                        i = e.data,
                        r = Object(a.useState)(!1),
                        o = Object(d.a)(r, 2),
                        g = o[0],
                        u = o[1];
                    return Object(a.useEffect)((function() {
                        return function() {
                            u(!1)
                        }
                    }), [g]), Object(V.jsxs)("button", {
                        onClick: function() {
                            c.isLoggedIn ? !i.isPremium || c.loginInformation.premiumUser ? s ? t(Object(l.a)(Object(l.a)({}, s), {}, {
                                watchlist: !s.watchlist
                            })).then((function(e) {
                                e.hasError ? fe.a.error(e.message || _e) : G("Successfully done [save operation]")
                            })).catch((function(e) {
                                G(e), fe.a.error(e.message || _e)
                            })).finally((function() {
                                u(!0)
                            })) : fe.a.error(_e) : fe.a.error(Oe.premiumVideoSaveError) : fe.a.error(Oe.notLoggedIn)
                        },
                        disabled: !!n && "disabled",
                        "data-disabled": n && !g,
                        className: "btn btn--transparent btn--hoverable cp d-row ".concat(null !== s && void 0 !== s && s.watchlist && c.isLoggedIn ? "text-primary" : "inactive", " gfg-pb-1 gfg-pl-1 gfg-pr-1 ").concat(c.isLoggedIn ? "" : c.loginModalClass),
                        title: "Add to watchlist",
                        children: [Object(V.jsx)("span", {
                            className: "gfg-icon gfg-icon_bookmark ".concat(null !== s && void 0 !== s && s.watchlist && c.isLoggedIn ? "active primary filled" : "black", " gfg-icon-20")
                        }), Object(V.jsx)("span", {
                            className: "gfg-pl-1",
                            children: null !== s && void 0 !== s && s.watchlist && c.isLoggedIn ? "Saved" : "Save"
                        })]
                    })
                },
                ze = function(e) {
                    var t = e.data,
                        s = e.handleLikeOperation,
                        c = e.isParentLoading,
                        n = e.loadCommentSection,
                        i = Object(a.useContext)(W),
                        r = Object(o.j)(),
                        j = Object(Q.d)(),
                        h = Object(a.useState)(!1),
                        m = Object(d.a)(h, 2),
                        p = m[0],
                        b = m[1],
                        x = ne(),
                        f = Object(d.a)(x, 1)[0],
                        _ = Object(Q.e)((function(e) {
                            return ce.endpoints.getUserVideoStats.select(r.slug)(e)
                        })),
                        O = _.data,
                        v = _.isLoading;
                    Object(a.useEffect)((function() {
                        var e;
                        return i.isLoggedIn && (e = j(ce.endpoints.getUserVideoStats.initiate(r.slug))),
                            function() {
                                e && e.unsubscribe && e.unsubscribe()
                            }
                    }), [j, r.slug, i.isLoggedIn]), Object(a.useEffect)((function() {
                        return function() {
                            b(!1)
                        }
                    }), [O]);
                    var N = function() {
                        var e = Object(u.a)(Object(g.a)().mark((function e(t) {
                            var s;
                            return Object(g.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, b(!0), e.next = 4, f(Object(l.a)({
                                            type: t.watchlist !== O.watchlist ? "watchlist" : "like",
                                            slug: r.slug,
                                            csrfToken: P()
                                        }, t)).unwrap();
                                    case 4:
                                        return j(ce.util.updateQueryData("getUserVideoStats", r.slug, (function() {
                                            return Object(l.a)(Object(l.a)({}, O), t)
                                        }))), t.watchlist !== O.watchlist && (G({
                                            message: "Invalidating Watchlist Tag: ",
                                            payload: t,
                                            userStats: O
                                        }), j($.util.invalidateTags(["watchlistTag"]))), e.abrupt("return", {
                                            hasError: !1
                                        });
                                    case 9:
                                        return e.prev = 9, e.t0 = e.catch(0), G(e.t0), s = "", e.t0 && e.t0.data && "Invalid CSRF Token" === e.t0.data.message && (B(), i.getToken(), s = "Token verification failed, please refresh & try again"), e.abrupt("return", Object(l.a)({
                                            hasError: !0,
                                            message: s
                                        }, e.t0));
                                    case 15:
                                        return e.prev = 15, b(!1), e.finish(15);
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 9, 15, 18]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                    return v || c ? Object(V.jsxs)("ul", {
                        className: "d-row border-bottom noMarker justify-content-end action-buttons loading",
                        children: [Object(V.jsx)("li", {
                            className: "gfg-cw-10 gfg-pl-2",
                            children: Object(V.jsx)("div", {
                                className: "skeleton-box gfg-cw-100"
                            })
                        }), Object(V.jsx)("li", {
                            className: "gfg-cw-10 gfg-pl-2",
                            children: Object(V.jsx)("div", {
                                className: "skeleton-box gfg-cw-100"
                            })
                        }), Object(V.jsx)("li", {
                            className: "gfg-cw-10 gfg-pl-2",
                            children: Object(V.jsx)("div", {
                                className: "skeleton-box gfg-cw-100"
                            })
                        }), Object(V.jsx)("li", {
                            className: "gfg-cw-10 gfg-pl-2",
                            children: Object(V.jsx)("div", {
                                className: "skeleton-box gfg-cw-100"
                            })
                        })]
                    }) : Object(V.jsxs)("ul", {
                        className: "d-row border-bottom noMarker justify-content-end action-buttons",
                        children: [Object(V.jsx)("li", {
                            children: Object(V.jsx)(Ve, {
                                authCtx: i,
                                handleVideoOperations: N,
                                userStats: O,
                                data: t,
                                handleLikeOperation: s,
                                disableButton: p
                            })
                        }), Object(V.jsx)("li", {
                            children: Object(V.jsxs)("button", {
                                onClick: function() {
                                    try {
                                        document.getElementById("comments").scrollIntoView(), n()
                                    } catch (e) {}
                                },
                                className: "btn btn--transparent btn--hoverable cp d-row inactive gfg-pb-1 gfg-pl-1 gfg-pr-1",
                                title: "Comments",
                                children: [Object(V.jsx)("span", {
                                    className: "gfg-icon gfg-icon_comments black"
                                }), Object(V.jsx)("span", {
                                    className: "gfg-pl-1",
                                    children: "Comments"
                                })]
                            })
                        }), Object(V.jsx)("li", {
                            children: Object(V.jsxs)("button", {
                                onClick: function() {
                                    try {
                                        var e = document.createElement("textarea");
                                        e.innerHTML = window.location.href, document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e), fe.a.success("Copied the URL in Clipboard")
                                    } catch (t) {
                                        console.error("[VideoActions] Some error occurred while sharing")
                                    }
                                },
                                className: "btn btn--transparent btn--hoverable cp d-row inactive gfg-pb-1 gfg-pl-1 gfg-pr-1",
                                title: "Share Video",
                                children: [Object(V.jsx)("span", {
                                    className: "gfg-icon gfg-icon_share black"
                                }), Object(V.jsx)("span", {
                                    className: "gfg-pl-1",
                                    children: "Share"
                                })]
                            })
                        }), Object(V.jsx)("li", {
                            children: Object(V.jsx)(Me, {
                                authCtx: i,
                                handleVideoOperations: N,
                                userStats: O,
                                data: t,
                                handleLikeOperation: s,
                                disableButton: p
                            })
                        })]
                    })
                },
                We = s(236),
                He = function(e) {
                    var t = Object(o.i)(),
                        s = Object(a.useState)(!1),
                        c = Object(d.a)(s, 2),
                        n = c[0],
                        i = c[1],
                        r = (m.GFG_SITE_URL.replace(/(^\w+:|^)\/\//, ""), m.GFG_SITE_URL.substr(0, [m.GFG_SITE_URL.length - 1]) + t.pathname),
                        l = Object(a.useContext)(W),
                        g = Object(a.useState)("light"),
                        u = Object(d.a)(g, 2),
                        j = u[0],
                        h = u[1],
                        p = "".concat(m.GFG_DISCUSS_URL).concat(e.id, "/").concat(encodeURIComponent(e.title), "/").concat("gfg", "?rel=").concat(encodeURIComponent(r), "&mode=").concat(j),
                        b = function() {
                            i(!0)
                        };
                    return Object(a.useEffect)((function() {
                        e.loadComments && b()
                    }), [e.loadComments]), Object(a.useEffect)((function() {
                        return h(l.theme()),
                            function() {
                                i(!1)
                            }
                    }), [t.pathname]), Object(V.jsxs)("section", {
                        className: "video-wrapper",
                        id: "comments",
                        children: [Object(V.jsx)("div", {
                            className: "disqus--viewer",
                            children: Object(V.jsx)("div", {
                                id: "ide_link",
                                style: {
                                    textAlign: "center",
                                    margin: "50px 0 20px",
                                    fontSize: "12px"
                                },
                                children: Object(V.jsxs)("p", {
                                    children: ["Writing code in comment? Please use ", Object(V.jsx)("a", {
                                        href: "https://ide.geeksforgeeks.org/",
                                        children: "ide.geeksforgeeks.org"
                                    }), ", generate link and share the link here."]
                                })
                            })
                        }), !n && Object(V.jsx)("div", {
                            id: "loadComment",
                            children: Object(V.jsx)("button", {
                                id: "comment",
                                onClick: b,
                                style: {
                                    width: "45%",
                                    marginRight: "0%",
                                    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.4), 0 6px 20px 0 rgba(0,0,0,0)",
                                    borderColor: "#4cb96b",
                                    borderRadius: "4px",
                                    backgroundColor: "var(--gfg-grey-bg)",
                                    color: "var(--color-black)"
                                },
                                children: "Load Comments"
                            })
                        }), n && Object(V.jsx)(We.a, {
                            log: !1,
                            src: p,
                            style: {
                                width: "1px",
                                minWidth: "100%"
                            }
                        })]
                    })
                },
                Je = function(e) {
                    var t, s, c, n, i, r, g, u, j = e.isPremiumDomain,
                        h = Object(o.j)(),
                        m = Object(Q.d)(),
                        p = Object(a.useContext)(W),
                        x = Object(a.useState)(!1),
                        f = Object(d.a)(x, 2),
                        _ = f[0],
                        O = f[1],
                        k = Object(Q.e)((function(e) {
                            return ae.endpoints.getVideoDetails.select(h.slug)(e)
                        })),
                        S = k.data,
                        L = k.isLoading,
                        C = void 0 === L || L,
                        G = k.isError,
                        E = k.error;
                    Object(a.useEffect)((function() {
                        var e = m(ae.endpoints.getVideoDetails.initiate(h.slug)).unsubscribe;
                        return p.getToken(), window.scrollBy({
                                top: -5e3,
                                behavior: "smooth"
                            }),
                            function() {
                                window.scrollTo({
                                    behavior: "smooth",
                                    top: 0
                                }), O(!1), e()
                            }
                    }), [h.slug, m]);
                    var T, R, F = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        m(ae.util.updateQueryData("getVideoDetails", h.slug, (function() {
                            var t, s;
                            return Object(l.a)(Object(l.a)({}, S), {}, {
                                meta: Object(l.a)(Object(l.a)({}, S.meta), {}, {
                                    likes: 1 === e ? (null === S || void 0 === S || null === (t = S.meta) || void 0 === t ? void 0 : t.likes) + 1 : (null === S || void 0 === S || null === (s = S.meta) || void 0 === s ? void 0 : s.likes) - 1
                                })
                            })
                        })))
                    };
                    return G || null === S ? Object(V.jsxs)("div", {
                        className: "article-viewer ".concat(j || p.loginInformation.premiumUser ? "is-premium" : ""),
                        children: [Object(V.jsx)(Ne, {
                            title: S ? "".concat(null === S || void 0 === S ? void 0 : S.title, " - Videos | GeeksforGeeks") : N,
                            description: (null === S || void 0 === S || null === (T = S.seo) || void 0 === T ? void 0 : T.description) || y,
                            thumbnail: (null === S || void 0 === S || null === (R = S.seo) || void 0 === R ? void 0 : R.thumbnail) || w
                        }), Object(V.jsx)("div", {
                            className: "article-viewer__content",
                            children: Object(V.jsx)("div", {
                                className: "a-wrapper video-wrapper",
                                children: Object(V.jsxs)("article", {
                                    className: "content",
                                    children: [Object(V.jsx)(Re, {
                                        isError: !0
                                    }), Object(V.jsxs)("div", {
                                        className: "video-wrapper__content",
                                        children: [Object(V.jsx)(Ee, {
                                            loading: C,
                                            data: {
                                                title: E && 401 === E.status ? "Please refresh and try again" : "Not found or the video you are looking for doesn't exist"
                                            },
                                            handleLikeOperation: F
                                        }), Object(V.jsx)("div", {
                                            className: "gfg-mt-2",
                                            children: Object(V.jsx)(re.b, {
                                                to: "/videos/",
                                                className: "btn btn--bg-primary btn--medium td-none text-light",
                                                children: "Browse Videos"
                                            })
                                        })]
                                    })]
                                })
                            })
                        })]
                    }) : Object(V.jsxs)("div", {
                        className: "article-viewer ".concat(j || p.loginInformation.premiumUser ? "is-premium" : ""),
                        children: [S ? Object(V.jsx)(Ne, {
                            title: S ? "".concat(null === S || void 0 === S ? void 0 : S.title, " - Videos | GeeksforGeeks") : N,
                            description: (null === S || void 0 === S || null === (t = S.seo) || void 0 === t ? void 0 : t.description) || y,
                            thumbnail: (null === S || void 0 === S || null === (s = S.seo) || void 0 === s ? void 0 : s.thumbnail) || w
                        }) : "", Object(V.jsxs)("div", {
                            className: "article-viewer__content",
                            children: [Object(V.jsxs)("div", {
                                className: "a-wrapper video-wrapper",
                                children: [v ? S ? Object(V.jsx)("div", {
                                    className: "gfg-pl-1 gfg-pb-1",
                                    children: Object(V.jsx)(je, {
                                        data: [{
                                            name: "Videos",
                                            path: "/videos/"
                                        }, {
                                            name: de(null === S || void 0 === S ? void 0 : S.title),
                                            path: "",
                                            active: !0
                                        }]
                                    })
                                }) : Object(V.jsx)("div", {
                                    className: "skeleton-box gfg-cw-15 gfg-cw-sm-25"
                                }) : "", Object(V.jsxs)("article", {
                                    className: "content",
                                    id: "video-id",
                                    children: [!C && null !== S && void 0 !== S && S.title ? Object(V.jsx)("div", {
                                        className: "title",
                                        style: {
                                            padding: "0 0 12px 8px",
                                            fontSize: "1.25rem"
                                        },
                                        children: Object(V.jsx)("h1", {
                                            style: {
                                                fontSize: "1.25rem",
                                                fontWeight: "600"
                                            },
                                            children: S.title
                                        })
                                    }) : "", !C && (null === S || void 0 === S ? void 0 : S.source) && (p.loginInformation.premiumUser && (null === S || void 0 === S || null === (c = S.meta) || void 0 === c ? void 0 : c.isPremium) || !(null !== S && void 0 !== S && null !== (n = S.meta) && void 0 !== n && n.isPremium)) && Object(V.jsx)(Be, Object(l.a)(Object(l.a)({
                                        src: null === S || void 0 === S ? void 0 : S.source,
                                        type: null === S || void 0 === S || null === (i = S.meta) || void 0 === i ? void 0 : i.format,
                                        subtitle: S.subtitle
                                    }, S.meta), {}, {
                                        isPremium: j || p.loginInformation.premiumUser
                                    })), C || null !== S && void 0 !== S && null !== (r = S.meta) && void 0 !== r && r.isPremium && !p.loginInformation.premiumUser ? Object(V.jsx)(Re, {
                                        data: {
                                            largeThumbnail: (null === S || void 0 === S || null === (g = S.meta) || void 0 === g ? void 0 : g.largeThumbnail) || "",
                                            title: null === S || void 0 === S ? void 0 : S.title
                                        }
                                    }) : "", Object(V.jsxs)("div", {
                                        className: "video-wrapper__content",
                                        children: [S && "courses" === S.video_type && S.course_link && Object(V.jsx)("div", {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: Object(V.jsx)("a", {
                                                href: S.course_link,
                                                className: "btn btn--bg-contrast td-none ws-nowrap btn--medium font-sm",
                                                type: "button",
                                                children: "Visit Course Page"
                                            })
                                        }), Object(V.jsx)(Ee, {
                                            loading: C,
                                            data: {
                                                title: null === S || void 0 === S ? void 0 : S.title,
                                                time: null === S || void 0 === S ? void 0 : S.time,
                                                meta: (null === S || void 0 === S ? void 0 : S.meta) || {},
                                                video_type: (null === S || void 0 === S ? void 0 : S.video_type) || "default",
                                                course_link: null === S || void 0 === S ? void 0 : S.course_link
                                            }
                                        }), Object(V.jsx)(ze, {
                                            data: Object(l.a)({
                                                isPremium: (null === S || void 0 === S || null === (u = S.meta) || void 0 === u ? void 0 : u.isPremium) || !1
                                            }, null === S || void 0 === S ? void 0 : S.meta),
                                            isParentLoading: C,
                                            handleLikeOperation: F,
                                            loadCommentSection: function() {
                                                return O(!0)
                                            }
                                        }), Object(V.jsx)(Ge, {
                                            loading: C,
                                            data: {
                                                description: null === S || void 0 === S ? void 0 : S.description
                                            },
                                            allowCollapse: !0
                                        })]
                                    })]
                                }), Object(V.jsx)("div", {
                                    className: "article-meta gfg-pbi-4",
                                    children: Object(V.jsx)(Te, {
                                        type: b,
                                        data: (null === S || void 0 === S ? void 0 : S.category) || []
                                    })
                                }), Object(V.jsx)(qe, {
                                    title: "Explore more videos",
                                    loading: C,
                                    data: null === S || void 0 === S ? void 0 : S.recommendations
                                })]
                            }), (null === S || void 0 === S ? void 0 : S.id) && (null === S || void 0 === S ? void 0 : S.title) && Object(V.jsx)(He, {
                                loadComments: _,
                                id: null === S || void 0 === S ? void 0 : S.id,
                                title: null === S || void 0 === S ? void 0 : S.title
                            })]
                        })]
                    })
                },
                Qe = I(),
                Xe = [{
                    path: "/videos/:type(watchlist)?",
                    component: Ce,
                    name: "Videos - Watchlist | GeeksforGeeks",
                    exact: !0,
                    private: !1
                }, {
                    path: "/videos/:slug/",
                    component: function(e) {
                        return Object(V.jsx)(Je, {
                            isPremiumDomain: Qe
                        })
                    },
                    name: "Video Page | GeeksforGeeks",
                    exact: !0,
                    private: !1
                }, {
                    path: ["/videos/:pagination(page)?/:page?", "/videos/:type(category|tag)?/:taxonomy?/:pagination(page)?/:page?"],
                    component: Ce,
                    name: "Videos | GeeksforGeeks",
                    exact: !0,
                    private: !1
                }],
                Ye = function() {
                    var e = Object(o.i)().pathname;
                    return Object(a.useEffect)((function() {
                        try {
                            G("Logout Redirection URL: ".concat(m.AUTH_SITE_URL, "logout.php/?to=").concat(m.GFG_SITE_URL.substr(0, [m.GFG_SITE_URL.length - 1])).concat(e)), document.querySelector("#userProfileId ul.mega-dropdown li:last-child a").setAttribute("href", "".concat(m.AUTH_SITE_URL, "logout.php/?to=").concat(m.GFG_SITE_URL.substr(0, [m.GFG_SITE_URL.length - 1])).concat(e)), document.querySelector(".header-sidebar__list li:first-child table.userSidebar-table + a").setAttribute("href", "".concat(m.AUTH_SITE_URL, "logout.php/?to=").concat(m.GFG_SITE_URL.substr(0, [m.GFG_SITE_URL.length - 1])).concat(e))
                        } catch (t) {
                            G("Unable to set logout redirection URL")
                        }
                    }), [e]), []
                },
                Ke = Object(K.a)({
                    reducerPath: "gfgHomePageList",
                    tagTypes: ["videos", "watchlistTag"],
                    baseQuery: Object(Z.d)({
                        baseUrl: m.VIDEO_API_URL
                    }),
                    endpoints: function(e) {
                        return {
                            getPOTD: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(m.GFG_PRACTICE_API_URL, "api/vr/problems-of-day/problem/today/")
                                    }
                                },
                                transformResponse: function(e, t) {
                                    return e.xdate = t.response.headers.get("x-date"), e
                                }
                            }),
                            getCourses: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(m.GFG_PRACTICE_API_URL, "api/vr2/courses/home/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e
                                }
                            }),
                            getVideos: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(m.VIDEO_API_URL, "gfg-video-list/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e
                                }
                            }),
                            getCarousel: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(m.GFG_UTIL_DJANGO_CF_URL, "api/active-banner-posts/")
                                    }
                                }
                            }),
                            getArticles: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(m.GFG_UTIL_DJANGO_CF_URL, "api/articles/?page=1&gblog=true")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e
                                }
                            }),
                            getOpenSearchResults: e.query({
                                query: function(e) {
                                    return {
                                        url: "".concat(m.GFG_UTIL_DJANGO_CF_URL, "api/gfgsearch/").concat(A(e)),
                                        credentials: "include",
                                        keepUnusedDataFor: 60
                                    }
                                }
                            }),
                            getArticleChips: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(m.GFG_UTIL_DJANGO_CF_URL, "api/article/tags/trending/")
                                    }
                                }
                            }),
                            getArticleChipsUser: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(m.GFG_UTIL_DJANGO_CF_URL, "api/vcu/getusersterms/12/"),
                                        credentials: "include"
                                    }
                                }
                            }),
                            getArticlesPerChip: e.query({
                                query: function(e) {
                                    var t = e.chip,
                                        s = e.page;
                                    return {
                                        url: "all" !== t && "" !== t ? "".concat(m.GFG_UTIL_DJANGO_CF_URL, "api/articles/").concat(t, "/?page=").concat(s, "&gblog=true") : "".concat(m.GFG_UTIL_DJANGO_CF_URL, "api/articles/?page=").concat(s, "&gblog=true")
                                    }
                                }
                            }),
                            getPopularPosts: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(m.GFG_UTIL_DJANGO_CF_URL, "api/popularposts/daily/1/excerpt/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e
                                }
                            }),
                            sideBarDetails: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(m.GFG_UTIL_URL, "api/rightbarads/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e.error ? [] : e
                                }
                            }),
                            getPostChains: e.query({
                                query: function(e) {
                                    return {
                                        url: "".concat(m.GFG_UTIL_DJANGO_CF_URL, "api/postchains/").concat(e, "/post/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e.error ? [] : e
                                }
                            }),
                            getPostDetail: e.query({
                                query: function(e) {
                                    return {
                                        url: "".concat(m.GFG_UTIL_DJANGO_CF_URL, "api/getpostdetails/").concat(e, "/excerpt/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e.error ? [] : e
                                }
                            }),
                            getHomePageChipsDetail: e.query({
                                query: function(e) {
                                    return {
                                        url: "".concat(m.GFG_UTIL_DJANGO_CF_URL, "api/rightbarads/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e.error ? [] : e
                                }
                            }),
                            getPopularOrNextPost: e.query({
                                query: function(e) {
                                    var t = e.prevPostId,
                                        s = e.prevPostTitle;
                                    return {
                                        url: null == t || "" == t ? "".concat(m.GFG_UTIL_DJANGO_CF_URL, "api/recommendforyou/") : null == s || "" == s ? "".concat(m.GFG_UTIL_DJANGO_CF_URL, "api/recommendforyou/").concat(t, "/") : "".concat(m.GFG_UTIL_DJANGO_CF_URL, "api/recommendforyou/").concat(t, "/").concat(s, "/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e.error ? [] : e
                                }
                            }),
                            getRecommendedCoursesUser: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(m.GFG_PRACTICE_API_URL, "api/latest/courses/recommended/"),
                                        credentials: "include"
                                    }
                                },
                                transformResponse: function(e) {
                                    return e.error ? [] : e
                                }
                            }),
                            getRecommendedSearchResults: e.query({
                                query: function(e) {
                                    return {
                                        url: "".concat(m.GFG_UTIL_DJANGO_CF_URL, "api/gfgsearch/?page=").concat(e.page, "&sort=").concat(e.sort, "&type=premium&query=").concat(encodeURIComponent(e.query), "&search_type=google"),
                                        credentials: "include",
                                        keepUnusedDataFor: 60
                                    }
                                }
                            })
                        }
                    }
                }),
                Ze = Ke.useGetPOTDQuery,
                $e = Ke.useGetCoursesQuery,
                et = Ke.useGetVideosQuery,
                tt = Ke.useGetCarouselQuery,
                st = (Ke.useGetArticlesQuery, Ke.useLazyGetOpenSearchResultsQuery),
                at = (Ke.useGetArticleChipsQuery, Ke.useGetArticlesPerChipQuery),
                ct = (Ke.useGetPopularPostsQuery, Ke.useSideBarDetailsQuery),
                nt = (Ke.useGetPostChainsQuery, Ke.useGetPostDetailQuery, Ke.useGetHomePageChipsDetailQuery),
                it = Ke.useGetArticleChipsUserQuery,
                rt = Ke.useGetPopularOrNextPostQuery,
                ot = Ke.useGetRecommendedCoursesUserQuery,
                lt = Ke.useLazyGetRecommendedSearchResultsQuery,
                dt = function() {
                    var e = ct(),
                        t = e.data,
                        s = e.isLoading,
                        a = e.isError;
                    return s || a || F.a.isEmpty(t) ? "" : Object(V.jsxs)("div", {
                        style: {
                            marginBottom: "24px"
                        },
                        children: [Object(V.jsx)("div", {
                            className: "heading",
                            children: Object(V.jsx)("div", {
                                className: "def-title_wrap",
                                children: Object(V.jsx)("div", {
                                    className: "title",
                                    children: "What's New Here"
                                })
                            })
                        }), t && F.a.map(t, (function(e) {
                            return Object(V.jsx)("div", {
                                children: Object(V.jsx)("div", {
                                    className: "card-layout",
                                    children: Object(V.jsx)("div", {
                                        className: "content-wrapper",
                                        children: Object(V.jsx)("div", {
                                            className: "side--container_wscard",
                                            style: {
                                                padding: "0px 10px"
                                            },
                                            children: Object(V.jsx)("a", {
                                                href: e.url,
                                                children: Object(V.jsxs)("div", {
                                                    className: "card-content",
                                                    children: [Object(V.jsx)("div", {
                                                        className: "thumbnail",
                                                        children: Object(V.jsx)("img", {
                                                            src: e.thumbnail,
                                                            className: "img-fluid",
                                                            alt: "Write/Contribute"
                                                        })
                                                    }), Object(V.jsxs)("div", {
                                                        className: "content",
                                                        children: [Object(V.jsx)("div", {
                                                            className: "head",
                                                            children: e.title
                                                        }), Object(V.jsx)("div", {
                                                            className: "meta",
                                                            dangerouslySetInnerHTML: {
                                                                __html: e.html
                                                            }
                                                        }), Object(V.jsx)("div", {
                                                            className: "ref",
                                                            children: "View Details"
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            }, e.id)
                        }))]
                    })
                },
                gt = function(e) {
                    return Object(V.jsx)("div", {
                        className: "container-fluid bg-light",
                        id: "home-page",
                        style: {
                            position: "relative",
                            maxWidth: "100%"
                        },
                        children: Object(V.jsxs)("div", {
                            className: "article-page_flex",
                            children: [Object(V.jsx)("div", {
                                className: "leftBar",
                                children: e.children
                            }), Object(V.jsxs)("div", {
                                className: "rightBar",
                                children: [Object(V.jsx)("div", {
                                    style: {
                                        minHeight: "600px",
                                        textAlign: "end",
                                        paddingRight: "10px"
                                    },
                                    id: "GFG_AD_Desktop_RightSideBar_ATF_300x600"
                                }), Object(V.jsx)(dt, {}), Object(V.jsx)("div", {
                                    id: "GFG_AD_Desktop_RightSideBar_MTF_300x600"
                                })]
                            })]
                        })
                    })
                },
                ut = Object(X.configureStore)({
                    reducer: (be = {}, Object(H.a)(be, $.reducerPath, $.reducer), Object(H.a)(be, ce.reducerPath, ce.reducer), Object(H.a)(be, ae.reducerPath, ae.reducer), Object(H.a)(be, Ke.reducerPath, Ke.reducer), Object(H.a)(be, "additionalDetails", De), be),
                    middleware: [Y.a, $.middleware, ce.middleware, ae.middleware]
                });
            Object(J.setupListeners)(ut.dispatch);
            var jt = function(e) {
                    e.match.params;
                    return Object(V.jsx)(Q.a, {
                        store: ut,
                        children: Object(V.jsxs)(gt, {
                            children: [Object(V.jsx)(Ye, {}), Object(V.jsxs)(o.d, {
                                children: [Xe.map((function(e, t) {
                                    return Object(V.jsx)(o.b, {
                                        exact: e.exact,
                                        path: e.path,
                                        children: e.component
                                    }, t)
                                })), Object(V.jsx)(o.a, {
                                    to: "/videos"
                                })]
                            })]
                        })
                    })
                },
                ht = (s(290), s(85)),
                mt = "https://media.geeksforgeeks.org/auth-dashboard-uploads/Vector.png",
                pt = function() {
                    return Object(V.jsxs)("div", {
                        id: "intro-div",
                        children: [Object(V.jsxs)("div", {
                            id: "intro-div-left-bar",
                            children: [Object(V.jsx)("p", {
                                id: "intro-main-heading",
                                children: "Optimize conversions with human insight "
                            }), Object(V.jsxs)("ul", {
                                id: "intro-list1",
                                children: [Object(V.jsxs)("li", {
                                    className: "list1-item",
                                    children: [Object(V.jsx)("span", {
                                        className: "intro-ul-tick",
                                        children: Object(V.jsx)("img", {
                                            src: mt,
                                            alt: "Tick"
                                        })
                                    }), "Reach out to 25 million+ unique users"]
                                }), Object(V.jsxs)("li", {
                                    className: "list1-item",
                                    children: [Object(V.jsx)("span", {
                                        className: "intro-ul-tick",
                                        children: Object(V.jsx)("img", {
                                            src: mt,
                                            alt: "Tick"
                                        })
                                    }), "Achieve higher conversions with better targeting"]
                                }), Object(V.jsxs)("li", {
                                    className: "list1-item",
                                    children: [Object(V.jsx)("span", {
                                        className: "intro-ul-tick",
                                        children: Object(V.jsx)("img", {
                                            src: mt,
                                            alt: "Tick"
                                        })
                                    }), "Discover audience globally"]
                                }), Object(V.jsxs)("li", {
                                    className: "list1-item",
                                    children: [Object(V.jsx)("span", {
                                        className: "intro-ul-tick",
                                        children: Object(V.jsx)("img", {
                                            src: mt,
                                            alt: "Tick"
                                        })
                                    }), "Publish your events on our wide Social media presence"]
                                })]
                            }), Object(V.jsxs)("div", {
                                id: "intro-link-div1",
                                children: [Object(V.jsx)(ht.Link, {
                                    to: "contact-us-div",
                                    smooth: !0,
                                    id: "intro-link1",
                                    children: "Get in Touch"
                                }), Object(V.jsx)(ht.Link, {
                                    to: "content-div",
                                    smooth: !0,
                                    id: "intro-link2",
                                    children: "Explore Solutions"
                                })]
                            })]
                        }), Object(V.jsx)("div", {
                            id: "intro-main-image1",
                            children: Object(V.jsx)("img", {
                                id: "intro-main-image1-Desktop",
                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Destop.png",
                                alt: "Desktop"
                            })
                        })]
                    })
                },
                bt = s(448),
                xt = function() {
                    return Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsxs)("div", {
                            id: "why-us-div",
                            children: [Object(V.jsx)("img", {
                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Group-7006.png",
                                id: "why-us-bgImage1"
                            }), Object(V.jsx)("img", {
                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ellipse-3.png",
                                id: "why-us-bgImage2"
                            }), Object(V.jsx)("img", {
                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ellipse-1.png",
                                id: "why-us-bgImage3"
                            }), Object(V.jsxs)("div", {
                                id: "why-us-left-div",
                                children: [Object(V.jsx)("p", {
                                    id: "why-us-title",
                                    children: Object(V.jsx)("span", {
                                        id: "title-line",
                                        children: "Why Us \xa0\xa0\xa0 "
                                    })
                                }), Object(V.jsx)("p", {
                                    id: "why-us-heading",
                                    children: Object(V.jsx)("span", {
                                        id: "why-us-text-shadow",
                                        children: "Get the results that matter"
                                    })
                                }), Object(V.jsx)(ht.Link, {
                                    to: "contact-us-div",
                                    smooth: !0,
                                    id: "why-us-link1",
                                    children: Object(V.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between"
                                        },
                                        children: [Object(V.jsx)("p", {
                                            style: {
                                                margin: 0
                                            },
                                            children: "Know More"
                                        }), Object(V.jsx)(bt.a, {
                                            style: {
                                                fontsize: "50px",
                                                color: "#13253A",
                                                float: "right"
                                            }
                                        })]
                                    })
                                })]
                            }), Object(V.jsxs)("div", {
                                id: "why-us-right-div",
                                children: [Object(V.jsxs)("div", {
                                    className: "why-us-content",
                                    children: [Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Icon1.png",
                                        className: "why-us-icons"
                                    }), Object(V.jsx)("p", {
                                        className: "why-us-content-top",
                                        children: "Build brand awareness"
                                    }), Object(V.jsx)("p", {
                                        className: "why-us-content-bottom",
                                        children: "with 25 million+ users"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "why-us-content",
                                    children: [Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Icon2.png",
                                        className: "why-us-icons"
                                    }), Object(V.jsx)("p", {
                                        className: "why-us-content-top",
                                        children: "Higher Conversion"
                                    }), Object(V.jsx)("p", {
                                        className: "why-us-content-bottom",
                                        children: "Achieve higher conversion with 90% Ads Viewability"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "why-us-content",
                                    children: [Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Icon3.png",
                                        className: "why-us-icons"
                                    }), Object(V.jsx)("p", {
                                        className: "why-us-content-top",
                                        children: "Long term results "
                                    }), Object(V.jsx)("p", {
                                        className: "why-us-content-bottom",
                                        children: "Achieve long term results with 90% Organic Traffic"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "why-us-content",
                                    children: [Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Icon4.png",
                                        className: "why-us-icons"
                                    }), Object(V.jsx)("p", {
                                        className: "why-us-content-top",
                                        children: "Generate Leads"
                                    }), Object(V.jsx)("p", {
                                        className: "why-us-content-bottom",
                                        children: "Generate lead with 20 million+ Logged in users"
                                    })]
                                })]
                            })]
                        })
                    })
                },
                ft = f + "auth-dashboard-uploads/gfg_weekly_coding_contest.png",
                _t = f + "auth-dashboard-uploads/Job-A-Thon%21newcopy-1637640559.png",
                Ot = function() {
                    return Object(V.jsxs)(V.Fragment, {
                        children: [Object(V.jsxs)("div", {
                            id: "about-us-div",
                            children: [Object(V.jsxs)("div", {
                                id: "about-us-left-div",
                                children: [Object(V.jsx)("p", {
                                    id: "about-us-title",
                                    children: Object(V.jsx)("span", {
                                        id: "title-line",
                                        children: "About Us \xa0\xa0\xa0"
                                    })
                                }), Object(V.jsx)("p", {
                                    id: "about-us-heading",
                                    children: Object(V.jsx)("span", {
                                        id: "about-us-text-shadow",
                                        children: "We spark action with our audience."
                                    })
                                })]
                            }), Object(V.jsxs)("div", {
                                id: "about-us-content",
                                children: [Object(V.jsx)("p", {
                                    id: "about-us-content-top",
                                    children: "Expertise that everybody counts on"
                                }), Object(V.jsx)("p", {
                                    id: "about-us-content-bottom",
                                    children: "GeeksforGeeks has made a difference in the lives of many students by providing free knowledge on how to obtain a dream career and by assisting authors all over the world to earn by generating and sharing content, which is why the Geeks community of users are so engaged and devoted. We have a unique opportunity to help brands connect with a highly-engaged audience of tech enthusiasts, programmers, and students."
                                })]
                            })]
                        }), Object(V.jsxs)("div", {
                            id: "about-us-events",
                            children: [Object(V.jsx)("h1", {
                                id: "about-us-event-heading",
                                children: "Recurring Events"
                            }), Object(V.jsxs)("div", {
                                id: "about-us-event-cards",
                                children: [Object(V.jsxs)("div", {
                                    className: "about-us-single-event",
                                    children: [Object(V.jsx)("a", {
                                        href: m.GFG_PRACTICE_URL + "events/rec/interview-series?utm_source=gfgpractice&utm_medium=events_page&utm_campaign=events_series_interview_series",
                                        target: "blank",
                                        children: Object(V.jsx)("img", {
                                            src: ft,
                                            height: "auto",
                                            width: "100%"
                                        })
                                    }), Object(V.jsx)("p", {
                                        className: "about-us-single-event-top",
                                        children: "GFG Weekly Coding Contest"
                                    }), Object(V.jsx)("p", {
                                        className: "about-us-single-event-bottom",
                                        children: "Win 2X GeekBits and Ace The Leaderboard! A weekly coding contest to help you practice"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "about-us-single-event",
                                    children: [Object(V.jsx)("a", {
                                        href: m.GFG_PRACTICE_URL + "events/rec/job-a-thon?utm_source=gfgpractice&utm_medium=events_page&utm_campaign=events_series_jobathon",
                                        target: "blank",
                                        children: Object(V.jsx)("img", {
                                            src: _t,
                                            height: "auto",
                                            width: "100%"
                                        })
                                    }), Object(V.jsx)("p", {
                                        className: "about-us-single-event-top",
                                        children: "Job-a-Thon"
                                    }), Object(V.jsx)("p", {
                                        className: "about-us-single-event-bottom",
                                        children: "Monthly hiring challenges conducted by GeeksforGeeks connecting suitable candidates to tech companies."
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                vt = function() {
                    return Object(V.jsxs)("div", {
                        id: "social-presence-div",
                        children: [Object(V.jsxs)("div", {
                            id: "social-presence-content-div",
                            children: [Object(V.jsx)("div", {
                                id: "social-presence-heading",
                                children: Object(V.jsx)("p", {
                                    children: "View our Presence!"
                                })
                            }), Object(V.jsxs)("div", {
                                id: "social-presence-socials",
                                children: [Object(V.jsxs)("div", {
                                    className: "social-presence-content",
                                    children: [Object(V.jsx)("a", {
                                        href: "https://www.facebook.com/geeksforgeeks.org/",
                                        target: "blank",
                                        children: Object(V.jsx)("img", {
                                            className: "social-presence-content-image",
                                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/facebook.png"
                                        })
                                    }), Object(V.jsxs)("div", {
                                        children: [Object(V.jsx)("p", {
                                            className: "social-presence-numbers",
                                            children: "215k+"
                                        }), Object(V.jsx)("p", {
                                            className: "social-presence-numbers-text",
                                            children: "followers"
                                        })]
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "social-presence-content",
                                    children: [Object(V.jsx)("a", {
                                        href: "https://www.instagram.com/geeks_for_geeks/",
                                        target: "blank",
                                        children: Object(V.jsx)("img", {
                                            className: "social-presence-content-image",
                                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/instagram.png"
                                        })
                                    }), Object(V.jsxs)("div", {
                                        children: [Object(V.jsx)("p", {
                                            className: "social-presence-numbers",
                                            children: "255k+"
                                        }), Object(V.jsx)("p", {
                                            className: "social-presence-numbers-text",
                                            children: "followers"
                                        })]
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "social-presence-content",
                                    children: [Object(V.jsx)("a", {
                                        href: "https://in.linkedin.com/company/geeksforgeeks",
                                        target: "blank",
                                        children: Object(V.jsx)("img", {
                                            className: "social-presence-content-image",
                                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/linkedin1.png"
                                        })
                                    }), Object(V.jsxs)("div", {
                                        children: [Object(V.jsx)("p", {
                                            className: "social-presence-numbers",
                                            children: "1M+"
                                        }), Object(V.jsx)("p", {
                                            className: "social-presence-numbers-text",
                                            children: "followers"
                                        })]
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "social-presence-content",
                                    children: [Object(V.jsx)("a", {
                                        href: "https://twitter.com/geeksforgeeks",
                                        target: "blank",
                                        children: Object(V.jsx)("img", {
                                            className: "social-presence-content-image",
                                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/twitter.png"
                                        })
                                    }), Object(V.jsxs)("div", {
                                        children: [Object(V.jsx)("p", {
                                            className: "social-presence-numbers",
                                            children: "45k+"
                                        }), Object(V.jsx)("p", {
                                            className: "social-presence-numbers-text",
                                            children: "followers"
                                        })]
                                    })]
                                })]
                            })]
                        }), Object(V.jsx)("div", {
                            id: "social-presence-image",
                            children: Object(V.jsx)("img", {
                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/SocialLogo.png",
                                height: "250vw",
                                width: "300vw"
                            })
                        })]
                    })
                },
                Nt = function() {
                    var e = Object(a.useRef)(),
                        t = Object(a.useState)(!1),
                        s = Object(d.a)(t, 2),
                        c = s[0],
                        n = s[1],
                        i = function(t) {
                            e.current.getBoundingClientRect().top - window.innerHeight < 0 && n(!0)
                        };
                    Object(a.useEffect)((function() {
                        (console.log("Start Animation", c), c) && document.querySelectorAll(".user-statistics-card-heading").forEach((function(e) {
                            r(e)
                        }))
                    }), [c]);
                    var r = function(e) {
                        var t = e.getAttribute("data-value"),
                            s = 0,
                            a = setInterval((function() {
                                s += 1, e.innerHTML = s + "%", s >= t && clearInterval(a)
                            }), 60)
                    };
                    return Object(a.useEffect)((function() {
                        return window.addEventListener("scroll", i),
                            function() {
                                window.removeEventListener("scroll", i)
                            }
                    }), []), Object(V.jsxs)("div", {
                        id: "user-statistics-div",
                        children: [Object(V.jsx)("img", {
                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ellipse-3.png",
                            id: "user-statistics-bgImage2"
                        }), Object(V.jsx)("img", {
                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ellipse-1-%281%29.png",
                            id: "user-statistics-bgImage3"
                        }), Object(V.jsx)("img", {
                            id: "user-statistics-bg-img",
                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/g10.png"
                        }), Object(V.jsx)("p", {
                            id: "user-statistics-heading",
                            children: Object(V.jsx)("span", {
                                id: "user-statistics-text-shadow",
                                children: "User Statistics"
                            })
                        }), Object(V.jsxs)("div", {
                            id: "user-statistics-cards",
                            children: [Object(V.jsxs)("div", {
                                className: "user-statistics-single-card",
                                ref: e,
                                children: [Object(V.jsx)("p", {
                                    className: "user-statistics-card-heading",
                                    "data-value": "45",
                                    children: "0"
                                }), Object(V.jsx)("p", {
                                    className: "user-statistics-card-data",
                                    children: "Tier 1 Cities"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "user-statistics-single-card",
                                children: [Object(V.jsx)("p", {
                                    className: "user-statistics-card-heading",
                                    "data-value": "35",
                                    children: "0"
                                }), Object(V.jsx)("p", {
                                    className: "user-statistics-card-data",
                                    children: "Tier 2 Cities"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "user-statistics-single-card",
                                children: [Object(V.jsx)("p", {
                                    className: "user-statistics-card-heading",
                                    "data-value": "20",
                                    children: "0"
                                }), Object(V.jsx)("p", {
                                    className: "user-statistics-card-data",
                                    children: "Tier 3 Cities"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "user-statistics-single-card",
                                children: [Object(V.jsx)("p", {
                                    className: "user-statistics-card-heading",
                                    "data-value": "70",
                                    children: "0"
                                }), Object(V.jsx)("p", {
                                    className: "user-statistics-card-data",
                                    children: "Male population"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "user-statistics-single-card",
                                children: [Object(V.jsx)("p", {
                                    className: "user-statistics-card-heading",
                                    "data-value": "30",
                                    children: "0"
                                }), Object(V.jsx)("p", {
                                    className: "user-statistics-card-data",
                                    children: "Female Population"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "user-statistics-single-card",
                                children: [Object(V.jsx)("p", {
                                    className: "user-statistics-card-heading",
                                    "data-value": "70",
                                    children: "0"
                                }), Object(V.jsx)("p", {
                                    className: "user-statistics-card-data",
                                    children: "18-35 yrs Geeks   "
                                })]
                            })]
                        })]
                    })
                },
                wt = "https://media.geeksforgeeks.org/auth-dashboard-uploads/Vector.png",
                yt = function() {
                    return Object(V.jsxs)("div", {
                        id: "content-div",
                        children: [Object(V.jsx)("img", {
                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ellipse-1.png",
                            id: "content-bgImage3"
                        }), Object(V.jsx)("p", {
                            id: "content-heading",
                            children: Object(V.jsx)("span", {
                                id: "content-text-shadow",
                                children: "Wide array of Advertisement"
                            })
                        }), Object(V.jsx)("p", {
                            id: "content-description",
                            children: "Take a look how your content will look like"
                        }), Object(V.jsxs)("div", {
                            id: "content-content",
                            children: [Object(V.jsxs)("div", {
                                className: "content-card",
                                children: [Object(V.jsx)("div", {
                                    className: "content-card-image",
                                    children: Object(V.jsx)("img", {
                                        id: "content-single-image",
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ad1.png",
                                        width: "400vw",
                                        height: "300vw"
                                    })
                                }), Object(V.jsxs)("div", {
                                    className: "content-card-content",
                                    children: [Object(V.jsx)("p", {
                                        className: "content-p",
                                        children: "Support for Multiple desktop banner & operating system based on your choice"
                                    }), Object(V.jsxs)("div", {
                                        className: "content-card-content-data",
                                        children: [Object(V.jsx)("div", {
                                            className: "content-list-div",
                                            children: Object(V.jsxs)("ul", {
                                                className: "content-list",
                                                children: [Object(V.jsxs)("li", {
                                                    className: "content-list1-item",
                                                    children: [Object(V.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(V.jsx)("img", {
                                                            src: wt,
                                                            alt: "Tick"
                                                        })
                                                    }), "300X600"]
                                                }), Object(V.jsxs)("li", {
                                                    className: "content-list1-item",
                                                    children: [Object(V.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(V.jsx)("img", {
                                                            src: wt,
                                                            alt: "Tick"
                                                        })
                                                    }), "300X250"]
                                                }), Object(V.jsxs)("li", {
                                                    className: "content-list1-item",
                                                    children: [Object(V.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(V.jsx)("img", {
                                                            src: wt,
                                                            alt: "Tick"
                                                        })
                                                    }), "336X280"]
                                                }), Object(V.jsxs)("li", {
                                                    className: "content-list1-item",
                                                    children: [Object(V.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(V.jsx)("img", {
                                                            src: wt,
                                                            alt: "Tick"
                                                        })
                                                    }), "728X90"]
                                                }), Object(V.jsxs)("li", {
                                                    className: "content-list1-item",
                                                    children: [Object(V.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(V.jsx)("img", {
                                                            src: wt,
                                                            alt: "Tick"
                                                        })
                                                    }), "160X600"]
                                                }), Object(V.jsxs)("li", {
                                                    className: "content-list1-item",
                                                    children: [Object(V.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(V.jsx)("img", {
                                                            src: wt,
                                                            alt: "Tick"
                                                        })
                                                    }), "728X250"]
                                                })]
                                            })
                                        }), Object(V.jsxs)("div", {
                                            className: "content-icons-div",
                                            children: [Object(V.jsx)("img", {
                                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Windows.png",
                                                height: "50vw",
                                                width: "50vw",
                                                alt: "Test"
                                            }), Object(V.jsx)("img", {
                                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Apple.png",
                                                height: "50vw",
                                                width: "50vw",
                                                alt: "Test"
                                            }), Object(V.jsx)("img", {
                                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Linux.png",
                                                height: "50vw",
                                                width: "50vw",
                                                alt: "Test"
                                            })]
                                        }), Object(V.jsx)("div", {
                                            className: "content-link-div",
                                            children: Object(V.jsx)(ht.Link, {
                                                to: "contact-us-div",
                                                smooth: !0,
                                                className: "content-link",
                                                children: Object(V.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        width: "100%"
                                                    },
                                                    children: [Object(V.jsx)("p", {
                                                        style: {
                                                            margin: "auto 0"
                                                        },
                                                        children: "Know More"
                                                    }), Object(V.jsx)(bt.a, {
                                                        style: {
                                                            fontsize: "50px",
                                                            color: "#F8F8F8",
                                                            float: "right"
                                                        }
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "content-card",
                                children: [Object(V.jsxs)("div", {
                                    className: "content-card-image",
                                    children: [Object(V.jsx)("img", {
                                        className: "content-half-images",
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ad2-1.png",
                                        width: "200vw",
                                        height: "300vw"
                                    }), Object(V.jsx)("img", {
                                        className: "content-half-images",
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ad2-2.png",
                                        width: "200vw",
                                        height: "300vw"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "content-card-content",
                                    children: [Object(V.jsx)("p", {
                                        className: "content-p",
                                        children: "Support for Multiple mobile banner & operating system based on your choice"
                                    }), Object(V.jsxs)("div", {
                                        className: "content-card-content-data",
                                        children: [Object(V.jsx)("div", {
                                            className: "content-list-div",
                                            children: Object(V.jsxs)("ul", {
                                                className: "content-list",
                                                children: [Object(V.jsxs)("li", {
                                                    className: "content-list1-item content-list2-item",
                                                    children: [Object(V.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(V.jsx)("img", {
                                                            src: wt,
                                                            alt: "Tick"
                                                        })
                                                    }), "320X50"]
                                                }), Object(V.jsxs)("li", {
                                                    className: "content-list1-item content-list2-item",
                                                    children: [Object(V.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(V.jsx)("img", {
                                                            src: wt,
                                                            alt: "Tick"
                                                        })
                                                    }), "336X280"]
                                                }), Object(V.jsx)("li", {
                                                    className: "content-list1-item content-list2-item",
                                                    id: "content-list1-extra-item",
                                                    children: "\xa0"
                                                })]
                                            })
                                        }), Object(V.jsxs)("div", {
                                            className: "content-icons-div",
                                            children: [Object(V.jsx)("img", {
                                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Android.png",
                                                height: "50vw",
                                                width: "50vw",
                                                alt: "Test"
                                            }), Object(V.jsx)("img", {
                                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/AppStore.png",
                                                height: "50vw",
                                                width: "50vw",
                                                alt: "Test"
                                            })]
                                        }), Object(V.jsx)("div", {
                                            className: "content-link-div",
                                            children: Object(V.jsx)(ht.Link, {
                                                to: "contact-us-div",
                                                smooth: !0,
                                                className: "content-link",
                                                children: Object(V.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        width: "100%"
                                                    },
                                                    children: [Object(V.jsx)("p", {
                                                        style: {
                                                            margin: "auto 0"
                                                        },
                                                        children: "Know More"
                                                    }), Object(V.jsx)(bt.a, {
                                                        style: {
                                                            fontsize: "50px",
                                                            color: "#F8F8F8",
                                                            float: "right"
                                                        }
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                kt = function() {
                    return Object(V.jsxs)("div", {
                        id: "covered-areas-div",
                        children: [Object(V.jsx)("p", {
                            id: "covered-areas-heading",
                            children: Object(V.jsx)("span", {
                                id: "covered-areas-text-shadow",
                                children: "Everyone is covered"
                            })
                        }), Object(V.jsxs)("div", {
                            id: "covered-areas-cards",
                            children: [Object(V.jsxs)("div", {
                                className: "covered-areas-single-card",
                                children: [Object(V.jsx)("div", {
                                    className: "covered-areas-card-inside-div",
                                    children: Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/gadget1.png",
                                        width: "100vw",
                                        height: "100vw"
                                    })
                                }), Object(V.jsx)("p", {
                                    className: "covered-areas-card-data",
                                    children: "Technology/Gadget enthusiastic"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "covered-areas-single-card",
                                children: [Object(V.jsx)("div", {
                                    className: "covered-areas-card-inside-div",
                                    children: Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/ent.png",
                                        width: "100vw",
                                        height: "100vw"
                                    })
                                }), Object(V.jsx)("p", {
                                    className: "covered-areas-card-data",
                                    children: "Media & Entertainment"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "covered-areas-single-card",
                                children: [Object(V.jsx)("div", {
                                    className: "covered-areas-card-inside-div",
                                    children: Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/table.png",
                                        width: "100vw",
                                        height: "100vw"
                                    })
                                }), Object(V.jsx)("p", {
                                    className: "covered-areas-card-data",
                                    children: "Frequently Dining out"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "covered-areas-single-card",
                                children: [Object(V.jsx)("div", {
                                    className: "covered-areas-card-inside-div",
                                    children: Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/businessTrip.png",
                                        width: "100vw",
                                        height: "100vw"
                                    })
                                }), Object(V.jsx)("p", {
                                    className: "covered-areas-card-data",
                                    children: "Businesss Travelers"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "covered-areas-single-card",
                                children: [Object(V.jsx)("div", {
                                    className: "covered-areas-card-inside-div",
                                    children: Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/shopper.png",
                                        width: "100vw",
                                        height: "100vw"
                                    })
                                }), Object(V.jsx)("p", {
                                    className: "covered-areas-card-data",
                                    children: "Shoppers"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "covered-areas-single-card",
                                children: [Object(V.jsx)("div", {
                                    className: "covered-areas-card-inside-div",
                                    children: Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/watchingMovie.png",
                                        width: "100vw",
                                        height: "100vw"
                                    })
                                }), Object(V.jsx)("p", {
                                    className: "covered-areas-card-data",
                                    children: "Movie Lovers"
                                })]
                            })]
                        })]
                    })
                },
                St = s(110),
                Lt = s.n(St),
                Ct = function() {
                    var e = Object(a.useRef)(),
                        t = Object(a.useRef)(),
                        s = Object(a.useRef)(),
                        c = Object(a.useRef)(),
                        n = Object(a.useRef)(),
                        i = Object(a.useRef)(),
                        r = Object(a.useRef)(),
                        o = Object(a.useRef)(),
                        l = Object(a.useState)(""),
                        j = Object(d.a)(l, 2),
                        h = j[0],
                        m = j[1],
                        p = function(e) {
                            var t = Lt()("#" + e.target.id).find("option:selected").text(),
                                s = Lt()("<select/>").append(Lt()("<option/>").text(t));
                            Lt()("#" + e.target.id).after(s), Lt()("#" + e.target.id).width(Math.max(0, s.width())), s.remove()
                        },
                        b = function() {
                            var a = Object(u.a)(Object(g.a)().mark((function a(l) {
                                var d, u, j;
                                return Object(g.a)().wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            l.preventDefault(), d = JSON.parse(localStorage.getItem("loginData")), u = "<br />Name:- " + e.current.value + "<br/>User Type :-" + t.current.value + "<br/> User Purpose:- " + s.current.value + "<br/> User Reach:- " + i.current.value + "<br/> Company Name:- " + r.current.value, (j = new FormData).append("message", u), j.append("email", c.current.value), j.append("mobile", n.current.value), j.append("type", "Advertisement"), j.append("csrf_token", d.csrf_token), j.append("isLoggedIn", d.isLoggedIn), j.append("time", d.time), j.append("post_id", 0), fetch("https://util.geeksforgeeks.org/ajax/contactUsAjax.php", {
                                                method: "POST",
                                                body: j,
                                                redirect: "follow",
                                                credentials: "include"
                                            }).then((function(e) {
                                                return e.text()
                                            })).then((function(e) {
                                                var t = JSON.parse(e);
                                                o.current.style.display = "block", m(t.message), 1 == t.status ? (l.target.reset(), setTimeout((function() {
                                                    o.current.style.display = "none"
                                                }), 3e3)) : t.message.includes("email") ? c.current.focus() : n.current.focus()
                                            })).catch((function(e) {
                                                return console.log("error", e)
                                            }));
                                        case 14:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })));
                            return function(e) {
                                return a.apply(this, arguments)
                            }
                        }();
                    return Object(V.jsxs)("div", {
                        id: "contact-us-div",
                        children: [Object(V.jsx)("p", {
                            id: "contact-us-heading",
                            children: Object(V.jsx)("span", {
                                id: "contact-us-text-shadow",
                                children: "Contact Us"
                            })
                        }), Object(V.jsx)("div", {
                            id: "contact-form",
                            children: Object(V.jsx)("form", {
                                onSubmit: b,
                                children: Object(V.jsxs)("div", {
                                    id: "contact-form-div",
                                    children: [Object(V.jsxs)("div", {
                                        id: "contact-form-user-dropdown-div",
                                        children: [Object(V.jsx)("div", {
                                            id: "contact-form-user-dropdown1",
                                            children: Object(V.jsxs)("p", {
                                                className: "contact-us-para",
                                                children: ["I am \xa0", Object(V.jsxs)("select", {
                                                    name: "userType",
                                                    id: "userType",
                                                    className: "contact-us-dropdown",
                                                    ref: t,
                                                    onChange: p,
                                                    children: [Object(V.jsx)("option", {
                                                        value: "individual",
                                                        children: "a individual"
                                                    }), Object(V.jsx)("option", {
                                                        value: "brand",
                                                        children: "a brand"
                                                    })]
                                                })]
                                            })
                                        }), Object(V.jsx)("div", {
                                            id: "contact-form-user-dropdown2",
                                            children: Object(V.jsxs)("p", {
                                                className: "contact-us-para",
                                                children: ["looking to \xa0", Object(V.jsxs)("select", {
                                                    name: "userPurpose",
                                                    id: "userPurpose",
                                                    className: "contact-us-dropdown",
                                                    onChange: p,
                                                    ref: s,
                                                    children: [Object(V.jsx)("option", {
                                                        value: "awareness",
                                                        children: "build brand awareness"
                                                    }), Object(V.jsx)("option", {
                                                        value: "grow",
                                                        children: "grow more"
                                                    })]
                                                })]
                                            })
                                        })]
                                    }), Object(V.jsxs)("div", {
                                        className: "contact-us-inputs",
                                        children: [Object(V.jsx)("label", {
                                            children: "Name*"
                                        }), Object(V.jsx)("input", {
                                            type: "text",
                                            id: "name",
                                            name: "name",
                                            placeholder: "John Doe",
                                            ref: e,
                                            maxLength: "50",
                                            title: "Please enter alphabets only",
                                            pattern: "[a-zA-Z ]*$",
                                            required: !0
                                        })]
                                    }), Object(V.jsxs)("div", {
                                        className: "contact-us-inputs",
                                        children: [Object(V.jsx)("label", {
                                            children: "Email address*"
                                        }), Object(V.jsx)("input", {
                                            type: "email",
                                            pattern: "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}",
                                            id: "email",
                                            name: "email",
                                            placeholder: "xyz@gmail.com",
                                            ref: c,
                                            title: "Please enter valid email",
                                            required: !0
                                        })]
                                    }), Object(V.jsxs)("div", {
                                        className: "contact-us-inputs",
                                        children: [Object(V.jsx)("label", {
                                            children: "Mobile Number*"
                                        }), Object(V.jsx)("input", {
                                            type: "text",
                                            pattern: "\\+[0-9]+",
                                            id: "mobileNumber",
                                            name: "mobileNumber",
                                            placeholder: "9999999999",
                                            ref: n,
                                            maxLength: "20",
                                            title: "Enter Phone number with country code without space",
                                            required: !0
                                        })]
                                    }), Object(V.jsxs)("div", {
                                        className: "contact-us-inputs",
                                        children: [Object(V.jsx)("label", {
                                            children: "Estimated User Reach"
                                        }), Object(V.jsx)("input", {
                                            type: "text",
                                            id: "userReach",
                                            name: "userReach",
                                            placeholder: "9999999999",
                                            maxLength: "20",
                                            pattern: "^[0-9]*$",
                                            title: "Please enter digits only",
                                            ref: i
                                        })]
                                    }), Object(V.jsxs)("div", {
                                        className: "contact-us-inputs",
                                        children: [Object(V.jsx)("label", {
                                            children: "Company Name(Optional)"
                                        }), Object(V.jsx)("input", {
                                            type: "text",
                                            id: "companyName",
                                            name: "companyName",
                                            placeholder: "companyname.com",
                                            ref: r,
                                            maxLength: "100"
                                        })]
                                    }), Object(V.jsx)("div", {
                                        id: "contact-us-submit-div",
                                        children: Object(V.jsx)("a", {
                                            href: "#",
                                            id: "contact-us-submit",
                                            children: Object(V.jsx)("button", {
                                                type: "submit",
                                                id: "contact-us-button-submit",
                                                children: "Submit"
                                            })
                                        })
                                    }), Object(V.jsx)("div", {
                                        id: "contact-us-form-response",
                                        ref: o,
                                        children: Object(V.jsx)("p", {
                                            id: "contact-us-form-response-text",
                                            children: h
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                },
                Gt = f + "auth-dashboard-uploads/Group-%280%29.png",
                Et = f + "auth-dashboard-uploads/Group-%281%29.png",
                Tt = f + "auth-dashboard-uploads/Group-%282%29.png",
                Rt = f + "auth-dashboard-uploads/Group-%283%29.png",
                Ft = f + "auth-dashboard-uploads/Group-%284%29.png",
                It = f + "auth-dashboard-uploads/Group-%285%29.png",
                At = f + "auth-dashboard-uploads/Group-%286%29.png",
                Dt = f + "auth-dashboard-uploads/Group-%287%29.png",
                Ut = f + "auth-dashboard-uploads/Group-%288%29.png",
                Pt = f + "auth-dashboard-uploads/Group-%289%29.png",
                Bt = f + "auth-dashboard-uploads/Group-%2810%29.png",
                qt = f + "auth-dashboard-uploads/Group-%2811%29.png",
                Vt = f + "auth-dashboard-uploads/Ellipse-1.png",
                Mt = function() {
                    return Object(V.jsxs)("div", {
                        id: "solutions-div",
                        children: [Object(V.jsx)("img", {
                            src: Vt,
                            id: "solutions-bgImage"
                        }), Object(V.jsx)("p", {
                            id: "solutions-heading",
                            children: Object(V.jsx)("span", {
                                id: "solutions-text-shadow",
                                children: "Solutions to offer"
                            })
                        }), Object(V.jsx)("p", {
                            id: "solutions-subheading",
                            children: "Take a look on how we do our work"
                        }), Object(V.jsx)("div", {
                            id: "solution-content-parent",
                            children: Object(V.jsxs)("div", {
                                id: "solutions-content",
                                children: [Object(V.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(V.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(V.jsx)("img", {
                                            src: Gt,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(V.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Email Marketing"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(V.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(V.jsx)("img", {
                                            src: Et,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(V.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Social Media Campaigns"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(V.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(V.jsx)("img", {
                                            src: Tt,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(V.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Brand Reviews"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(V.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(V.jsx)("img", {
                                            src: Rt,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(V.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Dedicated Product Reviews"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(V.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(V.jsx)("img", {
                                            src: Ft,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(V.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Guest Postings"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(V.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(V.jsx)("img", {
                                            src: It,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(V.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Campus Connect"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(V.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(V.jsx)("img", {
                                            src: At,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(V.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "YouTube Series & Workshops"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(V.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(V.jsx)("img", {
                                            src: Dt,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(V.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Podcasts"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(V.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(V.jsx)("img", {
                                            src: Ut,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(V.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Hackathons"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(V.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(V.jsx)("img", {
                                            src: Pt,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(V.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Coding Contests"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(V.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(V.jsx)("img", {
                                            src: Bt,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(V.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Hiring Challenges"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "solutions-single-card",
                                    children: [Object(V.jsx)("div", {
                                        className: "solutions-card-inside-div",
                                        children: Object(V.jsx)("img", {
                                            src: qt,
                                            width: "50vw",
                                            height: "50vw"
                                        })
                                    }), Object(V.jsx)("p", {
                                        className: "solutions-card-data",
                                        children: "Tech Carnivals"
                                    })]
                                })]
                            })
                        })]
                    })
                };
            var zt = function() {
                    return Object(V.jsxs)("div", {
                        className: "App",
                        children: [Object(V.jsx)(pt, {}), Object(V.jsx)(xt, {}), Object(V.jsx)(Ot, {}), Object(V.jsx)(vt, {}), Object(V.jsx)(Nt, {}), Object(V.jsx)(yt, {}), Object(V.jsx)(Mt, {}), Object(V.jsx)(kt, {}), Object(V.jsx)(Ct, {})]
                    })
                },
                Wt = (s(298), function() {
                    return Object(V.jsxs)(V.Fragment, {
                        children: [Object(V.jsxs)(ve.a, {
                            children: [Object(V.jsx)("title", {
                                children: "Advertise with us"
                            }), Object(V.jsx)("meta", {
                                charset: "utf-8"
                            }), Object(V.jsx)("meta", {
                                name: "keywords",
                                content: "Data Structures,Algorithms,Python,Java,C,C++,JavaScript,Android Development,SQL,Data Science,Machine Learning,PHP,Web Development,System Design,Tutorial,Technical Blogs,Interview Experience,Interview Preparation,Programming,Competitive Programming,SDE Sheet,Job-a-thon,Coding Contests,GATE CSE,HTML,CSS,React,NodeJS,Placement,Aptitude,Quiz,Computer Science,Programming Examples,GeeksforGeeks Courses,Puzzles"
                            }), Object(V.jsx)("meta", {
                                name: "viewport",
                                content: "width=device-width,initial-scale=1,maximum-scale=1"
                            }), Object(V.jsx)("meta", {
                                name: "theme-color",
                                content: "#308D46"
                            }), Object(V.jsx)("meta", {
                                name: "image",
                                property: "og:image",
                                content: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png"
                            }), Object(V.jsx)("meta", {
                                property: "og:image:type",
                                content: "image/png"
                            }), Object(V.jsx)("meta", {
                                property: "og:image:width",
                                content: "200"
                            }), Object(V.jsx)("meta", {
                                property: "og:image:height",
                                content: "200"
                            }), Object(V.jsx)("meta", {
                                name: "facebook-domain-verification",
                                content: "xo7t4ve2wn3ywfkjdvwbrk01pvdond"
                            }), Object(V.jsx)("meta", {
                                name: "description",
                                content: "A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions."
                            }), Object(V.jsx)("meta", {
                                property: "og:locale",
                                content: "en_US"
                            }), Object(V.jsx)("meta", {
                                property: "og:type",
                                content: "article"
                            }), Object(V.jsx)("meta", {
                                property: "og:title",
                                content: "Advertise with us - GeeksforGeeks"
                            }), Object(V.jsx)("meta", {
                                property: "og:description",
                                content: "A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions."
                            }), Object(V.jsx)("meta", {
                                property: "og:url",
                                content: "https://www.geeksforgeeks.org/advertise-with-us/"
                            }), Object(V.jsx)("meta", {
                                property: "og:site_name",
                                content: "GeeksforGeeks"
                            }), Object(V.jsx)("meta", {
                                name: "generator",
                                content: "WordPress 4.9.8"
                            }), Object(V.jsx)("meta", {
                                name: "msapplication-TileImage",
                                content: "https://www.geeksforgeeks.org/wp-content/uploads/gfg_200X200.png"
                            })]
                        }), Object(V.jsx)(zt, {})]
                    })
                }),
                Ht = s(452),
                Jt = s(454),
                Qt = s(455),
                Xt = s(456),
                Yt = s(117),
                Kt = s(245),
                Zt = s(457),
                $t = function() {
                    var e = Object(a.useState)(""),
                        t = Object(d.a)(e, 2),
                        s = t[0],
                        c = t[1],
                        n = Object(a.useState)({
                            width: void 0,
                            height: void 0
                        }),
                        i = Object(d.a)(n, 2),
                        r = i[0],
                        o = i[1],
                        l = function() {
                            o({
                                width: window.innerWidth,
                                height: window.innerHeight
                            })
                        };
                    return Object(a.useEffect)((function() {
                        return window.addEventListener("resize", l), l(), 0 < r.width && r.width <= 576 && c("xs"), 577 <= r.width && r.width <= 768 && c("sm"), 769 <= r.width && r.width < 835 && c("md"), 835 <= r.width && r.width < 1195 && c("lg"), 1195 <= r.width && c("xl"),
                            function() {
                                return window.removeEventListener("resize", l)
                            }
                    }), [r.width]), s
                },
                es = s(94),
                ts = function(e, t, s) {
                    try {
                        es.a.event({
                            category: s,
                            action: t,
                            label: window.location.href
                        })
                    } catch (a) {
                        console.log(a)
                    }
                },
                ss = (Ht.a.Meta, function(e) {
                    var t = 0 !== (e.duration / 3600 | 0) ? e.duration / 3600 | 0 : "",
                        s = e.duration % 3600 / 60 | 0,
                        a = e.duration % 60,
                        c = t.toString(),
                        n = s.toString(),
                        i = a.toString(),
                        r = "" !== c ? 1 === c.length ? "0" + c + ":" : c + ":" : "";
                    return r += (1 === n.length ? "0" + n : n) + ":", r += 1 === i.length ? "0" + i : i, Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Jt.a, {
                            className: "xl" !== e.breakpoint && "lg" !== e.breakpoint && "md" !== e.breakpoint ? "gfg_home_course gfg_home_page_video_outer_height_hover" : "ant-col-8 gfg_home_page_video_outer_height_hover",
                            children: Object(V.jsx)("a", {
                                href: m.GFG_SITE_URL + "videos/" + e.slug + "/",
                                onClick: function(t) {
                                    return ts(t, "clickopen", "".concat(e.eventCategory))
                                },
                                children: Object(V.jsx)(Ht.a, {
                                    className: "gfg_home_page_video_card",
                                    hoverable: !0,
                                    style: {
                                        borderRadius: "10px"
                                    },
                                    cover: Object(V.jsxs)("div", {
                                        style: {
                                            position: "relative"
                                        },
                                        children: [Object(V.jsx)(Zt.a, {
                                            className: "gfg_home_page_video_card_play_button"
                                        }), Object(V.jsx)("div", {
                                            class: "duration_video",
                                            children: r
                                        }), Object(V.jsx)("img", {
                                            loading: "lazy",
                                            className: "gfg_home_page_video_image",
                                            src: e.meta.thumbnail ? e.meta.thumbnail : "https://media.geeksforgeeks.org/img-practice/banner/complete-interview-preparation-thumbnail.png"
                                        })]
                                    }),
                                    children: Object(V.jsxs)("div", {
                                        style: {
                                            marginBottom: "-10px",
                                            marginTop: "-10px"
                                        },
                                        children: [Object(V.jsx)("div", {
                                            className: "video-card-content video-card-content_video",
                                            children: e.title
                                        }), Object(V.jsx)("div", {
                                            className: "video-card-date",
                                            children: e.date
                                        })]
                                    })
                                })
                            })
                        })
                    })
                }),
                as = function() {
                    var e = Object(a.useState)(!1),
                        t = Object(d.a)(e, 2),
                        s = t[0],
                        c = t[1],
                        n = et(void 0, {
                            skip: 0 == s
                        }),
                        i = n.data,
                        r = n.isLoading,
                        o = $t(),
                        l = [];
                    !r && i && i.results.forEach((function(e) {
                        return l.length < 3 && l.push(Object(V.jsx)(ss, {
                            title: e.title,
                            date: e.time,
                            slug: e.slug,
                            breakpoint: o,
                            image: e.meta.thumbnail,
                            duration: e.duration,
                            meta: e.meta,
                            eventCategory: "homepage_videos_card_" + "".concat(l.length + 1)
                        }))
                    }));
                    try {
                        if ("undefined" !== typeof window && window.videosRes.results && window.videosRes.results.length > 0) window.videosRes.results.forEach((function(e) {
                            return l.length < 3 && l.push(Object(V.jsx)(ss, {
                                title: e.title,
                                date: e.time,
                                slug: e.slug,
                                breakpoint: o,
                                image: e.meta.thumbnail,
                                duration: e.duration,
                                meta: e.meta,
                                eventCategory: "homepage_videos_card_" + "".concat(l.length + 1)
                            }))
                        }))
                    } catch (g) {
                        G(g)
                    }
                    return Object(a.useEffect)((function() {
                        "undefined" !== typeof window && window.videosResErr && 0 == window.videosResErr.length && c(!0)
                    }), []), Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsxs)("div", {
                            className: "gfg_home_page_video_outer_height",
                            children: [Object(V.jsx)(Qt.a, {
                                className: "gfg_view_all",
                                children: Object(V.jsx)(Jt.a, {
                                    span: "xl" !== o ? "sm" === o || "xs" === o ? 23 : 22 : 20,
                                    offset: "xl" !== o ? "sm" === o || "xs" === o ? 0 : 1 : 2,
                                    children: Object(V.jsx)(Jt.a, {
                                        offset: 1,
                                        children: Object(V.jsx)(Jt.a, {
                                            span: 23,
                                            children: Object(V.jsxs)(Qt.a, {
                                                justify: "space-between",
                                                children: [Object(V.jsx)(Jt.a, {
                                                    className: "video-card-heading",
                                                    children: "Videos"
                                                }), Object(V.jsx)(Xt.b, {
                                                    children: Object(V.jsx)(Yt.a, {
                                                        className: "view_all_button",
                                                        shape: "round",
                                                        href: m.GFG_SITE_URL + "videos/",
                                                        children: "View All"
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                })
                            }), Object(V.jsx)(Qt.a, {
                                children: Object(V.jsx)(Jt.a, {
                                    span: "xl" !== o ? "sm" === o || "xs" === o ? 23 : 22 : 20,
                                    offset: "xl" !== o ? "sm" === o || "xs" === o ? 0 : 1 : 2,
                                    children: Object(V.jsx)(Jt.a, {
                                        offset: 1,
                                        children: Object(V.jsx)(Jt.a, {
                                            span: 23,
                                            className: "gfg_home_page_video_outer_height_hover",
                                            children: Object(V.jsx)(Qt.a, {
                                                className: "xl" !== o && "lg" !== o ? "scroll_gfg gfg_home_sroll" : "",
                                                wrap: "xl" === o || "lg" === o || "md" === o,
                                                gutter: "xl" === o || "lg" === o ? 60 : 30,
                                                children: l.length ? l : Object(V.jsxs)(V.Fragment, {
                                                    children: [Object(V.jsxs)(Jt.a, {
                                                        span: "xl" !== o && "lg" !== o && "md" !== o && "sm" !== o ? 20 : 8,
                                                        children: [Object(V.jsx)(Kt.a.Avatar, {
                                                            className: "gfg_home_page_search_image_skeleton",
                                                            shape: "square",
                                                            active: !0
                                                        }), Object(V.jsx)(Kt.a, {
                                                            active: !0
                                                        })]
                                                    }), Object(V.jsxs)(Jt.a, {
                                                        span: "xl" !== o && "lg" !== o && "md" !== o && "sm" !== o ? 20 : 8,
                                                        children: [Object(V.jsx)(Kt.a.Avatar, {
                                                            className: "gfg_home_page_search_image_skeleton",
                                                            shape: "square",
                                                            active: !0
                                                        }), Object(V.jsx)(Kt.a, {
                                                            active: !0
                                                        })]
                                                    }), Object(V.jsxs)(Jt.a, {
                                                        span: "xl" !== o && "lg" !== o && "md" !== o && "sm" !== o ? 20 : 8,
                                                        children: [Object(V.jsx)(Kt.a.Avatar, {
                                                            className: "gfg_home_page_search_image_skeleton",
                                                            shape: "square",
                                                            active: !0
                                                        }), Object(V.jsx)(Kt.a, {
                                                            active: !0
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            })]
                        })
                    })
                },
                cs = (Ht.a.Meta, function(e) {
                    var t;
                    return Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Jt.a, {
                            style: {
                                paddingBottom: "20px"
                            },
                            className: "xl" !== e.breakpoint && "lg" !== e.breakpoint && "md" !== e.breakpoint ? "gfg_home_course gfg_home_page_course_card_distance" : "ant-col-8 gfg_home_page_course_card_distance",
                            children: Object(V.jsx)("a", {
                                href: "".concat(m.GFG_SITE_URL, "courses/").concat(e.data.course_slug, "?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=courses"),
                                children: Object(V.jsx)(Ht.a, {
                                    className: "gfg_home_page_course_card",
                                    hoverable: !0,
                                    cover: Object(V.jsxs)("div", {
                                        className: "gfg_home_page_course_card_cover",
                                        children: [Object(V.jsx)("img", {
                                            loading: "lazy",
                                            className: "gfg_home_page_course_card_image",
                                            src: e.data.small_banner_webp
                                        }), Object(V.jsxs)(Jt.a, {
                                            className: "gfg_home_page_course_card_divider",
                                            style: {
                                                paddingLeft: "0px",
                                                paddingRight: "0px"
                                            },
                                            children: [Object(V.jsxs)(Qt.a, {
                                                justify: "space-between",
                                                style: {
                                                    padding: "10px"
                                                },
                                                children: [Object(V.jsx)(Jt.a, {
                                                    span: 14,
                                                    children: e.data.visit_count && Object(V.jsx)(Qt.a, {
                                                        children: Object(V.jsxs)("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center"
                                                            },
                                                            children: [Object(V.jsx)("img", {
                                                                loading: "lazy",
                                                                className: "gfg_home_page_course_visit_count_image",
                                                                src: "https://media.geeksforgeeks.org/img-practice/Group7622-1669294650.svg"
                                                            }), Object(V.jsxs)("span", {
                                                                style: {
                                                                    font: "normal normal 12px normal"
                                                                },
                                                                className: "gfg_home_page_course_visit_color font-primary",
                                                                children: [e.data.visit_count, " interested Geeks"]
                                                            })]
                                                        })
                                                    })
                                                }), Object(V.jsx)(Jt.a, {
                                                    children: e.data.rating.avg_rating && Object(V.jsx)(Qt.a, {
                                                        children: Object(V.jsxs)("div", {
                                                            className: "gfg_home_page_course_card_rating",
                                                            children: [Object(V.jsx)("img", {
                                                                loading: "lazy",
                                                                className: "gfg_home_page_course_rating_image",
                                                                src: "https://media.geeksforgeeks.org/img-practice/Path4648-1641537423.svg"
                                                            }), Object(V.jsx)("span", {
                                                                style: {
                                                                    paddingLeft: "4px"
                                                                },
                                                                className: "gfg_home_page_course_rating_val",
                                                                children: e.data.rating.avg_rating
                                                            })]
                                                        })
                                                    })
                                                })]
                                            }), Object(V.jsx)(Qt.a, {
                                                style: {
                                                    minHeight: "55px",
                                                    maxHeight: "55px",
                                                    overflow: "hidden"
                                                },
                                                children: Object(V.jsx)("span", {
                                                    className: "video-card-content video-card-content_course",
                                                    children: e.data.course_name
                                                })
                                            }), Object(V.jsx)(Qt.a, {
                                                justify: "space-between",
                                                style: {
                                                    padding: "18px 10px 10px 10px"
                                                },
                                                children: Object(V.jsx)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: (null === e || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.level) && Object(V.jsxs)(c.a.Fragment, {
                                                        children: [Object(V.jsx)("img", {
                                                            loading: "lazy",
                                                            className: "gfg_home_page_course_level_image",
                                                            src: "https://media.geeksforgeeks.org/img-practice/Levels-1669283463.svg"
                                                        }), Object(V.jsx)("span", {
                                                            style: {
                                                                paddingLeft: "8px"
                                                            },
                                                            className: "gfg_home_page_course_level_color",
                                                            children: e.data.level
                                                        })]
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })
                        })
                    })
                }),
                ns = function() {
                    var e = Object(a.useState)(!1),
                        t = Object(d.a)(e, 2),
                        s = t[0],
                        c = t[1],
                        n = $e(void 0, {
                            skip: 0 == s
                        }),
                        i = n.data,
                        r = n.isLoading,
                        o = [],
                        l = [],
                        g = $t();
                    try {
                        if (!r && i) {
                            for (var u in i) {
                                var j, h, p;
                                if (null === (j = i[u]) || void 0 === j || !j.name.toLowerCase().includes("offline")) l.push.apply(l, null === (h = i[u]) || void 0 === h || null === (p = h.course_list) || void 0 === p ? void 0 : p.slice(0, 2))
                            }
                            for (var b in i) {
                                var x, f, _;
                                if (null === (x = i[b]) || void 0 === x || !x.name.toLowerCase().includes("offline")) l.push.apply(l, null === (f = i[b]) || void 0 === f || null === (_ = f.course_list) || void 0 === _ ? void 0 : _.slice(2))
                            }
                            for (var O = 0; O < 6; O++) o.push(Object(V.jsx)(cs, {
                                breakpoint: g,
                                data: l[O],
                                eventCategory: "homepage_courses_card" + (O + 1)
                            }))
                        }
                    } catch (R) {
                        G(R)
                    }
                    try {
                        if ("undefined" !== typeof window && window.coursesRes && window.coursesRes.length > 0) {
                            var v = window.coursesRes;
                            for (var N in v) {
                                var w, y, k;
                                if (null === (w = v[N]) || void 0 === w || !w.name.toLowerCase().includes("offline")) l.push.apply(l, null === (y = v[N]) || void 0 === y || null === (k = y.course_list) || void 0 === k ? void 0 : k.slice(0, 2))
                            }
                            for (var S in v) {
                                var L, C, E;
                                if (null === (L = v[S]) || void 0 === L || !L.name.toLowerCase().includes("offline")) l.push.apply(l, null === (C = v[S]) || void 0 === C || null === (E = C.course_list) || void 0 === E ? void 0 : E.slice(2))
                            }
                            for (var T = 0; T < 6; T++) o.push(Object(V.jsx)(cs, {
                                breakpoint: g,
                                data: l[T],
                                eventCategory: "homepage_courses_card" + (T + 1)
                            }))
                        }
                    } catch (R) {
                        G(R)
                    }
                    return Object(a.useEffect)((function() {
                        "undefined" !== typeof window && window.coursesRes && 0 == window.coursesRes.length && c(!0)
                    }), []), Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Qt.a, {
                            className: "gfg_home_page_course_outer_height gfg_view_all",
                            children: Object(V.jsx)(Jt.a, {
                                span: "xl" !== g ? "sm" === g || "xs" === g ? 23 : 22 : 20,
                                offset: "xl" !== g ? "sm" === g || "xs" === g ? 0 : 1 : 2,
                                children: Object(V.jsxs)(Jt.a, {
                                    offset: 1,
                                    children: [Object(V.jsx)(Jt.a, {
                                        span: 23,
                                        children: Object(V.jsxs)(Qt.a, {
                                            justify: "space-between",
                                            children: [Object(V.jsx)(Jt.a, {
                                                className: "video-card-heading",
                                                children: "Courses"
                                            }), Object(V.jsx)(Xt.b, {
                                                children: Object(V.jsx)(Yt.a, {
                                                    href: "".concat(m.GFG_SITE_URL, "courses?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=courses"),
                                                    className: "view_all_button view_all_button_courses",
                                                    shape: "round",
                                                    children: "View All"
                                                })
                                            })]
                                        })
                                    }), Object(V.jsx)(Jt.a, {
                                        span: 23,
                                        children: Object(V.jsx)(Qt.a, {
                                            className: "xl" !== g && "lg" !== g && "md" !== g ? "scroll_gfg gfg_home_sroll" : "",
                                            wrap: "xl" === g || "lg" === g || "md" === g,
                                            gutter: "xl" === g || "lg" === g ? 60 : 30,
                                            children: o.length ? o : Object(V.jsxs)(V.Fragment, {
                                                children: [Object(V.jsxs)(Jt.a, {
                                                    className: "gfg_home_page_course_card_skeleton_padding",
                                                    span: "xl" !== g && "lg" !== g && "md" !== g && "sm" !== g ? 20 : 8,
                                                    children: [Object(V.jsx)(Kt.a.Avatar, {
                                                        className: "gfg_home_page_search_image_skeleton",
                                                        shape: "square",
                                                        active: !0
                                                    }), Object(V.jsx)(Kt.a, {
                                                        active: !0
                                                    })]
                                                }), Object(V.jsxs)(Jt.a, {
                                                    span: "xl" !== g && "lg" !== g && "md" !== g && "sm" !== g ? 20 : 8,
                                                    children: [Object(V.jsx)(Kt.a.Avatar, {
                                                        className: "gfg_home_page_search_image_skeleton",
                                                        shape: "square",
                                                        active: !0
                                                    }), Object(V.jsx)(Kt.a, {
                                                        active: !0
                                                    })]
                                                }), Object(V.jsxs)(Jt.a, {
                                                    span: "xl" !== g && "lg" !== g && "md" !== g && "sm" !== g ? 20 : 8,
                                                    children: [Object(V.jsx)(Kt.a.Avatar, {
                                                        className: "gfg_home_page_search_image_skeleton",
                                                        shape: "square",
                                                        active: !0
                                                    }), Object(V.jsx)(Kt.a, {
                                                        active: !0
                                                    })]
                                                }), Object(V.jsxs)(Jt.a, {
                                                    span: "xl" !== g && "lg" !== g && "md" !== g && "sm" !== g ? 20 : 8,
                                                    children: [Object(V.jsx)(Kt.a.Avatar, {
                                                        className: "gfg_home_page_search_image_skeleton",
                                                        shape: "square",
                                                        active: !0
                                                    }), Object(V.jsx)(Kt.a, {
                                                        active: !0
                                                    })]
                                                }), Object(V.jsxs)(Jt.a, {
                                                    span: "xl" !== g && "lg" !== g && "md" !== g && "sm" !== g ? 20 : 8,
                                                    children: [Object(V.jsx)(Kt.a.Avatar, {
                                                        className: "gfg_home_page_search_image_skeleton",
                                                        shape: "square",
                                                        active: !0
                                                    }), Object(V.jsx)(Kt.a, {
                                                        active: !0
                                                    })]
                                                }), Object(V.jsxs)(Jt.a, {
                                                    span: "xl" !== g && "lg" !== g && "md" !== g && "sm" !== g ? 20 : 8,
                                                    children: [Object(V.jsx)(Kt.a.Avatar, {
                                                        className: "gfg_home_page_search_image_skeleton",
                                                        shape: "square",
                                                        active: !0
                                                    }), Object(V.jsx)(Kt.a, {
                                                        active: !0
                                                    })]
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })
                        })
                    })
                },
                is = s(449),
                rs = function(e) {
                    var t = Ze(),
                        s = t.data,
                        c = t.isLoading,
                        n = t.isError,
                        i = Object(a.useState)(59),
                        r = Object(d.a)(i, 2),
                        o = r[0],
                        l = r[1],
                        g = Object(a.useState)(59),
                        u = Object(d.a)(g, 2),
                        j = u[0],
                        h = u[1],
                        m = Object(a.useState)(23),
                        p = Object(d.a)(m, 2),
                        b = p[0],
                        x = p[1],
                        _ = Object(a.useState)(!1),
                        O = Object(d.a)(_, 2),
                        v = O[0],
                        N = O[1];
                    if (Object(a.useEffect)((function() {
                            var e = setTimeout((function() {
                                0 === b && 0 === j && 0 === o || (0 === j && 0 === o && x(b - 1), 0 === o && h(j - 1 < 0 ? 59 : j - 1), l(o - 1 < 0 ? 59 : o - 1))
                            }), 1e3);
                            return function() {
                                return clearInterval(e)
                            }
                        })), !c && !n && s && s.id) {
                        if (!v) {
                            if (s.xdate) try {
                                var w = s.end_date.split(/[- :]/),
                                    y = new Date(w[0], w[1] - 1, w[2], w[3], w[4], w[5]),
                                    k = new Date(y);
                                l(new Date(k).getSeconds() - new Date(s.xdate).getSeconds()), h(new Date(k).getMinutes() - new Date(s.xdate).getMinutes()), x(new Date(k).getHours() - new Date(s.xdate).getHours())
                            } catch (G) {
                                l(NaN), h(NaN), x(NaN)
                            } else try {
                                var S = s.end_date.split(/[- :]/),
                                    L = new Date(S[0], S[1] - 1, S[2], S[3], S[4], S[5]),
                                    C = new Date(L);
                                l(new Date(C).getSeconds() - (new Date).getSeconds()), h(new Date(C).getMinutes() - (new Date).getMinutes()), x(new Date(C).getHours() - (new Date).getHours())
                            } catch (G) {
                                l(NaN), h(NaN), x(NaN)
                            }
                            N(!0)
                        }
                        return Object(V.jsx)(V.Fragment, {
                            children: Object(V.jsx)("a", {
                                href: s.problem_url + "/?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=potd",
                                children: Object(V.jsx)(Jt.a, {
                                    span: "xl" !== e.breakpoint ? 22 : 20,
                                    offset: "xl" !== e.breakpoint ? 1 : 2,
                                    className: "gfg_home_page_potd_min_height",
                                    children: Object(V.jsx)(Jt.a, {
                                        offset: "xl" !== e.breakpoint ? 0 : 1,
                                        children: Object(V.jsx)(Qt.a, {
                                            className: "gfg_home_page_potd_height_spacing ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "gfg_home_page_potd_height_spacing_small" : ""),
                                            children: Object(V.jsx)(Jt.a, {
                                                className: "gfg_home_page_potd",
                                                span: "xl" !== e.breakpoint ? 24 : 23,
                                                children: Object(V.jsxs)(Qt.a, {
                                                    className: "gfg_home_page_potd_outer gfg_home_page_potd_outer_border",
                                                    justify: "space-between",
                                                    wrap: "xs" === e.breakpoint || "sm" === e.breakpoint,
                                                    children: [Object(V.jsx)(Jt.a, {
                                                        className: "first_column ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "first_column_small" : ""),
                                                        span: "xs" === e.breakpoint || "sm" === e.breakpoint ? 24 : 3,
                                                        children: Object(V.jsx)(Qt.a, {
                                                            justify: "xs" === e.breakpoint || "sm" === e.breakpoint ? "center" : "",
                                                            children: Object(V.jsx)(is.a, {
                                                                className: "gfg_home_page_potd_image ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "gfg_home_page_potd_image_small" : ""),
                                                                preview: !1,
                                                                src: "".concat(f, "img-practice/Asset1-1641910145.svg")
                                                            })
                                                        })
                                                    }), Object(V.jsx)(Jt.a, {
                                                        className: "second_column ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "second_column_small" : ""),
                                                        span: "xs" === e.breakpoint || "sm" === e.breakpoint ? 24 : 14,
                                                        children: Object(V.jsxs)(Jt.a, {
                                                            className: "xs" === e.breakpoint || "sm" === e.breakpoint ? "card_spacing_small" : "card_spacing",
                                                            children: [Object(V.jsx)(Qt.a, {
                                                                className: "gfg_home_page_potd_banner_title",
                                                                children: "Problem of the day"
                                                            }), Object(V.jsx)(Qt.a, {
                                                                className: "problem_name",
                                                                children: s.problem_name
                                                            }), Object(V.jsx)(Qt.a, {
                                                                className: "problem_description",
                                                                children: "Solve one problem based on Data Structures and Algorithms every day and win exciting prizes."
                                                            })]
                                                        })
                                                    }), Object(V.jsxs)(Jt.a, {
                                                        className: "third_column ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "third_column_small" : ""),
                                                        span: "xs" === e.breakpoint || "sm" === e.breakpoint ? 24 : 7,
                                                        children: [Object(V.jsxs)(Qt.a, {
                                                            justify: "space-around",
                                                            style: {
                                                                alignContent: "flex-end"
                                                            },
                                                            children: [Object(V.jsx)(Jt.a, {
                                                                className: "gfg_home_page_potd_time",
                                                                children: 1 === b.toString().length ? "0" + b : b
                                                            }), Object(V.jsx)(Jt.a, {
                                                                className: "gfg_home_page_potd_time",
                                                                children: 1 === j.toString().length ? "0" + j : j
                                                            }), Object(V.jsx)(Jt.a, {
                                                                className: "gfg_home_page_potd_time",
                                                                children: 1 === o.toString().length ? "0" + o : o
                                                            })]
                                                        }), Object(V.jsxs)(Qt.a, {
                                                            justify: "space-around",
                                                            children: [Object(V.jsx)(Jt.a, {
                                                                className: "gfg_home_page_potd_time_unit",
                                                                children: "\xa0\xa0\xa0Hours"
                                                            }), Object(V.jsx)(Jt.a, {
                                                                className: "gfg_home_page_potd_time_unit",
                                                                children: "\xa0\xa0\xa0Minutes"
                                                            }), Object(V.jsx)(Jt.a, {
                                                                className: "gfg_home_page_potd_time_unit",
                                                                children: "\xa0\xa0Seconds"
                                                            })]
                                                        }), Object(V.jsx)(Qt.a, {
                                                            justify: "space-around",
                                                            children: Object(V.jsx)(Yt.a, {
                                                                className: "gfg_home_page_potd_button ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "gfg_home_page_potd_button_small" : ""),
                                                                style: {
                                                                    paddingTop: "10px",
                                                                    paddingBottom: "20px",
                                                                    fontSize: "14px",
                                                                    borderRadius: "4px"
                                                                },
                                                                onClick: function(e) {
                                                                    return ts(e, "clickopen", "homepagepotd")
                                                                },
                                                                children: "Solve Now"
                                                            })
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    }
                    return Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Jt.a, {
                            span: "xl" !== e.breakpoint ? 22 : 20,
                            offset: "xl" !== e.breakpoint ? 1 : 2,
                            className: "gfg_home_page_potd_min_height",
                            children: Object(V.jsx)(Jt.a, {
                                offset: "xl" !== e.breakpoint ? 0 : 1,
                                children: Object(V.jsx)(Qt.a, {
                                    className: "gfg_home_page_potd_height_spacing ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "gfg_home_page_potd_height_spacing_small" : ""),
                                    children: Object(V.jsx)(Jt.a, {
                                        className: "gfg_home_page_potd",
                                        span: "xl" !== e.breakpoint ? 24 : 23,
                                        children: Object(V.jsxs)(Qt.a, {
                                            className: "gfg_home_page_potd_outer gfg_home_page_potd_outer_border",
                                            justify: "space-between",
                                            wrap: "xs" === e.breakpoint || "sm" === e.breakpoint,
                                            children: [Object(V.jsx)(Jt.a, {
                                                className: "".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "first_column_small" : ""),
                                                span: "xs" === e.breakpoint || "sm" === e.breakpoint ? 24 : 3,
                                                children: Object(V.jsx)(Kt.a.Avatar, {
                                                    className: "gfg_home_page_potd_outer first_column_skeleton",
                                                    active: !0,
                                                    shape: "square"
                                                })
                                            }), Object(V.jsx)(Jt.a, {
                                                style: {
                                                    paddingTop: "2%"
                                                },
                                                className: "".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "second_column_small" : ""),
                                                span: "xs" === e.breakpoint || "sm" === e.breakpoint ? 24 : 14,
                                                children: Object(V.jsx)(Kt.a, {
                                                    style: {
                                                        padding: "4%"
                                                    },
                                                    active: !0
                                                })
                                            }), Object(V.jsx)(Jt.a, {
                                                className: "".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "third_column_small" : ""),
                                                span: "xs" === e.breakpoint || "sm" === e.breakpoint ? 24 : 7,
                                                children: Object(V.jsx)(Kt.a.Avatar, {
                                                    className: "gfg_home_page_potd_outer third_column_skeleton",
                                                    active: !0,
                                                    shape: "square"
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                os = function(e) {
                    var t = e.data,
                        s = e.breakpoint;
                    return Object(V.jsx)(Jt.a, {
                        className: "gfg_home_page_single_gblog_container gfg_gBlog_fade",
                        span: "xl" !== s ? "sm" === s || "xs" === s ? 23 : 22 : 20,
                        offset: "xl" !== s ? "sm" === s || "xs" === s ? 0 : 1 : 2,
                        children: Object(V.jsx)(Jt.a, {
                            offset: 1,
                            children: Object(V.jsx)(Jt.a, {
                                span: "sm" === s || "xs" === s ? 24 : 23,
                                children: Object(V.jsx)("a", {
                                    href: t.post_link + (function() {
                                        if (!t.post_link) return "";
                                        var e = document.createElement("a");
                                        e.href = t.post_link;
                                        var s = e.origin + "/";
                                        return e.remove(), s
                                    }() === m.GFG_SITE_URL ? "?ref=home-gblog" : "?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=gblog"),
                                    children: Object(V.jsxs)(Qt.a, {
                                        className: "gfg_home_page_carousel_border",
                                        wrap: !0,
                                        children: [Object(V.jsx)(Jt.a, {
                                            className: "gfg_home_page_carousel_height",
                                            span: "xl" !== s && "lg" !== s && "md" !== s && "sm" !== s ? 24 : 14,
                                            children: Object(V.jsx)("img", {
                                                className: "gfg_home_page_carousel_image",
                                                style: {
                                                    objectFit: "cover"
                                                },
                                                src: t.post_image
                                            })
                                        }), Object(V.jsx)(Jt.a, {
                                            className: "gfg_home_page_carousel_height",
                                            span: "xl" !== s && "lg" !== s && "md" !== s && "sm" !== s ? 24 : 10,
                                            style: {
                                                overflow: "hidden",
                                                padding: "8px"
                                            },
                                            children: Object(V.jsxs)(Jt.a, {
                                                className: "gfg_home_page_carousel_card_size",
                                                style: {
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis"
                                                },
                                                children: [1 == t.is_gblog && Object(V.jsx)(Jt.a, {
                                                    style: {
                                                        color: "#2f8d46",
                                                        font: "normal normal normal 13px/24px sofia-pro,sans-serif",
                                                        letterSpacing: "0px"
                                                    },
                                                    children: Object(V.jsx)("a", {
                                                        className: "gfg_home_page_gBlogHeading",
                                                        href: "https://www.geeksforgeeks.org/category/guestblogs/",
                                                        children: "GBlog"
                                                    })
                                                }), Object(V.jsx)(Jt.a, {
                                                    className: "gfg_home_page_carousel_title",
                                                    children: t.post_title
                                                }), Object(V.jsx)(Jt.a, {
                                                    style: {
                                                        paddingBottom: "5px"
                                                    },
                                                    children: Object(V.jsx)("div", {
                                                        className: "gfg_home_page_carousel_description",
                                                        children: t.post_excerpt
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })
                            })
                        })
                    })
                },
                ls = function(e) {
                    var t = e.data,
                        s = e.breakpoint,
                        c = Object(a.useState)(),
                        n = Object(d.a)(c, 2),
                        i = n[0],
                        r = n[1];
                    Object(a.useEffect)((function() {
                        o(0)
                    }), []);
                    var o = function e(s) {
                        s %= t.length;
                        var a = document.getElementsByClassName("gfg_home_page_single_gblog_container"),
                            c = document.getElementsByClassName("gfg_home_page_gblog_dot");
                        if (c && (null === t || void 0 === t ? void 0 : t.length) > 1) {
                            for (var n = 0; n < a.length; n++) a[n].style.display = "none", c[n].classList.remove("gfg_home_page_gblog_active");
                            c[s].className += " gfg_home_page_gblog_active"
                        }
                        a[s].style.display = "block";
                        var i = setTimeout(e, 5e3, s + 1);
                        r(i)
                    };
                    return Object(V.jsxs)("div", {
                        className: "gfg_home_page_gblog_collection_container",
                        children: [Object(V.jsx)(Qt.a, {
                            className: "gfg_home_page_carousel_spacing",
                            children: t && t.map((function(e) {
                                return Object(V.jsx)(os, {
                                    data: e,
                                    breakpoint: s
                                })
                            }))
                        }), (null === t || void 0 === t ? void 0 : t.length) > 1 ? Object(V.jsx)("div", {
                            className: "gfg_home_page_gblog_dots_container",
                            children: Object(ye.a)(Array(t.length).keys()).map((function(e) {
                                return Object(V.jsx)("span", {
                                    className: "gfg_home_page_gblog_dot",
                                    onClick: function() {
                                        return t = e, clearTimeout(i), void o(t);
                                        var t
                                    }
                                })
                            }))
                        }) : null]
                    })
                },
                ds = function(e) {
                    var t, s, c, n, i, r, o, l, g, u, j, h = e.breakpoint,
                        m = Object(a.useState)(!1),
                        p = Object(d.a)(m, 2),
                        b = p[0],
                        x = p[1],
                        f = tt(void 0, {
                            skip: 0 == b
                        }),
                        _ = f.data,
                        O = f.isLoading,
                        v = f.isError,
                        N = [],
                        w = window.heroSectionCardCnt;
                    return (null === (t = window.gBlogRes) || void 0 === t || null === (s = t.response) || void 0 === s ? void 0 : s.length) > 0 && (null === (c = window.gBlogRes) || void 0 === c || null === (n = c.response) || void 0 === n ? void 0 : n.length) < w ? w = null === (i = window.gBlogRes) || void 0 === i || null === (r = i.response) || void 0 === r ? void 0 : r.length : (null === _ || void 0 === _ || null === (o = _.response) || void 0 === o ? void 0 : o.length) < w && (w = null === _ || void 0 === _ || null === (l = _.response) || void 0 === l ? void 0 : l.length), (null === _ || void 0 === _ || null === (g = _.response) || void 0 === g ? void 0 : g.length) > 0 && !O && !v && N.push(Object(V.jsx)(ls, {
                        data: _.response.slice(0, w),
                        breakpoint: h
                    })), "undefined" !== typeof window && (null === (u = window.gBlogRes) || void 0 === u || null === (j = u.response) || void 0 === j ? void 0 : j.length) > 0 && N.push(Object(V.jsx)(ls, {
                        data: window.gBlogRes.response.slice(0, w),
                        breakpoint: h
                    })), Object(a.useEffect)((function() {
                        var e, t;
                        "undefined" === typeof window || null !== (e = window.gBlogRes) && void 0 !== e && null !== (t = e.response) && void 0 !== t && t.length || x(!0)
                    })), w <= 0 ? null : Object(V.jsx)(V.Fragment, {
                        children: N.length > 0 ? N : Object(V.jsx)(Qt.a, {
                            children: Object(V.jsx)(Jt.a, {
                                span: "xl" !== h ? 22 : 20,
                                offset: "xl" !== h ? 1 : 2,
                                style: {
                                    marginTop: "50px"
                                },
                                children: Object(V.jsx)(Jt.a, {
                                    offset: 1,
                                    children: Object(V.jsx)(Jt.a, {
                                        className: "gfg_home_page_carousel_skeleton_spaces",
                                        span: 23,
                                        children: Object(V.jsxs)(Qt.a, {
                                            style: {
                                                border: "2px solid #EEEEEE",
                                                borderRadius: "13px"
                                            },
                                            wrap: !0,
                                            children: [Object(V.jsx)(Jt.a, {
                                                className: "gfg_home_page_carousel_height",
                                                span: "xl" !== h && "lg" !== h && "md" !== h && "sm" !== h ? 24 : 14,
                                                children: Object(V.jsx)(Kt.a.Avatar, {
                                                    className: "gfg_home_page_carousel_height ant-col-24 gfg_home_page_carousel_skeleton",
                                                    active: !0,
                                                    shape: "square",
                                                    style: {
                                                        minWidth: "100%",
                                                        minHeight: "100%",
                                                        display: "block !important"
                                                    }
                                                })
                                            }), Object(V.jsx)(Jt.a, {
                                                className: "gfg_home_page_carousel_height",
                                                span: "xl" !== h && "lg" !== h && "md" !== h && "sm" !== h ? 24 : 10,
                                                style: {
                                                    overflow: "hidden",
                                                    padding: "5px"
                                                },
                                                children: Object(V.jsx)(Kt.a, {
                                                    active: !0
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                gs = function() {
                    var e, t, s = document.getElementsByClassName("gfg_home_topic_cards").item(0),
                        a = !1;
                    s && (s.addEventListener("mousedown", (function(c) {
                        a = !0, s.classList.add("active"), e = c.pageX - s.offsetLeft, t = s.scrollLeft
                    })), s.addEventListener("mouseleave", (function() {
                        a = !1, s.classList.remove("active")
                    })), s.addEventListener("mouseup", (function() {
                        a = !1, s.classList.remove("active")
                    })), s.addEventListener("mousemove", (function(c) {
                        if (a) {
                            c.preventDefault();
                            var n = 3 * (c.pageX - s.offsetLeft - e);
                            s.scrollLeft = t - n
                        }
                    })))
                },
                us = ["checkForNavigationDisability", "scrollAhead", "scrollBack"],
                js = [
                    [{
                        color: "blue",
                        topicName: "Array",
                        url: "auth-dashboard-uploads/dsa1.png",
                        slug: "array-data-structure/"
                    }, {
                        color: "blue",
                        topicName: "Analysis of Algo",
                        url: "auth-dashboard-uploads/dsa2.png",
                        slug: "asymptotic-notation-and-analysis-based-on-input-size-of-algorithms/"
                    }, {
                        color: "blue",
                        topicName: "Linked List",
                        url: "auth-dashboard-uploads/dsa3.png",
                        slug: "data-structures/linked-list/"
                    }, {
                        color: "blue",
                        topicName: "Searching Algo",
                        url: "auth-dashboard-uploads/dsa4.png",
                        slug: "searching-algorithms/"
                    }, {
                        color: "blue",
                        topicName: "Stack",
                        url: "auth-dashboard-uploads/dsa1.png",
                        slug: "stack-data-structure/"
                    }, {
                        color: "blue",
                        topicName: "Sorting Algo",
                        url: "auth-dashboard-uploads/dsa2.png",
                        slug: "sorting-algorithms/"
                    }, {
                        color: "blue",
                        topicName: "Queue",
                        url: "auth-dashboard-uploads/dsa3.png",
                        slug: "queue-data-structure/"
                    }, {
                        color: "blue",
                        topicName: "Graph Algo",
                        url: "auth-dashboard-uploads/dsa4.png",
                        slug: "graph-data-structure-and-algorithms/"
                    }]
                ],
                hs = function(e) {
                    return Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Jt.a, {
                            className: "xl" === e.breakpoint || "lg" === e.breakpoint || "md" === e.breakpoint ? "gfg_home_topic_xl homepage_single_card" : "gfg_home_topic_scroll homepage_single_card",
                            style: {
                                marginRight: "1%"
                            },
                            children: Object(V.jsx)(Ht.a, {
                                className: "gfg_home_page_topic_card",
                                hoverable: !0,
                                cover: Object(V.jsx)("div", {
                                    className: "gfg_home_page_topic_card_cover",
                                    children: Object(V.jsx)("a", {
                                        href: "".concat(m.GFG_SITE_URL).concat(e.slug, "?ref=home-articlecards"),
                                        children: Object(V.jsxs)(Qt.a, {
                                            className: "gfg_home_topic_".concat(e.color),
                                            style: {
                                                height: "180px",
                                                borderRadius: "12px",
                                                width: "100%"
                                            },
                                            children: [Object(V.jsx)(Jt.a, {
                                                span: 16,
                                                style: {
                                                    zIndex: "2"
                                                },
                                                children: Object(V.jsx)(Qt.a, {
                                                    className: "font-primary",
                                                    style: {
                                                        color: "#FFFFFF",
                                                        fontSize: "25px",
                                                        paddingLeft: "4%",
                                                        paddingTop: "4%"
                                                    },
                                                    children: e.topic
                                                })
                                            }), Object(V.jsx)(Qt.a, {
                                                style: {
                                                    position: "absolute",
                                                    height: "100%",
                                                    width: "inherit"
                                                },
                                                children: Object(V.jsx)(Jt.a, {
                                                    span: 24,
                                                    className: "gfg_home_page_cards_image",
                                                    children: Object(V.jsx)(is.a, {
                                                        preview: !1,
                                                        style: {
                                                            height: "180px",
                                                            width: "-webkit-fill-available !important",
                                                            borderRadius: "15px"
                                                        },
                                                        src: f + e.url
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                ms = function(e) {
                    var t = e.checkForNavigationDisability,
                        s = e.scrollAhead,
                        c = e.scrollBack,
                        n = Object(ee.a)(e, us),
                        i = Object(a.useRef)(),
                        r = {
                            xl: "8",
                            lg: "8",
                            md: "8",
                            sm: "8",
                            xs: "8"
                        },
                        o = $t(),
                        l = [];
                    return js[0].forEach((function(e) {
                        return l.length < r[o] && l.push(Object(V.jsx)(hs, {
                            color: e.color,
                            topic: e.topicName,
                            url: e.url,
                            breakpoint: o,
                            slug: e.slug
                        }))
                    })), Object(a.useEffect)((function() {
                        gs()
                    }), []), Object(a.useEffect)((function() {
                        return i.current && (i.current.addEventListener("scroll", (function() {
                                return t(0, "Topic", i)
                            })), t(0, "Topic", i)),
                            function() {
                                i.current.removeEventListener("scroll")
                            }
                    }), []), Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Qt.a, {
                            className: "gfg_view_all",
                            children: Object(V.jsx)(Jt.a, {
                                className: "gfg_home_topic_outer_height ".concat(n.flag ? "gfg_home_topic_outer_height_algo" : ""),
                                span: "xl" !== o ? "sm" === o || "xs" === o ? 23 : 22 : 20,
                                offset: "xl" !== o ? "sm" === o || "xs" === o ? 0 : 1 : 2,
                                children: Object(V.jsxs)(Jt.a, {
                                    offset: 1,
                                    children: [Object(V.jsx)(Jt.a, {
                                        span: 23,
                                        children: Object(V.jsxs)(Qt.a, {
                                            justify: "space-between",
                                            children: [Object(V.jsx)(Jt.a, {
                                                className: "video-card-heading",
                                                children: Object(V.jsx)("h2", {
                                                    children: "DSA"
                                                })
                                            }), Object(V.jsx)(Xt.b, {
                                                children: Object(V.jsx)(Yt.a, {
                                                    className: "view_all_button",
                                                    shape: "round",
                                                    href: "".concat(m.GFG_SITE_URL, "learn-data-structures-and-algorithms-dsa-tutorial/"),
                                                    children: "View All"
                                                })
                                            })]
                                        })
                                    }), Object(V.jsx)(Jt.a, {
                                        span: "sm" === o || "xs" === o ? 24 : 23,
                                        children: Object(V.jsx)(Qt.a, {
                                            ref: i,
                                            wrap: !1,
                                            gutter: 10,
                                            className: "scroll_gfg gfg_home_sroll gfg_home_topic_cards gfg_home_topic_right_margin",
                                            children: l
                                        })
                                    }), Object(V.jsxs)(Jt.a, {
                                        className: "homePageCardScroller",
                                        span: "sm" === o || "xs" === o ? 24 : 23,
                                        style: {
                                            display: "flex",
                                            justifyContent: "center"
                                        },
                                        children: [Object(V.jsx)("div", {
                                            title: "Scroll Back",
                                            className: "homeCardScrollBtn leftScrollTopicCard",
                                            onClick: function() {
                                                return c(i, "Topic")
                                            },
                                            children: Object(V.jsx)("i", {
                                                className: "gfg-icon slide-left"
                                            })
                                        }), Object(V.jsx)("div", {
                                            title: "Scroll Ahead",
                                            className: "homeCardScrollBtn rightScrollTopicCard",
                                            onClick: function() {
                                                return s(i, "Topic")
                                            },
                                            children: Object(V.jsx)("i", {
                                                className: "gfg-icon slide-right"
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                },
                ps = s(453),
                bs = s(450),
                xs = s(239),
                fs = s.n(xs),
                _s = s(243),
                Os = s(62),
                vs = s.n(Os),
                Ns = _s.a.TabPane,
                ws = function(e) {
                    var t = e.tags.map((function(e) {
                            return Object(V.jsx)(Jt.a, {
                                className: "gfg_home_page_article_tag",
                                children: Object(V.jsx)("a", {
                                    href: e.tag_link,
                                    children: Object(V.jsx)(Jt.a, {
                                        style: {
                                            paddingLeft: "0px",
                                            paddingRight: "0px"
                                        },
                                        children: e.tag_name
                                    })
                                })
                            })
                        })),
                        s = e.breakpoint;
                    return Object(V.jsx)(Jt.a, {
                        style: {
                            marginBottom: "20px"
                        },
                        children: Object(V.jsx)(Ht.a, {
                            className: "gfg_home_page_article_background",
                            children: Object(V.jsxs)("a", {
                                href: e.link,
                                children: [Object(V.jsx)(fs.a, {
                                    title: Object(V.jsx)("div", {
                                        className: "gfg_home_page_article_meta",
                                        children: Object(V.jsx)("div", {
                                            style: {
                                                color: "var(--color-black)"
                                            },
                                            children: e.title
                                        })
                                    }),
                                    description: Object(V.jsxs)("div", {
                                        className: "gfg_home_page_article_description",
                                        children: ["xs" === s ? e.snippet.substring(0, 100) + "..." : e.snippet, Object(V.jsx)("a", {
                                            style: {
                                                color: "var(--color-gfg)"
                                            },
                                            href: e.link,
                                            children: "Read more"
                                        })]
                                    })
                                }), Object(V.jsxs)(Qt.a, {
                                    style: {
                                        marginTop: "25px"
                                    },
                                    gutter: 16,
                                    children: [Object(V.jsx)(Jt.a, {
                                        className: "gfg-icon gfg-icon_tag-primary"
                                    }), t]
                                })]
                            })
                        })
                    })
                },
                ys = function(e) {
                    var t, s = Object(a.useRef)("all+category"),
                        c = Object(a.useState)(s.current),
                        n = Object(d.a)(c, 2),
                        i = n[0],
                        r = n[1],
                        o = Object(a.useState)(1),
                        l = Object(d.a)(o, 2),
                        g = l[0],
                        u = l[1],
                        j = Object(a.useRef)(null),
                        h = i.split("+")[0],
                        p = at({
                            chip: h,
                            page: g
                        }),
                        b = p.data,
                        x = p.isLoading,
                        f = p.isError,
                        _ = p.isFetching,
                        O = it().data;
                    O && (t = O[0].page_count * O[0].page_size + O[0].remaining_post);
                    var v = e.breakpoint,
                        N = [];
                    return x || !b || f || (N = b.map((function(e) {
                        return Object(V.jsx)(ws, {
                            title: vs.a.decode(e.article_title),
                            snippet: vs.a.decode(e.article_excrpt),
                            tags: e.article_tags,
                            link: e.article_link,
                            breakpoint: v
                        })
                    }))), Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Jt.a, {
                            ref: j,
                            span: "xl" !== v ? "sm" === v || "xs" === v ? 23 : 22 : 20,
                            offset: "xl" !== v ? "sm" === v || "xs" === v ? 0 : 1 : 2,
                            children: Object(V.jsxs)(Jt.a, {
                                offset: 1,
                                className: "gfg_article_bottom gfg_home_page_article_header gfg_view_all",
                                children: [Object(V.jsx)(Jt.a, {
                                    span: 23,
                                    children: Object(V.jsxs)(Qt.a, {
                                        justify: "space-between",
                                        children: [Object(V.jsx)(Jt.a, {
                                            className: "video-card-heading",
                                            children: "Articles"
                                        }), Object(V.jsx)(Xt.b, {
                                            children: "all+category" !== i && !_ && Object(V.jsx)(Yt.a, {
                                                className: "view_all_button",
                                                shape: "round",
                                                href: "all" !== i.split("+")[0] ? m.GFG_SITE_URL + i.split("+")[1] + "/" + i.split("+")[0] + "?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=articles" : m.GFG_SITE_URL + "page/2?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=articles",
                                                children: "View All"
                                            })
                                        })]
                                    })
                                }), Object(V.jsx)(Jt.a, {
                                    className: "gfg_home_page_article_width",
                                    children: Object(V.jsx)(_s.a, {
                                        tabBarStyle: {
                                            border: "none"
                                        },
                                        onTabClick: function(e) {
                                            s.current = "all+undefined" == e ? "all+category" : e, r(s.current), u(1)
                                        },
                                        children: O && O.map((function(e) {
                                            return Object(V.jsx)(Ns, {
                                                tab: Object(V.jsx)(Jt.a, {
                                                    className: "gfg_homepage_article_scroll",
                                                    children: Object(V.jsx)(ps.a, {
                                                        className: "gfg_home_page_article_tab_pane_tag",
                                                        children: e.name
                                                    })
                                                }),
                                                children: x || f || _ ? Object(V.jsxs)(V.Fragment, {
                                                    children: [Object(V.jsx)(Kt.a, {}), Object(V.jsx)(Kt.a, {}), Object(V.jsx)(Kt.a, {}), Object(V.jsx)(Kt.a, {})]
                                                }) : N
                                            }, e.slug + "+" + ("post_tag" == e.type ? "tag" : e.type))
                                        }))
                                    })
                                }), !x && !_ && "all+category" == i && t && Object(V.jsx)(bs.a, {
                                    className: "gfg_home_page_articles_pagination",
                                    style: {
                                        textAlign: "center",
                                        paddingBottom: "30px",
                                        paddingTop: "12px"
                                    },
                                    defaultCurrent: g,
                                    onChange: function(e) {
                                        u(e), setTimeout((function() {
                                            j.current.scrollIntoView()
                                        }), 50)
                                    },
                                    total: t,
                                    defaultPageSize: 15,
                                    itemRender: function(e, t, s) {
                                        return "prev" === t ? Object(V.jsx)("a", {
                                            children: Object(V.jsx)("span", {
                                                children: "< Prev"
                                            })
                                        }) : "next" === t ? Object(V.jsx)("a", {
                                            children: Object(V.jsx)("span", {
                                                children: "Next >"
                                            })
                                        }) : s
                                    },
                                    responsive: !0
                                })]
                            })
                        })
                    })
                },
                ks = s(451),
                Ss = s(122),
                Ls = s(242),
                Cs = s.n(Ls),
                Gs = s(121),
                Es = s(95),
                Ts = function(e) {
                    var t = Object(a.useState)(S),
                        s = Object(d.a)(t, 2),
                        c = s[0],
                        n = s[1],
                        i = Object(a.useState)(null),
                        r = Object(d.a)(i, 2),
                        o = r[0],
                        l = r[1],
                        j = Object(a.useState)(!0),
                        h = Object(d.a)(j, 2),
                        p = h[0],
                        b = h[1],
                        x = Object(a.useMemo)((function() {
                            return 0 == e.trim().length
                        }), [e]),
                        f = function(t) {
                            0 == e.trim().length || x ? b(!0) : (b(!1), n(t.slice(0, 6)))
                        };
                    return Object(a.useEffect)((function() {
                        x && (n(S), b(!0))
                    }), [c]), Object(a.useEffect)(Object(u.a)(Object(g.a)().mark((function t() {
                        var s, a, c, i, r;
                        return Object(g.a)().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return i = function() {
                                        return (i = Object(u.a)(Object(g.a)().mark((function t() {
                                            var s, c, i;
                                            return Object(g.a)().wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        if (!x) {
                                                            t.next = 4;
                                                            break
                                                        }
                                                        return b(!0), n(S), t.abrupt("return");
                                                    case 4:
                                                        return t.prev = 4, t.next = 7, fetch("".concat(m.GFG_UTIL_DJANGO_CF_URL, "api/gfgsearch-suggestion/?q=").concat(e), {
                                                            signal: a
                                                        });
                                                    case 7:
                                                        return c = t.sent, t.next = 10, c.json();
                                                    case 10:
                                                        (null === (i = t.sent) || void 0 === i || null === (s = i.items) || void 0 === s ? void 0 : s.length) > 0 && !x && f(null === i || void 0 === i ? void 0 : i.items), t.next = 17;
                                                        break;
                                                    case 14:
                                                        t.prev = 14, t.t0 = t.catch(4), console.log("Error while fetching recommendations");
                                                    case 17:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t, null, [
                                                [4, 14]
                                            ])
                                        })))).apply(this, arguments)
                                    }, c = function() {
                                        return i.apply(this, arguments)
                                    }, s = new AbortController, a = s.signal, 0 == e.trim().length && (n(S), b(!0)), o && clearTimeout(o), r = setTimeout(c, 300), l(r), t.abrupt("return", (function() {
                                        return s.abort()
                                    }));
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))), [e]), {
                        suggestedData: c,
                        isDefaultRecommendationActive: p
                    }
                },
                Rs = function(e, t) {
                    return e.map((function(e) {
                        return Object(V.jsx)(Is, {
                            breakpoint: t,
                            title: e.name,
                            snippet: e.excerpt,
                            thumbnail: e.image_url,
                            link: e.link + "?ref=gcse_elastic",
                            date: null !== e && void 0 !== e && e.last_updated ? e.last_updated.substr(0, 10) : ""
                        })
                    }))
                },
                Fs = function(e, t) {
                    return e.map((function(e, s) {
                        var a, c, n;
                        return Object(V.jsx)(Is, {
                            breakpoint: t,
                            title: e.title,
                            snippet: e.snippet,
                            thumbnail: (null === (a = e.pagemap) || void 0 === a || null === (c = a.cse_thumbnail) || void 0 === c || null === (n = c[0]) || void 0 === n ? void 0 : n.src) || "".concat(f, "wp-content/cdn-uploads/gfg_200x200-min.png"),
                            link: e.link + "?ref=gcse",
                            date: null !== e && void 0 !== e && e.last_updated ? e.last_updated.substr(0, 10) : ""
                        })
                    }))
                },
                Is = function(e) {
                    var t = e.breakpoint,
                        s = e.title ? vs.a.decode(e.title) : "",
                        a = e.snippet ? vs.a.decode(e.snippet) : "";
                    return Object(V.jsxs)("div", {
                        className: "article_container",
                        children: [Object(V.jsxs)(Qt.a, {
                            gutter: 40,
                            wrap: !1,
                            children: [Object(V.jsx)(Jt.a, {
                                span: "xs" === t ? 6 : 4,
                                className: "gfg_home_page_search_image_container",
                                style: {
                                    marginTop: "auto",
                                    marginBottom: "auto",
                                    textAlign: "center"
                                },
                                children: Object(V.jsx)(is.a, {
                                    preview: !1,
                                    style: {
                                        maxWidth: "60px",
                                        maxHeight: "120px"
                                    },
                                    src: e.thumbnail || "".concat(f, "wp-content/cdn-uploads/gfg_200x200-min.png")
                                })
                            }), Object(V.jsx)(Jt.a, {
                                span: "xs" === t ? 18 : 20,
                                className: "gfg_home_page_search_single_result",
                                style: {
                                    marginLeft: "-30px"
                                },
                                children: Object(V.jsxs)(Qt.a, {
                                    style: {
                                        flexDirection: "column"
                                    },
                                    children: [Object(V.jsx)(Qt.a, {
                                        children: Object(V.jsx)("a", {
                                            className: "font-primary",
                                            style: {
                                                color: "#2f8d46",
                                                font: "normal normal bold 16px normal"
                                            },
                                            href: e.link,
                                            children: s
                                        })
                                    }), Object(V.jsx)(Qt.a, {
                                        className: "gfg_home_page_search_modal_article_meta",
                                        children: Object(V.jsxs)(Jt.a, {
                                            className: "font-primary",
                                            span: 23,
                                            style: {
                                                fontSize: "14px"
                                            },
                                            children: [e.date ? "".concat(e.date, "...") : null, " ", a, " ..."]
                                        })
                                    })]
                                })
                            })]
                        }), Object(V.jsx)(Qt.a, {
                            style: {
                                paddingTop: "15px"
                            },
                            className: "gfg_home_page_search_result_seperator",
                            children: Object(V.jsx)(Jt.a, {
                                span: 23,
                                style: {
                                    borderBottom: "1px solid #cccccc"
                                }
                            })
                        })]
                    })
                },
                As = c.a.memo((function(e) {
                    var t, s, c, n, i, r, o, l, j = st(),
                        h = Object(d.a)(j, 2),
                        m = h[0],
                        p = h[1],
                        b = p.isFetching,
                        x = p.isError,
                        f = p.data,
                        _ = lt(),
                        O = Object(d.a)(_, 2),
                        v = O[0],
                        N = O[1],
                        w = N.isFetching,
                        y = (N.isError, N.data),
                        k = Object(a.useState)(0),
                        S = Object(d.a)(k, 2),
                        L = S[0],
                        C = S[1],
                        G = Object(a.useState)("date"),
                        E = Object(d.a)(G, 2),
                        T = E[0],
                        R = E[1],
                        F = Object(a.useState)("relevance"),
                        I = Object(d.a)(F, 2),
                        A = I[0],
                        D = I[1],
                        U = Object(a.useState)(1),
                        P = Object(d.a)(U, 2),
                        B = P[0],
                        q = P[1],
                        M = Object(a.useState)(!0),
                        z = Object(d.a)(M, 2),
                        W = z[0],
                        H = z[1],
                        J = Object(a.useState)(1),
                        Q = Object(d.a)(J, 2),
                        X = Q[0],
                        Y = Q[1],
                        K = Object(a.useState)(!1),
                        Z = Object(d.a)(K, 2),
                        $ = Z[0],
                        ee = Z[1],
                        te = Object(a.useState)(!1),
                        se = Object(d.a)(te, 2),
                        ae = se[0],
                        ce = se[1],
                        ne = Object(a.useState)(!0),
                        ie = Object(d.a)(ne, 2),
                        re = ie[0],
                        oe = ie[1],
                        le = Object(a.useState)(1),
                        de = Object(d.a)(le, 2);
                    de[0], de[1];
                    Object(a.useEffect)((function() {
                        q(1), Y(1), oe(!0)
                    }), [e.value]), Object(a.useEffect)((function() {
                        ce(!1), (re || e.value) && (ae || (he(), q(1)), oe(!1))
                    }), [e.value, re]);
                    Object(a.useEffect)((function() {
                        q(1), ae || (H(!1), ee(!0), ue(1))
                    }), [e.value, ae]), Object(a.useEffect)((function() {
                        q(1), ae ? (H(!0), ee(!1), ge(1)) : re || (H(!1), ee(!0), he())
                    }), [e.value, ae, re]), Object(a.useEffect)((function() {
                        q(1), Y(1), oe(!0)
                    }), [e.value]);
                    var ge = function(t) {
                            t || (t = 1), C(1);
                            var s = {};
                            s.page = t, s.sort = T, s.type = "premium", s.query = encodeURIComponent(e.value), m(s, !0)
                        },
                        ue = function(t) {
                            t || (t = 1), C(1);
                            var s = {
                                page: t,
                                sort: A,
                                type: "premium",
                                query: encodeURIComponent(e.value)
                            };
                            Y(t), v(s)
                        },
                        je = function() {
                            var t = Object(u.a)(Object(g.a)().mark((function t() {
                                var s;
                                return Object(g.a)().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            e.value && (s = {
                                                page: "".concat(X),
                                                sort: T,
                                                type: "premium",
                                                query: encodeURIComponent(e.value)
                                            }, v(s)), ce(!0), H(!0), ee(!1);
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        he = function() {
                            var t = {
                                page: X,
                                sort: T,
                                type: "premium",
                                query: encodeURIComponent(e.value)
                            };
                            e.value && (H(!1), ee(!0), Y(X), v(t))
                        };
                    return Object(V.jsxs)(ks.a, {
                        style: {
                            height: "662px"
                        },
                        bodyStyle: {
                            overflowY: "scroll",
                            overflowX: "hidden"
                        },
                        className: "gfg_home_page_modal",
                        closable: !1,
                        width: "1009px",
                        title: Object(V.jsxs)(Jt.a, {
                            id: "gfg_home_page_modal",
                            children: [Object(V.jsx)(Qt.a, {
                                justify: "center",
                                style: {
                                    marginBottom: "10px",
                                    padding: 0,
                                    backgroundColor: "transparent"
                                },
                                className: "gfg_home_page_modal_header"
                            }), Object(V.jsxs)(Qt.a, {
                                className: "gfg_home_page_modal_meta-wrapper",
                                wrap: !1,
                                children: [Object(V.jsx)(Ds, {
                                    processSearch: e.processSearch,
                                    searchTerm: e.value
                                }), ae ? Object(V.jsxs)("div", {
                                    className: "search_result_meta_box",
                                    children: [!b && !x && f && f.response ? Object(V.jsx)(Jt.a, {
                                        className: "result_count_container"
                                    }) : null, b ? null : Object(V.jsx)(Jt.a, {
                                        className: "result_sort_container",
                                        children: Object(V.jsxs)(Qt.a, {
                                            className: "gfg_home_page_modal_sort-wrapper",
                                            gutter: 10,
                                            wrap: !0,
                                            children: [Object(V.jsx)(Jt.a, {
                                                className: "gfg_home_page_modal_sort-label",
                                                children: "Sort By:"
                                            }), Object(V.jsx)(Jt.a, {
                                                children: Object(V.jsxs)(Ss.a, {
                                                    style: {
                                                        width: "100px"
                                                    },
                                                    defaultValue: T,
                                                    size: "small",
                                                    onChange: function(e) {
                                                        R(e), q(1)
                                                    },
                                                    children: [Object(V.jsx)(Gs.Option, {
                                                        value: "date",
                                                        children: "Date"
                                                    }), Object(V.jsx)(Gs.Option, {
                                                        value: "relevance",
                                                        children: "Relevance"
                                                    })]
                                                })
                                            })]
                                        })
                                    })]
                                }) : Object(V.jsx)(Jt.a, {
                                    className: "result_sort_container",
                                    children: Object(V.jsxs)(Qt.a, {
                                        className: "gfg_home_page_modal_sort-wrapper",
                                        gutter: 10,
                                        wrap: !0,
                                        children: [Object(V.jsx)(Jt.a, {
                                            className: "gfg_home_page_modal_sort-label",
                                            children: "Sort By:"
                                        }), Object(V.jsx)(Jt.a, {
                                            children: Object(V.jsxs)(Ss.a, {
                                                style: {
                                                    width: "100px"
                                                },
                                                defaultValue: A,
                                                size: "small",
                                                onChange: function(e) {
                                                    D(e), q(1)
                                                },
                                                children: [Object(V.jsx)(Gs.Option, {
                                                    value: "date",
                                                    children: "Date"
                                                }), Object(V.jsx)(Gs.Option, {
                                                    value: "relevance",
                                                    children: "Relevance"
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })]
                        }),
                        visible: e.visible,
                        onCancel: function() {
                            C(0), e.cancel(), q(1)
                        },
                        footer: !1,
                        children: [Object(V.jsx)("div", {
                            style: {
                                marginTop: "-18px",
                                color: "#676767",
                                fontFamily: "Arial, sans-serif",
                                fontSize: "13px"
                            },
                            children: !ae && (null === y || void 0 === y || null === (t = y.response) || void 0 === t ? void 0 : t.items) && (null === y || void 0 === y || null === (s = y.response) || void 0 === s ? void 0 : s.items.length) > 0 && Object(V.jsxs)("p", {
                                style: {
                                    marginBottom: "6px"
                                },
                                children: [Object(V.jsx)("a", {
                                    href: "javascript:void(0);",
                                    onClick: function() {
                                        return je()
                                    },
                                    style: {
                                        textDecoration: "underline"
                                    },
                                    children: "Click here"
                                }), Object(V.jsx)("span", {
                                    children: " for recent suggestions"
                                })]
                            })
                        }), $ && y ? Object(V.jsx)(V.Fragment, {
                            children: 1 === L && w ? Object(V.jsx)("div", {
                                className: "loading-indicator",
                                children: Object(V.jsx)(Es.a, {
                                    style: {
                                        fontSize: 24,
                                        marginLeft: "50%",
                                        marginTop: "30%"
                                    },
                                    spin: !0
                                })
                            }) : Object(V.jsxs)(V.Fragment, {
                                children: [null !== y && void 0 !== y && null !== (c = y.response) && void 0 !== c && c.items && (null === y || void 0 === y || null === (n = y.response) || void 0 === n ? void 0 : n.items.length) > 0 ? Fs(y.response.items, e.breakpoint) : Object(V.jsx)("div", {
                                    className: "custom_no_results_color",
                                    children: "No Results Found"
                                }), (null === y || void 0 === y || null === (i = y.response) || void 0 === i || null === (r = i.searchInformation) || void 0 === r ? void 0 : r.totalResults) && (null === y || void 0 === y || null === (o = y.response) || void 0 === o || null === (l = o.searchInformation) || void 0 === l ? void 0 : l.totalResults) > 10 && Object(V.jsx)(bs.a, {
                                    style: {
                                        paddingLeft: "20px",
                                        paddingRight: "20px",
                                        textAlign: "center"
                                    },
                                    current: X,
                                    onChange: function(e) {
                                        Y(e), ue(e)
                                    },
                                    total: 10,
                                    pageSize: 1,
                                    showSizeChanger: !1,
                                    responsive: !0
                                })]
                            })
                        }) : null, W && (b || x ? Object(V.jsx)(Es.a, {
                            style: {
                                fontSize: 24,
                                marginLeft: "50%",
                                marginTop: "30%"
                            },
                            spin: !0
                        }) : f && f.response ? 1 === L && f.response.items ? Rs(f.response.items, e.breakpoint) : Object(V.jsx)("div", {
                            className: "custom_no_results_color",
                            children: "No Results Found"
                        }) : Object(V.jsx)(Es.a, {
                            style: {
                                fontSize: 24,
                                marginLeft: "50%",
                                marginTop: "30%"
                            },
                            spin: !0
                        })), !b && !x && f && f.response && f.response.totalResults && parseInt(f.response.totalResults) >= 10 && 1 === L && W ? Object(V.jsx)(bs.a, {
                            style: {
                                paddingLeft: "20px",
                                paddingRight: "20px",
                                textAlign: "center"
                            },
                            current: B,
                            onChange: function(e) {
                                q(e), ge(e)
                            },
                            total: parseInt(f.response.totalResults),
                            showSizeChanger: !1,
                            responsive: !0
                        }) : null]
                    })
                })),
                Ds = function(e) {
                    var t = e.processSearch,
                        s = e.searchTerm,
                        c = Object(a.useState)(s),
                        n = Object(d.a)(c, 2),
                        i = n[0],
                        r = n[1],
                        o = Object(a.useState)(!1),
                        l = Object(d.a)(o, 2),
                        g = l[0],
                        u = l[1],
                        j = Object(a.useCallback)((function(e) {
                            r(e), 0 != e.trim().length && t(e.trim())
                        }), [s]),
                        h = document.getElementById("searchBox");
                    return h && h.addEventListener("keyup", (function(e) {
                        "Enter" === e.key && h.blur()
                    })), Object(V.jsx)("div", {
                        className: "modal_search_bar",
                        children: Object(V.jsxs)("div", {
                            style: {
                                position: "relative"
                            },
                            children: [Object(V.jsxs)("form", {
                                className: "modal_search_bar_input_box_wrapper",
                                onSubmit: function(e) {
                                    e.preventDefault(), u(!1), 0 != i.trim().length && t(i.trim())
                                },
                                children: [Object(V.jsx)("i", {
                                    className: "gfg-icon gfg-homepage-search-icon"
                                }), Object(V.jsx)("input", {
                                    value: i,
                                    type: "text",
                                    id: "searchBox",
                                    placeholder: "Search for anything",
                                    onChange: function(e) {
                                        return r(e.target.value)
                                    },
                                    onSearch: j,
                                    onFocus: function(e) {
                                        return u(!0)
                                    },
                                    onClick: function(e) {
                                        return u(!0)
                                    },
                                    onBlur: function(e) {
                                        return setTimeout((function() {
                                            u(!1)
                                        }), 200)
                                    }
                                })]
                            }), Object(V.jsx)(Ps, {
                                inputValue: i,
                                onSearchAction: j,
                                hide: !g
                            })]
                        })
                    })
                },
                Us = function(e) {
                    var t = e.inputValue,
                        s = e.onSearchAction,
                        a = e.hide,
                        c = Ts(t),
                        n = c.suggestedData,
                        i = c.isDefaultRecommendationActive;
                    return Object(V.jsxs)(Qt.a, {
                        style: {
                            display: a ? "none" : ""
                        },
                        justify: "center",
                        className: "gfg_home_page_search_suggestion_box",
                        children: [Object(V.jsx)("div", {
                            className: "gfg_home_page_search_suggestion_box_collection",
                            style: {
                                borderRadius: i ? "0 0 9px 9px" : "0"
                            },
                            children: (null === n || void 0 === n ? void 0 : n.length) > 0 ? n.slice(0, 6).map((function(e) {
                                return Object(V.jsxs)("div", {
                                    className: "gfg_home_page_search_suggestion_box_collection_item ".concat(i ? "gfg_home_page_search_suggestion_box_collection_color_highlighted" : ""),
                                    onClick: function() {
                                        return s(vs.a.decode(e.name))
                                    },
                                    children: [Object(V.jsx)("i", {
                                        className: "gfg-icon gfg-homepage-search-icon"
                                    }), Object(V.jsx)("span", {
                                        children: vs.a.decode(e.name)
                                    })]
                                })
                            })) : Object(V.jsx)("div", {
                                className: "gfg_home_page_search_suggestion_box_collection_item",
                                children: "No Suggestions"
                            })
                        }), i ? null : Object(V.jsx)("div", {
                            className: "gfg_home_page_search_suggestion_box_see_more",
                            children: Object(V.jsx)("span", {
                                onClick: function() {
                                    return s(t)
                                },
                                children: "See all results"
                            })
                        })]
                    })
                },
                Ps = function(e) {
                    var t = e.inputValue,
                        s = e.onSearchAction,
                        a = e.hide,
                        c = Ts(t),
                        n = c.suggestedData,
                        i = c.isDefaultRecommendationActive;
                    return Object(V.jsx)(Qt.a, {
                        style: {
                            display: a ? "none" : ""
                        },
                        justify: "center",
                        className: "gfg_home_page_search_suggestion_box",
                        children: Object(V.jsx)("div", {
                            className: "gfg_home_page_search_suggestion_box_collection",
                            style: {
                                borderRadius: i ? "0 0 9px 9px" : "0"
                            },
                            children: (null === n || void 0 === n ? void 0 : n.length) > 0 ? n.slice(0, 6).map((function(e) {
                                return Object(V.jsxs)("div", {
                                    className: "gfg_home_page_search_suggestion_box_collection_item ".concat(i ? "gfg_home_page_search_suggestion_box_collection_color_highlighted" : ""),
                                    onClick: function() {
                                        return s(vs.a.decode(e.name))
                                    },
                                    children: [Object(V.jsx)("i", {
                                        className: "gfg-icon gfg-homepage-search-icon"
                                    }), Object(V.jsx)("span", {
                                        children: vs.a.decode(e.name)
                                    })]
                                })
                            })) : Object(V.jsx)("div", {
                                className: "gfg_home_page_search_suggestion_box_collection_item",
                                children: "No Suggestions"
                            })
                        })
                    })
                },
                Bs = function(e) {
                    var t = e.breakpoint,
                        s = Object(a.useState)(0),
                        c = Object(d.a)(s, 2),
                        n = c[0],
                        i = c[1],
                        r = Object(a.useState)(0),
                        o = Object(d.a)(r, 2),
                        l = o[0],
                        g = o[1],
                        u = Object(a.useState)(""),
                        j = Object(d.a)(u, 2),
                        h = j[0],
                        m = j[1],
                        p = Object(a.useState)(!1),
                        b = Object(d.a)(p, 2),
                        x = b[0],
                        f = b[1],
                        _ = Object(a.useState)(""),
                        O = Object(d.a)(_, 2),
                        v = O[0],
                        N = O[1],
                        w = Object(a.useState)(""),
                        y = Object(d.a)(w, 2),
                        k = y[0],
                        S = y[1],
                        L = Object(a.useState)(!1),
                        C = Object(d.a)(L, 2),
                        G = C[0],
                        E = C[1],
                        T = ["Data Structures and Algorithms", "Complete Interview Preparation", "Must Do SDE Sheet Practice", "Learn Python, Java, C++", "GeeksforGeeks Courses"],
                        R = Object(a.useCallback)((function() {
                            f(!1), N(""), S("")
                        }), [k]),
                        F = Object(a.useCallback)((function(e) {
                            0 != e.trim().length && (E(!1), f(!0), I(e.trim()))
                        }), [k]),
                        I = Object(a.useCallback)((function(e) {
                            k != e && S(e)
                        }), [k]);
                    return Object(a.useEffect)((function() {
                        var e = setTimeout((function() {
                            g(l + 1), l > T[n].length && (g(0), i((n + 1) % T.length), m("")), m(T[n].substr(0, l))
                        }), 100);
                        return function() {
                            return clearTimeout(e)
                        }
                    })), Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsxs)(Jt.a, {
                            children: [Object(V.jsx)(Qt.a, {
                                justify: "center",
                                className: "gfg_home_page_search_heading",
                                children: "Hello, What Do You Want To Learn?"
                            }), Object(V.jsx)(Qt.a, {
                                justify: "center",
                                className: "gfg_home_page_search_input",
                                children: Object(V.jsx)(Cs.a, {
                                    placeholder: h,
                                    allowClear: !0,
                                    defaultValue: v,
                                    enterButton: Object(V.jsx)(Yt.a, {
                                        children: "Search"
                                    }),
                                    className: "gfg_home_page_search gfg_home_page_search_search_bar_width ".concat(G ? "zero_border_bottom" : ""),
                                    size: "large",
                                    value: v,
                                    style: {
                                        height: "10px"
                                    },
                                    onSearch: F,
                                    onChange: function(e) {
                                        return N(e.target.value)
                                    },
                                    onFocus: function(e) {
                                        return E(!0)
                                    },
                                    onBlur: function(e) {
                                        return setTimeout((function() {
                                            E(!1)
                                        }), 200)
                                    }
                                })
                            }), Object(V.jsx)(Us, {
                                inputValue: v,
                                onSearchAction: F,
                                hide: !G
                            }), k.length ? Object(V.jsx)(As, {
                                breakpoint: t,
                                cancel: R,
                                visible: x,
                                value: k,
                                processSearch: I
                            }) : ""]
                        })
                    })
                },
                qs = {
                    xl: "50",
                    lg: "30"
                },
                Vs = [{
                    post_title: "Explore Practice Problems",
                    excerpt: "Solve DSA Problems. Filter based on topic tags and company tags. Get curated problem lists by GFG experts.",
                    url: "".concat(m.GFG_PRACTICE_URL, "explore?page=1&curated[]=1&sortBy=submissions&curated_names[]=SDE%20Sheet/")
                }, {
                    post_title: "Interview Preparation",
                    excerpt: "An interview-centric course designed to prepare you for the role of SDE for both product and service based companies. A placement preparation pack built with years of expertise. Prepare C++, Java, DSA, CS Theory concepts and much more!",
                    url: "".concat(m.GFG_SITE_URL, "courses/complete-interview-preparation/")
                }],
                Ms = [{
                    post_title: "Interview Preparation",
                    excerpt: "An interview-centric course designed to prepare you for the role of SDE for both product and service based companies. A placement preparation pack built with years of expertise. Prepare C++, Java, DSA, CS Theory concepts and much more!",
                    url: "".concat(m.GFG_SITE_URL, "courses/complete-interview-preparation/")
                }, {
                    post_title: "DSA Self Paced",
                    excerpt: " Most popular course on DSA trusted by over 75,000 students! Built with years of experience by industry experts and gives you a complete package",
                    url: "".concat(m.GFG_SITE_URL, "courses/dsa-self-paced/")
                }, {
                    post_title: "DSA in Python - Self Paced",
                    excerpt: " Most popular course on DSA trusted by over 75,000 students! Built with years of experience by industry experts and gives you a complete package",
                    url: "".concat(m.GFG_SITE_URL, "courses/Data-Structures-With-Python/")
                }],
                zs = ["".concat(f, "auth-dashboard-uploads/read.png"), "".concat(f, "auth-dashboard-uploads/Homepage-Article-2.png"), "".concat(f, "auth-dashboard-uploads/Homepage-Article-3.png")],
                Ws = function(e) {
                    var t = Object(a.useState)(!1),
                        s = Object(d.a)(t, 2),
                        c = s[0],
                        n = s[1],
                        i = JSON.parse(localStorage.getItem("loginData")),
                        r = localStorage.getItem("previous"),
                        o = localStorage.getItem("prev_post_title");
                    Object(a.useEffect)((function() {
                        i && 1 == i.isLoggedIn && n(!0)
                    }));
                    var l = rt({
                            prevPostId: r,
                            prevPostTitle: o
                        }),
                        g = l.data,
                        u = l.isLoading,
                        j = ot(void 0, {
                            skip: 0 == c
                        }),
                        h = j.data,
                        m = j.isLoading,
                        p = Object(a.useState)(null),
                        b = Object(d.a)(p, 2),
                        x = b[0],
                        _ = b[1],
                        O = Object(a.useState)(null),
                        v = Object(d.a)(O, 2),
                        N = v[0],
                        w = v[1],
                        y = e.breakpoint;
                    zs[0] = "".concat(f, "xs" == y ? "auth-dashboard-uploads/image-%2822%29.png" : "auth-dashboard-uploads/read.png"), Object(a.useEffect)((function() {
                        var e = Ms[Math.floor(Math.random() * Ms.length)];
                        _(e)
                    }), []), Object(a.useEffect)((function() {
                        if (h && h.courses.length > 0) {
                            var e = Object(ye.a)(h.courses);
                            e.sort(S), w(e[0])
                        }
                    }), [h]);
                    var k = function(e) {
                            var t;
                            return "recommendCourse" == e.type && (t = e.post.short_description.replace(/(<([^>]+)>)/gi, "")), Object(V.jsx)(V.Fragment, {
                                children: Object(V.jsxs)(Qt.a, {
                                    className: "search_bar_card_body",
                                    children: [Object(V.jsx)(Jt.a, {
                                        span: 24,
                                        className: "gfg_home_page_search_card_title_button_gap",
                                        children: Object(V.jsx)("div", {
                                            className: "video-card-content gfg_home_page_search_card_title",
                                            children: "recommendCourse" == e.type ? e.post.course_name : e.post.post_title
                                        })
                                    }), Object(V.jsx)(Jt.a, {
                                        className: "gfg_home_page_search_card_description",
                                        span: 24,
                                        children: "recommendCourse" == e.type ? t.slice(0, 100) : e.post.excerpt.slice(0, 100) + "..."
                                    })]
                                })
                            })
                        },
                        S = function(e, t) {
                            return +t.visit_count - +e.visit_count
                        },
                        L = function() {
                            try {
                                var e = [];
                                return null != N && e.push(Object(V.jsx)(k, {
                                    type: "recommendCourse",
                                    post: N
                                })), e[0]
                            } catch (s) {
                                var t = [];
                                return t.push(Object(V.jsx)(k, {
                                    type: "localStorage",
                                    post: Vs[1]
                                })), t[0]
                            }
                        },
                        C = function(e) {
                            return Object(V.jsx)(V.Fragment, {
                                children: Object(V.jsx)(Jt.a, {
                                    style: {
                                        paddingBottom: "10px"
                                    },
                                    className: "xl" !== y && "lg" !== y && "md" !== y && "sm" !== y ? "ant-col-24" : "ant-col-8",
                                    children: Object(V.jsx)("a", {
                                        href: g && g.url,
                                        children: Object(V.jsx)(Ht.a, {
                                            className: "gfg_home_page_search_card gfg_home_page_article_background",
                                            hoverable: !0,
                                            style: {
                                                borderRadius: "10px",
                                                overflow: "hidden"
                                            },
                                            cover: Object(V.jsx)(V.Fragment, {
                                                children: Object(V.jsxs)(Qt.a, {
                                                    className: "gfg_home_page_search_card_cover_wrap",
                                                    wrap: "xl" === y || "md" === y || "lg" === y || "sm" === y,
                                                    children: [Object(V.jsx)(Jt.a, {
                                                        span: "xl" !== y && "md" !== y && "lg" !== y && "sm" !== y ? 8 : 24,
                                                        children: Object(V.jsx)("img", {
                                                            className: "gfg_home_page_search_image",
                                                            src: e.image
                                                        })
                                                    }), u || !g ? Object(V.jsx)(V.Fragment, {
                                                        children: Object(V.jsx)(Jt.a, {
                                                            span: 24,
                                                            children: Object(V.jsx)(Qt.a, {
                                                                wrap: !0,
                                                                className: "gfg_home_page_for_you_skeleton",
                                                                children: Object(V.jsx)(Kt.a, {
                                                                    active: !0
                                                                })
                                                            })
                                                        })
                                                    }) : Object(V.jsxs)(Qt.a, {
                                                        className: "search_bar_card_body",
                                                        children: [Object(V.jsx)(Jt.a, {
                                                            span: 24,
                                                            className: "gfg_home_page_search_card_title_button_gap",
                                                            children: Object(V.jsx)("div", {
                                                                className: "video-card-content gfg_home_page_search_card_title",
                                                                children: Object(V.jsx)("div", {
                                                                    className: "gfg_home_page_search_card_title_anchor",
                                                                    children: vs.a.decode(g.post_title)
                                                                })
                                                            })
                                                        }), Object(V.jsx)(Jt.a, {
                                                            className: "gfg_home_page_search_card_description",
                                                            span: 24,
                                                            children: vs.a.decode(g.excerpt) + "..."
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        },
                        G = function(e) {
                            return Object(V.jsx)(V.Fragment, {
                                children: Object(V.jsx)(Jt.a, {
                                    style: {
                                        paddingBottom: "10px"
                                    },
                                    className: "xl" !== y && "lg" !== y && "md" !== y && "sm" !== y ? "ant-col-24" : "ant-col-8",
                                    children: Object(V.jsx)("a", {
                                        href: e.post.url + "?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=first_section",
                                        children: Object(V.jsx)(Ht.a, {
                                            className: "gfg_home_page_search_card gfg_home_page_article_background",
                                            hoverable: !0,
                                            style: {
                                                borderRadius: "10px",
                                                overflow: "hidden"
                                            },
                                            cover: Object(V.jsx)(V.Fragment, {
                                                children: Object(V.jsxs)(Qt.a, {
                                                    className: "gfg_home_page_search_card_cover_wrap",
                                                    wrap: "xl" === y || "md" === y || "lg" === y || "sm" === y,
                                                    children: [Object(V.jsx)(Jt.a, {
                                                        span: "xl" !== y && "md" !== y && "lg" !== y && "sm" !== y ? 8 : 24,
                                                        children: Object(V.jsx)("img", {
                                                            className: "gfg_home_page_search_image",
                                                            src: e.image
                                                        })
                                                    }), Object(V.jsxs)(Qt.a, {
                                                        className: "search_bar_card_body",
                                                        children: [Object(V.jsx)(Jt.a, {
                                                            span: 24,
                                                            className: "gfg_home_page_search_card_title_button_gap",
                                                            children: Object(V.jsx)("div", {
                                                                className: "video-card-content gfg_home_page_search_card_title",
                                                                children: e.post.post_title
                                                            })
                                                        }), Object(V.jsx)(Jt.a, {
                                                            className: "gfg_home_page_search_card_description",
                                                            span: 24,
                                                            children: e.post.excerpt.slice(0, 100) + "..."
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        },
                        E = function(e) {
                            return Object(V.jsx)(V.Fragment, {
                                children: Object(V.jsx)(Jt.a, {
                                    style: {
                                        paddingBottom: "10px"
                                    },
                                    className: "xl" !== y && "lg" !== y && "md" !== y && "sm" !== y ? "ant-col-24" : "ant-col-8",
                                    children: Object(V.jsx)("a", {
                                        href: N ? N.course_url + "?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=first_section" : x ? x.url + "?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=first_section" : "",
                                        children: Object(V.jsx)(Ht.a, {
                                            className: "gfg_home_page_search_card gfg_home_page_article_background",
                                            hoverable: !0,
                                            style: {
                                                borderRadius: "10px",
                                                overflow: "hidden"
                                            },
                                            cover: Object(V.jsx)(V.Fragment, {
                                                children: Object(V.jsxs)(Qt.a, {
                                                    className: "gfg_home_page_search_card_cover_wrap",
                                                    wrap: "xl" === y || "md" === y || "lg" === y || "sm" === y,
                                                    children: [Object(V.jsx)(Jt.a, {
                                                        span: "xl" !== y && "md" !== y && "lg" !== y && "sm" !== y ? 8 : 24,
                                                        children: Object(V.jsx)("img", {
                                                            className: "gfg_home_page_search_image",
                                                            src: e.image
                                                        })
                                                    }), i && i.isLoggedIn ? m || !h ? Object(V.jsx)(V.Fragment, {
                                                        children: Object(V.jsx)(Jt.a, {
                                                            span: 24,
                                                            children: Object(V.jsx)(Qt.a, {
                                                                wrap: !0,
                                                                className: "gfg_home_page_for_you_skeleton",
                                                                children: Object(V.jsx)(Kt.a, {
                                                                    active: !0
                                                                })
                                                            })
                                                        })
                                                    }) : h.courses.length > 0 ? L() : x ? Object(V.jsx)(k, {
                                                        type: "localStorage",
                                                        post: x
                                                    }) : Object(V.jsx)(V.Fragment, {
                                                        children: Object(V.jsx)(Jt.a, {
                                                            span: 24,
                                                            children: Object(V.jsx)(Qt.a, {
                                                                wrap: !0,
                                                                className: "gfg_home_page_for_you_skeleton",
                                                                children: Object(V.jsx)(Kt.a, {
                                                                    active: !0
                                                                })
                                                            })
                                                        })
                                                    }) : x ? Object(V.jsx)(k, {
                                                        type: "localStorage",
                                                        post: x
                                                    }) : Object(V.jsx)(V.Fragment, {
                                                        children: Object(V.jsx)(Jt.a, {
                                                            span: 24,
                                                            children: Object(V.jsx)(Qt.a, {
                                                                wrap: !0,
                                                                className: "gfg_home_page_for_you_skeleton",
                                                                children: Object(V.jsx)(Kt.a, {
                                                                    active: !0
                                                                })
                                                            })
                                                        })
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        };
                    return Object(a.useEffect)((function() {}), [g]), Object(V.jsxs)(V.Fragment, {
                        children: [Object(V.jsx)(Qt.a, {
                            className: "gfg_home_page_search_background_outer_small",
                            children: Object(V.jsx)(Jt.a, {
                                className: "gfg_home_page_search_card_outer gfg_home_page_search_background_outer_small",
                                span: "xl" !== y ? 22 : 20,
                                offset: "xl" !== y ? 1 : 2
                            })
                        }), Object(V.jsx)(Qt.a, {
                            children: Object(V.jsx)(Jt.a, {
                                className: "gfg_home_page_search_card_gradient",
                                style: {
                                    backgroundColor: "#FFF"
                                },
                                span: "xl" !== y ? 22 : 20,
                                offset: "xl" !== y ? 1 : 2,
                                children: Object(V.jsx)(Jt.a, {
                                    className: "gfg_home_page_search_card_small_positioning",
                                    offset: "sm" === y || "xs" === y ? 0 : 1,
                                    children: Object(V.jsx)(Jt.a, {
                                        span: "sm" === y || "xs" === y ? 24 : 23,
                                        children: Object(V.jsxs)(Qt.a, {
                                            wrap: !0,
                                            gutter: qs[y] ? qs[y] : 22,
                                            children: [Object(V.jsx)(C, {
                                                type: "readCard",
                                                image: zs[0]
                                            }), Object(V.jsx)(G, {
                                                type: "practiceCard",
                                                post: Vs[0],
                                                image: "".concat(f, "xs" != y ? "auth-dashboard-uploads/practice.png" : "auth-dashboard-uploads/image-%2821%29.png"),
                                                event_category: "homepage_foryou_card_two"
                                            }), Object(V.jsx)(E, {
                                                type: "learnCard",
                                                image: "".concat(f, "xs" != y ? "auth-dashboard-uploads/learn.png" : "auth-dashboard-uploads/image-%2823%29.png")
                                            })]
                                        })
                                    })
                                })
                            })
                        })]
                    })
                },
                Hs = function(e) {
                    return Object(V.jsx)(Jt.a, {
                        className: "gfg_home_page_chips_button_header",
                        children: Object(V.jsx)(Yt.a, {
                            className: "gfg_home_page_chips_button",
                            onClick: function(t) {
                                return ts(t, "clickopen", "".concat(e.eventCategory))
                            },
                            children: Object(V.jsx)("a", {
                                href: e.url,
                                children: e.name
                            })
                        })
                    })
                },
                Js = function(e) {
                    var t = Object(a.useState)(!1),
                        s = Object(d.a)(t, 2),
                        c = s[0],
                        n = s[1],
                        i = nt(void 0, {
                            skip: 0 == c
                        }),
                        r = i.data,
                        o = [];
                    if (!i.isLoading && r)
                        for (var l = 0; l < r.length; l++) {
                            var g = r[l],
                                u = g.title.split("-"),
                                j = void 0;
                            j = u[0].length < 16 && u[1] && u[1].length > 0 ? u[0] + "-" + u[1] : u[0], o.push(Object(V.jsx)(Hs, {
                                name: j,
                                url: g.url,
                                eventCategory: "homepage_chips_card" + (l + 1)
                            }))
                        }
                    if ("undefined" !== typeof window && window.rightBarRes && window.rightBarRes.length > 0)
                        for (l = 0; l < window.rightBarRes.length; l++) {
                            var h = window.rightBarRes[l],
                                m = h.title.split("-"),
                                p = void 0;
                            p = m[0].length < 16 && m[1] && m[1].length > 0 ? m[0] + "-" + m[1] : m[0], o.push(Object(V.jsx)(Hs, {
                                name: p,
                                url: h.url,
                                eventCategory: "homepage_chips_card" + (l + 1)
                            }))
                        }
                    return Object(a.useEffect)((function() {
                        "undefined" !== typeof window && window.rightBarRes && 0 == window.rightBarRes.length && n(!0)
                    }), []), Object(V.jsx)(Jt.a, {
                        className: "gfg_home_page_chips",
                        children: 0 == o.length ? Object(V.jsx)(Jt.a, {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            },
                            children: Object(V.jsxs)(Xt.b, {
                                children: [Object(V.jsx)(Kt.a.Button, {
                                    active: !0,
                                    size: "default",
                                    className: "gfg_home_page_chips_skeleton"
                                }), Object(V.jsx)(Kt.a.Button, {
                                    active: !0,
                                    size: "default",
                                    className: "gfg_home_page_chips_skeleton"
                                }), Object(V.jsx)(Kt.a.Button, {
                                    active: !0,
                                    size: "default",
                                    className: "gfg_home_page_chips_skeleton"
                                })]
                            })
                        }) : Object(V.jsx)(Qt.a, {
                            className: "gfg_home_page_chips_header scroll_gfg gfg_home_sroll",
                            wrap: !1,
                            children: o
                        })
                    })
                },
                Qs = function() {
                    var e, t, s = document.getElementsByClassName("gfg_home_web_cards").item(0),
                        a = !1;
                    s && (s.addEventListener("mousedown", (function(c) {
                        a = !0, s.classList.add("active"), e = c.pageX - s.offsetLeft, t = s.scrollLeft
                    })), s.addEventListener("mouseleave", (function() {
                        a = !1, s.classList.remove("active")
                    })), s.addEventListener("mouseup", (function() {
                        a = !1, s.classList.remove("active")
                    })), s.addEventListener("mousemove", (function(c) {
                        if (a) {
                            c.preventDefault();
                            var n = 3 * (c.pageX - s.offsetLeft - e);
                            s.scrollLeft = t - n
                        }
                    })))
                },
                Xs = ["checkForNavigationDisability", "scrollAhead", "scrollBack"],
                Ys = [
                    [{
                        color: "orange",
                        topicName: "JavaScript",
                        url: "auth-dashboard-uploads/dev1.png",
                        slug: "javascript/"
                    }, {
                        color: "orange",
                        topicName: "ReactJs",
                        url: "auth-dashboard-uploads/dev2.png",
                        slug: "learn-reactjs/"
                    }, {
                        color: "orange",
                        topicName: "NodeJS",
                        url: "auth-dashboard-uploads/dev3.png",
                        slug: "nodejs/"
                    }, {
                        color: "orange",
                        topicName: "Angular",
                        url: "auth-dashboard-uploads/dev4.png",
                        slug: "angularjs/"
                    }, {
                        color: "orange",
                        topicName: "Django",
                        url: "auth-dashboard-uploads/dev1.png",
                        slug: "django-tutorial/"
                    }, {
                        color: "orange",
                        topicName: "NextJS",
                        url: "auth-dashboard-uploads/dev2.png",
                        slug: "nextjs/"
                    }, {
                        color: "orange",
                        topicName: "ExpressJS",
                        url: "auth-dashboard-uploads/dev3.png",
                        slug: "express-js/"
                    }, {
                        color: "orange",
                        topicName: "Tailwind CSS",
                        url: "auth-dashboard-uploads/dev4.png",
                        slug: "tailwind-css/"
                    }]
                ],
                Ks = function(e) {
                    return Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Jt.a, {
                            className: "xl" === e.breakpoint || "lg" === e.breakpoint || "md" === e.breakpoint ? "gfg_home_topic_xl homepage_single_card" : "gfg_home_topic_scroll homepage_single_card",
                            style: {
                                marginRight: "1%"
                            },
                            children: Object(V.jsx)(Ht.a, {
                                className: "gfg_home_page_topic_card",
                                hoverable: !0,
                                cover: Object(V.jsx)("div", {
                                    className: "gfg_home_page_topic_card_cover",
                                    children: Object(V.jsx)("a", {
                                        href: "".concat(m.GFG_SITE_URL).concat(e.slug, "?ref=home-articlecards"),
                                        children: Object(V.jsxs)(Jt.a, {
                                            className: "gfg_home_topic_".concat(e.color),
                                            style: {
                                                height: "180px",
                                                borderRadius: "12px"
                                            },
                                            children: [Object(V.jsx)(Jt.a, {
                                                span: 12,
                                                style: {
                                                    zIndex: "2"
                                                },
                                                children: Object(V.jsx)(Qt.a, {
                                                    className: "font-primary",
                                                    style: {
                                                        color: "#FFFFFF",
                                                        fontSize: "25px",
                                                        paddingLeft: "4%",
                                                        paddingTop: "4%"
                                                    },
                                                    children: e.topic
                                                })
                                            }), Object(V.jsx)(Qt.a, {
                                                style: {
                                                    position: "absolute",
                                                    top: "0%",
                                                    right: "0%",
                                                    height: "100%",
                                                    width: "inherit"
                                                },
                                                children: Object(V.jsx)(Jt.a, {
                                                    span: 24,
                                                    className: "gfg_home_page_cards_image",
                                                    children: Object(V.jsx)(is.a, {
                                                        preview: !1,
                                                        style: {
                                                            height: "180px",
                                                            borderRadius: "15px"
                                                        },
                                                        src: f + e.url
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                Zs = function(e) {
                    var t = e.checkForNavigationDisability,
                        s = e.scrollAhead,
                        c = e.scrollBack,
                        n = Object(ee.a)(e, Xs),
                        i = Object(a.useRef)(),
                        r = {
                            xl: "8",
                            lg: "8",
                            md: "8",
                            sm: "8",
                            xs: "8"
                        },
                        o = $t(),
                        l = [];
                    return Ys[0].forEach((function(e) {
                        return l.length < r[o] && l.push(Object(V.jsx)(Ks, {
                            color: e.color,
                            topic: e.topicName,
                            url: e.url,
                            breakpoint: o,
                            slug: e.slug
                        }))
                    })), Object(a.useEffect)((function() {
                        Qs()
                    }), []), Object(a.useEffect)((function() {
                        return i.current && (i.current.addEventListener("scroll", (function() {
                                return t(0, "WebDevelopment", i)
                            })), t(0, "WebDevelopment", i)),
                            function() {
                                i.current.removeEventListener("scroll")
                            }
                    }), []), Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Qt.a, {
                            className: "gfg_view_all",
                            children: Object(V.jsx)(Jt.a, {
                                className: "gfg_home_topic_outer_height ".concat(n.flag ? "gfg_home_topic_outer_height_algo" : ""),
                                span: "xl" !== o ? "sm" === o || "xs" === o ? 23 : 22 : 20,
                                offset: "xl" !== o ? "sm" === o || "xs" === o ? 0 : 1 : 2,
                                children: Object(V.jsxs)(Jt.a, {
                                    offset: 1,
                                    children: [Object(V.jsx)(Jt.a, {
                                        span: 23,
                                        children: Object(V.jsxs)(Qt.a, {
                                            justify: "space-between",
                                            children: [Object(V.jsx)(Jt.a, {
                                                className: "video-card-heading",
                                                children: Object(V.jsx)("h2", {
                                                    children: "Web Development"
                                                })
                                            }), Object(V.jsx)(Xt.b, {
                                                children: Object(V.jsx)(Yt.a, {
                                                    className: "view_all_button",
                                                    shape: "round",
                                                    href: "".concat(m.GFG_SITE_URL, "web-development/"),
                                                    children: "View All"
                                                })
                                            })]
                                        })
                                    }), Object(V.jsx)(Jt.a, {
                                        span: "sm" === o || "xs" === o ? 24 : 23,
                                        children: Object(V.jsx)(Qt.a, {
                                            ref: i,
                                            wrap: !1,
                                            gutter: 10,
                                            className: "scroll_gfg gfg_home_sroll gfg_home_web_cards gfg_home_topic_right_margin",
                                            children: l
                                        })
                                    }), Object(V.jsxs)(Jt.a, {
                                        className: "homePageCardScroller",
                                        span: "sm" === o || "xs" === o ? 24 : 23,
                                        style: {
                                            display: "flex",
                                            justifyContent: "center"
                                        },
                                        children: [Object(V.jsx)("div", {
                                            title: "Scroll Back",
                                            className: "homeCardScrollBtn leftScrollWebDevelopmentCard",
                                            onClick: function() {
                                                return c(i, "WebDevelopment")
                                            },
                                            children: Object(V.jsx)("i", {
                                                className: "gfg-icon slide-left"
                                            })
                                        }), Object(V.jsx)("div", {
                                            title: "Scroll Ahead",
                                            className: "homeCardScrollBtn rightScrollWebDevelopmentCard",
                                            onClick: function() {
                                                return s(i, "WebDevelopment")
                                            },
                                            children: Object(V.jsx)("i", {
                                                className: "gfg-icon slide-right"
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                },
                $s = function() {
                    var e, t, s = document.getElementsByClassName("gfg_home_language_cards").item(0),
                        a = !1;
                    s && (s.addEventListener("mousedown", (function(c) {
                        a = !0, s.classList.add("active"), e = c.pageX - s.offsetLeft, t = s.scrollLeft
                    })), s.addEventListener("mouseleave", (function() {
                        a = !1, s.classList.remove("active")
                    })), s.addEventListener("mouseup", (function() {
                        a = !1, s.classList.remove("active")
                    })), s.addEventListener("mousemove", (function(c) {
                        if (a) {
                            c.preventDefault();
                            var n = 3 * (c.pageX - s.offsetLeft - e);
                            s.scrollLeft = t - n
                        }
                    })))
                },
                ea = ["checkForNavigationDisability", "scrollAhead", "scrollBack"],
                ta = [
                    [{
                        color: "green",
                        topicName: "Python",
                        url: "auth-dashboard-uploads/learn1.png",
                        slug: "python-programming-language/"
                    }, {
                        color: "green",
                        topicName: "Java",
                        url: "auth-dashboard-uploads/learn2.png",
                        slug: "java/"
                    }, {
                        color: "green",
                        topicName: "C++",
                        url: "auth-dashboard-uploads/learn3.png",
                        slug: "c-plus-plus/"
                    }, {
                        color: "green",
                        topicName: "SQL",
                        url: "auth-dashboard-uploads/learn4.png",
                        slug: "sql-tutorial/"
                    }, {
                        color: "green",
                        topicName: "GIT",
                        url: "auth-dashboard-uploads/learn1.png",
                        slug: "git-tutorial/"
                    }, {
                        color: "green",
                        topicName: "DevOps",
                        url: "auth-dashboard-uploads/learn2.png",
                        slug: "devops-tutorial/"
                    }, {
                        color: "green",
                        topicName: "Android",
                        url: "auth-dashboard-uploads/learn3.png",
                        slug: "android-tutorial/"
                    }, {
                        color: "green",
                        topicName: "System Design",
                        url: "auth-dashboard-uploads/learn4.png",
                        slug: "system-design-tutorial/"
                    }]
                ],
                sa = function(e) {
                    return Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Jt.a, {
                            className: "xl" === e.breakpoint || "lg" === e.breakpoint || "md" === e.breakpoint ? "gfg_home_topic_xl homepage_single_card" : "gfg_home_topic_scroll homepage_single_card",
                            style: {
                                marginRight: "1%"
                            },
                            children: Object(V.jsx)(Ht.a, {
                                className: "gfg_home_page_topic_card",
                                hoverable: !0,
                                cover: Object(V.jsx)("div", {
                                    className: "gfg_home_page_topic_card_cover",
                                    children: Object(V.jsx)("a", {
                                        href: "".concat(m.GFG_SITE_URL).concat(e.slug, "?ref=home-articlecards"),
                                        children: Object(V.jsxs)(Jt.a, {
                                            className: "gfg_home_topic_".concat(e.color),
                                            style: {
                                                height: "180px",
                                                borderRadius: "12px"
                                            },
                                            children: [Object(V.jsx)(Jt.a, {
                                                span: 16,
                                                style: {
                                                    zIndex: "2"
                                                },
                                                children: Object(V.jsx)(Qt.a, {
                                                    className: "font-primary",
                                                    style: {
                                                        color: "#FFFFFF",
                                                        fontSize: "25px",
                                                        paddingLeft: "4%",
                                                        paddingTop: "4%"
                                                    },
                                                    children: e.topic
                                                })
                                            }), Object(V.jsx)(Qt.a, {
                                                style: {
                                                    position: "absolute",
                                                    height: "100%",
                                                    top: "0%",
                                                    right: "0%",
                                                    width: "inherit"
                                                },
                                                children: Object(V.jsx)(Jt.a, {
                                                    span: 24,
                                                    className: "gfg_home_page_cards_image",
                                                    children: Object(V.jsx)(is.a, {
                                                        preview: !1,
                                                        style: {
                                                            height: "180px",
                                                            borderRadius: "15px"
                                                        },
                                                        src: f + e.url
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                aa = function(e) {
                    var t = e.checkForNavigationDisability,
                        s = e.scrollAhead,
                        c = e.scrollBack,
                        n = (Object(ee.a)(e, ea), Object(a.useRef)()),
                        i = {
                            xl: "8",
                            lg: "8",
                            md: "8",
                            sm: "8",
                            xs: "8"
                        },
                        r = $t(),
                        o = [];
                    return ta[0].forEach((function(e) {
                        return o.length < i[r] && o.push(Object(V.jsx)(sa, {
                            color: e.color,
                            topic: e.topicName,
                            url: e.url,
                            breakpoint: r,
                            slug: e.slug
                        }))
                    })), Object(a.useEffect)((function() {
                        $s()
                    }), []), Object(a.useEffect)((function() {
                        return n.current && (n.current.addEventListener("scroll", (function() {
                                return t(0, "Language", n)
                            })), t(0, "Language", n)),
                            function() {
                                n.current.removeEventListener("scroll")
                            }
                    }), []), Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Qt.a, {
                            className: "gfg_view_all",
                            children: Object(V.jsx)(Jt.a, {
                                className: "gfg_home_topic_outer_height gfg_home_topic_outer_height_algo",
                                span: "xl" !== r ? "sm" === r || "xs" === r ? 23 : 22 : 20,
                                offset: "xl" !== r ? "sm" === r || "xs" === r ? 0 : 1 : 2,
                                children: Object(V.jsxs)(Jt.a, {
                                    offset: 1,
                                    children: [Object(V.jsx)(Jt.a, {
                                        span: 23,
                                        children: Object(V.jsx)(Qt.a, {
                                            justify: "space-between",
                                            children: Object(V.jsx)(Jt.a, {
                                                className: "video-card-heading",
                                                children: Object(V.jsx)("h2", {
                                                    children: "Tutorials"
                                                })
                                            })
                                        })
                                    }), Object(V.jsx)(Jt.a, {
                                        span: "sm" === r || "xs" === r ? 24 : 23,
                                        children: Object(V.jsx)(Qt.a, {
                                            ref: n,
                                            wrap: !1,
                                            gutter: 10,
                                            className: "scroll_gfg gfg_home_sroll gfg_home_language_cards gfg_home_topic_right_margin",
                                            children: o
                                        })
                                    }), Object(V.jsxs)(Jt.a, {
                                        className: "homePageCardScroller",
                                        span: "sm" === r || "xs" === r ? 24 : 23,
                                        style: {
                                            display: "flex",
                                            justifyContent: "center"
                                        },
                                        children: [Object(V.jsx)("div", {
                                            title: "Scroll Back",
                                            className: "homeCardScrollBtn leftScrollLanguageCard",
                                            onClick: function() {
                                                return c(n, "Language")
                                            },
                                            children: Object(V.jsx)("i", {
                                                className: "gfg-icon slide-left"
                                            })
                                        }), Object(V.jsx)("div", {
                                            title: "Scroll Ahead",
                                            className: "homeCardScrollBtn rightScrollLanguageCard",
                                            onClick: function() {
                                                return s(n, "Language")
                                            },
                                            children: Object(V.jsx)("i", {
                                                className: "gfg-icon slide-right"
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                },
                ca = function() {
                    var e, t, s = document.getElementsByClassName("gfg_home_MachineLearning_cards").item(0),
                        a = !1;
                    s && (s.addEventListener("mousedown", (function(c) {
                        a = !0, s.classList.add("active"), e = c.pageX - s.offsetLeft, t = s.scrollLeft
                    })), s.addEventListener("mouseleave", (function() {
                        a = !1, s.classList.remove("active")
                    })), s.addEventListener("mouseup", (function() {
                        a = !1, s.classList.remove("active")
                    })), s.addEventListener("mousemove", (function(c) {
                        if (a) {
                            c.preventDefault();
                            var n = 3 * (c.pageX - s.offsetLeft - e);
                            s.scrollLeft = t - n
                        }
                    })))
                },
                na = ["checkForNavigationDisability", "scrollAhead", "scrollBack"],
                ia = [
                    [{
                        color: "purple",
                        topicName: "Machine Learning",
                        url: "auth-dashboard-uploads/ML-DS3-min.png",
                        slug: "machine-learning/"
                    }, {
                        color: "purple",
                        topicName: "Data Science with Python",
                        url: "auth-dashboard-uploads/ML-DS2-min.png",
                        slug: "data-science-tutorial/"
                    }, {
                        color: "purple",
                        topicName: "Data Analysis",
                        url: "auth-dashboard-uploads/ML-DS1-min.png",
                        slug: "data-analysis-tutorial/"
                    }, {
                        color: "purple",
                        topicName: "Deep Learning",
                        url: "auth-dashboard-uploads/ML-DS4-min.png",
                        slug: "deep-learning-tutorial/"
                    }, {
                        color: "purple",
                        topicName: "Natural Language Processing",
                        url: "auth-dashboard-uploads/ML-DS3-min.png",
                        slug: "natural-language-processing-nlp-tutorial/"
                    }, {
                        color: "purple",
                        topicName: "ML Maths",
                        url: "auth-dashboard-uploads/ML-DS2-min.png",
                        slug: "machine-learning-mathematics/"
                    }, {
                        color: "purple",
                        topicName: "ML Projects",
                        url: "auth-dashboard-uploads/ML-DS1-min.png",
                        slug: "machine-learning-projects/"
                    }, {
                        color: "purple",
                        topicName: "ML Interview Questions",
                        url: "auth-dashboard-uploads/ML-DS4-min.png",
                        slug: "machine-learning-interview-questions/"
                    }]
                ],
                ra = function(e) {
                    return Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Jt.a, {
                            className: "xl" === e.breakpoint || "lg" === e.breakpoint || "md" === e.breakpoint ? "gfg_home_topic_xl homepage_single_card" : "gfg_home_topic_scroll homepage_single_card",
                            style: {
                                marginRight: "1%"
                            },
                            children: Object(V.jsx)(Ht.a, {
                                className: "gfg_home_page_topic_card",
                                hoverable: !0,
                                cover: Object(V.jsx)("div", {
                                    className: "gfg_home_page_topic_card_cover",
                                    children: Object(V.jsx)("a", {
                                        href: "".concat(m.GFG_SITE_URL).concat(e.slug, "?ref=home-articlecards"),
                                        children: Object(V.jsxs)(Jt.a, {
                                            className: "gfg_home_topic_".concat(e.color),
                                            style: {
                                                height: "180px",
                                                borderRadius: "12px"
                                            },
                                            children: [Object(V.jsx)(Jt.a, {
                                                span: 12,
                                                style: {
                                                    zIndex: "2"
                                                },
                                                children: Object(V.jsx)(Qt.a, {
                                                    className: "font-primary",
                                                    style: {
                                                        color: "#FFFFFF",
                                                        fontSize: "25px",
                                                        paddingLeft: "4%",
                                                        paddingTop: "4%"
                                                    },
                                                    children: e.topic
                                                })
                                            }), Object(V.jsx)(Qt.a, {
                                                style: {
                                                    position: "absolute",
                                                    top: "0%",
                                                    right: "0%",
                                                    height: "100%",
                                                    width: "inherit"
                                                },
                                                children: Object(V.jsx)(Jt.a, {
                                                    span: 24,
                                                    className: "gfg_home_page_cards_image",
                                                    children: Object(V.jsx)(is.a, {
                                                        preview: !1,
                                                        style: {
                                                            height: "180px",
                                                            borderRadius: "15px"
                                                        },
                                                        src: f + e.url
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                oa = function(e) {
                    var t = e.checkForNavigationDisability,
                        s = e.scrollAhead,
                        c = e.scrollBack,
                        n = (Object(ee.a)(e, na), Object(a.useRef)()),
                        i = {
                            xl: "8",
                            lg: "8",
                            md: "8",
                            sm: "8",
                            xs: "8"
                        },
                        r = $t(),
                        o = [];
                    return ia[0].forEach((function(e) {
                        return o.length < i[r] && o.push(Object(V.jsx)(ra, {
                            color: e.color,
                            topic: e.topicName,
                            url: e.url,
                            breakpoint: r,
                            slug: e.slug
                        }))
                    })), Object(a.useEffect)((function() {
                        ca()
                    }), []), Object(a.useEffect)((function() {
                        return n.current && (n.current.addEventListener("scroll", (function() {
                                return t(0, "MachineLearningAndDataScience", n)
                            })), t(0, "MachineLearningAndDataScience", n)),
                            function() {
                                n.current.removeEventListener("scroll")
                            }
                    }), []), Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Qt.a, {
                            className: "gfg_view_all",
                            children: Object(V.jsx)(Jt.a, {
                                className: "gfg_home_topic_outer_height",
                                span: "xl" !== r ? "sm" === r || "xs" === r ? 23 : 22 : 20,
                                offset: "xl" !== r ? "sm" === r || "xs" === r ? 0 : 1 : 2,
                                children: Object(V.jsxs)(Jt.a, {
                                    offset: 1,
                                    children: [Object(V.jsx)(Jt.a, {
                                        span: 23,
                                        children: Object(V.jsx)(Qt.a, {
                                            justify: "space-between custom-flex-wrapper",
                                            children: Object(V.jsx)(Jt.a, {
                                                className: "video-card-heading",
                                                children: Object(V.jsx)("h2", {
                                                    children: "Machine Learning & Data Science"
                                                })
                                            })
                                        })
                                    }), Object(V.jsx)(Jt.a, {
                                        span: "sm" === r || "xs" === r ? 24 : 23,
                                        children: Object(V.jsx)(Qt.a, {
                                            ref: n,
                                            wrap: !1,
                                            gutter: 10,
                                            className: "scroll_gfg gfg_home_sroll gfg_home_MachineLearning_cards gfg_home_topic_right_margin",
                                            children: o
                                        })
                                    }), Object(V.jsxs)(Jt.a, {
                                        className: "homePageCardScroller",
                                        span: "sm" === r || "xs" === r ? 24 : 23,
                                        style: {
                                            display: "flex",
                                            justifyContent: "center"
                                        },
                                        children: [Object(V.jsx)("div", {
                                            title: "Scroll Back",
                                            className: "homeCardScrollBtn leftScrollMachineLearningAndDataScienceCard",
                                            onClick: function() {
                                                return c(n, "MachineLearningAndDataScience")
                                            },
                                            children: Object(V.jsx)("i", {
                                                className: "gfg-icon slide-left"
                                            })
                                        }), Object(V.jsx)("div", {
                                            title: "Scroll Ahead",
                                            className: "homeCardScrollBtn rightScrollMachineLearningAndDataScienceCard",
                                            onClick: function() {
                                                return s(n, "MachineLearningAndDataScience")
                                            },
                                            children: Object(V.jsx)("i", {
                                                className: "gfg-icon slide-right"
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                };
            var la = function() {
                    var e = Object(a.useRef)(null),
                        t = Object(a.useState)((function() {
                            return window.scrollY > 0 ? "nudge_container nudge_container_small" : "nudge_container"
                        })),
                        s = Object(d.a)(t, 2),
                        c = s[0],
                        n = s[1];
                    return Object(a.useEffect)((function() {
                        var e = null;
                        window.addEventListener("scroll", (function() {
                            clearTimeout(e), window.scrollY > 0 ? (n("nudge_container nudge_container_small"), e = setTimeout((function() {
                                n("nudge_container nudge_container_small border_animation_fix")
                            }), 1200)) : (n("nudge_container border_animation_fix"), e = setTimeout((function() {
                                n("nudge_container")
                            }), 1200))
                        }))
                    }), []), Object(V.jsxs)("a", {
                        ref: e,
                        className: c,
                        href: C,
                        target: "_blank",
                        children: [Object(V.jsx)("div", {
                            className: "shimmer"
                        }), Object(V.jsx)("span", {
                            children: "Explore Community"
                        }), Object(V.jsx)("img", {
                            loading: "lazy",
                            src: L,
                            alt: "Community"
                        })]
                    })
                },
                da = function() {
                    var e = $t(),
                        t = {
                            lg: "22",
                            xl: "20",
                            md: "22"
                        },
                        s = function(e, t, s) {
                            var a = s.current.scrollLeft + e,
                                c = s.current.scrollWidth - s.current.offsetWidth,
                                n = !0;
                            c > 0 && c <= a && (document.querySelector(".rightScroll".concat(t, "Card")).classList.add("scrollBtnHomeCardInactive"), n = !1), a <= 0 && (document.querySelector(".leftScroll".concat(t, "Card")).classList.add("scrollBtnHomeCardInactive"), n = !1), n && (document.querySelector(".leftScroll".concat(t, "Card")).classList.remove("scrollBtnHomeCardInactive"), document.querySelector(".rightScroll".concat(t, "Card")).classList.remove("scrollBtnHomeCardInactive"))
                        },
                        a = function(e, t) {
                            e.current.scrollBy({
                                left: -320,
                                behavior: "smooth"
                            }), s(-320, t, e)
                        },
                        c = function(e, t) {
                            e.current.scrollBy({
                                left: 320,
                                behavior: "smooth"
                            }), e.current.left += 320, s(320, t, e)
                        },
                        n = window.currentUserCountryCode;
                    return Object(V.jsxs)(V.Fragment, {
                        children: [Object(V.jsxs)("div", {
                            className: "IN" === n ? "gfg_home_page_background_white_base" : "gfg_home_page_background_base",
                            style: {
                                width: "100%"
                            },
                            children: [Object(V.jsxs)("div", {
                                className: "gfg_home_page_search_background gfg_home_page_padding",
                                children: [Object(V.jsx)(Bs, {
                                    breakpoint: e
                                }), Object(V.jsx)(Js, {
                                    breakpoint: e
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "gfg_home_page_background_white_base",
                                children: [Object(V.jsx)("div", {
                                    className: "gfg_home_page_search_card_mode gfg_home_page_padding",
                                    children: Object(V.jsx)("div", {
                                        className: "gfg_homepage_section_max_width",
                                        children: Object(V.jsx)(Ws, {
                                            breakpoint: e
                                        })
                                    })
                                }), Object(V.jsx)("div", {
                                    className: "gfg_home_page_padding gfg_home_page_carousel  gfg_homepage_section_max_width",
                                    children: Object(V.jsx)(ds, {
                                        breakpoint: e
                                    })
                                })]
                            }), "IN" === n && Object(V.jsx)("div", {
                                className: "gfg_home_page_padding  gfg_homepage_section_max_width",
                                children: Object(V.jsx)(ns, {})
                            }), Object(V.jsx)("div", {
                                className: "IN" === n ? "gfg_home_page_background_base" : "gfg_home_page_background_white_base",
                                children: Object(V.jsxs)("div", {
                                    className: "gfg_home_page_padding  gfg_homepage_section_max_width",
                                    children: [Object(V.jsx)(ms, {
                                        breakPointOffsets: t,
                                        flag: 0,
                                        checkForNavigationDisability: s,
                                        scrollAhead: c,
                                        scrollBack: a
                                    }), Object(V.jsx)(Zs, {
                                        breakPointOffsets: t,
                                        checkForNavigationDisability: s,
                                        scrollAhead: c,
                                        scrollBack: a
                                    }), Object(V.jsx)(oa, {
                                        breakPointOffsets: t,
                                        checkForNavigationDisability: s,
                                        scrollAhead: c,
                                        scrollBack: a
                                    }), Object(V.jsx)(aa, {
                                        breakPointOffsets: t,
                                        checkForNavigationDisability: s,
                                        scrollAhead: c,
                                        scrollBack: a
                                    })]
                                })
                            }), "IN" !== n && Object(V.jsx)("div", {
                                className: "gfg_home_page_padding  gfg_homepage_section_max_width",
                                children: Object(V.jsx)(ns, {})
                            }), Object(V.jsx)("div", {
                                className: "gfg_home_page_background_white_base gfg_home_page_potd_mobile_spacing gfg_home_page_padding",
                                children: Object(V.jsx)("div", {
                                    className: "gfg_home_page_section",
                                    children: Object(V.jsx)("div", {
                                        className: "gfg_homepage_section_max_width",
                                        children: Object(V.jsx)(rs, {
                                            breakpoint: e
                                        })
                                    })
                                })
                            }), Object(V.jsx)("div", {
                                className: "gfg_home_page_background_base",
                                children: Object(V.jsx)("div", {
                                    className: "gfg_home_page_padding  gfg_homepage_section_max_width",
                                    children: Object(V.jsx)(as, {})
                                })
                            }), Object(V.jsx)("div", {
                                className: "gfg_home_page_background_white_base gfg_home_page_padding",
                                children: Object(V.jsx)("div", {
                                    className: "gfg_homepage_section_max_width",
                                    children: Object(V.jsx)(ys, {
                                        breakpoint: e
                                    })
                                })
                            })]
                        }), Object(V.jsx)(la, {})]
                    })
                },
                ga = Object(X.configureStore)({
                    reducer: Object(H.a)({}, Ke.reducerPath, Ke.reducer),
                    middleware: [Y.a, Ke.middleware]
                }),
                ua = [{
                    path: ["/", "/page/:page"],
                    component: function() {
                        return Object(V.jsx)(Q.a, {
                            store: ga,
                            children: Object(V.jsx)(da, {})
                        })
                    },
                    name: "GeeksforGeeks | A computer science portal for geeks",
                    exact: !0,
                    private: !1
                }, {
                    path: "/videos/",
                    component: jt,
                    name: "Videos | GeeksforGeeks",
                    exact: !1,
                    private: !1
                }, {
                    path: "/advertise-with-us/",
                    component: Wt,
                    name: "Advertisement | GeeksforGeeks",
                    exact: !1,
                    private: !1
                }],
                ja = Object(r.a)();
            ja.listen((function(e) {
                es.a.set({
                    page: e.pathname
                }), es.a.pageview(e.pathname)
            }));
            var ha = function() {
                    return Object(V.jsx)(z, {
                        children: Object(V.jsx)(o.c, {
                            history: ja,
                            children: Object(V.jsxs)(o.d, {
                                children: [ua.map((function(e, t) {
                                    return Object(V.jsx)(o.b, {
                                        exact: e.exact,
                                        path: e.path,
                                        children: e.component
                                    }, t)
                                })), Object(V.jsx)(o.a, {
                                    to: "/"
                                })]
                            })
                        })
                    })
                },
                ma = function(e) {
                    e && e instanceof Function && s.e(3).then(s.bind(null, 458)).then((function(t) {
                        var s = t.getCLS,
                            a = t.getFID,
                            c = t.getFCP,
                            n = t.getLCP,
                            i = t.getTTFB;
                        s(e), a(e), c(e), n(e), i(e)
                    }))
                };
            s(435), s(436);
            fe.a.configure({
                autoClose: 4e3,
                draggable: !1,
                hideProgressBar: !0,
                toastClassName: "toast-dark",
                position: "bottom-right",
                className: "fsize-5"
            });
            es.a.initialize("G-DWCCJLKX3X"), i.a.render(Object(V.jsx)(c.a.StrictMode, {
                children: Object(V.jsx)(ha, {})
            }), document.getElementById("RA-root")), ma()
        }
    },
    [
        [437, 1, 2]
    ]
]);