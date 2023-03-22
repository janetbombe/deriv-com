import React, { ReactNode } from 'react'
import Footer from '../footer'
import apiManager from 'features/websocket'
import EURedirect, { useModal } from 'components/custom/_eu-redirect-modal'
import { ModalPayloadType } from 'components/layout/layout'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import { LocationProvider } from 'components/layout/location-context'
import PpcProvider from 'features/contexts/ppc-campaign/ppc.provider'
import { isBrowser } from 'common/utility'
import NonEuRedirectAlert from 'features/components/molecules/non-eu-redirect-alert'
import BrowserUpdateAlert from 'features/components/molecules/browser-update-alert'
import LayoutOverlay from 'features/components/molecules/layout-overlay'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
import 'features/styles/app.scss'
interface LayoutProps {
    is_ppc?: boolean
    is_ppc_redirect?: boolean
    children: ReactNode
}

if (isBrowser()) {
    apiManager.init()
}

const Layout = ({ children, is_ppc = false, is_ppc_redirect = false }: LayoutProps) => {
    const [show_modal, toggleModal, closeModal] = useModal()
    const [modal_payload, setModalPayload] = React.useState({} as ModalPayloadType)
    const { has_platform } = usePlatformQueryParam()

    //Handle page layout when redirection from mobile app.
    if (has_platform) {
        return <>{children}</>
    }

    return (
        <PpcProvider is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect}>
            <LocationProvider toggleModal={toggleModal} setModalPayload={setModalPayload}>
                <main>{children}</main>
                <Footer />
                <EURedirect
                    toggle={toggleModal}
                    is_open={show_modal}
                    closeModal={closeModal}
                    to={modal_payload.to}
                    target={modal_payload.target}
                    rel={modal_payload.rel}
                    ref={modal_payload.ref}
                    aria_label={modal_payload.aria_label}
                />
                <NonEuRedirectAlert />
                <BrowserUpdateAlert />
                <LayoutOverlay />
            </LocationProvider>
        </PpcProvider>
    )
}

export default Layout
