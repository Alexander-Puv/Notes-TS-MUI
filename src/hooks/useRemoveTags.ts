export const useRemoveTags = (text: string) => {
    return text.replace(/<\/?[^>]+(>|$)/g, "")
}