import React, { FC } from "react";
import { InlineStyle } from "./EditorConfig";
import { useEditor } from "./useEditor";

const INLINE_STYLES_CODES = Object.values(InlineStyle);

export const ToolPanel: FC = () => {
  const { toggleInlineStyle, hasInlineStyle } = useEditor();
  
  return (
    <div className="tool-panel">
      ...
      {INLINE_STYLES_CODES.map((code) => {
        const onMouseDown = (e: React.MouseEvent) => {
          e.preventDefault();
          toggleInlineStyle(code);
        };
    
        return (
          <button
            key={code}
            /* className={hasInlineStyle(code) && "tool-panel__item_active"} */
            onMouseDown={onMouseDown}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
};