import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { PassThrough } from 'node:stream';
import { createReadableStreamFromReadable } from '@react-router/node';
import { ServerRouter, UNSAFE_withErrorBoundaryProps, UNSAFE_withComponentProps, Outlet, useNavigate, useLocation, Meta, Links, ScrollRestoration, Scripts, useRouteError, useAsyncError } from 'react-router';
import { isbot } from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';
import { forwardRef, useEffect, createElement, useRef, useState, Component, useCallback } from 'react';
import { useButton } from '@react-aria/button';
import { f as fetchWithHeaders } from './index-kDW0-fTt.js';
import { SessionProvider } from '@hono/auth-js/react';
import { serializeError } from 'serialize-error';
import { toast, Toaster } from 'sonner';
import { create } from 'zustand';
import { useIdleTimer } from 'react-idle-timer';
import { QueryClientProvider, QueryClient, useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { ArrowLeft, Bell, ChevronDown, Search, Filter, Loader2, AlertCircle, Activity, User, Eye, RefreshCw, Trash2, Edit, Plus, ChevronLeft, Home, Building2, FileText, ChevronUp, Users, Settings, Menu, X, Save, Clock, IndianRupee, ArrowRight, Calendar, MapPin, Download, CreditCard, CheckCircle2, Calculator } from 'lucide-react';
import { useParams } from 'react-router-dom';
import fg from 'fast-glob';
import 'node:async_hooks';
import 'node:console';
import '@auth/core';
import '@auth/core/providers/credentials';
import '@hono/auth-js';
import '@neondatabase/serverless';
import 'argon2';
import 'hono';
import 'hono/context-storage';
import 'hono/cors';
import 'hono/proxy';
import 'hono/request-id';
import 'hono/factory';
import '@hono/node-server';
import '@hono/node-server/serve-static';
import 'hono/logger';
import 'ws';
import '@auth/core/jwt';
import 'node:path';
import 'node:fs';
import 'node:url';
import '@react-router/dev/routes';
import 'node:fs/promises';

const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}

const entryServer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: 'Module' }));

const JSX_RENDER_ID_ATTRIBUTE_NAME = "data-render-id";
function buildGridPlaceholder(w, h) {
  const size = Math.max(w, h);
  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 895 895" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="895" height="895" fill="#E9E7E7"/>
<g>
<line x1="447.505" y1="-23" x2="447.505" y2="901" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="447.505" x2="5.66443" y2="447.505" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="278.068" x2="5.66443" y2="278.068" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="57.1505" x2="5.66443" y2="57.1504" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="61.8051" y1="883.671" x2="61.8051" y2="6.10572e-05" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="282.495" y1="907" x2="282.495" y2="-30" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="611.495" y1="907" x2="611.495" y2="-30" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="832.185" y1="883.671" x2="832.185" y2="6.10572e-05" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="827.53" x2="5.66443" y2="827.53" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="606.613" x2="5.66443" y2="606.612" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="4.3568" y1="4.6428" x2="889.357" y2="888.643" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="-0.3568" y1="894.643" x2="894.643" y2="0.642772" stroke="#C0C0C0" stroke-width="1.00975"/>
<circle cx="447.5" cy="441.5" r="163.995" stroke="#C0C0C0" stroke-width="1.00975"/>
<circle cx="447.911" cy="447.911" r="237.407" stroke="#C0C0C0" stroke-width="1.00975"/>
<circle cx="448" cy="442" r="384.495" stroke="#C0C0C0" stroke-width="1.00975"/>
</g>
</svg>
`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
function useOptionalRef(ref) {
  const fallbackRef = useRef(null);
  if (ref && "instance" in ref) return fallbackRef;
  return ref ?? fallbackRef;
}
const CreatePolymorphicComponent = /* @__PURE__ */ forwardRef(
  // @ts-ignore
  function CreatePolymorphicComponentRender({
    as,
    children,
    renderId,
    onError,
    ...rest
  }, forwardedRef) {
    const props = as === "img" ? {
      ...rest,
      // keep the original type of onError for <img>
      onError: (e) => {
        if (typeof onError === "function") onError(e);
        const img = e.currentTarget;
        const {
          width,
          height
        } = img.getBoundingClientRect();
        img.dataset.hasFallback = "1";
        img.onerror = null;
        img.src = buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128);
        img.style.objectFit = "cover";
      }
    } : rest;
    const ref = useOptionalRef(forwardedRef);
    useEffect(() => {
      const el = ref && "current" in ref ? ref.current : null;
      if (!el) return;
      if (as !== "img") {
        const placeholder = () => {
          const {
            width,
            height
          } = el.getBoundingClientRect();
          return buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128);
        };
        const applyBgFallback = () => {
          el.dataset.hasFallback = "1";
          el.style.backgroundImage = `url("${placeholder()}")`;
          el.style.backgroundSize = "cover";
        };
        const probeBg = () => {
          const bg = getComputedStyle(el).backgroundImage;
          const match = /url\(["']?(.+?)["']?\)/.exec(bg);
          const src = match?.[1];
          if (!src) return;
          const probe = new Image();
          probe.onerror = applyBgFallback;
          probe.src = src;
        };
        probeBg();
        const ro2 = new ResizeObserver(([entry]) => {
          if (!el.dataset.hasFallback) return;
          const {
            width,
            height
          } = entry.contentRect;
          el.style.backgroundImage = `url("${buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128)}")`;
        });
        ro2.observe(el);
        const mo = new MutationObserver(probeBg);
        mo.observe(el, {
          attributes: true,
          attributeFilter: ["style", "class"]
        });
        return () => {
          ro2.disconnect();
          mo.disconnect();
        };
      }
      if (!el.dataset.hasFallback) return;
      const ro = new ResizeObserver(([entry]) => {
        const {
          width,
          height
        } = entry.contentRect;
        el.src = buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128);
      });
      ro.observe(el);
      return () => ro.disconnect();
    }, [as, ref]);
    return /* @__PURE__ */ createElement(as, Object.assign({}, props, {
      ref,
      ...renderId ? {
        [JSX_RENDER_ID_ATTRIBUTE_NAME]: renderId
      } : void 0
    }), children);
  }
);

function LoadFonts() {
  return /* @__PURE__ */ jsx(Fragment, {});
}

const useSandboxStore = create((set, get) => ({
  status: "idle",
  isGenerating: false,
  hasError: false,
  setStatus: (status) => set({
    status,
    isGenerating: status === "codegen-started" || status === "codegen-generating",
    hasError: status === "codegen-error"
  }),
  startCodeGen: () => get().setStatus("codegen-started"),
  setCodeGenGenerating: () => get().setStatus("codegen-generating"),
  completeCodeGen: () => get().setStatus("codegen-complete"),
  errorCodeGen: () => get().setStatus("codegen-error"),
  stopCodeGen: () => get().setStatus("codegen-stopped"),
  resetToIdle: () => get().setStatus("idle")
}));

function HotReloadIndicator() {
  const {
    status: sandboxStatus
  } = useSandboxStore();
  useEffect(() => {
    return;
  }, []);
  useEffect(() => {
    const toastStyle = {
      padding: "16px",
      background: "#18191B",
      border: "1px solid #2C2D2F",
      color: "white",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      width: "var(--width)",
      fontSize: "13px",
      display: "flex",
      alignItems: "center",
      gap: "6px"
    };
    switch (sandboxStatus) {
      case "codegen-started":
      case "codegen-generating":
        toast.custom(() => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: {
            ...toastStyle,
            padding: "10px"
          },
          renderId: "render-84c3d437",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            src: "https://www.create.xyz/images/project-revision-button-building-loading-state-white.gif",
            alt: "loading",
            className: "w-8 h-8",
            renderId: "render-0e9ed90f",
            as: "img"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            renderId: "render-436fd8f7",
            as: "span",
            children: "Updating"
          })]
        }), {
          id: "sandbox-codegen",
          duration: 3e3
        });
        break;
      case "codegen-complete":
        toast.custom(() => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: toastStyle,
          renderId: "render-ac662427",
          as: "div",
          children: [/* @__PURE__ */ jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
            children: [/* @__PURE__ */ jsx("title", {
              children: "Success"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              fillRule: "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
              clipRule: "evenodd",
              renderId: "render-73677184",
              as: "path"
            })]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            renderId: "render-852c8ec8",
            as: "span",
            children: "Updated successfully"
          })]
        }), {
          id: "sandbox-codegen",
          duration: 3e3
        });
        break;
      case "codegen-error":
        toast.custom(() => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: toastStyle,
          renderId: "render-300fa279",
          as: "div",
          children: [/* @__PURE__ */ jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            height: "20",
            width: "20",
            children: [/* @__PURE__ */ jsx("title", {
              children: "Error"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              fillRule: "evenodd",
              d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
              clipRule: "evenodd",
              renderId: "render-ea2d9238",
              as: "path"
            })]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            renderId: "render-af8676b3",
            as: "span",
            children: "Update failed"
          })]
        }), {
          id: "sandbox-codegen",
          duration: 5e3
        });
        break;
    }
    return () => {
    };
  }, [sandboxStatus]);
  return null;
}

function useDevServerHeartbeat() {
  useIdleTimer({
    throttle: 6e4 * 3,
    timeout: 6e4,
    onAction: () => {
      fetch("/", {
        method: "GET"
      }).catch((error) => {
      });
    }
  });
}

const links = () => [];
if (globalThis.window && globalThis.window !== void 0) {
  globalThis.window.fetch = fetchWithHeaders;
}
function SharedErrorBoundary({
  isOpen,
  children
}) {
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    className: `fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`,
    renderId: "render-11c3c8be",
    as: "div",
    children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "bg-[#18191B] text-[#F2F2F2] rounded-lg p-4 max-w-md w-full mx-4 shadow-lg",
      renderId: "render-970d33f0",
      as: "div",
      children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "flex items-start gap-3",
        renderId: "render-e657a2b7",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "flex-shrink-0",
          renderId: "render-eca71ff8",
          as: "div",
          children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "w-8 h-8 bg-[#F2F2F2] rounded-full flex items-center justify-center",
            renderId: "render-9d1b90ce",
            as: "div",
            children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-black text-[1.125rem] leading-none",
              renderId: "render-9af0e1e4",
              as: "span",
              children: "⚠"
            })
          })
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "flex flex-col gap-2 flex-1",
          renderId: "render-432018e2",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "flex flex-col gap-1",
            renderId: "render-36ce6de1",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "font-light text-[#F2F2F2] text-sm",
              renderId: "render-b2e33c3f",
              as: "p",
              children: "App Error Detected"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-[#959697] text-sm font-light",
              renderId: "render-8cd4df64",
              as: "p",
              children: "It looks like an error occurred while trying to use your app."
            })]
          }), children]
        })]
      })
    })
  });
}
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  return /* @__PURE__ */ jsx(SharedErrorBoundary, {
    isOpen: true
  });
});
function InternalErrorBoundary({
  error: errorArg
}) {
  const routeError = useRouteError();
  const asyncError = useAsyncError();
  const error = errorArg ?? asyncError ?? routeError;
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const animateTimer = setTimeout(() => setIsOpen(true), 100);
    return () => clearTimeout(animateTimer);
  }, []);
  const {
    buttonProps: showLogsButtonProps
  } = useButton({
    onPress: useCallback(() => {
      window.parent.postMessage({
        type: "sandbox:web:show-logs"
      }, "*");
    }, [])
  }, useRef(null));
  const {
    buttonProps: fixButtonProps
  } = useButton({
    onPress: useCallback(() => {
      window.parent.postMessage({
        type: "sandbox:web:fix",
        error: serializeError(error)
      }, "*");
      setIsOpen(false);
    }, [error]),
    isDisabled: !error
  }, useRef(null));
  const {
    buttonProps: copyButtonProps
  } = useButton({
    onPress: useCallback(() => {
      navigator.clipboard.writeText(JSON.stringify(serializeError(error)));
    }, [error])
  }, useRef(null));
  function isInIframe() {
    try {
      return window.parent !== window;
    } catch {
      return true;
    }
  }
  return /* @__PURE__ */ jsx(SharedErrorBoundary, {
    isOpen,
    children: isInIframe() ? /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "flex gap-2",
      renderId: "render-46904d05",
      as: "div",
      children: [!!error && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#f9f9f9] hover:bg-[#dbdbdb] active:bg-[#c4c4c4] border-[#c4c4c4] text-[#18191B] text-sm px-[8px] py-[4px] cursor-pointer",
        type: "button",
        ...fixButtonProps,
        renderId: "render-d42bc718",
        as: "button",
        children: "Try to fix"
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#2C2D2F] hover:bg-[#414243] active:bg-[#555658] border-[#414243] text-white text-sm px-[8px] py-[4px]",
        type: "button",
        ...showLogsButtonProps,
        renderId: "render-fd7a0681",
        as: "button",
        children: "Show logs"
      })]
    }) : /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#2C2D2F] hover:bg-[#414243] active:bg-[#555658] border-[#414243] text-white text-sm px-[8px] py-[4px] w-fit",
      type: "button",
      ...copyButtonProps,
      renderId: "render-b397038d",
      as: "button",
      children: "Copy error"
    })
  });
}
class ErrorBoundaryWrapper extends Component {
  state = {
    hasError: false,
    error: null
  };
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, info) {
    console.error(error, info);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsx(InternalErrorBoundary, {
        error: this.state.error,
        params: {}
      });
    }
    return this.props.children;
  }
}
function LoaderWrapper({
  loader
}) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: loader()
  });
}
const ClientOnly = ({
  loader
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return /* @__PURE__ */ jsx(ErrorBoundaryWrapper, {
    children: /* @__PURE__ */ jsx(LoaderWrapper, {
      loader
    })
  });
};
function useHmrConnection() {
  const [connected, setConnected] = useState(() => false);
  useEffect(() => {
    return;
  }, []);
  return connected;
}
const healthyResponseType = "sandbox:web:healthcheck:response";
const useHandshakeParent = () => {
  const isHmrConnected = useHmrConnection();
  useEffect(() => {
    const healthyResponse = {
      type: healthyResponseType,
      healthy: isHmrConnected
    };
    const handleMessage = (event) => {
      if (event.data.type === "sandbox:web:healthcheck") {
        window.parent.postMessage(healthyResponse, "*");
      }
    };
    window.addEventListener("message", handleMessage);
    window.parent.postMessage(healthyResponse, "*");
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [isHmrConnected]);
};
const useCodeGen = () => {
  const {
    startCodeGen,
    setCodeGenGenerating,
    completeCodeGen,
    errorCodeGen,
    stopCodeGen
  } = useSandboxStore();
  useEffect(() => {
    const handleMessage = (event) => {
      const {
        type
      } = event.data;
      switch (type) {
        case "sandbox:web:codegen:started":
          startCodeGen();
          break;
        case "sandbox:web:codegen:generating":
          setCodeGenGenerating();
          break;
        case "sandbox:web:codegen:complete":
          completeCodeGen();
          break;
        case "sandbox:web:codegen:error":
          errorCodeGen();
          break;
        case "sandbox:web:codegen:stopped":
          stopCodeGen();
          break;
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [startCodeGen, setCodeGenGenerating, completeCodeGen, errorCodeGen, stopCodeGen]);
};
const useRefresh = () => {
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "sandbox:web:refresh:request") {
        setTimeout(() => {
          window.location.reload();
        }, 1e3);
        window.parent.postMessage({
          type: "sandbox:web:refresh:complete"
        }, "*");
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
};
function Layout({
  children
}) {
  useHandshakeParent();
  useCodeGen();
  useRefresh();
  useDevServerHeartbeat();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location?.pathname;
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "sandbox:navigation") {
        navigate(event.data.pathname);
      }
    };
    window.addEventListener("message", handleMessage);
    window.parent.postMessage({
      type: "sandbox:web:ready"
    }, "*");
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [navigate]);
  useEffect(() => {
    if (pathname) {
      window.parent.postMessage({
        type: "sandbox:web:navigation",
        pathname
      }, "*");
    }
  }, [pathname]);
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {}), /* @__PURE__ */ jsx("script", {
        type: "module",
        src: "/src/__create/dev-error-overlay.js"
      }), /* @__PURE__ */ jsx("link", {
        rel: "icon",
        href: "/src/__create/favicon.png"
      }), /* @__PURE__ */ jsx(LoadFonts, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsx(ClientOnly, {
        loader: () => children
      }), /* @__PURE__ */ jsx(HotReloadIndicator, {}), /* @__PURE__ */ jsx(Toaster, {
        position: "bottom-right"
      }), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {}), /* @__PURE__ */ jsx("script", {
        src: "https://kit.fontawesome.com/2c15cc0cc7.js",
        crossOrigin: "anonymous",
        async: true
      })]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(SessionProvider, {
    children: /* @__PURE__ */ jsx(Outlet, {})
  });
});

const route0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ClientOnly,
  ErrorBoundary,
  Layout,
  default: root,
  links,
  useHmrConnection
}, Symbol.toStringTag, { value: 'Module' }));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1e3 * 60 * 5,
      // 5 minutes
      cacheTime: 1e3 * 60 * 30,
      // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false
    }
  }
});
function RootLayout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("title", {
        children: "Work Order Management System"
      }), /* @__PURE__ */ jsx("meta", {
        name: "description",
        content: "Construction work order management system"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx("script", {
        src: "https://cdn.tailwindcss.com"
      })]
    }), /* @__PURE__ */ jsx("body", {
      className: "bg-gray-50",
      children: /* @__PURE__ */ jsx(QueryClientProvider, {
        client: queryClient,
        children
      })
    })]
  });
}

function HomePage() {
  useEffect(() => {
    window.location.href = "/dashboard";
  }, []);
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    className: "min-h-screen bg-gray-50 flex items-center justify-center",
    renderId: "render-97e2a9c5",
    as: "div",
    children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "text-center",
      renderId: "render-f80ea3da",
      as: "div",
      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto",
        renderId: "render-66e9d53e",
        as: "div"
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "mt-4 text-gray-600",
        renderId: "render-d7948268",
        as: "p",
        children: "Redirecting to Dashboard..."
      })]
    })
  });
}

const page$8 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(HomePage, {
      ...props
    })
  });
});

const route1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$8
}, Symbol.toStringTag, { value: 'Module' }));

function ActivityLogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEntityType, setSelectedEntityType] = useState("");
  const [selectedActivityType, setSelectedActivityType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const {
    data: activityData,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ["activity-logs", currentPage, selectedEntityType, selectedActivityType],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: "20"
      });
      if (selectedEntityType) {
        params.append("entity_type", selectedEntityType);
      }
      if (selectedActivityType) {
        params.append("activity_type", selectedActivityType);
      }
      const response = await fetch(`/api/activity-logs?${params}`);
      if (!response.ok) throw new Error("Failed to fetch activity logs");
      return response.json();
    }
  });
  const activityLogs = activityData?.activityLogs || [];
  const pagination = activityData?.pagination || {};
  const filteredLogs = activityLogs.filter((log) => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return log.description.toLowerCase().includes(searchLower) || log.user_name.toLowerCase().includes(searchLower) || log.entity_type.toLowerCase().includes(searchLower) || log.activity_type.toLowerCase().includes(searchLower);
  });
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = /* @__PURE__ */ new Date();
    const diffInMinutes = Math.floor((now - date) / (1e3 * 60));
    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    if (diffInMinutes < 10080) return `${Math.floor(diffInMinutes / 1440)}d ago`;
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  const getActivityIcon = (activityType) => {
    switch (activityType) {
      case "CREATE":
        return /* @__PURE__ */ jsx(Plus, {
          size: 16,
          className: "text-green-600"
        });
      case "UPDATE":
        return /* @__PURE__ */ jsx(Edit, {
          size: 16,
          className: "text-blue-600"
        });
      case "DELETE":
        return /* @__PURE__ */ jsx(Trash2, {
          size: 16,
          className: "text-red-600"
        });
      case "STATUS_CHANGE":
        return /* @__PURE__ */ jsx(RefreshCw, {
          size: 16,
          className: "text-purple-600"
        });
      default:
        return /* @__PURE__ */ jsx(Activity, {
          size: 16,
          className: "text-gray-600"
        });
    }
  };
  const getActivityBadge = (activityType) => {
    const config = {
      CREATE: {
        bg: "bg-green-100",
        text: "text-green-800",
        label: "Created"
      },
      UPDATE: {
        bg: "bg-blue-100",
        text: "text-blue-800",
        label: "Updated"
      },
      DELETE: {
        bg: "bg-red-100",
        text: "text-red-800",
        label: "Deleted"
      },
      STATUS_CHANGE: {
        bg: "bg-purple-100",
        text: "text-purple-800",
        label: "Status Changed"
      }
    };
    const activityConfig = config[activityType] || {
      bg: "bg-gray-100",
      text: "text-gray-800",
      label: activityType
    };
    return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: `px-2 py-1 rounded-full text-xs font-medium ${activityConfig.bg} ${activityConfig.text}`,
      renderId: "render-47275560",
      as: "span",
      children: activityConfig.label
    });
  };
  const getEntityBadge = (entityType) => {
    return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800",
      renderId: "render-02da512b",
      as: "span",
      children: entityType.replace("_", " ").toUpperCase()
    });
  };
  const handleViewWorkOrder = (entityId) => {
    window.location.href = `/work-orders/${entityId}`;
  };
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "min-h-screen bg-gray-50",
    renderId: "render-b0e82d65",
    as: "div",
    children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "bg-green-600 h-14 flex items-center px-4 sm:px-6 text-white sticky top-0 z-30",
      renderId: "render-f941e48b",
      as: "header",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        onClick: () => window.history.back(),
        className: "flex items-center gap-2 hover:bg-white/10 px-2 py-1 rounded transition-colors",
        renderId: "render-09b98eeb",
        as: "button",
        children: [/* @__PURE__ */ jsx(ArrowLeft, {
          size: 20
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "hidden sm:block",
          renderId: "render-b429c159",
          as: "span",
          children: "Back"
        })]
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "text-xl font-semibold ml-4",
        renderId: "render-30964dbe",
        as: "h1",
        children: "Activity Log"
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "flex items-center gap-2 sm:gap-4 ml-auto",
        renderId: "render-deba291c",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "relative hover:bg-white/10 p-2 rounded transition-colors",
          renderId: "render-ceec2363",
          as: "button",
          children: [/* @__PURE__ */ jsx(Bell, {
            size: 24
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full",
            renderId: "render-23f7576d",
            as: "div"
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "hidden sm:flex items-center gap-2 cursor-pointer hover:bg-white/10 px-3 py-2 rounded transition-colors",
          renderId: "render-20542788",
          as: "button",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
            alt: "User Avatar",
            className: "w-8 h-8 rounded-full",
            renderId: "render-a2465a8e",
            as: "img"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "hidden md:block",
            renderId: "render-e2d686ee",
            as: "span",
            children: "Admin User"
          }), /* @__PURE__ */ jsx(ChevronDown, {
            size: 20
          })]
        })]
      })]
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "max-w-7xl mx-auto p-6",
      renderId: "render-c5f7c1b6",
      as: "main",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "mb-6",
        renderId: "render-2aaee86b",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "text-3xl font-bold text-gray-900 mb-2",
          renderId: "render-61709213",
          as: "h1",
          children: "Activity Log"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "text-gray-600",
          renderId: "render-4c1b3537",
          as: "p",
          children: "Track all activities and changes in your work order management system."
        })]
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "bg-white rounded-lg border border-gray-200 p-6 mb-6",
        renderId: "render-068d00c6",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "flex flex-col lg:flex-row gap-4",
          renderId: "render-ee3d4f0b",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "flex-1",
            renderId: "render-0aba2308",
            as: "div",
            children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "relative",
              renderId: "render-3c6c896b",
              as: "div",
              children: [/* @__PURE__ */ jsx(Search, {
                size: 20,
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                type: "text",
                placeholder: "Search activities, users, or descriptions...",
                value: searchTerm,
                onChange: (e) => setSearchTerm(e.target.value),
                className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent",
                renderId: "render-fcb7b5ec",
                as: "input"
              })]
            })
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            onClick: () => setShowFilters(!showFilters),
            className: "flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors",
            renderId: "render-ee0409ce",
            as: "button",
            children: [/* @__PURE__ */ jsx(Filter, {
              size: 20
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              renderId: "render-0a68136a",
              as: "span",
              children: "Filters"
            }), /* @__PURE__ */ jsx(ChevronDown, {
              size: 16,
              className: `transform transition-transform ${showFilters ? "rotate-180" : ""}`
            })]
          })]
        }), showFilters && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200",
          renderId: "render-c83a6e58",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-12dea462",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "block text-sm font-medium text-gray-700 mb-2",
              renderId: "render-e6432b7b",
              as: "label",
              children: "Entity Type"
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              value: selectedEntityType,
              onChange: (e) => setSelectedEntityType(e.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
              renderId: "render-b1384763",
              as: "select",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                value: "",
                renderId: "render-79cf56b7",
                as: "option",
                children: "All Entities"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                value: "work_order",
                renderId: "render-721e136d",
                as: "option",
                children: "Work Orders"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                value: "company",
                renderId: "render-091b0d8d",
                as: "option",
                children: "Companies"
              })]
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-92a1b9a9",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "block text-sm font-medium text-gray-700 mb-2",
              renderId: "render-2a31a545",
              as: "label",
              children: "Activity Type"
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              value: selectedActivityType,
              onChange: (e) => setSelectedActivityType(e.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
              renderId: "render-524a55a9",
              as: "select",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                value: "",
                renderId: "render-ec754993",
                as: "option",
                children: "All Activities"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                value: "CREATE",
                renderId: "render-59984f35",
                as: "option",
                children: "Created"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                value: "UPDATE",
                renderId: "render-2c94ab2e",
                as: "option",
                children: "Updated"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                value: "DELETE",
                renderId: "render-345145bd",
                as: "option",
                children: "Deleted"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                value: "STATUS_CHANGE",
                renderId: "render-a06ac006",
                as: "option",
                children: "Status Changes"
              })]
            })]
          })]
        })]
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "bg-white rounded-lg border border-gray-200",
        renderId: "render-5ad85e23",
        as: "div",
        children: isLoading ? /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "flex items-center justify-center py-12",
          renderId: "render-8bcf8b40",
          as: "div",
          children: /* @__PURE__ */ jsx(Loader2, {
            size: 32,
            className: "text-green-600 animate-spin"
          })
        }) : error ? /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "text-center py-12",
          renderId: "render-dab5c320",
          as: "div",
          children: [/* @__PURE__ */ jsx(AlertCircle, {
            size: 32,
            className: "text-red-500 mx-auto mb-2"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-gray-600",
            renderId: "render-7bfd3537",
            as: "p",
            children: error?.message || "Failed to load activity logs"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            onClick: () => refetch(),
            className: "mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",
            renderId: "render-3f4ed2c0",
            as: "button",
            children: "Try Again"
          })]
        }) : filteredLogs.length === 0 ? /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "text-center py-12",
          renderId: "render-20e298f5",
          as: "div",
          children: [/* @__PURE__ */ jsx(Activity, {
            size: 32,
            className: "text-gray-400 mx-auto mb-2"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-gray-600",
            renderId: "render-3a03bd71",
            as: "p",
            children: "No activity logs found"
          }), searchTerm && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            onClick: () => setSearchTerm(""),
            className: "mt-2 text-green-600 hover:underline",
            renderId: "render-3e2e0861",
            as: "button",
            children: "Clear search"
          })]
        }) : /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "divide-y divide-gray-200",
            renderId: "render-c50924a6",
            as: "div",
            children: filteredLogs.map((log) => /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "p-6 hover:bg-gray-50",
              renderId: "render-7d2455c8",
              as: "div",
              children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "flex items-start gap-4",
                renderId: "render-c9899b5f",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center",
                  renderId: "render-77f0f3b1",
                  as: "div",
                  children: getActivityIcon(log.activity_type)
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  className: "flex-1 min-w-0",
                  renderId: "render-0e0a093d",
                  as: "div",
                  children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    className: "flex items-center gap-3 mb-2",
                    renderId: "render-08b98f1e",
                    as: "div",
                    children: [getActivityBadge(log.activity_type), getEntityBadge(log.entity_type), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-sm text-gray-500",
                      renderId: "render-c20ce7f2",
                      as: "span",
                      children: formatDate(log.created_at)
                    })]
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "text-gray-900 font-medium mb-1",
                    renderId: "render-c1a55256",
                    as: "p",
                    children: log.description
                  }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    className: "flex items-center gap-4 text-sm text-gray-600",
                    renderId: "render-43d0d009",
                    as: "div",
                    children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                      className: "flex items-center gap-1",
                      renderId: "render-c43c5f21",
                      as: "div",
                      children: [/* @__PURE__ */ jsx(User, {
                        size: 14
                      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        renderId: "render-39ce5794",
                        as: "span",
                        children: log.user_name
                      })]
                    }), log.entity_type === "work_order" && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                      onClick: () => handleViewWorkOrder(log.entity_id),
                      className: "flex items-center gap-1 text-green-600 hover:underline",
                      renderId: "render-e33bf21f",
                      as: "button",
                      children: [/* @__PURE__ */ jsx(Eye, {
                        size: 14
                      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        renderId: "render-9a14a1cd",
                        as: "span",
                        children: "View Work Order"
                      })]
                    })]
                  }), log.details && Object.keys(log.details).length > 0 && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    className: "mt-3",
                    renderId: "render-b0fe17d5",
                    as: "details",
                    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "cursor-pointer text-sm text-gray-600 hover:text-gray-800",
                      renderId: "render-9b1b25a3",
                      as: "summary",
                      children: "View Details"
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "mt-2 p-3 bg-gray-50 rounded-lg",
                      renderId: "render-6aacf63a",
                      as: "div",
                      children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        className: "text-xs text-gray-700 whitespace-pre-wrap overflow-x-auto",
                        renderId: "render-16b1715c",
                        as: "pre",
                        children: JSON.stringify(log.details, null, 2)
                      })
                    })]
                  })]
                })]
              })
            }, log.id))
          }), pagination.totalPages > 1 && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "p-6 border-t border-gray-200",
            renderId: "render-e544a834",
            as: "div",
            children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "flex items-center justify-between",
              renderId: "render-ab1cff5b",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "text-sm text-gray-600",
                renderId: "render-f4a0edbd",
                as: "div",
                children: ["Showing page ", pagination.page, " of ", pagination.totalPages, " ", "(", pagination.total, " total activities)"]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "flex gap-2",
                renderId: "render-12fac954",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  onClick: () => setCurrentPage(currentPage - 1),
                  disabled: currentPage <= 1,
                  className: "px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  renderId: "render-86ea3805",
                  as: "button",
                  children: "Previous"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  onClick: () => setCurrentPage(currentPage + 1),
                  disabled: currentPage >= pagination.totalPages,
                  className: "px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  renderId: "render-f9214a27",
                  as: "button",
                  children: "Next"
                })]
              })]
            })
          })]
        })
      })]
    })]
  });
}

const page$7 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(ActivityLogsPage, {
      ...props
    })
  });
});

const route2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$7
}, Symbol.toStringTag, { value: 'Module' }));

function CompaniesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedMenus, setExpandedMenus] = useState({
    "work-orders": true
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingCompany, setEditingCompany] = useState(null);
  const [formData, setFormData] = useState({
    company_name: "",
    address: "",
    contact_person: "",
    contact_number: "",
    gst_number: "",
    bank_name: "",
    bank_account_number: "",
    bank_ifsc: ""
  });
  const queryClient = useQueryClient();
  const toggleMenu = (menuKey) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };
  const {
    data: companiesData,
    isLoading,
    error
  } = useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      const response = await fetch("/api/companies");
      if (!response.ok) {
        throw new Error("Failed to fetch companies");
      }
      return response.json();
    }
  });
  const createMutation = useMutation({
    mutationFn: async (companyData) => {
      const response = await fetch("/api/companies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(companyData)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create company");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["companies"]);
      setShowAddForm(false);
      resetForm();
    }
  });
  const updateMutation = useMutation({
    mutationFn: async ({
      id,
      data
    }) => {
      const response = await fetch(`/api/companies/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update company");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["companies"]);
      setEditingCompany(null);
      resetForm();
    }
  });
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const response = await fetch(`/api/companies/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete company");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["companies"]);
    }
  });
  const companies = companiesData?.companies || [];
  const resetForm = () => {
    setFormData({
      company_name: "",
      address: "",
      contact_person: "",
      contact_number: "",
      gst_number: "",
      bank_name: "",
      bank_account_number: "",
      bank_ifsc: ""
    });
  };
  const handleInputChange = (e) => {
    const {
      name,
      value
    } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCompany) {
      updateMutation.mutate({
        id: editingCompany.id,
        data: formData
      });
    } else {
      createMutation.mutate(formData);
    }
  };
  const handleEdit = (company) => {
    setEditingCompany(company);
    setFormData({
      company_name: company.company_name || "",
      address: company.address || "",
      contact_person: company.contact_person || "",
      contact_number: company.contact_number || "",
      gst_number: company.gst_number || "",
      bank_name: company.bank_name || "",
      bank_account_number: company.bank_account_number || "",
      bank_ifsc: company.bank_ifsc || ""
    });
    setShowAddForm(true);
  };
  const handleDelete = (company) => {
    if (window.confirm(`Are you sure you want to delete ${company.company_name}?`)) {
      deleteMutation.mutate(company.id);
    }
  };
  const handleCloseForm = () => {
    setShowAddForm(false);
    setEditingCompany(null);
    resetForm();
  };
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "min-h-screen bg-[#F6F8FA] dark:bg-[#121212] flex",
    renderId: "render-8302746c",
    as: "div",
    children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: `fixed lg:relative inset-y-0 left-0 z-50 bg-white dark:bg-[#1E1E1E] transition-all duration-300 ${sidebarOpen ? "w-64" : "w-16"} flex-shrink-0 border-r border-[#E4E8EE] dark:border-[#333333] ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} lg:block flex flex-col`,
      renderId: "render-25d5a19a",
      as: "div",
      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: `${sidebarOpen ? "block" : "hidden lg:block"}`,
        renderId: "render-22cd348f",
        as: "div",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "sticky top-0 left-0 right-0 bg-[#0C8657] dark:bg-[#0C8657] h-14 flex items-center justify-between px-4 z-50",
          renderId: "render-7a939a8f",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-xl font-semibold text-white mb-0",
            renderId: "render-25945f4f",
            as: "h1",
            children: "WorkOrder"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            onClick: () => setSidebarOpen(!sidebarOpen),
            className: "text-white/80 hover:text-white active:text-white/60 transition-colors",
            renderId: "render-6d2e03d0",
            as: "button",
            children: /* @__PURE__ */ jsx(ChevronLeft, {
              size: 16
            })
          })]
        })
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: `${sidebarOpen ? "hidden" : "block"} p-4 border-b border-[#E4E8EE] dark:border-[#333333] hidden lg:block`,
        renderId: "render-9963131d",
        as: "div",
        children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          onClick: () => setSidebarOpen(!sidebarOpen),
          className: "text-[#9DA5BC] dark:text-[#888888] hover:text-[#5D667E] dark:hover:text-[#B0B0B0] active:text-[#1F2739] dark:active:text-[#FFFFFF] transition-colors",
          renderId: "render-b63d917b",
          as: "button",
          children: /* @__PURE__ */ jsx(ChevronLeft, {
            size: 16
          })
        })
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "flex-1 overflow-y-auto",
        renderId: "render-3c2276f9",
        as: "div",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "p-4 space-y-2",
          renderId: "render-369ade63",
          as: "nav",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            onClick: () => window.location.href = "/dashboard",
            className: "flex items-center gap-3 px-3 py-2 text-[#5D667E] dark:text-[#B0B0B0] hover:bg-[#DFF3EA] dark:hover:bg-[#0C8657]/20 active:bg-[#D1F0DD] dark:active:bg-[#0C8657]/30 hover:text-[#0C8657] dark:hover:text-[#22C55E] rounded-lg cursor-pointer transition-colors",
            renderId: "render-28257c56",
            as: "div",
            children: [/* @__PURE__ */ jsx(Home, {
              size: 16,
              className: "text-[#0C8657] dark:text-[#22C55E]"
            }), sidebarOpen && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "font-medium",
              renderId: "render-977622a1",
              as: "span",
              children: "Dashboard"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "flex items-center gap-3 px-3 py-2 bg-[#DFF3EA] dark:bg-[#0C8657]/20 text-[#0C8657] dark:text-[#22C55E] rounded-lg",
            renderId: "render-c34b1405",
            as: "div",
            children: [/* @__PURE__ */ jsx(Building2, {
              size: 16,
              className: "text-[#0C8657] dark:text-[#22C55E]"
            }), sidebarOpen && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "font-semibold",
              renderId: "render-302bc295",
              as: "span",
              children: "Companies"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-b8c1ef74",
            as: "div",
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: `flex items-center gap-3 px-3 py-2 cursor-pointer rounded-lg transition-colors ${expandedMenus["work-orders"] ? "bg-[#DFF3EA] dark:bg-[#0C8657]/20" : "hover:bg-[#DFF3EA] dark:hover:bg-[#0C8657]/20 active:bg-[#D1F0DD] dark:active:bg-[#0C8657]/30"}`,
              onClick: () => toggleMenu("work-orders"),
              renderId: "render-2a28358d",
              as: "div",
              children: [/* @__PURE__ */ jsx(FileText, {
                size: 16,
                className: "text-[#0C8657] dark:text-[#22C55E]"
              }), sidebarOpen && /* @__PURE__ */ jsxs(Fragment, {
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "font-semibold text-[#0C8657] dark:text-[#22C55E] flex-1",
                  renderId: "render-a1e32e32",
                  as: "span",
                  children: "Work Orders"
                }), expandedMenus["work-orders"] ? /* @__PURE__ */ jsx(ChevronUp, {
                  size: 14,
                  className: "text-[#5D667E] dark:text-[#B0B0B0]"
                }) : /* @__PURE__ */ jsx(ChevronDown, {
                  size: 14,
                  className: "text-[#5D667E] dark:text-[#B0B0B0]"
                })]
              })]
            }), expandedMenus["work-orders"] && sidebarOpen && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "ml-6 mt-2 space-y-1 bg-[#DFF3EA] dark:bg-[#0C8657]/20 p-2 rounded-lg",
              renderId: "render-e1be80fb",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                onClick: () => window.location.href = "/work-orders/create",
                className: "px-3 py-2 text-[#5D667E] dark:text-[#B0B0B0] text-sm cursor-pointer hover:text-[#0C8657] dark:hover:text-[#22C55E] hover:bg-[#E9F6F1] dark:hover:bg-[#0C8657]/30 active:bg-[#D1F0DD] dark:active:bg-[#0C8657]/40 rounded transition-colors",
                renderId: "render-1a023735",
                as: "div",
                children: "Create Work Order"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                onClick: () => window.location.href = "/work-orders",
                className: "px-3 py-2 text-[#5D667E] dark:text-[#B0B0B0] text-sm cursor-pointer hover:text-[#0C8657] dark:hover:text-[#22C55E] hover:bg-[#E9F6F1] dark:hover:bg-[#0C8657]/30 active:bg-[#D1F0DD] dark:active:bg-[#0C8657]/40 rounded transition-colors",
                renderId: "render-0804b718",
                as: "div",
                children: "Work Order List"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "px-3 py-2 text-[#5D667E] dark:text-[#B0B0B0] text-sm cursor-pointer hover:text-[#0C8657] dark:hover:text-[#22C55E] hover:bg-[#E9F6F1] dark:hover:bg-[#0C8657]/30 active:bg-[#D1F0DD] dark:active:bg-[#0C8657]/40 rounded transition-colors",
                renderId: "render-f3380578",
                as: "div",
                children: "Pending Payments"
              })]
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "flex items-center gap-3 px-3 py-2 text-[#5D667E] dark:text-[#B0B0B0] hover:bg-[#DFF3EA] dark:hover:bg-[#0C8657]/20 active:bg-[#D1F0DD] dark:active:bg-[#0C8657]/30 hover:text-[#0C8657] dark:hover:text-[#22C55E] rounded-lg cursor-pointer transition-colors",
            renderId: "render-fbc2e3b8",
            as: "div",
            children: [/* @__PURE__ */ jsx(Users, {
              size: 16,
              className: "text-[#0C8657] dark:text-[#22C55E]"
            }), sidebarOpen && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "font-medium flex-1",
              renderId: "render-e6eddf74",
              as: "span",
              children: "Vendors"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "flex items-center gap-3 px-3 py-2 text-[#5D667E] dark:text-[#B0B0B0] hover:bg-[#DFF3EA] dark:hover:bg-[#0C8657]/20 active:bg-[#D1F0DD] dark:active:bg-[#0C8657]/30 hover:text-[#0C8657] dark:hover:text-[#22C55E] rounded-lg cursor-pointer transition-colors",
            renderId: "render-5c4137ba",
            as: "div",
            children: [/* @__PURE__ */ jsx(Settings, {
              size: 16,
              className: "text-[#0C8657] dark:text-[#22C55E]"
            }), sidebarOpen && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "font-medium flex-1",
              renderId: "render-67656791",
              as: "span",
              children: "Settings"
            })]
          })]
        })
      })]
    }), sidebarOpen && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "fixed inset-0 bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70 z-40 lg:hidden",
      onClick: () => setSidebarOpen(false),
      renderId: "render-0515feb8",
      as: "div"
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "flex-1 flex flex-col min-w-0 lg:ml-0",
      renderId: "render-341c9d9a",
      as: "div",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "bg-[#0C8657] dark:bg-[#0C8657] h-14 flex items-center px-4 sm:px-6 text-white sticky top-0 z-30",
        renderId: "render-7f5dfc03",
        as: "header",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "flex items-center gap-4",
          renderId: "render-b6b32084",
          as: "div",
          children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "lg:hidden hover:bg-white/10 dark:hover:bg-white/10 active:bg-white/20 dark:active:bg-white/20 p-2 rounded transition-colors",
            onClick: () => setSidebarOpen(true),
            renderId: "render-6d78578b",
            as: "button",
            children: /* @__PURE__ */ jsx(Menu, {
              size: 24
            })
          })
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "flex-1 flex justify-center",
          renderId: "render-9f2384c7",
          as: "div",
          children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-xl font-semibold text-white",
            renderId: "render-1700738e",
            as: "h1",
            children: "Work Order Management System"
          })
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "flex items-center gap-2 sm:gap-4",
          renderId: "render-380d26c2",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "relative hover:bg-white/10 dark:hover:bg-white/10 active:bg-white/20 dark:active:bg-white/20 p-2 rounded transition-colors",
            renderId: "render-940df90d",
            as: "button",
            children: [/* @__PURE__ */ jsx(Bell, {
              size: 24
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "absolute -top-1 -right-1 w-3 h-3 bg-[#FFD83B] dark:bg-[#FCD34D] rounded-full",
              renderId: "render-f2989558",
              as: "div"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "hidden sm:flex items-center gap-2 cursor-pointer hover:bg-white/10 dark:hover:bg-white/10 active:bg-white/20 dark:active:bg-white/20 px-3 py-2 rounded transition-colors",
            renderId: "render-6f68d4f8",
            as: "button",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
              alt: "User Avatar",
              className: "w-8 h-8 rounded-full",
              renderId: "render-6863d7ed",
              as: "img"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "hidden md:block",
              renderId: "render-88a415b8",
              as: "span",
              children: "Admin User"
            }), /* @__PURE__ */ jsx(ChevronDown, {
              size: 20
            })]
          })]
        })]
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "flex-1 p-6 bg-[#F6F8FA] dark:bg-[#121212]",
        renderId: "render-9c6f85ac",
        as: "main",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "flex items-center justify-between mb-6",
          renderId: "render-be7d3351",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-2xl font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
            renderId: "render-900c5b33",
            as: "h1",
            children: "Company Master"
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            onClick: () => setShowAddForm(true),
            className: "flex items-center gap-2 px-4 py-2 bg-[#0C8657] dark:bg-[#059669] text-white rounded-lg hover:bg-[#0a6b47] dark:hover:bg-[#047857] transition-colors",
            renderId: "render-1c18eb0d",
            as: "button",
            children: [/* @__PURE__ */ jsx(Plus, {
              size: 16
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              renderId: "render-cbe99dc6",
              as: "span",
              children: "Add New Company"
            })]
          })]
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] overflow-hidden",
          renderId: "render-c6f17c0d",
          as: "div",
          children: isLoading ? /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "flex items-center justify-center py-12",
            renderId: "render-835ee7bf",
            as: "div",
            children: /* @__PURE__ */ jsx(Loader2, {
              size: 32,
              className: "text-[#0C8657] dark:text-[#22C55E] animate-spin"
            })
          }) : error ? /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "flex items-center justify-center py-12",
            renderId: "render-780c3878",
            as: "div",
            children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "text-center",
              renderId: "render-d721ce14",
              as: "div",
              children: [/* @__PURE__ */ jsx(AlertCircle, {
                size: 32,
                className: "text-[#E95D5D] dark:text-[#EF4444] mx-auto mb-2"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "text-[#5D667E] dark:text-[#B0B0B0]",
                renderId: "render-08d6e735",
                as: "p",
                children: error.message
              })]
            })
          }) : companies.length === 0 ? /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "flex items-center justify-center py-12",
            renderId: "render-0ace16b1",
            as: "div",
            children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "text-center",
              renderId: "render-7a9f96f3",
              as: "div",
              children: [/* @__PURE__ */ jsx(Building2, {
                size: 32,
                className: "text-[#9DA5BC] dark:text-[#888888] mx-auto mb-2"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "text-[#5D667E] dark:text-[#B0B0B0]",
                renderId: "render-63fd193f",
                as: "p",
                children: "No companies found"
              })]
            })
          }) : /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "w-full",
            renderId: "render-c06bc58c",
            as: "table",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "bg-[#F7FAFC] dark:bg-[#262626] border-b border-[#E4E8EE] dark:border-[#333333]",
              renderId: "render-b0fa8d5d",
              as: "thead",
              children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-bf2d6fec",
                as: "tr",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-left py-3 px-4 font-medium text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-e3775b96",
                  as: "th",
                  children: "Company Name"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-left py-3 px-4 font-medium text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-06739cba",
                  as: "th",
                  children: "Contact Person"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-left py-3 px-4 font-medium text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-34268dfb",
                  as: "th",
                  children: "Contact Number"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-left py-3 px-4 font-medium text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-64a68a13",
                  as: "th",
                  children: "Actions"
                })]
              })
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              renderId: "render-ad8a6825",
              as: "tbody",
              children: companies.map((company) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "border-b border-[#E4E8EE] dark:border-[#333333] hover:bg-[#F7FAFC] dark:hover:bg-[#262626] transition-colors",
                renderId: "render-a2ca0c08",
                as: "tr",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "py-3 px-4 text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-60431baf",
                  as: "td",
                  children: company.company_name
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "py-3 px-4 text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-75939067",
                  as: "td",
                  children: company.contact_person || "-"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "py-3 px-4 text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-ab5ddabf",
                  as: "td",
                  children: company.contact_number || "-"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "py-3 px-4",
                  renderId: "render-44322d70",
                  as: "td",
                  children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    className: "flex items-center gap-2",
                    renderId: "render-149defa6",
                    as: "div",
                    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      onClick: () => handleEdit(company),
                      className: "p-1 text-[#0C8657] dark:text-[#22C55E] hover:bg-[#DFF3EA] dark:hover:bg-[#0C8657]/20 rounded transition-colors",
                      renderId: "render-0dff9f22",
                      as: "button",
                      children: /* @__PURE__ */ jsx(Edit, {
                        size: 16
                      })
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      onClick: () => handleDelete(company),
                      className: "p-1 text-[#E95D5D] dark:text-[#EF4444] hover:bg-[#FEF2F2] dark:hover:bg-[#EF4444]/20 rounded transition-colors",
                      renderId: "render-9bfb0650",
                      as: "button",
                      children: /* @__PURE__ */ jsx(Trash2, {
                        size: 16
                      })
                    })]
                  })
                })]
              }, company.id))
            })]
          })
        })]
      })]
    }), showAddForm && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "fixed inset-0 bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70 z-50 flex items-center justify-center p-4",
      renderId: "render-5dd789d2",
      as: "div",
      children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "bg-white dark:bg-[#1E1E1E] rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto",
        renderId: "render-12f64c15",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "flex items-center justify-between mb-4",
          renderId: "render-a08f2ef7",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
            renderId: "render-8a319d67",
            as: "h3",
            children: editingCompany ? "Edit Company" : "Add New Company"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            onClick: handleCloseForm,
            className: "p-1 text-[#5D667E] dark:text-[#B0B0B0] hover:text-[#1F2739] dark:hover:text-[#FFFFFF] transition-colors",
            renderId: "render-21df0ed1",
            as: "button",
            children: /* @__PURE__ */ jsx(X, {
              size: 20
            })
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          onSubmit: handleSubmit,
          className: "space-y-4",
          renderId: "render-f0079f08",
          as: "form",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-984cc659",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
              renderId: "render-12ecc77b",
              as: "label",
              children: "Company Name *"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              type: "text",
              name: "company_name",
              value: formData.company_name,
              onChange: handleInputChange,
              required: true,
              className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
              renderId: "render-403f261c",
              as: "input"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-4c942dc3",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
              renderId: "render-2a4b645a",
              as: "label",
              children: "Address"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              name: "address",
              value: formData.address,
              onChange: handleInputChange,
              rows: 3,
              className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
              renderId: "render-6c3e732c",
              as: "textarea"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-0e6c62b4",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
              renderId: "render-b2957a34",
              as: "label",
              children: "Contact Person"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              type: "text",
              name: "contact_person",
              value: formData.contact_person,
              onChange: handleInputChange,
              className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
              renderId: "render-78ba967c",
              as: "input"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-e82e39d3",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
              renderId: "render-1d9e13ef",
              as: "label",
              children: "Contact Number"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              type: "tel",
              name: "contact_number",
              value: formData.contact_number,
              onChange: handleInputChange,
              className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
              renderId: "render-5a7bfa23",
              as: "input"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-ee4dafdb",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
              renderId: "render-ce916186",
              as: "label",
              children: "GST Number"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              type: "text",
              name: "gst_number",
              value: formData.gst_number,
              onChange: handleInputChange,
              className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
              renderId: "render-4a82c14a",
              as: "input"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-8405965c",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
              renderId: "render-24cdf5e5",
              as: "label",
              children: "Bank Name"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              type: "text",
              name: "bank_name",
              value: formData.bank_name,
              onChange: handleInputChange,
              className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
              renderId: "render-d3752f9e",
              as: "input"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-687af3b6",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
              renderId: "render-ac807a13",
              as: "label",
              children: "Bank Account Number"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              type: "text",
              name: "bank_account_number",
              value: formData.bank_account_number,
              onChange: handleInputChange,
              className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
              renderId: "render-9c3af52d",
              as: "input"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-ec13efdd",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
              renderId: "render-064e8098",
              as: "label",
              children: "Bank IFSC"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              type: "text",
              name: "bank_ifsc",
              value: formData.bank_ifsc,
              onChange: handleInputChange,
              className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
              renderId: "render-892c5f63",
              as: "input"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "flex gap-3 pt-4",
            renderId: "render-cbd6f6db",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              type: "button",
              onClick: handleCloseForm,
              className: "flex-1 px-4 py-2 border border-[#E4E8EE] dark:border-[#333333] text-[#5D667E] dark:text-[#B0B0B0] rounded-lg hover:bg-[#F7FAFC] dark:hover:bg-[#262626] transition-colors",
              renderId: "render-c89fb13e",
              as: "button",
              children: "Cancel"
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              type: "submit",
              disabled: createMutation.isPending || updateMutation.isPending,
              className: "flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#0C8657] dark:bg-[#059669] text-white rounded-lg hover:bg-[#0a6b47] dark:hover:bg-[#047857] disabled:opacity-50 transition-colors",
              renderId: "render-a6097d0f",
              as: "button",
              children: [createMutation.isPending || updateMutation.isPending ? /* @__PURE__ */ jsx(Loader2, {
                size: 16,
                className: "animate-spin"
              }) : /* @__PURE__ */ jsx(Save, {
                size: 16
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                renderId: "render-20928d5a",
                as: "span",
                children: "Save"
              })]
            })]
          })]
        }), (createMutation.error || updateMutation.error) && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "mt-4 p-3 bg-[#FEF2F2] dark:bg-[#EF4444]/20 border border-[#FCA5A5] dark:border-[#EF4444]/30 rounded-lg",
          renderId: "render-92982023",
          as: "div",
          children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-sm text-[#E95D5D] dark:text-[#EF4444]",
            renderId: "render-8b7ea23f",
            as: "p",
            children: createMutation.error?.message || updateMutation.error?.message
          })
        })]
      })
    })]
  });
}

const page$6 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(CompaniesPage, {
      ...props
    })
  });
});

const route3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$6
}, Symbol.toStringTag, { value: 'Module' }));

function FullScreenError({
  message
}) {
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    className: "min-h-screen bg-[#F6F8FA] dark:bg-[#121212] flex items-center justify-center",
    renderId: "render-3298bc60",
    as: "div",
    children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "text-center",
      renderId: "render-8079987c",
      as: "div",
      children: [/* @__PURE__ */ jsx(AlertCircle, {
        size: 32,
        className: "text-[#E95D5D] dark:text-[#EF4444] mx-auto mb-2"
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "text-[#5D667E] dark:text-[#B0B0B0]",
        renderId: "render-936c41b2",
        as: "p",
        children: message
      })]
    })
  });
}

function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedMenus, setExpandedMenus] = useState({
    "work-orders": true
  });
  const toggleMenu = (menuKey) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };
  const {
    data: workOrdersData,
    isLoading: ordersLoading,
    error: ordersError
  } = useQuery({
    queryKey: ["work-orders"],
    queryFn: async () => {
      try {
        const response = await fetch("/api/work-orders");
        if (!response.ok) {
          throw new Error(`Failed to fetch work orders: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching work orders:", error);
        throw error;
      }
    },
    retry: 3,
    retryDelay: 1e3
  });
  const {
    data: companiesData,
    isLoading: companiesLoading,
    error: companiesError
  } = useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      try {
        const response = await fetch("/api/companies");
        if (!response.ok) {
          throw new Error(`Failed to fetch companies: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching companies:", error);
        throw error;
      }
    },
    retry: 3,
    retryDelay: 1e3
  });
  if (ordersError || companiesError) {
    return /* @__PURE__ */ jsx(FullScreenError, {
      message: `Error loading dashboard: ${ordersError?.message || companiesError?.message || "Unknown error"}`
    });
  }
  const workOrders = Array.isArray(workOrdersData?.workOrders) ? workOrdersData.workOrders : [];
  Array.isArray(companiesData?.companies) ? companiesData.companies : [];
  const totalWorkOrders = workOrders.length;
  const activeWorkOrders = workOrders.filter((wo) => wo && (wo.status === "In Progress" || wo.status === "Active")).length;
  const pendingApprovals = workOrders.filter((wo) => wo && wo.status === "Draft").length;
  const totalValue = workOrders.reduce((sum, wo) => {
    if (!wo || !wo.net_amount) return sum;
    const amount = parseFloat(wo.net_amount);
    return sum + (isNaN(amount) ? 0 : amount);
  }, 0);
  const statusCounts = {
    Draft: workOrders.filter((wo) => wo && wo.status === "Draft").length,
    "In Progress": workOrders.filter((wo) => wo && wo.status === "In Progress").length,
    Active: workOrders.filter((wo) => wo && wo.status === "Active").length,
    Completed: workOrders.filter((wo) => wo && wo.status === "Completed").length
  };
  const recentWorkOrders = workOrders.filter((wo) => wo && wo.id && wo.created_at).sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB - dateA;
  }).slice(0, 5);
  const formatCurrency = (amount) => {
    if (!amount || isNaN(amount)) return "Rs. 0";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      });
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  };
  const getStatusBadge = (status) => {
    if (!status) return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "px-2 py-1 rounded-full text-xs font-medium bg-gray-500 text-white",
      renderId: "render-a2c2f18a",
      as: "span",
      children: "Unknown"
    });
    const statusConfig = {
      Draft: {
        bg: "bg-gray-500",
        text: "text-white"
      },
      "In Progress": {
        bg: "bg-yellow-500",
        text: "text-white"
      },
      Completed: {
        bg: "bg-green-500",
        text: "text-white"
      },
      Active: {
        bg: "bg-blue-500",
        text: "text-white"
      }
    };
    const config = statusConfig[status] || statusConfig["Draft"];
    return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: `px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`,
      renderId: "render-3130b316",
      as: "span",
      children: status
    });
  };
  const getStatusDot = (status) => {
    if (!status) return "bg-gray-500";
    const statusConfig = {
      Draft: "bg-gray-500",
      "In Progress": "bg-yellow-500",
      Completed: "bg-green-500",
      Active: "bg-blue-500"
    };
    return statusConfig[status] || "bg-gray-500";
  };
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "min-h-screen bg-gray-50 flex",
    renderId: "render-4132469c",
    as: "div",
    children: [sidebarOpen && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "fixed lg:relative inset-y-0 left-0 z-50 bg-white w-64 flex-shrink-0 border-r border-gray-200 flex flex-col",
      renderId: "render-734dc48f",
      as: "div",
      children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "flex-1 overflow-y-auto",
        renderId: "render-53b29d53",
        as: "div",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "p-4 space-y-2",
          renderId: "render-9abfd00c",
          as: "nav",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "flex items-center gap-3 px-3 py-2 bg-green-50 text-green-700 rounded-lg",
            renderId: "render-019f9d54",
            as: "div",
            children: [/* @__PURE__ */ jsx(Home, {
              size: 16,
              className: "text-green-700"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "font-semibold",
              renderId: "render-d3e76f6e",
              as: "span",
              children: "Dashboard"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            onClick: () => window.location.href = "/companies",
            className: "flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-lg cursor-pointer transition-colors",
            renderId: "render-533a7868",
            as: "div",
            children: [/* @__PURE__ */ jsx(Building2, {
              size: 16,
              className: "text-green-700"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "font-medium",
              renderId: "render-3a328595",
              as: "span",
              children: "Companies"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-21ea48f6",
            as: "div",
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: `flex items-center gap-3 px-3 py-2 cursor-pointer rounded-lg transition-colors ${expandedMenus["work-orders"] ? "bg-green-50" : "hover:bg-green-50"}`,
              onClick: () => toggleMenu("work-orders"),
              renderId: "render-99976b5d",
              as: "div",
              children: [/* @__PURE__ */ jsx(FileText, {
                size: 16,
                className: "text-green-700"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "font-semibold text-green-700 flex-1",
                renderId: "render-dd8d4cf6",
                as: "span",
                children: "Work Orders"
              }), expandedMenus["work-orders"] ? /* @__PURE__ */ jsx(ChevronUp, {
                size: 14,
                className: "text-gray-600"
              }) : /* @__PURE__ */ jsx(ChevronDown, {
                size: 14,
                className: "text-gray-600"
              })]
            }), expandedMenus["work-orders"] && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "ml-6 mt-2 space-y-1 bg-green-50 p-2 rounded-lg",
              renderId: "render-fb252dcc",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                onClick: () => window.location.href = "/work-orders/create",
                className: "px-3 py-2 text-gray-600 text-sm cursor-pointer hover:text-green-700 hover:bg-green-100 rounded transition-colors",
                renderId: "render-91a7b1e6",
                as: "div",
                children: "Create Work Order"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                onClick: () => window.location.href = "/work-orders",
                className: "px-3 py-2 text-gray-600 text-sm cursor-pointer hover:text-green-700 hover:bg-green-100 rounded transition-colors",
                renderId: "render-bdea2fce",
                as: "div",
                children: "Work Order List"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "px-3 py-2 text-gray-600 text-sm cursor-pointer hover:text-green-700 hover:bg-green-100 rounded transition-colors",
                renderId: "render-d8d3b484",
                as: "div",
                children: "Pending Payments"
              })]
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            onClick: () => window.location.href = "/vendors",
            className: "flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-lg cursor-pointer transition-colors",
            renderId: "render-3f655c2f",
            as: "div",
            children: [/* @__PURE__ */ jsx(Users, {
              size: 16,
              className: "text-green-700"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "font-medium flex-1",
              renderId: "render-54af2cd6",
              as: "span",
              children: "Vendors"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            onClick: () => window.location.href = "/activity-logs",
            className: "flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-lg cursor-pointer transition-colors",
            renderId: "render-6ded8617",
            as: "div",
            children: [/* @__PURE__ */ jsx(Activity, {
              size: 16,
              className: "text-green-700"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "font-medium flex-1",
              renderId: "render-7bdfe8d7",
              as: "span",
              children: "Activity Log"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-lg cursor-pointer transition-colors",
            renderId: "render-b2892748",
            as: "div",
            children: [/* @__PURE__ */ jsx(Settings, {
              size: 16,
              className: "text-green-700"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "font-medium flex-1",
              renderId: "render-c17f1920",
              as: "span",
              children: "Settings"
            })]
          })]
        })
      })
    }), sidebarOpen && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden",
      onClick: () => setSidebarOpen(false),
      renderId: "render-034aebbd",
      as: "div"
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "flex-1 flex flex-col min-w-0",
      renderId: "render-703de8a8",
      as: "div",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "bg-green-600 h-14 flex items-center px-4 sm:px-6 text-white sticky top-0 z-30",
        renderId: "render-14507bd7",
        as: "header",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "flex items-center gap-4",
          renderId: "render-1e2a9bbb",
          as: "div",
          children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "hover:bg-white/10 p-2 rounded transition-colors",
            onClick: () => setSidebarOpen(!sidebarOpen),
            renderId: "render-e89c0b16",
            as: "button",
            children: /* @__PURE__ */ jsx(Menu, {
              size: 24
            })
          })
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "flex-1 flex justify-center",
          renderId: "render-56699b47",
          as: "div",
          children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-xl font-semibold text-white",
            renderId: "render-c4e9978e",
            as: "h1",
            children: "Work Order Management System"
          })
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "flex items-center gap-2 sm:gap-4",
          renderId: "render-c24930c5",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "relative hover:bg-white/10 p-2 rounded transition-colors",
            renderId: "render-80328f26",
            as: "button",
            children: [/* @__PURE__ */ jsx(Bell, {
              size: 24
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full",
              renderId: "render-27bfce98",
              as: "div"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "hidden sm:flex items-center gap-2 cursor-pointer hover:bg-white/10 px-3 py-2 rounded transition-colors",
            renderId: "render-dab1e3d7",
            as: "button",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
              alt: "User Avatar",
              className: "w-8 h-8 rounded-full",
              renderId: "render-b790346c",
              as: "img"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "hidden md:block",
              renderId: "render-74b92af1",
              as: "span",
              children: "Admin User"
            }), /* @__PURE__ */ jsx(ChevronDown, {
              size: 20
            })]
          })]
        })]
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "flex-1 p-6 bg-gray-50",
        renderId: "render-11c94caa",
        as: "main",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "max-w-7xl mx-auto",
          renderId: "render-d43287c7",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "mb-8",
            renderId: "render-b6e33605",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-3xl font-bold text-gray-900 mb-2",
              renderId: "render-ceb7a52e",
              as: "h1",
              children: "Dashboard"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-gray-600",
              renderId: "render-7dfccfd5",
              as: "p",
              children: "Welcome back! Here's what's happening with your work orders."
            })]
          }), ordersLoading || companiesLoading ? /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "flex items-center justify-center py-12",
            renderId: "render-42334a54",
            as: "div",
            children: /* @__PURE__ */ jsx(Loader2, {
              size: 32,
              className: "text-green-600 animate-spin"
            })
          }) : /* @__PURE__ */ jsxs(Fragment, {
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
              renderId: "render-3c9ad059",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200",
                renderId: "render-9fca131f",
                as: "div",
                children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  className: "flex items-center justify-between",
                  renderId: "render-96967bf0",
                  as: "div",
                  children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    renderId: "render-a1896b5d",
                    as: "div",
                    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-blue-700 text-sm font-medium",
                      renderId: "render-86b5003f",
                      as: "p",
                      children: "Total Work Orders"
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-3xl font-bold text-blue-800 mt-2",
                      renderId: "render-3bcf210e",
                      as: "p",
                      children: totalWorkOrders
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-blue-600 text-xs mt-1",
                      renderId: "render-c2525b03",
                      as: "p",
                      children: "All Time"
                    })]
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "bg-blue-200 p-3 rounded-full",
                    renderId: "render-998b9932",
                    as: "div",
                    children: /* @__PURE__ */ jsx(FileText, {
                      size: 24,
                      className: "text-blue-700"
                    })
                  })]
                })
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 border border-yellow-200",
                renderId: "render-2049d4e8",
                as: "div",
                children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  className: "flex items-center justify-between",
                  renderId: "render-f85e4ddf",
                  as: "div",
                  children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    renderId: "render-dcd62ee6",
                    as: "div",
                    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-yellow-700 text-sm font-medium",
                      renderId: "render-16f778f0",
                      as: "p",
                      children: "Active Work Orders"
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-3xl font-bold text-yellow-800 mt-2",
                      renderId: "render-12bafb12",
                      as: "p",
                      children: activeWorkOrders
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-yellow-600 text-xs mt-1",
                      renderId: "render-bef038b5",
                      as: "p",
                      children: "Currently Active"
                    })]
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "bg-yellow-200 p-3 rounded-full",
                    renderId: "render-5b24ee7b",
                    as: "div",
                    children: /* @__PURE__ */ jsx(Clock, {
                      size: 24,
                      className: "text-yellow-700"
                    })
                  })]
                })
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200",
                renderId: "render-6d32f4b3",
                as: "div",
                children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  className: "flex items-center justify-between",
                  renderId: "render-b876eafd",
                  as: "div",
                  children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    renderId: "render-3239a22d",
                    as: "div",
                    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-orange-700 text-sm font-medium",
                      renderId: "render-71cad86e",
                      as: "p",
                      children: "Pending Approvals"
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-3xl font-bold text-orange-800 mt-2",
                      renderId: "render-18b6d032",
                      as: "p",
                      children: pendingApprovals
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-orange-600 text-xs mt-1",
                      renderId: "render-1edf9b7c",
                      as: "p",
                      children: "Awaiting Action"
                    })]
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "bg-orange-200 p-3 rounded-full",
                    renderId: "render-3cf20e64",
                    as: "div",
                    children: /* @__PURE__ */ jsx(AlertCircle, {
                      size: 24,
                      className: "text-orange-700"
                    })
                  })]
                })
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200",
                renderId: "render-e9284b2b",
                as: "div",
                children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  className: "flex items-center justify-between",
                  renderId: "render-1611b449",
                  as: "div",
                  children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    renderId: "render-8279e330",
                    as: "div",
                    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-green-700 text-sm font-medium",
                      renderId: "render-c7f50c1d",
                      as: "p",
                      children: "Total Value"
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-3xl font-bold text-green-800 mt-2",
                      renderId: "render-5a3910d6",
                      as: "p",
                      children: formatCurrency(totalValue).replace("₹", "Rs. ")
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-green-600 text-xs mt-1",
                      renderId: "render-d39f652e",
                      as: "p",
                      children: "Total Pipeline"
                    })]
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "bg-green-200 p-3 rounded-full",
                    renderId: "render-87ca4a55",
                    as: "div",
                    children: /* @__PURE__ */ jsx(IndianRupee, {
                      size: 24,
                      className: "text-green-700"
                    })
                  })]
                })
              })]
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "bg-white rounded-lg border border-gray-200 p-6 mb-8",
              renderId: "render-bdaeed17",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "text-lg font-semibold text-gray-900 mb-4",
                renderId: "render-e44c4f56",
                as: "h2",
                children: "Quick Actions"
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "flex flex-col sm:flex-row gap-4",
                renderId: "render-23df3f44",
                as: "div",
                children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  onClick: () => window.location.href = "/work-orders/create",
                  className: "flex items-center justify-center gap-3 px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-lg flex-1 sm:flex-none",
                  renderId: "render-5be2b1f7",
                  as: "button",
                  children: [/* @__PURE__ */ jsx(Plus, {
                    size: 20
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    renderId: "render-ab242d15",
                    as: "span",
                    children: "Create New Work Order"
                  })]
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  onClick: () => window.location.href = "/companies",
                  className: "flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors font-medium",
                  renderId: "render-fb238b28",
                  as: "button",
                  children: [/* @__PURE__ */ jsx(Building2, {
                    size: 20
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    renderId: "render-2eca5e29",
                    as: "span",
                    children: "Manage Companies"
                  })]
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  onClick: () => window.location.href = "/work-orders",
                  className: "flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors font-medium",
                  renderId: "render-ec751898",
                  as: "button",
                  children: [/* @__PURE__ */ jsx(Eye, {
                    size: 20
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    renderId: "render-86992819",
                    as: "span",
                    children: "View All Work Orders"
                  })]
                })]
              })]
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "grid lg:grid-cols-5 gap-8",
              renderId: "render-dbc3a0e8",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "lg:col-span-3",
                renderId: "render-c41ff94b",
                as: "div",
                children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  className: "bg-white rounded-lg border border-gray-200 p-6",
                  renderId: "render-9a7e1802",
                  as: "div",
                  children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    className: "flex items-center justify-between mb-6",
                    renderId: "render-1ec62f51",
                    as: "div",
                    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-lg font-semibold text-gray-900",
                      renderId: "render-3abb8157",
                      as: "h2",
                      children: "Recent Work Orders"
                    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                      onClick: () => window.location.href = "/work-orders",
                      className: "flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors text-sm font-medium",
                      renderId: "render-9f2fe131",
                      as: "button",
                      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        renderId: "render-61c8fb82",
                        as: "span",
                        children: "View All"
                      }), /* @__PURE__ */ jsx(ArrowRight, {
                        size: 16
                      })]
                    })]
                  }), recentWorkOrders.length === 0 ? /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    className: "text-center py-8",
                    renderId: "render-641b9dc9",
                    as: "div",
                    children: [/* @__PURE__ */ jsx(FileText, {
                      size: 32,
                      className: "text-gray-400 mx-auto mb-2"
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-gray-600",
                      renderId: "render-f07ef89b",
                      as: "p",
                      children: "No work orders found"
                    })]
                  }) : /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "overflow-x-auto",
                    renderId: "render-ca9e3c84",
                    as: "div",
                    children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                      className: "w-full",
                      renderId: "render-d8457b7e",
                      as: "table",
                      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        className: "bg-gray-50 border-b border-gray-200",
                        renderId: "render-097abeeb",
                        as: "thead",
                        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                          renderId: "render-c6360416",
                          as: "tr",
                          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                            className: "text-left py-3 px-4 font-medium text-gray-600 text-sm",
                            renderId: "render-edc7f420",
                            as: "th",
                            children: "WO Number"
                          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                            className: "text-left py-3 px-4 font-medium text-gray-600 text-sm",
                            renderId: "render-a3b56ce3",
                            as: "th",
                            children: "Vendor Name"
                          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                            className: "text-left py-3 px-4 font-medium text-gray-600 text-sm",
                            renderId: "render-a6cad606",
                            as: "th",
                            children: "Date"
                          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                            className: "text-left py-3 px-4 font-medium text-gray-600 text-sm",
                            renderId: "render-1b083821",
                            as: "th",
                            children: "Net Amount"
                          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                            className: "text-left py-3 px-4 font-medium text-gray-600 text-sm",
                            renderId: "render-f8addcd7",
                            as: "th",
                            children: "Status"
                          })]
                        })
                      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        renderId: "render-0cdbf73a",
                        as: "tbody",
                        children: recentWorkOrders.map((workOrder) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                          className: "border-b border-gray-200 hover:bg-gray-50 transition-colors",
                          renderId: "render-fe5c18da",
                          as: "tr",
                          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                            className: "py-3 px-4",
                            renderId: "render-91b25600",
                            as: "td",
                            children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                              onClick: () => window.location.href = `/work-orders/${workOrder.id}`,
                              className: "text-green-600 hover:underline font-medium text-sm",
                              renderId: "render-5246b0e6",
                              as: "button",
                              children: workOrder.wo_number || "N/A"
                            })
                          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                            className: "py-3 px-4 text-gray-900 text-sm",
                            renderId: "render-56964f9d",
                            as: "td",
                            children: workOrder.vendor_name || "N/A"
                          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                            className: "py-3 px-4 text-gray-600 text-sm",
                            renderId: "render-0fda7e20",
                            as: "td",
                            children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                              className: "flex items-center gap-1",
                              renderId: "render-f947b334",
                              as: "div",
                              children: [/* @__PURE__ */ jsx(Calendar, {
                                size: 12
                              }), formatDate(workOrder.date)]
                            })
                          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                            className: "py-3 px-4 text-gray-900 font-semibold text-sm",
                            renderId: "render-1788024c",
                            as: "td",
                            children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                              className: "flex items-center gap-1",
                              renderId: "render-4681d02d",
                              as: "div",
                              children: [/* @__PURE__ */ jsx(IndianRupee, {
                                size: 12
                              }), formatCurrency(workOrder.net_amount).replace("₹", "").replace(".00", "")]
                            })
                          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                            className: "py-3 px-4",
                            renderId: "render-ccaae773",
                            as: "td",
                            children: getStatusBadge(workOrder.status)
                          })]
                        }, workOrder.id))
                      })]
                    })
                  })]
                })
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "lg:col-span-2",
                renderId: "render-ee17a7d0",
                as: "div",
                children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  className: "bg-white rounded-lg border border-gray-200 p-6",
                  renderId: "render-d95d8e57",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "text-lg font-semibold text-gray-900 mb-6",
                    renderId: "render-c309e4d2",
                    as: "h2",
                    children: "Status Overview"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "space-y-4",
                    renderId: "render-417a2b1c",
                    as: "div",
                    children: Object.entries(statusCounts).map(([status, count]) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                      className: "flex items-center justify-between",
                      renderId: "render-74cde294",
                      as: "div",
                      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                        className: "flex items-center gap-3",
                        renderId: "render-c8345593",
                        as: "div",
                        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                          className: `w-3 h-3 rounded-full ${getStatusDot(status)}`,
                          renderId: "render-c183dcf8",
                          as: "div"
                        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                          className: "text-gray-900 font-medium",
                          renderId: "render-332ae756",
                          as: "span",
                          children: status
                        })]
                      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        className: "bg-gray-50 px-3 py-1 rounded-full",
                        renderId: "render-91884499",
                        as: "div",
                        children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                          className: "text-gray-900 font-bold",
                          renderId: "render-48ea8bda",
                          as: "span",
                          children: count
                        })
                      })]
                    }, status))
                  })]
                })
              })]
            })]
          })]
        })
      })]
    })]
  });
}

const page$5 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(DashboardPage, {
      ...props
    })
  });
});

const route4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$5
}, Symbol.toStringTag, { value: 'Module' }));

function VendorsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedMenus, setExpandedMenus] = useState({
    "work-orders": true
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingVendor, setEditingVendor] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [vendorTypeFilter, setVendorTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [formData, setFormData] = useState({
    vendor_name: "",
    vendor_type: "",
    contact_person: "",
    contact_number: "",
    email: "",
    address: "",
    gst_number: "",
    pan_number: "",
    bank_name: "",
    bank_account_number: "",
    bank_ifsc: "",
    default_retention_percent: 0,
    status: "Active"
  });
  const queryClient = useQueryClient();
  const toggleMenu = (menuKey) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };
  const {
    data: vendorsData,
    isLoading,
    error
  } = useQuery({
    queryKey: ["vendors", searchTerm, vendorTypeFilter, statusFilter],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (searchTerm) params.append("search", searchTerm);
      if (vendorTypeFilter !== "All") params.append("vendor_type", vendorTypeFilter);
      if (statusFilter !== "All") params.append("status", statusFilter);
      const response = await fetch(`/api/vendors?${params}`);
      if (!response.ok) {
        throw new Error("Failed to fetch vendors");
      }
      return response.json();
    }
  });
  const createMutation = useMutation({
    mutationFn: async (vendorData) => {
      const response = await fetch("/api/vendors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(vendorData)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create vendor");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["vendors"]);
      setShowAddForm(false);
      resetForm();
    }
  });
  const updateMutation = useMutation({
    mutationFn: async ({
      id,
      data
    }) => {
      const response = await fetch(`/api/vendors/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update vendor");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["vendors"]);
      setEditingVendor(null);
      resetForm();
    }
  });
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const response = await fetch(`/api/vendors/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete vendor");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["vendors"]);
    }
  });
  const vendors = vendorsData?.vendors || [];
  const resetForm = () => {
    setFormData({
      vendor_name: "",
      vendor_type: "",
      contact_person: "",
      contact_number: "",
      email: "",
      address: "",
      gst_number: "",
      pan_number: "",
      bank_name: "",
      bank_account_number: "",
      bank_ifsc: "",
      default_retention_percent: 0,
      status: "Active"
    });
  };
  const handleInputChange = (e) => {
    const {
      name,
      value
    } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingVendor) {
      updateMutation.mutate({
        id: editingVendor.id,
        data: formData
      });
    } else {
      createMutation.mutate(formData);
    }
  };
  const handleEdit = (vendor) => {
    setEditingVendor(vendor);
    setFormData({
      vendor_name: vendor.vendor_name || "",
      vendor_type: vendor.vendor_type || "",
      contact_person: vendor.contact_person || "",
      contact_number: vendor.contact_number || "",
      email: vendor.email || "",
      address: vendor.address || "",
      gst_number: vendor.gst_number || "",
      pan_number: vendor.pan_number || "",
      bank_name: vendor.bank_name || "",
      bank_account_number: vendor.bank_account_number || "",
      bank_ifsc: vendor.bank_ifsc || "",
      default_retention_percent: vendor.default_retention_percent || 0,
      status: vendor.status || "Active"
    });
    setShowAddForm(true);
  };
  const handleDelete = (vendor) => {
    if (window.confirm(`Are you sure you want to delete ${vendor.vendor_name}?`)) {
      deleteMutation.mutate(vendor.id);
    }
  };
  const handleCloseForm = () => {
    setShowAddForm(false);
    setEditingVendor(null);
    resetForm();
  };
  const getVendorTypeBadge = (type) => {
    const config = {
      "Service Provider": {
        bg: "bg-blue-100",
        text: "text-blue-800"
      },
      "Contractor": {
        bg: "bg-green-100",
        text: "text-green-800"
      }
    };
    const typeConfig = config[type] || {
      bg: "bg-gray-100",
      text: "text-gray-800"
    };
    return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: `px-2 py-1 rounded-full text-xs font-medium ${typeConfig.bg} ${typeConfig.text}`,
      renderId: "render-d9fc9e2a",
      as: "span",
      children: type
    });
  };
  const getStatusBadge = (status) => {
    const config = {
      "Active": {
        bg: "bg-green-100",
        text: "text-green-800"
      },
      "Inactive": {
        bg: "bg-gray-100",
        text: "text-gray-800"
      }
    };
    const statusConfig = config[status] || {
      bg: "bg-gray-100",
      text: "text-gray-800"
    };
    return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: `px-2 py-1 rounded-full text-xs font-medium ${statusConfig.bg} ${statusConfig.text}`,
      renderId: "render-089c21af",
      as: "span",
      children: status
    });
  };
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "min-h-screen bg-[#F6F8FA] dark:bg-[#121212] flex",
    renderId: "render-b65925d2",
    as: "div",
    children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: `fixed lg:relative inset-y-0 left-0 z-50 bg-white dark:bg-[#1E1E1E] transition-all duration-300 ${sidebarOpen ? "w-64" : "w-16"} flex-shrink-0 border-r border-[#E4E8EE] dark:border-[#333333] ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} lg:block flex flex-col`,
      renderId: "render-4c92ca60",
      as: "div",
      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: `${sidebarOpen ? "block" : "hidden lg:block"}`,
        renderId: "render-ca8bd3a2",
        as: "div",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "sticky top-0 left-0 right-0 bg-[#0C8657] dark:bg-[#0C8657] h-14 flex items-center justify-between px-4 z-50",
          renderId: "render-76a246e2",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-xl font-semibold text-white mb-0",
            renderId: "render-0d08f9c9",
            as: "h1",
            children: "WorkOrder"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            onClick: () => setSidebarOpen(!sidebarOpen),
            className: "text-white/80 hover:text-white active:text-white/60 transition-colors",
            renderId: "render-1cd073aa",
            as: "button",
            children: /* @__PURE__ */ jsx(ChevronLeft, {
              size: 16
            })
          })]
        })
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: `${sidebarOpen ? "hidden" : "block"} p-4 border-b border-[#E4E8EE] dark:border-[#333333] hidden lg:block`,
        renderId: "render-8042b198",
        as: "div",
        children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          onClick: () => setSidebarOpen(!sidebarOpen),
          className: "text-[#9DA5BC] dark:text-[#888888] hover:text-[#5D667E] dark:hover:text-[#B0B0B0] active:text-[#1F2739] dark:active:text-[#FFFFFF] transition-colors",
          renderId: "render-4617a4cb",
          as: "button",
          children: /* @__PURE__ */ jsx(ChevronLeft, {
            size: 16
          })
        })
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "flex-1 overflow-y-auto",
        renderId: "render-e151849e",
        as: "div",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "p-4 space-y-2",
          renderId: "render-1ad835d3",
          as: "nav",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            onClick: () => window.location.href = "/dashboard",
            className: "flex items-center gap-3 px-3 py-2 text-[#5D667E] dark:text-[#B0B0B0] hover:bg-[#DFF3EA] dark:hover:bg-[#0C8657]/20 active:bg-[#D1F0DD] dark:active:bg-[#0C8657]/30 hover:text-[#0C8657] dark:hover:text-[#22C55E] rounded-lg cursor-pointer transition-colors",
            renderId: "render-7ab5cad0",
            as: "div",
            children: [/* @__PURE__ */ jsx(Home, {
              size: 16,
              className: "text-[#0C8657] dark:text-[#22C55E]"
            }), sidebarOpen && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "font-medium",
              renderId: "render-b92618bb",
              as: "span",
              children: "Dashboard"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            onClick: () => window.location.href = "/companies",
            className: "flex items-center gap-3 px-3 py-2 text-[#5D667E] dark:text-[#B0B0B0] hover:bg-[#DFF3EA] dark:hover:bg-[#0C8657]/20 active:bg-[#D1F0DD] dark:active:bg-[#0C8657]/30 hover:text-[#0C8657] dark:hover:text-[#22C55E] rounded-lg cursor-pointer transition-colors",
            renderId: "render-ad38161e",
            as: "div",
            children: [/* @__PURE__ */ jsx(Building2, {
              size: 16,
              className: "text-[#0C8657] dark:text-[#22C55E]"
            }), sidebarOpen && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "font-medium",
              renderId: "render-76f570d8",
              as: "span",
              children: "Companies"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "flex items-center gap-3 px-3 py-2 bg-[#DFF3EA] dark:bg-[#0C8657]/20 text-[#0C8657] dark:text-[#22C55E] rounded-lg",
            renderId: "render-5d80a28a",
            as: "div",
            children: [/* @__PURE__ */ jsx(Users, {
              size: 16,
              className: "text-[#0C8657] dark:text-[#22C55E]"
            }), sidebarOpen && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "font-semibold",
              renderId: "render-59206858",
              as: "span",
              children: "Vendors"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-eb8eed6a",
            as: "div",
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: `flex items-center gap-3 px-3 py-2 cursor-pointer rounded-lg transition-colors ${expandedMenus["work-orders"] ? "bg-[#DFF3EA] dark:bg-[#0C8657]/20" : "hover:bg-[#DFF3EA] dark:hover:bg-[#0C8657]/20 active:bg-[#D1F0DD] dark:active:bg-[#0C8657]/30"}`,
              onClick: () => toggleMenu("work-orders"),
              renderId: "render-bb988418",
              as: "div",
              children: [/* @__PURE__ */ jsx(FileText, {
                size: 16,
                className: "text-[#0C8657] dark:text-[#22C55E]"
              }), sidebarOpen && /* @__PURE__ */ jsxs(Fragment, {
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "font-semibold text-[#0C8657] dark:text-[#22C55E] flex-1",
                  renderId: "render-f601073f",
                  as: "span",
                  children: "Work Orders"
                }), expandedMenus["work-orders"] ? /* @__PURE__ */ jsx(ChevronUp, {
                  size: 14,
                  className: "text-[#5D667E] dark:text-[#B0B0B0]"
                }) : /* @__PURE__ */ jsx(ChevronDown, {
                  size: 14,
                  className: "text-[#5D667E] dark:text-[#B0B0B0]"
                })]
              })]
            }), expandedMenus["work-orders"] && sidebarOpen && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "ml-6 mt-2 space-y-1 bg-[#DFF3EA] dark:bg-[#0C8657]/20 p-2 rounded-lg",
              renderId: "render-e85bd5ed",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                onClick: () => window.location.href = "/work-orders/create",
                className: "px-3 py-2 text-[#5D667E] dark:text-[#B0B0B0] text-sm cursor-pointer hover:text-[#0C8657] dark:hover:text-[#22C55E] hover:bg-[#E9F6F1] dark:hover:bg-[#0C8657]/30 active:bg-[#D1F0DD] dark:active:bg-[#0C8657]/40 rounded transition-colors",
                renderId: "render-73145895",
                as: "div",
                children: "Create Work Order"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                onClick: () => window.location.href = "/work-orders",
                className: "px-3 py-2 text-[#5D667E] dark:text-[#B0B0B0] text-sm cursor-pointer hover:text-[#0C8657] dark:hover:text-[#22C55E] hover:bg-[#E9F6F1] dark:hover:bg-[#0C8657]/30 active:bg-[#D1F0DD] dark:active:bg-[#0C8657]/40 rounded transition-colors",
                renderId: "render-fe9c22e9",
                as: "div",
                children: "Work Order List"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "px-3 py-2 text-[#5D667E] dark:text-[#B0B0B0] text-sm cursor-pointer hover:text-[#0C8657] dark:hover:text-[#22C55E] hover:bg-[#E9F6F1] dark:hover:bg-[#0C8657]/30 active:bg-[#D1F0DD] dark:active:bg-[#0C8657]/40 rounded transition-colors",
                renderId: "render-e163549a",
                as: "div",
                children: "Pending Payments"
              })]
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            onClick: () => window.location.href = "/activity-logs",
            className: "flex items-center gap-3 px-3 py-2 text-[#5D667E] dark:text-[#B0B0B0] hover:bg-[#DFF3EA] dark:hover:bg-[#0C8657]/20 active:bg-[#D1F0DD] dark:active:bg-[#0C8657]/30 hover:text-[#0C8657] dark:hover:text-[#22C55E] rounded-lg cursor-pointer transition-colors",
            renderId: "render-70ffd96c",
            as: "div",
            children: [/* @__PURE__ */ jsx(Activity, {
              size: 16,
              className: "text-[#0C8657] dark:text-[#22C55E]"
            }), sidebarOpen && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "font-medium flex-1",
              renderId: "render-a6d0bce9",
              as: "span",
              children: "Activity Log"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "flex items-center gap-3 px-3 py-2 text-[#5D667E] dark:text-[#B0B0B0] hover:bg-[#DFF3EA] dark:hover:bg-[#0C8657]/20 active:bg-[#D1F0DD] dark:active:bg-[#0C8657]/30 hover:text-[#0C8657] dark:hover:text-[#22C55E] rounded-lg cursor-pointer transition-colors",
            renderId: "render-c4f239a0",
            as: "div",
            children: [/* @__PURE__ */ jsx(Settings, {
              size: 16,
              className: "text-[#0C8657] dark:text-[#22C55E]"
            }), sidebarOpen && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "font-medium flex-1",
              renderId: "render-2e57768f",
              as: "span",
              children: "Settings"
            })]
          })]
        })
      })]
    }), sidebarOpen && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "fixed inset-0 bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70 z-40 lg:hidden",
      onClick: () => setSidebarOpen(false),
      renderId: "render-850d18b1",
      as: "div"
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "flex-1 flex flex-col min-w-0 lg:ml-0",
      renderId: "render-d9cab5e2",
      as: "div",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "bg-[#0C8657] dark:bg-[#0C8657] h-14 flex items-center px-4 sm:px-6 text-white sticky top-0 z-30",
        renderId: "render-7f8f3780",
        as: "header",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "flex items-center gap-4",
          renderId: "render-ce351527",
          as: "div",
          children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "lg:hidden hover:bg-white/10 dark:hover:bg-white/10 active:bg-white/20 dark:active:bg-white/20 p-2 rounded transition-colors",
            onClick: () => setSidebarOpen(true),
            renderId: "render-d263360f",
            as: "button",
            children: /* @__PURE__ */ jsx(Menu, {
              size: 24
            })
          })
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "flex-1 flex justify-center",
          renderId: "render-7d3fae30",
          as: "div",
          children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-xl font-semibold text-white",
            renderId: "render-a51f06f8",
            as: "h1",
            children: "Work Order Management System"
          })
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "flex items-center gap-2 sm:gap-4",
          renderId: "render-e4f95f78",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "relative hover:bg-white/10 dark:hover:bg-white/10 active:bg-white/20 dark:active:bg-white/20 p-2 rounded transition-colors",
            renderId: "render-493a80c6",
            as: "button",
            children: [/* @__PURE__ */ jsx(Bell, {
              size: 24
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "absolute -top-1 -right-1 w-3 h-3 bg-[#FFD83B] dark:bg-[#FCD34D] rounded-full",
              renderId: "render-86627581",
              as: "div"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "hidden sm:flex items-center gap-2 cursor-pointer hover:bg-white/10 dark:hover:bg-white/10 active:bg-white/20 dark:active:bg-white/20 px-3 py-2 rounded transition-colors",
            renderId: "render-f1fd127b",
            as: "button",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
              alt: "User Avatar",
              className: "w-8 h-8 rounded-full",
              renderId: "render-fec3bdc6",
              as: "img"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "hidden md:block",
              renderId: "render-ba2998d4",
              as: "span",
              children: "Admin User"
            }), /* @__PURE__ */ jsx(ChevronDown, {
              size: 20
            })]
          })]
        })]
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "flex-1 p-6 bg-[#F6F8FA] dark:bg-[#121212]",
        renderId: "render-b0f7e69c",
        as: "main",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "flex items-center justify-between mb-6",
          renderId: "render-ce0fbc62",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-2xl font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
            renderId: "render-0b69804f",
            as: "h1",
            children: "Vendor Master"
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            onClick: () => setShowAddForm(true),
            className: "flex items-center gap-2 px-4 py-2 bg-[#0C8657] dark:bg-[#059669] text-white rounded-lg hover:bg-[#0a6b47] dark:hover:bg-[#047857] transition-colors",
            renderId: "render-65398867",
            as: "button",
            children: [/* @__PURE__ */ jsx(Plus, {
              size: 16
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              renderId: "render-b41ffcd2",
              as: "span",
              children: "Add New Vendor"
            })]
          })]
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-4 mb-6",
          renderId: "render-f823e0e0",
          as: "div",
          children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "flex flex-col lg:flex-row gap-4",
            renderId: "render-ae58bcec",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "flex-1",
              renderId: "render-08157f34",
              as: "div",
              children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "relative",
                renderId: "render-d5eb2081",
                as: "div",
                children: [/* @__PURE__ */ jsx(Search, {
                  size: 20,
                  className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9DA5BC] dark:text-[#888888]"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  type: "text",
                  placeholder: "Search by vendor name or contact number...",
                  value: searchTerm,
                  onChange: (e) => setSearchTerm(e.target.value),
                  className: "w-full pl-10 pr-4 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                  renderId: "render-6cbe8d60",
                  as: "input"
                })]
              })
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "flex gap-4",
              renderId: "render-57f87e0d",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                value: vendorTypeFilter,
                onChange: (e) => setVendorTypeFilter(e.target.value),
                className: "px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                renderId: "render-ae634c69",
                as: "select",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  value: "All",
                  renderId: "render-b49e3a33",
                  as: "option",
                  children: "All Types"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  value: "Service Provider",
                  renderId: "render-63f0b0f1",
                  as: "option",
                  children: "Service Provider"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  value: "Contractor",
                  renderId: "render-e3c023f0",
                  as: "option",
                  children: "Contractor"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                value: statusFilter,
                onChange: (e) => setStatusFilter(e.target.value),
                className: "px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                renderId: "render-fe1be361",
                as: "select",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  value: "All",
                  renderId: "render-fec05beb",
                  as: "option",
                  children: "All Status"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  value: "Active",
                  renderId: "render-90c5deac",
                  as: "option",
                  children: "Active"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  value: "Inactive",
                  renderId: "render-50c1582f",
                  as: "option",
                  children: "Inactive"
                })]
              })]
            })]
          })
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] overflow-hidden",
          renderId: "render-74000098",
          as: "div",
          children: isLoading ? /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "flex items-center justify-center py-12",
            renderId: "render-cc25b5e2",
            as: "div",
            children: /* @__PURE__ */ jsx(Loader2, {
              size: 32,
              className: "text-[#0C8657] dark:text-[#22C55E] animate-spin"
            })
          }) : error ? /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "flex items-center justify-center py-12",
            renderId: "render-1de78a96",
            as: "div",
            children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "text-center",
              renderId: "render-308d6a39",
              as: "div",
              children: [/* @__PURE__ */ jsx(AlertCircle, {
                size: 32,
                className: "text-[#E95D5D] dark:text-[#EF4444] mx-auto mb-2"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "text-[#5D667E] dark:text-[#B0B0B0]",
                renderId: "render-f01cf33a",
                as: "p",
                children: error.message
              })]
            })
          }) : vendors.length === 0 ? /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "flex items-center justify-center py-12",
            renderId: "render-4373ca03",
            as: "div",
            children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "text-center",
              renderId: "render-cfafc141",
              as: "div",
              children: [/* @__PURE__ */ jsx(Users, {
                size: 32,
                className: "text-[#9DA5BC] dark:text-[#888888] mx-auto mb-2"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "text-[#5D667E] dark:text-[#B0B0B0]",
                renderId: "render-c12bcd8f",
                as: "p",
                children: "No vendors found"
              })]
            })
          }) : /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "overflow-x-auto",
            renderId: "render-c1abd476",
            as: "div",
            children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "w-full",
              renderId: "render-c780c4a3",
              as: "table",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "bg-[#F7FAFC] dark:bg-[#262626] border-b border-[#E4E8EE] dark:border-[#333333]",
                renderId: "render-a6c29975",
                as: "thead",
                children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  renderId: "render-98026076",
                  as: "tr",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "text-left py-3 px-4 font-medium text-[#5D667E] dark:text-[#B0B0B0]",
                    renderId: "render-8c46d7dc",
                    as: "th",
                    children: "Vendor Name"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "text-left py-3 px-4 font-medium text-[#5D667E] dark:text-[#B0B0B0]",
                    renderId: "render-9bec38e0",
                    as: "th",
                    children: "Type"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "text-left py-3 px-4 font-medium text-[#5D667E] dark:text-[#B0B0B0]",
                    renderId: "render-50de3635",
                    as: "th",
                    children: "Contact Person"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "text-left py-3 px-4 font-medium text-[#5D667E] dark:text-[#B0B0B0]",
                    renderId: "render-d4e7309b",
                    as: "th",
                    children: "Contact Number"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "text-left py-3 px-4 font-medium text-[#5D667E] dark:text-[#B0B0B0]",
                    renderId: "render-b2258f4f",
                    as: "th",
                    children: "Default Retention %"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "text-left py-3 px-4 font-medium text-[#5D667E] dark:text-[#B0B0B0]",
                    renderId: "render-1ea0e196",
                    as: "th",
                    children: "Status"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "text-left py-3 px-4 font-medium text-[#5D667E] dark:text-[#B0B0B0]",
                    renderId: "render-2b9c0199",
                    as: "th",
                    children: "Actions"
                  })]
                })
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                renderId: "render-5f73adca",
                as: "tbody",
                children: vendors.map((vendor) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  className: "border-b border-[#E4E8EE] dark:border-[#333333] hover:bg-[#F7FAFC] dark:hover:bg-[#262626] transition-colors",
                  renderId: "render-323e68f5",
                  as: "tr",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "py-3 px-4 text-[#1F2739] dark:text-[#FFFFFF] font-medium",
                    renderId: "render-028ae1c7",
                    as: "td",
                    children: vendor.vendor_name
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "py-3 px-4",
                    renderId: "render-c4e53bc9",
                    as: "td",
                    children: getVendorTypeBadge(vendor.vendor_type)
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "py-3 px-4 text-[#5D667E] dark:text-[#B0B0B0]",
                    renderId: "render-3c596a00",
                    as: "td",
                    children: vendor.contact_person || "-"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "py-3 px-4 text-[#5D667E] dark:text-[#B0B0B0]",
                    renderId: "render-df36b609",
                    as: "td",
                    children: vendor.contact_number || "-"
                  }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    className: "py-3 px-4 text-[#5D667E] dark:text-[#B0B0B0]",
                    renderId: "render-e4f69266",
                    as: "td",
                    children: [vendor.default_retention_percent, "%"]
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "py-3 px-4",
                    renderId: "render-715d4e2f",
                    as: "td",
                    children: getStatusBadge(vendor.status)
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "py-3 px-4",
                    renderId: "render-4b207136",
                    as: "td",
                    children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                      className: "flex items-center gap-2",
                      renderId: "render-4c867690",
                      as: "div",
                      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        onClick: () => handleEdit(vendor),
                        className: "p-1 text-[#0C8657] dark:text-[#22C55E] hover:bg-[#DFF3EA] dark:hover:bg-[#0C8657]/20 rounded transition-colors",
                        renderId: "render-7936b782",
                        as: "button",
                        children: /* @__PURE__ */ jsx(Edit, {
                          size: 16
                        })
                      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        onClick: () => handleDelete(vendor),
                        className: "p-1 text-[#E95D5D] dark:text-[#EF4444] hover:bg-[#FEF2F2] dark:hover:bg-[#EF4444]/20 rounded transition-colors",
                        renderId: "render-0b4a1379",
                        as: "button",
                        children: /* @__PURE__ */ jsx(Trash2, {
                          size: 16
                        })
                      })]
                    })
                  })]
                }, vendor.id))
              })]
            })
          })
        })]
      })]
    }), showAddForm && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "fixed inset-0 bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70 z-50 flex items-center justify-center p-4",
      renderId: "render-5d5f736c",
      as: "div",
      children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "bg-white dark:bg-[#1E1E1E] rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto",
        renderId: "render-4b5b1e2d",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "flex items-center justify-between mb-6",
          renderId: "render-7676158e",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
            renderId: "render-4ddd0dbb",
            as: "h3",
            children: editingVendor ? "Edit Vendor" : "Add New Vendor"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            onClick: handleCloseForm,
            className: "p-1 text-[#5D667E] dark:text-[#B0B0B0] hover:text-[#1F2739] dark:hover:text-[#FFFFFF] transition-colors",
            renderId: "render-7449b408",
            as: "button",
            children: /* @__PURE__ */ jsx(X, {
              size: 20
            })
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          onSubmit: handleSubmit,
          className: "space-y-6",
          renderId: "render-a61cf68d",
          as: "form",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-c74fb8dd",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-md font-semibold text-[#1F2739] dark:text-[#FFFFFF] mb-4",
              renderId: "render-63f554cd",
              as: "h4",
              children: "Basic Information"
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "grid md:grid-cols-2 gap-4",
              renderId: "render-511ebb22",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-3e0ebfbe",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                  renderId: "render-35906fe0",
                  as: "label",
                  children: "Vendor Name *"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  type: "text",
                  name: "vendor_name",
                  value: formData.vendor_name,
                  onChange: handleInputChange,
                  required: true,
                  className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                  renderId: "render-0ab40f13",
                  as: "input"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-72617dcb",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                  renderId: "render-0df4d563",
                  as: "label",
                  children: "Vendor Type *"
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  name: "vendor_type",
                  value: formData.vendor_type,
                  onChange: handleInputChange,
                  required: true,
                  className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                  renderId: "render-0a0ca862",
                  as: "select",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    value: "",
                    renderId: "render-48224e31",
                    as: "option",
                    children: "Select Type"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    value: "Service Provider",
                    renderId: "render-7664e339",
                    as: "option",
                    children: "Service Provider"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    value: "Contractor",
                    renderId: "render-26507245",
                    as: "option",
                    children: "Contractor"
                  })]
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-875299cd",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                  renderId: "render-57e43532",
                  as: "label",
                  children: "Contact Person"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  type: "text",
                  name: "contact_person",
                  value: formData.contact_person,
                  onChange: handleInputChange,
                  className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                  renderId: "render-05f3255c",
                  as: "input"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-8d6ab65b",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                  renderId: "render-5bb85d12",
                  as: "label",
                  children: "Contact Number *"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  type: "tel",
                  name: "contact_number",
                  value: formData.contact_number,
                  onChange: handleInputChange,
                  required: true,
                  className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                  renderId: "render-e4349f9e",
                  as: "input"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-9d54e20d",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                  renderId: "render-5a002e06",
                  as: "label",
                  children: "Email"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  type: "email",
                  name: "email",
                  value: formData.email,
                  onChange: handleInputChange,
                  className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                  renderId: "render-75656d89",
                  as: "input"
                })]
              })]
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-ca6679a3",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-md font-semibold text-[#1F2739] dark:text-[#FFFFFF] mb-4",
              renderId: "render-9516f0f7",
              as: "h4",
              children: "Address & Tax Details"
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "space-y-4",
              renderId: "render-09541e7b",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-9bfea20a",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                  renderId: "render-c83804fa",
                  as: "label",
                  children: "Address"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  name: "address",
                  value: formData.address,
                  onChange: handleInputChange,
                  rows: 3,
                  className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                  renderId: "render-93e8fa00",
                  as: "textarea"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "grid md:grid-cols-2 gap-4",
                renderId: "render-ff6a8d05",
                as: "div",
                children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  renderId: "render-ca1103c8",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                    renderId: "render-acca37ec",
                    as: "label",
                    children: "GST Number"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    type: "text",
                    name: "gst_number",
                    value: formData.gst_number,
                    onChange: handleInputChange,
                    className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                    renderId: "render-cfa919aa",
                    as: "input"
                  })]
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  renderId: "render-fc7fef49",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                    renderId: "render-5c29476c",
                    as: "label",
                    children: "PAN Number"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    type: "text",
                    name: "pan_number",
                    value: formData.pan_number,
                    onChange: handleInputChange,
                    className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                    renderId: "render-33f0b125",
                    as: "input"
                  })]
                })]
              })]
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-d7440c00",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-md font-semibold text-[#1F2739] dark:text-[#FFFFFF] mb-4",
              renderId: "render-7318bc88",
              as: "h4",
              children: "Banking Details"
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "grid md:grid-cols-2 gap-4",
              renderId: "render-f4520a32",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-2d8ab430",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                  renderId: "render-1bf0c212",
                  as: "label",
                  children: "Bank Name"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  type: "text",
                  name: "bank_name",
                  value: formData.bank_name,
                  onChange: handleInputChange,
                  className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                  renderId: "render-0dfd0d7a",
                  as: "input"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-4d8d4f36",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                  renderId: "render-9a4feb37",
                  as: "label",
                  children: "Bank Account Number"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  type: "text",
                  name: "bank_account_number",
                  value: formData.bank_account_number,
                  onChange: handleInputChange,
                  className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                  renderId: "render-a414843e",
                  as: "input"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-40456814",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                  renderId: "render-91c8389a",
                  as: "label",
                  children: "Bank IFSC Code"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  type: "text",
                  name: "bank_ifsc",
                  value: formData.bank_ifsc,
                  onChange: handleInputChange,
                  className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                  renderId: "render-21facb92",
                  as: "input"
                })]
              })]
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-8e212aef",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-md font-semibold text-[#1F2739] dark:text-[#FFFFFF] mb-4",
              renderId: "render-86f996bb",
              as: "h4",
              children: "Default Settings"
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "grid md:grid-cols-2 gap-4",
              renderId: "render-3b359162",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-dd17345a",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                  renderId: "render-77006aab",
                  as: "label",
                  children: "Default Retention %"
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  name: "default_retention_percent",
                  value: formData.default_retention_percent,
                  onChange: handleInputChange,
                  className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                  renderId: "render-46b8a044",
                  as: "select",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    value: 0,
                    renderId: "render-8d2cf373",
                    as: "option",
                    children: "0%"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    value: 5,
                    renderId: "render-e4bde086",
                    as: "option",
                    children: "5%"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    value: 10,
                    renderId: "render-a86e7ba9",
                    as: "option",
                    children: "10%"
                  })]
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-95143d8a",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                  renderId: "render-77a59de2",
                  as: "label",
                  children: "Status"
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  name: "status",
                  value: formData.status,
                  onChange: handleInputChange,
                  className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                  renderId: "render-437cf891",
                  as: "select",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    value: "Active",
                    renderId: "render-9ea61a7d",
                    as: "option",
                    children: "Active"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    value: "Inactive",
                    renderId: "render-2873cb3d",
                    as: "option",
                    children: "Inactive"
                  })]
                })]
              })]
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "flex gap-3 pt-4",
            renderId: "render-09fb2348",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              type: "button",
              onClick: handleCloseForm,
              className: "flex-1 px-4 py-2 border border-[#E4E8EE] dark:border-[#333333] text-[#5D667E] dark:text-[#B0B0B0] rounded-lg hover:bg-[#F7FAFC] dark:hover:bg-[#262626] transition-colors",
              renderId: "render-d07b48ba",
              as: "button",
              children: "Cancel"
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              type: "submit",
              disabled: createMutation.isPending || updateMutation.isPending,
              className: "flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#0C8657] dark:bg-[#059669] text-white rounded-lg hover:bg-[#0a6b47] dark:hover:bg-[#047857] disabled:opacity-50 transition-colors",
              renderId: "render-e5b770e4",
              as: "button",
              children: [createMutation.isPending || updateMutation.isPending ? /* @__PURE__ */ jsx(Loader2, {
                size: 16,
                className: "animate-spin"
              }) : /* @__PURE__ */ jsx(Save, {
                size: 16
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                renderId: "render-e916ca6b",
                as: "span",
                children: "Save"
              })]
            })]
          })]
        }), (createMutation.error || updateMutation.error) && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "mt-4 p-3 bg-[#FEF2F2] dark:bg-[#EF4444]/20 border border-[#FCA5A5] dark:border-[#EF4444]/30 rounded-lg",
          renderId: "render-b2776718",
          as: "div",
          children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-sm text-[#E95D5D] dark:text-[#EF4444]",
            renderId: "render-d64b4c18",
            as: "p",
            children: createMutation.error?.message || updateMutation.error?.message
          })
        })]
      })
    })]
  });
}

const page$4 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(VendorsPage, {
      ...props
    })
  });
});

const route5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$4
}, Symbol.toStringTag, { value: 'Module' }));

function WorkOrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const {
    data: workOrdersData,
    isLoading,
    error
  } = useQuery({
    queryKey: ["work-orders", searchTerm],
    queryFn: async () => {
      try {
        const params = new URLSearchParams();
        if (searchTerm) params.append("search", searchTerm);
        const response = await fetch(`/api/work-orders?${params}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch work orders: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
      } catch (error2) {
        console.error("Error fetching work orders:", error2);
        throw error2;
      }
    },
    retry: 3,
    retryDelay: 1e3
  });
  const {
    data: companiesData,
    error: companiesError
  } = useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      try {
        const response = await fetch("/api/companies");
        if (!response.ok) {
          throw new Error(`Failed to fetch companies: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
      } catch (error2) {
        console.error("Error fetching companies:", error2);
        throw error2;
      }
    },
    retry: 3,
    retryDelay: 1e3
  });
  const workOrders = Array.isArray(workOrdersData?.workOrders) ? workOrdersData.workOrders : [];
  const companies = Array.isArray(companiesData?.companies) ? companiesData.companies : [];
  const filteredWorkOrders = workOrders.filter((wo) => {
    if (!wo) return false;
    const matchesCompany = !selectedCompany || wo.company_name && wo.company_name === selectedCompany;
    const matchesStatus = !selectedStatus || wo.status && wo.status === selectedStatus;
    return matchesCompany && matchesStatus;
  });
  const getStatusBadge = (status) => {
    if (!status) {
      return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "px-2 py-1 rounded-full text-xs font-medium bg-gray-500 text-white",
        renderId: "render-5b18ecbe",
        as: "span",
        children: "Unknown"
      });
    }
    const statusConfig = {
      Draft: {
        bg: "bg-[#9CA3AF] dark:bg-[#6B7280]",
        text: "text-white"
      },
      "In Progress": {
        bg: "bg-[#F59E0B] dark:bg-[#D97706]",
        text: "text-white"
      },
      Completed: {
        bg: "bg-[#10B981] dark:bg-[#059669]",
        text: "text-white"
      },
      Active: {
        bg: "bg-[#3B82F6] dark:bg-[#2563EB]",
        text: "text-white"
      }
    };
    const config = statusConfig[status] || statusConfig["Draft"];
    return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: `px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`,
      renderId: "render-39f2c972",
      as: "span",
      children: status
    });
  };
  const formatCurrency = (amount) => {
    if (!amount || isNaN(amount)) return "Rs. 0";
    try {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(amount);
    } catch (error2) {
      console.error("Error formatting currency:", error2);
      return "Rs. 0";
    }
  };
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      });
    } catch (error2) {
      console.error("Error formatting date:", error2);
      return "Invalid Date";
    }
  };
  const calculateTotalValue = () => {
    return filteredWorkOrders.reduce((sum, wo) => {
      if (!wo || !wo.net_amount) return sum;
      const amount = parseFloat(wo.net_amount);
      return sum + (isNaN(amount) ? 0 : amount);
    }, 0);
  };
  const getStatusCount = (status) => {
    return filteredWorkOrders.filter((wo) => wo && wo.status === status).length;
  };
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "min-h-screen bg-[#F6F8FA] dark:bg-[#121212]",
    renderId: "render-22297bb7",
    as: "div",
    children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "bg-[#0C8657] dark:bg-[#0C8657] h-14 flex items-center px-4 sm:px-6 text-white sticky top-0 z-30",
      renderId: "render-e4ce02b3",
      as: "header",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "flex items-center gap-2",
        renderId: "render-4c93cab5",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          onClick: () => window.history.back(),
          className: "flex items-center gap-2 hover:bg-white/10 dark:hover:bg-white/10 active:bg-white/20 dark:active:bg-white/20 px-2 py-1 rounded transition-colors",
          renderId: "render-2709d18b",
          as: "button",
          children: [/* @__PURE__ */ jsx(ArrowLeft, {
            size: 20
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "hidden sm:block",
            renderId: "render-1244b7ff",
            as: "span",
            children: "Back"
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          onClick: () => window.location.href = "/dashboard",
          className: "flex items-center gap-2 hover:bg-white/10 dark:hover:bg-white/10 active:bg-white/20 dark:active:bg-white/20 px-2 py-1 rounded transition-colors",
          title: "Go to Dashboard",
          renderId: "render-ee76fa55",
          as: "button",
          children: [/* @__PURE__ */ jsx(Home, {
            size: 20
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "hidden sm:block",
            renderId: "render-f91ac1f3",
            as: "span",
            children: "Dashboard"
          })]
        })]
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "text-xl font-semibold ml-4",
        renderId: "render-519c6434",
        as: "h1",
        children: "Work Orders"
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "flex items-center gap-2 sm:gap-4 ml-auto",
        renderId: "render-9d7b3080",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "relative hover:bg-white/10 dark:hover:bg-white/10 active:bg-white/20 dark:active:bg-white/20 p-1 rounded transition-colors",
          renderId: "render-7954f07f",
          as: "button",
          children: [/* @__PURE__ */ jsx(Bell, {
            size: 20
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "absolute -top-1 -right-1 w-3 h-3 bg-[#FFD83B] dark:bg-[#FCD34D] rounded-full",
            renderId: "render-b1352b7d",
            as: "div"
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "hidden sm:flex items-center gap-2 cursor-pointer hover:bg-white/10 dark:hover:bg-white/10 active:bg-white/20 dark:active:bg-white/20 px-2 py-1 rounded transition-colors",
          renderId: "render-eadada21",
          as: "button",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
            alt: "User Avatar",
            className: "w-8 h-8 rounded-full",
            renderId: "render-6d956de0",
            as: "img"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "hidden md:block",
            renderId: "render-928efdc7",
            as: "span",
            children: "Admin User"
          }), /* @__PURE__ */ jsx(ChevronDown, {
            size: 16
          })]
        })]
      })]
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "max-w-7xl mx-auto p-6",
      renderId: "render-bab668be",
      as: "main",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6",
        renderId: "render-4aaf9ef8",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "text-2xl font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
          renderId: "render-6cafb5d0",
          as: "h1",
          children: "All Work Orders"
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          onClick: () => window.location.href = "/work-orders/create",
          className: "flex items-center gap-2 px-4 py-2 bg-[#0C8657] dark:bg-[#059669] text-white rounded-lg hover:bg-[#0a6b47] dark:hover:bg-[#047857] transition-colors",
          renderId: "render-1a5e41d2",
          as: "button",
          children: [/* @__PURE__ */ jsx(Plus, {
            size: 16
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            renderId: "render-709c2f03",
            as: "span",
            children: "Create New Work Order"
          })]
        })]
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-4 mb-6",
        renderId: "render-84739743",
        as: "div",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "grid grid-cols-1 md:grid-cols-3 gap-4",
          renderId: "render-20707e1a",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "relative",
            renderId: "render-a43f442a",
            as: "div",
            children: [/* @__PURE__ */ jsx(Search, {
              size: 20,
              className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9DA5BC] dark:text-[#888888]"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              type: "text",
              placeholder: "Search by WO number or vendor name...",
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value),
              className: "w-full pl-10 pr-4 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
              renderId: "render-693a5738",
              as: "input"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "relative",
            renderId: "render-552b5899",
            as: "div",
            children: [/* @__PURE__ */ jsx(Building2, {
              size: 20,
              className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9DA5BC] dark:text-[#888888] z-10"
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              value: selectedCompany,
              onChange: (e) => setSelectedCompany(e.target.value),
              className: "w-full pl-10 pr-4 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E] appearance-none",
              renderId: "render-2a3e9446",
              as: "select",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                value: "",
                renderId: "render-1c1cb297",
                as: "option",
                children: "All Companies"
              }), companies.map((company) => /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                value: company.company_name || "",
                renderId: "render-1cabb4b0",
                as: "option",
                children: company.company_name || "Unknown Company"
              }, company.id || company.company_name))]
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "relative",
            renderId: "render-1feb4b8a",
            as: "div",
            children: [/* @__PURE__ */ jsx(Filter, {
              size: 20,
              className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9DA5BC] dark:text-[#888888] z-10"
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              value: selectedStatus,
              onChange: (e) => setSelectedStatus(e.target.value),
              className: "w-full pl-10 pr-4 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E] appearance-none",
              renderId: "render-f9348370",
              as: "select",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                value: "",
                renderId: "render-f0732b9b",
                as: "option",
                children: "All Status"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                value: "Draft",
                renderId: "render-5410290f",
                as: "option",
                children: "Draft"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                value: "Active",
                renderId: "render-d2429b75",
                as: "option",
                children: "Active"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                value: "In Progress",
                renderId: "render-06ca838c",
                as: "option",
                children: "In Progress"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                value: "Completed",
                renderId: "render-c3ef935c",
                as: "option",
                children: "Completed"
              })]
            })]
          })]
        })
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] overflow-hidden",
        renderId: "render-5ec4ed76",
        as: "div",
        children: isLoading ? /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "flex items-center justify-center py-12",
          renderId: "render-556a0928",
          as: "div",
          children: /* @__PURE__ */ jsx(Loader2, {
            size: 32,
            className: "text-[#0C8657] dark:text-[#22C55E] animate-spin"
          })
        }) : error ? /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "flex items-center justify-center py-12",
          renderId: "render-ac1dde29",
          as: "div",
          children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "text-center",
            renderId: "render-99ae7ba1",
            as: "div",
            children: [/* @__PURE__ */ jsx(AlertCircle, {
              size: 32,
              className: "text-[#E95D5D] dark:text-[#EF4444] mx-auto mb-2"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-[#5D667E] dark:text-[#B0B0B0]",
              renderId: "render-b0996f65",
              as: "p",
              children: error.message || "Failed to load work orders"
            })]
          })
        }) : filteredWorkOrders.length === 0 ? /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "flex items-center justify-center py-12",
          renderId: "render-d3a37476",
          as: "div",
          children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "text-center",
            renderId: "render-1165b687",
            as: "div",
            children: [/* @__PURE__ */ jsx(FileText, {
              size: 32,
              className: "text-[#9DA5BC] dark:text-[#888888] mx-auto mb-2"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-[#5D667E] dark:text-[#B0B0B0]",
              renderId: "render-dd47b4ec",
              as: "p",
              children: searchTerm || selectedCompany || selectedStatus ? "No work orders found matching your filters" : "No work orders found"
            })]
          })
        }) : /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "overflow-x-auto",
          renderId: "render-60f74301",
          as: "div",
          children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "w-full",
            renderId: "render-b82fe874",
            as: "table",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "bg-[#F7FAFC] dark:bg-[#262626] border-b border-[#E4E8EE] dark:border-[#333333]",
              renderId: "render-7301db16",
              as: "thead",
              children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-fbc87633",
                as: "tr",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-left py-3 px-4 font-medium text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-f4a1018e",
                  as: "th",
                  children: "WO Number"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-left py-3 px-4 font-medium text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-78f3fdec",
                  as: "th",
                  children: "Date"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-left py-3 px-4 font-medium text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-29e36801",
                  as: "th",
                  children: "Vendor Name"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-left py-3 px-4 font-medium text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-86ddfdf9",
                  as: "th",
                  children: "Site Name"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-left py-3 px-4 font-medium text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-f4cd7843",
                  as: "th",
                  children: "Net Amount"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-left py-3 px-4 font-medium text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-d5ef16b8",
                  as: "th",
                  children: "Status"
                })]
              })
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              renderId: "render-9b823eeb",
              as: "tbody",
              children: filteredWorkOrders.map((workOrder) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "border-b border-[#E4E8EE] dark:border-[#333333] hover:bg-[#F7FAFC] dark:hover:bg-[#262626] transition-colors",
                renderId: "render-f4db0db4",
                as: "tr",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "py-3 px-4",
                  renderId: "render-2e7ba281",
                  as: "td",
                  children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    onClick: () => window.location.href = `/work-orders/${workOrder?.id || ""}`,
                    className: "text-[#0C8657] dark:text-[#22C55E] hover:underline font-medium",
                    renderId: "render-ceda8d04",
                    as: "button",
                    children: workOrder?.wo_number || "N/A"
                  })
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "py-3 px-4 text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-c52a2589",
                  as: "td",
                  children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    className: "flex items-center gap-1",
                    renderId: "render-fdadf677",
                    as: "div",
                    children: [/* @__PURE__ */ jsx(Calendar, {
                      size: 14
                    }), formatDate(workOrder?.date)]
                  })
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "py-3 px-4 text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-dcccdc88",
                  as: "td",
                  children: workOrder?.vendor_name || "N/A"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "py-3 px-4 text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-c47357e9",
                  as: "td",
                  children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    className: "flex items-center gap-1",
                    renderId: "render-c682f442",
                    as: "div",
                    children: [/* @__PURE__ */ jsx(MapPin, {
                      size: 14
                    }), workOrder?.site_name || "N/A"]
                  })
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "py-3 px-4 text-[#1F2739] dark:text-[#FFFFFF] font-semibold",
                  renderId: "render-6eb2c8b9",
                  as: "td",
                  children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    className: "flex items-center gap-1",
                    renderId: "render-bcefd691",
                    as: "div",
                    children: [/* @__PURE__ */ jsx(IndianRupee, {
                      size: 14
                    }), formatCurrency(workOrder?.net_amount).replace("₹", "")]
                  })
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "py-3 px-4",
                  renderId: "render-51ca9d62",
                  as: "td",
                  children: getStatusBadge(workOrder?.status)
                })]
              }, workOrder?.id || Math.random()))
            })]
          })
        })
      }), filteredWorkOrders.length > 0 && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "mt-6 grid grid-cols-1 md:grid-cols-4 gap-4",
        renderId: "render-4462b950",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-4",
          renderId: "render-c797ef4f",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-1",
            renderId: "render-9c964864",
            as: "h3",
            children: "Total Work Orders"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-2xl font-bold text-[#1F2739] dark:text-[#FFFFFF]",
            renderId: "render-f8d8c94b",
            as: "p",
            children: filteredWorkOrders.length
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-4",
          renderId: "render-1e4c7687",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-1",
            renderId: "render-4d59d9c8",
            as: "h3",
            children: "Total Value"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-2xl font-bold text-[#0C8657] dark:text-[#22C55E]",
            renderId: "render-966f1f0f",
            as: "p",
            children: formatCurrency(calculateTotalValue())
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-4",
          renderId: "render-a6b01b81",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-1",
            renderId: "render-bd252d7b",
            as: "h3",
            children: "Draft Orders"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-2xl font-bold text-[#9CA3AF] dark:text-[#6B7280]",
            renderId: "render-14ecf696",
            as: "p",
            children: getStatusCount("Draft")
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-4",
          renderId: "render-cf7ac4ef",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-1",
            renderId: "render-16e027ed",
            as: "h3",
            children: "Completed Orders"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-2xl font-bold text-[#10B981] dark:text-[#059669]",
            renderId: "render-0dbba109",
            as: "p",
            children: getStatusCount("Completed")
          })]
        })]
      })]
    })]
  });
}

const page$3 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(WorkOrdersPage, {
      ...props
    })
  });
});

const route6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$3
}, Symbol.toStringTag, { value: 'Module' }));

function WorkOrderDetailPage({
  params
}) {
  const {
    id
  } = params;
  const [isEditing, setIsEditing] = useState(false);
  const [statusChange, setStatusChange] = useState("");
  const [pdfLoading, setPdfLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [deleteError, setDeleteError] = useState("");
  const queryClient = useQueryClient();
  const {
    data: workOrderData,
    isLoading,
    error
  } = useQuery({
    queryKey: ["work-order", id],
    queryFn: async () => {
      const response = await fetch(`/api/work-orders/${id}`);
      if (!response.ok) throw new Error("Failed to fetch work order");
      return response.json();
    }
  });
  const statusMutation = useMutation({
    mutationFn: async (status) => {
      const response = await fetch(`/api/work-orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          status
        })
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update status");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["work-order", id]);
      queryClient.invalidateQueries(["work-orders"]);
      setStatusChange("");
    }
  });
  const deleteMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(`/api/work-orders/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete work order");
      }
      return response.json();
    },
    onSuccess: () => {
      window.location.href = "/work-orders";
    }
  });
  const workOrder = workOrderData?.workOrder;
  const getStatusBadge = (status) => {
    const statusConfig = {
      Draft: {
        bg: "bg-[#9CA3AF] dark:bg-[#6B7280]",
        text: "text-white"
      },
      "In Progress": {
        bg: "bg-[#F59E0B] dark:bg-[#D97706]",
        text: "text-white"
      },
      Completed: {
        bg: "bg-[#10B981] dark:bg-[#059669]",
        text: "text-white"
      },
      Active: {
        bg: "bg-[#3B82F6] dark:bg-[#2563EB]",
        text: "text-white"
      }
    };
    const config = statusConfig[status] || statusConfig["Draft"];
    return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: `px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text}`,
      renderId: "render-f1ec6435",
      as: "span",
      children: status
    });
  };
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2
    }).format(amount);
  };
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  };
  const handleStatusChange = () => {
    if (statusChange && statusChange !== workOrder.status) {
      statusMutation.mutate(statusChange);
    }
  };
  const handleDelete = () => {
    setShowDeleteModal(true);
    setDeleteError("");
    setAdminPassword("");
  };
  const confirmDelete = async () => {
    if (adminPassword !== "admin123") {
      setDeleteError("Invalid admin password");
      return;
    }
    try {
      const response = await fetch(`/api/work-orders/${id}?admin_permission=true`, {
        method: "DELETE"
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete work order");
      }
      setShowDeleteModal(false);
      window.location.href = "/work-orders";
    } catch (error2) {
      console.error("Error deleting work order:", error2);
      setDeleteError(error2.message);
    }
  };
  const handleDownloadPDF = async () => {
    try {
      setPdfLoading(true);
      const response = await fetch(`/api/work-orders/${id}/pdf`);
      if (!response.ok) {
        throw new Error("Failed to generate PDF");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `WorkOrder_${workOrder.wo_number.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error2) {
      console.error("Error downloading PDF:", error2);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setPdfLoading(false);
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "min-h-screen bg-[#F6F8FA] dark:bg-[#121212] flex items-center justify-center",
      renderId: "render-366d5d75",
      as: "div",
      children: /* @__PURE__ */ jsx(Loader2, {
        size: 32,
        className: "text-[#0C8657] dark:text-[#22C55E] animate-spin"
      })
    });
  }
  if (error || !workOrder) {
    return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "min-h-screen bg-[#F6F8FA] dark:bg-[#121212] flex items-center justify-center",
      renderId: "render-9a6a962b",
      as: "div",
      children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "text-center",
        renderId: "render-2303eadb",
        as: "div",
        children: [/* @__PURE__ */ jsx(AlertCircle, {
          size: 32,
          className: "text-[#E95D5D] dark:text-[#EF4444] mx-auto mb-2"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "text-[#5D667E] dark:text-[#B0B0B0]",
          renderId: "render-d35f837b",
          as: "p",
          children: error?.message || "Work order not found"
        })]
      })
    });
  }
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "min-h-screen bg-[#F6F8FA] dark:bg-[#121212]",
    renderId: "render-d5bd1ee2",
    as: "div",
    children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "bg-[#0C8657] dark:bg-[#0C8657] h-14 flex items-center px-4 sm:px-6 text-white sticky top-0 z-30",
      renderId: "render-684778d9",
      as: "header",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        onClick: () => window.history.back(),
        className: "flex items-center gap-2 hover:bg-white/10 dark:hover:bg-white/10 active:bg-white/20 dark:active:bg-white/20 px-2 py-1 rounded transition-colors",
        renderId: "render-fa7b35d8",
        as: "button",
        children: [/* @__PURE__ */ jsx(ArrowLeft, {
          size: 20
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "hidden sm:block",
          renderId: "render-abc744ec",
          as: "span",
          children: "Back"
        })]
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "text-xl font-semibold ml-4",
        renderId: "render-1d38db83",
        as: "h1",
        children: "Work Order Details"
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "flex items-center gap-2 sm:gap-4 ml-auto",
        renderId: "render-9c77b39f",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "relative hover:bg-white/10 dark:hover:bg-white/10 active:bg-white/20 dark:active:bg-white/20 p-1 rounded transition-colors",
          renderId: "render-d9c907f3",
          as: "button",
          children: [/* @__PURE__ */ jsx(Bell, {
            size: 20
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "absolute -top-1 -right-1 w-3 h-3 bg-[#FFD83B] dark:bg-[#FCD34D] rounded-full",
            renderId: "render-ea5712b4",
            as: "div"
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "hidden sm:flex items-center gap-2 cursor-pointer hover:bg-white/10 dark:hover:bg-white/10 active:bg-white/20 dark:active:bg-white/20 px-2 py-1 rounded transition-colors",
          renderId: "render-c8e73e5e",
          as: "button",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
            alt: "User Avatar",
            className: "w-8 h-8 rounded-full",
            renderId: "render-1bd84ff0",
            as: "img"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "hidden md:block",
            renderId: "render-54030d9c",
            as: "span",
            children: "Admin User"
          }), /* @__PURE__ */ jsx(ChevronDown, {
            size: 16
          })]
        })]
      })]
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "max-w-6xl mx-auto p-6",
      renderId: "render-2b2eb4bd",
      as: "main",
      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-6 mb-6",
        renderId: "render-ff7c79b5",
        as: "div",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4",
          renderId: "render-8d752bb4",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            renderId: "render-b3b0a71d",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-2xl font-bold text-[#1F2739] dark:text-[#FFFFFF] mb-2",
              renderId: "render-9c334db8",
              as: "h1",
              children: workOrder.wo_number
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "flex items-center gap-4 text-sm text-[#5D667E] dark:text-[#B0B0B0]",
              renderId: "render-d98e1787",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "flex items-center gap-1",
                renderId: "render-73ac725a",
                as: "div",
                children: [/* @__PURE__ */ jsx(Calendar, {
                  size: 16
                }), formatDate(workOrder.date)]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "flex items-center gap-2",
                renderId: "render-16ffc9f8",
                as: "div",
                children: ["Status: ", getStatusBadge(workOrder.status)]
              })]
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "flex items-center gap-3",
            renderId: "render-91b494aa",
            as: "div",
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              onClick: () => window.location.href = `/work-orders/${id}/edit`,
              className: "flex items-center gap-2 px-4 py-2 bg-[#3B82F6] dark:bg-[#2563EB] text-white rounded-lg hover:bg-[#2563EB] dark:hover:bg-[#1D4ED8] transition-colors",
              renderId: "render-b9aae1c6",
              as: "button",
              children: [/* @__PURE__ */ jsx(Edit, {
                size: 16
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                renderId: "render-915c5435",
                as: "span",
                children: "Edit"
              })]
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              onClick: handleDownloadPDF,
              disabled: pdfLoading,
              className: "flex items-center gap-2 px-4 py-2 bg-[#10B981] dark:bg-[#059669] text-white rounded-lg hover:bg-[#059669] dark:hover:bg-[#047857] disabled:opacity-50 transition-colors",
              renderId: "render-a2738a29",
              as: "button",
              children: [pdfLoading ? /* @__PURE__ */ jsx(Loader2, {
                size: 16,
                className: "animate-spin"
              }) : /* @__PURE__ */ jsx(Download, {
                size: 16
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                renderId: "render-8a24b336",
                as: "span",
                children: pdfLoading ? "Generating PDF..." : "Download PDF"
              })]
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              onClick: handleDelete,
              disabled: deleteMutation.isPending,
              className: "flex items-center gap-2 px-4 py-2 bg-[#EF4444] dark:bg-[#DC2626] text-white rounded-lg hover:bg-[#DC2626] dark:hover:bg-[#B91C1C] disabled:opacity-50 transition-colors",
              renderId: "render-c5225b80",
              as: "button",
              children: [deleteMutation.isPending ? /* @__PURE__ */ jsx(Loader2, {
                size: 16,
                className: "animate-spin"
              }) : /* @__PURE__ */ jsx(Trash2, {
                size: 16
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                renderId: "render-8cab0e96",
                as: "span",
                children: "Delete"
              })]
            })]
          })]
        })
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "grid lg:grid-cols-3 gap-6",
        renderId: "render-18def602",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "lg:col-span-2 space-y-6",
          renderId: "render-fb88ca75",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-6",
            renderId: "render-868b5150",
            as: "div",
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "flex items-center gap-2 mb-4",
              renderId: "render-a9d3c595",
              as: "div",
              children: [/* @__PURE__ */ jsx(Building2, {
                size: 20,
                className: "text-[#0C8657] dark:text-[#22C55E]"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
                renderId: "render-3e21c628",
                as: "h2",
                children: "Company Information"
              })]
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "grid md:grid-cols-2 gap-4",
              renderId: "render-4d0fefa5",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-8fac3cf5",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-1",
                  renderId: "render-6c36e58c",
                  as: "label",
                  children: "Company"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF] font-medium",
                  renderId: "render-2e49918e",
                  as: "p",
                  children: workOrder.company_name || "N/A"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-2f00a99d",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-1",
                  renderId: "render-b932560e",
                  as: "label",
                  children: "Date"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-a626f6fa",
                  as: "p",
                  children: formatDate(workOrder.date)
                })]
              })]
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-6",
            renderId: "render-91a71f9e",
            as: "div",
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "flex items-center gap-2 mb-4",
              renderId: "render-dba27911",
              as: "div",
              children: [/* @__PURE__ */ jsx(User, {
                size: 20,
                className: "text-[#0C8657] dark:text-[#22C55E]"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
                renderId: "render-fc74f047",
                as: "h2",
                children: "Vendor Details"
              })]
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "grid md:grid-cols-2 gap-4",
              renderId: "render-f44f2fb8",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-a04de36e",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-1",
                  renderId: "render-2a7e841a",
                  as: "label",
                  children: "Vendor Name"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF] font-medium",
                  renderId: "render-bea8b707",
                  as: "p",
                  children: workOrder.vendor_name
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-2ee45e4e",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-1",
                  renderId: "render-b3abb972",
                  as: "label",
                  children: "Contact Number"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-4569c2fd",
                  as: "p",
                  children: workOrder.vendor_contact || "N/A"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "md:col-span-2",
                renderId: "render-cbf3f99d",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-1",
                  renderId: "render-81e3d1af",
                  as: "label",
                  children: "Address"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-4e0c59d6",
                  as: "p",
                  children: workOrder.vendor_address || "N/A"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-f3d4bcff",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-1",
                  renderId: "render-42ddd5a6",
                  as: "label",
                  children: "GST Number"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-20557b31",
                  as: "p",
                  children: workOrder.vendor_gst || "N/A"
                })]
              })]
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-6",
            renderId: "render-76269411",
            as: "div",
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "flex items-center gap-2 mb-4",
              renderId: "render-01ceb7d2",
              as: "div",
              children: [/* @__PURE__ */ jsx(MapPin, {
                size: 20,
                className: "text-[#0C8657] dark:text-[#22C55E]"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
                renderId: "render-7b7d28f2",
                as: "h2",
                children: "Project Details"
              })]
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "space-y-4",
              renderId: "render-f26ff30a",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-55acfb4c",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-1",
                  renderId: "render-4c53a7f2",
                  as: "label",
                  children: "Site Name"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF] font-medium",
                  renderId: "render-da7d0a7a",
                  as: "p",
                  children: workOrder.site_name
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-cd79e2ac",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-1",
                  renderId: "render-7fbe3f3c",
                  as: "label",
                  children: "Project Description"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-0e8ea62f",
                  as: "p",
                  children: workOrder.project_description || "N/A"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-22c797cf",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-1",
                  renderId: "render-66a07280",
                  as: "label",
                  children: "Description of Work"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF] whitespace-pre-wrap",
                  renderId: "render-15be806a",
                  as: "p",
                  children: workOrder.work_description
                })]
              })]
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-6",
            renderId: "render-541f9fe3",
            as: "div",
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "flex items-center gap-2 mb-4",
              renderId: "render-11702566",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreditCard, {
                size: 20,
                className: "text-[#0C8657] dark:text-[#22C55E]"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
                renderId: "render-291b995f",
                as: "h2",
                children: "Payment & Bank Details"
              })]
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "grid md:grid-cols-2 gap-4",
              renderId: "render-3b8a46d3",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-cb562a76",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-1",
                  renderId: "render-40f7514d",
                  as: "label",
                  children: "Payment Terms"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-dc69fa7b",
                  as: "p",
                  children: workOrder.payment_terms || "N/A"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-2710a042",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-1",
                  renderId: "render-03cd304d",
                  as: "label",
                  children: "Bank Name"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-8e533cb1",
                  as: "p",
                  children: workOrder.vendor_bank_name || "N/A"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-8c0259cc",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-1",
                  renderId: "render-75256d43",
                  as: "label",
                  children: "Account Number"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-84d21a2c",
                  as: "p",
                  children: workOrder.vendor_bank_account || "N/A"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-13230b40",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-1",
                  renderId: "render-12b486a6",
                  as: "label",
                  children: "IFSC Code"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-a735e0e2",
                  as: "p",
                  children: workOrder.vendor_bank_ifsc || "N/A"
                })]
              })]
            })]
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "space-y-6",
          renderId: "render-f285b0d6",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-6",
            renderId: "render-195f6d3a",
            as: "div",
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "flex items-center gap-2 mb-4",
              renderId: "render-7268f862",
              as: "div",
              children: [/* @__PURE__ */ jsx(IndianRupee, {
                size: 20,
                className: "text-[#0C8657] dark:text-[#22C55E]"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
                renderId: "render-07d4b51c",
                as: "h2",
                children: "Financial Summary"
              })]
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "space-y-3",
              renderId: "render-ceaea4bf",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "flex justify-between",
                renderId: "render-bf42b146",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-be043363",
                  as: "span",
                  children: "Total Amount:"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF] font-medium",
                  renderId: "render-5e98f891",
                  as: "span",
                  children: formatCurrency(workOrder.total_amount)
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "flex justify-between",
                renderId: "render-b236338f",
                as: "div",
                children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  className: "text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-1b5a5499",
                  as: "span",
                  children: ["SGST (", workOrder.sgst_percent, "%):"]
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-c40f9ce3",
                  as: "span",
                  children: formatCurrency(workOrder.sgst_amount)
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "flex justify-between",
                renderId: "render-4caa6b1e",
                as: "div",
                children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  className: "text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-a947a281",
                  as: "span",
                  children: ["CGST (", workOrder.cgst_percent, "%):"]
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-2303a513",
                  as: "span",
                  children: formatCurrency(workOrder.cgst_amount)
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "flex justify-between",
                renderId: "render-f4480ee2",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-06f000d1",
                  as: "span",
                  children: "Gross Amount:"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF] font-medium",
                  renderId: "render-18fecf69",
                  as: "span",
                  children: formatCurrency(workOrder.gross_amount)
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "flex justify-between",
                renderId: "render-df21597b",
                as: "div",
                children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  className: "text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-6b55605a",
                  as: "span",
                  children: ["Retention (", workOrder.retention_percent, "%):"]
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-1778a161",
                  as: "span",
                  children: ["-", formatCurrency(workOrder.retention_amount)]
                })]
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "border-[#E4E8EE] dark:border-[#333333]",
                renderId: "render-aa14a56b",
                as: "hr"
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "flex justify-between text-lg font-bold",
                renderId: "render-58945023",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-0ef02bd5",
                  as: "span",
                  children: "Net Amount:"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#0C8657] dark:text-[#22C55E]",
                  renderId: "render-0116b29a",
                  as: "span",
                  children: formatCurrency(workOrder.net_amount)
                })]
              })]
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-6",
            renderId: "render-6854150b",
            as: "div",
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "flex items-center gap-2 mb-4",
              renderId: "render-1b58c75a",
              as: "div",
              children: [/* @__PURE__ */ jsx(FileText, {
                size: 20,
                className: "text-[#0C8657] dark:text-[#22C55E]"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
                renderId: "render-2a8d6579",
                as: "h2",
                children: "Status Management"
              })]
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "space-y-4",
              renderId: "render-45011510",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-05dcb886",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-2",
                  renderId: "render-b0e9b34c",
                  as: "label",
                  children: "Current Status"
                }), getStatusBadge(workOrder.status)]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-5a68e5a4",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "block text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-2",
                  renderId: "render-470a0895",
                  as: "label",
                  children: "Change Status"
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  value: statusChange,
                  onChange: (e) => setStatusChange(e.target.value),
                  className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                  renderId: "render-62629960",
                  as: "select",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    value: "",
                    renderId: "render-e3880383",
                    as: "option",
                    children: "Select Status"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    value: "Draft",
                    renderId: "render-242a544e",
                    as: "option",
                    children: "Draft"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    value: "Active",
                    renderId: "render-6022d499",
                    as: "option",
                    children: "Active"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    value: "In Progress",
                    renderId: "render-c497011c",
                    as: "option",
                    children: "In Progress"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    value: "Completed",
                    renderId: "render-40757f17",
                    as: "option",
                    children: "Completed"
                  })]
                })]
              }), statusChange && statusChange !== workOrder.status && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                onClick: handleStatusChange,
                disabled: statusMutation.isPending,
                className: "w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#0C8657] dark:bg-[#059669] text-white rounded-lg hover:bg-[#0a6b47] dark:hover:bg-[#047857] disabled:opacity-50 transition-colors",
                renderId: "render-d5995730",
                as: "button",
                children: [statusMutation.isPending ? /* @__PURE__ */ jsx(Loader2, {
                  size: 16,
                  className: "animate-spin"
                }) : /* @__PURE__ */ jsx(Save, {
                  size: 16
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  renderId: "render-f0a6d7e0",
                  as: "span",
                  children: "Update Status"
                })]
              })]
            })]
          })]
        })]
      }), showDeleteModal && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4",
        renderId: "render-cd5877ef",
        as: "div",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "bg-white dark:bg-[#1E1E1E] rounded-lg max-w-md w-full p-6",
          renderId: "render-e087a8cc",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "flex items-center gap-3 mb-4",
            renderId: "render-ea47e6e3",
            as: "div",
            children: [/* @__PURE__ */ jsx(AlertCircle, {
              size: 24,
              className: "text-red-500"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
              renderId: "render-01d46d8e",
              as: "h3",
              children: "Delete Work Order"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "text-[#5D667E] dark:text-[#B0B0B0] mb-4",
            renderId: "render-b80a0a58",
            as: "p",
            children: ["Are you sure you want to delete work order", " ", /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              renderId: "render-aa939d74",
              as: "strong",
              children: workOrder?.wo_number
            }), "? This action cannot be undone and requires admin permission."]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "mb-4",
            renderId: "render-91cd4b21",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "block text-sm font-medium text-[#5D667E] dark:text-[#B0B0B0] mb-2",
              renderId: "render-f35b2e1a",
              as: "label",
              children: "Admin Password"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              type: "password",
              value: adminPassword,
              onChange: (e) => setAdminPassword(e.target.value),
              className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-red-500",
              placeholder: "Enter admin password",
              renderId: "render-721ef40e",
              as: "input"
            }), deleteError && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-red-500 text-sm mt-2",
              renderId: "render-f3e7e50b",
              as: "p",
              children: deleteError
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "flex gap-3",
            renderId: "render-feb378fe",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              onClick: () => setShowDeleteModal(false),
              className: "flex-1 px-4 py-2 border border-[#E4E8EE] dark:border-[#333333] text-[#5D667E] dark:text-[#B0B0B0] rounded-lg hover:bg-gray-50 dark:hover:bg-[#262626] transition-colors",
              renderId: "render-28f3f9cb",
              as: "button",
              children: "Cancel"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              onClick: confirmDelete,
              className: "flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors",
              renderId: "render-0cc313e1",
              as: "button",
              children: "Delete"
            })]
          })]
        })
      }), statusMutation.isSuccess && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "fixed bottom-6 right-6 bg-[#10B981] dark:bg-[#059669] text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50",
        renderId: "render-8f96ffeb",
        as: "div",
        children: [/* @__PURE__ */ jsx(CheckCircle2, {
          size: 20
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          renderId: "render-4650be5c",
          as: "span",
          children: "Status updated successfully!"
        })]
      }), (statusMutation.error || deleteMutation.error) && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "fixed bottom-6 right-6 bg-[#EF4444] dark:bg-[#DC2626] text-white px-6 py-3 rounded-lg shadow-lg z-50",
        renderId: "render-7671e79f",
        as: "div",
        children: statusMutation.error?.message || deleteMutation.error?.message
      })]
    })]
  });
}

const page$2 = UNSAFE_withComponentProps(function WrappedPage(props) {
  const params = useParams();
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(WorkOrderDetailPage, {
      ...props,
      id: params.id
    })
  });
});

const route7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$2
}, Symbol.toStringTag, { value: 'Module' }));

function useEditWorkOrder(id) {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    company_id: "",
    wo_number: "",
    date: "",
    vendor_name: "",
    vendor_contact: "",
    vendor_address: "",
    vendor_gst: "",
    site_name: "",
    project_description: "",
    work_description: "",
    total_amount: "",
    has_gst: true,
    sgst_percent: 9,
    cgst_percent: 9,
    retention_percent: 0,
    payment_terms: "",
    vendor_bank_name: "",
    vendor_bank_account: "",
    vendor_bank_ifsc: "",
    status: "Draft"
  });
  const [calculatedAmounts, setCalculatedAmounts] = useState({
    sgst_amount: 0,
    cgst_amount: 0,
    gross_amount: 0,
    retention_amount: 0,
    net_amount: 0
  });
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const {
    data: workOrderData,
    isLoading: isOrderLoading,
    error: orderError
  } = useQuery({
    queryKey: ["work-order", id],
    queryFn: async () => {
      const response = await fetch(`/api/work-orders/${id}`);
      if (!response.ok) throw new Error("Failed to fetch work order");
      return response.json();
    }
  });
  const {
    data: companiesData
  } = useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      const response = await fetch("/api/companies");
      if (!response.ok) throw new Error("Failed to fetch companies");
      return response.json();
    }
  });
  const updateMutation = useMutation({
    mutationFn: async submissionData => {
      // Ensure we always use the latest calculated amounts
      const dataToSend = {
        ...submissionData,
        sgst_amount: calculatedAmounts.sgst_amount,
        cgst_amount: calculatedAmounts.cgst_amount,
        gross_amount: calculatedAmounts.gross_amount,
        retention_amount: calculatedAmounts.retention_amount,
        net_amount: calculatedAmounts.net_amount
      };
      const response = await fetch(`/api/work-orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update work order");
      }
      return response.json();
    },
    onSuccess: () => {
      setShowSuccess(true);
      queryClient.invalidateQueries({
        queryKey: ["work-order", id]
      });
      queryClient.invalidateQueries({
        queryKey: ["work-orders"]
      });
      queryClient.invalidateQueries({
        queryKey: ["companies"]
      });
      setTimeout(() => {
        window.location.href = `/work-orders/${id}`;
      }, 2000);
    }
  });
  const companies = companiesData?.companies || [];
  const workOrder = workOrderData?.workOrder;
  useEffect(() => {
    if (workOrder) {
      setFormData({
        company_id: workOrder.company_id || "",
        wo_number: workOrder.wo_number || "",
        date: workOrder.date ? new Date(workOrder.date).toISOString().split("T")[0] : "",
        vendor_name: workOrder.vendor_name || "",
        vendor_contact: workOrder.vendor_contact || "",
        vendor_address: workOrder.vendor_address || "",
        vendor_gst: workOrder.vendor_gst || "",
        site_name: workOrder.site_name || "",
        project_description: workOrder.project_description || "",
        work_description: workOrder.work_description || "",
        total_amount: workOrder.total_amount || "",
        has_gst: workOrder.has_gst !== false,
        sgst_percent: workOrder.sgst_percent || 9,
        cgst_percent: workOrder.cgst_percent || 9,
        retention_percent: workOrder.retention_percent || 0,
        payment_terms: workOrder.payment_terms || "",
        vendor_bank_name: workOrder.vendor_bank_name || "",
        vendor_bank_account: workOrder.vendor_bank_account || "",
        vendor_bank_ifsc: workOrder.vendor_bank_ifsc || "",
        status: workOrder.status || "Draft"
      });
      if (workOrder.company_id) {
        const company = companies.find(c => c.id.toString() === workOrder.company_id.toString());
        setSelectedCompany(company);
      }
    }
  }, [workOrder, companies]);
  useEffect(() => {
    const totalAmount = parseFloat(formData.total_amount) || 0;
    const retentionPercent = parseFloat(formData.retention_percent) || 0;
    const sgstPercent = parseFloat(formData.sgst_percent) || 0;
    const cgstPercent = parseFloat(formData.cgst_percent) || 0;
    const sgstAmount = formData.has_gst ? totalAmount * sgstPercent / 100 : 0;
    const cgstAmount = formData.has_gst ? totalAmount * cgstPercent / 100 : 0;
    const grossAmount = totalAmount + sgstAmount + cgstAmount;
    const retentionAmount = grossAmount * retentionPercent / 100;
    const netAmount = grossAmount - retentionAmount;
    setCalculatedAmounts({
      sgst_amount: sgstAmount,
      cgst_amount: cgstAmount,
      gross_amount: grossAmount,
      retention_amount: retentionAmount,
      net_amount: netAmount
    });
  }, [formData.total_amount, formData.has_gst, formData.sgst_percent, formData.cgst_percent, formData.retention_percent]);
  const handleInputChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleGstChange = e => {
    setFormData(prev => ({
      ...prev,
      has_gst: e.target.value === "true"
    }));
  };
  const handleCompanyChange = e => {
    const companyId = e.target.value;
    setFormData(prev => ({
      ...prev,
      company_id: companyId
    }));
    const company = companies.find(c => c.id.toString() === companyId);
    setSelectedCompany(company);
  };
  const handleSubmit = e => {
    e.preventDefault();
    updateMutation.mutate(formData);
  };
  return {
    formData,
    setFormData,
    calculatedAmounts,
    selectedCompany,
    showSuccess,
    isOrderLoading,
    orderError,
    companies,
    workOrder,
    updateMutation,
    handleInputChange,
    handleCompanyChange,
    handleGstChange,
    handleSubmit
  };
}

function EditWorkOrderHeader({
  workOrderNumber,
  workOrderId
}) {
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "bg-[#0C8657] dark:bg-[#0C8657] h-14 flex items-center px-4 sm:px-6 text-white sticky top-0 z-30",
    renderId: "render-c1b8b3c0",
    as: "header",
    children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      onClick: () => window.location.href = `/work-orders/${workOrderId}`,
      className: "flex items-center gap-2 hover:bg-white/10 dark:hover:bg-white/10 active:bg-white/20 dark:active:bg-white/20 px-2 py-1 rounded transition-colors",
      renderId: "render-b017cd12",
      as: "button",
      children: [/* @__PURE__ */ jsx(ArrowLeft, {
        size: 20
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "hidden sm:block",
        renderId: "render-62c28e4c",
        as: "span",
        children: "Back"
      })]
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "text-xl font-semibold ml-4",
      renderId: "render-2820288f",
      as: "h1",
      children: ["Edit Work Order - ", workOrderNumber]
    })]
  });
}

const commonClasses = "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]";
function FormInput({
  label,
  ...props
}) {
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    renderId: "render-8377959d",
    as: "div",
    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
      renderId: "render-786dd3fb",
      as: "label",
      children: label
    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      ...props,
      className: commonClasses,
      renderId: "render-fe3d586a",
      as: "input"
    })]
  });
}
function FormSelect({
  label,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    renderId: "render-b17a7c66",
    as: "div",
    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
      renderId: "render-6022e9cc",
      as: "label",
      children: label
    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      ...props,
      className: commonClasses,
      renderId: "render-96251a8f",
      as: "select",
      children
    })]
  });
}
function FormTextArea({
  label,
  ...props
}) {
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    renderId: "render-d92ad954",
    as: "div",
    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
      renderId: "render-447b99b9",
      as: "label",
      children: label
    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      ...props,
      className: commonClasses,
      renderId: "render-71c57252",
      as: "textarea"
    })]
  });
}

function BasicInfoSection({
  formData,
  handleInputChange,
  handleCompanyChange,
  companies
}) {
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-6",
    renderId: "render-8f6163e0",
    as: "div",
    children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "flex items-center gap-2 mb-4",
      renderId: "render-92a36136",
      as: "div",
      children: [/* @__PURE__ */ jsx(Building2, {
        size: 20,
        className: "text-[#0C8657] dark:text-[#22C55E]"
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
        renderId: "render-86704e9f",
        as: "h2",
        children: "Basic Information"
      })]
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "grid md:grid-cols-2 gap-4",
      renderId: "render-06484c7a",
      as: "div",
      children: [/* @__PURE__ */ jsxs(FormSelect, {
        label: "Company *",
        name: "company_id",
        value: formData.company_id,
        onChange: handleCompanyChange,
        required: true,
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          value: "",
          renderId: "render-7fcf901b",
          as: "option",
          children: "Select Company"
        }), companies.map((company) => /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          value: company.id,
          renderId: "render-bdc6058f",
          as: "option",
          children: company.company_name
        }, company.id))]
      }), /* @__PURE__ */ jsx(FormInput, {
        label: "Date *",
        type: "date",
        name: "date",
        value: formData.date,
        onChange: handleInputChange,
        required: true
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "md:col-span-2",
        renderId: "render-3d9b2dc5",
        as: "div",
        children: /* @__PURE__ */ jsx(FormInput, {
          label: "Work Order Number",
          name: "wo_number",
          value: formData.wo_number,
          onChange: handleInputChange
        })
      }), /* @__PURE__ */ jsxs(FormSelect, {
        label: "Status",
        name: "status",
        value: formData.status,
        onChange: handleInputChange,
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          value: "Draft",
          renderId: "render-8d62c090",
          as: "option",
          children: "Draft"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          value: "Active",
          renderId: "render-7480c2c7",
          as: "option",
          children: "Active"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          value: "In Progress",
          renderId: "render-41ac3aba",
          as: "option",
          children: "In Progress"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          value: "Completed",
          renderId: "render-8f2dee19",
          as: "option",
          children: "Completed"
        })]
      })]
    })]
  });
}

function VendorDetailsSection({
  formData,
  handleInputChange
}) {
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-6",
    renderId: "render-a4b89f0c",
    as: "div",
    children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "flex items-center gap-2 mb-4",
      renderId: "render-792166ba",
      as: "div",
      children: [/* @__PURE__ */ jsx(User, {
        size: 20,
        className: "text-[#0C8657] dark:text-[#22C55E]"
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
        renderId: "render-79057a4d",
        as: "h2",
        children: "Vendor Details"
      })]
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "grid md:grid-cols-2 gap-4",
      renderId: "render-c49281ee",
      as: "div",
      children: [/* @__PURE__ */ jsx(FormInput, {
        label: "Vendor Name *",
        name: "vendor_name",
        value: formData.vendor_name,
        onChange: handleInputChange,
        required: true
      }), /* @__PURE__ */ jsx(FormInput, {
        label: "Vendor Contact Number",
        type: "tel",
        name: "vendor_contact",
        value: formData.vendor_contact,
        onChange: handleInputChange
      }), /* @__PURE__ */ jsx(FormTextArea, {
        label: "Vendor Address",
        name: "vendor_address",
        value: formData.vendor_address,
        onChange: handleInputChange,
        rows: 3
      }), /* @__PURE__ */ jsx(FormInput, {
        label: "Vendor GST No. (Optional)",
        name: "vendor_gst",
        value: formData.vendor_gst,
        onChange: handleInputChange
      })]
    })]
  });
}

function ProjectDetailsSection({
  formData,
  handleInputChange
}) {
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-6",
    renderId: "render-6344c522",
    as: "div",
    children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "flex items-center gap-2 mb-4",
      renderId: "render-b50c04ad",
      as: "div",
      children: [/* @__PURE__ */ jsx(MapPin, {
        size: 20,
        className: "text-[#0C8657] dark:text-[#22C55E]"
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
        renderId: "render-cc881463",
        as: "h2",
        children: "Project Details"
      })]
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "space-y-4",
      renderId: "render-80911f21",
      as: "div",
      children: [/* @__PURE__ */ jsx(FormInput, {
        label: "Site Name *",
        name: "site_name",
        value: formData.site_name,
        onChange: handleInputChange,
        required: true
      }), /* @__PURE__ */ jsx(FormInput, {
        label: "Project Description",
        name: "project_description",
        value: formData.project_description,
        onChange: handleInputChange
      }), /* @__PURE__ */ jsx(FormTextArea, {
        label: "Description of Work *",
        name: "work_description",
        value: formData.work_description,
        onChange: handleInputChange,
        required: true,
        rows: 6,
        placeholder: "Detailed description of the work to be performed..."
      })]
    })]
  });
}

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2
  }).format(amount);
};
function FinancialDetailsSection({
  formData,
  calculatedAmounts,
  handleInputChange,
  handleGstChange
}) {
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-6",
    renderId: "render-b0a2008e",
    as: "div",
    children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "flex items-center gap-2 mb-4",
      renderId: "render-7ec98980",
      as: "div",
      children: [/* @__PURE__ */ jsx(Calculator, {
        size: 20,
        className: "text-[#0C8657] dark:text-[#22C55E]"
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
        renderId: "render-a20cf431",
        as: "h2",
        children: "Financial Details"
      })]
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "grid md:grid-cols-2 gap-4",
      renderId: "render-7e9e6059",
      as: "div",
      children: [/* @__PURE__ */ jsx(FormInput, {
        label: "Total Amount (Before Tax) *",
        type: "number",
        step: "0.01",
        name: "total_amount",
        value: formData.total_amount,
        onChange: handleInputChange,
        required: true
      }), /* @__PURE__ */ jsxs(FormSelect, {
        label: "GST Applicable",
        name: "has_gst",
        value: formData.has_gst,
        onChange: handleGstChange,
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          value: true,
          renderId: "render-2de79f09",
          as: "option",
          children: "Yes"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          value: false,
          renderId: "render-26e73865",
          as: "option",
          children: "No"
        })]
      }), formData.has_gst && /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsxs(FormSelect, {
          label: "SGST %",
          name: "sgst_percent",
          value: formData.sgst_percent,
          onChange: handleInputChange,
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            value: 0,
            renderId: "render-c8c83e20",
            as: "option",
            children: "0%"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            value: 2.5,
            renderId: "render-6d691d56",
            as: "option",
            children: "2.5%"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            value: 6,
            renderId: "render-dae4aaff",
            as: "option",
            children: "6%"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            value: 9,
            renderId: "render-5b34ac34",
            as: "option",
            children: "9%"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            value: 14,
            renderId: "render-e626f15f",
            as: "option",
            children: "14%"
          })]
        }), /* @__PURE__ */ jsxs(FormSelect, {
          label: "CGST %",
          name: "cgst_percent",
          value: formData.cgst_percent,
          onChange: handleInputChange,
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            value: 0,
            renderId: "render-027540ee",
            as: "option",
            children: "0%"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            value: 2.5,
            renderId: "render-727b7351",
            as: "option",
            children: "2.5%"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            value: 6,
            renderId: "render-4b8cdfc0",
            as: "option",
            children: "6%"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            value: 9,
            renderId: "render-2ee62209",
            as: "option",
            children: "9%"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            value: 14,
            renderId: "render-6007eeda",
            as: "option",
            children: "14%"
          })]
        })]
      }), /* @__PURE__ */ jsxs(FormSelect, {
        label: "Retention %",
        name: "retention_percent",
        value: formData.retention_percent,
        onChange: handleInputChange,
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          value: 0,
          renderId: "render-fc11c748",
          as: "option",
          children: "0%"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          value: 5,
          renderId: "render-e25ccbbf",
          as: "option",
          children: "5%"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          value: 10,
          renderId: "render-98be4afe",
          as: "option",
          children: "10%"
        })]
      })]
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "mt-6 p-4 bg-[#F7FAFC] dark:bg-[#262626] rounded-lg",
      renderId: "render-c3987539",
      as: "div",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "grid md:grid-cols-2 gap-4 text-sm",
        renderId: "render-372fadb6",
        as: "div",
        children: [formData.has_gst && /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "flex justify-between",
            renderId: "render-5d7f8395",
            as: "div",
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "text-[#5D667E] dark:text-[#B0B0B0]",
              renderId: "render-86bf434a",
              as: "span",
              children: ["SGST (", formData.sgst_percent, "%):"]
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-[#1F2739] dark:text-[#FFFFFF] font-medium",
              renderId: "render-322b2887",
              as: "span",
              children: formatCurrency(calculatedAmounts.sgst_amount)
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "flex justify-between",
            renderId: "render-aa255b03",
            as: "div",
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "text-[#5D667E] dark:text-[#B0B0B0]",
              renderId: "render-2ca3e417",
              as: "span",
              children: ["CGST (", formData.cgst_percent, "%):"]
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-[#1F2739] dark:text-[#FFFFFF] font-medium",
              renderId: "render-ac1750d2",
              as: "span",
              children: formatCurrency(calculatedAmounts.cgst_amount)
            })]
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "flex justify-between",
          renderId: "render-4991ee39",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-[#5D667E] dark:text-[#B0B0B0]",
            renderId: "render-65766ad3",
            as: "span",
            children: "Gross Amount:"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-[#1F2739] dark:text-[#FFFFFF] font-medium",
            renderId: "render-0e467d72",
            as: "span",
            children: formatCurrency(calculatedAmounts.gross_amount)
          })]
        }), formData.retention_percent > 0 && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "flex justify-between",
          renderId: "render-ec1be89b",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-[#5D667E] dark:text-[#B0B0B0]",
            renderId: "render-49fbafe8",
            as: "span",
            children: "Retention Amount:"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-[#1F2739] dark:text-[#FFFFFF] font-medium",
            renderId: "render-bebfdcf4",
            as: "span",
            children: formatCurrency(calculatedAmounts.retention_amount)
          })]
        })]
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "my-3 border-[#E4E8EE] dark:border-[#333333]",
        renderId: "render-fb2fb410",
        as: "hr"
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "flex justify-between text-lg font-bold",
        renderId: "render-add1c28f",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "text-[#1F2739] dark:text-[#FFFFFF]",
          renderId: "render-5e72c821",
          as: "span",
          children: "Net Amount:"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "text-[#0C8657] dark:text-[#22C55E]",
          renderId: "render-b932d5cc",
          as: "span",
          children: formatCurrency(calculatedAmounts.net_amount)
        })]
      })]
    })]
  });
}

function PaymentDetailsSection({
  formData,
  handleInputChange
}) {
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-6",
    renderId: "render-2812b1f5",
    as: "div",
    children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "flex items-center gap-2 mb-4",
      renderId: "render-bcc01716",
      as: "div",
      children: [/* @__PURE__ */ jsx(CreditCard, {
        size: 20,
        className: "text-[#0C8657] dark:text-[#22C55E]"
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
        renderId: "render-9fcb61c4",
        as: "h2",
        children: "Payment & Bank Details"
      })]
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "grid md:grid-cols-2 gap-4",
      renderId: "render-9a648b17",
      as: "div",
      children: [/* @__PURE__ */ jsxs(FormSelect, {
        label: "Payment Terms",
        name: "payment_terms",
        value: formData.payment_terms,
        onChange: handleInputChange,
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          value: "",
          renderId: "render-c85d8ba2",
          as: "option",
          children: "Select Payment Terms"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          value: "100% Advance",
          renderId: "render-5fd18e89",
          as: "option",
          children: "100% Advance"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          value: "After Completion",
          renderId: "render-a4fefe9a",
          as: "option",
          children: "After Completion"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          value: "50% Advance + 50% After",
          renderId: "render-88a64176",
          as: "option",
          children: "50% Advance + 50% After"
        })]
      }), /* @__PURE__ */ jsx(FormInput, {
        label: "Vendor Bank Name",
        name: "vendor_bank_name",
        value: formData.vendor_bank_name,
        onChange: handleInputChange
      }), /* @__PURE__ */ jsx(FormInput, {
        label: "Vendor Bank Account No.",
        name: "vendor_bank_account",
        value: formData.vendor_bank_account,
        onChange: handleInputChange
      }), /* @__PURE__ */ jsx(FormInput, {
        label: "Vendor Bank IFSC",
        name: "vendor_bank_ifsc",
        value: formData.vendor_bank_ifsc,
        onChange: handleInputChange
      })]
    })]
  });
}

function ActionButtons({
  id,
  isPending
}) {
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "flex gap-4 pt-6",
    renderId: "render-0ff1ce8e",
    as: "div",
    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      type: "button",
      onClick: () => window.location.href = `/work-orders/${id}`,
      className: "flex-1 px-6 py-3 border border-[#E4E8EE] dark:border-[#333333] text-[#5D667E] dark:text-[#B0B0B0] rounded-lg hover:bg-[#F7FAFC] dark:hover:bg-[#262626] transition-colors",
      renderId: "render-9f25c92c",
      as: "button",
      children: "Cancel"
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      type: "submit",
      disabled: isPending,
      className: "flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#0C8657] dark:bg-[#059669] text-white rounded-lg hover:bg-[#0a6b47] dark:hover:bg-[#047857] disabled:opacity-50 transition-colors",
      renderId: "render-14f0e1b6",
      as: "button",
      children: [isPending ? /* @__PURE__ */ jsx(Loader2, {
        size: 20,
        className: "animate-spin"
      }) : /* @__PURE__ */ jsx(Save, {
        size: 20
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        renderId: "render-b43643aa",
        as: "span",
        children: "Update Work Order"
      })]
    })]
  });
}

function CompanyDetailsSidebar({
  company
}) {
  if (!company) return null;
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    className: "lg:col-span-1",
    renderId: "render-50afee35",
    as: "div",
    children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-6 sticky top-6",
      renderId: "render-6a9cc9e5",
      as: "div",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "flex items-center gap-2 mb-4",
        renderId: "render-27a8accf",
        as: "div",
        children: [/* @__PURE__ */ jsx(Building2, {
          size: 20,
          className: "text-[#0C8657] dark:text-[#22C55E]"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
          renderId: "render-aeffc39c",
          as: "h3",
          children: "Company Details"
        })]
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "space-y-3 text-sm",
        renderId: "render-a8a19c18",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          renderId: "render-9e78674c",
          as: "div",
          children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "font-medium text-[#1F2739] dark:text-[#FFFFFF]",
            renderId: "render-384e1860",
            as: "span",
            children: company.company_name
          })
        }), company.address && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          renderId: "render-508fdf48",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-[#5D667E] dark:text-[#B0B0B0]",
            renderId: "render-1737f302",
            as: "span",
            children: "Address:"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-[#1F2739] dark:text-[#FFFFFF] mt-1",
            renderId: "render-15e34b38",
            as: "p",
            children: company.address
          })]
        }), company.contact_person && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          renderId: "render-312f2313",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-[#5D667E] dark:text-[#B0B0B0]",
            renderId: "render-f147037c",
            as: "span",
            children: "Contact Person:"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-[#1F2739] dark:text-[#FFFFFF]",
            renderId: "render-19a28827",
            as: "p",
            children: company.contact_person
          })]
        }), company.contact_number && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          renderId: "render-9a8bd5e4",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-[#5D667E] dark:text-[#B0B0B0]",
            renderId: "render-f04ed90e",
            as: "span",
            children: "Contact:"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-[#1F2739] dark:text-[#FFFFFF]",
            renderId: "render-e2f60b1e",
            as: "p",
            children: company.contact_number
          })]
        }), company.gst_number && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          renderId: "render-ad13e5bd",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-[#5D667E] dark:text-[#B0B0B0]",
            renderId: "render-e70921a3",
            as: "span",
            children: "GST:"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "text-[#1F2739] dark:text-[#FFFFFF]",
            renderId: "render-b26477f5",
            as: "p",
            children: company.gst_number
          })]
        })]
      })]
    })
  });
}

function FullScreenLoader() {
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    className: "min-h-screen bg-[#F6F8FA] dark:bg-[#121212] flex items-center justify-center",
    renderId: "render-c5521c83",
    as: "div",
    children: /* @__PURE__ */ jsx(Loader2, {
      size: 32,
      className: "text-[#0C8657] dark:text-[#22C55E] animate-spin"
    })
  });
}

function Notification({
  message,
  type = "success"
}) {
  const successClasses = "bg-[#10B981] dark:bg-[#059669]";
  const errorClasses = "bg-[#EF4444] dark:bg-[#DC2626]";
  const bgColor = type === "success" ? successClasses : errorClasses;
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: `fixed bottom-6 right-6 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 ${bgColor}`,
    renderId: "render-559fb385",
    as: "div",
    children: [type === "success" && /* @__PURE__ */ jsx(CheckCircle2, {
      size: 20
    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      renderId: "render-3cd5f5c5",
      as: "span",
      children: message
    })]
  });
}

function EditWorkOrderPage({
  params
}) {
  const {
    id
  } = params;
  const {
    formData,
    calculatedAmounts,
    selectedCompany,
    showSuccess,
    isOrderLoading,
    orderError,
    companies,
    workOrder,
    updateMutation,
    handleInputChange,
    handleCompanyChange,
    handleGstChange,
    handleSubmit
  } = useEditWorkOrder(id);
  if (isOrderLoading) {
    return /* @__PURE__ */ jsx(FullScreenLoader, {});
  }
  if (orderError || !workOrder) {
    return /* @__PURE__ */ jsx(FullScreenError, {
      message: orderError?.message || "Work order not found"
    });
  }
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "min-h-screen bg-[#F6F8FA] dark:bg-[#121212]",
    renderId: "render-ecc1a0a4",
    as: "div",
    children: [/* @__PURE__ */ jsx(EditWorkOrderHeader, {
      workOrderId: id,
      workOrderNumber: formData.wo_number
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "max-w-6xl mx-auto p-6",
      renderId: "render-efc3023b",
      as: "main",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "grid lg:grid-cols-4 gap-6",
        renderId: "render-df551efa",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "lg:col-span-3",
          renderId: "render-70b79728",
          as: "div",
          children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            onSubmit: handleSubmit,
            className: "space-y-8",
            renderId: "render-2a681826",
            as: "form",
            children: [/* @__PURE__ */ jsx(BasicInfoSection, {
              formData,
              handleInputChange,
              handleCompanyChange,
              companies
            }), /* @__PURE__ */ jsx(VendorDetailsSection, {
              formData,
              handleInputChange
            }), /* @__PURE__ */ jsx(ProjectDetailsSection, {
              formData,
              handleInputChange
            }), /* @__PURE__ */ jsx(FinancialDetailsSection, {
              formData,
              calculatedAmounts,
              handleInputChange,
              handleGstChange
            }), /* @__PURE__ */ jsx(PaymentDetailsSection, {
              formData,
              handleInputChange
            }), /* @__PURE__ */ jsx(ActionButtons, {
              id,
              isPending: updateMutation.isPending
            })]
          })
        }), /* @__PURE__ */ jsx(CompanyDetailsSidebar, {
          company: selectedCompany
        })]
      }), showSuccess && /* @__PURE__ */ jsx(Notification, {
        message: "Work Order updated successfully!"
      }), updateMutation.error && /* @__PURE__ */ jsx(Notification, {
        message: updateMutation.error.message,
        type: "error"
      })]
    })]
  });
}

const page$1 = UNSAFE_withComponentProps(function WrappedPage(props) {
  const params = useParams();
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(EditWorkOrderPage, {
      ...props,
      id: params.id
    })
  });
});

const route8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$1
}, Symbol.toStringTag, { value: 'Module' }));

function CreateWorkOrderPage() {
  const [formData, setFormData] = useState({
    company_id: "",
    wo_number: "",
    date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    vendor_name: "",
    vendor_contact: "",
    vendor_address: "",
    vendor_gst: "",
    site_name: "",
    project_description: "",
    work_description: "",
    total_amount: "",
    has_gst: true,
    sgst_percent: 9,
    cgst_percent: 9,
    retention_percent: 0,
    payment_terms: "",
    vendor_bank_name: "",
    vendor_bank_account: "",
    vendor_bank_ifsc: ""
  });
  const [calculatedAmounts, setCalculatedAmounts] = useState({
    sgst_amount: 0,
    cgst_amount: 0,
    gross_amount: 0,
    retention_amount: 0,
    net_amount: 0
  });
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const {
    data: companiesData
  } = useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      const response = await fetch("/api/companies");
      if (!response.ok) throw new Error("Failed to fetch companies");
      return response.json();
    }
  });
  const createMutation = useMutation({
    mutationFn: async (workOrderData) => {
      const response = await fetch("/api/work-orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...workOrderData,
          ...calculatedAmounts
        })
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create work order");
      }
      return response.json();
    },
    onSuccess: () => {
      setShowSuccess(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 2e3);
    }
  });
  const companies = companiesData?.companies || [];
  useEffect(() => {
    const totalAmount = parseFloat(formData.total_amount) || 0;
    const retentionPercent = parseFloat(formData.retention_percent) || 0;
    const sgstPercent = parseFloat(formData.sgst_percent) || 0;
    const cgstPercent = parseFloat(formData.cgst_percent) || 0;
    const sgstAmount = formData.has_gst ? totalAmount * sgstPercent / 100 : 0;
    const cgstAmount = formData.has_gst ? totalAmount * cgstPercent / 100 : 0;
    const grossAmount = totalAmount + sgstAmount + cgstAmount;
    const retentionAmount = grossAmount * retentionPercent / 100;
    const netAmount = grossAmount - retentionAmount;
    setCalculatedAmounts({
      sgst_amount: sgstAmount,
      cgst_amount: cgstAmount,
      gross_amount: grossAmount,
      retention_amount: retentionAmount,
      net_amount: netAmount
    });
  }, [formData.total_amount, formData.has_gst, formData.sgst_percent, formData.cgst_percent, formData.retention_percent]);
  useEffect(() => {
    if (formData.vendor_name && formData.site_name && !formData.wo_number) {
      const today = /* @__PURE__ */ new Date();
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const yyyy = today.getFullYear();
      const vendorShort = formData.vendor_name.replace(/[^a-zA-Z]/g, "").substring(0, 8);
      const siteShort = formData.site_name.replace(/[^a-zA-Z]/g, "").substring(0, 5);
      const woNumber = `W.O.${dd}${mm}${yyyy}-PBPL-${siteShort}-${vendorShort}-01`;
      setFormData((prev) => ({
        ...prev,
        wo_number: woNumber
      }));
    }
  }, [formData.vendor_name, formData.site_name]);
  const handleInputChange = (e) => {
    const {
      name,
      value
    } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleCompanyChange = (e) => {
    const companyId = e.target.value;
    setFormData((prev) => ({
      ...prev,
      company_id: companyId
    }));
    const company = companies.find((c) => c.id.toString() === companyId);
    setSelectedCompany(company);
  };
  const handleSubmit = (e, status = "Draft") => {
    e.preventDefault();
    createMutation.mutate({
      ...formData,
      status
    });
  };
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2
    }).format(amount);
  };
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    className: "min-h-screen bg-[#F6F8FA] dark:bg-[#121212]",
    renderId: "render-b639b2a6",
    as: "div",
    children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "bg-[#0C8657] dark:bg-[#0C8657] h-14 flex items-center px-4 sm:px-6 text-white sticky top-0 z-30",
      renderId: "render-0371201b",
      as: "header",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        onClick: () => window.location.href = "/",
        className: "flex items-center gap-2 hover:bg-white/10 dark:hover:bg-white/10 active:bg-white/20 dark:active:bg-white/20 px-2 py-1 rounded transition-colors",
        renderId: "render-563cb619",
        as: "button",
        children: [/* @__PURE__ */ jsx(ArrowLeft, {
          size: 20
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "hidden sm:block",
          renderId: "render-11963328",
          as: "span",
          children: "Back"
        })]
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "text-xl font-semibold ml-4",
        renderId: "render-3c91a63e",
        as: "h1",
        children: "Create Work Order"
      })]
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "max-w-6xl mx-auto p-6",
      renderId: "render-663e5d82",
      as: "main",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "grid lg:grid-cols-4 gap-6",
        renderId: "render-e1e3a583",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "lg:col-span-3",
          renderId: "render-ed206c22",
          as: "div",
          children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            onSubmit: handleSubmit,
            className: "space-y-8",
            renderId: "render-aaea9ece",
            as: "form",
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-6",
              renderId: "render-4b22a2b9",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "flex items-center gap-2 mb-4",
                renderId: "render-e76c76b2",
                as: "div",
                children: [/* @__PURE__ */ jsx(Building2, {
                  size: 20,
                  className: "text-[#0C8657] dark:text-[#22C55E]"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-80ea2095",
                  as: "h2",
                  children: "Basic Information"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "grid md:grid-cols-2 gap-4",
                renderId: "render-a4f166da",
                as: "div",
                children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  renderId: "render-88267a0c",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                    renderId: "render-25f2d891",
                    as: "label",
                    children: "Company *"
                  }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    name: "company_id",
                    value: formData.company_id,
                    onChange: handleCompanyChange,
                    required: true,
                    className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                    renderId: "render-6af477bc",
                    as: "select",
                    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      value: "",
                      renderId: "render-d87c236a",
                      as: "option",
                      children: "Select Company"
                    }), companies.map((company) => /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      value: company.id,
                      renderId: "render-3b1c0427",
                      as: "option",
                      children: company.company_name
                    }, company.id))]
                  })]
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  renderId: "render-8cab2004",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                    renderId: "render-af0f26a1",
                    as: "label",
                    children: "Date *"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    type: "date",
                    name: "date",
                    value: formData.date,
                    onChange: handleInputChange,
                    required: true,
                    className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                    renderId: "render-fa62380f",
                    as: "input"
                  })]
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  className: "md:col-span-2",
                  renderId: "render-7ad338df",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                    renderId: "render-0b1f21ea",
                    as: "label",
                    children: "Work Order Number"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    type: "text",
                    name: "wo_number",
                    value: formData.wo_number,
                    onChange: handleInputChange,
                    placeholder: "Auto-generated based on vendor and site",
                    className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-[#F7FAFC] dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                    renderId: "render-2f63d921",
                    as: "input"
                  })]
                })]
              })]
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-6",
              renderId: "render-aed26590",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "flex items-center gap-2 mb-4",
                renderId: "render-3dbf3b13",
                as: "div",
                children: [/* @__PURE__ */ jsx(User, {
                  size: 20,
                  className: "text-[#0C8657] dark:text-[#22C55E]"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-d0115676",
                  as: "h2",
                  children: "Vendor Details"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "grid md:grid-cols-2 gap-4",
                renderId: "render-b0c0d1c8",
                as: "div",
                children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  renderId: "render-b9be6062",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                    renderId: "render-0059327f",
                    as: "label",
                    children: "Vendor Name *"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    type: "text",
                    name: "vendor_name",
                    value: formData.vendor_name,
                    onChange: handleInputChange,
                    required: true,
                    className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                    renderId: "render-b49c4d74",
                    as: "input"
                  })]
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  renderId: "render-63515736",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                    renderId: "render-009e38ac",
                    as: "label",
                    children: "Vendor Contact Number"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    type: "tel",
                    name: "vendor_contact",
                    value: formData.vendor_contact,
                    onChange: handleInputChange,
                    className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                    renderId: "render-33c879c8",
                    as: "input"
                  })]
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  renderId: "render-537fbdea",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                    renderId: "render-d61b2033",
                    as: "label",
                    children: "Vendor Address"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    name: "vendor_address",
                    value: formData.vendor_address,
                    onChange: handleInputChange,
                    rows: 3,
                    className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                    renderId: "render-739e4350",
                    as: "textarea"
                  })]
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  renderId: "render-c5a408c1",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                    renderId: "render-e991e7df",
                    as: "label",
                    children: "Vendor GST No. (Optional)"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    type: "text",
                    name: "vendor_gst",
                    value: formData.vendor_gst,
                    onChange: handleInputChange,
                    className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                    renderId: "render-0bdb03d7",
                    as: "input"
                  })]
                })]
              })]
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-6",
              renderId: "render-5f300c5a",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "flex items-center gap-2 mb-4",
                renderId: "render-77037d9b",
                as: "div",
                children: [/* @__PURE__ */ jsx(MapPin, {
                  size: 20,
                  className: "text-[#0C8657] dark:text-[#22C55E]"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-97d120c2",
                  as: "h2",
                  children: "Project Details"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "space-y-4",
                renderId: "render-bb263cee",
                as: "div",
                children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  renderId: "render-68286a34",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                    renderId: "render-14bd0055",
                    as: "label",
                    children: "Site Name *"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    type: "text",
                    name: "site_name",
                    value: formData.site_name,
                    onChange: handleInputChange,
                    required: true,
                    className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                    renderId: "render-1f2067ee",
                    as: "input"
                  })]
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  renderId: "render-9ad38c21",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                    renderId: "render-094b1722",
                    as: "label",
                    children: "Project Description"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    type: "text",
                    name: "project_description",
                    value: formData.project_description,
                    onChange: handleInputChange,
                    className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                    renderId: "render-6f353132",
                    as: "input"
                  })]
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  renderId: "render-bf9d460c",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                    renderId: "render-ec781b9a",
                    as: "label",
                    children: "Description of Work *"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    name: "work_description",
                    value: formData.work_description,
                    onChange: handleInputChange,
                    required: true,
                    rows: 6,
                    placeholder: "Detailed description of the work to be performed...",
                    className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                    renderId: "render-09ae5503",
                    as: "textarea"
                  })]
                })]
              })]
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-6",
              renderId: "render-82097fb6",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "flex items-center gap-2 mb-4",
                renderId: "render-7491f505",
                as: "div",
                children: [/* @__PURE__ */ jsx(Calculator, {
                  size: 20,
                  className: "text-[#0C8657] dark:text-[#22C55E]"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-e341967b",
                  as: "h2",
                  children: "Financial Details"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "grid md:grid-cols-2 gap-4",
                renderId: "render-6359680a",
                as: "div",
                children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  renderId: "render-b53d3d88",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                    renderId: "render-d49bb4d5",
                    as: "label",
                    children: "Total Amount (Before Tax) *"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    type: "number",
                    step: "0.01",
                    name: "total_amount",
                    value: formData.total_amount,
                    onChange: handleInputChange,
                    required: true,
                    className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                    renderId: "render-32398654",
                    as: "input"
                  })]
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  renderId: "render-d1596282",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                    renderId: "render-1f468d90",
                    as: "label",
                    children: "GST Applicable"
                  }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    name: "has_gst",
                    value: formData.has_gst,
                    onChange: (e) => setFormData((prev) => ({
                      ...prev,
                      has_gst: e.target.value === "true"
                    })),
                    className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                    renderId: "render-b010bc8e",
                    as: "select",
                    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      value: true,
                      renderId: "render-5e14a683",
                      as: "option",
                      children: "Yes"
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      value: false,
                      renderId: "render-115424cd",
                      as: "option",
                      children: "No"
                    })]
                  })]
                }), formData.has_gst && /* @__PURE__ */ jsxs(Fragment, {
                  children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    renderId: "render-70fc4e79",
                    as: "div",
                    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                      renderId: "render-37f59771",
                      as: "label",
                      children: "SGST %"
                    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                      name: "sgst_percent",
                      value: formData.sgst_percent,
                      onChange: handleInputChange,
                      className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                      renderId: "render-42bde133",
                      as: "select",
                      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        value: 0,
                        renderId: "render-7bcf2248",
                        as: "option",
                        children: "0%"
                      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        value: 2.5,
                        renderId: "render-03713578",
                        as: "option",
                        children: "2.5%"
                      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        value: 6,
                        renderId: "render-8ecebbc9",
                        as: "option",
                        children: "6%"
                      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        value: 9,
                        renderId: "render-1f334ad4",
                        as: "option",
                        children: "9%"
                      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        value: 14,
                        renderId: "render-10702e10",
                        as: "option",
                        children: "14%"
                      })]
                    })]
                  }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    renderId: "render-19428cd6",
                    as: "div",
                    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                      renderId: "render-bbac2346",
                      as: "label",
                      children: "CGST %"
                    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                      name: "cgst_percent",
                      value: formData.cgst_percent,
                      onChange: handleInputChange,
                      className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                      renderId: "render-e771f8ce",
                      as: "select",
                      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        value: 0,
                        renderId: "render-5e2b7950",
                        as: "option",
                        children: "0%"
                      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        value: 2.5,
                        renderId: "render-d0003d2c",
                        as: "option",
                        children: "2.5%"
                      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        value: 6,
                        renderId: "render-5166c366",
                        as: "option",
                        children: "6%"
                      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        value: 9,
                        renderId: "render-20d9f2bb",
                        as: "option",
                        children: "9%"
                      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        value: 14,
                        renderId: "render-890ed1d5",
                        as: "option",
                        children: "14%"
                      })]
                    })]
                  })]
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  renderId: "render-90f0a818",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                    renderId: "render-e91d4eb1",
                    as: "label",
                    children: "Retention %"
                  }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    name: "retention_percent",
                    value: formData.retention_percent,
                    onChange: handleInputChange,
                    className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                    renderId: "render-3e4c042c",
                    as: "select",
                    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      value: 0,
                      renderId: "render-b2183161",
                      as: "option",
                      children: "0%"
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      value: 5,
                      renderId: "render-bc837ed4",
                      as: "option",
                      children: "5%"
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      value: 10,
                      renderId: "render-8e351967",
                      as: "option",
                      children: "10%"
                    })]
                  })]
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "mt-6 p-4 bg-[#F7FAFC] dark:bg-[#262626] rounded-lg",
                renderId: "render-9acb20bb",
                as: "div",
                children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  className: "grid md:grid-cols-2 gap-4 text-sm",
                  renderId: "render-3925bed0",
                  as: "div",
                  children: [formData.has_gst && /* @__PURE__ */ jsxs(Fragment, {
                    children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                      className: "flex justify-between",
                      renderId: "render-e781a931",
                      as: "div",
                      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                        className: "text-[#5D667E] dark:text-[#B0B0B0]",
                        renderId: "render-7fc1a65a",
                        as: "span",
                        children: ["SGST (", formData.sgst_percent, "%):"]
                      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        className: "text-[#1F2739] dark:text-[#FFFFFF] font-medium",
                        renderId: "render-7dec98df",
                        as: "span",
                        children: formatCurrency(calculatedAmounts.sgst_amount)
                      })]
                    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                      className: "flex justify-between",
                      renderId: "render-85af555a",
                      as: "div",
                      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                        className: "text-[#5D667E] dark:text-[#B0B0B0]",
                        renderId: "render-7ca538f7",
                        as: "span",
                        children: ["CGST (", formData.cgst_percent, "%):"]
                      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                        className: "text-[#1F2739] dark:text-[#FFFFFF] font-medium",
                        renderId: "render-85ca7aed",
                        as: "span",
                        children: formatCurrency(calculatedAmounts.cgst_amount)
                      })]
                    })]
                  }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    className: "flex justify-between",
                    renderId: "render-8fb0a29b",
                    as: "div",
                    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-[#5D667E] dark:text-[#B0B0B0]",
                      renderId: "render-04872014",
                      as: "span",
                      children: "Gross Amount:"
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-[#1F2739] dark:text-[#FFFFFF] font-medium",
                      renderId: "render-31378ab8",
                      as: "span",
                      children: formatCurrency(calculatedAmounts.gross_amount)
                    })]
                  }), formData.retention_percent > 0 && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    className: "flex justify-between",
                    renderId: "render-9b87b739",
                    as: "div",
                    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-[#5D667E] dark:text-[#B0B0B0]",
                      renderId: "render-a9059536",
                      as: "span",
                      children: "Retention Amount:"
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      className: "text-[#1F2739] dark:text-[#FFFFFF] font-medium",
                      renderId: "render-83e3dc88",
                      as: "span",
                      children: formatCurrency(calculatedAmounts.retention_amount)
                    })]
                  })]
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "my-3 border-[#E4E8EE] dark:border-[#333333]",
                  renderId: "render-85ee59c8",
                  as: "hr"
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  className: "flex justify-between text-lg font-bold",
                  renderId: "render-de4e5d98",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "text-[#1F2739] dark:text-[#FFFFFF]",
                    renderId: "render-0eb52d2d",
                    as: "span",
                    children: "Net Amount:"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "text-[#0C8657] dark:text-[#22C55E]",
                    renderId: "render-a3dd3e1f",
                    as: "span",
                    children: formatCurrency(calculatedAmounts.net_amount)
                  })]
                })]
              })]
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-6",
              renderId: "render-de41d538",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "flex items-center gap-2 mb-4",
                renderId: "render-04422568",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreditCard, {
                  size: 20,
                  className: "text-[#0C8657] dark:text-[#22C55E]"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-667acc69",
                  as: "h2",
                  children: "Payment & Bank Details"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "grid md:grid-cols-2 gap-4",
                renderId: "render-f9c93df3",
                as: "div",
                children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  renderId: "render-cf6e113d",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                    renderId: "render-5dcf228f",
                    as: "label",
                    children: "Payment Terms"
                  }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                    name: "payment_terms",
                    value: formData.payment_terms,
                    onChange: handleInputChange,
                    className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                    renderId: "render-501a5f3e",
                    as: "select",
                    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      value: "",
                      renderId: "render-35162cd5",
                      as: "option",
                      children: "Select Payment Terms"
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      value: "100% Advance",
                      renderId: "render-0c1a5e83",
                      as: "option",
                      children: "100% Advance"
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      value: "After Completion",
                      renderId: "render-8aa0e615",
                      as: "option",
                      children: "After Completion"
                    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                      value: "50% Advance + 50% After",
                      renderId: "render-23a6a572",
                      as: "option",
                      children: "50% Advance + 50% After"
                    })]
                  })]
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  renderId: "render-888ed260",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                    renderId: "render-5377bb78",
                    as: "label",
                    children: "Vendor Bank Name"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    type: "text",
                    name: "vendor_bank_name",
                    value: formData.vendor_bank_name,
                    onChange: handleInputChange,
                    className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                    renderId: "render-1aaa1ebc",
                    as: "input"
                  })]
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  renderId: "render-7cd36705",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                    renderId: "render-f452cae9",
                    as: "label",
                    children: "Vendor Bank Account No."
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    type: "text",
                    name: "vendor_bank_account",
                    value: formData.vendor_bank_account,
                    onChange: handleInputChange,
                    className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                    renderId: "render-285ce0ad",
                    as: "input"
                  })]
                }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                  renderId: "render-b3506907",
                  as: "div",
                  children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    className: "block text-sm font-medium text-[#1F2739] dark:text-[#FFFFFF] mb-1",
                    renderId: "render-3810035b",
                    as: "label",
                    children: "Vendor Bank IFSC"
                  }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                    type: "text",
                    name: "vendor_bank_ifsc",
                    value: formData.vendor_bank_ifsc,
                    onChange: handleInputChange,
                    className: "w-full px-3 py-2 border border-[#E4E8EE] dark:border-[#333333] rounded-lg bg-white dark:bg-[#262626] text-[#1F2739] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#0C8657] dark:focus:ring-[#22C55E]",
                    renderId: "render-ba6d77f6",
                    as: "input"
                  })]
                })]
              })]
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "flex gap-4 pt-6",
              renderId: "render-4363f8f2",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                type: "submit",
                disabled: createMutation.isPending,
                className: "flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#0C8657] dark:bg-[#059669] text-white rounded-lg hover:bg-[#0a6b47] dark:hover:bg-[#047857] disabled:opacity-50 transition-colors",
                renderId: "render-c7435f37",
                as: "button",
                children: [createMutation.isPending ? /* @__PURE__ */ jsx(Loader2, {
                  size: 20,
                  className: "animate-spin"
                }) : /* @__PURE__ */ jsx(Save, {
                  size: 20
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  renderId: "render-921ec5a0",
                  as: "span",
                  children: "Save as Draft"
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                type: "button",
                onClick: (e) => handleSubmit(e, "Active"),
                disabled: createMutation.isPending,
                className: "flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#2563EB] dark:bg-[#3B82F6] text-white rounded-lg hover:bg-[#1D4ED8] dark:hover:bg-[#2563EB] disabled:opacity-50 transition-colors",
                renderId: "render-fb1e460e",
                as: "button",
                children: [createMutation.isPending ? /* @__PURE__ */ jsx(Loader2, {
                  size: 20,
                  className: "animate-spin"
                }) : /* @__PURE__ */ jsx(FileText, {
                  size: 20
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  renderId: "render-0452eb0b",
                  as: "span",
                  children: "Save & Generate PDF"
                })]
              })]
            })]
          })
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "lg:col-span-1",
          renderId: "render-e89a4146",
          as: "div",
          children: selectedCompany && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "bg-white dark:bg-[#1E1E1E] rounded-lg border border-[#E4E8EE] dark:border-[#333333] p-6 sticky top-6",
            renderId: "render-5a8407a2",
            as: "div",
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "flex items-center gap-2 mb-4",
              renderId: "render-761984d9",
              as: "div",
              children: [/* @__PURE__ */ jsx(Building2, {
                size: 20,
                className: "text-[#0C8657] dark:text-[#22C55E]"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "text-lg font-semibold text-[#1F2739] dark:text-[#FFFFFF]",
                renderId: "render-7f88e2ba",
                as: "h3",
                children: "Company Details"
              })]
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "space-y-3 text-sm",
              renderId: "render-82463762",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                renderId: "render-984bdc7c",
                as: "div",
                children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "font-medium text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-87b92990",
                  as: "span",
                  children: selectedCompany.company_name
                })
              }), selectedCompany.address && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-0dbc6120",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-cb2eef97",
                  as: "span",
                  children: "Address:"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF] mt-1",
                  renderId: "render-c03de518",
                  as: "p",
                  children: selectedCompany.address
                })]
              }), selectedCompany.contact_person && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-3114da91",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-11fe9fe8",
                  as: "span",
                  children: "Contact Person:"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-720f7e93",
                  as: "p",
                  children: selectedCompany.contact_person
                })]
              }), selectedCompany.contact_number && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-32f1cfcd",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-cb6ec464",
                  as: "span",
                  children: "Contact:"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-66508060",
                  as: "p",
                  children: selectedCompany.contact_number
                })]
              }), selectedCompany.gst_number && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                renderId: "render-b35676f0",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#5D667E] dark:text-[#B0B0B0]",
                  renderId: "render-6ab904ec",
                  as: "span",
                  children: "GST:"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  className: "text-[#1F2739] dark:text-[#FFFFFF]",
                  renderId: "render-da3a4fbb",
                  as: "p",
                  children: selectedCompany.gst_number
                })]
              })]
            })]
          })
        })]
      }), showSuccess && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "fixed bottom-6 right-6 bg-[#10B981] dark:bg-[#059669] text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2",
        renderId: "render-34c0cc61",
        as: "div",
        children: [/* @__PURE__ */ jsx(CheckCircle2, {
          size: 20
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          renderId: "render-8cfd083e",
          as: "span",
          children: "Work Order created successfully!"
        })]
      })]
    })]
  });
}

const page = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(CreateWorkOrderPage, {
      ...props
    })
  });
});

const route9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page
}, Symbol.toStringTag, { value: 'Module' }));

async function loader({
  params
}) {
  const matches = await fg("src/**/page.{js,jsx,ts,tsx}");
  return {
    path: `/${params["*"]}`,
    pages: matches.sort((a, b) => a.length - b.length).map(match => {
      const url = match.replace("src/app", "").replace(/\/page\.(js|jsx|ts|tsx)$/, "") || "/";
      const path = url.replaceAll("[", "").replaceAll("]", "");
      const displayPath = path === "/" ? "Homepage" : path;
      return {
        url,
        path: displayPath
      };
    })
  };
}
const notFound = UNSAFE_withComponentProps(function CreateDefaultNotFoundPage({
  loaderData
}) {
  const [siteMap, setSitemap] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof window !== "undefined" && window.parent && window.parent !== window) {
      const handler = event => {
        if (event.data.type === "sandbox:sitemap") {
          window.removeEventListener("message", handler);
          setSitemap(event.data.sitemap);
        }
      };
      window.parent.postMessage({
        type: "sandbox:sitemap"
      }, "*");
      window.addEventListener("message", handler);
      return () => {
        window.removeEventListener("message", handler);
      };
    }
  }, []);
  const missingPath = loaderData.path.replace(/^\//, "");
  const existingRoutes = loaderData.pages.map(page => ({
    path: page.path,
    url: page.url
  }));
  const handleBack = () => {
    navigate("/");
  };
  const handleSearch = value => {
    if (!siteMap) {
      const path = `/${value}`;
      navigate(path);
    } else {
      navigate(value);
    }
  };
  const handleCreatePage = useCallback(() => {
    window.parent.postMessage({
      type: "sandbox:web:create",
      path: missingPath,
      view: "web"
    }, "*");
  }, [missingPath]);
  return /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
    className: "flex sm:w-full w-screen sm:min-w-[850px] flex-col",
    renderId: "render-2b09afcb",
    as: "div",
    children: [/* @__PURE__ */jsxs(CreatePolymorphicComponent, {
      className: "flex w-full items-center gap-2 p-5",
      renderId: "render-674a7d62",
      as: "div",
      children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
        type: "button",
        onClick: handleBack,
        className: "flex items-center justify-center w-10 h-10 rounded-md",
        renderId: "render-fc2195e2",
        as: "button",
        children: /* @__PURE__ */jsxs("svg", {
          width: "18",
          height: "18",
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-label": "Back",
          role: "img",
          children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
            d: "M8.5957 2.65435L2.25005 9L8.5957 15.3457",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            renderId: "render-9df49e8e",
            as: "path"
          }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
            d: "M2.25007 9L15.75 9",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            renderId: "render-9c8fb494",
            as: "path"
          })]
        })
      }), /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
        className: "flex flex-row divide-x divide-gray-200 rounded-[8px] h-8 w-[300px] border border-gray-200 bg-gray-50 text-gray-500",
        renderId: "render-ad87463c",
        as: "div",
        children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
          className: "flex items-center px-[14px] py-[5px]",
          renderId: "render-8afd99e4",
          as: "div",
          children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
            renderId: "render-600a085e",
            as: "span",
            children: "/"
          })
        }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
          className: "flex items-center min-w-0",
          renderId: "render-350c4a2a",
          as: "div",
          children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
            className: "border-0 bg-transparent px-3 py-2 focus:outline-none truncate max-w-[300px]",
            style: {
              minWidth: 0
            },
            title: missingPath,
            renderId: "render-cdd1ef4e",
            as: "p",
            children: missingPath
          })
        })]
      })]
    }), /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
      className: "flex flex-grow flex-col items-center justify-center pt-[100px] text-center gap-[20px]",
      renderId: "render-7dc4beba",
      as: "div",
      children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "text-4xl font-medium text-gray-900 px-2",
        renderId: "render-1a89e53c",
        as: "h1",
        children: "Uh-oh! This page doesn't exist (yet)."
      }), /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
        className: "pt-4 pb-12 px-2 text-gray-500",
        renderId: "render-137a4bfd",
        as: "p",
        children: ['Looks like "', /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
          className: "font-bold",
          renderId: "render-77009961",
          as: "span",
          children: ["/", missingPath]
        }), `" isn't part of your project. But no worries, you've got options!`]
      }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "px-[20px] w-full",
        renderId: "render-091ce159",
        as: "div",
        children: /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
          className: "flex flex-row justify-center items-center w-full max-w-[800px] mx-auto border border-gray-200 rounded-lg p-[20px] mb-[40px] gap-[20px]",
          renderId: "render-9c038c8f",
          as: "div",
          children: [/* @__PURE__ */jsxs(CreatePolymorphicComponent, {
            className: "flex flex-col gap-[5px] items-start self-start w-1/2",
            renderId: "render-81a4cd0a",
            as: "div",
            children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "text-sm text-black text-left",
              renderId: "render-6df2899f",
              as: "p",
              children: "Build it from scratch"
            }), /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
              className: "text-sm text-gray-500 text-left",
              renderId: "render-a00de08f",
              as: "p",
              children: ['Create a new page to live at "', /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
                renderId: "render-cc2a1cf2",
                as: "span",
                children: ["/", missingPath]
              }), '"']
            })]
          }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
            className: "flex flex-row items-center justify-end w-1/2",
            renderId: "render-0f5fcc87",
            as: "div",
            children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
              type: "button",
              className: "bg-black text-white px-[10px] py-[5px] rounded-md",
              onClick: () => handleCreatePage(),
              renderId: "render-64b667ed",
              as: "button",
              children: "Create Page"
            })
          })]
        })
      }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "pb-20 lg:pb-[80px]",
        renderId: "render-e78cefdd",
        as: "div",
        children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
          className: "flex items-center text-gray-500",
          renderId: "render-24f58d52",
          as: "p",
          children: "Check out all your project's routes here ↓"
        })
      }), siteMap ? /* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "flex flex-col justify-center items-center w-full px-[50px]",
        renderId: "render-84a30622",
        as: "div",
        children: /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
          className: "flex flex-col justify-between items-center w-full max-w-[600px] gap-[10px]",
          renderId: "render-c8c44c17",
          as: "div",
          children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
            className: "text-sm text-gray-300 pb-[10px] self-start p-4",
            renderId: "render-e39a604e",
            as: "p",
            children: "PAGES"
          }), siteMap.webPages?.map(route => /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
            type: "button",
            onClick: () => handleSearch(route.cleanRoute || ""),
            className: "flex flex-row justify-between text-center items-center p-4 rounded-lg bg-white shadow-sm w-full hover:bg-gray-50",
            renderId: "render-be0d0c67",
            as: "button",
            children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "font-medium text-gray-900",
              renderId: "render-76602859",
              as: "h3",
              children: route.name
            }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "text-sm text-gray-400",
              renderId: "render-5477e019",
              as: "p",
              children: route.cleanRoute
            })]
          }, route.id))]
        })
      }) : /* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "flex flex-wrap gap-3 w-full max-w-[80rem] mx-auto pb-5 px-2",
        renderId: "render-34c574e1",
        as: "div",
        children: existingRoutes.map(route => /* @__PURE__ */jsx(CreatePolymorphicComponent, {
          className: "flex flex-col flex-grow basis-full sm:basis-[calc(50%-0.375rem)] xl:basis-[calc(33.333%-0.5rem)]",
          renderId: "render-008f52f9",
          as: "div",
          children: /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
            className: "w-full flex-1 flex flex-col items-center ",
            renderId: "render-7d95e3ed",
            as: "div",
            children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "relative w-full max-w-[350px] h-48 sm:h-56 lg:h-64 overflow-hidden rounded-[8px] border border-comeback-gray-75 transition-all group-hover:shadow-md",
              renderId: "render-36e379a7",
              as: "div",
              children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
                type: "button",
                onClick: () => handleSearch(route.url.replace(/^\//, "")),
                className: "h-full w-full rounded-[8px] bg-gray-50 bg-cover",
                renderId: "render-f760c999",
                as: "button"
              })
            }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "pt-3 text-left text-gray-500 w-full max-w-[350px]",
              renderId: "render-40798184",
              as: "p",
              children: route.path
            })]
          })
        }, route.path))
      })]
    })]
  });
});

const route10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: notFound,
  loader
}, Symbol.toStringTag, { value: 'Module' }));

const serverManifest = {'entry':{'module':'/assets/entry.client-CfKH7RMk.js','imports':['/assets/chunk-OIYGIGL5-Bl7fu__Q.js','/assets/index-DR2uz1nU.js'],'css':[]},'routes':{'root':{'id':'root','parentId':undefined,'path':'','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':true,'module':'/assets/root-B4e9YhD1.js','imports':['/assets/chunk-OIYGIGL5-Bl7fu__Q.js','/assets/index-DR2uz1nU.js','/assets/PolymorphicComponent-BX0mGPA7.js'],'css':['/assets/root-CKEu5gtX.css'],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'page':{'id':'page','parentId':'root','path':undefined,'index':true,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-Dj9v6a7A.js','imports':['/assets/PolymorphicComponent-BX0mGPA7.js','/assets/chunk-OIYGIGL5-Bl7fu__Q.js','/assets/layout-DujwgiLM.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'activity-logs/page':{'id':'activity-logs/page','parentId':'root','path':'activity-logs','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-BrEF6YlE.js','imports':['/assets/PolymorphicComponent-BX0mGPA7.js','/assets/chunk-OIYGIGL5-Bl7fu__Q.js','/assets/layout-DujwgiLM.js','/assets/loader-circle-MXmvxXnL.js','/assets/arrow-left-CZCw9Flu.js','/assets/chevron-down-DWLuOVI3.js','/assets/search-B4Ptt0Lv.js','/assets/filter-BSQRzRej.js','/assets/circle-alert-DZMD2-Db.js','/assets/activity-BvVUradw.js','/assets/user-G-DUsIBb.js','/assets/eye-DIw6tOc0.js','/assets/trash-2-B5TRt7gO.js','/assets/plus-C2kr1Kd7.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'companies/page':{'id':'companies/page','parentId':'root','path':'companies','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-CYPoIbjl.js','imports':['/assets/PolymorphicComponent-BX0mGPA7.js','/assets/chunk-OIYGIGL5-Bl7fu__Q.js','/assets/layout-DujwgiLM.js','/assets/loader-circle-MXmvxXnL.js','/assets/save-CXaWjkq2.js','/assets/x-BK-IUPuR.js','/assets/home-3I0fN2BM.js','/assets/building-2-DRieEeFk.js','/assets/file-text-DWfXN9JN.js','/assets/users-Bh3a1pjf.js','/assets/chevron-down-DWLuOVI3.js','/assets/plus-C2kr1Kd7.js','/assets/circle-alert-DZMD2-Db.js','/assets/trash-2-B5TRt7gO.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'dashboard/page':{'id':'dashboard/page','parentId':'root','path':'dashboard','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-DIAiQi5Z.js','imports':['/assets/PolymorphicComponent-BX0mGPA7.js','/assets/chunk-OIYGIGL5-Bl7fu__Q.js','/assets/layout-DujwgiLM.js','/assets/FullScreenError-CUHBHojx.js','/assets/loader-circle-MXmvxXnL.js','/assets/home-3I0fN2BM.js','/assets/building-2-DRieEeFk.js','/assets/file-text-DWfXN9JN.js','/assets/users-Bh3a1pjf.js','/assets/chevron-down-DWLuOVI3.js','/assets/activity-BvVUradw.js','/assets/circle-alert-DZMD2-Db.js','/assets/indian-rupee-BGUuqj9D.js','/assets/plus-C2kr1Kd7.js','/assets/eye-DIw6tOc0.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'vendors/page':{'id':'vendors/page','parentId':'root','path':'vendors','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-Bl1L5c9n.js','imports':['/assets/PolymorphicComponent-BX0mGPA7.js','/assets/chunk-OIYGIGL5-Bl7fu__Q.js','/assets/layout-DujwgiLM.js','/assets/loader-circle-MXmvxXnL.js','/assets/save-CXaWjkq2.js','/assets/x-BK-IUPuR.js','/assets/home-3I0fN2BM.js','/assets/building-2-DRieEeFk.js','/assets/users-Bh3a1pjf.js','/assets/file-text-DWfXN9JN.js','/assets/chevron-down-DWLuOVI3.js','/assets/activity-BvVUradw.js','/assets/plus-C2kr1Kd7.js','/assets/search-B4Ptt0Lv.js','/assets/circle-alert-DZMD2-Db.js','/assets/trash-2-B5TRt7gO.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'work-orders/page':{'id':'work-orders/page','parentId':'root','path':'work-orders','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-B7GKHe3Z.js','imports':['/assets/PolymorphicComponent-BX0mGPA7.js','/assets/chunk-OIYGIGL5-Bl7fu__Q.js','/assets/layout-DujwgiLM.js','/assets/loader-circle-MXmvxXnL.js','/assets/arrow-left-CZCw9Flu.js','/assets/home-3I0fN2BM.js','/assets/chevron-down-DWLuOVI3.js','/assets/plus-C2kr1Kd7.js','/assets/search-B4Ptt0Lv.js','/assets/building-2-DRieEeFk.js','/assets/filter-BSQRzRej.js','/assets/circle-alert-DZMD2-Db.js','/assets/file-text-DWfXN9JN.js','/assets/indian-rupee-BGUuqj9D.js','/assets/map-pin-CAE5aycg.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'work-orders/[id]/page':{'id':'work-orders/[id]/page','parentId':'root','path':'work-orders/:id','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-Btwho-CJ.js','imports':['/assets/PolymorphicComponent-BX0mGPA7.js','/assets/chunk-OIYGIGL5-Bl7fu__Q.js','/assets/layout-DujwgiLM.js','/assets/loader-circle-MXmvxXnL.js','/assets/save-CXaWjkq2.js','/assets/circle-alert-DZMD2-Db.js','/assets/arrow-left-CZCw9Flu.js','/assets/chevron-down-DWLuOVI3.js','/assets/indian-rupee-BGUuqj9D.js','/assets/trash-2-B5TRt7gO.js','/assets/building-2-DRieEeFk.js','/assets/user-G-DUsIBb.js','/assets/map-pin-CAE5aycg.js','/assets/credit-card-CRmE0Cdr.js','/assets/file-text-DWfXN9JN.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'work-orders/[id]/edit/page':{'id':'work-orders/[id]/edit/page','parentId':'root','path':'work-orders/:id/edit','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-Bf0eWDEs.js','imports':['/assets/PolymorphicComponent-BX0mGPA7.js','/assets/chunk-OIYGIGL5-Bl7fu__Q.js','/assets/layout-DujwgiLM.js','/assets/loader-circle-MXmvxXnL.js','/assets/save-CXaWjkq2.js','/assets/arrow-left-CZCw9Flu.js','/assets/building-2-DRieEeFk.js','/assets/user-G-DUsIBb.js','/assets/map-pin-CAE5aycg.js','/assets/calculator-BwbJLpSQ.js','/assets/credit-card-CRmE0Cdr.js','/assets/FullScreenError-CUHBHojx.js','/assets/circle-alert-DZMD2-Db.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'work-orders/create/page':{'id':'work-orders/create/page','parentId':'root','path':'work-orders/create','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/page-BAGH4jmI.js','imports':['/assets/PolymorphicComponent-BX0mGPA7.js','/assets/chunk-OIYGIGL5-Bl7fu__Q.js','/assets/layout-DujwgiLM.js','/assets/loader-circle-MXmvxXnL.js','/assets/save-CXaWjkq2.js','/assets/arrow-left-CZCw9Flu.js','/assets/building-2-DRieEeFk.js','/assets/user-G-DUsIBb.js','/assets/map-pin-CAE5aycg.js','/assets/calculator-BwbJLpSQ.js','/assets/credit-card-CRmE0Cdr.js','/assets/file-text-DWfXN9JN.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'__create/not-found':{'id':'__create/not-found','parentId':'root','path':'*?','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':true,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasErrorBoundary':false,'module':'/assets/not-found-BYPzOEdM.js','imports':['/assets/PolymorphicComponent-BX0mGPA7.js','/assets/chunk-OIYGIGL5-Bl7fu__Q.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined}},'url':'/assets/manifest-ff98385e.js','version':'ff98385e','sri':undefined};

const assetsBuildDirectory = "build/client";
      const basename = "/";
      const future = {"v8_middleware":false,"unstable_optimizeDeps":false,"unstable_splitRouteModules":false,"unstable_subResourceIntegrity":false,"unstable_viteEnvironmentApi":false};
      const ssr = true;
      const isSpaMode = false;
      const prerender = ["/*?"];
      const routeDiscovery = {"mode":"lazy","manifestPath":"/__manifest"};
      const publicPath = "/";
      const entry = { module: entryServer };
      const routes = {
        "root": {
          id: "root",
          parentId: undefined,
          path: "",
          index: undefined,
          caseSensitive: undefined,
          module: route0
        },
  "page": {
          id: "page",
          parentId: "root",
          path: undefined,
          index: true,
          caseSensitive: undefined,
          module: route1
        },
  "activity-logs/page": {
          id: "activity-logs/page",
          parentId: "root",
          path: "activity-logs",
          index: undefined,
          caseSensitive: undefined,
          module: route2
        },
  "companies/page": {
          id: "companies/page",
          parentId: "root",
          path: "companies",
          index: undefined,
          caseSensitive: undefined,
          module: route3
        },
  "dashboard/page": {
          id: "dashboard/page",
          parentId: "root",
          path: "dashboard",
          index: undefined,
          caseSensitive: undefined,
          module: route4
        },
  "vendors/page": {
          id: "vendors/page",
          parentId: "root",
          path: "vendors",
          index: undefined,
          caseSensitive: undefined,
          module: route5
        },
  "work-orders/page": {
          id: "work-orders/page",
          parentId: "root",
          path: "work-orders",
          index: undefined,
          caseSensitive: undefined,
          module: route6
        },
  "work-orders/[id]/page": {
          id: "work-orders/[id]/page",
          parentId: "root",
          path: "work-orders/:id",
          index: undefined,
          caseSensitive: undefined,
          module: route7
        },
  "work-orders/[id]/edit/page": {
          id: "work-orders/[id]/edit/page",
          parentId: "root",
          path: "work-orders/:id/edit",
          index: undefined,
          caseSensitive: undefined,
          module: route8
        },
  "work-orders/create/page": {
          id: "work-orders/create/page",
          parentId: "root",
          path: "work-orders/create",
          index: undefined,
          caseSensitive: undefined,
          module: route9
        },
  "__create/not-found": {
          id: "__create/not-found",
          parentId: "root",
          path: "*?",
          index: undefined,
          caseSensitive: undefined,
          module: route10
        }
      };

export { serverManifest as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
