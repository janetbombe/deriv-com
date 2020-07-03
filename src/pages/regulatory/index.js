import React from 'react'
import styled, { css } from 'styled-components'
import EUgrid from './_eu-grid'
// import DocumentAccordion from './_document_accordion'
import Layout from 'components/layout/layout'
import { Header, Text, LinkText, Divider } from 'components/elements'
import {
    SEO,
    SectionContainer,
    GridContainer,
    CssGrid,
    CssGridColumn,
    SmallContainer,
} from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'
// Icons
import EU from 'images/svg/europe-map.svg'
// import SVG from 'images/svg/svg.svg'
import Vanuatu from 'images/svg/footer-vanuatu.svg'
import FSC from 'images/svg/fsc.svg'
import Labuan from 'images/svg/footer-labuan.svg'
import device from 'themes/device.js'

const svg_style = css`
    width: 16rem;
    height: 8rem;
`

const IcVanuatu = styled(Vanuatu)`
    ${svg_style}
`
const IcFSC = styled(FSC)`
    ${svg_style}
`
const IcLabuan = styled(Labuan)`
    ${svg_style}
`

const StyledHeader = styled(Header)`
    max-width: ${(props) => props.maxwidth || '100%'};
    margin: 0 auto;

    @media ${device.tabletS} {
        text-align: center;
    }
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${(props) => props.padding || '4rem 0 0'};

    ${Text} {
        @media ${device.tabletS} {
            text-align: center;
        }
    }

    @media ${device.tabletS} {
        text-align: center;
    }
`
const Europe = styled(EU)`
    max-width: 69rem;
    max-height: 63rem;
    width: 100%;
    height: 100%;
    margin: 0;
`
// will be added once the proper documents are ready
// const AccordionWrapper = styled(Flex)`
//     @media ${device.tabletL} {
//         padding: 0 4rem;
//     }
// `

const ResponsiveHeader = styled(StyledHeader)`
    @media ${device.mobileL} {
        font-size: 5rem;
    }
`

const Regulatory = () => (
    <Layout>
        <SEO
            title={localize('License and regulation information | Deriv')}
            description={localize(
                'Deriv operates under the jurisdiction of Binary.com which holds multiple licences to comply with regulatory requirements around the world.',
            )}
        />
        <SectionContainer>
            <GridContainer>
                <ResponsiveHeader as="h1" align="center" lh="8rem">
                    {localize('Regulatory information')}
                </ResponsiveHeader>
                <StyledHeader as="h5" align="center" weight="normal" padding="1.6rem 0 2rem">
                    {localize(
                        'The services offered on Deriv.com and Binary.com are provided by the Deriv Group. The group has several subsidiary companies that are licensed to operate Deriv.com and Binary.com in their registered jurisdictions.',
                    )}
                </StyledHeader>
                <StyledHeader as="h5" align="center" weight="normal">
                    {localize(
                        'Since 1999, the group has served traders around the world with integrity and reliability. We always hold ourselves to the highest ethical standards and regulatory requirements.',
                    )}
                </StyledHeader>
            </GridContainer>
        </SectionContainer>
        <Divider />
        <SectionContainer padding="8rem 0 0">
            <SmallContainer fd="column">
                <StyledHeader as="h3" align="center" mb="4rem" lh="4rem">
                    {localize('Deriv Investments (Europe) Limited')}
                </StyledHeader>
                <Box>
                    <Text>
                        <Localize
                            translate_text="Deriv Investments (Europe) Limited, W Business Centre, Level 3, Triq Dun Karm, Birkirkara, BKR 9033, Malta, is licensed and regulated as a Category 3 Investment Services provider by the Malta Financial Services Authority (<0>licence no. IS/70156</0>)."
                            components={[
                                <LinkText
                                    color="black"
                                    key={0}
                                    weight="bold"
                                    target="_blank"
                                    href="/WS-Binary-Investments-Europe-Limited.pdf"
                                    rel="noopener noreferrer"
                                />,
                            ]}
                        />
                    </Text>
                    <Text mt="2rem">
                        {localize(
                            'Clients in the European Union who wish to trade investment products will have their accounts opened under Deriv Investments (Europe) Ltd.',
                        )}
                    </Text>
                </Box>
            </SmallContainer>
        </SectionContainer>
        <SectionContainer padding="2.4rem 0 0">
            <GridContainer>
                <CssGrid
                    columns="minmax(10rem, 69rem) minmax(45rem, 1fr)"
                    column_gap="2.4rem"
                    tablet_columns="1fr 1fr"
                    mobile_columns="1fr"
                    mobile_row_gap="2rem"
                >
                    <CssGridColumn>
                        <Europe />
                    </CssGridColumn>
                    <CssGridColumn padding="0.8rem 0 0">
                        <EUgrid />
                    </CssGridColumn>
                </CssGrid>
            </GridContainer>
        </SectionContainer>
        <SectionContainer padding="2.4rem 0 0">
            <SmallContainer fd="column">
                <Box padding="0 0 4rem">
                    <Text lh="1.55" max_width="79.2rem">
                        {localize(
                            'Deriv Investments (Europe) Limited is entitled to provide services in another EU Member State through EU passporting rights. Above is a list of EU countries that have access to Deriv.com via EU passporting rights.',
                        )}
                    </Text>
                </Box>
            </SmallContainer>
        </SectionContainer>
        <SectionContainer padding="0 0 4rem 0">
            {/* will be added once the proper documents are ready */}
            {/* <AccordionWrapper>
                <DocumentAccordion />
            </AccordionWrapper> */}
        </SectionContainer>
        <SectionContainer padding="0">
            <SmallContainer>
                <Box padding="0 0 8rem">
                    <CssGrid
                        height="auto"
                        columns="15.4rem 1fr"
                        column_gap="3.2rem"
                        row_gap="4rem"
                        tablet_columns="1fr 5fr"
                        mobile_columns="1fr"
                    >
                        <CssGridColumn align="flex-start">
                            <IcVanuatu />
                        </CssGridColumn>
                        <CssGridColumn>
                            <StyledHeader lh="4rem" as="h4">
                                {localize('Deriv (V) Ltd')}
                            </StyledHeader>
                            <Text mt="0.8rem" mb="1.6rem">
                                <Localize
                                    translate_text="Deriv (V) Ltd, Govant Building, Port Vila, PO Box 1276, Vanuatu, Republic of Vanuatu, is licensed and regulated by the Vanuatu Financial Services Commission — <0>view licence</0>."
                                    components={[
                                        <LinkText
                                            key={0}
                                            color="red"
                                            weight="bold"
                                            target="_blank"
                                            href="/Vanuatu-Financial-Services-Commission.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                            <Text>
                                {localize(
                                    'Clients from the rest of the world (except for restricted countries such as the USA, Canada, Hong Kong) will have their FX and CFD Metatrader 5 accounts opened under Deriv (V) Ltd.',
                                )}
                            </Text>
                        </CssGridColumn>
                        <CssGridColumn align="flex-start">
                            <IcFSC />
                        </CssGridColumn>
                        <CssGridColumn>
                            <StyledHeader lh="4rem" as="h4">
                                {localize('Binary (BVI) Ltd')}
                            </StyledHeader>
                            <Text lh="1.55" mt="0.8rem">
                                <Localize
                                    translate_text="Binary (BVI) Ltd, Kingston Chambers, P.O. Box 173, Road Town, Tortola, British Virgin Islands. Licensed and regulated by the British Virgin Islands Financial Services Commission - <0>view licence</0>."
                                    components={[
                                        <LinkText
                                            key={0}
                                            color="red"
                                            weight="bold"
                                            target="_blank"
                                            href="/DBVI_license.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                        </CssGridColumn>
                        <CssGridColumn align="flex-start">
                            <IcLabuan />
                        </CssGridColumn>
                        <CssGridColumn>
                            <StyledHeader lh="4rem" as="h4">
                                {localize('Binary (FX) Ltd')}
                            </StyledHeader>
                            <Text lh="1.55" mt="0.8rem">
                                <Localize
                                    translate_text="Binary (FX) Ltd., Lot No. F16, First Floor, Paragon Labuan, Jalan Tun Mustapha, 87000 Federal Territory of Labuan, Malaysia. Licensed and regulated by the Labuan Financial Services Authority to carry on a money-broking business <0>licence no. MB/18/0024</0>."
                                    components={[
                                        <LinkText
                                            key={0}
                                            color="red"
                                            weight="bold"
                                            target="_blank"
                                            href="/Labuan-license.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                            <Text lh="1.55" mt="2rem">
                                {localize(
                                    'Clients who wish to trade FX and CFDs with straight-through processing will have their account opened with Binary (FX) Ltd.',
                                )}
                            </Text>
                        </CssGridColumn>
                        {/* Will be added later */}
                        {/* <CssGridColumn align="center">
                            <SVG />
                        </CssGridColumn> */}

                        {/* <CssGridColumn>
                            <StyledHeader size="3.6rem" lh="4.5rem" as='h4'>
                                {localize('Binary (SVG) LLC')}
                            </StyledHeader>
                            <Text lh="1.55" mt="0.8rem">
                                {localize(
                                    'Binary (SVG) LLC, Hinds Buildings, Kingstown, St. Vincent and the Grenadines; company number 25299 BC 2019.',
                                )}
                            </Text>
                        </CssGridColumn> */}
                    </CssGrid>
                </Box>
            </SmallContainer>
        </SectionContainer>
    </Layout>
)

export default WithIntl()(Regulatory)
