import { EditorState, RichUtils } from "draft-js";
import { useCallback, useMemo, useState } from "react";
import { BlockType, InlineStyle } from "./EditorConfig";

type EditorApi = {
    text: EditorState,
    onChange: (text: EditorState) => void,
    toggleBlockType: (blockType: BlockType) => void,
    currentBlockType: BlockType,
    toggleInlineStyle: (inlineStyle: InlineStyle) => void,
    hasInlineStyle: (inlineStyle: InlineStyle) => boolean,
}

export const useEditor = (html?: string): EditorApi => {
    const [text, setText] = useState(() => EditorState.createEmpty());
    const toggleBlockType = useCallback((blockType: BlockType) => {
        setText((currentState) => RichUtils.toggleBlockType(currentState, blockType))
    }, []);

    const currentBlockType = useMemo(() => {
        const selection = text.getSelection();
        const content = text.getCurrentContent();
        const block = content.getBlockForKey(selection.getStartKey());
        return block.getType() as BlockType;
    }, [text]);

    const toggleInlineStyle = useCallback((inlineStyle: InlineStyle) => {
        setText((currentState) => RichUtils.toggleInlineStyle(currentState, inlineStyle))
    }, []);
      
    const hasInlineStyle = useCallback((inlineStyle: InlineStyle) => {
        const currentStyle = text.getCurrentInlineStyle();
        return currentStyle.has(inlineStyle);
    }, [text]);

    return useMemo(() => ({
        text,
        onChange: setText,
        toggleBlockType,
        currentBlockType,
        toggleInlineStyle,
        hasInlineStyle,
    }), [text])
}