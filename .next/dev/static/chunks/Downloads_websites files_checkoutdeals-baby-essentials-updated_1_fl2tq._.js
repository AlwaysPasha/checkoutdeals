(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Merge class names, filtering out falsy values. Lightweight alternative to clsx. */ __turbopack_context__.s([
    "cn",
    ()=>cn,
    "slugify",
    ()=>slugify
]);
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
function slugify(value) {
    return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/DarkModeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DarkModeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function DarkModeToggle() {
    _s();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DarkModeToggle.useEffect": ()=>{
            // Sync React state with the class already applied by the inline
            // anti-flash script in the root layout, which runs before hydration.
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsDark(document.documentElement.classList.contains("dark"));
        }
    }["DarkModeToggle.useEffect"], []);
    function toggle() {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle("dark", next);
        try {
            localStorage.setItem("cod-theme", next ? "dark" : "light");
        } catch  {
        // localStorage may be unavailable (e.g. private browsing) — ignore.
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: toggle,
        "aria-label": isDark ? "Switch to light mode" : "Switch to dark mode",
        "aria-pressed": isDark,
        className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:border-brand hover:text-brand transition-colors cursor-pointer",
        children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "h-4.5 w-4.5",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm9-6a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM5 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm12.657-6.657a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM8.464 15.536a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0Zm9.193 1.414a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 1 1 1.414-1.414l.707.707a1 1 0 0 1 0 1.414ZM7.757 6.464a1 1 0 0 1-1.414 0l-.707-.707A1 1 0 1 1 7.05 4.343l.707.707a1 1 0 0 1 0 1.414ZM12 20a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Z"
            }, void 0, false, {
                fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/DarkModeToggle.tsx",
                lineNumber: 41,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/DarkModeToggle.tsx",
            lineNumber: 40,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "h-4.5 w-4.5",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.14c0-1.16.25-2.3.73-3.37A1 1 0 0 0 8.5 1.06a10.14 10.14 0 1 0 13.4 13.4 1 1 0 0 0-.26-1.46Z"
            }, void 0, false, {
                fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/DarkModeToggle.tsx",
                lineNumber: 45,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/DarkModeToggle.tsx",
            lineNumber: 44,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/DarkModeToggle.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(DarkModeToggle, "q9ovQTvwIdpxeVii6kJLTuTYpwE=");
_c = DarkModeToggle;
var _c;
__turbopack_context__.k.register(_c, "DarkModeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$components$2f$DarkModeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/DarkModeToggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const links = [
    {
        href: "/#products",
        label: "Browse Products"
    },
    {
        href: "/about",
        label: "About"
    },
    {
        href: "/contact",
        label: "Contact"
    }
];
function Navbar() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-[#0b0b0d]/80 backdrop-blur-md shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16",
                "aria-label": "Main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2 shrink-0",
                        onClick: ()=>setOpen(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white font-bold text-lg",
                                children: "C"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-bold tracking-tight",
                                children: [
                                    "CheckOut",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-brand",
                                        children: "Deals"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                                        lineNumber: 27,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-1",
                        children: links.map((link)=>{
                            const active = pathname === link.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2 rounded-full text-sm font-medium transition-colors", active ? "text-brand bg-orange-50 dark:bg-orange-500/10" : "text-neutral-700 dark:text-neutral-300 hover:text-brand hover:bg-orange-50 dark:hover:bg-orange-500/10"),
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$components$2f$DarkModeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#products",
                                className: "rounded-full bg-gradient-to-b from-brand to-brand-dark px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-md hover:brightness-105 active:brightness-95 transition-all",
                                children: "Shop Now"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 md:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$components$2f$DarkModeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setOpen((v)=>!v),
                                "aria-expanded": open,
                                "aria-label": "Toggle menu",
                                className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300",
                                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    className: "h-5 w-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M6 18 18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    className: "h-5 w-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0b0b0d]", open ? "max-h-96" : "max-h-0 border-t-0"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1 px-4 py-3",
                    children: [
                        links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                onClick: ()=>setOpen(false),
                                className: "px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-orange-50 dark:hover:bg-orange-500/10 hover:text-brand transition-colors",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#products",
                            onClick: ()=>setOpen(false),
                            className: "mt-2 rounded-full bg-gradient-to-b from-brand to-brand-dark px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:shadow-md transition-all",
                            children: "Shop Now"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/websites files/checkoutdeals-baby-essentials-updated/components/Navbar.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(Navbar, "zulZ+F5240eOSupJE1BcVv8NMvo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$websites__files$2f$checkoutdeals$2d$baby$2d$essentials$2d$updated$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_websites%20files_checkoutdeals-baby-essentials-updated_1_fl2tq._.js.map