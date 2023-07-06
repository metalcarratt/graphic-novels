export const parseQueryString = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    return {
        novel: urlParams.get('n'),
        chapter: urlParams.get('ch')
    }
}