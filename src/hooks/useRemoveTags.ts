export const useRemoveTags = (text: string) => {
    text = text.replace(/<\/?[^>]+(>|$)/g, "");
    return text;
}