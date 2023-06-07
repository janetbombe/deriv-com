import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { TWhoWeAre } from './_types'
import MakeTrading from './components/_make-trading'
import Hero from './components/_hero'
import {
    DerivNumbers,
    OurLeadership,
    OurOffices,
    OurPrinciples,
    OurValues,
    WhoWeAreBanner,
} from './_lazy-load'
import ImageMarquee from './components/_image-marquee'
import device from 'themes/device'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl, localize } from 'components/localization'

const StartSeparator = styled.div`
    width: 0;
    height: 0;
    border-top: 120px solid transparent;
    border-right: 99vw solid var(--color-grey-30);

    @media ${device.tabletL} {
        border-top: 40px solid transparent;
    }
`
const EndSeparator = styled.div`
    width: 0;
    height: 0;
    border-left: 99vw solid var(--color-grey-30);
    border-bottom: 120px solid transparent;

    @media ${device.tabletL} {
        border-bottom: 40px solid transparent;
    }
`

const WhoWeAre = ({ data }: TWhoWeAre) => {
    const {
        hero,
        our_values,
        our_principles,
        our_leadership,
        deriv_in_numbers,
        slider_medias,
        our_locations,
        banner,
    } = data?.strapiWhoWeArePage || {}

    return (
        <Layout>
            <SEO
                title={localize('_t_Who we are | An Online Trading Platform | Deriv.com_t_')}
                description={localize(
                    '_t_Deriv is a pioneering and award-winning online trading platform that offers a wide selection of derivatives for anyone, anywhere to trade._t_',
                )}
            />
            <Hero hero={hero} />
            <MakeTrading hero={hero} />
            <StartSeparator />
            <OurValues our_values={our_values} />
            <EndSeparator />
            <OurPrinciples our_principles={our_principles} />
            <OurLeadership our_leadership={our_leadership} />
            <DerivNumbers deriv_in_numbers={deriv_in_numbers} />
            <ImageMarquee slider_medias={slider_medias} />
            <OurOffices our_locations={our_locations} />
            <WhoWeAreBanner banner={banner} />
        </Layout>
    )
}

export const query =
    process.env.STRAPI_BUILD == 'true' &&
    graphql`
        query {
            strapiWhoWeArePage {
                hero {
                    header
                    sub_header
                    first_paragraph
                    second_paragraph
                    third_paragraph
                    hero_image {
                        localFile {
                            publicURL
                        }
                    }
                    bg_desktop {
                        localFile {
                            publicURL
                        }
                    }
                    bg_mobile {
                        localFile {
                            publicURL
                        }
                    }
                }
                our_values {
                    header
                    values {
                        header
                        sub_header
                        image {
                            localFile {
                                publicURL
                            }
                        }
                    }
                }
                our_principles {
                    header
                    principles {
                        header
                        sub_header
                    }
                    button {
                        link_name
                        link_url
                    }
                }
                our_leadership {
                    header
                    leaders {
                        name
                        role
                        link_url
                        photo {
                            url
                            localFile {
                                publicURL
                            }
                        }
                    }
                }
                deriv_in_numbers {
                    header
                    sub_header
                    numbers {
                        description
                        number
                    }
                }
                our_locations {
                    header
                    numbers {
                        description
                        number
                    }
                    locations {
                        country_city
                        link_url
                    }
                    earth {
                        localFile {
                            publicURL
                        }
                    }
                    earth_mobile {
                        localFile {
                            publicURL
                        }
                    }
                }
                banner {
                    header
                    sub_header
                    link_name
                    link_url
                    bg_desktop {
                        localFile {
                            publicURL
                        }
                    }
                    bg_desktop_rtl {
                        localFile {
                            url
                            publicURL
                        }
                    }
                    bg_mobile {
                        localFile {
                            url
                            publicURL
                        }
                    }
                    bg_mobile_rtl {
                        localFile {
                            url
                            publicURL
                        }
                    }
                }
                slider_medias {
                    slider_1 {
                        localFile {
                            publicURL
                        }
                    }
                    slider_2 {
                        localFile {
                            publicURL
                        }
                    }
                    slider_3 {
                        localFile {
                            publicURL
                        }
                    }
                    slider_4 {
                        localFile {
                            publicURL
                        }
                    }
                    slider_5 {
                        localFile {
                            publicURL
                        }
                    }
                    slider_6 {
                        localFile {
                            publicURL
                        }
                    }
                }
            }
        }
    `

export default WithIntl()(WhoWeAre)
