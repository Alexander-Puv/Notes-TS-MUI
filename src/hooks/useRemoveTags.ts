export const useRemoveTags = (text: string | undefined) => {
    return text ?  text.replace(/<\/?[^>]+(>|$)/g, "")
    : ''
}