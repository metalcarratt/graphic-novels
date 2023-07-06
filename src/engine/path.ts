export const pathRoot = () => process.env.NODE_ENV === 'production'
    ? '/graphic-novels/'
    : '/'