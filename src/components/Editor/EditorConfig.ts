import Immutable from 'immutable';
import { DefaultDraftBlockRenderMap } from "draft-js";

export enum BlockType {
    h2 = 'header-two',
    h3 = 'header-three',
    h4 = 'header-four',
    list = 'unordered-list-item',
    orderList = 'ordered-list-item',
    cite = 'cite',
    default = 'unstyled',
}

const CUSTOM_BLOCK_RENDER_MAP = Immutable.Map({
    [BlockType.cite]: {
        element: 'cite',
    },
});

export const BLOCK_RENDER_MAP = DefaultDraftBlockRenderMap.merge(CUSTOM_BLOCK_RENDER_MAP);

export enum InlineStyle {
    BOLD = 'BOLD',
    ITALIC = 'ITALIC',
    UNDERLINE = 'UNDERLINE',
}