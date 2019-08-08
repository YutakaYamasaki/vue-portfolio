import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter,faFacebook, faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)
