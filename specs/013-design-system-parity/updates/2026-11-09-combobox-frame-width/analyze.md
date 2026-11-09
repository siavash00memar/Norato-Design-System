# Analyze — Combobox preview frame width

- The desktop frame uses `inline-size: min(100%, var(--norato-combobox-preview-frame-inline-size))`; at the measured page width, the parent column limits the frame before its 640px token cap.
- The later mobile override clamps to available viewport width and the existing 328px token.
- Earlier matched desktop evidence showed a 4px frame shortfall while the 324px field and 300px frame height already matched. Other specimens' 2px allowance is not enough evidence to reuse unchanged here.
- Current local render after the 1px allowance is 632.98×300px at 1536×703; reference tab is at 1280×720, so exact comparison remains unverified. Keep the correction scoped to the frame and leave responsive checks open.
