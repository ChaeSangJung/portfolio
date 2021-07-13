// desktop first

const size = {
    mobileS: '440px',
    mobile: '770px',
    tabletS: '1024px',
    tabletM: '1220px',
    tabletL: '1280px',
    laptop: '1460px',
    desktop: '1700px',
}

const theme = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobile: `(max-width: ${size.mobile})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tabletM: `(max-width: ${size.tabletM})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptop: `(max-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
}

export default theme;