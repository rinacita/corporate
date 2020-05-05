import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_axios_3e0a26c4 from 'nuxt_plugin_axios_3e0a26c4' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_scrollLink_10e9e47a from 'nuxt_plugin_scrollLink_10e9e47a' // Source: ../plugins/scrollLink.js (mode: 'all')
import nuxt_plugin_scrollEvent_546de800 from 'nuxt_plugin_scrollEvent_546de800' // Source: ../plugins/scrollEvent.js (mode: 'all')
import nuxt_plugin_wow_2d4c4024 from 'nuxt_plugin_wow_2d4c4024' // Source: ../plugins/wow.js (mode: 'all')
import nuxt_plugin_elementui_72a9ed1c from 'nuxt_plugin_elementui_72a9ed1c' // Source: ../plugins/element-ui.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp (ssrContext) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"RINACITA, inc.","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, viewport-fit=cover"},{"hid":"description","name":"description","content":"感動とワクワクで世界を彩る"},{"hid":"og:site_name","property":"og:site_name","content":"RINACITA, inc."},{"hid":"og:type","property":"og:type","content":"website"},{"hid":"og:url","property":"og:url","content":"http:\u002F\u002Frinacita.com\u002F"},{"hid":"og:title","property":"og:title","content":"RINACITA, inc."},{"hid":"og:description","property":"og:description","content":"感動とワクワクで世界を彩る"},{"hid":"og:image","property":"og:image","content":"http:\u002F\u002Frinacita.com\u002Fogp.png"},{"name":"twitter:card","content":"summary_large_image"},{"name":"twitter:site","content":"@rinacita_jp"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Fuse.typekit.net\u002Ffcu2hbe.css"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Noto+Sans+JP:700,900&amp;subset=japanese"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fyakuhanjp@3.0.0\u002Fdist\u002Fcss\u002Fyakuhanjp.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.6.3\u002Fcss\u002Fall.css","integrity":"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s\u002F","crossorigin":"anonymous"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  const inject = function (key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Plugin execution

  if (typeof nuxt_plugin_axios_3e0a26c4 === 'function') {
    await nuxt_plugin_axios_3e0a26c4(app.context, inject)
  }

  if (typeof nuxt_plugin_scrollLink_10e9e47a === 'function') {
    await nuxt_plugin_scrollLink_10e9e47a(app.context, inject)
  }

  if (typeof nuxt_plugin_scrollEvent_546de800 === 'function') {
    await nuxt_plugin_scrollEvent_546de800(app.context, inject)
  }

  if (typeof nuxt_plugin_wow_2d4c4024 === 'function') {
    await nuxt_plugin_wow_2d4c4024(app.context, inject)
  }

  if (typeof nuxt_plugin_elementui_72a9ed1c === 'function') {
    await nuxt_plugin_elementui_72a9ed1c(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
