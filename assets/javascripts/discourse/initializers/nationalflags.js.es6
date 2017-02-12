import {h} from 'virtual-dom';
import {withPluginApi} from 'discourse/lib/plugin-api';
import {ajax} from 'discourse/lib/ajax'

function initializeGroupBadges(api, siteSettings) {
  const groupbadgesEnabled = siteSettings.groupbadges_enabled;

  if (!groupbadgesEnabled) {
    return;
  }

  api.decorateWidget('poster-name:after', dec => {
    let result = '';

    if (typeof dec.attrs !== 'undefined' && typeof dec.attrs.userCustomFields !== 'undefined' && typeof dec.attrs.userCustomFields.nationalflag_iso !== 'undefined') {
      //console.log('found!')
      result = dec.attrs.userCustomFields.nationalflag_iso;
    } else {
      //console.log('not found!')
      result = 'none'
    }

    return dec.h('img', {
      className: "nationalflag-post",
      attributes: {
        src: "/plugins/discourse-nationalflags/images/nationalflags/" + result + ".png"
      }
    });
  });
}

export default {
  name : 'nationalflag',
  initialize(container) {
    const siteSettings = container.lookup('site-settings:main');
    withPluginApi('0.1', api => initializeGroupBadges(api, siteSettings));
  }
};
