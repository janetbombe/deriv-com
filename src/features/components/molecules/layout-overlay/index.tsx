import React from 'react'
import pMinDelay from 'p-min-delay'
import loadable from '@loadable/component'
import { overlay_container } from './layout-overlay.module.scss'
import CfdWarningBanner from './cfd-warning-banner'
import Flex from 'features/components/atoms/flex-box'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import useFeatureFlags from 'components/hooks/use-feature-flags'

const LiveChatButton = loadable(() => pMinDelay(import('./live-chat-button'), 5000))
const WhatsappButton = loadable(() => pMinDelay(import('./whats-app-button'), 5000))
const CookieBanner = loadable(() => pMinDelay(import('./cookie-banner'), 5000))

const LayoutOverlay = () => {
    const is_rtl = useIsRtl()
    const [is_mounted] = usePageLoaded()
    const live_chat = useFeatureFlags('cs_chat_livechat')
    const whatsapp_chat = useFeatureFlags('cs_chat_whatsapp')
    return (
        <Flex.Box
            id="overlay-container"
            container="fixed"
            align="stretch"
            justify={'end'}
            direction="col"
            className={overlay_container}
        >
            <Flex.Box
                id="overlay-container"
                direction="col-reverse"
                md={{ direction: is_rtl ? 'row-reverse' : 'row' }}
                justify="between"
                align="end"
            >
                <Flex.Box justify={is_rtl ? 'end' : 'start'} basis="6-12" grow={'1'}>
                    <CookieBanner />
                </Flex.Box>
                <Flex.Box direction="col">
                    {live_chat && <LiveChatButton />}
                    {whatsapp_chat && <WhatsappButton />}
                </Flex.Box>
            </Flex.Box>
            {is_mounted && <CfdWarningBanner />}
        </Flex.Box>
    )
}

export default LayoutOverlay
